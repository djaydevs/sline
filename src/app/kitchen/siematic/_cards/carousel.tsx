"use client";

import React, { useRef } from "react";
import { Clipboard, CodeXml } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paragraph } from "@/components/atomic-components/paragraph";
import { copyToClipboard } from "@/lib/utils";

export const CarouselCard = ({}) => {
  const code = useRef<HTMLPreElement>(null);

  return (
    <Card>
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Carousel Autoplay with Indicator</CardTitle>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Tabs defaultValue="preview" className="max-w-full">
          <div className="w-full flex justify-between">
            <TabsList className="grid h-full w-full grid-cols-2 md:w-[200px]">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="example">Example</TabsTrigger>
            </TabsList>
            <TabsList className="grid h-full w-full grid-cols-1 md:w-[150px]">
              <TabsTrigger value="source-code">
                <CodeXml className="mr-1 h-5 w-5" />
                Source Code
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview">
            <div className="h-[50dvh] flex flex-col items-center justify-center shadow-lg rounded-xl">
              <CarouselAutoplayIndicatorExample />
            </div>
          </TabsContent>
          <TabsContent value="example">
            <ScrollArea className="relative w-full h-full rounded-lg">
              <div className="absolute top-0 right-0 p-2">
                <Button
                  onClick={() => copyToClipboard(code)}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-blue-500"
                >
                  <Clipboard className="h-5 w-5" />
                </Button>
              </div>
              <pre ref={code} className="max-w-full text-[13px]">
                <SyntaxHighlighter
                  language="tsx"
                  style={atomOneDark}
                  customStyle={{ padding: "0px 20px" }}
                >
                  {codeExample}
                </SyntaxHighlighter>
              </pre>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="source-code">
            <ScrollArea className="w-full h-[50dvh] rounded-lg">
              <div className="relative">
                <div className="sticky top-0 w-full">
                  <div className="absolute top-0 right-0 p-2">
                    <Button
                      onClick={() => copyToClipboard(code)}
                      variant="ghost"
                      size="icon"
                      className="text-white hover:text-blue-500"
                    >
                      <Clipboard className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <pre ref={code} className="max-w-full text-[13px]">
                  <SyntaxHighlighter
                    language="tsx"
                    style={atomOneDark}
                    customStyle={{ padding: "0px 20px" }}
                  >
                    {codeSource}
                  </SyntaxHighlighter>
                </pre>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export const CarouselAutoplayIndicatorExample = () => {
  return (
    <>
      {/* Normal Font Weight */}
      <Paragraph>The quick brown fox jumps over the lazy dog</Paragraph>
      {/* Bold Font Weight */}
      <Paragraph bold>The quick brown fox jumps over the lazy dog</Paragraph>
    </>
  );
};

const codeExample = `
import { Paragraph } from "@/components/atoms/paragraph";

export const ParagraphExample = () => {
  return (
    <>
      {/* Normal Font Weight */}
      <Paragraph>The quick brown fox jumps over the lazy dog</Paragraph>
      {/* Bold Font Weight */}
      <Paragraph bold>The quick brown fox jumps over the lazy dog</Paragraph>
    </>
  );
};
`;

const codeSource = `
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
`;
