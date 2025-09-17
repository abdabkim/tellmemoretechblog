"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string): boolean => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/frameworks", label: "Frameworks" },
    { href: "/devtools", label: "DevTools" },
    { href: "/articles", label: "All Articles" },
    { href: "/resources", label: "Resources" },
  ]

  return (
    <nav className="bg-background border-b border-border fixed w-full z-50 top-0 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <Link
              href="/"
              className="font-montserrat font-bold text-xl text-foreground hover:text-primary transition-colors"
            >
              TELL ME MORE <span className="text-primary">TECH</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-open-sans font-semibold hover:text-secondary transition-colors relative ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/devtips">
              <Button 
                className={`font-open-sans font-semibold transition-all duration-300 ${
                  isActive("/devtips")
                    ? "bg-primary/90 text-primary-foreground ring-2 ring-primary/50"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                Free Dev Tips
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 font-open-sans transition-colors relative ${
                    isActive(item.href)
                      ? "text-primary font-semibold bg-primary/10 rounded-md"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"></span>
                  )}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/devtips" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className={`w-full font-open-sans font-semibold transition-all duration-300 ${
                      isActive("/devtips")
                        ? "bg-primary/90 text-primary-foreground ring-2 ring-primary/50"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    Free Dev Tips
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}