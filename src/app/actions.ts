'use server';

import { getSuggestedHeaders } from '@/ai/flows/ai-suggested-headers';
import { z } from 'zod';

const schema = z.object({
  articleContent: z.string().min(50, { message: 'Article content must be at least 50 characters long.' }),
});

export async function suggestHeadersAction(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    articleContent: formData.get('articleContent'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.articleContent?.[0] || 'Invalid input.',
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const headers = await getSuggestedHeaders({
      articleContent: validatedFields.data.articleContent,
    });
    if (!headers || headers.length === 0) {
      return {
        message: 'AI could not generate headers for this content. Try adding more text.',
        errors: null,
        data: null,
      };
    }
    return {
      message: 'Successfully generated headers.',
      errors: null,
      data: headers,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred while generating headers.',
      errors: null,
      data: null,
    };
  }
}
