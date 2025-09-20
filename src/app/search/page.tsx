

import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { SearchX } from 'lucide-react';
import { projects as allProjects } from "@/lib/data/projects";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function SearchPage({ searchParams }: Props) {
    const query = typeof searchParams.q === 'string' ? searchParams.q : '';

    const filteredProjects = query 
        ? allProjects.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
        : [];
    
    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                 <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Kết Quả Tìm Kiếm</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            {filteredProjects.length > 0 
                                ? `Tìm thấy ${filteredProjects.length} dự án cho từ khóa: "${query}"`
                                : `Không tìm thấy dự án nào cho từ khóa: "${query}"`
                            }
                        </p>
                    </div>
                </section>
                
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        {filteredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project) => (
                                    <Card key={project.id} className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                                        <CardContent className="p-0">
                                            <div className="overflow-hidden aspect-[4/3]">
                                                <Link href={`/du-an/${project.id}`}>
                                                    <Image 
                                                        src={project.imageUrl} 
                                                        alt={project.title}
                                                        width={600}
                                                        height={450}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                                        data-ai-hint={project.imageHint} 
                                                    />
                                                </Link>
                                            </div>
                                            <div className="p-4 bg-white">
                                                <h3 className="font-bold text-lg text-primary capitalize mt-1">
                                                    <Link href={`/du-an/${project.id}`}>{project.title}</Link>
                                                </h3>
                                                <p className="text-sm text-muted-foreground mt-1">Hoàn thành: {project.date}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <SearchX className="h-24 w-24 mx-auto text-muted-foreground/50" />
                                <h2 className="mt-6 text-2xl font-bold text-primary">Không có gì ở đây cả</h2>
                                <p className="mt-2 text-muted-foreground">Hãy thử tìm kiếm với một từ khóa khác nhé.</p>
                                <Button asChild className="mt-6">
                                    <Link href="/dashboard">Quay Về Trang Chủ</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
