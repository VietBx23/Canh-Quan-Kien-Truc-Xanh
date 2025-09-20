

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

// This is a server component, so we can fetch data here
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../../i18n-config'


export default async function DashboardPage({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang)
  const t = dictionary.page.dashboard;

  const serviceGarden = PlaceHolderImages.find(p => p.id === 'service-garden');
  const serviceKoi = PlaceHolderImages.find(p => p.id === 'service-koi');
  const serviceMaintenance = PlaceHolderImages.find(p => p.id === 'service-maintenance');
  const serviceRenovation = PlaceHolderImages.find(p => p.id === 'service-renovation');
  const serviceRooftop = PlaceHolderImages.find(p => p.id === 'service-rooftop');
  const serviceVerticalGarden = PlaceHolderImages.find(p => p.id === 'service-vertical-garden');
  
  const services = [
    { title: "Thiết kế Sân vườn", icon: Leaf, image: serviceGarden, link: "/dich-vu/thiet-ke-san-vuon" },
    { title: "Hồ Cá Koi Chuyên Nghiệp", icon: Fish, image: serviceKoi, link: "/dich-vu/ho-ca-koi" },
    { title: "Đá Phong Thủy & Tiểu Cảnh", icon: Sprout, image: serviceMaintenance, link: "/dich-vu/da-phong-thuy" },
    { title: "Cải Tạo & Nâng Cấp", icon: Lightbulb, image: serviceRenovation, link: "/dich-vu/cai-tao-nang-cap" },
    { title: "Vườn Trên Sân Thượng", icon: Building, image: serviceRooftop, link: "/dich-vu/vuon-san-thuong" },
    { title: "Tường Cây Xanh", icon: Leaf, image: serviceVerticalGarden, link: "/dich-vu/tuong-cay-xanh" },
  ];

  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 8);
  const testimonialAvatar1 = PlaceHolderImages.find(p => p.id === 'testimonial-1');
  const testimonialAvatar2 = PlaceHolderImages.find(p => p.id === 'testimonial-2');
  const statsBgImage = PlaceHolderImages.find(p => p.id === 'stats-background');
  const ctaBgImage = PlaceHolderImages.find(p => p.id === 'cta-background');
  
  const heroSlides = [
    {
      id: 'hero-1',
      title: t.hero_slide_1_title,
      description: t.hero_slide_1_desc,
      buttonText: t.hero_slide_1_button,
      buttonLink: '/lien-he',
      image: PlaceHolderImages.find(p => p.id === 'hero-slide-1')
    },
    {
      id: 'hero-2',
      title: t.hero_slide_2_title,
      description: t.hero_slide_2_desc,
      buttonText: t.hero_slide_2_button,
      buttonLink: '/dich-vu',
      image: PlaceHolderImages.find(p => p.id === 'hero-slide-2')
    },
    {
      id: 'hero-3',
      title: t.hero_slide_3_title,
      description: t.hero_slide_3_desc,
      buttonText: t.hero_slide_3_button,
      buttonLink: '/du-an',
      image: PlaceHolderImages.find(p => p.id === 'hero-slide-3')
    }
  ];


  const workingProcess = [
    { step: "01", title: t.process_step_1_title, description: t.process_step_1_desc },
    { step: "02", title: t.process_step_2_title, description: t.process_step_2_desc },
    { step: "03", title: t.process_step_3_title, description: t.process_step_3_desc },
    { step: "04", title: t.process_step_4_title, description: t.process_step_4_desc },
    { step: "05", title: t.process_step_5_title, description: t.process_step_5_desc },
    { step: "06", title: t.process_step_6_title, description: t.process_step_6_desc },
  ];

  const coreValues = [
    { icon: Award, title: t.value_1_title, description: t.value_1_desc },
    { icon: Leaf, title: t.value_2_title, description: t.value_2_desc },
    { icon: Lightbulb, title: t.value_3_title, description: t.value_3_desc },
    { icon: ShieldCheck, title: t.value_4_title, description: t.value_4_desc },
  ];


  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header lang={lang} dictionary={dictionary} />
      <main className="flex-1">
        {/* Hero Slider Section */}
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
                        <Link href={`/${lang}${slide.buttonLink}`}>{slide.buttonText}</Link>
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

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-section-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.services_title}</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                {t.services_desc}
              </p>
            </div>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-7xl mx-auto animate-fade-in-up animation-delay-300"
            >
              <CarouselContent>
                {services.map((service, index) => (
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
                                  <Link href={`/${lang}${service.link}`}>Xem chi tiết <ArrowRight className="ml-2 h-4 w-4"/></Link>
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
                    <Link href={`/${lang}/dich-vu`}>{t.view_all_services}</Link>
                </Button>
            </div>
          </div>
        </section>
        
        {/* Working Process Section */}
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.process_title}</h2>
                    <p className="text-muted-foreground mt-3 max-w-xl mx-auto">{t.process_desc}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.gallery_title}</h2>
                <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                  {t.gallery_desc}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in-up animation-delay-300">
                  {galleryImages.map((image, index) => (
                      <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                          <Image 
                              src={image.imageUrl} 
                              alt={`Project ${index + 1}`} 
                              width={400} 
                              height={400} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                              data-ai-hint={image.imageHint} 
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                <p className="text-white text-center font-semibold capitalize">{image.imageHint.replace(/-/g, ' ')}</p>
                            </div>
                      </div>
                  ))}
              </div>
              <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
                  <Button asChild>
                      <Link href={`/${lang}/du-an`}>{t.view_all_projects}</Link>
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
                  <Users className="w-12 h-12 mb-3 text-accent transition-transform duration-300 hover:scale-125"/>
                  <p className="text-4xl font-bold">10+</p>
                  <p className="text-sm uppercase tracking-wider">{t.stats_experience}</p>
                </div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-300">
                  <Briefcase className="w-12 h-12 mb-3 text-accent transition-transform duration-300 hover:scale-125"/>
                  <p className="text-4xl font-bold">500+</p>
                  <p className="text-sm uppercase tracking-wider">{t.stats_projects}</p>
                </div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-600">
                  <Building className="w-12 h-12 mb-3 text-accent transition-transform duration-300 hover:scale-125"/>
                  <p className="text-4xl font-bold">100+</p>
                  <p className="text-sm uppercase tracking-wider">{t.stats_clients}</p>
                </div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-900">
                  <Smile className="w-12 h-12 mb-3 text-accent transition-transform duration-300 hover:scale-125"/>
                  <p className="text-4xl font-bold">95%</p>
                  <p className="text-sm uppercase tracking-wider">{t.stats_satisfaction}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.why_us_title}</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{t.why_us_desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.testimonials_title}</h2>
               <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                  {t.testimonials_desc}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="animate-fade-in-up animation-delay-300">
                <Card className="border-none shadow-lg bg-white transform transition-all hover:scale-[1.02] h-full">
                  <CardContent className="p-8">
                    <p className="text-muted-foreground italic mb-6">"{t.testimonial_1_quote}"</p>
                    <div className="flex items-center gap-4">
                       {testimonialAvatar1 && <Image src={testimonialAvatar1.imageUrl} alt="Avatar khách hàng 1" width={56} height={56} className="rounded-full object-cover" data-ai-hint={testimonialAvatar1.imageHint}/>}
                      <div>
                        <p className="font-bold text-primary">{t.testimonial_1_author}</p>
                        <p className="text-sm text-muted-foreground">{t.testimonial_1_location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="animate-fade-in-up animation-delay-600">
                <Card className="border-none shadow-lg bg-white transform transition-all hover:scale-[1.02] h-full">
                   <CardContent className="p-8">
                    <p className="text-muted-foreground italic mb-6">"{t.testimonial_2_quote}"</p>
                    <div className="flex items-center gap-4">
                       {testimonialAvatar2 && <Image src={testimonialAvatar2.imageUrl} alt="Avatar khách hàng 2" width={56} height={56} className="rounded-full object-cover" data-ai-hint={testimonialAvatar2.imageHint}/>}
                       <div>
                        <p className="font-bold text-primary">{t.testimonial_2_author}</p>
                        <p className="text-sm text-muted-foreground">{t.testimonial_2_location}</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold animate-fade-in-up">{t.cta_title}</h2>
                  <p className="text-white/80 mt-4 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">{t.cta_desc}</p>
                  <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-600" asChild>
                      <Link href={`/${lang}/lien-he`}>{t.cta_button}</Link>
                  </Button>
              </div>
          </section>
        )}
      </main>

      <Footer dictionary={dictionary} />
    </div>
  );
}
