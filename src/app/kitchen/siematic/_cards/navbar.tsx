"use client";

import React, { useRef } from "react";
import { Clipboard, CodeXml } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { copyToClipboard } from "@/lib/utils";
import { Navbar } from "@/components/atomic-components/navbar";

export const NavbarCard = ({}) => {
  const code = useRef<HTMLPreElement>(null);

  return (
    <Card>
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Navbar</CardTitle>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Tabs defaultValue="preview" className="max-w-full">
          <div className="w-full flex justify-between">
            <TabsList className="grid h-full w-full grid-cols-2 md:w-[200px]">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="example">Example</TabsTrigger>
            </TabsList>
            <TabsList className="grid h-full w-full grid-cols-1 md:w-[150px]">
              <TabsTrigger value="source-code">
                <CodeXml className="mr-1 h-5 w-5" />
                Source Code
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview">
            <div className="h-[50dvh] flex flex-col items-center justify-center shadow-lg rounded-xl">
              <NavbarExample />
            </div>
          </TabsContent>
          <TabsContent value="example">
            <ScrollArea className="relative w-full h-full rounded-lg">
              <div className="absolute top-0 right-0 p-2">
                <Button
                  onClick={() => copyToClipboard(code)}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-blue-500">
                  <Clipboard className="h-5 w-5" />
                </Button>
              </div>
              <pre ref={code} className="max-w-full text-[13px]">
                <SyntaxHighlighter
                  language="tsx"
                  style={atomOneDark}
                  customStyle={{ padding: "0px 20px 20px 20px" }}>
                  {codeExample}
                </SyntaxHighlighter>
              </pre>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="source-code">
            <ScrollArea className="w-full h-[50dvh] rounded-lg">
              <div className="relative">
                <div className="sticky top-0 w-full">
                  <div className="absolute top-0 right-0 p-2">
                    <Button
                      onClick={() => copyToClipboard(code)}
                      variant="ghost"
                      size="icon"
                      className="text-white hover:text-blue-500">
                      <Clipboard className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <pre ref={code} className="max-w-full text-[13px]">
                  <SyntaxHighlighter
                    language="tsx"
                    style={atomOneDark}
                    customStyle={{ padding: "0px 20px 20px 20px" }}>
                    {codeSource}
                  </SyntaxHighlighter>
                </pre>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export const NavbarExample = () => {
  return <Navbar />;
};

const codeExample = `
import { Paragraph } from "@/components/atoms/paragraph";

export const NavbarExample = () => {
  return (
    <>
      {/* Normal Font Weight */}
      <Paragraph>The quick brown fox jumps over the lazy dog</Paragraph>
      {/* Bold Font Weight */}
      <Paragraph bold>The quick brown fox jumps over the lazy dog</Paragraph>
    </>
  );
};
`;

const codeSource = `
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
`;
