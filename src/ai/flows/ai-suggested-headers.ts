'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting headers for an article.
 *
 * The flow takes article content as input and returns a list of suggested headers.
 * @param {string} articleContent - The content of the article to generate headers for.
 * @returns {Promise<string[]>} A promise that resolves to an array of suggested headers.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AISuggestedHeadersInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The content of the article to generate headers for.'),
});
export type AISuggestedHeadersInput = z.infer<typeof AISuggestedHeadersInputSchema>;

const AISuggestedHeadersOutputSchema = z.array(z.string());
export type AISuggestedHeadersOutput = z.infer<typeof AISuggestedHeadersOutputSchema>;

export async function getSuggestedHeaders(
  input: AISuggestedHeadersInput
): Promise<AISuggestedHeadersOutput> {
  return aiSuggestedHeadersFlow(input);
}

const aiSuggestedHeadersPrompt = ai.definePrompt({
  name: 'aiSuggestedHeadersPrompt',
  input: {schema: AISuggestedHeadersInputSchema},
  output: {schema: AISuggestedHeadersOutputSchema},
  prompt: `You are an expert in writing catchy and informative headers for articles.
  Given the following article content, please suggest a list of headers that would be appropriate for the article.
  Return the headers as a numbered list.

  Article Content:
  {{articleContent}}`,
});

const aiSuggestedHeadersFlow = ai.defineFlow(
  {
    name: 'aiSuggestedHeadersFlow',
    inputSchema: AISuggestedHeadersInputSchema,
    outputSchema: AISuggestedHeadersOutputSchema,
  },
  async input => {
    const {output} = await aiSuggestedHeadersPrompt(input);
    return output!;
  }
);
