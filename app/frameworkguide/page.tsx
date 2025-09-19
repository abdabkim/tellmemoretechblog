"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FrameworkGuidePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadGuide = () => {
    alert('📧 Full guide downloading to your email!')
  }

  const handleStartJourney = () => {
    alert('🎯 Welcome to the framework mastery program!')
  }

  const comparisonData = [
    {
      criteria: "Learning Curve",
      react: { value: "Moderate", score: "good" },
      vue: { value: "Easy", score: "excellent" },
      angular: { value: "Steep", score: "fair" },
      svelte: { value: "Easy+", score: "very-good" },
      nextjs: { value: "Moderate", score: "good" },
      nuxtjs: { value: "Easy+", score: "very-good" }
    },
    {
      criteria: "Performance",
      react: { value: "Very Good", score: "very-good" },
      vue: { value: "Very Good", score: "very-good" },
      angular: { value: "Very Good", score: "very-good" },
      svelte: { value: "Excellent", score: "excellent" },
      nextjs: { value: "Excellent", score: "excellent" },
      nuxtjs: { value: "Excellent", score: "excellent" }
    },
    {
      criteria: "Community Size",
      react: { value: "Huge", score: "excellent" },
      vue: { value: "Large", score: "very-good" },
      angular: { value: "Large", score: "very-good" },
      svelte: { value: "Growing", score: "good" },
      nextjs: { value: "Large", score: "very-good" },
      nuxtjs: { value: "Growing", score: "good" }
    },
    {
      criteria: "Job Market",
      react: { value: "Excellent", score: "excellent" },
      vue: { value: "Very Good", score: "very-good" },
      angular: { value: "Very Good", score: "very-good" },
      svelte: { value: "Good", score: "good" },
      nextjs: { value: "Very Good", score: "very-good" },
      nuxtjs: { value: "Good", score: "good" }
    },
    {
      criteria: "TypeScript Support",
      react: { value: "Very Good", score: "very-good" },
      vue: { value: "Very Good", score: "very-good" },
      angular: { value: "Built-in", score: "excellent" },
      svelte: { value: "Very Good", score: "very-good" },
      nextjs: { value: "Built-in", score: "excellent" },
      nuxtjs: { value: "Very Good", score: "very-good" }
    },
    {
      criteria: "Bundle Size",
      react: { value: "Medium", score: "good" },
      vue: { value: "Small", score: "very-good" },
      angular: { value: "Large", score: "fair" },
      svelte: { value: "Tiny", score: "excellent" },
      nextjs: { value: "Optimized", score: "very-good" },
      nuxtjs: { value: "Optimized", score: "very-good" }
    },
    {
      criteria: "Enterprise Ready",
      react: { value: "Very Good", score: "very-good" },
      vue: { value: "Very Good", score: "very-good" },
      angular: { value: "Excellent", score: "excellent" },
      svelte: { value: "Good", score: "good" },
      nextjs: { value: "Excellent", score: "excellent" },
      nuxtjs: { value: "Very Good", score: "very-good" }
    }
  ]

  const decisionCards = [
    {
      icon: "🌱",
      title: "First Time Building?",
      description: "New to frontend frameworks? Looking for something approachable with excellent documentation and a gentle learning curve?",
      recommended: "Vue.js",
      features: ["Gentle Learning", "Great Docs", "Progressive"]
    },
    {
      icon: "🏢",
      title: "Enterprise Application?",
      description: "Building large-scale applications with multiple teams? Need strict conventions, TypeScript, and enterprise features?",
      recommended: "Angular",
      features: ["Enterprise Ready", "TypeScript First", "Full Framework"]
    },
    {
      icon: "⚡",
      title: "Performance Critical?",
      description: "Building apps where every millisecond matters? Need the smallest bundle sizes and fastest runtime performance?",
      recommended: "Svelte",
      features: ["No Runtime", "Tiny Bundles", "Fast Performance"]
    },
    {
      icon: "💼",
      title: "Job Market Priority?",
      description: "Want to maximize career opportunities? Looking for the framework with the most job openings and highest demand?",
      recommended: "React",
      features: ["High Demand", "Huge Community", "Transferable Skills"]
    },
    {
      icon: "🌐",
      title: "SEO Important?",
      description: "Building content-heavy sites or e-commerce? Need server-side rendering and optimal SEO performance out of the box?",
      recommended: "Next.js / Nuxt.js",
      features: ["SSR/SSG", "SEO Optimized", "Production Ready"]
    },
    {
      icon: "🚀",
      title: "Move Fast & Ship?",
      description: "Need to build and deploy quickly? Want minimal configuration with maximum productivity from day one?",
      recommended: "Vue.js / Nuxt.js",
      features: ["Fast Development", "Convention Based", "Zero Config"]
    }
  ]

  const timelineSteps = [
    {
      number: 1,
      items: [
        {
          title: "🎯 Foundation First",
          description: "Master JavaScript fundamentals, ES6+ features, and basic HTML/CSS. Understanding these core technologies is crucial before diving into any framework."
        },
        {
          title: "📚 Framework Basics",
          description: "Learn your chosen framework's core concepts: components, state management, and event handling. Build simple projects to solidify understanding."
        }
      ]
    },
    {
      number: 2,
      items: [
        {
          title: "🛠️ Tooling & Setup",
          description: "Master the development environment: CLI tools, bundlers, and development servers. Learn debugging techniques and developer tools."
        },
        {
          title: "🏗️ Architecture Patterns",
          description: "Understand component architecture, state management patterns, and how to structure larger applications for maintainability."
        }
      ]
    },
    {
      number: 3,
      items: [
        {
          title: "🧪 Testing & Quality",
          description: "Learn testing strategies: unit tests, integration tests, and end-to-end testing. Implement code quality tools and best practices."
        },
        {
          title: "🚀 Production Ready",
          description: "Master deployment, performance optimization, monitoring, and maintenance. Learn to build applications that scale in production."
        }
      ]
    }
  ]

  const resources = [
    {
      icon: "📖",
      title: "Complete Tutorials",
      description: "Step-by-step tutorials for each framework, from hello world to production deployment. Learn by building real projects."
    },
    {
      icon: "🎥",
      title: "Video Courses",
      description: "Premium video content with expert instructors. Visual learning for complex concepts and advanced techniques."
    },
    {
      icon: "🛠️",
      title: "Starter Templates",
      description: "Production-ready templates and boilerplates. Skip the setup and start building your application immediately."
    },
    {
      icon: "💡",
      title: "Best Practices",
      description: "Industry-proven patterns and practices. Learn from experienced developers and avoid common pitfalls."
    },
    {
      icon: "🤝",
      title: "Community Access",
      description: "Join our developer community. Get help, share projects, and connect with other framework enthusiasts."
    },
    {
      icon: "📊",
      title: "Performance Tools",
      description: "Optimization guides and performance monitoring tools. Build fast applications that users love."
    }
  ]

  const getScoreColor = (score: string) => {
    switch (score) {
      case "excellent": return "bg-green-100 text-green-800"
      case "very-good": return "bg-blue-100 text-blue-800"
      case "good": return "bg-yellow-100 text-yellow-800"
      case "fair": return "bg-orange-100 text-orange-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.1,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-20 py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            The Complete Framework Guide
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Making the right framework choice can make or break your project. This comprehensive guide compares all major frameworks across key criteria to help you make the perfect decision for your next application.
          </motion.p>
          <motion.button
            onClick={handleDownloadGuide}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Download Complete Guide
          </motion.button>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section className="relative z-20 py-16 px-4 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Framework Comparison Matrix
            </h2>
            <p className="text-xl text-slate-600">
              A comprehensive comparison across the most important criteria for choosing a frontend framework.
            </p>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="min-w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-7 gap-4 p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-center">
                <div>Criteria</div>
                <div>React</div>
                <div>Vue.js</div>
                <div>Angular</div>
                <div>Svelte</div>
                <div>Next.js</div>
                <div>Nuxt.js</div>
              </div>

              {/* Table Rows */}
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-7 gap-4 p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="font-semibold text-slate-800">{row.criteria}</div>
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(row.react.score)}`}>
                      {row.react.value}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(row.vue.score)}`}>
                      {row.vue.value}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(row.angular.score)}`}>
                      {row.angular.value}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(row.svelte.score)}`}>
                      {row.svelte.value}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(row.nextjs.score)}`}>
                      {row.nextjs.value}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(row.nuxtjs.score)}`}>
                      {row.nuxtjs.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decision Tree Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Choose Your Framework
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Answer these key questions to find the perfect framework for your project needs and team situation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {decisionCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{card.description}</p>
                <div className="mb-4">
                  <div className="text-lg font-bold text-purple-300 mb-2">
                    Recommended: {card.recommended}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {card.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="relative z-20 py-16 px-4 bg-white/5 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Your Learning Roadmap
            </h2>
            <p className="text-xl text-slate-600">
              A step-by-step guide to mastering your chosen framework, from beginner to production-ready developer.
            </p>
          </motion.div>

          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {step.number}
                </div>
                <div className="grid md:grid-cols-2 gap-6 flex-1">
                  {step.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="bg-white/80 rounded-xl p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Continue Your Journey
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Access our complete collection of resources, tutorials, and tools to accelerate your framework mastery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4">{resource.title}</h4>
                <p className="text-white/80 leading-relaxed">{resource.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={handleStartJourney}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Your Framework Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            Tell Me More Tech - Framework Guide loaded! Choose your path! 🚀
          </p>
        </div>
      </footer>
    </div>
  )
}