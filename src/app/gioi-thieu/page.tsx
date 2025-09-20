
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, Target, Users, Leaf, ShieldCheck, Star, Lightbulb, Briefcase, Building, Smile, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AboutPage() {
    const teamImage = PlaceHolderImages.find(p => p.id === 'gallery-15');
    const ctaBgImage = PlaceHolderImages.find(p => p.id === 'cta-background');

    const stats = [
        { icon: Users, value: "10+", label: "Năm Kinh Nghiệm" },
        { icon: Briefcase, value: "500+", label: "Công Trình Hoàn Thiện" },
        { icon: Smile, value: "95%", label: "Khách Hàng Hài Lòng" },
    ];
    
    const coreValues = [
        { icon: Users, title: "Tận tâm & Chuyên nghiệp", description: "Đội ngũ kiến trúc sư, kỹ sư và nghệ nhân dày dặn kinh nghiệm, luôn đặt lợi ích của khách hàng lên hàng đầu." },
        { icon: Lightbulb, title: "Sáng tạo & Độc bản", description: "Mỗi thiết kế là một tác phẩm nghệ thuật riêng biệt, không ngừng cập nhật xu hướng và vật liệu mới." },
        { icon: Star, title: "Chất lượng & Bền vững", description: "Chỉ sử dụng vật liệu loại 1, cây trồng khỏe mạnh và thi công tỉ mỉ để đảm bảo công trình bền đẹp với thời gian." },
        { icon: ShieldCheck, title: "Minh bạch & Uy tín", description: "Quy trình làm việc rõ ràng, báo giá chi tiết, hợp đồng minh bạch và chính sách bảo hành dài hạn." },
    ];

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Về Chúng Tôi</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Kiến tạo những không gian sống xanh, đẳng cấp và bền vững, nơi con người và thiên nhiên giao hòa.
                        </p>
                    </div>
                </section>

                {/* Our Story & Stats Section */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                            <div className="transition-transform duration-500 hover:scale-105 animate-fade-in-up">
                                {teamImage && (
                                    <Image 
                                        src={teamImage.imageUrl} 
                                        alt="Đội ngũ Kiến Trúc Xanh" 
                                        width={600} 
                                        height={500}
                                        className="rounded-lg shadow-2xl object-cover" 
                                        data-ai-hint={teamImage.imageHint}
                                    />
                                )}
                            </div>
                             <div className="animate-fade-in-up animation-delay-300">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Câu Chuyện <span className="text-accent">Kiến Trúc Xanh</span></h2>
                                <div className="prose prose-lg max-w-none text-muted-foreground">
                                    <p>
                                        Thành lập từ năm 2015, <strong>Cảnh Quan Kiến Trúc Xanh</strong> khởi đầu với một sứ mệnh đơn giản nhưng đầy tâm huyết: mang màu xanh vào từng không gian sống, biến những ngôi nhà không chỉ là nơi để ở mà còn là nơi để chữa lành và tái tạo năng lượng.
                                    </p>
                                    <p>
                                        Trải qua gần một thập kỷ, chúng tôi tự hào đã kiến tạo hàng trăm không gian sống đẳng cấp, từ những sân vườn biệt thự tinh tế, hồ cá Koi đạt chuẩn quốc tế đến các công trình cảnh quan thương mại quy mô.
                                    </p>
                                </div>
                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="p-4 rounded-lg">
                                            <stat.icon className="w-10 h-10 mx-auto mb-2 text-accent"/>
                                            <p className="text-3xl font-bold text-primary">{stat.value}</p>
                                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Mission & Vision Section */}
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 animate-fade-in-up">
                             <h2 className="text-3xl md:text-4xl font-bold text-primary">Tầm Nhìn & Sứ Mệnh</h2>
                             <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Kim chỉ nam cho mọi hành động và định hướng phát triển của chúng tôi.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                            <div className="animate-fade-in-up animation-delay-300">
                                <Card className="border-none shadow-xl transform hover:-translate-y-2 transition-transform h-full">
                                    <CardHeader className="flex-row items-center gap-4 p-8">
                                        <div className="bg-accent/10 p-4 rounded-full">
                                            <Target className="w-8 h-8 text-accent"/>
                                        </div>
                                        <CardTitle className="text-2xl text-primary">Sứ Mệnh</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-8 pt-0 text-muted-foreground">
                                        "Kiến tạo những không gian cảnh quan độc đáo, chất lượng, mang lại giá trị bền vững về thẩm mỹ, sức khỏe và tinh thần cho khách hàng, góp phần xây dựng một môi trường sống xanh và trong lành hơn."
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="animate-fade-in-up animation-delay-600">
                                <Card className="border-none shadow-xl transform hover:-translate-y-2 transition-transform h-full">
                                    <CardHeader className="flex-row items-center gap-4 p-8">
                                        <div className="bg-primary/10 p-4 rounded-full">
                                            <Eye className="w-8 h-8 text-primary"/>
                                        </div>
                                        <CardTitle className="text-2xl text-primary">Tầm Nhìn 2030</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-8 pt-0 text-muted-foreground">
                                        "Trở thành công ty thiết kế và thi công cảnh quan hàng đầu tại Việt Nam, là biểu tượng của sự sáng tạo, chuyên nghiệp và uy tín, tiên phong trong việc ứng dụng các giải pháp xanh và công nghệ hiện đại."
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                 <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up">Giá Trị Cốt Lõi</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto mb-16 animate-fade-in-up animation-delay-300">
                            Những nguyên tắc vàng là kim chỉ nam cho mọi hoạt động của chúng tôi.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
                            {coreValues.map((value, index) => (
                                <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 200 + 400}ms`}}>
                                    <Card className="text-center p-6 border-none rounded-lg transition-transform hover:-translate-y-2 shadow-lg hover:shadow-2xl h-full">
                                        <CardContent className="p-4">
                                            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                                                <value.icon className="h-8 w-8 text-primary"/>
                                            </div>
                                            <h3 className="font-bold text-xl mb-2 text-primary">{value.title}</h3>
                                            <p className="text-sm text-muted-foreground">{value.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {ctaBgImage && (
                <section className="py-20 md:py-28 bg-parallax bg-overlay text-white text-center" style={{backgroundImage: `url(${ctaBgImage.imageUrl})`}}>
                    <div className="container mx-auto px-4 content-overlay">
                        <h2 className="text-3xl md:text-4xl font-bold animate-fade-in-up">Hãy Cùng Chúng Tôi Kiến Tạo Nên Tác Phẩm Của Riêng Bạn</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-white/80 animate-fade-in-up animation-delay-300">Chúng tôi tin rằng mỗi không gian đều có thể trở thành một tác phẩm nghệ thuật. Liên hệ ngay để bắt đầu hành trình biến ước mơ của bạn thành hiện thực.</p>
                        <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 animate-fade-in-up animation-delay-600" asChild>
                            <Link href="/lien-he">Bắt Đầu Dự Án</Link>
                        </Button>
                    </div>
                </section>
                )}
            </main>
            <Footer />
        </div>
    );
}

