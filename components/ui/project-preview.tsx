"use client"

import * as React from "react"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

type ProjectImage = {
  url: string
  description: string
}

type ProjectPreviewProps = {
  images: ProjectImage[]
}

export function ProjectPreview({ images }: ProjectPreviewProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const slides = images.map((image) => ({
    src: image.url,
    alt: image.description,
  }))

  return (
    <div className="w-full space-y-4">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => {

            return (
              <CarouselItem key={index} className="basis-auto">
                <div className="p-1 min-w-0 flex flex-col items-center"> {/* 改为垂直布局 */}
                    <Image
                      src={image.url}
                      alt={image.description}
                      height={450}
                      width={0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="h-[450px] w-auto max-w-full object-contain transition-all hover:scale-105 cursor-pointer"
                      onClick={() => {
                        setSelectedIndex(index)
                        setOpen(true)
                      }}
                    />
                  <p className="mt-2 text-sm text-center text-muted-foreground w-full"> {/* 添加宽度控制 */}
                    {image.description}
                  </p>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedIndex}
        slides={slides}
      />
    </div>
  )
}