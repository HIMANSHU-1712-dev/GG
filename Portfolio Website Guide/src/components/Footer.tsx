import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand and description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-foreground">Alex Rivera</h3>
              <p className="text-primary font-medium">Product Designer</p>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating digital experiences that solve real problems and delight users. 
              Available for new projects and collaborations.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:alex@alexrivera.design"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/alexrivera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/alexrivera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/alexrivera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('work')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>UI/UX Design</li>
              <li>User Research</li>
              <li>Design Systems</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
              <li>Design Consulting</li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get notified about new case studies, design resources, and insights. 
              No spam, just valuable content for designers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Alex Rivera. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}