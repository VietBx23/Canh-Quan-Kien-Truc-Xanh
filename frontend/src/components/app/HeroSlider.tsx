
"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { heroSlides } from "@/lib/data/hero-slides"

export function HeroSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

  return (
    <section className="w-full text-white">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{ loop: true }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
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
