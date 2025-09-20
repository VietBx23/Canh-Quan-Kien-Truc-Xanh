import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, Target, Users, Leaf } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const teamImage = PlaceHolderImages.find(p => p.id === 'gallery-4');

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Về Cảnh Quan Kiến Trúc Xanh</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Hành trình kiến tạo những không gian sống xanh, đẳng cấp và bền vững cùng thiên nhiên.
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-4">Câu Chuyện Của Chúng Tôi</h2>
                                <p className="text-muted-foreground mb-4">
                                    Được thành lập từ niềm đam mê mãnh liệt với thiên nhiên và kiến trúc, Cảnh Quan Kiến Trúc Xanh khởi đầu với một mục tiêu duy nhất: mang màu xanh vào từng không gian sống, biến những ngôi nhà không chỉ là nơi để ở mà còn là nơi để tận hưởng và tái tạo năng lượng.
                                </p>
                                <p className="text-muted-foreground">
                                    Trải qua hơn 10 năm phát triển, chúng tôi đã không ngừng học hỏi, sáng tạo và thực hiện hàng trăm dự án lớn nhỏ, từ sân vườn biệt thự, hồ cá Koi cho các gia đình đến cảnh quan cho các khu resort, nhà hàng, quán cafe. Mỗi công trình là một câu chuyện, một tác phẩm nghệ thuật mà chúng tôi đặt trọn tâm huyết.
                                </p>
                            </div>
                            <div>
                                {teamImage && (
                                    <Image 
                                        src={teamImage.imageUrl} 
                                        alt="Đội ngũ Kiến Trúc Xanh" 
                                        width={600} 
                                        height={400} 
                                        className="rounded-lg shadow-xl object-cover" 
                                        data-ai-hint={teamImage.imageHint}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Tầm Nhìn, Sứ Mệnh & Giá Trị Cốt Lõi</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="p-6">
                                <Target className="mx-auto w-12 h-12 text-accent mb-4"/>
                                <h3 className="text-2xl font-bold text-primary mb-2">Tầm Nhìn</h3>
                                <p className="text-muted-foreground">Trở thành đơn vị hàng đầu tại Việt Nam trong lĩnh vực thiết kế và thi công cảnh quan, là biểu tượng của sự sáng tạo, chất lượng và hài hòa với thiên nhiên.</p>
                            </div>
                            <div className="p-6">
                                <Award className="mx-auto w-12 h-12 text-accent mb-4"/>
                                <h3 className="text-2xl font-bold text-primary mb-2">Sứ Mệnh</h3>
                                <p className="text-muted-foreground">Kiến tạo những không gian sống xanh, đẳng cấp, mang lại giá trị thẩm mỹ, sức khỏe và tinh thần cho khách hàng thông qua các giải pháp cảnh quan chuyên nghiệp.</p>
                            </div>
                             <div className="p-6">
                                <Leaf className="mx-auto w-12 h-12 text-accent mb-4"/>
                                <h3 className="text-2xl font-bold text-primary mb-2">Giá Trị Cốt Lõi</h3>
                                <p className="text-muted-foreground">Sáng tạo - Tận tâm - Chuyên nghiệp - Bền vững. Chúng tôi cam kết đặt lợi ích và sự hài lòng của khách hàng lên hàng đầu.</p>
                            </div>
                        </div>
                    </div>
                </section>

                 <section className="py-20 md:py-28">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tại Sao Chọn Chúng Tôi?</h2>
                        <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
                            <div className="p-4">
                                <h3 className="font-bold text-xl mb-2">Đội Ngũ Chuyên Gia</h3>
                                <p className="text-sm text-muted-foreground">Kiến trúc sư và nghệ nhân giàu kinh nghiệm, am hiểu sâu sắc về cây cối, phong thủy.</p>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-xl mb-2">Thiết Kế Sáng Tạo</h3>
                                <p className="text-sm text-muted-foreground">Luôn cập nhật xu hướng mới, tạo ra những thiết kế độc đáo, mang đậm dấu ấn cá nhân.</p>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-xl mb-2">Quy Trình Chuyên Nghiệp</h3>
                                <p className="text-sm text-muted-foreground">Từ khảo sát, thiết kế 3D đến thi công và bảo dưỡng, tất cả đều được thực hiện bài bản.</p>
                            </div>
                             <div className="p-4">
                                <h3 className="font-bold text-xl mb-2">Bảo Hành Dài Hạn</h3>
                                <p className="text-sm text-muted-foreground">Cam kết chất lượng công trình, hỗ trợ chăm sóc, bảo dưỡng sau bàn giao.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
