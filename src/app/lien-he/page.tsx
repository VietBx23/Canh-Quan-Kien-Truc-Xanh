import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Liên Hệ Với Chúng Tôi</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Chúng tôi luôn sẵn lòng lắng nghe ý tưởng và giải đáp mọi thắc mắc của bạn.
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
                        <div>
                             <h2 className="text-3xl font-bold text-primary mb-6">Gửi Yêu Cầu Tư Vấn</h2>
                             <Card className="bg-muted/30 border-none shadow-lg">
                                <CardContent className="p-8">
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Họ và tên</Label>
                                                <Input id="name" placeholder="Nguyễn Văn A" className="bg-white"/>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Số điện thoại</Label>
                                                <Input id="phone" type="tel" placeholder="09xxxxxxxx" className="bg-white"/>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email (Tùy chọn)</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="bg-white"/>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Nội dung yêu cầu</Label>
                                            <Textarea id="message" placeholder="Tôi cần tư vấn về thiết kế sân vườn cho biệt thự..." className="bg-white min-h-[120px]"/>
                                        </div>
                                        <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground text-base py-6 hover:bg-accent/90">Gửi Yêu Cầu</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                             <h2 className="text-3xl font-bold text-primary mb-6">Thông Tin Công Ty</h2>
                             <div className="space-y-6 text-lg">
                                 <div className="flex items-start gap-4">
                                     <MapPin className="h-8 w-8 text-primary mt-1"/>
                                     <div>
                                         <h3 className="font-bold">Địa chỉ</h3>
                                         <p className="text-muted-foreground">123 Đường ABC, Phường X, Quận Y, TP.HCM</p>
                                     </div>
                                 </div>
                                  <div className="flex items-start gap-4">
                                     <Phone className="h-8 w-8 text-primary mt-1"/>
                                     <div>
                                         <h3 className="font-bold">Hotline</h3>
                                         <a href="tel:0987654321" className="text-muted-foreground hover:text-primary">0987 654 321</a>
                                     </div>
                                 </div>
                                 <div className="flex items-start gap-4">
                                     <Mail className="h-8 w-8 text-primary mt-1"/>
                                     <div>
                                         <h3 className="font-bold">Email</h3>
                                         <a href="mailto:lienhe@kientrucxanh.com" className="text-muted-foreground hover:text-primary">lienhe@kientrucxanh.com</a>
                                     </div>
                                 </div>
                             </div>
                             <div className="mt-8">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447176473017!2d106.69748801474939!3d10.77698699232101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a393e3e33%3A0x28a8a56f30a4e4b6!2sB%E1%BA%A3o%20t%C3%A0ng%20Ch%E1%BB%A9ng%20t%C3%ADch%20Chi%E1%BA%BFn%20tranh!5e0!3m2!1svi!2s!4v1626255146985!5m2!1svi!2s" 
                                    width="100%" 
                                    height="300" 
                                    style={{border:0}} 
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg shadow-md"
                                ></iframe>
                             </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
