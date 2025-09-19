"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function NuxtjsExplorePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePlaygroundClick = () => {
    alert('Nuxt playground coming soon!')
  }

  const handleStarterClick = () => {
    alert('💎 Nuxt starter templates coming soon!')
  }

  const features = [
    {
      icon: "🗂️",
      title: "Auto-Generated Routing",
      description: "Create pages by adding Vue files to the pages directory. Nuxt automatically generates routes, including dynamic routes and nested layouts. No routing configuration needed.",
      highlight: "Zero Config Routing"
    },
    {
      icon: "🎨",
      title: "Universal Rendering",
      description: "Choose between SPA, SSR, or static generation for each page. Pre-render at build time for speed, or render on the server for SEO. The choice is yours, page by page.",
      highlight: "Flexible Rendering"
    },
    {
      icon: "📦",
      title: "Powerful Module System",
      description: "Extend Nuxt with 200+ community modules for PWA, analytics, content management, and more. Add functionality with a single line in your config file.",
      highlight: "Modular Architecture"
    },
    {
      icon: "⚡",
      title: "Auto Code Splitting",
      description: "Every page gets its own optimized bundle. Smart prefetching and lazy loading ensure users only download what they need, when they need it.",
      highlight: "Optimized Performance"
    },
    {
      icon: "🔧",
      title: "Built-in Development Tools",
      description: "Hot module replacement, error overlay, and Vue DevTools integration out of the box. TypeScript support with zero configuration required.",
      highlight: "Developer Experience"
    },
    {
      icon: "🚀",
      title: "Deploy Everywhere",
      description: "Deploy as SPA, SSR app, or static site to any platform. Vercel, Netlify, AWS, or your own server - Nuxt adapts to your hosting needs.",
      highlight: "Universal Deployment"
    }
  ]

  const directoryStructure = [
    { name: "pages/", type: "folder", icon: "📁", special: false },
    { name: "index.vue", type: "file", icon: "📄", special: true },
    { name: "about.vue", type: "file", icon: "📄", special: true },
    { name: "blog/", type: "folder", icon: "📁", special: true },
    { name: "_slug.vue", type: "file", icon: "📄", special: false },
    { name: "components/", type: "folder", icon: "📁", special: false },
    { name: "Header.vue", type: "file", icon: "⚙️", special: false },
    { name: "Footer.vue", type: "file", icon: "⚙️", special: false },
    { name: "layouts/", type: "folder", icon: "📁", special: false },
    { name: "default.vue", type: "file", icon: "🎨", special: true },
    { name: "middleware/", type: "folder", icon: "📁", special: false },
    { name: "auth.js", type: "file", icon: "🛡️", special: false },
    { name: "plugins/", type: "folder", icon: "📁", special: false },
    { name: "analytics.js", type: "file", icon: "🔌", special: false },
    { name: "store/", type: "folder", icon: "📁", special: false },
    { name: "index.js", type: "file", icon: "📊", special: false }
  ]

  const autoFeatures = [
    { icon: "🛣️", text: "Automatic routing from pages directory" },
    { icon: "🧩", text: "Auto-import components globally" },
    { icon: "🎨", text: "Layout system with default and custom layouts" },
    { icon: "🛡️", text: "Middleware for authentication and guards" },
    { icon: "🔌", text: "Plugin system for third-party integrations" },
    { icon: "📊", text: "Vuex store with module auto-registration" }
  ]

  const deploymentModes = [
    {
      icon: "🌐",
      title: "Universal SSR",
      description: "Server-side rendering for optimal SEO and initial load performance. Perfect for content-heavy sites, e-commerce, and applications that need to rank well in search engines.",
      badge: "SEO Optimized"
    },
    {
      icon: "⚡",
      title: "Static Generation",
      description: "Pre-render your entire site at build time. Deploy to any CDN for blazing fast performance. Ideal for blogs, documentation, and marketing sites.",
      badge: "JAMstack Ready"
    },
    {
      icon: "📱",
      title: "Single Page App",
      description: "Client-side rendering for dynamic applications. Perfect for dashboards, admin panels, and apps that don't need SEO but require rich interactivity.",
      badge: "Interactive"
    }
  ]

  const ecosystemTools = [
    {
      icon: "📝",
      title: "Nuxt Content",
      description: "Git-based headless CMS for Vue.js. Write content in Markdown, YAML, CSV, or JSON. Perfect for blogs, documentation, and content-driven sites."
    },
    {
      icon: "📱",
      title: "Nuxt PWA",
      description: "Turn your Nuxt app into a Progressive Web App with offline support, push notifications, and app-like experience on mobile devices."
    },
    {
      icon: "🔐",
      title: "Nuxt Auth",
      description: "Authentication module with support for multiple providers, JWT tokens, and session management. Secure your app with minimal configuration."
    },
    {
      icon: "🎨",
      title: "Nuxt UI",
      description: "Official UI library with beautiful, accessible components. Built specifically for Nuxt with automatic tree-shaking and theming support."
    },
    {
      icon: "📊",
      title: "Nuxt Analytics",
      description: "Easy integration with Google Analytics, Adobe Analytics, and other tracking services. Privacy-focused and GDPR compliant out of the box."
    },
    {
      icon: "🚀",
      title: "Nuxt Image",
      description: "Optimized image component with automatic resizing, format conversion, and lazy loading. Improve performance without manual optimization."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-800 text-white overflow-hidden">
      {/* Mountain Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-20">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-green-600/30 to-transparent"
          style={{
            clipPath: "polygon(0% 100%, 25% 60%, 50% 80%, 75% 40%, 100% 70%, 100% 100%)"
          }}
          animate={{
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-emerald-600/30 to-transparent"
          style={{
            clipPath: "polygon(0% 100%, 30% 70%, 60% 50%, 80% 75%, 100% 60%, 100% 100%)"
          }}
          animate={{
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-600/30 to-transparent"
          style={{
            clipPath: "polygon(0% 100%, 20% 80%, 40% 60%, 70% 85%, 90% 65%, 100% 90%, 100% 100%)"
          }}
          animate={{
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-emerald-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-30 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <motion.a
          href="index.html"
          className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tell Me More <span className="text-emerald-400">Tech</span>
        </motion.a>
        
        <motion.nav
          className="hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul className="flex items-center gap-8">
            <li><a href="frameworks.html" className="text-white/80 hover:text-white transition-colors">Frameworks</a></li>
            <li><a href="dev_tools.html" className="text-white/80 hover:text-white transition-colors">Dev Tools</a></li>
            <li><a href="resources_page.html" className="text-white/80 hover:text-white transition-colors">Resources</a></li>
            <li><a href="all_articles.html" className="text-white/80 hover:text-white transition-colors">All Articles</a></li>
          </ul>
        </motion.nav>
        
        <motion.a
          href="dev_tips.html"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Free Dev Tips
        </motion.a>
      </header>

      {/* Hero Section */}
      <section className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Nuxt.js
            </motion.h1>
            <motion.div
              className="text-2xl md:text-3xl font-bold text-emerald-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Vue.js on Steroids
            </motion.div>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Nuxt.js is the intuitive Vue framework that makes web development simple and powerful. Build universal applications with server-side rendering, static site generation, and automatic routing - all with the simplicity Vue is known for.
            </motion.p>
            <motion.button
              onClick={handlePlaygroundClick}
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Try Nuxt Playground
            </motion.button>
          </motion.div>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="text-9xl md:text-[12rem] filter drop-shadow-2xl"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
                filter: ["drop-shadow(0 0 20px rgba(16,185,129,0.5))", "drop-shadow(0 0 40px rgba(16,185,129,0.8))", "drop-shadow(0 0 20px rgba(16,185,129,0.5))"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            >
              💎
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Intuitive Web Development
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Nuxt.js combines the simplicity of Vue.js with powerful features for building production-ready applications with minimal configuration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/80 mb-4 leading-relaxed">{feature.description}</p>
                <span className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                  {feature.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="relative z-20 py-16 px-4 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Convention Over Configuration
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Nuxt follows intuitive conventions that make development predictable and productive. Your file structure becomes your application architecture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              className="bg-slate-900 rounded-2xl p-8 font-mono text-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                {directoryStructure.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-3 py-1 px-2 rounded ${
                      item.special ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-300'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className={item.type === 'folder' ? 'font-bold' : ''}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Everything Has Its Place</h3>
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                Nuxt's directory structure is intuitive and powerful. Each folder serves a specific purpose, and Nuxt automatically handles the rest.
              </p>
              <div className="space-y-4">
                {autoFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl mt-1">{feature.icon}</div>
                    <span className="text-slate-700 leading-relaxed">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deployment Modes Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Three Ways to Deploy
            </h2>
            <p className="text-xl text-slate-600">
              Nuxt adapts to your needs with three deployment modes. Choose the perfect approach for your project requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {deploymentModes.map((mode, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/90 hover:scale-105 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {mode.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">{mode.title}</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">{mode.description}</p>
                <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  {mode.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              The Nuxt Ecosystem
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Nuxt's ecosystem provides modules and tools that extend your application's capabilities while maintaining the framework's simplicity and convention-based approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {ecosystemTools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{tool.title}</h4>
                <p className="text-white/80 leading-relaxed">{tool.description}</p>
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
              onClick={handleStarterClick}
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Building with Nuxt
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            Tell Me More Tech - Nuxt.js Explorer built with Vue.js conventions! 💎
          </p>
        </div>
      </footer>
    </div>
  )
}