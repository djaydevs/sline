"use client";

import React, { useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import type { CarouselApi } from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Images = {
  title: string;
  src: string | undefined;
  mobileSrc: string | undefined;
  caption?: string;
};

type CarouselImageBannerProps = {
  images: Images[];
  className?: string;
  carouselItemClassName?: string;
};

export const CarouselImageBanner: React.FC<CarouselImageBannerProps> = ({
  images,
  className,
  carouselItemClassName,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className={cn("w-full", className)}>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        setApi={setApi}
        onMouseEnter={() => {
          setIsHovered(true);
          plugin.current.stop();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          plugin.current.reset();
        }}
      >
        <CarouselContent>
          {images.map((item) => (
            <CarouselItem
              className={cn(
                "relative flex h-[350px] w-full items-center justify-center md:h-[550px]",
                carouselItemClassName
              )}
              key={item.title}
            >
              <Image
                fill
                priority
                alt={item.title}
                className="overflow-hidden object-cover lg:hidden"
                src={item.mobileSrc ?? ""}
              />
              <Image
                fill
                priority
                alt={item.title}
                className="hidden overflow-hidden object-cover lg:block"
                src={item.src ?? ""}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {isHovered && (
          <div className="hidden md:block">
            <CarouselPrevious
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 scale-75 transform transition duration-500 ease-in-out md:scale-90 lg:scale-100",
                {
                  "opacity-100": isHovered,
                  "opacity-0": !isHovered,
                }
              )}
            />
            <CarouselNext
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 scale-75 transform transition duration-500 ease-in-out md:scale-90 lg:scale-100",
                {
                  "opacity-100": isHovered,
                  "opacity-0": !isHovered,
                }
              )}
            />
          </div>
        )}
        <div className="absolute bottom-0 left-1/2 my-6 flex -translate-x-1/2 transform justify-center space-x-2 lg:my-12">
          {Array.from({ length: count }, (_placeholder, numberOfSlides) => (
            <div
              className={cn("h-[10px] w-[10px] rounded-full", {
                "bg-white": current === numberOfSlides + 1,
                "bg-neutral-300": current !== numberOfSlides + 1,
              })}
              key={numberOfSlides}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};
