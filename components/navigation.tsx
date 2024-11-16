"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { Badge } from "./ui/badge"
import { ThemeToggle } from "./theme-toggle"

const navigation = [
  { name: "All Templates", href: "/templates" },
  { name: "Notion", href: "/templates/notion" },
  { name: "n8n", href: "/templates/n8n" },
  { name: "Make", href: "/templates/make" },
  { name: "Zapier", href: "/templates/zapier" },
  { name: "ChatGPT", href: "/templates/chatgpt" },
]

export default function Navigation() {
  const pathname = usePathname()
  const { items } = useCart()

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Automations Solutions</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                >
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">View cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}