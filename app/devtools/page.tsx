"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Shield, Wrench, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function DevToolsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tools = [
    {
      name: "Visual Studio Code",
      icon: "💻",
      category: "Code Editor",
      description: "The most popular code editor with incredible extensions and built-in Git support.",
      highlights: ["IntelliSense", "Extensions", "Integrated Terminal", "Git Integration"],
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Chrome DevTools",
      icon: "🔍",
      category: "Browser Tools",
      description: "Powerful debugging and profiling tools built right into Chrome browser.",
      highlights: ["Element Inspector", "Network Analysis", "Performance Profiling", "Console"],
      link: "https://developer.chrome.com/docs/devtools/",
    },
    {
      name: "Figma",
      icon: "🎨",
      category: "Design Tool",
      description: "Collaborative design tool that bridges the gap between designers and developers.",
      highlights: ["Real-time Collaboration", "Component Systems", "Auto Layout", "Dev Mode"],
      link: "https://figma.com/",
    },
    {
      name: "GitHub",
      icon: "🐙",
      category: "Version Control",
      description: "The world's leading platform for version control and collaborative development.",
      highlights: ["Git Repositories", "Pull Requests", "Actions CI/CD", "Issue Tracking"],
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "📡",
      category: "API Testing",
      description: "Comprehensive API development environment for testing and documenting APIs.",
      highlights: ["API Testing", "Mock Servers", "Documentation", "Team Collaboration"],
      link: "https://postman.com/",
    },
    {
      name: "Docker",
      icon: "🐳",
      category: "Containerization",
      description: "Platform for developing, shipping, and running applications in containers.",
      highlights: ["Containerization", "Microservices", "DevOps", "Cross-platform"],
      link: "https://docker.com/",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-semibold text-sm mb-8">
              <Wrench className="mr-2 h-4 w-4" />
              Developer Tools
            </div>

            <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Essential Dev Tools
              </span>
              <br />
              <span className="text-foreground">That Actually Matter</span>
            </h1>

            <p className="font-open-sans text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Curated collection of the most powerful development tools used by professional developers to build, test,
              and deploy amazing software.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{tool.icon}</div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-foreground mb-1">{tool.name}</h3>
                    <div className="text-sm text-primary font-semibold">{tool.category}</div>
                  </div>
                </div>

                <p className="font-open-sans text-muted-foreground mb-6 leading-relaxed">{tool.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-secondary font-semibold group-hover:translate-x-1 transition-all duration-200"
                >
                  Visit Official Site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-foreground mb-12">Tool Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, name: "Code Editors", count: "15+" },
              { icon: Zap, name: "Build Tools", count: "20+" },
              { icon: Shield, name: "Testing Tools", count: "12+" },
              { icon: Wrench, name: "DevOps Tools", count: "18+" },
            ].map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <category.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">{category.name}</h3>
                <div className="text-sm text-muted-foreground">{category.count} tools</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-foreground mb-6">
            Ready to Supercharge Your Development?
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get our comprehensive tool guides and weekly recommendations on the best development tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/getting-started">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 group"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 bg-transparent"
              >
                Browse Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
