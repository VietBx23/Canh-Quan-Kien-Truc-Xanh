
"use client"
import Image from "next/image"
import { MoreHorizontal, PlusCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { services } from "@/lib/data/services"

export default function ServicesAdminPage() {
  return (
    <>
       <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Quản lý Dịch vụ</h1>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Thêm Dịch vụ
                </span>
              </Button>
            </div>
        </div>
        <Card>
            <CardHeader>
            <CardTitle>Các Dịch Vụ</CardTitle>
            <CardDescription>
                Quản lý các dịch vụ mà công ty đang cung cấp.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Icon</span>
                    </TableHead>
                    <TableHead>Tên dịch vụ</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="hidden md:table-cell">
                    Mô tả ngắn
                    </TableHead>
                    <TableHead>
                    <span className="sr-only">Hành động</span>
                    </TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {services.map(service => (
                     <TableRow key={service.slug}>
                        <TableCell className="hidden sm:table-cell">
                           <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-md">
                             <service.icon className="h-6 w-6 text-primary"/>
                           </div>
                        </TableCell>
                        <TableCell className="font-medium">
                            {service.title}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Đã đăng</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell max-w-sm truncate">
                          {service.description}
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
