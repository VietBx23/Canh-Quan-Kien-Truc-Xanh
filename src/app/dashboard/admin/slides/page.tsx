
"use client"
import Image from "next/image"
import { MoreHorizontal, PlusCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { heroSlides } from "@/lib/data/hero-slides"

export default function SlidesAdminPage() {
  return (
    <>
       <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Quản lý Slide Banner</h1>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Thêm Slide
                </span>
              </Button>
            </div>
        </div>
        <Card>
            <CardHeader>
            <CardTitle>Slide Banner Trang Chủ</CardTitle>
            <CardDescription>
                Quản lý các slide hiển thị trên banner chính của trang chủ.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Ảnh</span>
                    </TableHead>
                    <TableHead>Tiêu đề</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="hidden md:table-cell">
                    Mô tả
                    </TableHead>
                    <TableHead>
                    <span className="sr-only">Hành động</span>
                    </TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {heroSlides.map(slide => (
                     <TableRow key={slide.id}>
                        <TableCell className="hidden sm:table-cell">
                          {slide.image && <Image
                                alt={slide.title}
                                className="aspect-video rounded-md object-cover"
                                height="54"
                                src={slide.image.imageUrl}
                                width="96"
                                data-ai-hint={slide.image.imageHint}
                            />}
                        </TableCell>
                        <TableCell className="font-medium">
                            {slide.title}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Đã đăng</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell max-w-sm truncate">
                          {slide.description}
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
