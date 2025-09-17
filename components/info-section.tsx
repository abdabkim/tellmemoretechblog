"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Wrench, GraduationCap, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const infoItems = [
  {
    icon: Code,
    title: "Frontend Frameworks",
    description:
      "Explore comparisons, performance breakdowns, and use cases for React, Vue, Svelte, and more – curated by real devs.",
    color: "from-primary to-primary/70",
    link: "/frameworks",
  },
  {
    icon: Wrench,
    title: "Dev Tools",
    description:
      "From code editors to deployment platforms, we review the tools that make your workflow faster and your code cleaner.",
    color: "from-secondary to-secondary/70",
    link: "/devtools",
  },
  {
    icon: GraduationCap,
    title: "Getting Started in Tech",
    description:
      "Whether you're switching careers or just starting out, our beginner guides help you build real projects and get hired.",
    color: "from-primary to-secondary",
    link: "/getting-started-tech",
  },
]

export function InfoSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Tell Me More About
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the topics that matter most to your development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                ref={(el) => {itemRefs.current[index] = el;}}
                className={`transition-all duration-700 delay-${index * 200} ${
                  visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="font-montserrat font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-open-sans text-muted-foreground mb-6 leading-relaxed">{item.description}</p>

                    <Link href={item.link}>
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-ring font-open-sans font-semibold p-0 h-auto group/btn"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}