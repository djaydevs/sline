import { cn } from "@/lib/utils";
import {
  chronicleDisplay,
  chronicleDisplaySemibold,
} from "../../fonts/fonts";

interface HeadingProps {
  children: React.ReactNode;
  bold?: boolean;
}

const h1: React.FC<HeadingProps> = ({ children, bold }) => {
  return (
    <h1
      className={cn(
        "text-5xl uppercase",
        chronicleDisplay.className,
        bold && chronicleDisplaySemibold.className
      )}>
      {children}
    </h1>
  );
};

const h2: React.FC<HeadingProps> = ({ children, bold }) => {
  return (
    <h2
      className={cn(
        "text-4xl uppercase",
        chronicleDisplay.className,
        bold && chronicleDisplaySemibold.className
      )}>
      {children}
    </h2>
  );
};

const h3: React.FC<HeadingProps> = ({ children, bold }) => {
  return (
    <h3
      className={cn(
        "text-3xl uppercase",
        chronicleDisplay.className,
        bold && chronicleDisplaySemibold.className
      )}>
      {children}
    </h3>
  );
};

const h4: React.FC<HeadingProps> = ({ children, bold }) => {
  return (
    <h4
      className={cn(
        "text-2xl uppercase",
        chronicleDisplay.className,
        bold && chronicleDisplaySemibold.className
      )}>
      {children}
    </h4>
  );
};

const h5: React.FC<HeadingProps> = ({ children, bold }) => {
  return (
    <h5
      className={cn(
        "text-xl uppercase",
        chronicleDisplay.className,
        bold && chronicleDisplaySemibold.className
      )}>
      {children}
    </h5>
  );
};

const h6: React.FC<HeadingProps> = ({ children, bold }) => {
  return (
    <h6
      className={cn(
        "text-lg uppercase",
        chronicleDisplay.className,
        bold && chronicleDisplaySemibold.className
      )}>
      {children}
    </h6>
  );
};

export const Heading = { h1, h2, h3, h4, h5, h6 };
