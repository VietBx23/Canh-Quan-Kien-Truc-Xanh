

import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Fish, Sprout, CheckCircle, Wind, Droplets, Sun, Sparkles, Truck, Home, ShoppingCart, Trees, ArrowRight, DollarSign, ListChecks, Eye, ShieldCheck, Star } from "lucide-react";
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

const servicesData = [
    {
        slug: "thiet-ke-san-vuon",
        title: "Thiết kế & Thi công Sân vườn",
        description: "Chúng tôi biến những khoảng không gian thô sơ thành những khu vườn đầy sức sống, là nơi để thư giãn và tận hưởng cuộc sống. Dịch vụ thiết kế sân vườn của Kiến Trúc Xanh là sự kết hợp giữa nghệ thuật, khoa học và sự am hiểu sâu sắc về mong muốn của gia chủ.",
        icon: Leaf,
        image: PlaceHolderImages.find(p => p.id === 'service-garden'),
        benefits: [
            { icon: Eye, title: "Tăng giá trị thẩm mỹ", description: "Một khu vườn được thiết kế chuyên nghiệp sẽ là điểm nhấn nâng tầm đẳng cấp cho ngôi nhà của bạn." },
            { icon: ShieldCheck, title: "Nâng cao sức khỏe", description: "Không gian xanh giúp thanh lọc không khí, giảm stress và khuyến khích các hoạt động ngoài trời." },
            { icon: Star, title: "Dấu ấn cá nhân", description: "Thiết kế độc bản, phản ánh phong cách và cá tính riêng của gia chủ, không bị trùng lặp." },
        ],
        process: [
             { title: "Khảo sát & Tư vấn", description: "Lắng nghe ý tưởng, khảo sát hiện trạng và tư vấn các giải pháp phù hợp nhất." },
            { title: "Thiết kế 3D", description: "Kiến trúc sư của chúng tôi sẽ hiện thực hóa ý tưởng bằng bản vẽ 3D trực quan, sinh động." },
            { title: "Báo giá chi tiết", description: "Cung cấp bảng báo giá rõ ràng cho từng hạng mục thi công và vật tư." },
            { title: "Thi công & Giám sát", description: "Đội ngũ kỹ sư và nghệ nhân tiến hành thi công dưới sự giám sát chặt chẽ." },
            { title: "Nghiệm thu & Bàn giao", description: "Bàn giao công trình hoàn thiện và hướng dẫn khách hàng chăm sóc." },
        ],
        pricing: [
            { item: "Gói thiết kế cơ bản (Bản vẽ 2D, 3D)", price: "Từ 150.000đ/m²" },
            { item: "Gói thi công phần thô", price: "Liên hệ báo giá" },
            { item: "Gói thi công trọn gói (Thiết kế + Thi công)", price: "Từ 1.200.000đ/m²" },
        ]
    },
    {
        slug: "ho-ca-koi",
        title: "Hồ Cá Koi Chuyên Nghiệp",
        description: "Một hồ cá Koi không chỉ là công trình cảnh quan mà còn là một tác phẩm nghệ thuật động, mang lại sinh khí và tài lộc cho gia chủ. Chúng tôi tự hào là đơn vị tiên phong trong việc thi công hồ cá Koi đạt chuẩn với công nghệ lọc vi sinh hàng đầu.",
        icon: Fish,
        image: PlaceHolderImages.find(p => p.id === 'service-koi'),
        benefits: [
            { icon: Fish, title: "Hệ lọc chuẩn quốc tế", description: "Đảm bảo nước luôn trong vắt, không mùi tanh, cá khỏe mạnh, hạn chế tối đa rêu tảo." },
            { icon: Wind, title: "Yếu tố phong thủy", description: "Tư vấn vị trí, hướng và hình dáng hồ để mang lại may mắn, vượng khí cho gia đình." },
            { icon: ShieldCheck, title: "Bảo hành dài hạn", description: "Bảo hành chống thấm cho kết cấu hồ lên đến 10 năm, bảo hành hệ thống lọc 2 năm." },
        ],
        process: [
            { title: "Tư vấn phong thủy", description: "Xác định vị trí, hình dáng, kích thước hồ hợp với tuổi và mệnh của gia chủ." },
            { title: "Lên bản vẽ kỹ thuật", description: "Thiết kế chi tiết hệ thống lọc, hệ thống hút mặt, hút đáy, đường ống kỹ thuật." },
            { title: "Thi công phần thô", description: "Đào đất, đổ bê tông cốt thép, đi ống và chống thấm nhiều lớp." },
            { title: "Lắp đặt hệ lọc", description: "Sắp xếp vật liệu lọc, lắp đặt máy bơm, máy sục khí, đèn UV diệt khuẩn." },
            { title: "Xử lý nước & Thả cá", description: "Vận hành hệ thống, khử trùng, ổn định vi sinh và hướng dẫn thả cá an toàn." },
        ],
        pricing: [
            { item: "Hồ cá Koi (Bao gồm hệ lọc, chưa bao gồm đá trang trí)", price: "Từ 4.000.000đ/m³" },
            { item: "Đá trang trí thành hồ", price: "Từ 800.000đ/m tới" },
            { item: "Thác nước, suối tự nhiên", price: "Liên hệ báo giá" },
        ]
    },
    {
        slug: "da-phong-thuy",
        title: "Đá Phong Thủy & Tiểu Cảnh",
        description: "Mang năng lượng thuần khiết của tự nhiên vào không gian sống thông qua những khối đá và tiểu cảnh được bài trí tinh tế. Dịch vụ của chúng tôi giúp bạn tạo ra những điểm nhấn độc đáo, hài hòa về mặt thẩm mỹ và giàu ý nghĩa phong thủy.",
        icon: Wind,
        image: PlaceHolderImages.find(p => p.id === 'service-maintenance'),
        benefits: [
            { icon: Wind, title: "Cân bằng năng lượng", description: "Đá và nước giúp điều hòa âm dương, mang lại sự bình yên và thư thái." },
            { icon: DollarSign, title: "Thu hút tài lộc", description: "Bài trí đúng cách giúp kích hoạt cung tài lộc, mang lại may mắn trong kinh doanh." },
            { icon: Eye, title: "Điểm nhấn nghệ thuật", description: "Tiểu cảnh, non bộ, thác nước là những tác phẩm điêu khắc tự nhiên độc đáo." },
        ],
        process: [
            { title: "Tư vấn mệnh và hướng", description: "Phân tích tuổi, mệnh của gia chủ để chọn loại đá và hướng đặt phù hợp." },
            { title: "Lựa chọn đá tại vườn", description: "Khách hàng có thể trực tiếp lựa chọn những khối đá tự nhiên ưng ý tại vườn của chúng tôi." },
            { title: "Thiết kế phối cảnh", description: "Dựng mô hình 3D để khách hàng hình dung rõ nhất về tiểu cảnh trong không gian thực tế." },
            { title: "Vận chuyển & Lắp đặt", description: "Sử dụng xe cẩu chuyên dụng để vận chuyển và đặt đá vào đúng vị trí an toàn, chính xác." },
        ],
        pricing: [
            { item: "Tiểu cảnh khô, vườn Zen", price: "Từ 2.000.000đ/m²" },
            { item: "Tiểu cảnh nước, thác nước tường", price: "Từ 3.500.000đ/m²" },
            { item: "Hòn non bộ (Tùy kích thước và độ phức tạp)", price: "Liên hệ báo giá" },
        ]
    },
    // Add other services with detailed content here...
     {
        slug: "cai-tao-nang-cap",
        title: "Cải Tạo & Nâng Cấp Cảnh Quan",
        description: "Làm mới không gian sân vườn cũ, thay đổi phong cách, hoặc khắc phục các vấn đề tồn tại. Chúng tôi giúp 'thay áo mới' cho khu vườn của bạn, mang lại sức sống và vẻ đẹp đương đại.",
        icon: Sparkles,
        image: PlaceHolderImages.find(p => p.id === 'service-renovation'),
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "vuon-san-thuong",
        title: "Vườn Trên Sân Thượng",
        description: "Biến không gian sân thượng tưởng chừng bỏ đi thành một khu vườn xanh mát, một nơi thư giãn lý tưởng hoặc một nông trại mini ngay tại nhà. Giải pháp chống thấm và chọn cây chuyên nghiệp.",
        icon: Home,
        image: PlaceHolderImages.find(p => p.id === 'service-rooftop'),
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "tuong-cay-xanh",
        title: "Tường Cây Xanh Nghệ Thuật",
        description: "Giải pháp tối ưu cho không gian nhỏ hoặc tạo điểm nhấn ấn tượng cho các mảng tường lớn. Chúng tôi thi công tường cây thật với hệ thống tưới nhỏ giọt tự động, dễ dàng chăm sóc.",
        icon: Trees,
        image: PlaceHolderImages.find(p => p.id === 'service-vertical-garden'),
        benefits: [],
        process: [],
        pricing: []
    },
];

const relatedProjects = PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 4);

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
                                                <Link href={`/du-an/${project.id}`}>{project.imageHint.replace(/-/g, ' ')}</Link>
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
