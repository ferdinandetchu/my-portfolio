'use server';

/**
 * @fileOverview An AI agent for generating project descriptions.
 *
 * - generateProjectDescription - A function that generates engaging descriptions for projects.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDetails: z.string().describe('Detailed information about the project, including its purpose, technologies used, and key features.'),
  targetAudience: z.string().describe('The intended audience or users of the project.'),
  desiredTone: z.string().describe('The desired tone or style of the description (e.g., professional, casual, persuasive).'),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  projectDescription: z.string().describe('An engaging and informative description of the project.'),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in generating project descriptions for portfolios.

  Given the following information about a project, generate an engaging and informative description that will be used in a portfolio.
  The description should be tailored to the target audience and written in the desired tone.

  Project Name: {{{projectName}}}
  Project Details: {{{projectDetails}}}
  Target Audience: {{{targetAudience}}}
  Desired Tone: {{{desiredTone}}}

  Description:`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

