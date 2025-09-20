import { Phone, Mail, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import { Mountain, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function Footer({ dictionary }: { dictionary: any }) {
  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Youtube", href: "#", icon: Youtube },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ]
  return (
      <footer className="bg-gradient-footer text-primary-foreground border-t-4 border-accent">
        <div className="container mx-auto px-4 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Logo & Description */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Mountain className="h-8 w-8 text-accent" />
                <span className="font-bold text-2xl text-white">Kiến Trúc Xanh</span>
              </Link>
              <p className="text-sm text-primary-foreground/70 leading-relaxed pr-8">
                {dictionary.footer.description}
              </p>
              <div className="mt-6 flex gap-3">
                {socialLinks.map(link => (
                  <Button key={link.name} variant="outline" size="icon" asChild className="bg-white/10 border-white/20 text-white/80 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors duration-300">
                    <Link href={link.href}>
                      <span className="sr-only">{link.name}</span>
                      <link.icon className="w-5 h-5"/>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-lg tracking-wider uppercase text-white mb-4">{dictionary.footer.menu}</h4>
              <ul className="space-y-3 text-sm">
                  <li><Link href="/gioi-thieu" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">{dictionary.header.about}</Link></li>
                  <li><Link href="/dich-vu" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">{dictionary.header.services}</Link></li>
                  <li><Link href="/du-an" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">{dictionary.header.projects}</Link></li>
                  <li><Link href="/blog" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">{dictionary.header.blog}</Link></li>
                  <li><Link href="/lien-he" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">{dictionary.header.contact}</Link></li>
              </ul>
            </div>
            
            {/* Main Services */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-lg tracking-wider uppercase text-white mb-4">{dictionary.footer.main_services}</h4>
              <ul className="space-y-3 text-sm">
                  <li><Link href="/dich-vu" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors duration-300"><Briefcase className="w-4 h-4 text-accent/80"/>{dictionary.footer.service_villa}</Link></li>
                  <li><Link href="/dich-vu" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors duration-300"><Briefcase className="w-4 h-4 text-accent/80"/>{dictionary.footer.service_koi}</Link></li>
                  <li><Link href="/dich-vu" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors duration-300"><Briefcase className="w-4 h-4 text-accent/80"/>{dictionary.footer.service_fengshui}</Link></li>
                  <li><Link href="/dich-vu" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors duration-300"><Briefcase className="w-4 h-4 text-accent/80"/>{dictionary.footer.service_maintenance}</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
               <h4 className="font-bold text-lg tracking-wider uppercase text-white mb-4">{dictionary.footer.contact_info}</h4>
              <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-1 shrink-0 text-accent"/>
                      <span className="text-primary-foreground/70">69/52 Đường số 3, phường Bình Hưng Hòa, quận Bình Tân, Thành phố Hồ Chí Minh</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 mt-1 shrink-0 text-accent"/>
                      <a href="mailto:lienhe@kientrucxanh.com" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">lienhe@kientrucxanh.com</a>
                  </li>
                  <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 mt-1 shrink-0 text-accent"/>
                      <a href="tel:0933741779" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">{dictionary.footer.hotline}: 0933 741 779</a>
                  </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="border-t border-white/10 mt-8">
            <div className="container mx-auto px-4 py-6 text-center text-xs text-primary-foreground/60">
                <p>&copy; {new Date().getFullYear()} {dictionary.footer.copyright}</p>
            </div>
        </div>
      </footer>
  )
}
