
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain, Phone, MessageSquare, Search, Globe, X } from "lucide-react";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "../../../i18n-config";

export function Header({ lang }: { lang?: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchPath = `/${lang ?? i18n.defaultLocale}/search?q=${encodeURIComponent(searchQuery.trim())}`;
      router.push(searchPath);
    }
  };

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const navItems = [
    { name: "Trang Chủ", name_en: "Home", href: "/dashboard" },
    { name: "Giới Thiệu", name_en: "About", href: "/gioi-thieu" },
    { name: "Dịch Vụ", name_en: "Services", href: "/dich-vu" },
    { name: "Dự Án", name_en: "Projects", href: "/du-an" },
    { name: "Khách Hàng", name_en: "Clients", href: "/khach-hang" },
    { name: "Tin Tức", name_en: "Blog", href: "/blog" },
    { name: "FAQ", name_en: "FAQ", href: "/faq" },
    { name: "Liên Hệ", name_en: "Contact", href: "/lien-he" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLang = lang ?? i18n.defaultLocale;
  const isVietnamese = currentLang === 'vi';

  return (
    <header className={cn(
      "sticky top-0 z-50 flex h-20 items-center justify-between border-b px-4 transition-all duration-300 md:px-8",
      isScrolled ? "border-border bg-background/80 backdrop-blur-sm shadow-sm" : "border-transparent bg-background"
    )}>
      <Link href={`/${currentLang}/dashboard`} className="flex items-center gap-2">
        <Mountain className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg">Kiến Trúc Xanh</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className={cn("hidden lg:flex items-center gap-6 text-sm font-medium transition-all", isSearchOpen && 'opacity-0 pointer-events-none')}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={`/${currentLang}${item.href}`}
            className="text-foreground/80 transition-colors hover:text-primary font-medium"
          >
            {isVietnamese ? item.name : item.name_en}
          </Link>
        ))}
      </nav>

      {/* Desktop Search Bar */}
       <div className={cn("hidden lg:flex absolute left-1/2 -translate-x-1/2 w-full max-w-md items-center transition-all", isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none')}>
        <form onSubmit={handleSearchSubmit} className="w-full">
          <Input 
            type="search" 
            placeholder={isVietnamese ? "Tìm kiếm dịch vụ, dự án, bài viết..." : "Search services, projects, articles..."} 
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
            <span className="sr-only">{isVietnamese ? "Tìm kiếm" : "Search"}</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5"/>
                <span className="sr-only">{isVietnamese ? "Ngôn ngữ" : "Language"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={redirectedPathName('vi')}>Tiếng Việt (VN)</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={redirectedPathName('en')}>English (US)</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
           <Button asChild>
            <a href="https://zalo.me/0933741779" target="_blank" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4"/>
                <span>{isVietnamese ? "Tư Vấn Zalo" : "Zalo Chat"}</span>
            </a>
          </Button>
      </div>
      
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">{isVietnamese ? "Mở menu" : "Open menu"}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85%] max-w-sm">
            <div className="flex h-full flex-col">
              <div className="grid gap-4 py-6">
                <Link href={`/${currentLang}/dashboard`} className="flex items-center gap-2 mb-4">
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">Kiến Trúc Xanh</span>
                </Link>
                <form onSubmit={handleSearchSubmit}>
                    <div className="relative">
                        <Input 
                          type="search" 
                          placeholder={isVietnamese ? "Tìm kiếm..." : "Search..."}
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
                    href={`/${currentLang}${item.href}`}
                    className="block text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                  >
                    {isVietnamese ? item.name : item.name_en}
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
                            <span>{isVietnamese ? "Chat với Zalo" : "Chat on Zalo"}</span>
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
