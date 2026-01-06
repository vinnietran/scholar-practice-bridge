import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const resources = [
  {
    title: "Strategic Management",
    type: "Open Educational Resource (OER)",
    description: "A comprehensive textbook created for BADM 407 Business Strategy and Policy at Shepherd University. This open-access resource provides students with foundational and advanced concepts in strategic management without the financial burden of traditional textbooks.",
    authors: "Beck, J. J. & Dovel, J.",
    status: "In Development",
    access: "Free OER",
  },
];

const reviewedWorks = [
  {
    title: "Exploring Technology-Infused Education in the Post-Pandemic Era",
    role: "Editorial Advisory Board Member",
    publisher: "IGI Global",
    authors: "Lawrence Tomei and David Carbonaro",
  },
  {
    title: "Business and Society: Ethical, Legal, and Digital Environments (2nd Edition)",
    role: "Reviewer",
    publisher: "SAGE Publications, Inc.",
    authors: "Cynthia Clark",
  },
];

const coursesMaterials = [
  {
    course: "BADM 407 Business Policy & Strategy",
    level: "Undergraduate",
    description: "Capstone course integrating strategic management concepts with practical application through case studies and experiential learning.",
  },
  {
    course: "MBA 520 Management, Leadership, and Ethics",
    level: "Graduate",
    description: "Advanced exploration of ethical frameworks, leadership theories, and their application in contemporary organizational contexts.",
  },
  {
    course: "BADM 399 Organizational Leadership",
    level: "Undergraduate",
    description: "Comprehensive study of leadership theories, styles, and practical applications for emerging leaders.",
  },
  {
    course: "BADM 323 Human Resources & Business Ethics",
    level: "Undergraduate",
    description: "Integration of human resource management principles with ethical decision-making frameworks.",
  },
];

export default function Books() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-[var(--subtle-gradient)]">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
              Educational Materials
            </p>
            <h1 className="mb-6">Books & Resources</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am committed to making quality educational materials accessible. My current 
              projects focus on open educational resources and practical guides that bridge 
              academic theory and real-world application.
            </p>
          </div>
        </div>
      </section>

      {/* OER Textbooks */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2>Open Educational Resources</h2>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-muted-foreground mb-8">
              Open Educational Resources (OER) are freely accessible teaching and learning 
              materials that reduce barriers to education. I believe quality education should 
              be accessible to all students.
            </p>

            {resources.map((resource) => (
              <div key={resource.title} className="card-elevated p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                    {resource.status}
                  </span>
                </div>
                <h3 className="text-2xl mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-1">{resource.authors}</p>
                <p className="text-foreground/80 my-4">{resource.description}</p>
                <div className="flex items-center gap-2 text-primary">
                  <Download className="h-4 w-4" />
                  <span className="font-medium">{resource.access}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviewed Works */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <h2 className="mb-8">Editorial Contributions</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            I contribute to academic publishing by serving as a reviewer and editorial advisor 
            for textbooks and journals, helping ensure quality and relevance in business education.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reviewedWorks.map((work) => (
              <div key={work.title} className="card-elevated p-6">
                <span className="text-sm text-primary font-medium">{work.role}</span>
                <h3 className="text-lg font-serif mt-2 mb-2">{work.title}</h3>
                <p className="text-muted-foreground text-sm">By {work.authors}</p>
                <p className="text-sm text-muted-foreground">{work.publisher}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Materials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="mb-4">Teaching Areas</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            I develop rigorous coursework that combines academic foundations with experiential 
            learning and real-world application.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {coursesMaterials.map((course) => (
              <div key={course.course} className="card-elevated p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-lg mb-2">{course.course}</h3>
                <p className="text-muted-foreground text-sm">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding bg-primary/5">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Future Resources</h2>
          <p className="text-muted-foreground text-lg mb-6">
            I am developing additional educational resources and practical guides for leaders 
            and organizations. Sign up to be notified when new materials become available.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">
              Stay Informed
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
