
"use client";

import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Award, ShieldCheck, Leaf, Lightbulb, Users, Briefcase, Building, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { HeroSlider } from "@/components/app/HeroSlider";
import Autoplay from "embla-carousel-autoplay"
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";
import { testimonials } from "@/lib/data/testimonials";
import { workingProcess, coreValues, stats } from "@/lib/data/about";
import { PlaceHolderImages } from "@/lib/placeholder-images";


export default function DashboardPage() {
  const galleryImages = projects.slice(0, 12);
  const testimonialAvatar1 = PlaceHolderImages.find(p => p.id === 'testimonial-1');
  const testimonialAvatar2 = PlaceHolderImages.find(p => p.id === 'testimonial-2');
  const statsBgImage = PlaceHolderImages.find(p => p.id === 'stats-background');
  const ctaBgImage = PlaceHolderImages.find(p => p.id === 'cta-background');
  
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex-1">
        {/* Hero Slider Section */}
        <HeroSlider />

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-section-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Dịch Vụ Của Chúng Tôi</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Chúng tôi cung cấp các giải pháp cảnh quan toàn diện, biến ý tưởng của bạn thành hiện thực.
              </p>
            </div>
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
              className="w-full max-w-7xl mx-auto animate-fade-in-up animation-delay-300"
            >
              <CarouselContent>
                {services.slice(0,6).map((service, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                       <Card className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                          {service.image && (
                              <div className="overflow-hidden aspect-video">
                                  <Image 
                                      src={service.image.imageUrl} 
                                      alt={service.title}
                                      width={600}
                                      height={400}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                      data-ai-hint={service.image.imageHint} 
                                  />
                              </div>
                          )}
                          <CardHeader>
                              <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow flex items-end">
                              <Button variant="link" asChild className="p-0 font-semibold mt-auto">
                                  <Link href={`/dich-vu/${service.slug}`}>Xem chi tiết <ArrowRight className="ml-2 h-4 w-4"/></Link>
                              </Button>
                          </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-8" />
              <CarouselNext className="-right-4 md:-right-8" />
            </Carousel>
            <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
                <Button size="lg" asChild>
                    <Link href="/dich-vu">Xem Tất Cả Dịch Vụ</Link>
                </Button>
            </div>
          </div>
        </section>
        
        {/* Working Process Section */}
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Quy Trình Làm Việc Chuyên Nghiệp</h2>
                    <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Minh bạch trong từng bước để mang lại sự an tâm và hài lòng tuyệt đối cho khách hàng.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {workingProcess.map((item, index) => (
                         <div key={index} className="relative animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                            <div className="flex items-center gap-6">
                                <div className="text-8xl font-bold text-primary/10 select-none">{item.step}</div>
                                <div className="flex-1">
                                   <div className="border-t-4 border-accent w-12 mb-3"></div>
                                   <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                                   <p className="text-muted-foreground text-sm">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 md:py-28 bg-section-gradient">
           <div className="container mx-auto px-4">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Dự Án Tiêu Biểu</h2>
                <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                  Nơi mỗi công trình là một tác phẩm nghệ thuật đầy tâm huyết.
                </p>
              </div>
              <Carousel
                  opts={{ align: "start", loop: true }}
                  plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
                  className="w-full max-w-7xl mx-auto animate-fade-in-up animation-delay-300"
              >
                  <CarouselContent>
                      {galleryImages.map((image, index) => (
                          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <div className="p-2">
                              <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
                                <Link href={`/du-an/${image.id}`}>
                                  <Image 
                                      src={image.imageUrl} 
                                      alt={image.imageHint} 
                                      fill
                                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                                      data-ai-hint={image.imageHint} 
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                                        <p className="text-white text-lg font-semibold capitalize text-shadow">{image.title}</p>
                                    </div>
                                </Link>
                              </div>
                            </div>
                          </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4 md:-left-8" />
                  <CarouselNext className="-right-4 md:-right-8" />
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
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center animate-fade-in-up" style={{animationDelay: `${index * 300}ms`}}>
                        <stat.icon className="w-12 h-12 mb-3 text-accent transition-transform duration-300 hover:scale-125"/>
                        <p className="text-4xl font-bold">{stat.value}</p>
                        <p className="text-sm uppercase tracking-wider">{stat.label}</p>
                    </div>
                ))}
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
                        <value.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-125"/>
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
        <section id="testimonials" className="py-20 md:py-28 bg-section-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md-text-4xl font-bold text-primary">Khách Hàng Nói Về Chúng Tôi</h2>
               <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                  Sự hài lòng của khách hàng là minh chứng rõ nhất cho chất lượng dịch vụ.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                    <div key={testimonial.id} className="animate-fade-in-up" style={{animationDelay: `${index * 300}ms`}}>
                        <Card className="border-none shadow-lg bg-white transform transition-all hover:scale-[1.02] h-full">
                            <CardContent className="p-8">
                                <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                {testimonial.image && <Image src={testimonial.image.imageUrl} alt={`Avatar ${testimonial.author}`} width={56} height={56} className="rounded-full object-cover" data-ai-hint={testimonial.image.imageHint}/>}
                                <div>
                                    <p className="font-bold text-primary">{testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
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
