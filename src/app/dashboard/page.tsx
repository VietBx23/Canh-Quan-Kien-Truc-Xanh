"use client";

import { Header } from "@/components/app/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Fish, Sprout, Phone } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function DashboardPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-garden');
  const serviceGarden = PlaceHolderImages.find(p => p.id === 'service-garden');
  const serviceKoi = PlaceHolderImages.find(p => p.id === 'service-koi');
  const serviceMaintenance = PlaceHolderImages.find(p => p.id === 'service-maintenance');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));
  const testimonialAvatar1 = PlaceHolderImages.find(p => p.id === 'testimonial-1');
  const testimonialAvatar2 = PlaceHolderImages.find(p => p.id === 'testimonial-2');


  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] w-full text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Beautiful garden landscape"
              fill
              className="object-cover brightness-[0.6]"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg animate-fade-in-up">Kiến Tạo Không Gian Sống Đẳng Cấp</h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-shadow animate-fade-in-up animation-delay-300">
              Chuyên nghiệp trong từng thiết kế, tận tâm trong từng công trình sân vườn, hồ cá Koi.
            </p>
            <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-600">
              Yêu Cầu Tư Vấn
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Dịch Vụ Của Chúng Tôi</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Chúng tôi cung cấp các giải pháp cảnh quan toàn diện, biến ý tưởng của bạn thành hiện thực.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-none hover:-translate-y-2">
                {serviceGarden && <Image src={serviceGarden.imageUrl} alt="Thiết kế sân vườn" width={600} height={400} className="w-full h-56 object-cover" data-ai-hint={serviceGarden.imageHint} />}
                <CardHeader>
                  <Leaf className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-2xl">Thiết kế Sân vườn</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Tư vấn, thiết kế cảnh quan sân vườn biệt thự, nhà phố, resort theo phong cách độc đáo và hợp phong thủy.</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-none hover:-translate-y-2">
                {serviceKoi && <Image src={serviceKoi.imageUrl} alt="Thi công hồ cá Koi" width={600} height={400} className="w-full h-56 object-cover" data-ai-hint={serviceKoi.imageHint} />}
                <CardHeader>
                  <Fish className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-2xl">Hồ Cá Koi Chuyên Nghiệp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Xây dựng hồ cá Koi với hệ thống lọc chuẩn quốc tế, đảm bảo môi trường sống lý tưởng và thẩm mỹ cao.</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-none hover:-translate-y-2">
                {serviceMaintenance && <Image src={serviceMaintenance.imageUrl} alt="Đá phong thủy & Tiểu cảnh" width={600} height={400} className="w-full h-56 object-cover" data-ai-hint={serviceMaintenance.imageHint} />}
                <CardHeader>
                  <Sprout className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-2xl">Đá Phong Thủy & Tiểu Cảnh</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Cung cấp và bài trí đá phong thủy, thác nước, non bộ, mang lại vượng khí và nét đẹp cho không gian.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-20 md:py-28 bg-muted">
           <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Dự Án Tiêu Biểu</h2>
                <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                  Nơi mỗi công trình là một tác phẩm nghệ thuật đầy tâm huyết.
                </p>
              </div>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-6xl mx-auto"
              >
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden">
                          <CardContent className="flex aspect-square items-center justify-center p-0">
                             <Image 
                                src={image.imageUrl} 
                                alt={`Project ${index + 1}`} 
                                width={400} 
                                height={400} 
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                                data-ai-hint={image.imageHint} 
                              />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
           </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Khách Hàng Nói Về Chúng Tôi</h2>
               <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                  Sự hài lòng của khách hàng là minh chứng rõ nhất cho chất lượng dịch vụ.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-none shadow-lg bg-muted transform transition-all hover:scale-105">
                <CardContent className="p-8">
                  <p className="text-muted-foreground italic mb-6">"Đội ngũ làm việc rất chuyên nghiệp và có tâm. Khu vườn nhà tôi giờ đây thật sự là một nơi thư giãn tuyệt vời. Cảm ơn Kiến Trúc Xanh!"</p>
                  <div className="flex items-center gap-4">
                     {testimonialAvatar1 && <Image src={testimonialAvatar1.imageUrl} alt="Avatar khách hàng 1" width={56} height={56} className="rounded-full object-cover" data-ai-hint={testimonialAvatar1.imageHint}/>}
                    <div>
                      <p className="font-bold text-primary">Anh Hoàng Minh</p>
                      <p className="text-sm text-muted-foreground">Chủ biệt thự, Quận 2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-muted transform transition-all hover:scale-105">
                 <CardContent className="p-8">
                  <p className="text-muted-foreground italic mb-6">"Hồ cá Koi đã trở thành điểm nhấn thu hút khách cho quán của tôi. Dịch vụ và chất lượng thi công vượt xa mong đợi của tôi. Sẽ tiếp tục hợp tác."</p>
                  <div className="flex items-center gap-4">
                     {testimonialAvatar2 && <Image src={testimonialAvatar2.imageUrl} alt="Avatar khách hàng 2" width={56} height={56} className="rounded-full object-cover" data-ai-hint={testimonialAvatar2.imageHint}/>}
                     <div>
                      <p className="font-bold text-primary">Chị Lan Anh</p>
                      <p className="text-sm text-muted-foreground">Chủ quán cafe sân vườn</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Liên Hệ Tư Vấn</h2>
                    <p className="text-gray-300 mt-3 max-w-xl mx-auto">Để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                </div>
                <Card className="max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm border-gray-700 shadow-2xl">
                    <CardContent className="p-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-gray-300">Họ và tên</Label>
                                    <Input id="name" placeholder="Nguyễn Văn A" className="bg-gray-800 border-gray-600 text-white focus:ring-accent"/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-gray-300">Số điện thoại</Label>
                                    <Input id="phone" type="tel" placeholder="09xxxxxxxx" className="bg-gray-800 border-gray-600 text-white focus:ring-accent"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-300">Email (Tùy chọn)</Label>
                                <Input id="email" type="email" placeholder="email@example.com" className="bg-gray-800 border-gray-600 text-white focus:ring-accent"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-gray-300">Nội dung yêu cầu</Label>
                                <Textarea id="message" placeholder="Tôi cần tư vấn về thiết kế sân vườn cho biệt thự..." className="bg-gray-800 border-gray-600 text-white min-h-[120px] focus:ring-accent"/>
                            </div>
                            <Button type="submit" className="w-full bg-accent text-accent-foreground text-base py-6 hover:bg-accent/90 transition-transform hover:scale-105">Gửi Yêu Cầu Tư Vấn</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold">Cảnh Quan Kiến Trúc Xanh</h3>
            <p className="mt-2 text-sm opacity-90">Kiến tạo không gian sống đẳng cấp, hài hòa với thiên nhiên.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Thông tin liên hệ</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-90">
                <li>Địa chỉ: 123 Đường ABC, Phường X, Quận Y, TP.HCM</li>
                <li>Email: lienhe@kientrucxanh.com</li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                    <Phone className="w-4 h-4"/>
                    <span>Hotline: 0987 654 321</span>
                </li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-lg">Giờ làm việc</h4>
            <p className="mt-2 text-sm opacity-90">Thứ 2 - Thứ 7: 8:00 - 17:00</p>
            <p className="text-sm opacity-90">Chủ nhật: Nghỉ</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-80">
          <p>&copy; 2024 Cảnh Quan Kiến Trúc Xanh. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
