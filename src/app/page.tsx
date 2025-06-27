import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Twitter, Star, ExternalLink } from 'lucide-react';
import { AiDescriptionGenerator } from '@/components/ai-description-generator';
import { ThemeToggle } from '@/components/theme-toggle';
import { Copyright } from '@/components/copyright';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/ferdinandetchu' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/ferdinandetchu' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ferdinandetchu' },
];

const portfolioProjects = [
  {
    title: 'Project Alpha',
    description: 'A web application for task management and team collaboration, built with React and Node.js. Features real-time updates and a customizable dashboard.',
    tags: ['React', 'Node.js', 'Websockets'],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'abstract tech',
  },
  {
    title: 'Project Beta',
    description: 'An e-commerce platform with a custom CMS, focusing on performance and user experience. Integrated with Stripe for payments.',
    tags: ['Vue.js', 'Stripe', 'GraphQL'],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'modern e-commerce',
  },
];

const startupProjects = [
  {
    title: 'Startup Gamma',
    description: 'A SaaS platform for small businesses to manage their finances. Built with Next.js and Tailwind CSS for a modern, responsive interface.',
    tags: ['Next.js', 'Tailwind CSS', 'SaaS'],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'finance dashboard',
  },
];

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Software Engineer',
    quote: "Ferdinand's guidance was invaluable. He helped me navigate complex technical challenges and grow my confidence as a developer. Truly a fantastic mentor!",
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'woman portrait',
  },
  {
    name: 'John Smith',
    role: 'Aspiring Developer',
    quote: "I was stuck in a rut before I started mentoring sessions with Ferdinand. His insights and structured approach helped me land my first tech job. Highly recommended!",
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'man portrait',
  },
   {
    name: 'Alex Johnson',
    role: 'Product Manager',
    quote: "Working with Ferdinand is a pleasure. He has a unique ability to explain complex topics in a simple way, which has been a huge help for our team.",
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'person portrait',
  },
];

type StarRatingProps = {
  rating: number;
  totalStars?: number;
};

const StarRating = ({ rating, totalStars = 5 }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'}`} />
      ))}
    </div>
  );
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary font-headline">Ferdinand Etchu</h1>
          <nav>
            <div className="flex items-center gap-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="flex flex-col items-center">
            <Image
              src="https://placehold.co/128x128.png"
              alt="Ferdinand Etchu"
              width={128}
              height={128}
              className="rounded-full mb-6 ring-4 ring-primary/20"
              data-ai-hint="man portrait"
            />
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">Software Engineer & Mentor</h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
              Building innovative solutions with modern technology and helping others grow in their tech careers. Passionate about creating startups and mentoring the next generation of developers.
            </p>
            <div className="flex items-center justify-center gap-6">
              <span className="font-semibold text-foreground/80">Average Mentoring Rating:</span>
              <div className="flex items-center gap-2">
                <StarRating rating={5} />
                <span className="font-bold text-lg text-primary">5.0</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 font-headline text-primary">My Work</h3>
            <Tabs defaultValue="portfolio" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="startup">Startup Projects</TabsTrigger>
              </TabsList>
              <TabsContent value="portfolio" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {portfolioProjects.map((project, index) => (
                    <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="p-0">
                        <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-auto object-cover" data-ai-hint={project.imageHint} />
                      </CardHeader>
                      <CardContent className="flex-grow p-6 space-y-4">
                        <CardTitle className="font-headline">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="link" className="text-accent p-0 h-auto hover:text-accent/80">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                        {index === 0 && <AiDescriptionGenerator projectDetails={project.description} projectName={project.title} />}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="startup" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {startupProjects.map((project, index) => (
                    <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="p-0">
                        <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-auto object-cover" data-ai-hint={project.imageHint}/>
                      </CardHeader>
                      <CardContent className="flex-grow p-6 space-y-4">
                        <CardTitle className="font-headline">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="bg-muted/50 p-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="link" className="text-accent p-0 h-auto hover:text-accent/80">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 font-headline text-primary">What Mentees Say</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card shadow-lg">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint}/>
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary/80 backdrop-blur-lg text-primary-foreground mt-auto">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <Copyright />
          <div className="flex items-center gap-4 mt-4 md:mt-0">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
        </div>
      </footer>
    </div>
  );
}
