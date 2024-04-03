import React from "react";

import { cn } from "@/lib/utils";
import { helveticaNow, helveticaNowBold } from "@/fonts/fonts";

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
        "max-w-full text-justify text-[14px] sm:text-[15px] font-semibold leading-7 text-black md:text-center lg:text-[16px]",
        helveticaNow.className,
        bold && helveticaNowBold.className,
        className
      )}
    >
      {children}
    </p>
  );
};
