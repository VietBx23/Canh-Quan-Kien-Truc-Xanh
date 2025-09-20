import { NextRequest, NextResponse } from 'next/server';
import { generatePassportPhoto, GeneratePassportPhotoInputSchema } from '@/ai/flows/generate-passport-photo';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = GeneratePassportPhotoInputSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json({ error: 'Invalid input', details: validated.error.flatten() }, { status: 400 });
    }

    const result = await generatePassportPhoto(validated.data);
    
    return NextResponse.json(result);

  } catch (error: any) {
    console.error('Passport Photo API Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred while generating the photo.' }, { status: 500 });
  }
}
