

'use client'

import { useParams, useRouter } from 'next/navigation'
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, Home, ArrowLeft } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card';
import { getDictionary } from '@/get-dictionary';
import { Locale } from 'i18n-config';
import { useEffect, useState } from 'react';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>

export default function ProjectDetailPage() {
    const params = useParams();
    const router = useRouter();
    const lang = params.lang as Locale;
    const id = params.id as string;
    const project = PlaceHolderImages.find(p => p.id === id);
    const [dictionary, setDictionary] = useState<Dictionary | null>(null);

    useEffect(() => {
        const fetchDict = async () => {
            const dict = await getDictionary(lang);
            setDictionary(dict);
        };
        fetchDict();
    }, [lang]);

    if (!project) {
        // We need to wait for dictionary to be loaded before rendering 404
        if (!dictionary) return <div>Loading...</div>;
        return (
            <div className="flex min-h-screen w-full flex-col bg-background font-body">
                <Header lang={lang} dictionary={dictionary} />
                <main className="flex-1 flex items-center justify-center text-center">
                    <div>
                        <h1 className="text-4xl font-bold text-primary">Dự án không tồn tại</h1>
                        <p className="mt-4 text-lg text-muted-foreground">Dự án bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                        <Button asChild className="mt-8">
                            <Link href={`/${lang}/du-an`}>Quay lại trang dự án</Link>
                        </Button>
                    </div>
                </main>
                <Footer lang={lang} dictionary={dictionary} />
            </div>
        );
    }
    
    // Select some other projects as related
    const relatedProjects = PlaceHolderImages.filter(p => p.id.startsWith('gallery-') && p.id !== id).slice(0, 4);

    if (!dictionary) return <div>Loading...</div>;

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header lang={lang} dictionary={dictionary} />
            <main className="flex-1">
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center animate-fade-in-up">
                        <Button variant="ghost" asChild className="mb-4">
                            <Link href={`/${lang}/du-an`} className="text-sm text-muted-foreground"><ArrowLeft className="mr-2 h-4 w-4"/> Quay lại danh sách dự án</Link>
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary capitalize">{project.imageHint.replace(/-/g, ' ')}</h1>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 animate-fade-in-up">
                                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-2xl">
                                    <Image 
                                        src={project.imageUrl.replace('/600/450', '/1200/750')} 
                                        alt={project.imageHint} 
                                        fill
                                        className="object-cover"
                                        data-ai-hint={project.imageHint}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="animate-fade-in-up animation-delay-300">
                                <Card className="border-none bg-muted shadow-lg">
                                    <CardContent className="p-8">
                                        <h2 className="text-2xl font-bold text-primary mb-6">Thông Tin Dự Án</h2>
                                        <ul className="space-y-4 text-muted-foreground">
                                            <li className="flex items-center gap-3">
                                                <Home className="w-5 h-5 text-accent"/>
                                                <span className='font-medium'>Hạng mục:</span> 
                                                <span className='capitalize'>{project.imageHint.includes('koi') ? 'Hồ Koi' : 'Sân vườn'}</span>
                                            </li>
                                             <li className="flex items-center gap-3">
                                                <Tag className="w-5 h-5 text-accent"/>
                                                <span className='font-medium'>Phong cách:</span> 
                                                <span className='capitalize'>{project.imageHint.split(' ')[0].replace('-', ' ')}</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Calendar className="w-5 h-5 text-accent"/>
                                                <span className='font-medium'>Hoàn thành:</span> 
                                                <span>2024</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Button asChild size="lg" className="w-full mt-8">
                                    <Link href={`/${lang}/lien-he`}>Yêu Cầu Báo Giá</Link>
                                </Button>
                            </div>
                        </div>

                         <div className="prose max-w-4xl mx-auto mt-20 text-lg">
                            <h3 className="text-3xl font-bold text-primary mb-4">Mô tả chi tiết</h3>
                            <p>Dự án "{project.imageHint.replace(/-/g, ' ')}" là một ví dụ điển hình cho sự kết hợp hài hòa giữa nghệ thuật và thiên nhiên, được đội ngũ kiến trúc sư của chúng tôi thực hiện với tất cả tâm huyết. Công trình này không chỉ đáp ứng yêu cầu về thẩm mỹ mà còn tối ưu hóa công năng sử dụng, mang lại một không gian sống lý tưởng cho gia chủ.</p>
                            <p>Chúng tôi đã sử dụng các vật liệu cao cấp, thân thiện với môi trường cùng với các loại cây trồng được lựa chọn kỹ lưỡng để phù hợp với điều kiện khí hậu và phong thủy. Từng chi tiết nhỏ, từ lối đi, hệ thống chiếu sáng đến vị trí của từng hòn đá, đều được tính toán cẩn thận để tạo nên một tổng thể hoàn hảo.</p>
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-primary text-center mb-12">Các Dự Án Khác</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                             {relatedProjects.map((p, index) => (
                                <div key={p.id} className="animate-fade-in-up" style={{animationDelay: `${index*200}ms`}}>
                                    <Card className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                                        <CardContent className="p-0">
                                            <div className="overflow-hidden aspect-[4/3]">
                                                <Link href={`/${lang}/du-an/${p.id}`}>
                                                    <Image 
                                                        src={p.imageUrl} 
                                                        alt={`Dự án ${p.id}`} 
                                                        width={600}
                                                        height={450}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                                        data-ai-hint={p.imageHint} 
                                                    />
                                                </Link>
                                            </div>
                                            <div className="p-4 bg-white">
                                                <h3 className="font-bold text-lg text-primary capitalize mt-1">
                                                    <Link href={`/${lang}/du-an/${p.id}`}>{p.imageHint.replace(/-/g, ' ')}</Link>
                                                </h3>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer lang={lang} dictionary={dictionary} />
        </div>
    );
}
