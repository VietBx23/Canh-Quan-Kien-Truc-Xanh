
"use client";

import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Fish, Sprout, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 5); // Show first 5 projects
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
            <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-600" asChild>
              <Link href="/lien-he">Yêu Cầu Tư Vấn</Link>
            </Button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 md:py-28 text-center bg-white">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Về Chúng Tôi</h2>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực thiết kế và thi công cảnh quan, Cảnh Quan Kiến Trúc Xanh tự hào là đơn vị tiên phong mang đến những giải pháp không gian sống xanh, đẳng cấp, và hài hòa với thiên nhiên. Sứ mệnh của chúng tôi là biến mỗi ngôi nhà thành một tác phẩm nghệ thuật sống động, nơi con người và thiên nhiên giao hòa.
              </p>
              <Button variant="outline" className="mt-8" asChild>
                  <Link href="/gioi-thieu">Tìm Hiểu Thêm <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Dịch Vụ Của Chúng Tôi</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Chúng tôi cung cấp các giải pháp cảnh quan toàn diện, biến ý tưởng của bạn thành hiện thực.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-none hover:-translate-y-2 bg-white">
                {serviceGarden && <Image src={serviceGarden.imageUrl} alt="Thiết kế sân vườn" width={600} height={400} className="w-full h-56 object-cover" data-ai-hint={serviceGarden.imageHint} />}
                <CardHeader>
                  <Leaf className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-xl font-bold">Thiết kế Sân vườn</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">Tư vấn, thiết kế cảnh quan sân vườn biệt thự, nhà phố, resort theo phong cách độc đáo và hợp phong thủy.</p>
                   <Button variant="link" className="p-0 text-sm" asChild><Link href="/dich-vu">Xem chi tiết <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-none hover:-translate-y-2 bg-white">
                {serviceKoi && <Image src={serviceKoi.imageUrl} alt="Thi công hồ cá Koi" width={600} height={400} className="w-full h-56 object-cover" data-ai-hint={serviceKoi.imageHint} />}
                <CardHeader>
                  <Fish className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-xl font-bold">Hồ Cá Koi Chuyên Nghiệp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">Xây dựng hồ cá Koi với hệ thống lọc chuẩn quốc tế, đảm bảo môi trường sống lý tưởng và thẩm mỹ cao.</p>
                   <Button variant="link" className="p-0 text-sm" asChild><Link href="/dich-vu">Xem chi tiết <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-none hover:-translate-y-2 bg-white">
                {serviceMaintenance && <Image src={serviceMaintenance.imageUrl} alt="Đá phong thủy & Tiểu cảnh" width={600} height={400} className="w-full h-56 object-cover" data-ai-hint={serviceMaintenance.imageHint} />}
                <CardHeader>
                  <Sprout className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-xl font-bold">Đá Phong Thủy & Tiểu Cảnh</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">Cung cấp và bài trí đá phong thủy, thác nước, non bộ, mang lại vượng khí và nét đẹp cho không gian.</p>
                  <Button variant="link" className="p-0 text-sm" asChild><Link href="/dich-vu">Xem chi tiết <ArrowRight className="ml-2 h-4 w-4"/></Link></Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-20 md:py-28 bg-white">
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
                        <Card className="overflow-hidden border-none shadow-lg">
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
              <div className="text-center mt-12">
                  <Button asChild>
                      <Link href="/du-an">Xem Tất Cả Dự Án</Link>
                  </Button>
              </div>
           </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-28 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Khách Hàng Nói Về Chúng Tôi</h2>
               <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                  Sự hài lòng của khách hàng là minh chứng rõ nhất cho chất lượng dịch vụ.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-none shadow-lg bg-white transform transition-all hover:scale-[1.02]">
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
              <Card className="border-none shadow-lg bg-white transform transition-all hover:scale-[1.02]">
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

        {/* Call to Action Section */}
        <section className="py-20 md:py-28 bg-primary/90 text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold">Sẵn Sàng Biến Ước Mơ Về Một Không Gian Xanh Thành Hiện Thực?</h2>
                <p className="text-white/80 mt-4 max-w-2xl mx-auto">Đừng ngần ngại liên hệ với chúng tôi. Các chuyên gia của Cảnh Quan Kiến Trúc Xanh luôn sẵn lòng lắng nghe và tư vấn giải pháp tốt nhất cho bạn.</p>
                <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg" asChild>
                    <Link href="/lien-he">Liên Hệ Ngay</Link>
                </Button>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
