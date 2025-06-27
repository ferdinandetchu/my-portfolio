"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

type CalendlyModalProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  url: string;
};

export function CalendlyModal({ children, title, description, url }: CalendlyModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 sm:max-w-4xl h-[90vh] border-0 bg-transparent shadow-none">
         <DialogHeader className="p-6 pb-0 sr-only">
          <DialogTitle>{title || 'Schedule a meeting'}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="w-full h-full overflow-hidden rounded-lg">
          <iframe
            src={url}
            className="w-full h-full border-0"
            title="Calendly"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
