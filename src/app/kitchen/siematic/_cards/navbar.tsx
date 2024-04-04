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
        <CardTitle>Navigation</CardTitle>
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
              <Navbar />
            </div>
          </TabsContent>
          <TabsContent value="example">
            <ScrollArea className="relative w-full h-[60dvh] rounded-lg">
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
            <ScrollArea className="w-full h-[60dvh] rounded-lg">
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

const codeExample = `
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { topbarRoutes, pageRoutes } from "@/config/routes/pages";
import { SiematicLogo } from "@/components/atoms/logo";

export const linkStyle =
  "bg-none uppercase transition-colors duration-700 ease-linear text-black font-extrabold 
  tracking-wider hover:bg-none hover:text-[#808080] focus:bg-none focus:text-[#808080] 
  data-[active]:bg-none data-[state=open]:bg-none";

export const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [isIdVisible, setIsIdVisible] = useState(false);

  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blogs/");
  const contentId = "blogs-content";

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop && st > 0) {
        setTopBarVisible(false);
      } else if (st === 0) {
        setTopBarVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    const element = document.getElementById(contentId);
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]) {
        setIsIdVisible(entries[0].boundingClientRect.top <= 0);
      }
    });
    if (element) {
      observer.observe(element);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [lastScrollTop]);

  return (
    <header
      className={cn("sticky inset-x-0 top-0 z-50 flex flex-col", {
        fixed: isBlogPage,
      })}>
      {!isBlogPage && (
        <nav
          aria-label="Global"
          className={cn(
            "relative flex w-full items-center justify-end bg-topbar-foreground py-2 text-sm",
            "transition duration-100 ease-in-out md:translate-y-0",
            {
              "translate-y-0": topBarVisible,
              "-translate-y-full": !topBarVisible,
            }
          )}>
          <NavigationMenu>
            <NavigationMenuList className="flex w-full justify-end">
              {topbarRoutes.map((topbarRoute) => (
                <NavigationMenuItem
                  className={cn({
                    "hidden md:inline-block":
                      topbarRoute !== topbarRoutes[0] &&
                      topbarRoute !== topbarRoutes[topbarRoutes.length - 1],
                  })}
                  key={topbarRoute.href}>
                  <NavigationMenuLink
                    className={cn(
                      "inline-block font-semibold tracking-wider text-topbar transition-colors 
                      duration-700 ease-in-out hover:text-black hover:no-underline",
                      {
                        "mr-4 lg:mr-8":
                          topbarRoute === topbarRoutes[topbarRoutes.length - 1],
                      }
                    )}
                    href={topbarRoute.href}
                    target={topbarRoute.target}>
                    {topbarRoute.title}
                  </NavigationMenuLink>
                  {topbarRoute !== topbarRoutes[topbarRoutes.length - 1] && (
                    <Separator
                      className="mx-5 inline-block h-4 bg-topbar align-middle"
                      orientation="vertical"
                    />
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      )}
      <nav
        aria-label="Global"
        className={cn(
          "relative mt-3 w-full bg-white text-xs text-primary transition duration-300 ease-linear md:text-sm",
          {
            "mt-[-36px] lg:mt-0": !topBarVisible,
            "mt-0 bg-transparent lg:mt-0": isBlogPage,
            "bg-white": isIdVisible,
          }
        )}>
        <div
          className={cn(
            "flex w-full items-center justify-between px-2 transition duration-300 ease-linear 
            lg:justify-center lg:transition-all lg:duration-150",
            {
              "lg:pt-8": topBarVisible,
              "pt-3": !topBarVisible,
              "pt-3 lg:pt-3": isBlogPage,
            }
          )}>
          <Link href={"/"}>
            <SiematicLogo
              fill={isBlogPage && !isIdVisible ? "white" : "black"}
            />
          </Link>
          <div className="w-8 lg:w-0"></div>
        </div>
        <Separator
          className={cn("mt-4 h-[0.5px] bg-black", {
            "bg-white": isBlogPage && !isIdVisible,
          })}
        />
        <div className="hidden h-11 w-full justify-center py-6 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex h-full w-full items-center justify-center gap-16 px-4 font-medium">
              {pageRoutes.map((pageRoute) => {
                return (
                  <div key={pageRoute.href}>
                    {pageRoute.subMenu ? (
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={cn(linkStyle, {
                            "text-white hover:text-white focus:text-white":
                              isBlogPage,
                            "text-black hover:text-[#808080] focus:text-[#808080]":
                              isIdVisible,
                          })}>
                          {pageRoute.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="border-2 border-border shadow-lg">
                          <div className="absolute left-4 top-[-28px] z-10">
                            <ChevronUp
                              color="#e2e8f0"
                              fill="#fff"
                              height={50}
                              strokeWidth={1.5}
                            />
                          </div>
                          <ul className="flex w-[250px] flex-col gap-3 p-6">
                            {pageRoute.subMenu.map((subMenuItem) => (
                              <NavigationMenuLink
                                className={linkStyle + " font-semibold"}
                                href={subMenuItem.href}
                                key={subMenuItem.title}>
                                {subMenuItem.title}
                              </NavigationMenuLink>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem>
                        <Link legacyBehavior passHref href={pageRoute.href}>
                          <NavigationMenuLink
                            className={cn(linkStyle, {
                              "text-white": isBlogPage,
                              "text-black": isIdVisible,
                            })}>
                            {pageRoute.title}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )}
                  </div>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
};
`;

const codeSource = `
import * as React from "react";
import { ChevronDown } from "lucide-react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    {/* <NavigationMenuViewport /> */}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    ref={ref}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    className={cn("relative", className)}
    ref={ref}
    {...props}
  />
));
NavigationMenuItem.displayName = "NavigationMenuItem";

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium 
  transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none 
  disabled:pointer-events-none disabled:opacity-50"
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    ref={ref}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      aria-hidden="true"
      className="relative top-[1px] ml-1 h-3.5 w-3.5 transition duration-100 group-data-[state=open]:rotate-180"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    className={cn(
      "left-0 top-full mt-5 w-full rounded-md bg-popover data-[motion^=from-]:animate-in data-[state=open]:animate-in 
      data-[motion^=to-]:animate-out data-[state=closed]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out 
      data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:absolute md:w-auto",
      className
    )}
    ref={ref}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "absolute left-0 top-full flex w-fit items-center justify-center"
    )}
    style={{ perspective: "2000px" }}
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "relative mt-[25px] h-[var(--radix-navigation-menu-viewport-height)] origin-center 
        overflow-hidden rounded-md border bg-popover text-popover-foreground shadow 
        data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 
        data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden 
      data-[state=visible]:animate-in data-[state=hidden]:animate-out 
      data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    ref={ref}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
`;
