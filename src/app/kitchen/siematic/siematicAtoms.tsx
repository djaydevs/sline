"use client";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  chronicleDisplay,
  chronicleDisplaySemibold,
  helveticaNeue,
  helveticaNeueMedium,
} from "../../../../public/fonts/fonts";

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
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-center text-2xl font-semibold leading-none tracking-tight">
        SieMatic
      </h1>
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
              className={cn("underline", chronicleDisplaySemibold.className)}
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
              <>
                <button
                  title="copy to clipboard"
                  onClick={() => {toast.success("Copied to clipboard")
                  navigator.clipboard.writeText(item.color)}}
                  style={{backgroundColor: `${item.color}`}}
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
                </button>
              </>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* <Card>
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle>Fonts</CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <div className="flex flex-col gap-2">
            <h1>Atom</h1>
            <h2>Atom</h2>
            <h3>Atom</h3>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}
