
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Project } from "@/lib/data/projects"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

// Zod schema for form validation
const formSchema = z.object({
  id: z.string(),
  title: z.string().min(3, "Tên dự án phải có ít nhất 3 ký tự."),
  category: z.enum(["Sân Vườn", "Hồ Koi", "Tiểu Cảnh"]),
  location: z.string().min(2, "Địa điểm không được để trống."),
  cost: z.string(),
  style: z.string(),
  imageUrl: z.string().url("URL hình ảnh không hợp lệ."),
  imageHint: z.string(),
  date: z.string(),
})

type EditProjectFormProps = {
  project: Project
  onSave: (data: Project) => void
}

export function EditProjectForm({ project, onSave }: EditProjectFormProps) {
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: project,
  })

  // This function simulates saving data.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values submitted (simulation):", values)
    onSave(values)
    setIsOpen(false) // Close the dialog on save
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* The component that triggers the dialog is now an item in the dropdown menu */}
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Sửa
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa dự án</DialogTitle>
          <DialogDescription>
            Thay đổi thông tin dự án. Nhấn "Lưu thay đổi" để cập nhật (mô phỏng).
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Tên dự án</FormLabel>
                    <FormControl>
                        <Input placeholder="Sân vườn biệt thự Thảo Điền" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Hạng mục</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Chọn một hạng mục" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="Sân Vườn">Sân Vườn</SelectItem>
                        <SelectItem value="Hồ Koi">Hồ Koi</SelectItem>
                        <SelectItem value="Tiểu Cảnh">Tiểu Cảnh</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                 <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Địa điểm</FormLabel>
                    <FormControl>
                        <Input placeholder="Quận 2, TP.HCM" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="cost"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Chi phí</FormLabel>
                    <FormControl>
                        <Input placeholder="~ 250 triệu" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
             <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL Hình ảnh</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Lưu thay đổi</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
