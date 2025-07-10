
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Twitter, Star, ExternalLink, Briefcase, Layers, FileText, Code } from 'lucide-react';
import { AiCodeDebugger } from '@/components/ai-code-debugger';
import { ThemeToggle } from '@/components/theme-toggle';
import { Copyright } from '@/components/copyright';
import { ActionButtons } from '@/components/action-buttons';
import { BackToTop } from '@/components/back-to-top';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AnimatedContent } from '@/components/animated-content';
import { ExperienceCard } from '@/components/experience-card';
import { ProjectCard } from '@/components/project-card';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/ferdinandetchu' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/ferdinandetchu' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ferdinandetchu' },
];

const portfolioProjects = [
  {
    title: 'Business Consulting Landing',
    description: 'A modern, responsive landing page for a business consulting firm, designed to attract and convert clients. Built with Next.js and TypeScript, and styled with Tailwind CSS for a clean, professional design.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://business-landing-page-alpha-ashy.vercel.app',
    image: '/business_landing.png',
    imageHint: 'abstract tech',
  },
  {
    title: 'UB Document Services',
    description: "Engineered a full-stack Next.js web application (Firebase, Tailwind CSS) for University of Buea, streamlining student transcript and certificate requests. Integrated a Genkit AI chatbot to provide instant answers to user queries, alongside a robust dashboard for administrative request management and communication.",
    tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'Genkit'],
    link: 'https://ub-document-services.vercel.app',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'modern e-commerce',
  },
   {
    title: 'Hapi Translation',
    description: 'A responsive and animated landing page for an AI-powered translation service, designed to simplify user access. Built with Next.js, Tailwind CSS, and TypeScript, showcasing the integration of GenKit for intelligent AI translation capabilities.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Genkit'],
    link: 'https://business-landing-page-o87h.vercel.app',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'translation app',
  },
];

const startupProjects = [
  {
    title: "TimeUp Delivery: Buea's Premier Food Delivery App",
    description: "As a founder of TimeUp Delivery, I'm spearheading a vital service in Buea, Cameroon, allowing users to effortlessly order from local restaurants and get delicious food delivered. This project leverages Firebase for a scalable backend (Firestore, Auth, Functions, Storage), Next.JS for a seamless cross-platform web experience flutter for mobile developement, and Google Maps API for real-time tracking, complemented by crucial Mobile Money (MTN MoMo, Orange Money) integrations for local payment processing. Our mission is to make last-mile delivery timely, reliable, affordable, and safe, directly supporting Buea's economy.",
    tags: ["Firebase", "Next.JS", "Flutter", "Google Maps API"],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'food delivery app',
  },
  {
    title: "PaveWay Business",
    description: "PaveWay Business is a comprehensive business management platform designed to empower businesses with seamless payment collection, meticulous transaction tracking, efficient business item setup, and streamlined delivery management. Co-founded to simplify and optimize core business operations, PaveWay Business provides an intuitive and robust solution for businesses to gain greater control and insight into their finances and inventory. The platform is built using a modern and scalable technology stack, leveraging Nuxt.js for a dynamic and responsive frontend experience, Node.js with Express.js for a powerful and efficient backend API, and MongoDB for flexible and high-performance data storage.",
    tags: ["Nuxt.js", "Node.js", "Express.js", "MongoDB"],
    link: 'https://business-dev.pavewaygroup.com',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'business management',
  },
];

const workExperience = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Software Developer',
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
    role: 'Software Developer',
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
    name: 'Nadia',
    role: 'Aspiring developer in a MERN Stack Bootcamp',
    quote: "I was struggling for days with a problem i just couldn't figure out, but My tutor managed to identify the issue and helped me solve it step by step. He explained everything in details, making sure i truly understood each part of the process. What impressed me most was his patience and consistency, he stayed with me until we found a solution, and his encouragement kept me motivated. overall, he is an amazing tutor who genuinely cares about his students' progress. Highly recommended!",
    rating: 5,
  },
  {
    name: 'Damian',
    role: 'Software Developer',
    quote: "Ferdinand is a fantastic tutor! he helped me with a JavaScript project by teaching me new methods, and made sure i understood the methods that we used to complete the lesson. I strongly recommend tutoring with Ferdinand if you having any web development questions.",
    rating: 5,
  },
  {
    name: 'Yaran',
    role: 'Aspiring Developer',
    quote: "Etchu is a great tutor, patient, knowledgeable and proactive. Highly recommended.",
    rating: 5,
  },
   {
    name: 'Chris',
    role: 'Aspiring Developer',
    quote: "Etchu is very knowledgeable in HTML, CSS and JavaScript.",
    rating: 5,
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
                src="https://images.unsplash.com/photo-1619452220963-4da4e145aba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhZnJpY2FuJTIwbWFuJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8fHwxNzUxMDYwMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ferdinand Etchu"
                width={128}
                height={128}
                className="rounded-full mb-6 ring-4 ring-primary/20"
                data-ai-hint="man portrait"
              />
            </AnimatedContent>
            <AnimatedContent animation="fade-in-up" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">Software Developer & Mentor</h2>
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

        <section id="skills" aria-labelledby="skills-heading" className="py-20">
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
                    <Card key={`${skillCategory.category}-${index}`} className="p-6 shadow-lg w-[300px] mx-4 shrink-0 bg-secondary">
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
              <Tabs defaultValue="portfolio" className="w-full max-w-[900px] mx-auto">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-muted/60 backdrop-blur-md">
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="startup">Startup Projects</TabsTrigger>
                </TabsList>
                <TabsContent value="portfolio" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {portfolioProjects.map((project, index) => (
                      <AnimatedContent key={index} delay={index * 150}>
                        <ProjectCard project={project} />
                      </AnimatedContent>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="startup" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {startupProjects.map((project, index) => (
                       <AnimatedContent key={index} delay={index * 150}>
                        <ProjectCard project={project} />
                      </AnimatedContent>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </AnimatedContent>
          </div>
        </section>

        <section id="ai-debugger" aria-labelledby="ai-debugger-heading" className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedContent>
              <h3 id="ai-debugger-heading" className="text-3xl font-bold text-center mb-12 font-headline text-primary flex items-center justify-center gap-4">
                <Code className="h-8 w-8" aria-hidden="true" />
                AI-Powered Debugging Assistant
              </h3>
            </AnimatedContent>
            <AnimatedContent delay={200}>
              <AiCodeDebugger />
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
                        <Card className="h-full flex flex-col bg-secondary">
                          <CardContent className="pt-6 flex-1 flex flex-col">
                            <StarRating rating={testimonial.rating} />
                            <p className="text-muted-foreground mt-4 flex-grow italic">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-auto pt-4">
                              <Avatar>
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

      <footer className="mt-auto w-full border-t border-border/30 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <Copyright />
          <div className="flex items-center gap-4 mt-4 md:mt-0">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
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

    
