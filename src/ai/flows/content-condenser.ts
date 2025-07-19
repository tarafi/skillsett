'use server';

/**
 * @fileOverview An AI-powered content condenser tool.
 *
 * - condenseContent - A function that condenses content to maintain brevity and impact.
 * - CondenseContentInput - The input type for the condenseContent function.
 * - CondenseContentOutput - The return type for the condenseContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CondenseContentInputSchema = z.object({
  content: z
    .string()
    .describe('The content to be condensed, such as a testimonial or course description.'),
});
export type CondenseContentInput = z.infer<typeof CondenseContentInputSchema>;

const CondenseContentOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the input content, optimized for brevity and impact.'),
});
export type CondenseContentOutput = z.infer<typeof CondenseContentOutputSchema>;

export async function condenseContent(input: CondenseContentInput): Promise<CondenseContentOutput> {
  return condenseContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'condenseContentPrompt',
  input: {schema: CondenseContentInputSchema},
  output: {schema: CondenseContentOutputSchema},
  prompt: `You are an expert content writer specializing in creating concise and impactful summaries.

  Please condense the following content while maintaining its core message and emotional impact. The summary should be brief and engaging.

  Content: {{{content}}} `,
});

const condenseContentFlow = ai.defineFlow(
  {
    name: 'condenseContentFlow',
    inputSchema: CondenseContentInputSchema,
    outputSchema: CondenseContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
