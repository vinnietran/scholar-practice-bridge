import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Award, FileText, Presentation, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const researchAreas = [
  "Leadership Theory and Practice",
  "Organizational Communication",
  "Business Ethics and Ethical Leadership",
  "Authentic Leadership",
  "Management Strategy",
  "Employee Motivation and Job Satisfaction",
];

const publications = [
  {
    title: "Ethical Horizons in the Workplace: Perspectives from MBA Students and Current Employees",
    authors: "Beck, J. J., & Dodson, T. M.",
    journal: "Business Ethics and Leadership",
    year: "2025",
    volume: "9(1), 127-142",
  },
  {
    title: "Communicating purpose enhances job satisfaction: A path-goal and leader-member exchange perspective",
    authors: "Beck, J. J. & Draper, J.",
    journal: "Journal of Behavioral Studies in Business",
    year: "2024",
    volume: "1-20",
  },
  {
    title: "Management and leaders understanding communication dynamics: The impact of internal communications on satisfaction, performance, and motivation",
    authors: "Beck, J. J.",
    journal: "Journal of Business, Economics and Technology",
    year: "2023",
    volume: "26(1), 15-28",
    award: "Best Paper Award",
  },
  {
    title: "Meme stock ethics: David versus Goliath, Robin Hood, or gambling?",
    authors: "Beck, J. J. & Hauser, R.",
    journal: "Journal of Business Cases and Applications",
    year: "2023",
    volume: "41(1), 1-12",
  },
  {
    title: "Managing personal finance literacy in the United States: A case study",
    authors: "Beck, J. J. & Garris, R. O. III",
    journal: "Education Sciences",
    year: "2019",
    volume: "9(2), 129",
  },
];

const presentations = [
  {
    title: "The ethical framework for HRM: A critical reflection on codes and practices",
    authors: "Bradshaw, S., & Beck, J. J.",
    conference: "Eastern Academy of Management Annual Conference",
    location: "Baltimore, MD",
    year: "2025",
  },
  {
    title: "A critical review of generation Z's perspectives on authentic leadership: Insights for organizational practices",
    authors: "Beck, J. J.",
    conference: "Midwest Academy of Management Annual Conference",
    location: "Moorehead, MN",
    year: "2024",
  },
  {
    title: "A manager's guide to implementing effective remote work strategies",
    authors: "Beck, J. J.",
    conference: "National Association of Business, Economics, and Technology Conference",
    location: "State College, PA",
    year: "2023",
  },
  {
    title: "Insights into effective business communication: An employer's perspective",
    authors: "Conrad, K., Beck, J. J., Dodson, T.",
    conference: "National Association of Business, Economics, and Technology Conference",
    location: "State College, PA",
    year: "2023",
  },
];

const worksInProgress = [
  "Strategic Management OER Textbook (with J. Dovel) – Open Educational Resources for BADM 407",
  "Measuring the impact of authentic leadership (with K. Sharp)",
  "Reviewing the ethical framework of strategic human resources (with A. Mahammah & J. Dovel)",
  "Leadership development and student success: Impact of a first-year student program",
  "A leader's role in generating motivation, job satisfaction, and job performance",
];

export default function Scholarship() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-[var(--subtle-gradient)]">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
              Research & Publications
            </p>
            <h1 className="mb-6">Scholarship</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              My research explores the intersection of leadership, organizational communication, 
              and ethics. I am particularly interested in how leaders can create meaningful 
              connections with their teams and foster cultures of integrity and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="mb-8">Research Interests</h2>
          <div className="flex flex-wrap gap-3">
            {researchAreas.map((area) => (
              <span 
                key={area} 
                className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-lg text-foreground font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Dissertation */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-primary" />
            <h2>Dissertation</h2>
          </div>
          <div className="card-elevated p-8">
            <h3 className="text-xl mb-2">
              Understanding the why in management and leadership: The missing link for organizational and corporate success
            </h3>
            <p className="text-muted-foreground mb-4">
              Doctoral dissertation, Robert Morris University (2020)
            </p>
            <a 
              href="https://www.proquest.com/docview/2420788767" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              View on ProQuest
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Peer-Reviewed Publications */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2>Peer-Reviewed Publications</h2>
          </div>
          
          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.title} className="card-elevated p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-serif mb-2">{pub.title}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{pub.authors}</p>
                    <p className="text-sm">
                      <span className="italic">{pub.journal}</span>, {pub.volume} ({pub.year})
                    </p>
                  </div>
                  {pub.award && (
                    <span className="badge-accent whitespace-nowrap self-start">
                      <Award className="h-3.5 w-3.5 mr-1" />
                      {pub.award}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://scholar.google.com/citations?user=ivGChckAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                Google Scholar Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://www.researchgate.net/profile/Joshua-Beck-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                ResearchGate Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Conference Presentations */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <Presentation className="h-6 w-6 text-primary" />
            <h2>Selected Conference Presentations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {presentations.map((pres) => (
              <div key={pres.title} className="card-elevated p-6">
                <p className="text-sm text-primary font-medium mb-2">{pres.year}</p>
                <h3 className="text-lg font-serif mb-2">{pres.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">{pres.authors}</p>
                <p className="text-sm text-muted-foreground">
                  {pres.conference}, {pres.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works in Progress */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="mb-8">Works in Progress</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {worksInProgress.map((work) => (
              <div key={work} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground/90">{work}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Interested in Collaboration?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            I welcome opportunities for research collaboration, co-authorship, and academic partnerships.
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
