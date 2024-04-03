import React from "react";

import { Typeface } from "../_components/typeface";
import { Colors } from "../_components/colors";
import { ParagraphCard } from "../_components/paragraph";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function SieMaticAtomicCards() {
  return (
    <div className="my-auto h-full w-full flex flex-col gap-5 justify-center overflow-hidden">
      <h1 className="text-center text-2xl font-semibold leading-none tracking-tight">
        SieMatic Atom Components
      </h1>
      <ScrollArea className="h-[68dvh] overflow-hidden border-b-[1px]">
        <div className="flex flex-col gap-5">
          <Typeface />
          <Colors />
          <ParagraphCard />
        </div>
      </ScrollArea>
    </div>
  );
}
