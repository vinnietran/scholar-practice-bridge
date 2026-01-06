import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import professorHeadshot from "@/assets/professor-headshot.jpg";

const highlights = [
  {
    icon: BookOpen,
    title: "Peer-Reviewed Research",
    description: "Published scholarship in leadership, ethics, and organizational communication",
  },
  {
    icon: Users,
    title: "Executive Consulting",
    description: "Strategic guidance for business, nonprofit, and public-sector organizations",
  },
  {
    icon: Award,
    title: "Award-Winning Educator",
    description: "George Washington Chair of Living Ethics at Shepherd University",
  },
  {
    icon: MessageSquare,
    title: "Keynote Speaking",
    description: "Engaging presentations on leadership, ethics, and organizational excellence",
  },
];

const recentPublications = [
  {
    title: "Ethical Horizons in the Workplace: Perspectives from MBA Students and Current Employees",
    journal: "Business Ethics and Leadership",
    year: "2025",
  },
  {
    title: "Communicating purpose enhances job satisfaction: A path-goal and leader-member exchange perspective",
    journal: "Journal of Behavioral Studies in Business",
    year: "2024",
  },
  {
    title: "Management and leaders understanding communication dynamics: The impact of internal communications",
    journal: "Journal of Business, Economics and Technology",
    year: "2023",
    award: "Best Paper Award",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--hero-gradient)] text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(210,60%,40%,0.3)_0%,_transparent_60%)]" />
        
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20 md:py-28">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <p className="text-primary-foreground/70 font-medium tracking-wide uppercase text-sm">
                  Scholar · Educator · Consultant
                </p>
                <h1 className="text-primary-foreground text-balance">
                  Joshua J. Beck, Ph.D.
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/80 font-light leading-relaxed">
                  Bridging Rigorous Scholarship and Real-World Impact in Management, Leadership, and Organizational Ethics
                </p>
              </div>
              
              <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-xl">
                Assistant Professor of Business Administration at Shepherd University and 
                George Washington Chair of Living Ethics, translating research into actionable 
                strategies for organizations seeking sustainable excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link to="/scholarship">
                    Explore My Research
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="heroOutline" asChild>
                  <Link to="/consulting">
                    Inquire About Consulting
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in-delay-2 hidden lg:block">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 bg-primary-foreground/10 rounded-2xl blur-2xl" />
                <img
                  src={professorHeadshot}
                  alt="Dr. Joshua J. Beck, Professor of Management and Leadership"
                  className="relative rounded-xl shadow-elevated w-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">A Scholar-Practitioner Approach</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combining academic rigor with practical application to help leaders and 
              organizations achieve meaningful, sustainable success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated p-6 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="mb-2">Recent Scholarship</h2>
              <p className="text-muted-foreground">
                Peer-reviewed research advancing our understanding of leadership and organizations
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/scholarship">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {recentPublications.map((pub) => (
              <div
                key={pub.title}
                className="card-elevated p-6 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-serif mb-1">{pub.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {pub.journal} ({pub.year})
                  </p>
                </div>
                {pub.award && (
                  <span className="badge-accent whitespace-nowrap">
                    <Award className="h-3.5 w-3.5 mr-1" />
                    {pub.award}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Ready to Collaborate?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Whether you're seeking academic collaboration, consulting services, 
            or a keynote speaker, I welcome the opportunity to discuss how we 
            can work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Start a Conversation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Learn More About Me
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
