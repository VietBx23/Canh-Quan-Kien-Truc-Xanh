'use server';
/**
 * @fileOverview Suggests novel headers from a given HTML content.
 *
 * - aiSuggestedHeaders - A function that handles the suggestion process.
 * - AiSuggestedHeadersInput - The input type for the aiSuggestedHeaders function.
 * - AiSuggestedHeadersOutput - The return type for the aiSuggestedHeaders function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NovelHeaderSchema = z.object({
  title: z.string().describe('The title of the novel.'),
  url: z.string().url().describe('The URL to the novel\'s table of contents page.'),
});

export const AiSuggestedHeadersInputSchema = z.object({
  htmlContent: z.string().describe('The HTML content of the page to search for novels.'),
});
export type AiSuggestedHeadersInput = z.infer<typeof AiSuggestedHeadersInputSchema>;

export const AiSuggestedHeadersOutputSchema = z.object({
  novels: z.array(NovelHeaderSchema).describe('An array of novels found on the page.'),
});
export type AiSuggestedHeadersOutput = z.infer<typeof AiSuggestedHeadersOutputSchema>;


export async function aiSuggestedHeaders(input: AiSuggestedHeadersInput): Promise<AiSuggestedHeadersOutput> {
  return aiSuggestedHeadersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSuggestedHeadersPrompt',
  input: {schema: AiSuggestedHeadersInputSchema},
  output: {schema: AiSuggestedHeadersOutputSchema},
  prompt: `You are an expert at parsing HTML and extracting structured data.
You will be given the HTML content of a novel discovery or category page.
Your task is to identify and extract all the links to the main pages (table of contents) of individual novels.
For each novel, you need to extract its title and its URL.
Return the data as an array of novel objects.

HTML Content:
{{{htmlContent}}}
`,
});

const aiSuggestedHeadersFlow = ai.defineFlow(
  {
    name: 'aiSuggestedHeadersFlow',
    inputSchema: AiSuggestedHeadersInputSchema,
    outputSchema: AiSuggestedHeadersOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
