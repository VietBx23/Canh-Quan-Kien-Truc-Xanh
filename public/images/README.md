# Thư mục chứa hình ảnh

Đây là nơi để bạn lưu trữ các hình ảnh tĩnh cho trang web.

## Cách sử dụng

1.  Đặt các file ảnh của bạn (ví dụ: `my-image.jpg`, `logo.png`) vào thư mục này.
2.  Trong code (ví dụ: trong component `Image` của Next.js hoặc trong file JSON), bạn có thể tham chiếu đến chúng bằng đường dẫn bắt đầu từ dấu gạch chéo `/`.

Ví dụ:

- Nếu bạn có ảnh tại `public/images/hero-1.jpg`, bạn sẽ tham chiếu trong code là `/images/hero-1.jpg`.

```jsx
import Image from 'next/image';

function MyComponent() {
  return (
    <Image
      src="/images/hero-1.jpg"
      alt="Mô tả ảnh"
      width={1920}
      height={1080}
    />
  );
}
```

- Trong file `src/lib/placeholder-images.json`, bạn cũng sẽ sử dụng đường dẫn tương tự:

```json
{
  "id": "hero-slide-1",
  "imageUrl": "/images/hero-slide-1.jpg",
  "imageHint": "modern villa garden"
}
```
