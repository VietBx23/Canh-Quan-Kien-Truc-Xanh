"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Upload, Image as ImageIcon, Download } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function PassportPhotoGenerator() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalImage(e.target?.result as string);
        setGeneratedImage(null); // Reset generated image on new upload
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!originalImage) {
      toast({
        variant: 'destructive',
        title: 'No Image Selected',
        description: 'Please upload an image first.',
      });
      return;
    }
    setIsLoading(true);
    setGeneratedImage(null);

    try {
      const response = await fetch('/api/generate-passport-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageDataUrl: originalImage }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate photo.');
      }

      setGeneratedImage(data.photo);
      toast({
        title: 'Success!',
        description: 'Your passport photo sheet is ready.',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'passport_photos.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Your Passport Photo</CardTitle>
        <CardDescription>Upload a portrait, and we'll generate a standardized photo sheet for you.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex h-48 w-48 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/50 bg-muted/20">
            {originalImage ? (
              <Image src={originalImage} alt="Uploaded portrait" layout="fill" objectFit="contain" className="rounded-lg" />
            ) : (
              <div className="text-center text-muted-foreground">
                <Upload className="mx-auto h-8 w-8" />
                <p className="mt-2 text-sm">Upload your photo</p>
              </div>
            )}
          </div>
          <Button asChild variant="outline">
            <label htmlFor="photo-upload" className="cursor-pointer">
              <Upload className="mr-2 h-4 w-4" />
              Choose File
              <input id="photo-upload" type="file" accept="image/*" className="sr-only" onChange={handleImageUpload} />
            </label>
          </Button>
        </div>

        {generatedImage && (
          <div className="space-y-4">
             <Alert>
                <ImageIcon className="h-4 w-4" />
                <AlertTitle>Generated Photo Sheet</AlertTitle>
                <AlertDescription>
                 Your 4x6 inch photo sheet is ready. Click download to save it.
                </AlertDescription>
            </Alert>
            <div className="relative w-full overflow-hidden rounded-lg border aspect-[2/3] bg-white">
               <Image src={generatedImage} alt="Generated passport photo sheet" layout="fill" objectFit="contain" />
            </div>
          </div>
        )}

        {isLoading && (
            <div className="flex flex-col items-center justify-center gap-2 rounded-lg border p-8 bg-secondary/50">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="text-muted-foreground">AI is working its magic... Please wait.</p>
                <p className="text-sm text-muted-foreground/80">(This can take up to 30 seconds)</p>
            </div>
        )}


      </CardContent>
      <CardFooter className="flex justify-end gap-2">
         {generatedImage && !isLoading && (
          <Button onClick={downloadImage} variant="secondary">
            <Download className="mr-2" />
            Download
          </Button>
        )}
        <Button onClick={handleGenerate} disabled={!originalImage || isLoading}>
          {isLoading ? <Loader2 className="animate-spin" /> : 'Generate Photo'}
        </Button>
      </CardFooter>
    </Card>
  );
}
