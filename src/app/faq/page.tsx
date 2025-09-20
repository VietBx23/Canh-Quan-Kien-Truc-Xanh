
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "i18n-config";

export default async function FAQPage({ params: { lang } }: { params: { lang: Locale }}) {
    const dictionary = await getDictionary(lang);
    const faqs = [
        {
            question: "Thời gian thi công một hồ cá Koi tiêu chuẩn mất bao lâu?",
            answer: "Thời gian thi công một hồ cá Koi phụ thuộc vào nhiều yếu tố như kích thước, độ phức tạp của thiết kế và điều kiện mặt bằng. Trung bình, một hồ cá kích thước gia đình (khoảng 10-20m³) sẽ mất từ 2 đến 4 tuần để hoàn thiện, bao gồm cả phần xây dựng, lắp đặt hệ thống lọc và xử lý nước ban đầu."
        },
        {
            question: "Chi phí thiết kế một sân vườn được tính như thế nào?",
            answer: "Chi phí thiết kế sân vườn thường được tính dựa trên diện tích (m²) và mức độ chi tiết của bản vẽ (2D, 3D, video). Chúng tôi cũng có các gói dịch vụ thiết kế trọn gói. Đặc biệt, chúng tôi sẽ miễn phí chi phí thiết kế 3D nếu quý khách ký hợp đồng thi công trọn gói."
        },
        {
            question: "Công ty có cung cấp dịch vụ bảo trì cảnh quan định kỳ không?",
            answer: "Có, chúng tôi cung cấp các gói bảo trì, bảo dưỡng định kỳ cho cả sân vườn và hồ cá Koi. Dịch vụ bao gồm cắt tỉa cây cối, bón phân, kiểm tra sâu bệnh, vệ sinh hồ, kiểm tra hệ thống lọc và chất lượng nước, đảm bảo không gian của bạn luôn xanh, sạch, đẹp."
        },
        {
            question: "Chế độ bảo hành của công ty như thế nào?",
            answer: "Chúng tôi cam kết bảo hành chất lượng công trình. Thời gian bảo hành cụ thể như sau:\n- Phần thô của hồ cá (chống thấm): Bảo hành 5 năm.\n- Hệ thống lọc, đường ống: Bảo hành 2 năm.\n- Cây xanh và các loại thực vật: Bảo hành 1 đổi 1 trong 30 ngày đầu tiên nếu có vấn đề do kỹ thuật trồng."
        },
         {
            question: "Tôi có thể xem các dự án thực tế đã hoàn thành ở đâu?",
            answer: "Quý khách có thể tham khảo các dự án tiêu biểu của chúng tôi tại trang 'Dự Án' trên website. Ngoài ra, chúng tôi có thể sắp xếp một buổi tham quan thực tế tại một số công trình đã được sự đồng ý của gia chủ để quý khách có cái nhìn chân thực nhất."
        },
        {
            question: "Kiến Trúc Xanh có nhận thi công ở các tỉnh thành khác ngoài TP.HCM không?",
            answer: "Có, chúng tôi nhận tư vấn, thiết kế và thi công cảnh quan trên toàn quốc. Đối với các dự án ở xa, chúng tôi sẽ có kế hoạch vận chuyển vật tư và bố trí đội ngũ thi công một cách chuyên nghiệp để đảm bảo tiến độ và chất lượng công trình."
        }
    ];


    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header lang={lang} dictionary={dictionary} />
            <main className="flex-1">
                <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Câu Hỏi Thường Gặp (FAQ)</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Những thắc mắc phổ biến nhất của khách hàng về dịch vụ của chúng tôi đã được giải đáp tại đây.
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                 <AccordionItem key={index} value={`item-${index}`} className="border-b-0 rounded-lg bg-muted/50 px-6 shadow-sm hover:shadow-md transition-shadow">
                                    <AccordionTrigger className="text-left font-bold text-lg text-primary hover:no-underline">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2 whitespace-pre-line">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                         <div className="mt-20 text-center bg-muted p-10 rounded-lg">
                            <h3 className="text-2xl font-bold text-primary">Bạn vẫn còn câu hỏi?</h3>
                            <p className="text-muted-foreground mt-2 mb-6 max-w-xl mx-auto">Đừng ngần ngại liên hệ trực tiếp với đội ngũ chuyên gia của chúng tôi để được tư vấn miễn phí và giải đáp mọi thắc mắc của bạn.</p>
                            <Button asChild size="lg">
                                <Link href={`/${lang}/lien-he`}>
                                    <Mail className="mr-2 h-5 w-5"/>
                                    Liên Hệ Với Chúng Tôi
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer lang={lang} dictionary={dictionary} />
        </div>
    );
}
