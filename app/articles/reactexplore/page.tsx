"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ReactExplorePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTutorialClick = () => {
    alert('Interactive React tutorial coming soon!')
  }

  const handleRoadmapClick = () => {
    alert('🎯 Personalized React roadmap coming soon!')
  }

  const statsData = [
    { number: "11M+", label: "Weekly Downloads" },
    { number: "200k+", label: "GitHub Stars" },
    { number: "75%", label: "Developer Satisfaction" },
    { number: "Facebook", label: "Created & Maintained" },
  ]

  const featuresData = [
    {
      icon: "🧩",
      title: "Component-Based Architecture",
      description: "Build encapsulated components that manage their own state, then compose them to make complex UIs. Each component is like a LEGO block – reusable, testable, and predictable.",
      highlight: "Reusable & Modular"
    },
    {
      icon: "⚡",
      title: "Virtual DOM Performance",
      description: "React's virtual DOM minimizes expensive DOM operations by batching updates and only changing what's necessary. Your apps feel fast even as they grow complex.",
      highlight: "Optimized Updates"
    },
    {
      icon: "🔄",
      title: "Unidirectional Data Flow",
      description: "Data flows down from parent to child components, making your application's behavior predictable and debugging straightforward. No more hunting for mysterious state changes.",
      highlight: "Predictable State"
    },
    {
      icon: "🎯",
      title: "JSX Syntax",
      description: "Write HTML-like syntax directly in your JavaScript. JSX makes components readable and expressive, bridging the gap between markup and logic in a natural way.",
      highlight: "Expressive Syntax"
    },
    {
      icon: "🌐",
      title: "Massive Ecosystem",
      description: "From routing to state management to UI libraries, React's ecosystem has a solution for every need. Hundreds of thousands of packages are just an npm install away.",
      highlight: "Rich Ecosystem"
    },
    {
      icon: "🔧",
      title: "Developer Tools",
      description: "React DevTools, hot reloading, time-travel debugging, and excellent error messages make development a joy. The tooling around React is world-class.",
      highlight: "Great DX"
    }
  ]

  const ecosystemData = [
    {
      icon: "📱",
      title: "React Native",
      description: "Use React to build native mobile apps for iOS and Android. Share code between web and mobile while delivering native performance."
    },
    {
      icon: "▲",
      title: "Next.js",
      description: "The React framework for production. Server-side rendering, static site generation, and API routes out of the box."
    },
    {
      icon: "⚛️",
      title: "React Router",
      description: "Declarative routing for React applications. Handle navigation with the same component-based approach you use for UI."
    },
    {
      icon: "🏪",
      title: "Redux",
      description: "Predictable state container for JavaScript apps. Manage complex application state with time-travel debugging."
    },
    {
      icon: "💅",
      title: "Styled Components",
      description: "CSS-in-JS library that lets you style components with actual CSS syntax, bringing the best of both worlds together."
    },
    {
      icon: "🎨",
      title: "Material-UI",
      description: "React components implementing Google's Material Design. Get beautiful, accessible UI components ready to use."
    }
  ]

  const learningPaths = [
    {
      icon: "🌱",
      title: "Complete Beginner",
      description: "Start with JavaScript fundamentals, then dive into React concepts like components, props, and state. Build your first interactive app in weeks, not months."
    },
    {
      icon: "⚡",
      title: "Experienced Developer",
      description: "Jump straight into React patterns, hooks, context, and performance optimization. Learn the advanced concepts that separate good React code from great React code."
    },
    {
      icon: "🚀",
      title: "Ready for Production",
      description: "Master testing, deployment, monitoring, and scaling React applications. Learn the tools and practices used by teams at top tech companies."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-blue-400/30"
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
              className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              React
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              The library that changed everything. React introduced a component-based approach that made building complex UIs feel natural and maintainable. With its virtual DOM and unidirectional data flow, React has become the foundation for modern web development.
            </motion.p>
            <motion.button
              onClick={handleTutorialClick}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Try Interactive Tutorial
            </motion.button>
          </motion.div>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="text-9xl md:text-[12rem] filter drop-shadow-2xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            >
              ⚛️
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 py-16 px-4">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Why Developers Love React
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              React's philosophy of "learn once, write anywhere" has created an ecosystem where your skills transfer across web, mobile, and even desktop applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
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
                <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {feature.highlight}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              The React Universe
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              React isn't just a library – it's the center of a thriving ecosystem that extends your capabilities across platforms and use cases.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Learning Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Start Your React Journey
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Whether you're a complete beginner or looking to level up your React skills, we've got learning paths tailored for every stage of your development journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">{path.icon}</span>
                  {path.title}
                </h4>
                <p className="text-white/80 leading-relaxed">{path.description}</p>
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
              onClick={handleRoadmapClick}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-slate-900 px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Your Learning Roadmap
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            Tell Me More Tech - React Explorer loaded successfully
          </p>
        </div>
      </footer>
    </div>
  )
}