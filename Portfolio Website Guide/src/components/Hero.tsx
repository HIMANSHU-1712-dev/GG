import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-18 pb-16 px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Content - Left side */}
          <div className="lg:col-span-8 space-y-8">
            {/* Eyebrow */}
            <div className="text-muted-foreground">
              Hi, I'm Alex Rivera — Product Designer
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl">
                Designing simple, human-first product experiences
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I create digital products that solve real problems through user research, 
                thoughtful design systems, and data-driven decisions. Currently crafting 
                experiences at innovative startups.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('work')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                View my work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-accent"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Skills chips */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                UI/UX Design
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                User Research
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Product Strategy
              </Badge>
            </div>

            {/* Social proof */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by leading companies
              </p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="text-lg font-semibold">Stripe</div>
                <div className="text-lg font-semibold">Figma</div>
                <div className="text-lg font-semibold">Notion</div>
                <div className="text-lg font-semibold">Linear</div>
              </div>
            </div>
          </div>

          {/* Hero visual - Right side */}
          <div className="lg:col-span-4 relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1486486955648-a4f22566c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8fHx8MTc1NzQ5NzkzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern designer workspace with laptop and design tools"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                
                {/* Floating mockup cards */}
                <div className="absolute -top-4 -right-4 w-32 h-48 bg-background rounded-lg shadow-lg border border-border p-4 transform rotate-12 group-hover:rotate-15 transition-transform duration-300">
                  <div className="w-full h-6 bg-primary/10 rounded mb-2"></div>
                  <div className="w-3/4 h-4 bg-muted rounded mb-2"></div>
                  <div className="w-full h-4 bg-muted rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-muted rounded"></div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-40 h-24 bg-background rounded-lg shadow-lg border border-border p-4 transform -rotate-6 group-hover:-rotate-9 transition-transform duration-300">
                  <div className="w-full h-3 bg-accent/20 rounded mb-2"></div>
                  <div className="w-2/3 h-3 bg-muted rounded mb-2"></div>
                  <div className="w-full h-3 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => scrollToSection('work')}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm mb-2">Scroll to see case studies</span>
            <ChevronDown className="h-6 w-6 animate-bounce group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}