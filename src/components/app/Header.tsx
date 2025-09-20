
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain, Phone, MessageSquare, Search, Globe, X } from "lucide-react";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchPath = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      router.push(searchPath);
    }
  };

  const navItems = [
    { name: "Trang Chủ", href: "/dashboard" },
    { name: "Giới Thiệu", href: "/gioi-thieu" },
    { name: "Dịch Vụ", href: "/dich-vu" },
    { name: "Dự Án", href: "/du-an" },
    { name: "Khách Hàng", href: "/khach-hang" },
    { name: "Tin Tức", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Liên Hệ", href: "/lien-he" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 flex h-20 items-center justify-between border-b px-4 transition-all duration-300 md:px-8",
      isScrolled ? "border-border bg-background/80 backdrop-blur-sm shadow-sm" : "border-transparent bg-background"
    )}>
      <Link href="/dashboard" className="flex items-center gap-2">
        <Mountain className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg">Kiến Trúc Xanh</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className={cn("hidden lg:flex items-center gap-6 text-sm font-medium transition-all", isSearchOpen && 'opacity-0 pointer-events-none')}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-foreground/80 transition-colors hover:text-primary font-medium"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Desktop Search Bar */}
       <div className={cn("hidden lg:flex absolute left-1/2 -translate-x-1/2 w-full max-w-md items-center transition-all", isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none')}>
        <form onSubmit={handleSearchSubmit} className="w-full">
          <Input 
            type="search" 
            placeholder="Tìm kiếm dịch vụ, dự án, bài viết..." 
            className="pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8" onClick={() => setIsSearchOpen(false)}>
            <X className="h-5 w-5 text-muted-foreground"/>
        </Button>
      </div>

      <div className="hidden lg:flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5"/>
            <span className="sr-only">Tìm kiếm</span>
          </Button>
           <Button asChild>
            <a href="https://zalo.me/0933741779" target="_blank" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4"/>
                <span>Tư Vấn Zalo</span>
            </a>
          </Button>
      </div>
      
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Mở menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85%] max-w-sm">
            <div className="flex h-full flex-col">
              <div className="grid gap-4 py-6">
                <Link href="/dashboard" className="flex items-center gap-2 mb-4">
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">Kiến Trúc Xanh</span>
                </Link>
                <form onSubmit={handleSearchSubmit}>
                    <div className="relative">
                        <Input 
                          type="search" 
                          placeholder="Tìm kiếm..."
                          className="pr-10" 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Search className="h-5 w-5 text-muted-foreground"/>
                        </button>
                    </div>
                </form>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
               <div className="border-t pt-4 mt-auto space-y-2">
                    <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                        <a href="tel:0933741779" className="flex items-center gap-2 text-base">
                            <Phone className="h-5 w-5 text-primary"/>
                            <span>0933 741 779</span>
                        </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                        <a href="https://zalo.me/0933741779" target="_blank" className="flex items-center gap-2 text-base">
                            <MessageSquare className="h-5 w-5 text-primary"/>
                            <span>Tư Vấn Zalo</span>
                        </a>
                    </Button>
                </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
