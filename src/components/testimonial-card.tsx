
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Info, Star } from 'lucide-react';

// This type definition must match the one in `page.tsx`
type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const StarRating = ({ rating, totalStars = 5 }: { rating: number; totalStars?: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? 'fill-accent text-accent' : 'fill-muted text-muted-foreground'}`} />
      ))}
    </div>
  );
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const shortQuote = testimonial.quote.length > 100 
    ? `${testimonial.quote.substring(0, 100)}...` 
    : testimonial.quote;

  return (
    <div className="group h-[320px] w-full [perspective:1200px]">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <Card className="h-full flex flex-col bg-secondary">
            <CardContent className="pt-6 flex-1 flex flex-col">
              <StarRating rating={testimonial.rating} />
              <p className="text-muted-foreground mt-4 flex-grow italic">"{shortQuote}"</p>
              <div className="flex items-center mt-auto pt-4">
                <Avatar>
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
               <div className="flex justify-end mt-4">
                  <Badge variant="outline" className="animate-pulse bg-accent/20 border-accent/30 text-accent-foreground/80">
                      <Info className="mr-2 h-4 w-4" />
                      Hover to read
                  </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back Face */}
        <div className="absolute h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card className="flex flex-col gap-4 p-6 bg-secondary h-full overflow-y-auto">
            <h4 className="text-lg font-bold font-headline text-primary">Full Testimonial</h4>
             <StarRating rating={testimonial.rating} />
            <div className="text-sm text-muted-foreground italic">
              <p>"{testimonial.quote}"</p>
            </div>
             <div className="flex items-center mt-auto pt-4">
                <Avatar>
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
