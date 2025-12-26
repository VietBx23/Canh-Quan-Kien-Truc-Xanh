
"use client"
import Image from "next/image"
import { MoreHorizontal, PlusCircle, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { testimonials } from "@/lib/data/testimonials"

export default function CustomersAdminPage() {
  return (
    <>
       <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Quản lý Khách Hàng</h1>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Thêm Đánh Giá
                </span>
              </Button>
            </div>
        </div>
        <Card>
            <CardHeader>
            <CardTitle>Đánh giá của Khách hàng</CardTitle>
            <CardDescription>
                Quản lý các phản hồi và đánh giá từ khách hàng.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Avatar</span>
                    </TableHead>
                    <TableHead>Tên khách hàng</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="hidden md:table-cell">
                    Địa điểm
                    </TableHead>
                     <TableHead className="hidden md:table-cell">
                    Đánh giá
                    </TableHead>
                    <TableHead>
                    <span className="sr-only">Hành động</span>
                    </TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {testimonials.map(item => (
                     <TableRow key={item.id}>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                                alt={item.author}
                                className="aspect-square rounded-full object-cover"
                                height="48"
                                src={item.image.imageUrl}
                                width="48"
                                data-ai-hint={item.image.imageHint}
                            />
                        </TableCell>
                        <TableCell className="font-medium">
                            {item.author}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Hiển thị</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {item.location}
                        </TableCell>
                         <TableCell className="hidden md:table-cell">
                           <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current"/>)}
                            </div>
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
                               <DropdownMenuItem>Tạm ẩn</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">Xóa</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                ))}
                </TableBody>
            </Table>
            </CardContent>
      </Card>
    </>
  )
}
