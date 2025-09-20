
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const testimonialData = [
    { id: "testimonial-1", quote: "Đội ngũ làm việc rất chuyên nghiệp và có tâm. Khu vườn nhà tôi giờ đây thật sự là một nơi thư giãn tuyệt vời sau những giờ làm việc căng thẳng. Cảm ơn Kiến Trúc Xanh!", author: "Anh Hoàng Minh", location: "Chủ biệt thự, Quận 2" },
    { id: "testimonial-2", quote: "Hồ cá Koi đã trở thành điểm nhấn thu hút khách cho quán của tôi. Dịch vụ và chất lượng thi công vượt xa mong đợi. Chắc chắn sẽ tiếp tục hợp tác trong các dự án tương lai.", author: "Chị Lan Anh", location: "Chủ quán cafe sân vườn" },
    { id: "testimonial-3", quote: "Thiết kế sáng tạo, độc đáo và rất tinh tế. Mọi người đến nhà đều trầm trồ khen ngợi khu vườn trên sân thượng. Tôi rất hài lòng với không gian xanh mà các bạn tạo ra.", author: "Anh Tuấn", location: "Nhà phố, Gò Vấp" },
    { id: "testimonial-4", quote: "Rất hài lòng với dịch vụ bảo dưỡng định kỳ. Hồ cá lúc nào cũng trong veo, cây cối xanh tốt. Đội ngũ hỗ trợ rất nhiệt tình và chuyên nghiệp.", author: "Chú Hùng", location: "Biệt thự, Thảo Điền" },
    { id: "testimonial-5", quote: "Tiểu cảnh và hòn non bộ được bố trí rất hợp phong thủy, mang lại cảm giác bình yên cho ngôi nhà. Cảm ơn sự tư vấn tận tình của đội ngũ.", author: "Cô Mai", location: "Nhà riêng, Quận 9" },
    { id: "testimonial-6", quote: "Chất lượng công trình rất tốt, bền đẹp theo thời gian. Đây là điều tôi đánh giá cao nhất ở Cảnh Quan Kiến Trúc Xanh.", author: "Anh Long", location: "Khu đô thị, Bình Dương" },
    { id: "testimonial-7", quote: "Tôi đã sử dụng dịch vụ thiết kế sân vườn và hoàn toàn bị chinh phục bởi sự sáng tạo và chuyên nghiệp. Không gian ngoài trời của tôi giờ đây thật tuyệt vời.", author: "Chị Hà", location: "Penthouse, Quận 7" },
    { id: "testimonial-8", quote: "Hồ cá Koi của gia đình tôi được thi công rất nhanh và đẹp. Hệ thống lọc hoạt động hiệu quả, nước luôn trong vắt. Rất đáng tiền!", author: "Anh Phong", location: "Biệt thự, Bình Chánh" },
    { id: "testimonial-9", quote: "Cảm ơn team đã biến ban công nhỏ của mình thành một khu vườn mini xinh xắn. Giờ đây mình có nơi để đọc sách và uống trà mỗi sáng.", author: "Bạn Minh Thư", location: "Chung cư, Quận 4" },
    { id: "testimonial-10", quote: "Dịch vụ cải tạo sân vườn rất tuyệt vời. Vườn cũ đã được lột xác hoàn toàn, hiện đại và hợp ý tôi hơn rất nhiều.", author: "Anh Phát", location: "Nhà phố, Tân Bình" },
    { id: "testimonial-11", quote: "Hệ thống tưới tự động rất tiện lợi. Tôi không còn phải lo lắng về việc tưới cây mỗi khi đi công tác xa nhà.", author: "Chị Oanh", location: "Biệt thự, Phú Mỹ Hưng" },
    { id: "testimonial-12", quote: "Ánh sáng sân vườn được thiết kế rất có chiều sâu, buổi tối khu vườn trở nên lung linh và lãng mạn. Rất ưng ý!", author: "Anh Quang", location: "Resort, Vũng Tàu" },
    { id: "testimonial-13", quote: "Đội ngũ đã tư vấn cho tôi một hồ cá Koi hợp phong thủy, từ đó công việc làm ăn của tôi thuận lợi hơn hẳn. Tin tưởng và sẽ giới thiệu cho bạn bè.", author: "Chú Ba", location: "Doanh nhân, Quận 1" },
    { id: "testimonial-14", quote: "Vườn rau trên sân thượng cung cấp đủ rau sạch cho cả gia đình. Một giải pháp tuyệt vời cho cuộc sống thành thị.", author: "Gia đình chị Thảo", location: "Nhà phố, Quận 3" },
    { id: "testimonial-15", quote: "Tường cây xanh ở giếng trời là điểm nhấn xuất sắc cho ngôi nhà ống của tôi. Nhà trở nên mát và thoáng đãng hơn rất nhiều.", author: "Anh Kiên", location: "Nhà trong hẻm, Quận 10" },
    { id: "testimonial-16", quote: "Tôi mua một cây bonsai dáng rất đẹp từ công ty. Cây khỏe và được hướng dẫn chăm sóc rất kỹ. Dịch vụ rất tốt.", author: "Anh Sơn", location: "Người chơi cây cảnh" },
    { id: "testimonial-17", quote: "Không gian quán cafe của tôi trở nên khác biệt và thu hút khách hơn hẳn nhờ mảng xanh được Kiến Trúc Xanh thiết kế.", author: "Chủ The Garden Cafe", location: "Quận Phú Nhuận" },
    { id: "testimonial-18", quote: "Quy trình làm việc chuyên nghiệp, báo giá rõ ràng, thi công đúng tiến độ. Rất an tâm khi giao phó công trình cho các bạn.", author: "Anh Dũng", location: "Xây dựng nhà mới, Thủ Đức" },
    { id: "testimonial-19", quote: "Các bạn nghệ nhân rất có tay nghề, từng hòn đá, gốc cây đều được sắp đặt tỉ mỉ. Tác phẩm đẹp hơn cả mong đợi của tôi.", author: "Cô Lan", location: "Biệt thự cổ, Quận 3" },
    { id: "testimonial-20", quote: "Tôi thực sự ấn tượng với chính sách bảo hành và bảo trì. Luôn có người hỗ trợ nhanh chóng khi tôi cần. Dịch vụ hậu mãi số 1.", author: "Chú Nam", location: "Khách hàng thân thiết" },
    { id: "testimonial-21", quote: "Hồ cá Koi mini ở sân sau nhà tôi thật tuyệt vời. Nước trong vắt, cá bơi lội tung tăng. Bọn trẻ nhà tôi rất thích.", author: "Chị Mai", location: "Nhà phố, Quận 7" },
    { id: "testimonial-22", quote: "Thác nước chảy róc rách mang lại âm thanh thiên nhiên rất thư giãn. Cảm ơn đội ngũ đã tạo ra một không gian thiền định ngay tại nhà.", author: "Anh Tâm", location: "Biệt thự, Quận 9" },
    { id: "testimonial-23", quote: "Lối đi sân vườn được lát đá rất nghệ thuật, kết hợp với cây cỏ hai bên tạo nên một khung cảnh rất nên thơ.", author: "Gia đình anh chị Hà", location: "Khu dân cư, Bình Tân" },
    { id: "testimonial-24", quote: "Từ một sân thượng trống trải, giờ tôi đã có một 'sky bar' tại gia với cây xanh và ánh đèn lung linh để tiếp bạn bè.", author: "Bạn trẻ Alex", location: "Penthouse, Quận 2" },
    { id: "testimonial-25", quote: "Rất nhiều người hỏi tôi đơn vị nào thi công sân vườn đẹp vậy. Chắc chắn tôi sẽ giới thiệu Kiến Trúc Xanh.", author: "Anh Thịnh", location: "Chủ homestay, Đà Lạt" },
    { id: "testimonial-26", quote: "Sự kết hợp giữa hồ bơi và vườn nhiệt đới tạo cảm giác như đang ở resort 5 sao. Vượt xa sự mong đợi của gia đình tôi.", author: "Gia đình chị Vy", location: "Biệt thự có hồ bơi, Thảo Điền" },
    { id: "testimonial-27", quote: "Con tôi rất thích khu vui chơi trong vườn. Thiết kế an toàn và sáng tạo. Cảm ơn các bạn rất nhiều.", author: "Bà mẹ bỉm sữa", location: "Gia đình có con nhỏ, Quận 12" },
    { id: "testimonial-28", quote: "Dịch vụ cho thuê cây cho sự kiện rất chuyên nghiệp. Cây đẹp, giao nhận đúng giờ, giúp không gian sự kiện của tôi sang trọng hơn hẳn.", author: "Chị Linh", location: "Event Manager" }
];


export default async function TestimonialsPage() {
    const testimonialImages = PlaceHolderImages.filter(p => p.id.startsWith('testimonial-'));
    
    const testimonials = testimonialImages.map(image => {
        const data = testimonialData.find(t => t.id === image.id);
        return {
            ...image,
            quote: data?.quote || "Nội dung đang được cập nhật.",
            author: data?.author || "Khách hàng",
            location: data?.location || "Việt Nam"
        };
    });

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                 <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center animate-fade-in-up">
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
                                <div key={testimonial.id} className="animate-fade-in-up" style={{animationDelay: `${(index % 3) * 200}ms`}}>
                                    <Card className="border-none shadow-lg bg-white transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col h-full">
                                        <CardContent className="p-8 flex flex-col h-full">
                                            <div className="flex text-yellow-400 mb-4">
                                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current"/>)}
                                            </div>
                                            <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                                            <div className="flex items-center gap-4 border-t pt-6">
                                                <Image 
                                                    src={testimonial.imageUrl} 
                                                    alt={`Avatar ${testimonial.author}`} 
                                                    width={56} 
                                                    height={56} 
                                                    className="rounded-full object-cover" 
                                                    data-ai-hint={testimonial.imageHint}
                                                />
                                                <div>
                                                    <p className="font-bold text-primary">{testimonial.author}</p>
                                                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                 <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center animate-fade-in-up">
                         <h2 className="text-2xl font-bold text-primary">Bạn đã sẵn sàng để trở thành khách hàng tiếp theo?</h2>
                        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Hãy để chúng tôi mang đến cho bạn một không gian sống xanh và đẳng cấp.</p>
                        <Button size="lg" asChild className="mt-6">
                            <Link href="/lien-he">Liên Hệ Tư Vấn Ngay</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

