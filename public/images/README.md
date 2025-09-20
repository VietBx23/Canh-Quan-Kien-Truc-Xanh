# Thư Mục Hình Ảnh

Đây là nơi để lưu trữ tất cả các hình ảnh tĩnh cho trang web của bạn (ví dụ: `.jpg`, `.png`, `.svg`).

## Cách sử dụng

1.  **Thêm ảnh vào đây:** Kéo hoặc sao chép các file ảnh của bạn vào thư mục `public/images` này.
2.  **Sử dụng trong code:**
    *   Để sử dụng một ảnh trong code (ví dụ: trong component `Image` của Next.js hoặc trong CSS), bạn chỉ cần tham chiếu đến nó với đường dẫn bắt đầu từ dấu gạch chéo `/`.

    *   **Ví dụ:** Nếu bạn có một ảnh tên là `san-vuon-biet-thu.jpg` trong này, bạn sẽ sử dụng nó trong code như sau:
        ```jsx
        <Image src="/images/san-vuon-biet-thu.jpg" ... />
        ```
    *   **Lưu ý:** Bạn không cần thêm `public/` vào đường dẫn. Hệ thống sẽ tự động hiểu.

Sau đó, bạn có thể cập nhật file `src/lib/placeholder-images.json` để trỏ đến các ảnh mới này.