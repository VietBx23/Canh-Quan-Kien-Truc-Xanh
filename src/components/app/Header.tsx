import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mountain } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur-sm md:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Mountain className="h-5 w-5" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-foreground">
          SitePost
        </h1>
      </div>
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://picsum.photos/seed/user-avatar/40/40" data-ai-hint="user avatar" />
        <AvatarFallback>SP</AvatarFallback>
      </Avatar>
    </header>
  );
}
