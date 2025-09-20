"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Search, BookOpen } from "lucide-react";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

type Chapter = {
  title: string;
  url: string;
};

type CrawlResult = {
  message: string;
  data: {
    chapters: Chapter[];
  };
};

export function Crawler() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CrawlResult | null>(null);
  const { toast } = useToast();

  const handleCrawl = async () => {
    if (!url) {
      toast({ variant: "destructive", title: "Error", description: "Please enter a URL." });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/crawl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'An error occurred while crawling.');
      }
      
      setResult(data);
      toast({ title: "Success", description: `Found ${data.data.chapters.length} chapters.` });

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Crawl Failed",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Crawl a Novel's Table of Contents</CardTitle>
        <CardDescription>
          Enter the URL of the novel's main page or table of contents. The AI will extract the chapter list.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="url">Novel URL</Label>
          <div className="flex gap-2">
            <Input
              id="url"
              placeholder="https://chuangshi.qq.com/bk/..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
              onKeyDown={(e) => e.key === 'Enter' && handleCrawl()}
            />
            <Button onClick={handleCrawl} disabled={isLoading} className="w-28">
              {isLoading ? <Loader2 className="animate-spin" /> : <><Search className="mr-2" />Crawl</>}
            </Button>
          </div>
        </div>
        {result && (
          <div className="mt-4 rounded-md border">
            <CardHeader className="p-4">
              <h4 className="text-lg font-semibold mb-1">Extracted Chapters</h4>
              <p className="text-sm text-muted-foreground">{result.message}</p>
            </CardHeader>
            <ScrollArea className="h-72 w-full p-4 pt-0">
               <div className="space-y-2">
                {result.data.chapters.length > 0 ? (
                  result.data.chapters.map((chapter, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50">
                        <div className="flex items-center gap-3">
                           <BookOpen className="text-muted-foreground"/>
                           <span className="text-sm">{chapter.title}</span>
                        </div>
                        <a href={chapter.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          Visit
                        </a>
                      </div>
                      {index < result.data.chapters.length - 1 && <Separator />}
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground p-4">No chapters found.</p>
                )}
              </div>
            </ScrollArea>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
