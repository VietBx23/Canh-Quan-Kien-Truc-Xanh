"use client";

import { suggestHeadersAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, ClipboardCopy, Loader2, Send, Sparkles, Timer, Upload } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { useFormState } from "react-dom";
import { format } from "date-fns";

type ContentEditorProps = {
  isConnected: boolean;
  addActivity: (text: string, icon: LucideIcon) => void;
};

const initialAIState = {
  message: "",
  errors: null,
  data: null,
};

export function ContentEditor({ isConnected, addActivity }: ContentEditorProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isPublishing, startPublishing] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [aiState, formAction] = useFormState(suggestHeadersAction, initialAIState);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isAISuggesting, startAISuggesting] = useTransition();

  const { toast } = useToast();

  useEffect(() => {
    if (aiState.message && !isAISuggesting) {
      if (aiState.errors || !aiState.data) {
        toast({
          variant: "destructive",
          title: "AI Suggestion Error",
          description: aiState.message,
        });
      } else if (aiState.data) {
        setShowSuggestions(true);
      }
    }
  }, [aiState, toast, isAISuggesting]);

  const handleSuggestHeaders = (formData: FormData) => {
    if (!content) {
      toast({ variant: 'destructive', title: 'Error', description: 'Content cannot be empty to suggest headers.' });
      return;
    }
    startAISuggesting(() => {
      formAction(formData);
    });
  };

  const publishOrSchedule = (isScheduling: boolean) => {
    if (!title || !content) {
      toast({ variant: "destructive", title: "Error", description: "Title and content cannot be empty." });
      return;
    }
    startPublishing(() => {
      setTimeout(() => {
        if (isScheduling) {
            toast({
                title: 'Scheduled!',
                description: `Your post "${title}" will be published on ${format(date!, "PPP")}.`
            });
            addActivity(`Scheduled post: "${title}" for ${format(date!, "PPP")}`, Timer);
        } else {
            const fakeLink = `https://sites.google.com/view/mysite/${title.toLowerCase().replace(/\s+/g, "-")}`;
            toast({
                title: "Published!",
                description: `Your post "${title}" is now live.`,
                action: (
                    <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(fakeLink)}>
                    Copy Link
                    </Button>
                ),
            });
            addActivity(`Published post: "${title}"`, Send);
        }
        setTitle("");
        setContent("");
        setDate(undefined);
      }, 1500);
    });
  }

  const copyHeader = (header: string) => {
    navigator.clipboard.writeText(header);
    toast({ description: "Header copied to clipboard!" });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result as string;
        const lines = fileContent.split('\n');
        // Use file name (without extension) as title
        const fileName = file.name.replace(/\.md$/, '');
        setTitle(fileName);
        setContent(fileContent);
        toast({
          title: "File Loaded",
          description: `Loaded content from ${file.name}`,
        });
        addActivity(`Loaded content from file: ${file.name}`, Upload);
      };
      reader.readAsText(file);
    }
    // Reset file input to allow uploading the same file again
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <Card className="flex h-full flex-col">
        <CardHeader>
          <CardTitle>Create New Post</CardTitle>
          <CardDescription>
            Compose your content and publish it to your Google Site.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Your post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isPublishing}
            />
          </div>
          <div className="grid w-full flex-grow items-start gap-1.5">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Write your article here..."
              className="min-h-[300px] flex-grow resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isPublishing}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => fileInputRef.current?.click()} disabled={isPublishing}>
              <Upload className="mr-2 h-4 w-4" />
              Upload File
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".md"
            />
            <form action={handleSuggestHeaders} className="contents">
                <input type="hidden" name="articleContent" value={content} />
                <Button type="submit" variant="outline" disabled={!content || isAISuggesting || isPublishing}>
                  {isAISuggesting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4 text-accent" />}
                  AI Suggest Headers
                </Button>
            </form>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2 border-t pt-6">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" disabled={!isConnected || isPublishing} className="w-[160px] justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Schedule Post"}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(day) => day < new Date() || day < new Date("1900-01-01")}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <Button onClick={() => publishOrSchedule(!!date)} disabled={!isConnected || isPublishing}>
                {isPublishing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : (date ? <Timer className="mr-2 h-4 w-4" /> : <Send className="mr-2 h-4 w-4" />)}
                {date ? "Schedule" : "Publish Now"}
            </Button>
        </CardFooter>
      </Card>
      <Dialog open={showSuggestions} onOpenChange={setShowSuggestions}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>AI Suggested Headers</DialogTitle>
            <DialogDescription>
              Here are some headers suggested by AI based on your content. Click to copy.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[50vh] overflow-y-auto py-4">
            <ul className="space-y-2">
              {aiState.data?.map((header: string, index: number) => (
                <li key={index} className="group flex items-center justify-between rounded-md p-2 hover:bg-muted">
                  <span className="text-sm">{header.replace(/^\d+\.\s/, '')}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100" onClick={() => copyHeader(header.replace(/^\d+\.\s/, ''))}>
                    <ClipboardCopy className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
