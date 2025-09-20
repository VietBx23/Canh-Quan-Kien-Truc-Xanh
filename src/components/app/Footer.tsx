import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-footer text-primary-foreground py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold">Cảnh Quan Kiến Trúc Xanh</h3>
            <p className="mt-2 text-sm opacity-90 max-w-md">
              Kiến tạo không gian sống đẳng cấp, hài hòa với thiên nhiên. Chuyên thiết kế sân vườn, thi công hồ cá Koi và cung cấp các giải pháp cảnh quan toàn diện.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Menu</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-90">
                <li><Link href="/gioi-thieu" className="hover:underline">Giới Thiệu</Link></li>
                <li><Link href="/dich-vu" className="hover:underline">Dịch Vụ</Link></li>
                <li><Link href="/du-an" className="hover:underline">Dự Án</Link></li>
                <li><Link href="/blog" className="hover:underline">Tin Tức</Link></li>
                <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link href="/lien-he" className="hover:underline">Liên Hệ</Link></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-lg">Thông tin liên hệ</h4>
            <ul className="mt-2 space-y-2 text-sm opacity-90">
                <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 shrink-0"/>
                    <span>123 Đường ABC, Phường X, Quận Y, TP.HCM</span>
                </li>
                <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 shrink-0"/>
                    <a href="mailto:lienhe@kientrucxanh.com" className="hover:underline">lienhe@kientrucxanh.com</a>
                </li>
                <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 shrink-0"/>
                    <a href="tel:0987654321" className="hover:underline">Hotline: 0987 654 321</a>
                </li>
                 <li className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 shrink-0"/>
                     <a href="https://zalo.me/0987654321" target="_blank" className="hover:underline">Zalo: 0987 654 321</a>
                </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-80">
          <p>&copy; {new Date().getFullYear()} Cảnh Quan Kiến Trúc Xanh. All Rights Reserved.</p>
        </div>
      </footer>
  )
}
