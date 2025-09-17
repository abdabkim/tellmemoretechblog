"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Wrench } from "lucide-react"
import { useEffect, useState } from "react"


export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary border border-primary/30 text-white font-open-sans font-semibold text-sm mb-8 animate-bounce shadow-lg">
            <span className="mr-2 text-white">🚀</span>
            <span className="text-white font-semibold">The #1 Site for Tech Insights</span>
          </div>

          {/* Main heading */}
          <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Elite Developer Insights
            </span>
            <br />
            <span className="text-foreground">That Actually Matter</span>
          </h1>

          {/* Description */}
          <p className="font-open-sans text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Our contributor library of tutorials, reviews, and curated tools will help you build faster, smarter, and
            with more confidence. Subscribe to top tips from experienced developers and product designers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold px-8 py-4 text-lg group"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-open-sans font-semibold px-8 py-4 text-lg bg-transparent"
            >
              <Wrench className="mr-2 h-5 w-5" />
              Browse Tools
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-2">120k+</div>
              <div className="font-open-sans text-muted-foreground">monthly readers</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="font-montserrat font-black text-3xl sm:text-4xl text-secondary mb-2">80+</div>
              <div className="font-open-sans text-muted-foreground">expert contributors</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="font-montserrat font-black text-3xl sm:text-4xl text-primary mb-2">300+</div>
              <div className="font-open-sans text-muted-foreground">curated tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
