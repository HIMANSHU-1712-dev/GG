import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "FinanceFlow - Banking Dashboard",
    description: "Complete redesign of a banking dashboard focusing on data visualization and user flow optimization. Increased user engagement by 40% and reduced task completion time by 35%.",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNTc1NDA3MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["UI/UX", "Dashboard", "Data Visualization", "Figma"],
    year: "2024",
    type: "Web Design",
    category: "Web",
    featured: true
  },
  {
    id: 2,
    title: "MoodSpace - Mental Health App",
    description: "Mobile app design for mental health tracking with focus on accessibility and inclusive design. Used throughout user research and testing phases.",
    image: "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU3NDk1ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile", "Healthcare", "User Research", "Accessibility"],
    year: "2024",
    type: "Mobile App",
    category: "Mobile"
  },
  {
    id: 3,
    title: "EcoTrack - Sustainability Platform",
    description: "Web platform helping companies track their environmental impact. Designed comprehensive design system and component library.",
    image: "https://images.unsplash.com/photo-1486486955648-a4f22566c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8fHx8MTc1NzQ5NzkzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Web Design", "Design System", "B2B", "React"],
    year: "2023",
    type: "Web Platform",
    category: "Web"
  },
  {
    id: 4,
    title: "TaskFlow - Project Management",
    description: "Redesigned project management interface with focus on team collaboration and workflow optimization.",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNTc1NDA3MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["SaaS", "Collaboration", "Workflow", "Design System"],
    year: "2023",
    type: "Web App",
    category: "Web"
  },
  {
    id: 5,
    title: "RetailPlus - E-commerce Mobile",
    description: "Mobile-first e-commerce platform with personalized shopping experience and AR try-on features.",
    image: "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU3NDk1ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["E-commerce", "Mobile", "AR", "Personalization"],
    year: "2023",
    type: "Mobile App",
    category: "Mobile"
  },
  {
    id: 6,
    title: "LearnHub - Educational Platform",
    description: "Online learning platform design focusing on student engagement and teacher tools. Comprehensive user research project.",
    image: "https://images.unsplash.com/photo-1486486955648-a4f22566c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8fHx8MTc1NzQ5NzkzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Education", "User Research", "Web Design", "Accessibility"],
    year: "2022",
    type: "Research",
    category: "Research"
  }
];

const categories = ["All", "Web", "Mobile", "Research"];

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredProjects = projects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return parseInt(b.year) - parseInt(a.year);
      return parseInt(a.year) - parseInt(b.year);
    });

  return (
    <section id="work" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of recent projects showcasing end-to-end design process, 
            from user research to final implementation.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search and sort */}
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects by keyword or tool"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest → Oldest</SelectItem>
                <SelectItem value="oldest">Oldest → Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              No projects found matching your criteria.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more detailed case studies?
          </p>
          <Button size="lg" variant="outline">
            View all case studies
          </Button>
        </div>
      </div>
    </section>
  );
}