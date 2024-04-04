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
import { YoutubeVideo } from "@/components/atomic-components/youtube-video";

export const YoutubeVideoCard = ({}) => {
  const code = useRef<HTMLPreElement>(null);

  return (
    <Card>
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Youtube Video</CardTitle>
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
              <YoutubeVideoExample />
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

export const YoutubeVideoExample = () => {
  return (
    <div className="w-[500px]">
      <YoutubeVideo className="w-full" videoId="me9Heufpcxg" />
    </div>
  );
};

const codeExample = `
export const YoutubeVideoExample = () => {
    return (
      <div className="w-[500px]">
        <YoutubeVideo className="w-full" videoId="me9Heufpcxg" />
      </div>
    );
  };
`;

const codeSource = `
"use client";

import { cn } from "@/lib/utils";

type YouTubeVideoProps = {
  videoId: string;
  fullVideo?: boolean;
  className?: string;
};

export const YoutubeVideo = (props: YouTubeVideoProps) => {
  const { videoId, fullVideo = false, className = "" } = props;

  return (
    <div
      className={cn(
        "aspect-w-16 aspect-h-9",
        { "w-full lg:w-screen": fullVideo },
        className
      )}>
      <iframe
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="aspect-video w-full"
        src={\`https://www.youtube.com/embed/\${videoId}\`}
        title="YouTube video player"
      />
    </div>
  );
};

`;
