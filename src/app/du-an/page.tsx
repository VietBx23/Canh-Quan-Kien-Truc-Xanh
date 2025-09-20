
import { Header } from "@/components/app/Header";
import { Footer } from "@/components/app/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function ProjectsPage() {
    const allProjects = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));
    const gardenProjects = allProjects.filter(p => p.imageHint.includes('garden') || p.imageHint.includes('villa'));
    const koiProjects = allProjects.filter(p => p.imageHint.includes('koi') || p.imageHint.includes('pond'));
    const otherProjects = allProjects.filter(p => !p.imageHint.includes('garden') && !p.imageHint.includes('villa') && !p.imageHint.includes('pond'));

    const renderProjectList = (projects: typeof allProjects) => {
      if (projects.length === 0) {
        return <p className="text-center text-muted-foreground col-span-full">Chưa có dự án nào trong mục này.</p>
      }
      return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((image, index) => (
                  <Card key={index} className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-0">
                          <div className="overflow-hidden aspect-[4/3]">
                              <Image 
                                  src={image.imageUrl} 
                                  alt={`Dự án ${image.id}`} 
                                  width={600}
                                  height={450}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                  data-ai-hint={image.imageHint} 
                              />
                          </div>
                          <div className="p-4 bg-white">
                              <p className="text-xs text-accent font-semibold uppercase">{image.imageHint.includes('koi') ? 'Hồ Koi' : image.imageHint.includes('garden') ? 'Sân vườn' : 'Tiểu Cảnh'}</p>
                              <h3 className="font-bold text-lg text-primary capitalize mt-1">{image.imageHint.replace(/-/g, ' ')}</h3>
                              <p className="text-sm text-muted-foreground mt-1">Hoàn thành: 2023</p>
                          </div>
                      </CardContent>
                  </Card>
              ))}
          </div>
      )
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-background font-body">
            <Header />
            <main className="flex-1">
                 <section className="py-20 md:py-28 bg-muted">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Dự Án Đã Thực Hiện</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Mỗi công trình là một tác phẩm nghệ thuật, kết tinh từ tâm huyết, sự sáng tạo và quy trình làm việc chuyên nghiệp của chúng tôi.
                        </p>
                    </div>
                </section>
                
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4">
                        <Tabs defaultValue="all" className="w-full">
                            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
                                <TabsTrigger value="all">Tất Cả</TabsTrigger>
                                <TabsTrigger value="garden">Sân Vườn</TabsTrigger>
                                <TabsTrigger value="koi">Hồ Koi</TabsTrigger>
                                <TabsTrigger value="other">Tiểu Cảnh</TabsTrigger>
                            </TabsList>
                            <TabsContent value="all">
                                {renderProjectList(allProjects)}
                            </TabsContent>
                            <TabsContent value="garden">
                                {renderProjectList(gardenProjects)}
                            </TabsContent>
                             <TabsContent value="koi">
                                {renderProjectList(koiProjects)}
                            </TabsContent>
                             <TabsContent value="other">
                                {renderProjectList(otherProjects)}
                            </TabsContent>
                        </Tabs>

                         <div className="text-center mt-20">
                            <h2 className="text-2xl font-bold text-primary">Bạn muốn có một không gian như thế này?</h2>
                            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Hãy để các chuyên gia của chúng tôi giúp bạn hiện thực hóa ước mơ.</p>
                            <Button size="lg" asChild className="mt-6">
                                <Link href="/lien-he">Bắt Đầu Dự Án Của Bạn</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

    