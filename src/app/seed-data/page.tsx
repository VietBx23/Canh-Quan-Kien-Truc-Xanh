import { seedProjects } from '@/lib/firebase/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default async function SeedDataPage() {
  const result = await seedProjects();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-muted p-4">
      <Card className="w-full max-w-lg text-center shadow-2xl">
        <CardHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            {result.success ? (
              <CheckCircle className="h-8 w-8 text-green-500" />
            ) : (
              <AlertTriangle className="h-8 w-8 text-red-500" />
            )}
          </div>
          <CardTitle className="mt-4 text-2xl">
            {result.success ? 'Di Trú Dữ Liệu Hoàn Tất' : 'Có Lỗi Xảy Ra'}
          </CardTitle>
          <CardDescription>{result.message}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            {result.success ? (
              <p>
                Toàn bộ dữ liệu dự án đã được đẩy lên Firestore thành công. <br />
                Bây giờ bạn có thể xem chúng ở trang quản lý.
              </p>
            ) : (
              <p>
                Đã có lỗi xảy ra trong quá trình di trú dữ liệu. Vui lòng kiểm tra lại log server để biết thêm chi tiết.
              </p>
            )}
          </div>
           <Button asChild className="mt-6">
            <Link href="/dashboard/admin/du-an">Về Trang Quản Lý Dự Án</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
