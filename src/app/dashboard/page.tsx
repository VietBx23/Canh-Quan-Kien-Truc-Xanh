"use client";

import { Header } from "@/components/app/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Fish, Sprout, Quote, Phone } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-garden');
  const serviceGarden = PlaceHolderImages.find(p => p.id === 'service-garden');
  const serviceKoi = PlaceHolderImages.find(p => p.id === 'service-koi');
  const serviceMaintenance = PlaceHolderImages.find(p => p.id === 'service-maintenance');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));
  const testimonialAvatar1 = PlaceHolderImages.find(p => p.id === 'testimonial-1');
  const testimonialAvatar2 = PlaceHolderImages.find(p => p.id === 'testimonial-2');


  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Beautiful garden landscape"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Kiến Tạo Không Gian Xanh</h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl">
              Chuyên thiết kế, thi công sân vườn, hồ cá Koi và bảo dưỡng cảnh quan chuyên nghiệp.
            </p>
            <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              Liên Hệ Tư Vấn
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Dịch Vụ Của Chúng Tôi</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Cung cấp các giải pháp toàn diện để mang thiên nhiên vào không gian sống của bạn.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                {serviceGarden && <Image src={serviceGarden.imageUrl} alt="Thiết kế sân vườn" width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={serviceGarden.imageHint} />}
                <CardHeader>
                  <Leaf className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Thiết kế Sân vườn</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Tư vấn, thiết kế cảnh quan sân vườn biệt thự, nhà phố, quán cafe theo phong cách hiện đại và hợp phong thủy.</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                {serviceKoi && <Image src={serviceKoi.imageUrl} alt="Thi công hồ cá Koi" width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={serviceKoi.imageHint} />}
                <CardHeader>
                  <Fish className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Thi công Hồ cá Koi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Xây dựng hồ cá Koi chuyên nghiệp, hệ thống lọc đạt chuẩn, đảm bảo môi trường sống tốt nhất cho cá.</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                {serviceMaintenance && <Image src={serviceMaintenance.imageUrl} alt="Bảo dưỡng cảnh quan" width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={serviceMaintenance.imageHint} />}
                <CardHeader>
                  <Sprout className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Bảo dưỡng Cảnh quan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Dịch vụ chăm sóc cây cối, cắt tỉa, bón phân định kỳ, giữ cho khu vườn của bạn luôn xanh tốt.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24">
           <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Dự Án Tiêu Biểu</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  Những không gian xanh đầy cảm hứng mà chúng tôi đã kiến tạo.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                   <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <Image src={image.imageUrl} alt={`Project ${index + 1}`} width={400} height={400} className="w-full h-full object-cover aspect-square" data-ai-hint={image.imageHint} />
                   </div>
                ))}
              </div>
           </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Khách Hàng Nói Về Chúng Tôi</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  {testimonialAvatar1 && <Image src={testimonialAvatar1.imageUrl} alt="Avatar khách hàng 1" width={56} height={56} className="rounded-full" data-ai-hint={testimonialAvatar1.imageHint}/>}
                  <div>
                    <CardTitle>Anh Minh</CardTitle>
                    <CardDescription>Chủ biệt thự, Quận 2</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"Đội ngũ làm việc rất chuyên nghiệp và có tâm. Khu vườn nhà tôi giờ đây thật sự là một nơi thư giãn tuyệt vời. Cảm ơn Kiến Trúc Xanh!"</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                   {testimonialAvatar2 && <Image src={testimonialAvatar2.imageUrl} alt="Avatar khách hàng 2" width={56} height={56} className="rounded-full" data-ai-hint={testimonialAvatar2.imageHint}/>}
                   <div>
                    <CardTitle>Chị Lan Anh</CardTitle>
                    <CardDescription>Chủ quán cafe</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"Hồ cá Koi đã trở thành điểm nhấn thu hút khách cho quán của tôi. Dịch vụ và chất lượng thi công vượt xa mong đợi của tôi."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Liên Hệ Với Chúng Tôi</h2>
                    <p className="text-muted-foreground mt-2">Để nhận tư vấn và báo giá miễn phí</p>
                </div>
                <Card className="max-w-xl mx-auto">
                    <CardContent className="p-6">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Họ và tên</Label>
                                    <Input id="name" placeholder="Nguyễn Văn A" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Số điện thoại</Label>
                                    <Input id="phone" type="tel" placeholder="09xxxxxxxx" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="email@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Nội dung yêu cầu</Label>
                                <Textarea id="message" placeholder="Tôi cần tư vấn về thiết kế sân vườn..." />
                            </div>
                            <Button type="submit" className="w-full">Gửi Yêu Cầu</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>

      </main>
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold">Cảnh Quan Kiến Trúc Xanh</h3>
          <p className="mt-2">Địa chỉ: 123 Đường ABC, Phường X, Quận Y, TP.HCM</p>
          <p>Email: lienhe@kientrucxanh.com</p>
          <div className="flex justify-center items-center gap-2 mt-2">
            <Phone className="w-4 h-4"/>
            <span>Hotline: 0987 654 321</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4">&copy; 2024 Cảnh Quan Kiến Trúc Xanh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
