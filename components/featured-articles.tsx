"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, Flame } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const articles = [
  {
    icon: "⚡",
    topic: "Svelte",
    readTime: "8 min read",
    title: "Svelte in 2025: The Future is Here",
    description:
      "Svelte's compiler-first approach is redefining frontend performance. With zero runtime overhead and intuitive syntax, it's becoming the go-to for devs who want speed without complexity.",
    tags: ["#Svelte", "#Performance", "#Framework"],
    gradient: "from-orange-500 to-red-500",
    href: "/articles/svelte-2025",
  },
  {
    icon: "⚛️",
    topic: "React vs Vue",
    readTime: "12 min read",
    title: "React vs Vue: The Ultimate Showdown",
    description:
      "Two titans of frontend development go head-to-head. An honest comparison covering performance, ecosystem, learning curve, and real-world project considerations in 2025.",
    tags: ["#React", "#Vue", "#Comparison"],
    gradient: "from-blue-500 to-cyan-500",
    href: "/articles/react-vs-vue",
  },
  {
    icon: "🔍",
    topic: "Debug Skills",
    readTime: "6 min read",
    title: "Debugging Like a Pro: Tools and Mindsets",
    description:
      "Debugging isn't just technical — it's psychological. Learn how top engineers approach bugs with curiosity, precision, and the right tools.",
    tags: ["#Learning", "#Career", "#Debug"],
    gradient: "from-purple-500 to-pink-500",
    href: "/debuggingpro",
  },
  {
    icon: "🛠️",
    topic: "Resources",
    readTime: "5 min read",
    title: "VS Code Extensions That Will Save You Hours",
    description:
      "From GitLens to TabNine, these extensions streamline your workflow, reduce context switching, and help you write cleaner code — faster.",
    tags: ["#Tools", "#Resources", "#Productivity"],
    gradient: "from-green-500 to-emerald-500",
    href: "/vscodeextensions",
  },
]

export function FeaturedArticles() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-white font-open-sans font-semibold text-sm mb-6 shadow-lg">
            <Flame className="mr-2 h-4 w-4" />
            Most Popular This Week
          </div>

          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Featured</span>{" "}
            <span className="text-foreground">Articles</span>
          </h2>

          <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            🎯 Hand-picked content that's actually worth your time. No fluff, no basic tutorials - just the advanced
            insights that will <span className="text-secondary font-semibold">skyrocket your career</span>.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-all duration-700 delay-${index * 150} ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8">
                  {/* Article Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${article.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {article.icon}
                      </div>
                      <div>
                        <div className="font-open-sans font-semibold text-primary text-sm">{article.topic}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm font-open-sans">
                      <Clock className="mr-1 h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="font-open-sans text-muted-foreground mb-6 leading-relaxed">{article.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 font-open-sans text-xs font-semibold"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Link href={article.href}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold group/btn shadow-lg">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
