

import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { projects } from "@/lib/data/projects"
import { testimonials } from "@/lib/data/testimonials"


export default function AdminDashboard() {
  const recentProjects = projects.slice(0, 3);
  const recentCustomers = testimonials.slice(0, 5);

  return (
    <>
      <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Tổng quan</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng Doanh Thu (demo)
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
              Khách hàng
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{testimonials.length}</div>
            <p className="text-xs text-muted-foreground">
              Tổng số khách hàng
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dự án</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{projects.length}</div>
            <p className="text-xs text-muted-foreground">
              Tổng số dự án
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Liên hệ mới (demo)
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+57</div>
            <p className="text-xs text-muted-foreground">
              +20 trong tháng này
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Khách hàng gần đây</CardTitle>
              <CardDescription>
                Những khách hàng đã để lại đánh giá.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/admin/khach-hang">
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
                    Địa điểm
                  </TableHead>
                   <TableHead className="hidden md:table-cell lg:hidden xl:table-column">
                    Ngày đánh giá
                  </TableHead>
                  <TableHead className="text-right">Trích dẫn</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentCustomers.map(customer => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="font-medium">{customer.author}</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      {customer.location}
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2024-07-28
                    </TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground italic truncate max-w-xs">"{customer.quote}"</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dự án gần đây</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            {recentProjects.map(project => (
               <div key={project.id} className="flex items-center gap-4">
                <Avatar className="hidden h-11 w-11 sm:flex">
                  <AvatarImage src={project.imageUrl} alt={project.title} data-ai-hint={project.imageHint} />
                  <AvatarFallback>{project.title.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none capitalize">
                    {project.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>
                <div className="ml-auto font-medium text-sm text-muted-foreground">{project.cost}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
