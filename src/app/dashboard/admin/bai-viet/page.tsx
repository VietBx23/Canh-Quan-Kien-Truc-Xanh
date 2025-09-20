
"use client"
import Image from "next/image"
import { MoreHorizontal, PlusCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { posts } from "@/lib/data/posts"

export default function PostsAdminPage() {
  return (
    <>
       <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Quản lý Bài Viết</h1>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Thêm Bài Viết
                </span>
              </Button>
            </div>
        </div>
        <Card>
            <CardHeader>
            <CardTitle>Tin tức & Blog</CardTitle>
            <CardDescription>
                Quản lý các bài viết trên trang tin tức.
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
                    Tác giả
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                    Ngày đăng
                    </TableHead>
                    <TableHead>
                    <span className="sr-only">Hành động</span>
                    </TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {posts.map(post => (
                     <TableRow key={post.id}>
                        <TableCell className="hidden sm:table-cell">
                          {post.image && <Image
                                alt={post.title}
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src={post.image.imageUrl}
                                width="64"
                                data-ai-hint={post.image.imageHint}
                            />}
                        </TableCell>
                        <TableCell className="font-medium">
                            {post.title}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Đã đăng</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {post.author}
                        </TableCell>
                         <TableCell className="hidden md:table-cell">
                          {post.date}
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
