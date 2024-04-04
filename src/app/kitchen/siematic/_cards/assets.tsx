"use client";

import React, { useRef } from "react";
import { Clipboard, CodeXml, Download } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paragraph } from "@/components/atomic-components/paragraph";
import { copyToClipboard } from "@/lib/utils";
import Image from "next/image";

export const AssetsCard = ({}) => {
  const code = useRef<HTMLPreElement>(null);

  return (
    <Card>
      <CardHeader className="flex-row p-2 pt-0 md:p-4 justify-between">
        <CardTitle>Assets</CardTitle>
        <a
          href="/SieMaticLogo.png"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 text-[14px] inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
        >
          <Download className="h-[20px] pr-2 "/>
          Download Assets
        </a>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Image
          src="/SiematicLogo.png"
          width={250}
          height={1000}
          alt="Siematic Logo"
        />
      </CardContent>
    </Card>
  );
};
