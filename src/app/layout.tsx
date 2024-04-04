import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Inter, Mulish } from "next/font/google";
import { Toaster } from "sonner";
import { Bell } from "lucide-react";

import { SideNav } from "@/components/organisms/sidenav";
import { Searchbar } from "@/components/molecules/searchbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProfileDropdown } from "@/components/molecules/profile-dropdown";

const inter = Inter({ subsets: ["latin"] });
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sline",
  description: "Your guide to a systematic FOCUS design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("overflow-hidden", mulish.className)}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block h-full">
            <div className="flex flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 py-3 lg:h-[70px] lg:px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold">
                    <Image src="/sline.png" alt="Sline" width={90} height={90} />
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto h-8 w-8">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div>
              <aside className="flex-1">
                <Searchbar />
                <SideNav />
              </aside>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <main className="flex flex-1 flex-col gap-4 lg:gap-6">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
