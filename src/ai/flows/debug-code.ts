'use server';

/**
 * @fileOverview An AI agent for debugging JavaScript code.
 *
 * - debugCode - A function that analyzes JavaScript code for errors.
 * - DebugCodeInput - The input type for the debugCode function.
 * - DebugCodeOutput - The return type for the debugCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DebugCodeInputSchema = z.object({
  code: z.string().describe('The JavaScript code snippet to analyze.'),
});
export type DebugCodeInput = z.infer<typeof DebugCodeInputSchema>;

const DebugCodeOutputSchema = z.object({
  analysis: z.string().describe('A detailed analysis of potential errors in the code, including explanations and suggested fixes.'),
});
export type DebugCodeOutput = z.infer<typeof DebugCodeOutputSchema>;

export async function debugCode(input: DebugCodeInput): Promise<DebugCodeOutput> {
  return debugCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'debugCodePrompt',
  input: {schema: DebugCodeInputSchema},
  output: {schema: DebugCodeOutputSchema},
  prompt: `You are an expert JavaScript code reviewer and debugger.
  Analyze the following code snippet for potential errors, bugs, or anti-patterns.
  Provide a clear, concise, and helpful analysis.

  If you find errors, explain what they are, why they are problematic, and suggest a corrected version of the code.
  If the code looks good, provide positive feedback and mention any best practices you observe.

  Format your response in Markdown.

  Code:
  \`\`\`javascript
  {{{code}}}
  \`\`\`
  `,
});

const debugCodeFlow = ai.defineFlow(
  {
    name: 'debugCodeFlow',
    inputSchema: DebugCodeInputSchema,
    outputSchema: DebugCodeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
