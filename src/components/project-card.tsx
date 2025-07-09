
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  imageHint: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative flex flex-col overflow-hidden transition-all duration-300 h-full bg-secondary border-transparent hover:shadow-2xl hover:border-primary/20">
      <CardHeader className="p-0 relative h-48 overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title} 
          width={600} 
          height={400} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          data-ai-hint={project.imageHint} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <CardTitle className="font-headline text-secondary-foreground text-2xl drop-shadow-md">{project.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => <Badge key={tag} variant="outline" className="border-primary/30 text-primary/80">{tag}</Badge>)}
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 bg-secondary/50 mt-auto">
        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} (opens in a new tab)`}>
          <Button variant="link" className="text-accent p-0 h-auto hover:text-accent/80">
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
