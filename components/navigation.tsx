"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              <Link
                href="/"
                className="text-primary font-open-sans font-semibold hover:text-secondary transition-colors"
              >
                Home
              </Link>
              <Link href="/frameworks" className="text-foreground font-open-sans hover:text-primary transition-colors">
                Frameworks
              </Link>
              <Link href="/devtools" className="text-foreground font-open-sans hover:text-primary transition-colors">
                DevTools
              </Link>
              <Link href="/articles" className="text-foreground font-open-sans hover:text-primary transition-colors">
                All Articles
              </Link>
              <Link href="/resources" className="text-foreground font-open-sans hover:text-primary transition-colors">
                Resources
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/getting-started">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold">
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
              <Link
                href="/"
                className="block px-3 py-2 text-primary font-open-sans font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/frameworks"
                className="block px-3 py-2 text-foreground font-open-sans hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Frameworks
              </Link>
              <Link
                href="/devtools"
                className="block px-3 py-2 text-foreground font-open-sans hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                DevTools
              </Link>
              <Link
                href="/articles"
                className="block px-3 py-2 text-foreground font-open-sans hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                All Articles
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 text-foreground font-open-sans hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="px-3 py-2">
                <Link href="/getting-started" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold">
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
