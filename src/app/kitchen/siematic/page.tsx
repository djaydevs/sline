import "./../../globals.css";
import { Mulish } from "next/font/google";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SieMaticAtomicCards from "./_components/atoms";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

const SieMaticPage = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Tabs defaultValue="atoms" className="max-w-full m-4">
      <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
        <TabsTrigger value="atoms">Atoms</TabsTrigger>
        <TabsTrigger value="molecules">Molecules</TabsTrigger>
        <TabsTrigger value="organisms">Organisms</TabsTrigger>
      </TabsList>
      <TabsContent className="h-full max-w-full" value="atoms">
        <SieMaticAtomicCards />
      </TabsContent>
      <TabsContent value="molecules"></TabsContent>
      <TabsContent value="organisms"></TabsContent>
    </Tabs>
  );
};

export default SieMaticPage;
