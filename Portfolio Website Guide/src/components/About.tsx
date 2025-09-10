import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

const stats = [
  { icon: Calendar, label: "Years experience", value: "8+" },
  { icon: Users, label: "Products shipped", value: "20+" },
  { icon: Award, label: "Design awards", value: "12" },
  { icon: MapPin, label: "Countries worked", value: "5" }
];

const skills = [
  { name: "User Experience Design", level: 95 },
  { name: "User Interface Design", level: 90 },
  { name: "User Research", level: 85 },
  { name: "Prototyping", level: 90 },
  { name: "Design Systems", level: 88 },
  { name: "Usability Testing", level: 82 }
];

const tools = [
  "Figma", "Sketch", "Adobe XD", "Principle", "Framer", "Miro", 
  "Notion", "Hotjar", "Maze", "UserTesting", "Zeplin", "Abstract"
];

const experience = [
  {
    company: "TechFlow Solutions",
    logo: "https://images.unsplash.com/photo-1486486955648-a4f22566c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=40&h=40",
    role: "Senior Product Designer",
    period: "Jan 2022 — Present",
    achievements: [
      "Led design for 3 major product launches reaching 2M+ users",
      "Established design system used across 8 product teams",
      "Mentored 4 junior designers and conducted design workshops"
    ]
  },
  {
    company: "StartupX",
    logo: "https://images.unsplash.com/photo-1486486955648-a4f22566c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=40&h=40",
    role: "Product Designer",
    period: "Mar 2020 — Dec 2021",
    achievements: [
      "Redesigned core user flows resulting in 40% increase in conversion",
      "Conducted user research with 100+ participants across 5 countries",
      "Collaborated with engineering team to implement design solutions"
    ]
  },
  {
    company: "DesignStudio Inc",
    logo: "https://images.unsplash.com/photo-1486486955648-a4f22566c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=40&h=40",
    role: "UI/UX Designer",
    period: "Jun 2018 — Feb 2020",
    achievements: [
      "Designed mobile apps for iOS and Android platforms",
      "Created brand guidelines and visual identity systems",
      "Worked with clients across healthcare, fintech, and e-commerce"
    ]
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences that solve real problems and delight users.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left column - Image and bio */}
          <div className="lg:col-span-5 space-y-8">
            {/* Profile image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full transform rotate-6"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1570170609489-43197f518df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NTc0Mzg4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional photo of Alex Rivera"
                  className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-foreground leading-relaxed">
                I'm Alex Rivera, a product designer with over 8 years of experience creating 
                digital products that make a real difference. Based in San Francisco, I specialize 
                in end-to-end UX design, user research, and design systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines data-driven insights with human-centered design principles. 
                I believe great design happens when we truly understand our users and solve their 
                problems with elegant, accessible solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not designing, you'll find me hiking the Bay Area trails, experimenting 
                with new coffee brewing methods, or contributing to open-source design communities.
              </p>
            </div>
          </div>

          {/* Right column - Stats, skills, etc. */}
          <div className="lg:col-span-7 space-y-12">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Core Skills
              </h3>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-foreground mb-12 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded"></div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {job.role}
                        </h4>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {job.period}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-muted-foreground flex">
                          <span className="mr-3">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}