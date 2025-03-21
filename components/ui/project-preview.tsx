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
  aspectRatio: string
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
            const [width, height] = image.aspectRatio.split(":")
            const aspectRatio = parseInt(width) / parseInt(height)

            return (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <AspectRatio ratio={aspectRatio} className="overflow-hidden rounded-lg ">
                    <Image
                      src={image.url}
                      alt={image.description}
                      fill
                      className="object-cover transition-all hover:scale-105 cursor-pointer"
                      onClick={() => {
                        setSelectedIndex(index)
                        setOpen(true)
                      }}
                    />
                  </AspectRatio>
                  <p className="mt-2 text-sm text-center text-muted-foreground">
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