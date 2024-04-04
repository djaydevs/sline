import { cn } from "@/lib/utils";
import { chronicleDisplay } from "../../../public/fonts/fonts";

interface HeadingProps {
  children: React.ReactNode;
}

const h1: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h1 className={cn("text-5xl uppercase", chronicleDisplay.className)}>
      {children}
    </h1>
  );
};

const h2: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className={cn("text-4xl uppercase", chronicleDisplay.className)}>
      {children}
    </h2>
  );
};

const h3: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h3 className={cn("text-3xl uppercase", chronicleDisplay.className)}>
      {children}
    </h3>
  );
};

const h4: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h4 className={cn("text-2xl uppercase", chronicleDisplay.className)}>
      {children}
    </h4>
  );
};

const h5: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h5 className={cn("text-xl uppercase", chronicleDisplay.className)}>
      {children}
    </h5>
  );
};

const h6: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h6 className={cn("text-lg uppercase", chronicleDisplay.className)}>
      {children}
    </h6>
  );
};

export const Heading = { h1, h2, h3, h4, h5, h6 };
