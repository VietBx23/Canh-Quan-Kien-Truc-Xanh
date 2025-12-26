
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/data/testimonials";


export default async function TestimonialsPage() {
    
    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                 <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Khách Hàng Nói Về Chúng Tôi</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Sự hài lòng và những lời nhận xét chân thành của khách hàng là niềm tự hào và động lực lớn nhất của chúng tôi.
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="animate-fade-in-up" style={{animationDelay: `${(index % 3) * 200}ms`}}>
                                    <Card className="border-none shadow-lg bg-white transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col h-full">
                                        <CardContent className="p-8 flex flex-col h-full">
                                            <div className="flex text-yellow-400 mb-4">
                                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current"/>)}
                                            </div>
                                            <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                                            <div className="flex items-center gap-4 border-t pt-6">
                                                <Image 
                                                    src={testimonial.image.imageUrl} 
                                                    alt={`Avatar ${testimonial.author}`} 
                                                    width={56} 
                                                    height={56} 
                                                    className="rounded-full object-cover" 
                                                    data-ai-hint={testimonial.image.imageHint}
                                                />
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
                 <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center animate-fade-in-up">
                         <h2 className="text-2xl font-bold text-primary">Bạn đã sẵn sàng để trở thành khách hàng tiếp theo?</h2>
                        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Hãy để chúng tôi mang đến cho bạn một không gian sống xanh và đẳng cấp.</p>
                        <Button size="lg" asChild className="mt-6">
                            <Link href="/lien-he">Liên Hệ Tư Vấn Ngay</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
