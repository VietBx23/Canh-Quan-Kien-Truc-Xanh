
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "5 Mẹo Chăm Sóc Hồ Cá Koi Luôn Trong Vắt",
            excerpt: "Hồ cá Koi trong vắt không chỉ đẹp mà còn cho thấy một môi trường sống khỏe mạnh cho những chú cá cưng của bạn. Dưới đây là 5 mẹo đơn giản mà hiệu quả...",
            author: "Việt Bùi",
            date: "15 Tháng 7, 2024",
            image: PlaceHolderImages.find(p => p.id === 'gallery-2'),
            category: "Chăm sóc hồ Koi"
        },
        {
            id: 2,
            title: "Xu Hướng Thiết Kế Sân Vườn Hiện Đại Năm 2024",
            excerpt: "Khám phá những xu hướng thiết kế sân vườn đang thịnh hành nhất năm nay, từ phong cách tối giản, bền vững đến việc tích hợp công nghệ thông minh vào không gian xanh của bạn.",
            author: "Lan Anh",
            date: "10 Tháng 7, 2024",
            image: PlaceHolderImages.find(p => p.id === 'gallery-1'),
            category: "Xu hướng thiết kế"
        },
        {
            id: 3,
            title: "Bí Quyết Chọn Đá Phong Thủy Hợp Mệnh Gia Chủ",
            excerpt: "Đá phong thủy không chỉ là vật trang trí mà còn mang lại năng lượng tích cực. Bài viết này sẽ hướng dẫn bạn cách chọn và bài trí đá phong thủy để mang lại may mắn, tài lộc.",
            author: "Minh Hoàng",
            date: "05 Tháng 7, 2024",
            image: PlaceHolderImages.find(p => p.id === 'service-maintenance'),
            category: "Kiến thức phong thủy"
        },
        {
            id: 4,
            title: "Ý Tưởng Sáng Tạo Cho Vườn Tường Đứng",
            excerpt: "Không gian sống của bạn có diện tích hạn chế? Vườn tường đứng chính là giải pháp hoàn hảo để mang mảng xanh vào nhà. Cùng xem qua những ý tưởng độc đáo nhé!",
            author: "Lan Anh",
            date: "01 Tháng 7, 2024",
            image: PlaceHolderImages.find(p => p.id === 'gallery-7'),
            category: "Ý tưởng sáng tạo"
        }
    ];

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Tin Tức & Chia Sẻ Kinh Nghiệm</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Khám phá những bài viết chuyên sâu, mẹo hữu ích và các xu hướng mới nhất trong lĩnh vực thiết kế cảnh quan.
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {blogPosts.map((post, index) => (
                                <div key={post.id} className="animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                                    <Card className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                                        {post.image && (
                                            <div className="overflow-hidden aspect-video">
                                                <Image 
                                                    src={post.image.imageUrl} 
                                                    alt={post.title}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    data-ai-hint={post.image.imageHint} 
                                                />
                                            </div>
                                        )}
                                        <CardContent className="p-6">
                                            <p className="text-sm text-accent font-semibold mb-2">{post.category}</p>
                                            <h2 className="text-2xl font-bold text-primary mb-3 leading-tight">{post.title}</h2>
                                            <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                                                <div className="flex items-center gap-1.5">
                                                    <User className="w-3.5 h-3.5" />
                                                    <span>{post.author}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    <span>{post.date}</span>
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                                            <Button variant="link" asChild className="p-0 font-semibold mt-auto">
                                                <Link href={`/blog/${post.id}`}>Đọc thêm <ArrowRight className="ml-2 h-4 w-4"/></Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
