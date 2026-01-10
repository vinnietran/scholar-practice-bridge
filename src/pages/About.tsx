import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import professorHeadshot from "@/assets/professor-headshot.jpg";

const education = [
  {
    degree: "Ph.D. Instructional Management and Leadership",
    institution: "Robert Morris University",
    year: "2020",
  },
  {
    degree: "Master of Business Administration",
    institution: "Saint Francis University",
    year: "2017",
  },
  {
    degree: "Bachelor of Arts in Management and Accounting",
    institution: "University of Pittsburgh",
    year: "2015",
  },
];

const certificates = [
  "Artificial Intelligence and Career Empowerment – University of Maryland",
  "The Science of Happiness at Work – UC Berkeley",
  "Strategic Management Professional Certificate – UPenn",
];

const awards = [
  {
    title: "George Washington Chair of Living Ethics",
    organization: "Shepherd University",
    year: "2024",
    description: "Managing a $200,000 endowed fund, overseeing scholarship competitions, public lectures, and community initiatives",
  },
  {
    title: "Phi Beta Delta Honor Society",
    organization: "International Scholars",
    year: "2025",
    description: "Recognition for outstanding academic achievement and commitment to international education",
  },
  {
    title: "Best Paper Award",
    organization: "National Association of Business, Economics, and Technology",
    year: "2022",
    description: "Research on management and communication dynamics",
  },
];

const affiliations = [
  "Academy of Management",
  "American Management Association",
  "Society for Human Resource Management",
  "International Society for Professional Innovation Management",
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-[var(--subtle-gradient)]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <img
                  src={professorHeadshot}
                  alt="Dr. Joshua J. Beck"
                  className="rounded-xl shadow-elevated w-full max-w-sm mx-auto lg:mx-0 object-contain"
                />
                <div className="mt-6 text-center lg:text-left">
                  <p className="text-sm text-muted-foreground">
                    <a 
                      href="mailto:jbeck@shepherd.edu" 
                      className="link-underline"
                    >
                      jbeck@shepherd.edu
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    (814) 421-0050
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
                  About
                </p>
                <h1 className="mb-6">Dr. Joshua J. Beck</h1>
                <div className="prose-academic text-lg space-y-4">
                  <p>
                    I am an Assistant Professor of Business Administration at Shepherd University 
                    and the George Washington Chair of Living Ethics, where I teach graduate and 
                    undergraduate courses in management, leadership, strategy, and business ethics.
                  </p>
                  <p>
                    My work bridges the gap between academic scholarship and practical application. 
                    I believe that rigorous research should inform real-world decision-making, and 
                    that the best leadership practices emerge from a deep understanding of both 
                    theory and context.
                  </p>
                  <p>
                    As a scholar-practitioner, I combine peer-reviewed research with hands-on 
                    consulting experience to help organizations navigate complex challenges in 
                    leadership development, organizational communication, and ethical 
                    decision-making.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid sm:grid-cols-3 gap-6 py-8 border-y border-border">
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-serif font-bold text-primary">10+</p>
                  <p className="text-muted-foreground text-sm">Years in Higher Education</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-serif font-bold text-primary">15+</p>
                  <p className="text-muted-foreground text-sm">Publications & Presentations</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-serif font-bold text-primary">$200K</p>
                  <p className="text-muted-foreground text-sm">Endowed Chair Fund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2>Education</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu) => (
              <div key={edu.degree} className="card-elevated p-6">
                <h3 className="text-lg mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg mb-4">Professional Certificates</h3>
            <div className="flex flex-wrap gap-2">
              {certificates.map((cert) => (
                <span key={cert} className="px-3 py-1.5 bg-secondary rounded-full text-sm text-secondary-foreground">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Honors */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2>Honors & Awards</h2>
          </div>
          
          <div className="space-y-6">
            {awards.map((award) => (
              <div key={award.title} className="card-elevated p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{award.title}</h3>
                    <p className="text-primary font-medium">{award.organization}</p>
                    <p className="text-muted-foreground mt-2">{award.description}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2>Professional Experience</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4">Academic Positions</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-semibold">Assistant Professor of Business Administration</p>
                  <p className="text-primary">Shepherd University, 2023–Present</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <p className="font-semibold">Assistant Professor of Management</p>
                  <p className="text-muted-foreground">West Virginia Wesleyan College, 2020–2023</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-4">Consulting & Industry</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-semibold">Founder & CEO</p>
                  <p className="text-primary">DRB Management and Leadership Consulting, 2023–Present</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Strategic direction, executive coaching, and leadership programs for organizations 
                    including Waffle House, Point O Woods Golf & Country Club, and others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2>Professional Affiliations</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {affiliations.map((org) => (
              <span key={org} className="px-4 py-2 bg-card rounded-lg border border-border text-foreground">
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Interested in academic collaboration, consulting services, or speaking engagements?
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">
              Contact for Collaboration
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
