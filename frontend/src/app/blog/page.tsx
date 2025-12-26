
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { posts as blogPosts } from "@/lib/data/posts";

export default async function BlogPage() {
    
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
                                    <Card className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                       
                                        <CardContent className="p-0 flex flex-col h-full">
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
                                            <div className="p-6 flex flex-col flex-grow">
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
                                                <p className="text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>
                                                <Button variant="link" asChild className="p-0 font-semibold mt-auto self-start">
                                                    <Link href={`/blog/${post.id}`}>Đọc thêm <ArrowRight className="ml-2 h-4 w-4"/></Link>
                                                </Button>
                                            </div>
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
