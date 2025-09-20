
import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function AdminDashboard() {
  return (
    <>
      <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Tổng quan</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng Doanh Thu
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231,890đ</div>
            <p className="text-xs text-muted-foreground">
              +20.1% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Khách hàng mới
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+235</div>
            <p className="text-xs text-muted-foreground">
              +180.1% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dự án mới</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">
              +19% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Liên hệ mới
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+57</div>
            <p className="text-xs text-muted-foreground">
              +20 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Khách hàng tiềm năng</CardTitle>
              <CardDescription>
                Danh sách khách hàng gần đây đã liên hệ.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="#">
                Xem tất cả
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Khách hàng</TableHead>
                  <TableHead className="hidden xl:table-column">
                    Dịch vụ quan tâm
                  </TableHead>
                  <TableHead className="hidden xl:table-column">
                    Trạng thái
                  </TableHead>
                  <TableHead className="hidden md:table-cell lg:hidden xl:table-column">
                    Ngày liên hệ
                  </TableHead>
                  <TableHead className="text-right">Số điện thoại</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Anh Trần Văn A</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      tran.a@email.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    Hồ cá Koi
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                      Chờ tư vấn
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2024-07-25
                  </TableCell>
                  <TableCell className="text-right">090xxxx123</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Chị Nguyễn Thị B</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      nguyen.b@email.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    Thiết kế sân vườn
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="secondary">
                      Đã báo giá
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2024-07-24
                  </TableCell>
                  <TableCell className="text-right">091xxxx456</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Anh Lê Văn C</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      le.c@email.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    Bảo trì cảnh quan
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs" variant="outline">
                      Chờ tư vấn
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2024-07-23
                  </TableCell>
                  <TableCell className="text-right">098xxxx789</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dự án gần đây</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/images/gallery-1.jpg" alt="Avatar" />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Biệt thự Quận 2
                </p>
                <p className="text-sm text-muted-foreground">
                  Hoàn thành
                </p>
              </div>
              <div className="ml-auto font-medium">+150,000,000đ</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/images/gallery-2.jpg" alt="Avatar" />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Cafe Sân Vườn Gò Vấp
                </p>
                <p className="text-sm text-muted-foreground">
                  Đang thi công
                </p>
              </div>
              <div className="ml-auto font-medium">+250,000,000đ</div>
            </div>
              <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/images/gallery-3.jpg" alt="Avatar" />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Hồ Koi Bình Chánh
                </p>
                <p className="text-sm text-muted-foreground">
                  Hoàn thành
                </p>
              </div>
              <div className="ml-auto font-medium">+80,000,000đ</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
