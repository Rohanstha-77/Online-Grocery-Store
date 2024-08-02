import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import Image from "next/image"

  
function Banner() {
  return (
    <>
    <div className="container px-16">
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <div className="banner1 p-10">
                        <div className="grid grid-cols-2 items-center">
                            <div className="row-span-1 ">
                                <Badge variant="outline" className="text-sm border-gray-700">Saleup to 20% OFF {""}</Badge>
                                <h1 className="text-5xl font-bold py-6"> Get Fresh Organic Food Everyday</h1>
                                <p>Making grocery Food Errands Worth Your While</p>
                                <Button className="bg-green-700 mt-5">Buy Product</Button>
                            </div>
                            <div className="row-span-1">
                                <Image src="/assets/Banner1.png" width={1000} height={600}/>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="banner2 p-10 h-full">
                            <div className="grid grid-cols-2 items-center">
                                <div className="row-span-1 ">
                                    <Badge variant="outline" className="text-sm border-gray-700">Saleup to 20% OFF {""}</Badge>
                                    <h1 className="text-5xl font-bold py-6"> Get Fresh Organic Food Everyday</h1>
                                    <p>Making grocery Food Errands Worth Your While</p>
                                    <Button className="bg-green-700 mt-5">Buy Product</Button>
                                </div>
                                <div className="row-span-1">
                                    <Image src="/assets/Banner2.png" width={1000} height={600}/>
                                </div>
                            </div>
                        </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="banner3 p-10 h-full">
                        <div className="grid grid-cols-2 items-center">
                            <div className="row-span-1 ">
                                <Badge variant="outline" className="text-sm border-gray-700">Saleup to 20% OFF {""}</Badge>
                                <h1 className="text-5xl font-bold py-6"> Get Fresh Organic Food Everyday</h1>
                                <p>Making grocery Food Errands Worth Your While</p>
                                <Button className="bg-green-700 mt-5">Buy Product</Button>
                            </div>
                            <div className="row-span-1">
                                <Image src="/assets/Banner3.png" width={1000} height={600}/>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
    </>
  )
}

export default Banner