import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Scholarship", href: "/scholarship" },
  { name: "Books & Resources", href: "/books" },
  { name: "Consulting & Speaking", href: "/consulting" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-wide flex items-center justify-between py-4">
        {/* Logo / Name */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold text-foreground">
            Joshua J. Beck
          </span>
          <span className="hidden sm:inline text-sm text-muted-foreground">
            Ph.D.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                location.pathname === item.href
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button variant="cta" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-wide py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="cta" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
