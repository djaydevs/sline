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
import { Heading } from "@/components/atomic-components/heading";

export const HeadingCard = ({}) => {
  const code = useRef<HTMLPreElement>(null);

  return (
    <Card>
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Headings</CardTitle>
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
              <HeadingExample />
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
                  customStyle={{ padding: "0px 20px" }}>
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
                    customStyle={{ padding: "0px 20px" }}>
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

export const HeadingExample = () => {
  return (
    <div className="flex space-x-14">
      <div className="space-y-3">
        <Heading.h1>Heading 1</Heading.h1>
        <Heading.h2>Heading 2</Heading.h2>
        <Heading.h3>Heading 3</Heading.h3>
        <Heading.h4>Heading 4</Heading.h4>
        <Heading.h5>Heading 5</Heading.h5>
        <Heading.h6>Heading 6</Heading.h6>
      </div>
      <div className="space-y-3">
        <Heading.h1 bold>Heading 1</Heading.h1>
        <Heading.h2 bold>Heading 2</Heading.h2>
        <Heading.h3 bold>Heading 3</Heading.h3>
        <Heading.h4 bold>Heading 4</Heading.h4>
        <Heading.h5 bold>Heading 5</Heading.h5>
        <Heading.h6 bold>Heading 6</Heading.h6>
      </div>
    </div>
  );
};

const codeExample = `
import { Heading } from "@/components/atoms/heading";

export const HeadingExample = () => {
    return (
      <div className="space-y-3 text-center">
        <Heading.h1>Heading 1</Heading.h1>
        <Heading.h2>Heading 2</Heading.h2>
        <Heading.h3>Heading 3</Heading.h3>
        <Heading.h4>Heading 4</Heading.h4>
        <Heading.h5>Heading 5</Heading.h5>
        <Heading.h6>Heading 6</Heading.h6>
      </div>
    );
  };
`;

const codeSource = `
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

`;
