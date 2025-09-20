import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import axios from 'axios';
import { aiSuggestedHeaders } from '@/ai/flows/ai-suggested-headers';

const suggestSchema = z.object({
  url: z.string().url({ message: "Invalid URL" }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = suggestSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json({ error: 'Invalid input', details: validated.error.flatten() }, { status: 400 });
    }

    const { url } = validated.data;

    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    const suggestedNovels = await aiSuggestedHeaders({ htmlContent: response.data });

    const responseData = {
      message: `Found ${suggestedNovels.novels.length} potential novels.`,
      data: suggestedNovels
    };

    return NextResponse.json(responseData);

  } catch (error: any) {
    console.error('Suggest Novels API Error:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (axios.isAxiosError(error)) {
      errorMessage = `Could not fetch content from URL. Status: ${error.response?.status}`;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
