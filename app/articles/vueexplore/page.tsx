"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function VueExplorePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePlaygroundClick = () => {
    alert('Vue playground coming soon!')
  }

  const handleEcosystemClick = () => {
    alert('🌟 Vue ecosystem guide coming soon!')
  }

  const statsData = [
    { 
      number: "4.1M+", 
      label: "Weekly Downloads", 
      description: "Growing steadily in enterprise adoption" 
    },
    { 
      number: "200k+", 
      label: "GitHub Stars", 
      description: "One of the most starred JS frameworks" 
    },
    { 
      number: "90%", 
      label: "Developer Satisfaction", 
      description: "Highest satisfaction in State of JS" 
    },
    { 
      number: "Evan You", 
      label: "Created by", 
      description: "Independent, community-driven" 
    },
  ]

  const philosophyData = [
    {
      icon: "🚀",
      title: "Progressively Adoptable",
      description: "Start small with just a script tag, or scale up to a full SPA. Vue grows with your needs, letting you adopt features as your project evolves without breaking existing code.",
      highlight: "Incremental Adoption"
    },
    {
      icon: "💡",
      title: "Intuitive & Approachable",
      description: "Vue's template syntax feels natural to anyone who knows HTML, CSS, and JavaScript. No complex concepts to master before you can start building real applications.",
      highlight: "Gentle Learning Curve"
    },
    {
      icon: "⚡",
      title: "Performant by Default",
      description: "Vue's reactivity system and virtual DOM deliver excellent performance out of the box. Automatic optimizations mean your apps are fast without manual tweaking.",
      highlight: "Optimized Performance"
    }
  ]

  const ecosystemData = [
    {
      icon: "🛣️",
      title: "Vue Router",
      description: "Official routing library that seamlessly integrates with Vue.js core. Handle nested routes, guards, and navigation with declarative configuration."
    },
    {
      icon: "🏪",
      title: "Pinia",
      description: "The official state management library for Vue. Intuitive, type-safe, and modular - Pinia makes managing complex state a breeze."
    },
    {
      icon: "⚡",
      title: "Vite",
      description: "Lightning-fast build tool created by Vue's author. Instant hot module replacement and optimized production builds out of the box."
    },
    {
      icon: "💎",
      title: "Nuxt.js",
      description: "The full-stack Vue framework for production. Server-side rendering, static site generation, and auto-routing - Nuxt handles the complexity."
    },
    {
      icon: "🎨",
      title: "Vuetify",
      description: "Material Design component framework with 80+ components. Build beautiful, responsive applications with Google's design principles."
    },
    {
      icon: "📱",
      title: "Quasar",
      description: "Build once, deploy everywhere. Create Vue.js apps for SPA, PWA, SSR, mobile, and desktop from a single codebase."
    }
  ]

  const templateFeatures = [
    "HTML-based templates with directives",
    "Two-way data binding with v-model",
    "Conditional rendering and lists",
    "Event handling with @ shorthand"
  ]

  const compositionFeatures = [
    "Better logic reuse and organization",
    "Excellent TypeScript integration",
    "Tree-shakable and performant",
    "Works alongside Options API"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-green-400/30"
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
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.1,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-30 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <motion.a
          href="index.html"
          className="text-2xl font-bold text-white hover:text-green-400 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tell Me More <span className="text-green-400">Tech</span>
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
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
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
              className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Vue.js
            </motion.h1>
            <motion.div
              className="text-2xl md:text-3xl font-bold text-green-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              The Progressive JavaScript Framework
            </motion.div>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Vue.js makes building interactive web interfaces approachable, versatile, and performant. With its gentle learning curve and powerful features, Vue strikes the perfect balance between simplicity and capability.
            </motion.p>
            <motion.button
              onClick={handlePlaygroundClick}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Try Vue Playground
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
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            >
              💚
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 py-16 px-4">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-white/70">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">The Vue Philosophy</h2>
            <div className="text-2xl md:text-3xl text-green-300 font-light italic">
              "Approachable, Performant, Versatile"
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/80 mb-4 leading-relaxed">{item.description}</p>
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  {item.highlight}
                </span>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              What Makes Vue Special
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Vue combines the best ideas from React and Angular while maintaining its own unique approach to building user interfaces.
            </p>
          </motion.div>

          {/* Template Syntax Feature */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="bg-white rounded-xl p-6 font-mono text-sm">
                <div className="text-green-600 mb-4 font-bold">&lt;template&gt;</div>
                <div className="ml-4 text-gray-800">
                  &lt;div&gt;<br />
                  <span className="ml-4">&lt;h1&gt;{`{{ message }}`}&lt;/h1&gt;</span><br />
                  <span className="ml-4">&lt;button @click="count++"&gt;</span><br />
                  <span className="ml-8">Count: {`{{ count }}`}</span><br />
                  <span className="ml-4">&lt;/button&gt;</span><br />
                  &lt;/div&gt;
                </div>
                <div className="text-green-600 mt-4 font-bold">&lt;/template&gt;</div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Template Syntax That Just Works</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Vue's template syntax extends HTML with powerful directives and interpolations. It's familiar, readable, and doesn't require learning a new language like JSX.
              </p>
              <div className="space-y-3">
                {templateFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">✓</div>
                    <span className="text-white/90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Composition API Feature */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-white mb-6">Composition API Power</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Vue 3's Composition API gives you the flexibility of React hooks with better TypeScript support and more intuitive logic reuse patterns.
              </p>
              <div className="space-y-3">
                {compositionFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">✓</div>
                    <span className="text-white/90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="bg-white rounded-xl p-6 font-mono text-sm">
                <div className="text-green-600 mb-4 font-bold">// Composition API</div>
                <div className="text-gray-800 leading-relaxed">
                  import {`{ ref, computed }`} from 'vue'<br /><br />
                  export default {`{`}<br />
                  <span className="ml-4">setup() {`{`}</span><br />
                  <span className="ml-8">const count = ref(0)</span><br />
                  <span className="ml-8">const double = computed(() =&gt;</span><br />
                  <span className="ml-12">count.value * 2)</span><br />
                  <span className="ml-8">return {`{ count, double }`}</span><br />
                  <span className="ml-4">{`}`}</span><br />
                  {`}`}
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              The Vue Ecosystem
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Vue's ecosystem provides everything you need to build production-ready applications, from routing to state management to UI components.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {ecosystemData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
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
              onClick={handleEcosystemClick}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Explore the Full Ecosystem
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            Tell Me More Tech - Vue Explorer loaded successfully
          </p>
        </div>
      </footer>
    </div>
  )
}