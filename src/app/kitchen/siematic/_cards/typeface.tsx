import React from "react";

import {
  chronicleDisplay,
  chronicleDisplaySemibold,
  helveticaNeue,
  helveticaNeueMedium,
} from "../../../../fonts/fonts";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Typeface = ({}) => {
  return (
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
  );
};
