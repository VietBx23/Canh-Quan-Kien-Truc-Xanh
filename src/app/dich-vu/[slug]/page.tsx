

import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Fish, Sprout, CheckCircle, Wind, Droplets, Sun, Sparkles, Truck, Home, ShoppingCart, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDictionary } from '@/get-dictionary';
import { Locale } from 'i18n-config';
import { notFound } from "next/navigation";

const servicesData = [
    {
        slug: "thiet-ke-san-vuon",
        title: "Thiết kế & Thi công Sân vườn",
        description: "Chúng tôi cung cấp dịch vụ trọn gói từ khâu lên ý tưởng, thiết kế 3D đến thi công hoàn thiện sân vườn cho biệt thự, nhà phố, khu đô thị, resort. Mỗi thiết kế đều là độc bản, kết hợp giữa yếu tố thẩm mỹ, công năng và phong thủy.",
        icon: Leaf,
        image: PlaceHolderImages.find(p => p.id === 'service-garden'),
        details: [
            "Sân vườn phong cách hiện đại, tối giản.",
            "Sân vườn phong cách Nhật Bản (Zen garden).",
            "Sân vườn phong cách nhiệt đới (Tropical garden).",
            "Vườn trên sân thượng, vườn tường đứng.",
        ]
    },
    {
        slug: "ho-ca-koi",
        title: "Hồ Cá Koi Chuyên Nghiệp",
        description: "Sở hữu một hồ cá Koi không chỉ làm đẹp cảnh quan mà còn mang lại may mắn, tài lộc. Chúng tôi chuyên thi công hồ cá Koi đạt chuẩn với hệ thống lọc vi sinh tiên tiến, đảm bảo nước luôn trong và cá luôn khỏe.",
        icon: Fish,
        image: PlaceHolderImages.find(p => p.id === 'service-koi'),
         details: [
            "Tư vấn chọn giống cá Koi Nhật Bản.",
            "Thiết kế hồ cá Koi hợp phong thủy.",
            "Xây dựng hệ thống lọc chuẩn, dễ vận hành.",
            "Dịch vụ bảo dưỡng, chăm sóc hồ định kỳ.",
        ]
    },
     {
        slug: "da-phong-thuy",
        title: "Đá Phong Thủy & Tiểu Cảnh",
        description: "Mang năng lượng của đất trời vào không gian sống của bạn với các sản phẩm đá phong thủy tự nhiên, non bộ, thác nước. Chúng tôi giúp bạn lựa chọn và bài trí để tăng vượng khí, tạo điểm nhấn độc đáo cho cảnh quan.",
        icon: Wind,
        image: PlaceHolderImages.find(p => p.id === 'service-maintenance'),
         details: [
            "Cung cấp các loại đá cảnh quan, đá phong thủy.",
            "Thiết kế và thi công tiểu cảnh, non bộ, thác nước.",
            "Lối đi bằng đá, tường đá trang trí.",
            "Tư vấn bài trí hợp mệnh gia chủ.",
        ]
    },
    {
        slug: "cai-tao-nang-cap",
        title: "Cải Tạo & Nâng Cấp Cảnh Quan",
        description: "Làm mới không gian sân vườn cũ, thay đổi phong cách, hoặc khắc phục các vấn đề tồn tại. Chúng tôi giúp 'thay áo mới' cho khu vườn của bạn, mang lại sức sống và vẻ đẹp đương đại.",
        icon: Sparkles,
        image: PlaceHolderImages.find(p => p.id === 'service-renovation'),
        details: [
            "Khảo sát hiện trạng và tư vấn giải pháp cải tạo.",
            "Bổ sung, thay thế cây trồng không còn phù hợp.",
            "Nâng cấp hệ thống chiếu sáng, tưới tiêu.",
            "Thiết kế lại bố cục tổng thể cho sân vườn.",
        ]
    },
    {
        slug: "vuon-san-thuong",
        title: "Vườn Trên Sân Thượng",
        description: "Biến không gian sân thượng tưởng chừng bỏ đi thành một khu vườn xanh mát, một nơi thư giãn lý tưởng hoặc một nông trại mini ngay tại nhà. Giải pháp chống thấm và chọn cây chuyên nghiệp.",
        icon: Home,
        image: PlaceHolderImages.find(p => p.id === 'service-rooftop'),
        details: [
            "Thiết kế vườn rau sạch, vườn cây ăn trái.",
            "Thiết kế vườn hoa, không gian tiệc BBQ ngoài trời.",
            "Giải pháp kết cấu, chống thấm và thoát nước hiệu quả.",
            "Lựa chọn cây trồng phù hợp với điều kiện nắng, gió.",
        ]
    },
    {
        slug: "tuong-cay-xanh",
        title: "Tường Cây Xanh Nghệ Thuật",
        description: "Giải pháp tối ưu cho không gian nhỏ hoặc tạo điểm nhấn ấn tượng cho các mảng tường lớn. Chúng tôi thi công tường cây thật với hệ thống tưới nhỏ giọt tự động, dễ dàng chăm sóc.",
        icon: Trees,
        image: PlaceHolderImages.find(p => p.id === 'service-vertical-garden'),
        details: [
            "Tường cây cho nội thất (phòng khách, giếng trời).",
            "Tường cây cho ngoại thất (mặt tiền, hàng rào).",
            "Đa dạng các loại cây và kiểu dáng thiết kế.",
            "Hệ thống khung module và tưới thông minh.",
        ]
    },
];

const relatedProjects = PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 4);

type Props = {
    params: { lang: Locale, slug: string }
}

export default async function ServiceDetailPage({ params: { lang, slug } }: Props) {
    const dictionary = await getDictionary(lang);
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    const otherServices = servicesData.filter(s => s.slug !== slug).slice(0,3);

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header lang={lang} dictionary={dictionary} />
            <main className="flex-1">
                <section className="relative py-32 md:py-48 text-white bg-black">
                     {service.image && (
                        <Image
                            src={service.image.imageUrl}
                            alt={service.title}
                            fill
                            className="object-cover brightness-50"
                            data-ai-hint={service.image.imageHint}
                        />
                    )}
                    <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-bold text-shadow-lg">{service.title}</h1>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2">
                             <div className="prose max-w-none text-muted-foreground text-lg leading-relaxed">
                                <p className="text-2xl font-semibold text-primary mb-6">{service.description}</p>
                                <p>
                                    Tại Cảnh Quan Kiến Trúc Xanh, chúng tôi hiểu rằng mỗi không gian là duy nhất và mỗi khách hàng có một tầm nhìn riêng. Với dịch vụ "{service.title}", chúng tôi cam kết biến tầm nhìn đó thành hiện thực, tạo ra một không gian không chỉ đẹp về mặt thẩm mỹ mà còn mang lại giá trị bền vững và hài hòa với thiên nhiên.
                                </p>
                                <ul className="space-y-4 my-8">
                                    {service.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0"/>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>
                                    Đội ngũ kiến trúc sư và nghệ nhân của chúng tôi sẽ làm việc chặt chẽ với bạn từ khâu lên ý tưởng đầu tiên cho đến khi công trình được hoàn thiện và bàn giao. Chúng tôi sử dụng những vật liệu tốt nhất, những giống cây khỏe mạnh nhất và áp dụng những kỹ thuật thi công tiên tiến nhất để đảm bảo chất lượng vượt trội cho mọi công trình.
                                </p>
                            </div>
                             <div className="mt-12">
                                <Button size="lg" asChild>
                                    <Link href={`/${lang}/lien-he`}>Nhận Tư Vấn Miễn Phí</Link>
                                </Button>
                            </div>
                        </div>

                        <aside className="lg:col-span-1 space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">Dịch vụ khác</h3>
                                <div className="space-y-6">
                                    {otherServices.map(other => (
                                        <Link key={other.slug} href={`/${lang}/dich-vu/${other.slug}`} className="group flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors duration-300">
                                             {other.image && <Image src={other.image.imageUrl} alt={other.title} width={80} height={60} className="rounded-md object-cover" data-ai-hint={other.image.imageHint}/>}
                                            <span className="font-semibold text-primary group-hover:text-white">{other.title}</span>
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
                                            <Link href={`/${lang}/du-an/${project.id}`}>
                                                <Image 
                                                    src={project.imageUrl} 
                                                    alt={`Dự án ${project.id}`} 
                                                    width={600}
                                                    height={450}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                                    data-ai-hint={project.imageHint} 
                                                />
                                            </Link>
                                        </div>
                                        <div className="p-4 bg-white">
                                            <h3 className="font-bold text-lg text-primary capitalize mt-1">
                                                <Link href={`/${lang}/du-an/${project.id}`}>{project.imageHint.replace(/-/g, ' ')}</Link>
                                            </h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Button asChild>
                                <Link href={`/${lang}/du-an`}>Xem Thêm Dự Án</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer lang={lang} dictionary={dictionary} />
        </div>
    );
}
