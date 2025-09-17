"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Filter, Calendar, User, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function AllArticlesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const articles = [
    {
      title: "React vs Vue: The Ultimate 2025 Comparison",
      excerpt:
        "Deep dive into the pros and cons of React and Vue.js to help you choose the right framework for your next project.",
      category: "Frameworks",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Vue", "Comparison", "Frontend"],
      link: "/articles/react-vs-vue",
    },
    {
      title: "Svelte 2025: The Future of Frontend Development",
      excerpt:
        "Explore why Svelte is gaining momentum and how it's changing the way we think about frontend frameworks.",
      category: "Frameworks",
      author: "Mike Rodriguez",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      tags: ["Svelte", "Performance", "Frontend", "2025"],
      link: "/articles/svelte-2025",
    },
    {
      title: "Getting Started with Modern Web Development",
      excerpt:
        "A comprehensive guide for beginners to start their journey in web development with the right tools and mindset.",
      category: "Beginner",
      author: "Alex Thompson",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      tags: ["Beginner", "Web Development", "Guide", "Career"],
      link: "/getting-started",
    },
    {
      title: "Next.js 15: What's New and Why It Matters",
      excerpt:
        "Comprehensive overview of Next.js 15 features and how they improve developer experience and application performance.",
      category: "Frameworks",
      author: "Emma Wilson",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      tags: ["Next.js", "React", "Performance", "SSR"],
      link: "#",
    },
    {
      title: "TypeScript Best Practices for 2025",
      excerpt:
        "Essential TypeScript patterns and practices that every developer should know to write better, more maintainable code.",
      category: "Languages",
      author: "David Kim",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      tags: ["TypeScript", "Best Practices", "Code Quality"],
      link: "#",
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt: "Learn how to design and build robust, scalable APIs using Node.js and modern development practices.",
      category: "Backend",
      author: "Lisa Park",
      date: "Dec 3, 2024",
      readTime: "15 min read",
      tags: ["Node.js", "API", "Backend", "Scalability"],
      link: "#",
    },
  ]

  const categories = ["All", "Frameworks", "Languages", "Backend", "Frontend", "Beginner", "Tools"]

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-8">
              <Search className="mr-2 h-4 w-4" />
              All Articles
            </div>

            <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Developer Insights
              </span>
              <br />
              <span className="text-foreground">Worth Your Time</span>
            </h1>

            <p className="font-open-sans text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover in-depth articles, tutorials, and guides written by experienced developers to help you level up
              your skills and stay current with the latest trends.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-5 w-5 text-muted-foreground" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="font-montserrat font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="font-open-sans text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{article.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{article.date}</span>
                  </div>

                  <Link
                    href={article.link}
                    className="inline-flex items-center text-primary hover:text-secondary font-semibold group-hover:translate-x-1 transition-all duration-200"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-foreground mb-6">
            Want More Developer Insights?
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get weekly articles, tutorials, and tool recommendations delivered straight to your inbox.
          </p>

          <Link href="/getting-started">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 group"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
