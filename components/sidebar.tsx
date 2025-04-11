"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Home, Inbox, Menu, Settings, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    href: "/inbox",
    icon: Inbox,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen, toggle, isMobile } = useSidebar()

  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="absolute left-4 top-4 z-50 md:hidden" onClick={toggle}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r bg-background transition-transform duration-300 ease-in-out md:static",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-16",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <h1 className={cn("text-xl font-bold text-primary", !isOpen && "md:hidden")}>Pulse</h1>
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggle}>
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="flex-1 space-y-1 px-2 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-all",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className={cn("mr-3 h-5 w-5", !isOpen && "md:mr-0")} />
              <span className={cn("transition-opacity", !isOpen && "md:hidden")}>{item.title}</span>
            </Link>
          ))}
        </nav>

        <div className="border-t p-4">
          <div className={cn("flex items-center", !isOpen && "md:justify-center")}>
            <ThemeToggle />
            {isOpen && <span className="ml-2 text-sm font-medium md:block">Theme</span>}
          </div>
        </div>
      </div>
    </>
  )
}

