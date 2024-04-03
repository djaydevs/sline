import React from "react";

import {
  helveticaNeue,
  helveticaNeueMedium,
} from "../../../public/fonts/fonts";

import { cn } from "@/lib/utils";

type ParagraphProps = {
  className?: string;
  bold?: boolean;
  children: React.ReactNode;
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  bold,
}) => {
  return (
    <p
      className={cn(
        "max-w-full text-justify text-[14px] sm:text-[15px] leading-7 text-black md:text-center lg:text-[16px]",
        helveticaNeue.className,
        bold && helveticaNeueMedium.className,
        className
      )}
    >
      {children}
    </p>
  );
};
