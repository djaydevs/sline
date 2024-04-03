import React from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AtomicTabsProps = {
  className?: string;
};

export const AtomicTabs: React.FC<AtomicTabsProps> = ({ className }) => {
  return (
    <div className={cn("mx-auto w-full", className)}>
       <Tabs defaultValue="overview" className="max-w-full flex-auto">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
          <TabsTrigger value="atoms">Atoms</TabsTrigger>
          <TabsTrigger value="molecules">Molecules</TabsTrigger>
          <TabsTrigger value="organisms">Organisms</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          
        </TabsContent>
        <TabsContent value="reports"></TabsContent>
      </Tabs>
    </div>
  );
};
