import React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type TabAtomsProps = {
  className?: string;
};

export const TabAtoms: React.FC<TabAtomsProps> = ({ className }) => {
  return (
    <div className={cn("mx-auto w-full", className)}>
      Tab Atoms
    </div>
  );
};
