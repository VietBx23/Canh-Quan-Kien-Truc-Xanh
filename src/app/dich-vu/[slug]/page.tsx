

import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { services as servicesData } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";

const relatedProjects = projects.slice(0, 4);

type Props = {
    params: { slug: string }
}

export default async function ServiceDetailPage({ params: { slug } }: Props) {
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    const otherServices = servicesData.filter(s => s.slug !== slug).slice(0,3);

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                <section className="relative py-32 md:py-48 text-white bg-black">
                     {service.image && (
                        <Image
                            src={service.image.imageUrl.replace('/600/450', '/1200/600')}
                            alt={service.title}
                            fill
                            className="object-cover brightness-50"
                            data-ai-hint={service.image.imageHint}
                            priority
                        />
                    )}
                    <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
                        <service.icon className="w-16 h-16 text-accent mx-auto mb-4"/>
                        <h1 className="text-4xl md:text-6xl font-bold text-shadow-lg">{service.title}</h1>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12 lg:gap-16">
                        <div className="lg:col-span-2">
                             <div className="prose lg:prose-xl max-w-none text-muted-foreground leading-relaxed">
                                <p className="lead !text-xl !font-normal !text-primary !mb-8">{service.description}</p>
                                <p>
                                    Tại Cảnh Quan Kiến Trúc Xanh, chúng tôi hiểu rằng mỗi không gian là duy nhất và mỗi khách hàng có một tầm nhìn riêng. Với dịch vụ "{service.title}", chúng tôi cam kết biến tầm nhìn đó thành hiện thực, tạo ra một không gian không chỉ đẹp về mặt thẩm mỹ mà còn mang lại giá trị bền vững và hài hòa với thiên nhiên. Đội ngũ kiến trúc sư và nghệ nhân của chúng tôi sẽ làm việc chặt chẽ với bạn từ khâu lên ý tưởng đầu tiên cho đến khi công trình được hoàn thiện và bàn giao.
                                </p>
                            </div>
                            
                            {/* Benefits Section */}
                            {service.benefits && service.benefits.length > 0 && (
                                <div className="mt-16">
                                    <h2 className="text-3xl font-bold text-primary mb-8">Lợi ích khi chọn chúng tôi</h2>
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        {service.benefits.map((benefit, i) => (
                                            <Card key={i} className="bg-muted border-none">
                                                <CardHeader className="flex flex-row items-start gap-4">
                                                    <div className="bg-primary/10 p-3 rounded-full">
                                                        <benefit.icon className="w-6 h-6 text-primary"/>
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                                                    </div>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Process Section */}
                            {service.process && service.process.length > 0 && (
                                <div className="mt-16">
                                     <h2 className="text-3xl font-bold text-primary mb-8">Quy trình thực hiện</h2>
                                     <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-primary/10">
                                         {service.process.map((step, i) => (
                                             <div key={i} className="relative flex items-start gap-6">
                                                 <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shrink-0 z-10">{i + 1}</div>
                                                 <div>
                                                     <h4 className="text-lg font-bold text-primary mb-1">{step.title}</h4>
                                                     <p className="text-muted-foreground">{step.description}</p>
                                                 </div>
                                             </div>
                                         ))}
                                     </div>
                                </div>
                            )}

                            {/* Pricing Section */}
                             {service.pricing && service.pricing.length > 0 && (
                                <div className="mt-16">
                                     <h2 className="text-3xl font-bold text-primary mb-8">Báo giá tham khảo</h2>
                                     <Card className="bg-muted border-none">
                                        <CardContent className="p-6">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="font-bold text-primary">Hạng mục</TableHead>
                                                        <TableHead className="text-right font-bold text-primary">Đơn giá</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {service.pricing.map((item, i) => (
                                                        <TableRow key={i}>
                                                            <TableCell className="font-medium">{item.item}</TableCell>
                                                            <TableCell className="text-right">{item.price}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                            <p className="text-xs text-muted-foreground mt-4 italic">*Lưu ý: Bảng giá trên chỉ mang tính chất tham khảo. Đơn giá thực tế có thể thay đổi tùy thuộc vào hiện trạng, vật tư và yêu cầu cụ thể của khách hàng. Vui lòng liên hệ để nhận báo giá chính xác nhất.</p>
                                        </CardContent>
                                     </Card>
                                </div>
                            )}

                             <div className="mt-20 text-center bg-primary/5 p-8 rounded-lg">
                                <h3 className="text-2xl font-bold text-primary">Bạn đã sẵn sàng để bắt đầu?</h3>
                                <p className="text-muted-foreground mt-2 mb-6 max-w-xl mx-auto">Hãy để các chuyên gia của chúng tôi tư vấn miễn phí và hiện thực hóa không gian mơ ước của bạn.</p>
                                <Button size="lg" asChild>
                                    <Link href="/lien-he">Nhận Tư Vấn Miễn Phí <ArrowRight className="ml-2 h-5 w-5"/></Link>
                                </Button>
                            </div>
                        </div>

                        <aside className="lg:col-span-1 space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">Dịch vụ khác</h3>
                                <div className="space-y-4">
                                    {otherServices.map(other => (
                                        <Link key={other.slug} href={`/dich-vu/${other.slug}`} className="group flex items-center gap-4 p-3 rounded-lg bg-muted hover:bg-primary/90 transition-colors duration-300">
                                             {other.image && <Image src={other.image.imageUrl.replace('/600/450', '/120/90')} alt={other.title} width={80} height={60} className="rounded-md object-cover" data-ai-hint={other.image.imageHint}/>}
                                            <span className="font-semibold text-primary group-hover:text-white flex-1">{other.title}</span>
                                             <ArrowRight className="w-5 h-5 text-primary/50 group-hover:text-white transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
                
                 <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-primary text-center mb-12">Dự Án Liên Quan</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                             {relatedProjects.map((project) => (
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
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Button asChild>
                                <Link href="/du-an">Xem Thêm Dự Án</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
