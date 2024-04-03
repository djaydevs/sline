import React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type SearchbarProps = {
  className?: string;
};

export const Searchbar: React.FC<SearchbarProps> = ({ className }) => {
  return (
    <div className={cn("mx-auto w-full", className)}>
      <form>
        <div className="relative mx-3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search brands..."
            className="w-full appearance-none bg-background pl-8 shadow-none"
          />
        </div>
      </form>
    </div>
  );
};
