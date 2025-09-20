import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Fish, Sprout, CheckCircle, Wind, Droplets, Sun, Sparkles, Truck, Home, ShoppingCart, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
    
    const services = [
        {
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
        {
            title: "Hệ Thống Tưới Tự Động",
            description: "Giải pháp chăm sóc sân vườn thông minh, tiết kiệm thời gian và nước. Chúng tôi lắp đặt hệ thống tưới tự động từ các thương hiệu uy tín, có thể điều khiển qua điện thoại.",
            icon: Droplets,
            image: PlaceHolderImages.find(p => p.id === 'service-irrigation'),
            details: [
                "Hệ thống tưới nhỏ giọt cho gốc cây.",
                "Hệ thống tưới phun sương cho thảm cỏ, cây bụi.",
                "Hẹn giờ tưới tự động, cảm biến mưa thông minh.",
                "Tích hợp điều khiển từ xa qua smartphone.",
            ]
        },
        {
            title: "Chiếu Sáng Cảnh Quan",
            description: "Thắp sáng khu vườn của bạn về đêm, tạo nên một không gian lung linh, huyền ảo và an toàn. Chúng tôi tư vấn và lắp đặt hệ thống đèn chiếu sáng chuyên dụng cho sân vườn.",
            icon: Sun,
            image: PlaceHolderImages.find(p => p.id === 'service-lighting'),
            details: [
                "Chiếu sáng lối đi, tiểu cảnh, thác nước.",
                "Chiếu hắt cây lớn, bụi cây tạo hiệu ứng.",
                "Sử dụng đèn LED tiết kiệm điện, bền bỉ.",
                "Tạo các kịch bản chiếu sáng khác nhau.",
            ]
        },
        {
            title: "Sân Chơi Trẻ Em Trong Vườn",
            description: "Kết hợp khu vui chơi an toàn và sáng tạo cho trẻ em ngay trong không gian sân vườn của gia đình. Vật liệu thân thiện, thiết kế kích thích sự vận động và khám phá của trẻ.",
            icon: Sparkles,
            image: PlaceHolderImages.find(p => p.id === 'service-playground'),
            details: [
                "Thiết kế khu vui chơi với cầu trượt, xích đu, nhà gỗ.",
                "Sử dụng vật liệu tự nhiên, an toàn cho trẻ.",
                "Khu vực sàn cát, sàn cao su giảm chấn.",
                "Tích hợp các trò chơi vận động và sáng tạo.",
            ]
        },
        {
            title: "Cảnh Quan Quán Cafe, Nhà Hàng",
            description: "Thiết kế và thi công không gian xanh độc đáo, tạo lợi thế cạnh tranh và thu hút khách hàng cho các mô hình kinh doanh F&B. Tối ưu hóa không gian và trải nghiệm của khách hàng.",
            icon: ShoppingCart,
            image: PlaceHolderImages.find(p => p.id === 'service-cafe'),
            details: [
                "Thiết kế theo chủ đề, phong cách của quán.",
                "Tạo các góc 'check-in' độc đáo, thu hút.",
                "Bố trí cây xanh hợp lý, không cản trở lối đi.",
                "Tư vấn chọn cây dễ chăm sóc, phù hợp môi trường kinh doanh.",
            ]
        },
        {
            title: "Bảo Trì, Chăm Sóc Cảnh Quan",
            description: "Để khu vườn và hồ cá của bạn luôn ở trạng thái tốt nhất. Chúng tôi cung cấp các gói dịch vụ bảo trì, chăm sóc định kỳ hoặc theo yêu cầu, thực hiện bởi đội ngũ nghệ nhân chuyên nghiệp.",
            icon: Sprout,
            image: PlaceHolderImages.find(p => p.id === 'service-maintenance-pro'),
            details: [
                "Cắt tỉa cây cối, bón phân, phòng trừ sâu bệnh.",
                "Vệ sinh hồ cá, kiểm tra hệ thống lọc, chất lượng nước.",
                "Chăm sóc và thay thế cây theo mùa vụ.",
                "Các gói dịch vụ linh hoạt theo tuần, tháng, quý.",
            ]
        },
        {
            title: "Vườn Rau Tại Gia",
            description: "Mang nguồn thực phẩm sạch, an toàn đến cho gia đình bạn với mô hình vườn rau hữu cơ tại nhà. Chúng tôi cung cấp giải pháp trọn gói từ giàn trồng, đất, hạt giống đến hướng dẫn chăm sóc.",
            icon: Leaf,
            image: PlaceHolderImages.find(p => p.id === 'service-farm'),
            details: [
                "Module trồng rau thông minh cho ban công, sân thượng.",
                "Cung cấp đất hữu cơ và các loại hạt giống phổ biến.",
                "Hệ thống tưới bán tự động.",
                "Hướng dẫn kỹ thuật trồng và chăm sóc rau hữu cơ.",
            ]
        },
        {
            title: "Cung Cấp Cây Cảnh & Bonsai",
            description: "Chúng tôi sở hữu vườn ươm đa dạng với nhiều loại cây cảnh, cây công trình, bonsai nghệ thuật. Cung cấp và vận chuyển cây tận nơi, kèm theo dịch vụ trồng và tư vấn chăm sóc.",
            icon: Truck,
            image: PlaceHolderImages.find(p => p.id === 'service-bonsai'),
            details:
            [
                "Các loại cây bóng mát, cây ăn quả cho biệt thự.",
                "Cây nội thất, cây văn phòng hợp phong thủy.",
                "Bonsai và cây thế nghệ thuật, giá trị cao.",
                "Dịch vụ cho thuê cây sự kiện, văn phòng.",
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
