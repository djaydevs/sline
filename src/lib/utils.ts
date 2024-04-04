import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyToClipboard = (code: React.RefObject<HTMLElement>) => {
  if (code.current) {
    navigator.clipboard
      .writeText(code.current.textContent ?? "")
      .then(() => toast.success("Code copied to clipboard"))
      .catch((err) => console.error("Could not copy text: ", err));
  }
};
