"use client";

import React from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Colors = ({}) => {
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

  return (
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
  );
};
