import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";


export default async function ServicesPage() {
    
    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Dịch Vụ Cảnh Quan</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Giải pháp toàn diện để kiến tạo không gian sống xanh, đẳng cấp và hài hòa với thiên nhiên.
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 space-y-24">
                        {services.map((service, index) => (
                            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                                <div className={`transition-transform duration-500 hover:scale-105 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                                    {service.image && (
                                        <Image
                                            src={service.image.imageUrl}
                                            alt={service.title}
                                            width={600}
                                            height={450}
                                            className="rounded-lg shadow-xl object-cover"
                                            data-ai-hint={service.image.imageHint}
                                        />
                                    )}
                                </div>
                                <div>
                                    <service.icon className="w-12 h-12 text-accent mb-4" />
                                    <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                                    <p className="text-muted-foreground mb-6">{service.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {service.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0"/>
                                                <span className="text-muted-foreground">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button asChild size="lg">
                                        <Link href={`/dich-vu/${service.slug}`}>Xem Chi Tiết</Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
