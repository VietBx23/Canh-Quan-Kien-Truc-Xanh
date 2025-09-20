
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, Target, Users, Leaf, ShieldCheck, Star, Lightbulb, Briefcase, Building, Smile, Fish } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AboutPage() {
    const teamImage = PlaceHolderImages.find(p => p.id === 'gallery-4');

    const timeline = [
        { year: "2015", event: "Thành lập Kiến Trúc Xanh, bắt đầu từ những công trình sân vườn nhỏ.", icon: Leaf },
        { year: "2017", event: "Mở rộng thi công hồ cá Koi chuyên nghiệp, trở thành một trong những đơn vị tiên phong.", icon: Fish },
        { year: "2020", event: "Trở thành đối tác tin cậy của nhiều khu đô thị, resort và các dự án lớn.", icon: Building },
        { year: "2024", event: "Hoàn thiện hơn 500+ công trình và tiếp tục hành trình kiến tạo không gian xanh.", icon: Star },
    ];

    const coreValues = [
        { icon: Users, title: "Đội Ngũ Chuyên Gia", description: "Kiến trúc sư và nghệ nhân giàu kinh nghiệm, am hiểu sâu sắc về cây cối, phong thủy." },
        { icon: Lightbulb, title: "Thiết Kế Sáng Tạo", description: "Luôn cập nhật xu hướng mới, tạo ra những thiết kế độc đáo, mang đậm dấu ấn cá nhân." },
        { icon: Star, title: "Quy Trình Chuyên Nghiệp", description: "Từ khảo sát, thiết kế 3D đến thi công và bảo dưỡng, tất cả đều được thực hiện bài bản." },
        { icon: ShieldCheck, title: "Bảo Hành Dài Hạn", description: "Cam kết chất lượng công trình với chính sách bảo hành, bảo dưỡng rõ ràng, minh bạch." },
    ];

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Về Cảnh Quan Kiến Trúc Xanh</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Hành trình kiến tạo những không gian sống xanh, đẳng cấp và bền vững cùng thiên nhiên.
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
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
                            <div className="animate-fade-in-up animation-delay-300">
                                <h2 className="text-3xl font-bold text-primary mb-4">Câu Chuyện Của Chúng Tôi</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Được thành lập từ niềm đam mê mãnh liệt với thiên nhiên và kiến trúc, Cảnh Quan Kiến Trúc Xanh khởi đầu với một mục tiêu duy nhất: mang màu xanh vào từng không gian sống, biến những ngôi nhà không chỉ là nơi để ở mà còn là nơi để tận hưởng và tái tạo năng lượng.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Trải qua gần một thập kỷ phát triển, chúng tôi đã không ngừng học hỏi, sáng tạo và thực hiện hàng trăm dự án lớn nhỏ. Mỗi công trình là một câu chuyện, một tác phẩm nghệ thuật mà chúng tôi đặt trọn tâm huyết, từ sân vườn biệt thự, hồ cá Koi cho các gia đình đến cảnh quan cho các khu resort, nhà hàng.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 animate-fade-in-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Quá Trình Hình Thành & Phát Triển</h2>
                        </div>
                        <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-primary/20 md:before:mx-auto md:before:left-1/2 md:before:-translate-x-1/2">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative pl-8 md:pl-0 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                                    <div className="md:flex md:items-center md:flex-row-reverse">
                                        <div className={`flex md:w-1/2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} justify-start md:justify-center`}>
                                            <div className="absolute left-5 top-1 h-5 w-5 rounded-full border-4 border-primary bg-background md:relative md:left-0 md:transform-none"></div>
                                        </div>
                                        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className={`p-6 bg-white rounded-lg shadow-xl mb-8 md:max-w-sm w-full mx-auto ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                                <h3 className="text-3xl font-bold text-accent">{item.year}</h3>
                                                <p className="mt-2 text-muted-foreground">{item.event}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -left-1.5 top-2 h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white md:left-1/2 md:-translate-x-1/2">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                 <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up">Tại Sao Chọn Chúng Tôi?</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto mb-16 animate-fade-in-up animation-delay-300">
                            Sự khác biệt của chúng tôi đến từ đội ngũ chuyên gia tâm huyết, quy trình làm việc minh bạch và cam kết chất lượng trên từng công trình.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
                            {coreValues.map((value, index) => (
                                <div key={index} className="text-center p-6 bg-muted rounded-lg transition-transform hover:-translate-y-2 hover:shadow-xl animate-fade-in-up" style={{animationDelay: `${index * 200 + 400}ms`}}>
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
                            <Link href="/lien-he">Bắt đầu dự án</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
