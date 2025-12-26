

import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, Home, ArrowLeft, MapPin, DollarSign } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card';
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";

type Props = {
    params: { id: string }
}

export default async function ProjectDetailPage({ params: { id } }: Props) {
    const project = projects.find(p => p.id === id);

    if (!project) {
        notFound();
    }
    
    // Select some other projects as related
    const relatedProjects = projects.filter(p => p.id !== id).slice(0, 4);

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center animate-fade-in-up">
                        <Button variant="ghost" asChild className="mb-4">
                            <Link href="/du-an" className="text-sm text-muted-foreground"><ArrowLeft className="mr-2 h-4 w-4"/> Quay lại danh sách dự án</Link>
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary capitalize">{project.title}</h1>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 animate-fade-in-up">
                                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-2xl">
                                    <Image 
                                        src={project.imageUrl.replace('/600/450', '/1200/750')} 
                                        alt={project.title} 
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
                                                <span className='capitalize'>{project.category}</span>
                                            </li>
                                             <li className="flex items-center gap-3">
                                                <Tag className="w-5 h-5 text-accent"/>
                                                <span className='font-medium'>Phong cách:</span> 
                                                <span className='capitalize'>{project.style}</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <MapPin className="w-5 h-5 text-accent"/>
                                                <span className='font-medium'>Địa điểm:</span> 
                                                <span className='capitalize'>{project.location}</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <DollarSign className="w-5 h-5 text-accent"/>
                                                <span className='font-medium'>Chi phí:</span> 
                                                <span className='capitalize'>{project.cost}</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Calendar className="w-5 h-5 text-accent"/>
                                                <span className='font-medium'>Hoàn thành:</span> 
                                                <span>{project.date}</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Button asChild size="lg" className="w-full mt-8">
                                    <Link href="/lien-he">Yêu Cầu Báo Giá Tương Tự</Link>
                                </Button>
                            </div>
                        </div>

                         <div className="prose max-w-4xl mx-auto mt-20 text-lg">
                            <h3 className="text-3xl font-bold text-primary mb-4">Về dự án "{project.title}"</h3>
                            <p>Dự án "{project.title}" là một ví dụ điển hình cho sự kết hợp hài hòa giữa nghệ thuật cảnh quan và mong muốn của gia chủ, được đội ngũ kiến trúc sư của Cảnh Quan Kiến Trúc Xanh thực hiện với tất cả tâm huyết. Công trình này không chỉ đáp ứng yêu cầu khắt khe về thẩm mỹ mà còn tối ưu hóa công năng sử dụng, mang lại một không gian sống lý tưởng, nơi con người được hòa mình cùng thiên nhiên.</p>
                            <h4>Bối cảnh và Yêu cầu</h4>
                            <p>Gia chủ mong muốn biến khoảng sân trống thành một không gian thư giãn mang đậm phong cách nhiệt đới, vừa sang trọng, vừa gần gũi. Yêu cầu đặt ra là phải có hồ cá Koi làm trung tâm, kết hợp với các loại cây xanh phù hợp khí hậu miền Nam, tạo nên một tổng thể xanh mát và sinh động.</p>
                            <h4>Giải pháp của chúng tôi</h4>
                            <p>Chúng tôi đã lên ý tưởng và thiết kế một hồ cá Koi với hình dáng uốn lượn mềm mại, sử dụng hệ thống lọc hiện đại để đảm bảo nước luôn trong. Xung quanh hồ là các loại đá cuội và đá tảng được sắp xếp tự nhiên. Về thực vật, chúng tôi đã lựa chọn kỹ lưỡng các loại cây như chuối pháo, cọ, dương xỉ để tạo nên các tầng lá đa dạng, mang lại cảm giác của một khu rừng nhiệt đới thu nhỏ. Hệ thống chiếu sáng được bố trí tinh tế để làm nổi bật vẻ đẹp của sân vườn về đêm.</p>
                            <h4>Kết quả</h4>
                            <p>Sau khi hoàn thiện, công trình đã vượt qua sự mong đợi của gia chủ, trở thành không gian yêu thích của cả gia đình. Đây không chỉ là một khu vườn đẹp, mà còn là một minh chứng cho năng lực thiết kế và thi công chuyên nghiệp của chúng tôi.</p>
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
                                                <Link href={`/du-an/${p.id}`}>
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
                                                    <Link href={`/du-an/${p.id}`}>{p.title}</Link>
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
            <Footer />
        </div>
    );
}
