
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, Target, Users, Leaf, ShieldCheck, Star, Lightbulb, Briefcase, Building, Smile, Fish, Eye, Goal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AboutPage() {
    const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'gallery-4');
    const teamImage = PlaceHolderImages.find(p => p.id === 'gallery-15');

    const timeline = [
        { year: "2015", event: "Thành lập với niềm đam mê, bắt đầu từ những công trình sân vườn nhỏ.", icon: Leaf },
        { year: "2017", event: "Tiên phong thi công hồ cá Koi chuyên nghiệp, khẳng định vị thế trên thị trường.", icon: Fish },
        { year: "2020", event: "Trở thành đối tác tin cậy của nhiều khu đô thị, resort và các dự án thương mại lớn.", icon: Building },
        { year: "2024", event: "Hoàn thiện hơn 500+ công trình, tiếp tục hành trình kiến tạo không gian xanh bền vững.", icon: Star },
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
                <section className="relative py-32 md:py-48 text-white bg-black">
                     {aboutHeroImage && (
                        <Image
                            src={aboutHeroImage.imageUrl.replace('/600/450', '/1200/600')}
                            alt="Về chúng tôi"
                            fill
                            className="object-cover brightness-50"
                            data-ai-hint={aboutHeroImage.imageHint}
                            priority
                        />
                    )}
                    <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
                        <p className="text-lg font-semibold text-accent uppercase tracking-widest">Hành trình của chúng tôi</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-shadow-lg mt-2">Về Cảnh Quan Kiến Trúc Xanh</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white/90 text-shadow">
                            Kiến tạo những không gian sống xanh, đẳng cấp và bền vững cùng thiên nhiên.
                        </p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                             <div className="animate-fade-in-up animation-delay-300">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Câu Chuyện <span className="text-accent">Kiến Trúc Xanh</span></h2>
                                <div className="prose prose-lg max-w-none text-muted-foreground">
                                    <p>
                                        Được thành lập từ năm 2015 bởi những con người có niềm đam mê mãnh liệt với thiên nhiên và kiến trúc, <strong>Cảnh Quan Kiến Trúc Xanh</strong> khởi đầu với một sứ mệnh đơn giản nhưng đầy tâm huyết: mang màu xanh vào từng không gian sống, biến những ngôi nhà không chỉ là nơi để ở mà còn là nơi để chữa lành, tận hưởng và tái tạo năng lượng.
                                    </p>
                                    <p>
                                        Chúng tôi tin rằng một khu vườn đẹp không chỉ đến từ cây cối um tùm, mà còn đến từ sự sắp đặt tinh tế, sự am hiểu về phong thủy và sự hài hòa với kiến trúc tổng thể. Trải qua gần một thập kỷ, từ những sân vườn nhỏ đến các đại công trình cảnh quan resort, chúng tôi vẫn giữ trọn vẹn niềm đam mê và sự tỉ mỉ trong từng dự án.
                                    </p>
                                </div>
                                <Button asChild size="lg" className="mt-8">
                                    <Link href="/du-an">Khám Phá Các Dự Án</Link>
                                </Button>
                            </div>
                             <div className="transition-transform duration-500 hover:scale-105 animate-fade-in-up">
                                {teamImage && (
                                    <Image 
                                        src={teamImage.imageUrl} 
                                        alt="Đội ngũ Kiến Trúc Xanh" 
                                        width={600} 
                                        height={450} 
                                        className="rounded-lg shadow-2xl object-cover" 
                                        data-ai-hint={teamImage.imageHint}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Mission & Vision Section */}
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                            <div className="animate-fade-in-up">
                                <Card className="border-none shadow-xl transform hover:-translate-y-2 transition-transform">
                                    <CardHeader className="flex-row items-center gap-4 p-6">
                                        <div className="bg-accent/10 p-4 rounded-full">
                                            <Target className="w-8 h-8 text-accent"/>
                                        </div>
                                        <CardTitle className="text-2xl text-primary">Sứ Mệnh Của Chúng Tôi</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6 pt-0 text-muted-foreground">
                                        "Kiến tạo những không gian cảnh quan độc đáo, chất lượng, mang lại giá trị bền vững về thẩm mỹ, sức khỏe và tinh thần cho khách hàng, góp phần xây dựng một môi trường sống xanh và trong lành hơn."
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="animate-fade-in-up animation-delay-300">
                                <Card className="border-none shadow-xl transform hover:-translate-y-2 transition-transform">
                                    <CardHeader className="flex-row items-center gap-4 p-6">
                                        <div className="bg-primary/10 p-4 rounded-full">
                                            <Eye className="w-8 h-8 text-primary"/>
                                        </div>
                                        <CardTitle className="text-2xl text-primary">Tầm Nhìn Đến 2030</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6 pt-0 text-muted-foreground">
                                        "Trở thành công ty thiết kế và thi công cảnh quan hàng đầu tại Việt Nam, là biểu tượng của sự sáng tạo, chuyên nghiệp và uy tín, tiên phong trong việc ứng dụng các giải pháp xanh và công nghệ hiện đại."
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 animate-fade-in-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Hành Trình Hình Thành & Phát Triển</h2>
                            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Những cột mốc quan trọng trên con đường khẳng định vị thế.</p>
                        </div>
                        <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-primary/20 md:before:mx-auto md:before:left-1/2 md:before:-translate-x-1/2">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative pl-8 md:pl-0 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                                    <div className={`flex items-center md:justify-center md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'}`}>
                                        <div className="p-6 bg-muted rounded-lg shadow-lg mb-8 md:max-w-sm w-full">
                                            <h3 className="text-3xl font-bold text-accent">{item.year}</h3>
                                            <p className="mt-2 text-muted-foreground">{item.event}</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-0 top-8 h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white z-10 md:left-1/2 md:-translate-x-1/2">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                 <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up">Giá Trị Cốt Lõi</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto mb-16 animate-fade-in-up animation-delay-300">
                            Những nguyên tắc vàng là kim chỉ nam cho mọi hoạt động của chúng tôi.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
                            {coreValues.map((value, index) => (
                                <div key={index} className="text-center p-6 bg-white rounded-lg transition-transform hover:-translate-y-2 shadow-lg hover:shadow-2xl animate-fade-in-up" style={{animationDelay: `${index * 200 + 400}ms`}}>
                                    <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                                        <value.icon className="h-8 w-8 text-primary"/>
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-primary">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-primary/95 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold animate-fade-in-up">Hãy Cùng Chúng Tôi Kiến Tạo Nên Tác Phẩm Của Riêng Bạn</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-white/80 animate-fade-in-up animation-delay-300">Chúng tôi tin rằng mỗi không gian đều có thể trở thành một tác phẩm nghệ thuật. Liên hệ ngay để bắt đầu hành trình biến ước mơ của bạn thành hiện thực.</p>
                        <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 animate-fade-in-up animation-delay-600" asChild>
                            <Link href="/lien-he">Bắt Đầu Dự Án</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
