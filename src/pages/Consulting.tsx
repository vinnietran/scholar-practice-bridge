import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  Target, 
  MessageSquare, 
  Award,
  Building2,
  Lightbulb,
  BarChart3,
  Heart,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ClientLogoCarousel } from "@/components/ClientLogoCarousel";
import drbLogo from "@/assets/drb-consulting-logo.png";
import talloLogo from "@/assets/tallo-logo.png";
import wealthfluentLogo from "@/assets/wealthfluent-logo.png";
import waffleHouseLogo from "@/assets/waffle-house-logo.jpg";
import klukLogo from "@/assets/kluk-logo.jpg";
import harvastTrailsLogo from "@/assets/harvast-trails-logo.png";
import argoMediaLogo from "@/assets/argo-media-logo.png";

const services = [
  {
    icon: BarChart3,
    title: "Organizational Assessments",
    description: "Comprehensive evaluations of leadership effectiveness, organizational culture, communication patterns, ethics climate, and strategic alignment.",
    details: [
      "Leadership capability assessment",
      "Culture and climate surveys",
      "Communication audit",
      "Ethics and values alignment",
      "Strategic planning review",
    ],
  },
  {
    icon: Users,
    title: "Management & Leadership Consulting",
    description: "Strategic guidance for organizations seeking to develop leadership capacity, improve team dynamics, and enhance organizational performance.",
    details: [
      "Leadership development programs",
      "Team effectiveness initiatives",
      "Change management support",
      "Succession planning",
      "Performance optimization",
    ],
  },
  {
    icon: Target,
    title: "Executive & Management Coaching",
    description: "One-on-one coaching engagements designed to accelerate leadership growth, enhance decision-making, and achieve professional goals.",
    details: [
      "Executive coaching",
      "New leader onboarding",
      "Career development planning",
      "Leadership style assessment",
      "Personal effectiveness",
    ],
  },
  {
    icon: Lightbulb,
    title: "Workshops & Training",
    description: "Customized learning experiences that build practical skills and deepen understanding of critical leadership and management concepts.",
    details: [
      "Leadership development workshops",
      "Ethics and decision-making training",
      "Communication skills programs",
      "Team building sessions",
      "Strategic thinking seminars",
    ],
  },
];

const speakingTopics = [
  {
    icon: Award,
    title: "Leadership Theories and Practice",
    description: "From academic foundations to practical application—what the research says about effective leadership and how to implement it.",
  },
  {
    icon: Heart,
    title: "Ethical Leadership & Decision-Making",
    description: "Building organizations of integrity through principled leadership and values-based management.",
  },
  {
    icon: MessageSquare,
    title: "Organizational Communication",
    description: "How leaders can enhance engagement, motivation, and performance through purposeful communication.",
  },
  {
    icon: Building2,
    title: "Authentic Leadership",
    description: "The power of authenticity in leadership—building trust, inspiring teams, and creating lasting impact.",
  },
];

const clients = [
  { name: "Waffle House", logo: waffleHouseLogo },
  { name: "Tallo", logo: talloLogo, url: "https://tallo.com" },
  { name: "WealthFluent", logo: wealthfluentLogo, url: "https://wealthfluent.com" },
  { name: "Harvest Trails Co.", logo: harvastTrailsLogo },
  { name: "Argo Media", logo: argoMediaLogo },
  { name: "Point O Woods Golf & Country Club" },
  { name: "KLUK Custom Calls", logo: klukLogo, logoSize: "lg" as const },
];

const outcomes = [
  "Enhanced leadership effectiveness at all organizational levels",
  "Improved employee engagement and satisfaction",
  "Stronger ethical culture and values alignment",
  "More effective internal communication",
  "Clearer strategic direction and execution",
  "Sustainable organizational change",
];

export default function Consulting() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-white/80 font-medium tracking-wide uppercase text-sm mb-2">
              Consulting & Executive Education
            </p>
            <h1 className="text-white mb-6">
              Bridging Research and Results
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              I partner with business leaders, nonprofit executives, and public-sector organizations 
              to translate rigorous research into actionable strategies that drive meaningful, 
              sustainable improvement.
            </p>
            <Button 
              variant="hero" 
              asChild 
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* DRB Consulting */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <img 
              src={drbLogo} 
              alt="DRB Management & Leadership Consulting LLC" 
              className="h-32 md:h-40 mx-auto mb-6"
            />
            <p className="text-muted-foreground text-lg">
              Through DRB Consulting, I provide strategic direction, executive coaching, and 
              tailored leadership programs to enhance organizational performance and align 
              talent with business objectives for growth and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card-elevated p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="mb-4">Keynote Speaking</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Engaging presentations that combine research-backed insights with practical 
              takeaways for leaders at all levels.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakingTopics.map((topic) => (
              <div key={topic.title} className="card-elevated p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <topic.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2">{topic.title}</h3>
                <p className="text-muted-foreground text-sm">{topic.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Request a Keynote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">Outcomes-Focused Approach</h2>
              <p className="text-muted-foreground text-lg mb-6">
                My consulting engagements are designed to deliver measurable results. 
                By combining academic rigor with practical experience, I help organizations 
                achieve lasting, meaningful change.
              </p>
              <ul className="space-y-3">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-elevated p-8">
              <h3 className="text-xl mb-6 text-center">Select Clients</h3>
              <ClientLogoCarousel clients={clients} interval={3000} />
              <p className="text-muted-foreground text-sm mt-6 text-center">
                From nationally recognized brands to growing local businesses, I work with 
                organizations committed to excellence and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Every engagement begins with a conversation. Let's discuss your organization's 
            challenges and explore how we can work together to achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
