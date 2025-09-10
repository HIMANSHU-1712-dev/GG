import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  type: string;
  featured?: boolean;
}

export function ProjectCard({ title, description, image, tags, year, type, featured = false }: ProjectCardProps) {
  return (
    <Card className={`group cursor-pointer overflow-hidden border border-border hover:shadow-xl transition-all duration-300 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={`${title} project preview`}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? 'h-80' : 'h-64'
          }`}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {type}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{year}</span>
          <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}