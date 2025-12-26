# Thư mục chứa hình ảnh

Đây là nơi để bạn lưu trữ tất cả các hình ảnh tĩnh cho trang web (logo, ảnh dự án, ảnh bài viết, v.v.).

## Cách sử dụng

1.  **Thêm ảnh:** Kéo và thả hoặc sao chép các file ảnh của bạn vào thư mục `public/images` này.

2.  **Sử dụng trong code:**
    *   Để sử dụng một ảnh trong code (ví dụ, trong một component `Image` của Next.js), bạn chỉ cần trỏ đường dẫn `src` của nó bắt đầu từ dấu `/`.
    *   Ví dụ: Nếu bạn có file ảnh `public/images/ho-ca-koi-1.jpg`, bạn sẽ sử dụng nó như sau:
        ```jsx
        <Image src="/images/ho-ca-koi-1.jpg" alt="Hồ cá Koi" width={600} height={400} />
        ```

Next.js sẽ tự động phục vụ các file này từ thư mục `public`.
