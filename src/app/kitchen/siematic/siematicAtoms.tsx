"use client";
import React, { useRef } from "react";
import { toast } from "sonner";
import { Clipboard } from "lucide-react";
import paragraphSource from "!!raw-loader!../../../components/atomic-components/Paragraph.tsx";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  chronicleDisplay,
  chronicleDisplaySemibold,
  helveticaNeue,
  helveticaNeueMedium,
} from "../../../../public/fonts/fonts";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paragraph } from "../../../components/atomic-components/paragraph";
import { Button } from "@/components/ui/button";

const colors = [
  {
    name: "primary",
    color: "#111827",
    isDark: true,
  },
  {
    name: "secondary",
    color: "#F2F2F2",
    isDark: false,
  },
  {
    name: "black",
    color: "#000000",
    isDark: true,
  },
  {
    name: "white",
    color: "#FFFFFF",
    isDark: false,
  },
  {
    name: "grey",
    color: "#3D4245",
    isDark: true,
  },
];

export default function SieMaticAtoms() {
  const code = useRef<HTMLPreElement>(null);

  const copyToClipboard = () => {
    if (code.current) {
      navigator.clipboard
        .writeText(code.current.textContent ?? "")
        .then(() => toast.success("Code copied to clipboard"))
        .catch((err) => console.error("Could not copy text: ", err));
    }
  };

  return (
    <div className="my-auto h-full w-full flex flex-col gap-5 justify-center overflow-hidden">
      <h1 className="text-center text-2xl font-semibold leading-none tracking-tight">
        SieMatic Atom Components
      </h1>
      <ScrollArea className="h-[68dvh] overflow-hidden border-b-[1px]">
        <div className="flex flex-col gap-5">
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Typefaces</CardTitle>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <div className="flex flex-row gap-5">
                <a
                  href="/fonts/HelveticaNeue.otf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("underline", helveticaNeue.className)}
                >
                  Helvetica Neue
                </a>
                <a
                  href="/fonts/HelveticaNeueMedium.otf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("underline", helveticaNeueMedium.className)}
                >
                  Helvetica Neue Medium
                </a>
                <a
                  href="/fonts/chronicleDisplay.otf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("underline", chronicleDisplay.className)}
                >
                  Chronicle Display
                </a>
                <a
                  href="/fonts/chronicleDisplaySemibold.otf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "underline",
                    chronicleDisplaySemibold.className
                  )}
                >
                  Chronicle Display Semibold
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Colors</CardTitle>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <div className="flex h-[80px] flex-row rounded-lg w-[100%]">
                {colors.map((item) => (
                  <TooltipProvider delayDuration={50} key={item.name}>
                    <Tooltip>
                      <TooltipTrigger
                        onClick={() => {
                          toast.success("Copied to clipboard");
                          navigator.clipboard.writeText(item.color);
                        }}
                        style={{ backgroundColor: `${item.color}` }}
                        className="grow hover:grow-[2] transition-ease-linear duration-300 [&>*]:hidden [&:hover>*]:flex"
                      >
                        <div className="flex flex-col items-center justify-center h-full">
                          <p
                            className={cn("text-black", {
                              "text-white": item.isDark,
                            })}
                          >
                            {item.color}
                          </p>
                          <p
                            className={cn("text-black", {
                              "text-white": item.isDark,
                            })}
                          >
                            {item.name}
                          </p>
                        </div>
                        <TooltipContent>
                          <p>Click to copy</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Paragraph</CardTitle>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Tabs defaultValue="preview" className="max-w-full">
                <div className="w-full flex justify-between">
                  <TabsList className="grid h-full w-full grid-cols-2 md:w-[200px]">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>
                  <Button onClick={copyToClipboard} variant="ghost" size="icon">
                    <Clipboard className="h-4 w-4" />
                  </Button>
                </div>
                <TabsContent value="preview">
                  <Paragraph>
                    The quick brown fox jumps over the lazy dog
                  </Paragraph>
                  <Paragraph bold>
                    The quick brown fox jumps over the lazy dog
                  </Paragraph>
                </TabsContent>
                <TabsContent value="code">
                  <ScrollArea className="w-full h-[50dvh] bg-slate-800 rounded-lg">
                    <pre
                      ref={code}
                      className="max-w-full text-[12px] text-neutral-300 p-7"
                    >
                      <code>{paragraphSource.toString()}</code>
                    </pre>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
