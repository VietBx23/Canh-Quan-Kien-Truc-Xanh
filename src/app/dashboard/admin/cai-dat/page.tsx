
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsAdminPage() {
  return (
     <>
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Cài Đặt</h1>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Thông Tin Chung</CardTitle>
                <CardDescription>
                    Quản lý các thông tin liên hệ và mạng xã hội của website.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input id="phone" defaultValue="0933 741 779" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="lienhe@kientrucxanh.com" />
                    </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="address">Địa chỉ</Label>
                    <Input id="address" defaultValue="69/52 Đường số 3, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="zalo">Link Zalo</Label>
                    <Input id="zalo" defaultValue="https://zalo.me/0933741779" />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="facebook">Facebook URL</Label>
                        <Input id="facebook" defaultValue="#" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="youtube">Youtube URL</Label>
                        <Input id="youtube" defaultValue="#" />
                    </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="map">Mã nhúng Google Map</Label>
                    <Textarea
                        id="map"
                        defaultValue={'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1345437887323!2d106.60636827588327!3d10.800938458739126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be3d891487b%3A0x9334a601569c760!2zNjkvNTIgxJDGsOG7nW5nIFPhu5EgMywgQsOsbmggSMawbmcgSMOyYSwgQsOsbmggVMOibiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1721894982635!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'}
                        className="min-h-32"
                    />
                </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
                <Button>Lưu thay đổi</Button>
            </CardFooter>
        </Card>
     </>
  )
}
