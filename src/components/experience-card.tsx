import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';

// This type definition must match the one in `page.tsx`
type WorkExperience = {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
  logoHint: string;
  details: string[];
  businessImpact: string;
};

type ExperienceCardProps = {
  job: WorkExperience;
};

export function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <div className="group h-full w-full [perspective:1200px]">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        {/* Front Face */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <Card className="relative flex flex-col md:flex-row items-start gap-6 p-6 md:pl-12 bg-card h-full">
            <div className="absolute left-4 top-8 -translate-y-1/2 -translate-x-[calc(50%-1px)] hidden md:block" aria-hidden="true">
              <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background/80"></div>
            </div>
            <div className="flex-shrink-0">
              <Image src={job.logo} alt={`${job.company} logo`} width={64} height={64} className="rounded-md" data-ai-hint={job.logoHint} />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h4 className="text-xl font-bold font-headline text-primary">{job.company}</h4>
                <p className="text-sm text-muted-foreground mt-1 md:mt-0">{job.duration}</p>
              </div>
              <p className="font-semibold text-foreground/80 mb-2">{job.role}</p>
              <p className="text-muted-foreground">{job.description}</p>
              <div className="absolute bottom-4 right-4">
                 <Badge variant="outline" className="animate-pulse bg-accent/20 border-accent/30 text-accent-foreground/80">
                    <Info className="mr-2 h-4 w-4" />
                    Hover for details
                 </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Back Face */}
        <div className="absolute h-full w-full [backface-visibility:hidden] [transform:rotateX(180deg)]">
          <Card className="flex flex-col gap-4 p-6 bg-secondary h-full overflow-y-auto">
            <h4 className="text-lg font-bold font-headline text-primary">Key Contributions & Impact</h4>
            <ul className="space-y-2 text-left list-disc list-inside text-sm text-muted-foreground">
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div>
                <p className="font-semibold text-foreground/90 mt-2">Business Impact:</p>
                <p className="text-sm text-muted-foreground italic">"{job.businessImpact}"</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
