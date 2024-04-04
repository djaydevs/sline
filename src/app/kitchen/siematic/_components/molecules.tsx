import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { CarouselCard } from "../_cards/carousel";

export default function SieMaticMoleculeCards() {
  return (
    <div className="my-auto h-full w-full flex flex-col gap-5 justify-center overflow-hidden">
      <h1 className="text-center text-2xl font-semibold leading-none tracking-tight">
        SieMatic Molecule Components
      </h1>
      <ScrollArea className="h-[60dvh] overflow-hidden border-b-[1px] md:h-[70dvh] lg:h-[78dvh]">
        <div className="flex flex-col gap-5">
          <CarouselCard />
        </div>
      </ScrollArea>
    </div>
  );
}
