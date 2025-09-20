import { PlaceHolderImages, ImagePlaceholder } from "@/lib/placeholder-images";

export type Project = {
    id: string;
    title: string;
    category: 'Sân Vườn' | 'Hồ Koi' | 'Tiểu Cảnh';
    style: string;
    location: string;
    cost: string;
    date: string;
    imageUrl: string;
    imageHint: string;
}

function mapPlaceholderToProject(p: ImagePlaceholder, index: number): Project {
    const hint = p.imageHint;
    const title = hint.replace(/-/g, ' ');
    let category: 'Sân Vườn' | 'Hồ Koi' | 'Tiểu Cảnh';
    
    if (hint.includes('koi')) {
        category = 'Hồ Koi';
    } else if (hint.includes('garden') || hint.includes('villa') || hint.includes('patio') || hint.includes('resort') || hint.includes('balcony') || hint.includes('terrace') || hint.includes('entrance') || hint.includes('bbq')) {
        category = 'Sân Vườn';
    } else {
        category = 'Tiểu Cảnh';
    }

    const locations = ["Quận 2, TP.HCM", "Thảo Điền, TP.HCM", "Bình Chánh, TP.HCM", "Gò Vấp, TP.HCM", "Bình Dương", "Vũng Tàu", "Quận 9, TP.HCM", "Quận 7, TP.HCM", "Thủ Đức, TP.HCM"];
    const costs = ["~ 150 triệu", "~ 250 triệu", "~ 80 triệu", "~ 500 triệu", "~ 1 tỷ", "~ 50 triệu"];
    const styles = ["Hiện đại", "Nhiệt đới", "Zen Nhật Bản", "Tối giản", "Cổ điển"];

    return {
        id: p.id,
        title: title,
        category: category,
        imageUrl: p.imageUrl,
        imageHint: p.imageHint,
        date: `2024`,
        location: locations[index % locations.length],
        cost: costs[index % costs.length],
        style: styles[index % styles.length]
    };
}

// Keep this export for other parts of the app that might still use it temporarily
export const projects: Project[] = PlaceHolderImages
    .filter(p => p.id.startsWith('gallery-'))
    .map(mapPlaceholderToProject);
