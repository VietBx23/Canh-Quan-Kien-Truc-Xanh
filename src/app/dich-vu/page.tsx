import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Fish, Sprout, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
    const serviceGarden = PlaceHolderImages.find(p => p.id === 'service-garden');
    const serviceKoi = PlaceHolderImages.find(p => p.id === 'service-koi');
    const serviceMaintenance = PlaceHolderImages.find(p => p.id === 'service-maintenance');

    const services = [
        {
            title: "Thiết kế & Thi công Sân vườn",
            description: "Chúng tôi cung cấp dịch vụ trọn gói từ khâu lên ý tưởng, thiết kế 3D đến thi công hoàn thiện sân vườn cho biệt thự, nhà phố, khu đô thị, resort. Mỗi thiết kế đều là độc bản, kết hợp giữa yếu tố thẩm mỹ, công năng và phong thủy.",
            icon: Leaf,
            image: serviceGarden,
            details: [
                "Sân vườn phong cách hiện đại, tối giản.",
                "Sân vườn phong cách Nhật Bản (Zen garden).",
                "Sân vườn phong cách nhiệt đới (Tropical garden).",
                "Vườn trên sân thượng, vườn tường đứng.",
            ]
        },
        {
            title: "Hồ Cá Koi Chuyên Nghiệp",
            description: "Sở hữu một hồ cá Koi không chỉ làm đẹp cảnh quan mà còn mang lại may mắn, tài lộc. Chúng tôi chuyên thi công hồ cá Koi đạt chuẩn với hệ thống lọc vi sinh tiên tiến, đảm bảo nước luôn trong và cá luôn khỏe.",
            icon: Fish,
            image: serviceKoi,
             details: [
                "Tư vấn chọn giống cá Koi Nhật Bản.",
                "Thiết kế hồ cá Koi hợp phong thủy.",
                "Xây dựng hệ thống lọc chuẩn, dễ vận hành.",
                "Dịch vụ bảo dưỡng, chăm sóc hồ định kỳ.",
            ]
        },
        {
            title: "Đá Phong Thủy & Tiểu Cảnh",
            description: "Mang năng lượng của đất trời vào không gian sống của bạn với các sản phẩm đá phong thủy tự nhiên, non bộ, thác nước. Chúng tôi giúp bạn lựa chọn và bài trí để tăng vượng khí, tạo điểm nhấn độc đáo cho cảnh quan.",
            icon: Sprout,
            image: serviceMaintenance,
             details: [
                "Cung cấp các loại đá cảnh quan, đá phong thủy.",
                "Thiết kế và thi công tiểu cảnh, non bộ, thác nước.",
                "Lối đi bằng đá, tường đá trang trí.",
                "Tư vấn bài trí hợp mệnh gia chủ.",
            ]
        }
    ];

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
                                        <Link href="/lien-he">Yêu Cầu Tư Vấn</Link>
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
