"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Search } from "lucide-react";

export function Crawler() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
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
      toast({ title: "Success", description: "Crawled data received." });

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
        <CardTitle>Crawl a Novel Chapter</CardTitle>
        <CardDescription>
          Enter the URL of the novel chapter you want to crawl. The backend will fetch its content.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="url">Chapter URL</Label>
          <Input
            id="url"
            placeholder="https://your-novel-site.com/novel/chapter-1"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
          />
        </div>
        {result && (
          <div className="mt-4 rounded-md border bg-muted p-4">
            <h4 className="text-lg font-semibold mb-2">Crawl Result</h4>
            <pre className="text-sm whitespace-pre-wrap break-words">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end border-t pt-6">
        <Button onClick={handleCrawl} disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
          Crawl
        </Button>
      </CardFooter>
    </Card>
  );
}
