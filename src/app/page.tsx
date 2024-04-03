import Link from "next/link"
import {
  Bell,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Searchbar } from "@/components/molecules/searchbar"
import { AtomicTabs } from "@/components/molecules/atomic-tabs"
import Navbar from "@/components/organisms/sidenav"
import { ProfileDropdown } from "@/components/molecules/profile-dropdown"
import SieMaticStyles from "./kitchen/siematic/page"

export default function DashboardPage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="">Sline</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <Searchbar />
            <Navbar />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-full w-full items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <AtomicTabs className="flex-1" />
          <ProfileDropdown />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <SieMaticStyles />
        </main>
      </div>
    </div>
  )
}
