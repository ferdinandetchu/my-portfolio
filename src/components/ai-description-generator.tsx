"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bot } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { generateProjectDescriptionAction } from '@/app/actions';

const formSchema = z.object({
  projectName: z.string().min(1, { message: 'Project name is required.' }),
  projectDetails: z.string().min(10, { message: 'Please provide some details about your project.' }),
  targetAudience: z.string().min(1, { message: 'Target audience is required.' }),
  desiredTone: z.string().min(1, { message: 'Please select a tone.' }),
});

type AiDescriptionGeneratorProps = {
  projectName: string;
  projectDetails: string;
};

export function AiDescriptionGenerator({ projectName, projectDetails }: AiDescriptionGeneratorProps) {
  const [open, setOpen] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: projectName,
      projectDetails: projectDetails,
      targetAudience: 'Potential employers or clients',
      desiredTone: 'professional',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedDescription('');
    try {
      const result = await generateProjectDescriptionAction(values);
      if ('projectDescription' in result) {
        setGeneratedDescription(result.projectDescription);
      } else {
        throw new Error(result.error || 'Failed to generate description.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      console.error(error);
      toast({
        title: 'Error',
        description: `There was an issue generating the project description. ${errorMessage}`,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-accent border-accent/50 hover:bg-accent/10 hover:text-accent">
          <Bot className="mr-2 h-4 w-4" />
          Generate with AI
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="font-headline">AI-Powered Project Description</DialogTitle>
          <DialogDescription>
            Use AI to craft a compelling description for your project. Fill in the details below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Portfolio Website" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details & Technologies</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Built with Next.js, TypeScript, and Tailwind CSS. Features a dynamic project gallery and contact form..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Recruiters, tech managers" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desiredTone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Tone</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="persuasive">Persuasive</SelectItem>
                        <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="pt-4">
              <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? 'Generating...' : 'Generate Description'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
        {(isLoading || generatedDescription) && (
          <div className="mt-6 space-y-2 rounded-md border bg-muted/50 p-4">
            <h4 className="font-semibold text-primary">Generated Description:</h4>
            {isLoading && <p className="text-sm text-muted-foreground animate-pulse">Generating, please wait...</p>}
            {generatedDescription && (
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">{generatedDescription}</p>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
