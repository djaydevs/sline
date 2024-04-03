"use client";

import React, { useRef } from "react";
import { toast } from "sonner";
import { Clipboard } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paragraph } from "@/components/atomic-components/paragraph";

export const ParagraphCard = ({}) => {
  const codeString = `  import React from "react";

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
  const code = useRef<HTMLPreElement>(null);

  const copyToClipboard = () => {
    if (code.current) {
      navigator.clipboard
        .writeText(code.current.textContent ?? "")
        .then(() => toast.success("Code copied to clipboard"))
        .catch((err) => console.error("Could not copy text: ", err));
    }
  };

  return (
    <Card>
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Paragraph</CardTitle>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Tabs defaultValue="preview" className="max-w-full">
          <div className="w-full flex justify-between">
            <TabsList className="grid h-full w-full grid-cols-2 md:w-[200px]">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <Button onClick={copyToClipboard} variant="secondary">
              <Clipboard className="mr-1 h-5 w-5" />
              Copy Code
            </Button>
          </div>
          <TabsContent value="preview">
            <div className="h-[50dvh] flex flex-col items-center justify-center">
              <Paragraph>The quick brown fox jumps over the lazy dog</Paragraph>
              <Paragraph bold>
                The quick brown fox jumps over the lazy dog
              </Paragraph>
            </div>
          </TabsContent>
          <TabsContent value="code">
            <ScrollArea className="w-full h-[50dvh] rounded-lg">
              <pre ref={code} className="max-w-full text-[13px]">
                <SyntaxHighlighter
                  language="tsx"
                  style={atomOneDark}
                  customStyle={{ padding: "25px" }}
                >
                  {codeString}
                </SyntaxHighlighter>
              </pre>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
