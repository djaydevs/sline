"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export const AssetsCard = ({}) => {
  const code = useRef<HTMLPreElement>(null);

  return (
    <Card>
      <CardHeader className="flex-row p-2 pt-0 md:p-4 justify-between">
        <CardTitle>Assets</CardTitle>
        <Link
          href="/SieMaticLogo.png"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({variant: "default"}))}
        >
          <Download className="h-[20px] pr-2 "/>
          Download Assets
        </Link>
      </CardHeader>
      <CardContent className="mx-auto w-full p-2 pt-0 md:p-4 md:pt-0">
        <Image
          className="mx-auto"
          src="/SiematicLogo.png"
          width={250}
          height={1000}
          alt="Siematic Logo"
        />
      </CardContent>
    </Card>
  );
};
