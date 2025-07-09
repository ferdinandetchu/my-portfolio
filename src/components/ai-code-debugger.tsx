"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bot, Code } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { debugCodeAction } from '@/app/actions';
import { Skeleton } from './ui/skeleton';

const formSchema = z.object({
  code: z.string().min(10, { message: 'Please enter at least 10 characters of code to analyze.' }),
});

export function AiCodeDebugger() {
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "function greet(name) {\n  console.log('Hello, ' + name);\n}",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysis('');
    try {
      const result = await debugCodeAction(values);
      if ('analysis' in result) {
        setAnalysis(result.analysis);
      } else {
        throw new Error(result.error || 'Failed to analyze code.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      console.error(error);
      toast({
        title: 'Error',
        description: `There was an issue analyzing the code. ${errorMessage}`,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto bg-secondary/70">
        <CardHeader>
            <CardTitle className="font-headline text-primary flex items-center gap-2">
                <Bot /> AI Code Assistant
            </CardTitle>
            <CardDescription>
                Paste your JavaScript code below and let our AI assistant help you find potential bugs and errors.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="sr-only">Code Input</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Enter your JavaScript code here..."
                        className="min-h-[150px] font-code bg-background/50"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                {isLoading ? 'Analyzing...' : <> <Code className="mr-2 h-4 w-4" /> Analyze Code</>}
                </Button>
            </form>
            </Form>
        </CardContent>

        {(isLoading || analysis) && (
        <CardFooter className="flex-col items-start gap-y-2 rounded-b-lg p-6 bg-background/30">
            <h4 className="font-semibold text-primary">Analysis Result:</h4>
            {isLoading && (
            <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </div>
            )}
            {analysis && (
                <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                    <ReactMarkdown>{analysis}</ReactMarkdown>
                </div>
            )}
        </CardFooter>
        )}
    </Card>
  );
}
