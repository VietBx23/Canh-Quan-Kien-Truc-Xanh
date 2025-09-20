import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
    const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                 <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Dự Án Đã Thực Hiện</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Mỗi công trình là một tác phẩm nghệ thuật, kết tinh từ tâm huyết, sự sáng tạo và quy trình làm việc chuyên nghiệp của chúng tôi.
                        </p>
                    </div>
                </section>
                
                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-4">
                        {/* TODO: Add filtering buttons here */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {galleryImages.map((image, index) => (
                                <Card key={index} className="overflow-hidden group">
                                    <CardContent className="p-0">
                                        <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                                            <Image 
                                                src={image.imageUrl} 
                                                alt={`Dự án ${index + 1}`} 
                                                width={600}
                                                height={450}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                                data-ai-hint={image.imageHint} 
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg text-primary">Biệt thự sân vườn Quận 7</h3>
                                            <p className="text-sm text-muted-foreground mt-1">Hoàn thành: 2023</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                         <div className="text-center mt-16">
                            <Button size="lg" asChild>
                                <Link href="/lien-he">Bắt Đầu Dự Án Của Bạn</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
