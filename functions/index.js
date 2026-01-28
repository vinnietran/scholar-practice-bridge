const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();

const config = functions.config();
const sendgridConfig = config.sendgrid || {};

if (sendgridConfig.api_key) {
  sgMail.setApiKey(sendgridConfig.api_key);
} else {
  console.warn("SendGrid API key not set in functions.config().sendgrid.api_key");
}

const DEFAULT_ALLOWED_ORIGINS = [
  "http://localhost:8000",
  "https://vinnietran.github.io",
  "https://joshua-j-beck.com",
  "https://www.joshua-j-beck.com"
];

const extraOrigins = (sendgridConfig.allowed_origins || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = new Set([...DEFAULT_ALLOWED_ORIGINS, ...extraOrigins]);

function isGithubPagesOrigin(origin) {
  try {
    const url = new URL(origin);
    return url.protocol === "https:" && url.hostname.endsWith(".github.io");
  } catch (err) {
    return false;
  }
}

const corsHandler = cors({
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
      return;
    }

    if (allowedOrigins.has(origin) || isGithubPagesOrigin(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error("Not allowed by CORS"));
  },
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

function normalize(value, maxLength) {
  if (!value) return "";
  const str = String(value).trim();
  if (!maxLength) return str;
  return str.length > maxLength ? str.slice(0, maxLength) : str;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(payload) {
  const theme = {
    primary: "#229186",
    secondary: "#0d4073",
    muted: "#f3f5f7",
    text: "#363d49",
  };

  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Organization", payload.organization || "—"],
    ["Subject", payload.subject],
    ["Message", payload.message],
    ["Submitted", payload.timestamp],
    ["Origin", payload.origin || "—"],
    ["User Agent", payload.userAgent || "—"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: ${theme.text}; background: ${theme.muted}; border-top: 1px solid #e6e9ee; width: 160px; vertical-align: top;">${escapeHtml(
            label
          )}</td>
          <td style="padding: 10px 14px; color: ${theme.text}; border-top: 1px solid #e6e9ee;">${escapeHtml(
            value
          )}</td>
        </tr>
      `
    )
    .join("");

  return `
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin: 0; padding: 0; background: ${theme.muted}; font-family: 'Inter', Arial, sans-serif; color: ${theme.text};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: ${theme.muted}; padding: 24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 8px 24px rgba(13, 64, 115, 0.08);">
            <tr>
              <td style="padding: 24px; background: ${theme.secondary}; background-image: linear-gradient(135deg, ${theme.secondary} 0%, ${theme.primary} 100%); color: #ffffff;">
                <div style="font-size: 18px; letter-spacing: 0.5px; text-transform: uppercase; font-weight: 600;">Scholar Practice Bridge</div>
                <div style="font-size: 28px; font-weight: 700; margin-top: 6px;">New Contact Form Submission</div>
              </td>
            </tr>
            <tr>
              <td style="padding: 22px 24px 10px;">
                <p style="margin: 0 0 8px; font-size: 16px; color: ${theme.text};">You have received a new message from the website contact form.</p>
                <p style="margin: 0; font-size: 14px; color: #6b7280;">Reply directly to this email to respond.</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 24px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e6e9ee; border-radius: 6px; overflow: hidden;">
                  ${rowsHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 24px 28px; font-size: 12px; color: #6b7280;">
                This email was generated automatically by the Scholarship contact form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

function buildTextEmail(payload) {
  return [
    "New Contact Form Submission",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization || "—"}`,
    `Subject: ${payload.subject}`,
    "",
    "Message:",
    payload.message,
    "",
    `Submitted: ${payload.timestamp}`,
    `Origin: ${payload.origin || "—"}`,
    `User Agent: ${payload.userAgent || "—"}`,
  ].join("\n");
}

exports.sendContactEmailJjb = functions
  .region("us-central1")
  .https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
      if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
      }

      if (req.method !== "POST") {
        res.status(405).json({ error: "Method Not Allowed" });
        return;
      }

      const payload = {
        name: normalize(req.body?.name, 100),
        email: normalize(req.body?.email, 255),
        organization: normalize(req.body?.organization, 200),
        subject: normalize(req.body?.subject, 200),
        message: normalize(req.body?.message, 5000),
        timestamp: new Date().toISOString(),
        origin: req.get("origin"),
        userAgent: req.get("user-agent"),
      };

      if (!payload.name || !payload.email || !payload.subject || !payload.message) {
        res.status(400).json({ error: "Missing required fields." });
        return;
      }

      if (!sendgridConfig.from_email || !sendgridConfig.jjb_to_email) {
        res.status(500).json({ error: "SendGrid email configuration is missing." });
        return;
      }

      if (!sendgridConfig.api_key) {
        res.status(500).json({ error: "SendGrid API key is missing." });
        return;
      }

      try {
        const msg = {
          to: sendgridConfig.jjb_to_email,
          from: sendgridConfig.from_email,
          replyTo: {
            email: payload.email,
            name: payload.name,
          },
          subject: `Contact Form: ${payload.subject}`,
          text: buildTextEmail(payload),
          html: buildEmailHtml(payload),
        };

        await sgMail.send(msg);
        res.status(200).json({ ok: true });
      } catch (err) {
        console.error("SendGrid error", err);
        res.status(500).json({ error: "Email send failed." });
      }
    });
  });
