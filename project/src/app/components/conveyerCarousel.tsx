"use client"
import { useState } from "react"
import { Card, CardContent } from "./ui/card"
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
      <CarouselContent>
        {thumbnails.map((thumbnail, index) => (
          <CarouselItem key={index} className="py-0 pt-1 md:mx-2 sm:mx-1 mx-0 md:basis-[300px] sm:basis-250px] basis-[200px] h-full w-full hover:opacity-50">
            <div className="">
                <Link href={thumbnail.link ? thumbnail.link : "#"}>
                    <Card className="h-full p-0 border-none shadow-none bg-transparent">
                    <CardContent className="flex flex-col h-full items-center justify-center p-0">
                        <img src={thumbnail.image} alt="" className="md:h-40 sm:h-35 h-25 object-cover "/>
                        <span className="md:text-2xl sm:text-xl text-lg font-semibold text-center text-foreground">{thumbnail.title}</span>
                    </CardContent>
                </Card>
                </Link>
             
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      {/* <CarouselNext /> */}
    </Carousel>
  )
}
