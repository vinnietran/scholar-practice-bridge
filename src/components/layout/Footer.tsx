import { Link } from "react-router-dom";
import { Mail, Linkedin, BookOpen } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Scholarship", href: "/scholarship" },
    { name: "Books & Resources", href: "/books" },
    { name: "Consulting & Speaking", href: "/consulting" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Email",
      href: "mailto:jbeck@shepherd.edu",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joshuajbeck",
      icon: Linkedin,
    },
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?user=ivGChckAAAAJ&hl=en",
      icon: BookOpen,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Joshua J. Beck, Ph.D.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Assistant Professor of Business Administration at Shepherd University. 
              Scholar-practitioner bridging rigorous research and real-world impact 
              in management, leadership, and organizational ethics.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Shepherd University<br />
                College of Business<br />
                301 North King Street<br />
                Shepherdstown, WV 25443
              </p>
              <div className="flex gap-4 pt-2">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={item.name}
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Joshua J. Beck, Ph.D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
