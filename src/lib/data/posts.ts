import { PlaceHolderImages } from "@/lib/placeholder-images";

export const posts = [
    {
        id: "1",
        title: "5 Mẹo Chăm Sóc Hồ Cá Koi Luôn Trong Vắt",
        excerpt: "Hồ cá Koi trong vắt không chỉ đẹp mà còn cho thấy một môi trường sống khỏe mạnh cho những chú cá cưng của bạn. Dưới đây là 5 mẹo đơn giản mà hiệu quả...",
        author: "Việt Bùi",
        date: "15 Tháng 7, 2024",
        image: PlaceHolderImages.find(p => p.id === 'gallery-2')!,
        category: "Chăm sóc hồ Koi"
    },
    {
        id: "2",
        title: "Xu Hướng Thiết Kế Sân Vườn Hiện Đại Năm 2024",
        excerpt: "Khám phá những xu hướng thiết kế sân vườn đang thịnh hành nhất năm nay, từ phong cách tối giản, bền vững đến việc tích hợp công nghệ thông minh vào không gian xanh của bạn.",
        author: "Lan Anh",
        date: "10 Tháng 7, 2024",
        image: PlaceHolderImages.find(p => p.id === 'gallery-1')!,
        category: "Xu hướng thiết kế"
    },
    {
        id: "3",
        title: "Bí Quyết Chọn Đá Phong Thủy Hợp Mệnh Gia Chủ",
        excerpt: "Đá phong thủy không chỉ là vật trang trí mà còn mang lại năng lượng tích cực. Bài viết này sẽ hướng dẫn bạn cách chọn và bài trí đá phong thủy để mang lại may mắn, tài lộc.",
        author: "Minh Hoàng",
        date: "05 Tháng 7, 2024",
        image: PlaceHolderImages.find(p => p.id === 'service-maintenance')!,
        category: "Kiến thức phong thủy"
    },
    {
        id: "4",
        title: "Ý Tưởng Sáng Tạo Cho Vườn Tường Đứng",
        excerpt: "Không gian sống của bạn có diện tích hạn chế? Vườn tường đứng chính là giải pháp hoàn hảo để mang mảng xanh vào nhà. Cùng xem qua những ý tưởng độc đáo nhé!",
        author: "Lan Anh",
        date: "01 Tháng 7, 2024",
        image: PlaceHolderImages.find(p => p.id === 'gallery-7')!,
        category: "Ý tưởng sáng tạo"
    }
];
