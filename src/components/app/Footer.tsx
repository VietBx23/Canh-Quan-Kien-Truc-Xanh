import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Mountain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-footer text-primary-foreground">
        <div className="container mx-auto px-4 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 lg:col-span-6">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Mountain className="h-7 w-7" />
                <span className="font-bold text-xl">Cảnh Quan Kiến Trúc Xanh</span>
              </Link>
              <p className="mt-4 text-sm opacity-80 max-w-md leading-relaxed">
                Kiến tạo không gian sống đẳng cấp, hài hòa với thiên nhiên. Chuyên thiết kế sân vườn, thi công hồ cá Koi và cung cấp các giải pháp cảnh quan toàn diện, bền vững.
              </p>
            </div>
            
            <div className="md:col-span-3 lg:col-span-3">
              <h4 className="font-bold text-lg tracking-wider uppercase">Menu</h4>
              <ul className="mt-4 space-y-2 text-sm opacity-90">
                  <li><Link href="/gioi-thieu" className="hover:text-accent transition-colors duration-300">Giới Thiệu</Link></li>
                  <li><Link href="/dich-vu" className="hover:text-accent transition-colors duration-300">Dịch Vụ</Link></li>
                  <li><Link href="/du-an" className="hover:text-accent transition-colors duration-300">Dự Án</Link></li>
                  <li><Link href="/blog" className="hover:text-accent transition-colors duration-300">Tin Tức</Link></li>
                  <li><Link href="/faq" className="hover:text-accent transition-colors duration-300">FAQ</Link></li>
                  <li><Link href="/lien-he" className="hover:text-accent transition-colors duration-300">Liên Hệ</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="font-bold text-lg tracking-wider uppercase">Thông tin liên hệ</h4>
              <ul className="mt-4 space-y-3 text-sm opacity-90">
                  <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-accent"/>
                      <span>123 Đường ABC, Phường X, Quận Y, TP.HCM</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 mt-0.5 shrink-0 text-accent"/>
                      <a href="mailto:lienhe@kientrucxanh.com" className="hover:text-accent transition-colors duration-300">lienhe@kientrucxanh.com</a>
                  </li>
                  <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 mt-0.5 shrink-0 text-accent"/>
                      <a href="tel:0987654321" className="hover:text-accent transition-colors duration-300">Hotline: 0987 654 321</a>
                  </li>
                   <li className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 mt-0.5 shrink-0 text-accent"/>
                       <a href="https://zalo.me/0987654321" target="_blank" className="hover:text-accent transition-colors duration-300">Zalo: 0987 654 321</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
            <div className="container mx-auto px-4 py-6 text-center text-xs opacity-70">
                <p>&copy; {new Date().getFullYear()} Cảnh Quan Kiến Trúc Xanh. All Rights Reserved. Designed with passion.</p>
            </div>
        </div>
      </footer>
  )
}
