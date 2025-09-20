
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Leaf, Fish, Sprout, CheckCircle, Wind, Droplets, Sun, Sparkles, Truck, Home, ShoppingCart, Trees, ArrowRight, DollarSign, ListChecks, Eye, ShieldCheck, Star } from "lucide-react";

const servicePlaceholders = {
    'service-garden': PlaceHolderImages.find(p => p.id === 'service-garden')!,
    'service-koi': PlaceHolderImages.find(p => p.id === 'service-koi')!,
    'service-maintenance': PlaceHolderImages.find(p => p.id === 'service-maintenance')!,
    'service-renovation': PlaceHolderImages.find(p => p.id === 'service-renovation')!,
    'service-rooftop': PlaceHolderImages.find(p => p.id === 'service-rooftop')!,
    'service-vertical-garden': PlaceHolderImages.find(p => p.id === 'service-vertical-garden')!,
    'service-irrigation': PlaceHolderImages.find(p => p.id === 'service-irrigation')!,
    'service-lighting': PlaceHolderImages.find(p => p.id === 'service-lighting')!,
    'service-playground': PlaceHolderImages.find(p => p.id === 'service-playground')!,
    'service-cafe': PlaceHolderImages.find(p => p.id === 'service-cafe')!,
    'service-maintenance-pro': PlaceHolderImages.find(p => p.id === 'service-maintenance-pro')!,
    'service-farm': PlaceHolderImages.find(p => p.id === 'service-farm')!,
    'service-bonsai': PlaceHolderImages.find(p => p.id === 'service-bonsai')!,
};


export const services = [
    {
        slug: "thiet-ke-san-vuon",
        title: "Thiết kế & Thi công Sân vườn",
        description: "Chúng tôi cung cấp dịch vụ trọn gói từ khâu lên ý tưởng, thiết kế 3D đến thi công hoàn thiện sân vườn cho biệt thự, nhà phố, khu đô thị, resort. Mỗi thiết kế đều là độc bản, kết hợp giữa yếu tố thẩm mỹ, công năng và phong thủy.",
        icon: Leaf,
        image: servicePlaceholders['service-garden'],
        details: [
            "Sân vườn phong cách hiện đại, tối giản.",
            "Sân vườn phong cách Nhật Bản (Zen garden).",
            "Sân vườn phong cách nhiệt đới (Tropical garden).",
            "Vườn trên sân thượng, vườn tường đứng.",
        ],
        benefits: [
            { icon: Eye, title: "Tăng giá trị thẩm mỹ", description: "Một khu vườn được thiết kế chuyên nghiệp sẽ là điểm nhấn nâng tầm đẳng cấp cho ngôi nhà của bạn." },
            { icon: ShieldCheck, title: "Nâng cao sức khỏe", description: "Không gian xanh giúp thanh lọc không khí, giảm stress và khuyến khích các hoạt động ngoài trời." },
            { icon: Star, title: "Dấu ấn cá nhân", description: "Thiết kế độc bản, phản ánh phong cách và cá tính riêng của gia chủ, không bị trùng lặp." },
        ],
        process: [
             { title: "Khảo sát & Tư vấn", description: "Lắng nghe ý tưởng, khảo sát hiện trạng và tư vấn các giải pháp phù hợp nhất." },
            { title: "Thiết kế 3D", description: "Kiến trúc sư của chúng tôi sẽ hiện thực hóa ý tưởng bằng bản vẽ 3D trực quan, sinh động." },
            { title: "Báo giá chi tiết", description: "Cung cấp bảng báo giá rõ ràng cho từng hạng mục thi công và vật tư." },
            { title: "Thi công & Giám sát", description: "Đội ngũ kỹ sư và nghệ nhân tiến hành thi công dưới sự giám sát chặt chẽ." },
            { title: "Nghiệm thu & Bàn giao", description: "Bàn giao công trình hoàn thiện và hướng dẫn khách hàng chăm sóc." },
        ],
        pricing: [
            { item: "Gói thiết kế cơ bản (Bản vẽ 2D, 3D)", price: "Từ 150.000đ/m²" },
            { item: "Gói thi công phần thô", price: "Liên hệ báo giá" },
            { item: "Gói thi công trọn gói (Thiết kế + Thi công)", price: "Từ 1.200.000đ/m²" },
        ]
    },
    {
        slug: "ho-ca-koi",
        title: "Hồ Cá Koi Chuyên Nghiệp",
        description: "Sở hữu một hồ cá Koi không chỉ làm đẹp cảnh quan mà còn mang lại may mắn, tài lộc. Chúng tôi chuyên thi công hồ cá Koi đạt chuẩn với hệ thống lọc vi sinh tiên tiến, đảm bảo nước luôn trong và cá luôn khỏe.",
        icon: Fish,
        image: servicePlaceholders['service-koi'],
         details: [
            "Tư vấn chọn giống cá Koi Nhật Bản.",
            "Thiết kế hồ cá Koi hợp phong thủy.",
            "Xây dựng hệ thống lọc chuẩn, dễ vận hành.",
            "Dịch vụ bảo dưỡng, chăm sóc hồ định kỳ.",
        ],
         benefits: [
            { icon: Fish, title: "Hệ lọc chuẩn quốc tế", description: "Đảm bảo nước luôn trong vắt, không mùi tanh, cá khỏe mạnh, hạn chế tối đa rêu tảo." },
            { icon: Wind, title: "Yếu tố phong thủy", description: "Tư vấn vị trí, hướng và hình dáng hồ để mang lại may mắn, vượng khí cho gia đình." },
            { icon: ShieldCheck, title: "Bảo hành dài hạn", description: "Bảo hành chống thấm cho kết cấu hồ lên đến 10 năm, bảo hành hệ thống lọc 2 năm." },
        ],
        process: [
            { title: "Tư vấn phong thủy", description: "Xác định vị trí, hình dáng, kích thước hồ hợp với tuổi và mệnh của gia chủ." },
            { title: "Lên bản vẽ kỹ thuật", description: "Thiết kế chi tiết hệ thống lọc, hệ thống hút mặt, hút đáy, đường ống kỹ thuật." },
            { title: "Thi công phần thô", description: "Đào đất, đổ bê tông cốt thép, đi ống và chống thấm nhiều lớp." },
            { title: "Lắp đặt hệ lọc", description: "Sắp xếp vật liệu lọc, lắp đặt máy bơm, máy sục khí, đèn UV diệt khuẩn." },
            { title: "Xử lý nước & Thả cá", description: "Vận hành hệ thống, khử trùng, ổn định vi sinh và hướng dẫn thả cá an toàn." },
        ],
        pricing: [
            { item: "Hồ cá Koi (Bao gồm hệ lọc, chưa bao gồm đá trang trí)", price: "Từ 4.000.000đ/m³" },
            { item: "Đá trang trí thành hồ", price: "Từ 800.000đ/m tới" },
            { item: "Thác nước, suối tự nhiên", price: "Liên hệ báo giá" },
        ]
    },
    {
        slug: "da-phong-thuy",
        title: "Đá Phong Thủy & Tiểu Cảnh",
        description: "Mang năng lượng của đất trời vào không gian sống của bạn với các sản phẩm đá phong thủy tự nhiên, non bộ, thác nước. Chúng tôi giúp bạn lựa chọn và bài trí để tăng vượng khí, tạo điểm nhấn độc đáo cho cảnh quan.",
        icon: Wind,
        image: servicePlaceholders['service-maintenance'],
         details: [
            "Cung cấp các loại đá cảnh quan, đá phong thủy.",
            "Thiết kế và thi công tiểu cảnh, non bộ, thác nước.",
            "Lối đi bằng đá, tường đá trang trí.",
            "Tư vấn bài trí hợp mệnh gia chủ.",
        ],
         benefits: [
            { icon: Wind, title: "Cân bằng năng lượng", description: "Đá và nước giúp điều hòa âm dương, mang lại sự bình yên và thư thái." },
            { icon: DollarSign, title: "Thu hút tài lộc", description: "Bài trí đúng cách giúp kích hoạt cung tài lộc, mang lại may mắn trong kinh doanh." },
            { icon: Eye, title: "Điểm nhấn nghệ thuật", description: "Tiểu cảnh, non bộ, thác nước là những tác phẩm điêu khắc tự nhiên độc đáo." },
        ],
        process: [
            { title: "Tư vấn mệnh và hướng", description: "Phân tích tuổi, mệnh của gia chủ để chọn loại đá và hướng đặt phù hợp." },
            { title: "Lựa chọn đá tại vườn", description: "Khách hàng có thể trực tiếp lựa chọn những khối đá tự nhiên ưng ý tại vườn của chúng tôi." },
            { title: "Thiết kế phối cảnh", description: "Dựng mô hình 3D để khách hàng hình dung rõ nhất về tiểu cảnh trong không gian thực tế." },
            { title: "Vận chuyển & Lắp đặt", description: "Sử dụng xe cẩu chuyên dụng để vận chuyển và đặt đá vào đúng vị trí an toàn, chính xác." },
        ],
        pricing: [
            { item: "Tiểu cảnh khô, vườn Zen", price: "Từ 2.000.000đ/m²" },
            { item: "Tiểu cảnh nước, thác nước tường", price: "Từ 3.500.000đ/m²" },
            { item: "Hòn non bộ (Tùy kích thước và độ phức tạp)", price: "Liên hệ báo giá" },
        ]
    },
    {
        slug: "cai-tao-nang-cap",
        title: "Cải Tạo & Nâng Cấp Cảnh Quan",
        description: "Làm mới không gian sân vườn cũ, thay đổi phong cách, hoặc khắc phục các vấn đề tồn tại. Chúng tôi giúp 'thay áo mới' cho khu vườn của bạn, mang lại sức sống và vẻ đẹp đương đại.",
        icon: Sparkles,
        image: servicePlaceholders['service-renovation'],
        details: [
            "Khảo sát hiện trạng và tư vấn giải pháp cải tạo.",
            "Bổ sung, thay thế cây trồng không còn phù hợp.",
            "Nâng cấp hệ thống chiếu sáng, tưới tiêu.",
            "Thiết kế lại bố cục tổng thể cho sân vườn.",
        ],
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "vuon-san-thuong",
        title: "Vườn Trên Sân Thượng",
        description: "Biến không gian sân thượng tưởng chừng bỏ đi thành một khu vườn xanh mát, một nơi thư giãn lý tưởng hoặc một nông trại mini ngay tại nhà. Giải pháp chống thấm và chọn cây chuyên nghiệp.",
        icon: Home,
        image: servicePlaceholders['service-rooftop'],
        details: [
            "Thiết kế vườn rau sạch, vườn cây ăn trái.",
            "Thiết kế vườn hoa, không gian tiệc BBQ ngoài trời.",
            "Giải pháp kết cấu, chống thấm và thoát nước hiệu quả.",
            "Lựa chọn cây trồng phù hợp với điều kiện nắng, gió.",
        ],
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "tuong-cay-xanh",
        title: "Tường Cây Xanh Nghệ Thuật",
        description: "Giải pháp tối ưu cho không gian nhỏ hoặc tạo điểm nhấn ấn tượng cho các mảng tường lớn. Chúng tôi thi công tường cây thật với hệ thống tưới nhỏ giọt tự động, dễ dàng chăm sóc.",
        icon: Trees,
        image: servicePlaceholders['service-vertical-garden'],
        details: [
            "Tường cây cho nội thất (phòng khách, giếng trời).",
            "Tường cây cho ngoại thất (mặt tiền, hàng rào).",
            "Đa dạng các loại cây và kiểu dáng thiết kế.",
            "Hệ thống khung module và tưới thông minh.",
        ],
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "he-thong-tuoi-tu-dong",
        title: "Hệ Thống Tưới Tự Động",
        description: "Giải pháp chăm sóc sân vườn thông minh, tiết kiệm thời gian và nước. Chúng tôi lắp đặt hệ thống tưới tự động từ các thương hiệu uy tín, có thể điều khiển qua điện thoại.",
        icon: Droplets,
        image: servicePlaceholders['service-irrigation'],
        details: [
            "Hệ thống tưới nhỏ giọt cho gốc cây.",
            "Hệ thống tưới phun sương cho thảm cỏ, cây bụi.",
            "Hẹn giờ tưới tự động, cảm biến mưa thông minh.",
            "Tích hợp điều khiển từ xa qua smartphone.",
        ],
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "chieu-sang-canh-quan",
        title: "Chiếu Sáng Cảnh Quan",
        description: "Thắp sáng khu vườn của bạn về đêm, tạo nên một không gian lung linh, huyền ảo và an toàn. Chúng tôi tư vấn và lắp đặt hệ thống đèn chiếu sáng chuyên dụng cho sân vườn.",
        icon: Sun,
        image: servicePlaceholders['service-lighting'],
        details: [
            "Chiếu sáng lối đi, tiểu cảnh, thác nước.",
            "Chiếu hắt cây lớn, bụi cây tạo hiệu ứng.",
            "Sử dụng đèn LED tiết kiệm điện, bền bỉ.",
            "Tạo các kịch bản chiếu sáng khác nhau.",
        ],
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "san-choi-tre-em",
        title: "Sân Chơi Trẻ Em Trong Vườn",
        description: "Kết hợp khu vui chơi an toàn và sáng tạo cho trẻ em ngay trong không gian sân vườn của gia đình. Vật liệu thân thiện, thiết kế kích thích sự vận động và khám phá của trẻ.",
        icon: Sparkles,
        image: servicePlaceholders['service-playground'],
        details: [
            "Thiết kế khu vui chơi với cầu trượt, xích đu, nhà gỗ.",
            "Sử dụng vật liệu tự nhiên, an toàn cho trẻ.",
            "Khu vực sàn cát, sàn cao su giảm chấn.",
            "Tích hợp các trò chơi vận động và sáng tạo.",
        ],
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "canh-quan-quan-cafe",
        title: "Cảnh Quan Quán Cafe, Nhà Hàng",
        description: "Thiết kế và thi công không gian xanh độc đáo, tạo lợi thế cạnh tranh và thu hút khách hàng cho các mô hình kinh doanh F&B. Tối ưu hóa không gian và trải nghiệm của khách hàng.",
        icon: ShoppingCart,
        image: servicePlaceholders['service-cafe'],
        details: [
            "Thiết kế theo chủ đề, phong cách của quán.",
            "Tạo các góc 'check-in' độc đáo, thu hút.",
            "Bố trí cây xanh hợp lý, không cản trở lối đi.",
            "Tư vấn chọn cây dễ chăm sóc, phù hợp môi trường kinh doanh.",
        ],
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "bao-tri-canh-quan",
        title: "Bảo Trì, Chăm Sóc Cảnh Quan",
        description: "Để khu vườn và hồ cá của bạn luôn ở trạng thái tốt nhất. Chúng tôi cung cấp các gói dịch vụ bảo trì, chăm sóc định kỳ hoặc theo yêu cầu, thực hiện bởi đội ngũ nghệ nhân chuyên nghiệp.",
        icon: Sprout,
        image: servicePlaceholders['service-maintenance-pro'],
        details: [
            "Cắt tỉa cây cối, bón phân, phòng trừ sâu bệnh.",
            "Vệ sinh hồ cá, kiểm tra hệ thống lọc, chất lượng nước.",
            "Chăm sóc và thay thế cây theo mùa vụ.",
            "Các gói dịch vụ linh hoạt theo tuần, tháng, quý.",
        ],
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "vuon-rau-tai-gia",
        title: "Vườn Rau Tại Gia",
        description: "Mang nguồn thực phẩm sạch, an toàn đến cho gia đình bạn với mô hình vườn rau hữu cơ tại nhà. Chúng tôi cung cấp giải pháp trọn gói từ giàn trồng, đất, hạt giống đến hướng dẫn chăm sóc.",
        icon: Leaf,
        image: servicePlaceholders['service-farm'],
        details: [
            "Module trồng rau thông minh cho ban công, sân thượng.",
            "Cung cấp đất hữu cơ và các loại hạt giống phổ biến.",
            "Hệ thống tưới bán tự động.",
            "Hướng dẫn kỹ thuật trồng và chăm sóc rau hữu cơ.",
        ],
        benefits: [],
        process: [],
        pricing: []
    },
    {
        slug: "cung-cap-cay-canh",
        title: "Cung Cấp Cây Cảnh & Bonsai",
        description: "Chúng tôi sở hữu vườn ươm đa dạng với nhiều loại cây cảnh, cây công trình, bonsai nghệ thuật. Cung cấp và vận chuyển cây tận nơi, kèm theo dịch vụ trồng và tư vấn chăm sóc.",
        icon: Truck,
        image: servicePlaceholders['service-bonsai'],
        details:
        [
            "Các loại cây bóng mát, cây ăn quả cho biệt thự.",
            "Cây nội thất, cây văn phòng hợp phong thủy.",
            "Bonsai và cây thế nghệ thuật, giá trị cao.",
            "Dịch vụ cho thuê cây sự kiện, văn phòng.",
        ],
        benefits: [],
        process: [],
        pricing: []
    }
];
