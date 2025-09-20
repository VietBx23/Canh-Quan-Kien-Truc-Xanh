
import Image from "next/image"
import Link from "next/link"
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { PlaceHolderImages } from "@/lib/placeholder-images"


export default function DuAnAdminPage() {
  const allProjects = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));
  const getCategory = (imageHint: string) => {
    if(imageHint.includes('koi')) return 'Hồ Koi';
    if(imageHint.includes('garden') || imageHint.includes('villa') || imageHint.includes('patio')) return 'Sân Vườn';
    return 'Tiểu Cảnh';
  }

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Quản lý Dự án</h1>
      </div>
       <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="active">Đã đăng</TabsTrigger>
              <TabsTrigger value="draft">Bản nháp</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Đã xóa
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Lọc
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Lọc theo</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Sân Vườn
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Hồ Koi</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Tiểu Cảnh
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Xuất file
                </span>
              </Button>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Thêm dự án
                </span>
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>Dự án</CardTitle>
                <CardDescription>
                  Quản lý các dự án của bạn và xem hiệu suất của chúng.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Ảnh</span>
                      </TableHead>
                      <TableHead>Tên dự án</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Hạng mục
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Ngày tạo
                      </TableHead>
                      <TableHead>
                        <span className="sr-only">Hành động</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allProjects.map(project => (
                       <TableRow key={project.id}>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Ảnh dự án"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={project.imageUrl}
                            width="64"
                            data-ai-hint={project.imageHint}
                          />
                        </TableCell>
                        <TableCell className="font-medium capitalize">
                          {project.imageHint.replace(/-/g, ' ')}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Đã đăng</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {getCategory(project.imageHint)}
                        </TableCell>
                        
                        <TableCell className="hidden md:table-cell">
                          2024-07-25
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                              <DropdownMenuItem>Sửa</DropdownMenuItem>
                              <DropdownMenuItem>Sao chép</DropdownMenuItem>
                              <DropdownMenuSeparator/>
                              <DropdownMenuItem className="text-destructive">Xóa</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Hiển thị <strong>1-10</strong> trên <strong>{allProjects.length}</strong>{" "}
                  dự án
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
    </>
  )
}

