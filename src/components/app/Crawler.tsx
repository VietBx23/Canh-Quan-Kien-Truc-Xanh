"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Search, BookOpen, Wand2 } from "lucide-react";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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

type NovelSuggestion = {
  title: string;
  url: string;
}

type SuggestionResult = {
  message: string;
  data: {
    novels: NovelSuggestion[];
  }
}

export function Crawler() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [crawlResult, setCrawlResult] = useState<CrawlResult | null>(null);
  const [suggestionResult, setSuggestionResult] = useState<SuggestionResult | null>(null);
  const { toast } = useToast();

  const handleSuggest = async () => {
    if (!url) {
      toast({ variant: "destructive", title: "Error", description: "Please enter a URL to get suggestions." });
      return;
    }
    setIsSuggesting(true);
    setSuggestionResult(null);
    setCrawlResult(null);
    try {
      const response = await fetch('/api/suggest-novels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'An error occurred while suggesting.');
      }
      setSuggestionResult(data);
      toast({ title: "Suggestions Ready", description: data.message });
    } catch (error: any) {
      toast({ variant: "destructive", title: "Suggestion Failed", description: error.message });
    } finally {
      setIsSuggesting(false);
    }
  }

  const handleCrawl = async (crawlUrl?: string) => {
    const targetUrl = crawlUrl || url;
    if (!targetUrl) {
      toast({ variant: "destructive", title: "Error", description: "Please enter a URL." });
      return;
    }

    setIsLoading(true);
    setCrawlResult(null);
    setSuggestionResult(null); // Clear suggestions when a new crawl starts

    try {
      const response = await fetch('/api/crawl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: targetUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'An error occurred while crawling.');
      }
      
      setCrawlResult(data);
      setUrl(targetUrl); // Update URL in input box if crawling from suggestion
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
          Enter a URL to a novel's main page. You can either crawl it directly for chapters or ask the AI to suggest novels from it.
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
              disabled={isLoading || isSuggesting}
              onKeyDown={(e) => e.key === 'Enter' && handleCrawl()}
            />
            <Button onClick={handleSuggest} disabled={isLoading || isSuggesting} variant="outline">
              {isSuggesting ? <Loader2 className="animate-spin" /> : <><Wand2 className="mr-2" />Suggest</>}
            </Button>
            <Button onClick={() => handleCrawl()} disabled={isLoading || isSuggesting}>
              {isLoading ? <Loader2 className="animate-spin" /> : <><Search className="mr-2" />Crawl</>}
            </Button>
          </div>
        </div>

        {suggestionResult && (
           <Alert>
            <Wand2 className="h-4 w-4" />
            <AlertTitle>AI Suggestions</AlertTitle>
            <AlertDescription>
              The AI found these potential novels from the URL. Click one to crawl its chapters.
            </AlertDescription>
            <div className="mt-4 space-y-2">
              {suggestionResult.data.novels.length > 0 ? (
                suggestionResult.data.novels.map((novel, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-md border hover:bg-muted/50 cursor-pointer" onClick={() => handleCrawl(novel.url)}>
                     <span className="text-sm font-medium">{novel.title}</span>
                     <Search className="h-4 w-4 text-primary" />
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No novels found to suggest.</p>
              )}
            </div>
          </Alert>
        )}

        {crawlResult && (
          <div className="mt-4 rounded-md border">
            <CardHeader className="p-4">
              <h4 className="text-lg font-semibold mb-1">Extracted Chapters</h4>
              <p className="text-sm text-muted-foreground">{crawlResult.message}</p>
            </CardHeader>
            <ScrollArea className="h-72 w-full p-4 pt-0">
               <div className="space-y-2">
                {crawlResult.data.chapters.length > 0 ? (
                  crawlResult.data.chapters.map((chapter, index) => (
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
                      {index < crawlResult.data.chapters.length - 1 && <Separator />}
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
