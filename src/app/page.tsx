
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Twitter, Star, ExternalLink, Briefcase, Layers, FileText } from 'lucide-react';
import { AiDescriptionGenerator } from '@/components/ai-description-generator';
import { ThemeToggle } from '@/components/theme-toggle';
import { Copyright } from '@/components/copyright';
import { ActionButtons } from '@/components/action-buttons';
import { BackToTop } from '@/components/back-to-top';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AnimatedContent } from '@/components/animated-content';
import { ExperienceCard } from '@/components/experience-card';

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

const workExperience = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Software Engineer',
    duration: 'Jan 2020 - Present',
    description: 'Led the development of a new client-facing dashboard using React and TypeScript, which improved performance and mentored junior developers.',
    logo: 'https://placehold.co/100x100.png',
    logoHint: 'company logo',
    details: [
        'Architected and implemented a scalable frontend using React and TypeScript, resulting in a 40% reduction in bug reports.',
        'Optimized data fetching and state management, which improved application load times by 30% and enhanced user experience.',
        'Mentored a team of 3 junior developers, fostering their growth and increasing team productivity by 20%.'
    ],
    businessImpact: 'The new dashboard directly led to a 15% increase in customer retention by providing clients with actionable insights and a more intuitive interface.'
  },
  {
    company: 'Innovate Co.',
    role: 'Software Engineer',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Developed and maintained features for a large-scale e-commerce platform. Worked with a team of 10 engineers in an agile environment.',
    logo: 'https://placehold.co/100x100.png',
    logoHint: 'company logo tech',
    details: [
        'Implemented new user-facing features using Vue.js, which contributed to a 10% increase in user engagement.',
        'Collaborated on a database migration project that improved query performance by 25%.',
        'Wrote comprehensive unit and integration tests, increasing code coverage by 15% and reducing production bugs.'
    ],
    businessImpact: 'The features I helped develop were part of a major Q4 release that resulted in a 5% increase in quarterly revenue.'
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

const skills = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Express', 'Genkit', 'Firebase'],
  },
  {
    category: 'Databases',
    technologies: ['MongoDB', 'Firestore'],
  },
  {
    category: 'Tools & DevOps',
    technologies: ['Git', 'GitHub', 'Vercel', 'Digital Ocean'],
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
        <Star key={i} className={`h-5 w-5 ${i < rating ? 'fill-accent text-accent' : 'fill-muted text-muted-foreground'}`} />
      ))}
    </div>
  );
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-lg">
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
            <AnimatedContent animation="fade-in" delay={0}>
              <Image
                src="https://placehold.co/128x128.png"
                alt="Ferdinand Etchu"
                width={128}
                height={128}
                className="rounded-full mb-6 ring-4 ring-primary/20"
                data-ai-hint="man portrait"
              />
            </AnimatedContent>
            <AnimatedContent animation="fade-in-up" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">Software Engineer & Mentor</h2>
            </AnimatedContent>
            <AnimatedContent animation="fade-in-up" delay={400}>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
                Building innovative solutions with modern technology and helping others grow in their tech careers. Passionate about creating startups and mentoring the next generation of developers.
              </p>
            </AnimatedContent>
            <AnimatedContent animation="fade-in-up" delay={600}>
              <div className="flex items-center justify-center gap-6">
                <span className="font-semibold text-foreground/80">Average Mentoring Rating:</span>
                <div className="flex items-center gap-2">
                  <StarRating rating={5} />
                  <span className="font-bold text-lg text-accent">5.0</span>
                </div>
              </div>
            </AnimatedContent>
            <AnimatedContent animation="fade-in-up" delay={800}>
              <ActionButtons />
            </AnimatedContent>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="py-20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <AnimatedContent>
              <h3 id="skills-heading" className="text-3xl font-bold text-center mb-12 font-headline text-primary flex items-center justify-center gap-4">
                <Layers className="h-8 w-8" aria-hidden="true" />
                My Skills & Expertise
              </h3>
            </AnimatedContent>
            <AnimatedContent delay={200}>
              <div 
                className="w-full overflow-hidden relative group"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                }}
              >
                <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] py-4">
                  {[...skills, ...skills].map((skillCategory, index) => (
                    <Card key={`${skillCategory.category}-${index}`} className="p-6 shadow-lg w-[300px] mx-4 shrink-0 bg-card/60 backdrop-blur-md">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-xl font-headline text-primary">{skillCategory.category}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="flex flex-wrap gap-2">
                          {skillCategory.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedContent>
              <h3 id="projects-heading" className="text-3xl font-bold text-center mb-12 font-headline text-primary">My Work</h3>
            </AnimatedContent>
            <AnimatedContent delay={200}>
              <Tabs defaultValue="portfolio" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-muted/60 backdrop-blur-md">
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="startup">Startup Projects</TabsTrigger>
                </TabsList>
                <TabsContent value="portfolio" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {portfolioProjects.map((project, index) => (
                      <AnimatedContent key={index} delay={index * 150}>
                        <Card className="flex flex-col overflow-hidden transition-shadow duration-300 h-full bg-card/60 backdrop-blur-md">
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
                          <CardFooter className="flex justify-between items-center p-4 mt-auto">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} (opens in a new tab)`}>
                              <Button variant="link" className="text-accent p-0 h-auto hover:text-accent/80">
                                View Project <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </a>
                            {index === 0 && <AiDescriptionGenerator projectDetails={project.description} projectName={project.title} />}
                          </CardFooter>
                        </Card>
                      </AnimatedContent>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="startup" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {startupProjects.map((project, index) => (
                       <AnimatedContent key={index} delay={index * 150}>
                        <Card className="flex flex-col overflow-hidden transition-shadow duration-300 h-full bg-card/60 backdrop-blur-md">
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
                          <CardFooter className="p-4 mt-auto">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} (opens in a new tab)`}>
                              <Button variant="link" className="text-accent p-0 h-auto hover:text-accent/80">
                                View Project <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </a>
                          </CardFooter>
                        </Card>
                      </AnimatedContent>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </AnimatedContent>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedContent>
              <h3 id="experience-heading" className="text-3xl font-bold text-center mb-12 font-headline text-primary flex items-center justify-center gap-4">
                <Briefcase className="h-8 w-8" aria-hidden="true" />
                Work Experience
              </h3>
            </AnimatedContent>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
              <div className="space-y-12">
                {workExperience.map((job, index) => (
                  <AnimatedContent key={index} delay={index * 200} className="h-[350px] md:h-[280px]">
                    <ExperienceCard job={job} />
                  </AnimatedContent>
                ))}
              </div>
            </div>
            <AnimatedContent delay={workExperience.length * 200}>
              <div className="mt-12 text-center">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline">
                        <FileText className="mr-2 h-5 w-5" />
                        View Full Resume
                    </Button>
                </a>
              </div>
            </AnimatedContent>
          </div>
        </section>

        <section id="testimonials" aria-labelledby="testimonials-heading" className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedContent>
              <h3 id="testimonials-heading" className="text-3xl font-bold text-center mb-12 font-headline text-primary">What Mentees Say</h3>
            </AnimatedContent>
            <AnimatedContent delay={200}>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
              >
                <CarouselContent className="-ml-4">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="h-full p-1">
                        <Card className="h-full flex flex-col bg-card/60 backdrop-blur-md">
                          <CardContent className="pt-6 flex-1 flex flex-col">
                            <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-auto">
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
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </AnimatedContent>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-auto">
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
      <BackToTop />
    </div>
  );
}
