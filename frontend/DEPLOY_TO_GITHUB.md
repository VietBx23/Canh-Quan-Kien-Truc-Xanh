# Hướng Dẫn Đẩy Dự Án Lên GitHub (Chi Tiết Từng Lệnh)

Đây là các bước để bạn tải mã nguồn từ dự án này lên kho chứa GitHub của mình. Vui lòng thực hiện các lệnh này trên **Terminal (dòng lệnh) của máy tính cá nhân của bạn**, không phải trong giao diện trò chuyện này.

---

### **Điều kiện cần có:**
1.  **Git đã được cài đặt** trên máy tính của bạn.
2.  Bạn đã **tải toàn bộ mã nguồn** của dự án này về máy tính của mình.
3.  Bạn đã tạo một **kho chứa (repository) trống** trên GitHub.

---

### **Các Bước Thực Hiện**

**Bước 1: Mở Terminal trên máy tính của bạn**

*   **Windows:** Mở `Command Prompt`, `PowerShell`, hoặc `Git Bash`.
*   **macOS/Linux:** Mở ứng dụng `Terminal`.

**Bước 2: Di chuyển đến thư mục dự án**

Sử dụng lệnh `cd` để đi vào thư mục chứa mã nguồn bạn vừa tải về.

```bash
# Ví dụ:
cd /path/to/your/project/Canh-Quan-Kien-Truc-Xanh
```

**Bước 3: Khởi tạo Git**

Lệnh này tạo một kho chứa Git cục bộ trong thư mục dự án của bạn để bắt đầu theo dõi các thay đổi.

```bash
git init
```

**Bước 4: Thêm tất cả các file vào để Git theo dõi**

Lệnh này thêm tất cả các file hiện có vào "khu vực chờ" (staging area), chuẩn bị cho việc ghi lại một phiên bản.

```bash
git add .
```

**Bước 5: Tạo một bản ghi (commit) đầu tiên**

Lệnh này lưu lại trạng thái hiện tại của các file bạn đã thêm vào một "bản ghi" với một thông điệp mô tả.

```bash
git commit -m "Initial commit from Firebase Studio"
```

**Bước 6: Kết nối với kho chứa trên GitHub**

Lệnh này "chỉ đường" cho kho chứa cục bộ của bạn biết địa chỉ kho chứa từ xa (remote) trên GitHub. URL kho chứa của bạn đã được điền sẵn.

```bash
git remote add origin https://github.com/VietBx23/Canh-Quan-Kien-Truc-Xanh.git
```

**Bước 7: Đẩy (Push) mã nguồn**

Lệnh này sẽ tải toàn bộ mã nguồn và lịch sử các bản ghi (commit) từ máy bạn lên kho chứa trên GitHub.

```bash
# Đẩy lên nhánh 'main' (thường là mặc định cho các kho chứa mới)
git push -u origin main

# Nếu lệnh trên không hoạt động, có thể nhánh chính của bạn tên là 'master'. Hãy thử lệnh này:
# git push -u origin master
```

---

Sau khi hoàn thành, bạn hãy tải lại trang GitHub của mình và sẽ thấy toàn bộ mã nguồn dự án đã có ở đó. Chúc bạn thành công!