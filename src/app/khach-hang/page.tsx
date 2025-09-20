import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
    const testimonialAvatars = PlaceHolderImages.filter(p => p.id.startsWith('testimonial-'));
    const testimonials = [
        {
            quote: "Đội ngũ làm việc rất chuyên nghiệp và có tâm. Khu vườn nhà tôi giờ đây thật sự là một nơi thư giãn tuyệt vời sau những giờ làm việc căng thẳng. Cảm ơn Kiến Trúc Xanh!",
            author: "Anh Hoàng Minh",
            location: "Chủ biệt thự, Quận 2",
            avatar: testimonialAvatars[0]
        },
        {
            quote: "Hồ cá Koi đã trở thành điểm nhấn thu hút khách cho quán của tôi. Dịch vụ và chất lượng thi công vượt xa mong đợi. Chắc chắn sẽ tiếp tục hợp tác trong các dự án tương lai.",
            author: "Chị Lan Anh",
            location: "Chủ quán cafe sân vườn",
            avatar: testimonialAvatars[1]
        },
        {
            quote: "Thiết kế sáng tạo, độc đáo và rất tinh tế. Mọi người đến nhà đều trầm trồ khen ngợi khu vườn trên sân thượng. Tôi rất hài lòng với không gian xanh mà các bạn tạo ra.",
            author: "Anh Tuấn",
            location: "Nhà phố, Gò Vấp",
            avatar: PlaceHolderImages.find(p => p.id === 'testimonial-3')
        },
         {
            quote: "Rất hài lòng với dịch vụ bảo dưỡng định kỳ. Hồ cá lúc nào cũng trong veo, cây cối xanh tốt. Đội ngũ hỗ trợ rất nhiệt tình và chuyên nghiệp.",
            author: "Chú Hùng",
            location: "Biệt thự, Thảo Điền",
            avatar: PlaceHolderImages.find(p => p.id === 'testimonial-4')
        },
        {
            quote: "Tiểu cảnh và hòn non bộ được bố trí rất hợp phong thủy, mang lại cảm giác bình yên cho ngôi nhà. Cảm ơn sự tư vấn tận tình của đội ngũ.",
            author: "Cô Mai",
            location: "Nhà riêng, Quận 9",
            avatar: PlaceHolderImages.find(p => p.id === 'testimonial-5')
        },
        {
            quote: "Chất lượng công trình rất tốt, bền đẹp theo thời gian. Đây là điều tôi đánh giá cao nhất ở Cảnh Quan Kiến Trúc Xanh.",
            author: "Anh Long",
            location: "Khu đô thị, Bình Dương",
            avatar: PlaceHolderImages.find(p => p.id === 'testimonial-6')
        }
    ]

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                 <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Khách Hàng Nói Về Chúng Tôi</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Sự hài lòng và những lời nhận xét chân thành của khách hàng là niềm tự hào và động lực lớn nhất của chúng tôi.
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="border-none shadow-lg bg-white transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col">
                                    <CardContent className="p-8 flex flex-col h-full">
                                        <div className="flex text-yellow-400 mb-4">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current"/>)}
                                        </div>
                                        <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                                        <div className="flex items-center gap-4 border-t pt-6">
                                            {testimonial.avatar && (
                                                <Image 
                                                    src={testimonial.avatar.imageUrl} 
                                                    alt={`Avatar ${testimonial.author}`} 
                                                    width={56} 
                                                    height={56} 
                                                    className="rounded-full object-cover" 
                                                    data-ai-hint={testimonial.avatar.imageHint}
                                                />
                                            )}
                                            <div>
                                                <p className="font-bold text-primary">{testimonial.author}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
