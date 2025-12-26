
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { seedProjects } from "@/lib/actions/seedActions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function SeedDataPage() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ success: boolean; message: string; count: number } | null>(null);

    const handleSeed = async () => {
        setLoading(true);
        setResult(null);
        const seedResult = await seedProjects();
        setResult(seedResult);
        setLoading(false);
    };

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-muted">
            <Card className="w-[450px]">
                <CardHeader>
                    <CardTitle>Di Trú Dữ Liệu</CardTitle>
                    <CardDescription>
                        Nhấn nút bên dưới để tự động thêm dữ liệu dự án mẫu vào cơ sở dữ liệu MongoDB của bạn.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <Button onClick={handleSeed} disabled={loading} size="lg">
                            {loading ? "Đang xử lý..." : "Bắt đầu di trú dữ liệu"}
                        </Button>
                        {result && (
                            <Alert variant={result.success ? "default" : "destructive"}>
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>{result.success ? "Thành Công!" : "Thất Bại!"}</AlertTitle>
                                <AlertDescription>
                                    {result.message}
                                </AlertDescription>
                            </Alert>
                        )}
                         <p className="text-xs text-muted-foreground mt-2">
                           Lưu ý: Quá trình này chỉ thêm các dự án chưa có trong database. Bạn có thể chạy lại nhiều lần một cách an toàn. Sau khi hoàn tất, bạn có thể xóa trang này.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
