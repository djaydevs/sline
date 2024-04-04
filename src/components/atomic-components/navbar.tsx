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
  "bg-none uppercase transition-colors duration-700 ease-linear text-[12px] text-black font-extrabold tracking-wider hover:bg-none hover:text-[#808080] focus:bg-none focus:text-[#808080] data-[active]:bg-none data-[state=open]:bg-none";

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
            "relative flex w-full items-center justify-end bg-neutral-200 py-2 text-sm",
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
                      "inline-block font-semibold tracking-wider text-topbar transition-colors duration-700 ease-in-out hover:text-black hover:no-underline",
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
            "flex w-full items-center justify-between px-2 transition duration-300 ease-linear lg:justify-center lg:transition-all lg:duration-150",
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
