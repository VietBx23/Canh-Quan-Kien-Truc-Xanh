
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageSquare, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default async function ContactPage() {
    
    const contactInfo = [
        { icon: MapPin, title: "Địa chỉ", content: "69/52 Đường số 3, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM", href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1345437887323!2d106.60636827588327!3d10.800938458739126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be3d891487b%3A0x9334a601569c760!2zNjkvNTIgxJDGsOG7nW5nIFPhu5EgMywgQsOsbmggSMawbmcgSMOyYSwgQsOsbmggVMOibiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1721894982635!5m2!1svi!2s" },
        { icon: Phone, title: "Hotline", content: "0933 741 779", href: "tel:0933741779" },
        { icon: Mail, title: "Email", content: "lienhe@kientrucxanh.com", href: "mailto:lienhe@kientrucxanh.com" },
        { icon: MessageSquare, title: "Zalo", content: "0933 741 779", href: "https://zalo.me/0933741779" },
    ];
    
    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Liên Hệ Với Chúng Tôi</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Chúng tôi luôn sẵn lòng lắng nghe ý tưởng và giải đáp mọi thắc mắc của bạn. Hãy kết nối với chúng tôi!
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Contact Form */}
                            <div className="animate-fade-in-up">
                                 <h2 className="text-3xl font-bold text-primary mb-6">Gửi Yêu Cầu Tư Vấn</h2>
                                 <Card className="bg-white border-none shadow-2xl">
                                    <CardContent className="p-8">
                                        <form className="space-y-6">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name" className="font-semibold">Họ và tên</Label>
                                                    <Input id="name" placeholder="Nguyễn Văn A" className="bg-muted/50"/>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone" className="font-semibold">Số điện thoại</Label>
                                                    <Input id="phone" type="tel" placeholder="09xxxxxxxx" className="bg-muted/50"/>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="font-semibold">Email</Label>
                                                <Input id="email" type="email" placeholder="email@example.com" className="bg-muted/50"/>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="message" className="font-semibold">Nội dung yêu cầu</Label>
                                                <Textarea id="message" placeholder="Tôi cần tư vấn về thiết kế sân vườn cho biệt thự..." className="bg-muted/50 min-h-[120px]"/>
                                            </div>
                                            <Button type="submit" size="lg" className="w-full text-base py-6">Gửi Yêu Cầu</Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                            
                            {/* Contact Info & Map */}
                            <div className="space-y-8 animate-fade-in-up animation-delay-300">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {contactInfo.slice(0, 2).map((item, index) => (
                                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                                <item.icon className="w-6 h-6 text-accent"/>
                                                <CardTitle className="text-lg">{item.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <Link href={item.href} target="_blank" className="text-muted-foreground hover:text-primary break-words">
                                                    {item.content}
                                                </Link>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {contactInfo.slice(2, 4).map((item, index) => (
                                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                                <item.icon className="w-6 h-6 text-accent"/>
                                                <CardTitle className="text-lg">{item.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <Link href={item.href} target="_blank" className="text-muted-foreground hover:text-primary break-words">
                                                    {item.content}
                                                </Link>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                                 <div className="mt-8 rounded-lg overflow-hidden shadow-2xl">
                                    <iframe 
                                        src={contactInfo[0].href}
                                        width="100%" 
                                        height="350" 
                                        style={{border:0}} 
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
