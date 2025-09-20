'use server';
/**
 * @fileOverview Extracts chapter information from a given HTML content.
 *
 * - extractChapterInfo - A function that handles the chapter extraction process.
 * - ExtractChapterInfoInput - The input type for the extractChapterInfo function.
 * - ExtractChapterInfoOutput - The return type for the extractChapterInfo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChapterSchema = z.object({
  title: z.string().describe('The title of the chapter.'),
  url: z.string().url().describe('The URL to the chapter detail page.'),
});

export const ExtractChapterInfoInputSchema = z.object({
  htmlContent: z.string().describe('The HTML content of the novel\'s table of contents page.'),
});
export type ExtractChapterInfoInput = z.infer<typeof ExtractChapterInfoInputSchema>;

export const ExtractChapterInfoOutputSchema = z.object({
  chapters: z.array(ChapterSchema).describe('An array of chapters found on the page.'),
});
export type ExtractChapterInfoOutput = z.infer<typeof ExtractChapterInfoOutputSchema>;


export async function extractChapterInfo(input: ExtractChapterInfoInput): Promise<ExtractChapterInfoOutput> {
  return extractChapterInfoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractChapterInfoPrompt',
  input: {schema: ExtractChapterInfoInputSchema},
  output: {schema: ExtractChapterInfoOutputSchema},
  prompt: `You are an expert at parsing HTML and extracting structured data.
You will be given the HTML content of a novel's table of contents page.
Your task is to identify and extract all the links to the individual chapters.
For each chapter, you need to extract its title and its URL.
Return the data as an array of chapter objects.

HTML Content:
{{{htmlContent}}}
`,
});

const extractChapterInfoFlow = ai.defineFlow(
  {
    name: 'extractChapterInfoFlow',
    inputSchema: ExtractChapterInfoInputSchema,
    outputSchema: ExtractChapterInfoOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
