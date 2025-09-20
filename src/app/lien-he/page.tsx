
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { getDictionary } from "@/get-dictionary";
import { Locale } from "i18n-config";

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale }}) {
    const dictionary = await getDictionary(lang);
    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header lang={lang} dictionary={dictionary} />
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
                    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
                        <div className="order-last lg:order-first">
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
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-6">Thông Tin Công Ty</h2>
                                <div className="space-y-6 text-lg">
                                    <div className="flex items-start gap-4 group">
                                        <MapPin className="h-8 w-8 text-accent mt-1 shrink-0"/>
                                        <div>
                                            <h3 className="font-bold text-primary">Địa chỉ</h3>
                                            <p className="text-muted-foreground group-hover:text-primary transition-colors">69/52 Đường số 3, phường Bình Hưng Hòa, quận Bình Tân, Thành phố Hồ Chí Minh</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <Phone className="h-8 w-8 text-accent mt-1 shrink-0"/>
                                        <div>
                                            <h3 className="font-bold text-primary">Hotline</h3>
                                            <a href="tel:0933741779" className="text-muted-foreground group-hover:text-primary transition-colors">0933 741 779</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <Mail className="h-8 w-8 text-accent mt-1 shrink-0"/>
                                        <div>
                                            <h3 className="font-bold text-primary">Email</h3>
                                            <a href="mailto:lienhe@kientrucxanh.com" className="text-muted-foreground group-hover:text-primary transition-colors">lienhe@kientrucxanh.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group">
                                        <MessageSquare className="h-8 w-8 text-accent mt-1 shrink-0"/>
                                        <div>
                                            <h3 className="font-bold text-primary">Zalo</h3>
                                            <a href="https://zalo.me/0933741779" target="_blank" className="text-muted-foreground group-hover:text-primary transition-colors">0933 741 779</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="mt-8 rounded-lg overflow-hidden shadow-2xl">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1345437887323!2d106.60636827588327!3d10.800938458739126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be3d891487b%3A0x9334a601569c760!2zNjkvNTIgxJDGsOG7nW5nIFPhu5EgMywgQsOsbmggSMawbmcgSMOyYSwgQsOsbmggVMOibiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1721894982635!5m2!1svi!2s" 
                                    width="100%" 
                                    height="300" 
                                    style={{border:0}} 
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                             </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer lang={lang} dictionary={dictionary} />
        </div>
    );
}
