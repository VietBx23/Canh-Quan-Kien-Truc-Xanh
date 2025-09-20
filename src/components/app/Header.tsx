import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain } from "lucide-react";

export function Header() {
  const navItems = [
    { name: "Dịch Vụ", href: "#services" },
    { name: "Dự Án", href: "#gallery" },
    { name: "Khách Hàng", href: "#testimonials" },
    { name: "Liên Hệ", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur-sm md:px-6">
      <a href="#" className="flex items-center gap-2">
        <Mountain className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg">Kiến Trúc Xanh</span>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            {item.name}
          </a>
        ))}
      </nav>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 py-6">
              <a href="#" className="flex items-center gap-2 mb-4">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Kiến Trúc Xanh</span>
              </a>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
