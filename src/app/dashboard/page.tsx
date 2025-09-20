
"use client";

import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Fish, Sprout, ArrowRight, Building, Award, ShieldCheck, Star, Users, Briefcase, Smile, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function DashboardPage() {
  const serviceGarden = PlaceHolderImages.find(p => p.id === 'service-garden');
  const serviceKoi = PlaceHolderImages.find(p => p.id === 'service-koi');
  const serviceMaintenance = PlaceHolderImages.find(p => p.id === 'service-maintenance');
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 5);
  const testimonialAvatar1 = PlaceHolderImages.find(p => p.id === 'testimonial-1');
  const testimonialAvatar2 = PlaceHolderImages.find(p => p.id === 'testimonial-2');
  const statsBgImage = PlaceHolderImages.find(p => p.id === 'stats-background');
  const ctaBgImage = PlaceHolderImages.find(p => p.id === 'cta-background');
  
  const heroSlides = [
    {
      id: 'hero-1',
      title: 'Kiến Tạo Không Gian Sống Đẳng Cấp',
      description: 'Chuyên nghiệp trong từng thiết kế, tận tâm trong từng công trình sân vườn, hồ cá Koi.',
      buttonText: 'Nhận Báo Giá Miễn Phí',
      buttonLink: '/lien-he',
      image: PlaceHolderImages.find(p => p.id === 'hero-slide-1')
    },
    {
      id: 'hero-2',
      title: 'Hồ Cá Koi - Đỉnh Cao Nghệ Thuật Sân Vườn',
      description: 'Mang lại vượng khí và vẻ đẹp độc đáo cho không gian sống của bạn với hồ Koi đạt chuẩn quốc tế.',
      buttonText: 'Khám Phá Dịch Vụ',
      buttonLink: '/dich-vu',
      image: PlaceHolderImages.find(p => p.id === 'hero-slide-2')
    },
    {
      id: 'hero-3',
      title: ' biến Sân Vườn Thành Tác Phẩm Nghệ Thuật',
      description: 'Mỗi công trình là một câu chuyện, một dấu ấn riêng biệt, kết hợp hài hòa giữa thiên nhiên và phong cách của gia chủ.',
      buttonText: 'Xem Dự Án Tiêu Biểu',
      buttonLink: '/du-an',
      image: PlaceHolderImages.find(p => p.id === 'hero-slide-3')
    }
  ];


  const workingProcess = [
    { step: "01", title: "Tư Vấn & Khảo Sát", description: "Lắng nghe yêu cầu, khảo sát thực tế và đưa ra tư vấn sơ bộ miễn phí." },
    { step: "02", title: "Thiết Kế 3D & Báo Giá", description: "Lên ý tưởng, dựng phối cảnh 3D và gửi báo giá chi tiết cho khách hàng." },
    { step: "03", title: "Ký Hợp Đồng", description: "Thống nhất phương án thiết kế, chi phí và ký kết hợp đồng." },
    { step: "04", title: "Thi Công Chuyên Nghiệp", description: "Tiến hành thi công theo đúng bản vẽ, đảm bảo chất lượng và tiến độ." },
    { step: "05", title: "Nghiệm Thu & Bàn Giao", description: "Nghiệm thu công trình cùng khách hàng và bàn giao sản phẩm hoàn thiện." },
    { step: "06", title: "Bảo Hành & Bảo Trì", description: "Thực hiện bảo hành dài hạn và cung cấp dịch vụ bảo trì định kỳ." },
  ];

  const coreValues = [
    { icon: Award, title: "Chất Lượng Vượt Trội", description: "Sử dụng vật liệu tốt nhất, thi công tỉ mỉ trong từng chi tiết." },
    { icon: Leaf, title: "Bền Vững & Tự Nhiên", description: "Giải pháp thiết kế hài hòa, tôn trọng và gần gũi với thiên nhiên." },
    { icon: Lightbulb, title: "Thiết Kế Sáng Tạo", description: "Mỗi công trình là một tác phẩm nghệ thuật duy nhất, đậm dấu ấn gia chủ." },
    { icon: ShieldCheck, title: "Bảo Hành Dài Hạn", description: "Cam kết đồng hành cùng khách hàng với chính sách bảo hành rõ ràng." },
  ];


  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-body">
      <Header />
      <main className="flex-1">
        {/* Hero Slider Section */}
        <section className="relative h-[80vh] w-full text-white overflow-hidden">
          <Carousel
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full h-full"
            opts={{ loop: true }}
          >
            <CarouselContent className="h-full">
              {heroSlides.map((slide) => (
                <CarouselItem key={slide.id} className="h-full">
                  <div className="relative w-full h-full">
                    {slide.image && (
                      <Image
                        src={slide.image.imageUrl}
                        alt={slide.title}
                        fill
                        className="object-cover brightness-[0.5]"
                        priority={slide.id === 'hero-1'}
                        data-ai-hint={slide.image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
                      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg animate-fade-in-up">{slide.title}</h1>
                      <p className="mt-4 max-w-3xl text-lg md:text-xl text-shadow animate-fade-in-up animation-delay-300">
                        {slide.description}
                      </p>
                      <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-600" asChild>
                        <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 bg-white/20 hover:bg-white/40 border-white/50 text-white" />
            <CarouselNext className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 bg-white/20 hover:bg-white/40 border-white/50 text-white" />
          </Carousel>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Dịch Vụ Của Chúng Tôi</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Chúng tôi cung cấp các giải pháp cảnh quan toàn diện, biến ý tưởng của bạn thành hiện thực.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-fade-in-up animation-delay-300">
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
              </div>
              <div className="animate-fade-in-up animation-delay-600">
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
              </div>
              <div className="animate-fade-in-up animation-delay-900">
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
          </div>
        </section>
        
        {/* Working Process Section */}
        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Quy Trình Làm Việc Chuyên Nghiệp</h2>
                    <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Minh bạch trong từng bước để mang lại sự an tâm và hài lòng tuyệt đối cho khách hàng.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workingProcess.map((item, index) => (
                         <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                            <Card className="bg-white border-t-4 border-accent shadow-lg text-center p-6 transform transition-transform hover:-translate-y-2 relative overflow-hidden h-full">
                               <div className="absolute -top-4 -right-4 text-8xl font-bold text-muted opacity-80">{item.step}</div>
                               <div className="relative z-10">
                                  <h4 className="text-xl font-bold text-primary mb-2 mt-8">{item.title}</h4>
                                  <p className="text-muted-foreground text-sm">{item.description}</p>
                               </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 md:py-28 bg-white">
           <div className="container mx-auto px-4">
              <div className="text-center mb-16 animate-fade-in-up">
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
                className="w-full max-w-6xl mx-auto animate-fade-in-up animation-delay-300"
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
              <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
                  <Button asChild>
                      <Link href="/du-an">Xem Tất Cả Dự Án</Link>
                  </Button>
              </div>
           </div>
        </section>

        {/* Stats Section */}
        {statsBgImage && (
          <section className="py-20 bg-parallax bg-overlay text-primary-foreground" style={{backgroundImage: `url(${statsBgImage.imageUrl})`}}>
            <div className="container mx-auto px-4 content-overlay">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center animate-fade-in-up">
                  <Users className="w-10 h-10 mb-2 text-accent"/>
                  <p className="text-4xl font-bold">10+</p>
                  <p className="text-sm uppercase tracking-wider">Năm Kinh Nghiệm</p>
                </div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-300">
                  <Briefcase className="w-10 h-10 mb-2 text-accent"/>
                  <p className="text-4xl font-bold">500+</p>
                  <p className="text-sm uppercase tracking-wider">Công Trình Hoàn Thiện</p>
                </div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-600">
                  <Building className="w-10 h-10 mb-2 text-accent"/>
                  <p className="text-4xl font-bold">100+</p>
                  <p className="text-sm uppercase tracking-wider">Khách Hàng Doanh Nghiệp</p>
                </div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-900">
                  <Smile className="w-10 h-10 mb-2 text-accent"/>
                  <p className="text-4xl font-bold">95%</p>
                  <p className="text-sm uppercase tracking-wider">Khách Hàng Hài Lòng</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Tại Sao Chọn Kiến Trúc Xanh?</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Chúng tôi không chỉ xây dựng cảnh quan, chúng tôi kiến tạo không gian sống và mang lại giá trị bền vững.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                 <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                    <div className="text-center p-6 bg-muted rounded-lg transition-transform hover:-translate-y-2 hover:shadow-xl h-full">
                      <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                        <value.icon className="h-8 w-8 text-primary"/>
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-primary">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-28 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Khách Hàng Nói Về Chúng Tôi</h2>
               <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                  Sự hài lòng của khách hàng là minh chứng rõ nhất cho chất lượng dịch vụ.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="animate-fade-in-up animation-delay-300">
                <Card className="border-none shadow-lg bg-white transform transition-all hover:scale-[1.02] h-full">
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
              </div>
              <div className="animate-fade-in-up animation-delay-600">
                <Card className="border-none shadow-lg bg-white transform transition-all hover:scale-[1.02] h-full">
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
          </div>
        </section>

        {/* Call to Action Section */}
        {ctaBgImage && (
          <section className="py-20 md:py-28 bg-parallax bg-overlay text-white text-center" style={{backgroundImage: `url(${ctaBgImage.imageUrl})`}}>
              <div className="container mx-auto px-4 content-overlay">
                  <h2 className="text-3xl md:text-4xl font-bold animate-fade-in-up">Sẵn Sàng Biến Ước Mơ Cảnh Quan Của Bạn Thành Hiện Thực?</h2>
                  <p className="text-white/80 mt-4 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">Chỉ một bước nữa để sở hữu không gian sống đẳng cấp. Hãy để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ với bạn ngay!</p>
                  <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-600" asChild>
                      <Link href="/lien-he">Yêu Cầu Tư Vấn Ngay</Link>
                  </Button>
              </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
