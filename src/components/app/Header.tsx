import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain, Phone, MessageSquare } from "lucide-react";
import Link from 'next/link';

export function Header() {
  const navItems = [
    { name: "Trang Chủ", href: "/" },
    { name: "Giới Thiệu", href: "/gioi-thieu" },
    { name: "Dịch Vụ", href: "/dich-vu" },
    { name: "Dự Án", href: "/du-an" },
    { name: "Khách Hàng", href: "/khach-hang" },
    { name: "Tin Tức", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Liên Hệ", href: "/lien-he" },
  ];

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm transition-all duration-300 md:px-8">
      <Link href="/" className="flex items-center gap-2">
        <Mountain className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg">Kiến Trúc Xanh</span>
      </Link>
      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
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
      <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="tel:0987654321" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary"/>
                <span>0987 654 321</span>
            </a>
          </Button>
           <Button asChild>
            <a href="https://zalo.me/0987654321" target="_blank" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4"/>
                <span>Tư Vấn Zalo</span>
            </a>
          </Button>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Mở menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 py-6">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Kiến Trúc Xanh</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
               <div className="border-t pt-4 mt-4 space-y-2">
                    <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                        <a href="tel:0987654321" className="flex items-center gap-2 text-base">
                            <Phone className="h-5 w-5"/>
                            <span>0987 654 321</span>
                        </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                        <a href="https://zalo.me/0987654321" target="_blank" className="flex items-center gap-2 text-base">
                            <MessageSquare className="h-5 w-5"/>
                            <span>Chat với Zalo</span>
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
