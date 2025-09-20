
"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"

export function HeroSlider() {
    const heroSlides = [
        {
          id: 'hero-1',
          title: "Kiến Tạo Không Gian Sống Đẳng Cấp",
          description: "Chuyên nghiệp trong từng thiết kế, tận tâm trong từng công trình sân vườn, hồ cá Koi.",
          buttonText: "Nhận Báo Giá Miễn Phí",
          buttonLink: '/lien-he',
          image: PlaceHolderImages.find(p => p.id === 'hero-slide-1')
        },
        {
          id: 'hero-2',
          title: "Hồ Cá Koi - Đỉnh Cao Nghệ Thuật Sân Vườn",
          description: "Mang lại vượng khí và vẻ đẹp độc đáo cho không gian sống của bạn với hồ Koi đạt chuẩn quốc tế.",
          buttonText: "Khám Phá Dịch Vụ",
          buttonLink: '/dich-vu',
          image: PlaceHolderImages.find(p => p.id === 'hero-slide-2')
        },
        {
          id: 'hero-3',
          title: "Biến Sân Vườn Thành Tác Phẩm Nghệ Thuật",
          description: "Mỗi công trình là một câu chuyện, một dấu ấn riêng biệt, kết hợp hài hòa giữa thiên nhiên và phong cách của gia chủ.",
          buttonText: "Xem Dự Án Tiêu Biểu",
          buttonLink: '/du-an',
          image: PlaceHolderImages.find(p => p.id === 'hero-slide-3')
        }
      ];

  return (
    <section className="w-full text-white">
      <Carousel
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[90vh] w-full">
                {slide.image && (
                  <Image
                    src={slide.image.imageUrl}
                    alt={slide.title}
                    fill
                    className="object-cover brightness-[0.6]"
                    priority={slide.id === 'hero-1'}
                    data-ai-hint={slide.image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
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
        <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 bg-white/20 hover:bg-white/40 border-white/50 text-white" />
        <CarouselNext className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 bg-white/20 hover:bg-white/40 border-white/50 text-white" />
      </Carousel>
    </section>
  )
}
