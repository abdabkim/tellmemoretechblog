"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Award, Heart } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
              <Heart className="mr-2 h-4 w-4" />
              Our Story
            </div>

            <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Empowering Developers
              </span>
              <br />
              <span className="text-foreground">One Insight at a Time</span>
            </h1>

            <p className="font-open-sans text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              We're a community of passionate developers, designers, and tech enthusiasts dedicated to sharing knowledge
              that actually makes a difference in your coding journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">Our Mission</h3>
              <p className="font-open-sans text-muted-foreground leading-relaxed">
                To cut through the noise and deliver practical, actionable insights that help developers build better
                software faster.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">Our Community</h3>
              <p className="font-open-sans text-muted-foreground leading-relaxed">
                A diverse group of 120k+ developers from startups to Fortune 500 companies, all learning and growing
                together.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">Our Promise</h3>
              <p className="font-open-sans text-muted-foreground leading-relaxed">
                Every piece of content is tested, verified, and written by experienced developers who use these tools
                daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-foreground mb-6">Meet the Team</h2>
          <p className="font-open-sans text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our team of 80+ expert contributors includes senior developers, tech leads, and industry veterans from
            companies like Google, Microsoft, Netflix, and innovative startups.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Senior Developers", count: "45+" },
              { role: "Tech Leads", count: "20+" },
              { role: "Product Designers", count: "10+" },
              { role: "DevOps Engineers", count: "5+" },
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <div className="font-montserrat font-black text-2xl text-primary mb-2">{stat.count}</div>
                <div className="font-open-sans text-muted-foreground">{stat.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-foreground mb-6">
            Ready to Level Up Your Development Skills?
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who rely on our insights to stay ahead of the curve.
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
            <Link href="/articles">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 bg-transparent"
              >
                Browse Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
