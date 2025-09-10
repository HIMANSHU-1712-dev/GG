import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Linkedin, 
  Twitter, 
  Github,
  CheckCircle 
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@alexrivera.design",
      href: "mailto:alex@alexrivera.design"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null
    },
    {
      icon: Clock,
      label: "Response time",
      value: "Usually within 24 hours",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alexrivera",
      color: "text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/alexrivera",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/alexrivera",
      color: "text-gray-600"
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Thanks for reaching out!
            </h3>
            <p className="text-muted-foreground mb-8">
              I've received your message and will get back to you within 24 hours. 
              Looking forward to discussing your project!
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
            >
              Send another message
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message 
            and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Input
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      placeholder="e.g., Mobile App, Website, Design System"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="min-h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            {/* Contact Details */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Connect with Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <social.icon className={`h-5 w-5 ${social.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Current Availability
              </h3>
              <Badge variant="secondary" className="bg-green-100 text-green-800 mb-3">
                Available for new projects
              </Badge>
              <p className="text-sm text-muted-foreground">
                I'm currently accepting new projects for Q2 2024. 
                Let's discuss your timeline and requirements.
              </p>
            </Card>

            {/* FAQ */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick FAQ
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">What's your typical project timeline?</p>
                  <p className="text-muted-foreground">2-8 weeks depending on scope and complexity.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Do you work with startups?</p>
                  <p className="text-muted-foreground">Yes! I love working with early-stage companies.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">What's included in your process?</p>
                  <p className="text-muted-foreground">Research, wireframes, prototypes, and design handoff.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}