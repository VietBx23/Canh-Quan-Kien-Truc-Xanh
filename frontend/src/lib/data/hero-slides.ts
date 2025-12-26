
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const heroSlides = [
    {
      id: 'hero-1',
      title: "Kiến Tạo Không Gian Sống Đẳng Cấp",
      description: "Chuyên nghiệp trong từng thiết kế, tận tâm trong từng công trình sân vườn, hồ cá Koi.",
      buttonText: "Nhận Báo Giá Miễn Phí",
      buttonLink: '/lien-he',
      image: PlaceHolderImages.find(p => p.id === 'hero-slide-1')!
    },
    {
      id: 'hero-2',
      title: "Hồ Cá Koi - Đỉnh Cao Nghệ Thuật Sân Vườn",
      description: "Mang lại vượng khí và vẻ đẹp độc đáo cho không gian sống của bạn với hồ Koi đạt chuẩn quốc tế.",
      buttonText: "Khám Phá Dịch Vụ",
      buttonLink: '/dich-vu',
      image: PlaceHolderImages.find(p => p.id === 'hero-slide-2')!
    },
    {
      id: 'hero-3',
      title: "Biến Sân Vườn Thành Tác Phẩm Nghệ Thuật",
      description: "Mỗi công trình là một câu chuyện, một dấu ấn riêng biệt, kết hợp hài hòa giữa thiên nhiên và phong cách của gia chủ.",
      buttonText: "Xem Dự Án Tiêu Biểu",
      buttonLink: '/du-an',
      image: PlaceHolderImages.find(p => p.id === 'hero-slide-3')!
    }
];
