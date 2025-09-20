'use server';
/**
 * @fileOverview A flow for generating passport photos.
 *
 * - generatePassportPhoto - A function that takes a user's photo and creates a passport photo sheet.
 * - GeneratePassportPhotoInput - The input type for the generatePassportPhoto function.
 * - GeneratePassportPhotoOutput - The return type for the generatePassportPhoto function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const GeneratePassportPhotoInputSchema = z.object({
  imageDataUrl: z.string().describe("A data URI of the user's portrait. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type GeneratePassportPhotoInput = z.infer<typeof GeneratePassportPhotoInputSchema>;

export const GeneratePassportPhotoOutputSchema = z.object({
    photo: z.string().describe("A data URI of the generated 4x6 inch photo sheet containing multiple passport-sized photos. Expected format: 'data:image/png;base64,<encoded_data>'."),
});
export type GeneratePassportPhotoOutput = z.infer<typeof GeneratePassportPhotoOutputSchema>;


export async function generatePassportPhoto(input: GeneratePassportPhotoInput): Promise<GeneratePassportPhotoOutput> {
  return generatePassportPhotoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'passportPhotoPrompt',
  input: { schema: GeneratePassportPhotoInputSchema },
  output: { schema: GeneratePassportPhotoOutputSchema },
  prompt: `You are an expert passport photo processor.
Your task is to take an image of a person and convert it into a standard 4x6 inch printable sheet containing six 2x2 inch passport photos.

Follow these steps precisely:
1.  **Isolate the person:** Identify the main person in the image.
2.  **Remove the background:** Completely remove the original background and replace it with a solid, uniform, off-white background (hex #f0f0f0).
3.  **Crop and Center:** Crop the image to a 2x2 inch square. The person's head should be centered, and the top of the head to the bottom of the chin should be between 1 and 1 3/8 inches. Ensure there is some space above the head.
4.  **Create the sheet:** Create a new, blank 4x6 inch canvas (1200x1800 pixels).
5.  **Arrange the photos:** Arrange six copies of the processed 2x2 inch photo onto the 4x6 canvas in a 2x3 grid. Add a 0.25-inch margin between the photos and from the edges of the canvas.

Return the final 4x6 sheet as a single PNG image encoded as a data URI.

User's photo: {{media url=imageDataUrl}}
`,
});

const generatePassportPhotoFlow = ai.defineFlow(
  {
    name: 'generatePassportPhotoFlow',
    inputSchema: GeneratePassportPhotoInputSchema,
    outputSchema: GeneratePassportPhotoOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
