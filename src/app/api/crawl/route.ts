import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const crawlSchema = z.object({
  url: z.string().url({ message: "Invalid URL" }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = crawlSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json({ error: 'Invalid input', details: validated.error.flatten() }, { status: 400 });
    }

    const { url } = validated.data;

    // For now, we just return the URL to confirm the API is working.
    // In the next step, we will fetch the content from this URL.
    const responseData = {
      message: `API received URL to crawl: ${url}`,
      crawledContent: `(Placeholder for content from ${url})`
    };

    return NextResponse.json(responseData);

  } catch (error) {
    console.error('Crawl API Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
