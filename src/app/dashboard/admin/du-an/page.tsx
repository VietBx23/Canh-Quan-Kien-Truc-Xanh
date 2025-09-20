
"use client";

import Image from "next/image"
import { useState } from "react"
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
import { projects as allProjects, Project } from "@/lib/data/projects"
import { EditProjectForm } from "@/components/app/admin/EditProjectForm"


type Category = 'Sân Vườn' | 'Hồ Koi' | 'Tiểu Cảnh';

export default function DuAnAdminPage() {
  const [projects, setProjects] = useState<Project[]>(allProjects);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(['Sân Vườn', 'Hồ Koi', 'Tiểu Cảnh']);

  const handleCategoryFilterChange = (category: Category) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newSelectedCategories);

    if (newSelectedCategories.length === 0 || newSelectedCategories.length === 3) {
      setProjects(allProjects);
    } else {
      const filtered = allProjects.filter(p => newSelectedCategories.includes(p.category));
      setProjects(filtered);
    }
  };
  
  // Placeholder function for handling updates
  const handleUpdateProject = (updatedProject: Project) => {
    console.log("Updating project (simulation):", updatedProject);
    // In a real app with a database, you would update the state here.
    // For now, we just log it as we cannot write to the .ts file.
    const newProjects = projects.map(p => p.id === updatedProject.id ? updatedProject : p);
    setProjects(newProjects);
  };

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
                  <DropdownMenuLabel>Lọc theo hạng mục</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes('Sân Vườn')}
                    onCheckedChange={() => handleCategoryFilterChange('Sân Vườn')}
                  >
                    Sân Vườn
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes('Hồ Koi')}
                    onCheckedChange={() => handleCategoryFilterChange('Hồ Koi')}
                  >
                    Hồ Koi
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes('Tiểu Cảnh')}
                    onCheckedChange={() => handleCategoryFilterChange('Tiểu Cảnh')}
                  >
                    Tiểu Cảnh
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
                        Địa điểm
                      </TableHead>
                      <TableHead>
                        <span className="sr-only">Hành động</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map(project => (
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
                          {project.title}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Đã đăng</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {project.category}
                        </TableCell>
                         <TableCell className="hidden md:table-cell">
                          {project.location}
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
                               <EditProjectForm project={project} onSave={handleUpdateProject} />
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
                  Hiển thị <strong>{projects.length}</strong> trên <strong>{allProjects.length}</strong>{" "}
                  dự án
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
    </>
  )
}
