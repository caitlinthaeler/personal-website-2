"use client"
import { useState } from "react"
import { Card, CardContent } from "./card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useProjectThumbnails from "@/hooks/useProjectThumbnails"
import AutoScroll from "embla-carousel-auto-scroll"
import Link from "next/link"
//import Autoplay from "embla-carousel-autoplay"


export default function ConveyerCarousel() {
    const { thumbnails} = useProjectThumbnails()
    const [isPlaying, setIsPlaying] = useState(true)


  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="horizontal"
      className="w-full"
      plugins={[
        AutoScroll({
            stopOnInteraction: false,  // ✅ don't permanently stop
            stopOnFocusIn: false,      // ✅ keep running when focus changes
            stopOnMouseEnter: true,   // ✅ keep running even if hovered
            active: true,
            startDelay: 200,
            speed: 1
        })
      ]}
    >
      <CarouselContent className="-mt-1">
        {thumbnails.map((thumbnail, index) => (
          <CarouselItem key={index} className="py-0 pt-1 mx-5 md:basis-[400px] sm:basis-[300px] basis-[200px] h-full w-full">
            <div className="">
                <Link href={thumbnail.linkUrl ? thumbnail.linkUrl : "#"}>
                    <Card className="h-full p-0 border-none shadow-none">
                    <CardContent className="flex flex-col h-full items-center justify-center p-0">
                        <img src={thumbnail.imageUrl} alt="" className="md:h-60 sm:h-45 h-30 object-cover"/>
                        <span className="md:text-3xl sm:text-2xl text-xl font-semibold">{thumbnail.title}</span>
                    </CardContent>
                </Card>
                </Link>
             
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
