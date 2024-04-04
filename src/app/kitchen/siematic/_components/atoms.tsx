import React from "react";

import { Typeface } from "../_cards/typeface";
import { Colors } from "../_cards/colors";
import { ParagraphCard } from "../_cards/paragraph";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function SieMaticAtomicCards() {
  return (
    <div className="my-auto h-full w-full flex flex-col gap-5 justify-center overflow-hidden">
      <h1 className="text-center text-2xl font-semibold leading-none tracking-tight">
        SieMatic Atom Components
      </h1>
      <ScrollArea className="h-[60dvh] overflow-hidden border-b-[1px] md:h-[70dvh] lg:h-[78dvh]">
        <div className="flex flex-col gap-5">
          <Typeface />
          <Colors />
          <ParagraphCard />
        </div>
      </ScrollArea>
    </div>
  );
}
