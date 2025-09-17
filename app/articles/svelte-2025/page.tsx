"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Svelte2025Page() {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(800) // fallback value
  const [sparkPositions] = useState(() => 
    Array.from({ length: 20 }).map((_, index) => ({
      left: (index * 5.3) % 100, // Deterministic but varied positioning
      top: (index * 7.7) % 100,
    }))
  )

  useEffect(() => {
    // Set initial window height
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
      
      const handleScroll = () => setScrollY(window.scrollY)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white overflow-hidden">
      {/* Lightning Effects */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[10, 30, 60, 85].map((left, index) => (
          <motion.div
            key={index}
            className="absolute w-1 bg-gradient-to-b from-orange-500 to-transparent"
            style={{ left: `${left}%` }}
            animate={{
              height: ["0vh", "100vh", "0vh"],
              opacity: [0, 0.8, 1, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 1.5,
              times: [0, 0.05, 0.1, 0.85, 1],
            }}
          />
        ))}
      </div>

      {/* Floating Sparks */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {sparkPositions.map((position, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [windowHeight, -100],
              rotate: [0, 360],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Article Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-20 bg-gradient-to-br from-orange-500/10 to-orange-600/5 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider mb-8 shadow-2xl shadow-orange-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Framework Analysis
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-orange-500 via-orange-600 to-white bg-clip-text text-transparent bg-[length:200%_200%] leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              backgroundPosition: `${scrollY * 0.1}% 50%`,
            }}
          >
            Svelte in 2025: The Future is Here
          </motion.h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
                ST
              </div>
              <div>
                <h4 className="text-orange-500 font-semibold">Sarah Thompson</h4>
                <p className="text-white/70 text-sm">Senior Frontend Engineer</p>
              </div>
            </motion.div>

            <motion.div
              className="text-white/80 font-medium"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              8 min read
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-20">
        {/* Introduction Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            The Svelte Revolution
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-8">
            As we step into 2025, Svelte has evolved from a promising alternative to a dominant force in frontend
            development. With its compile-time optimizations and developer-friendly approach, Svelte is reshaping how we
            think about building web applications.
          </p>
          <div className="bg-orange-500/10 border-l-4 border-orange-500 p-8 rounded-lg backdrop-blur-lg border border-orange-500/20 hover:bg-orange-500/15 hover:translate-x-2 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
            <p className="text-lg leading-relaxed">
              <strong className="text-orange-400">Key Insight:</strong> Svelte's unique compilation approach eliminates
              the virtual DOM overhead, resulting in smaller bundle sizes and faster runtime performance compared to
              traditional frameworks.
            </p>
          </div>
        </motion.section>

        {/* Performance Comparison */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              ⚡
            </motion.span>
            Performance Benchmarks
          </h2>

          <div className="bg-black/30 border border-orange-500/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-orange-500 text-center mb-8">Framework Performance Comparison</h3>

            <div className="space-y-6">
              {[
                { label: "Bundle Size", svelte: 95, react: 65, vue: 70 },
                { label: "Runtime Speed", svelte: 92, react: 75, vue: 80 },
                { label: "Memory Usage", svelte: 88, react: 60, vue: 72 },
                { label: "Developer Experience", svelte: 90, react: 85, vue: 82 },
              ].map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white/90">{metric.label}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: "Svelte", value: metric.svelte, color: "from-orange-500 to-orange-600" },
                      { name: "React", value: metric.react, color: "from-blue-500 to-blue-600" },
                      { name: "Vue", value: metric.vue, color: "from-green-500 to-green-600" },
                    ].map((framework, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <span className="w-16 text-sm font-medium text-white/80">{framework.name}</span>
                        <div className="flex-1 bg-white/10 rounded-full h-8 relative overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${framework.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${framework.value}%` }}
                            transition={{ duration: 2, delay: index * 0.2 + fIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="w-12 text-sm font-bold text-orange-400">{framework.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Code Example */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ⚡
            </motion.span>
            Svelte Magic in Action
          </h2>

          <div className="bg-black/50 border border-orange-500/30 rounded-2xl p-8 relative overflow-hidden group">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="flex justify-between items-center mb-6 pb-4 border-b border-orange-500/30">
              <span className="text-orange-500 font-semibold text-sm">Counter.svelte</span>
              <button className="text-orange-400 hover:text-orange-300 text-sm">Copy</button>
            </div>

            <pre className="text-white/90 leading-relaxed overflow-x-auto">
              <code>{`<script>
  let count = 0;
  
  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<style>
  button {
    background: linear-gradient(45deg, #ff3e00, #ff6600);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  button:hover {
    transform: scale(1.05);
  }
</style>`}</code>
            </pre>
          </div>
        </motion.section>

        {/* Feature Comparison */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
              ⚡
            </motion.span>
            Why Choose Svelte?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Compile-Time Optimization",
                content:
                  "Svelte compiles your components at build time, eliminating the need for a virtual DOM and resulting in highly optimized vanilla JavaScript.",
              },
              {
                title: "Smaller Bundle Sizes",
                content:
                  "Applications built with Svelte typically have significantly smaller bundle sizes compared to React or Vue applications.",
              },
              {
                title: "Built-in State Management",
                content:
                  "Svelte includes reactive stores out of the box, eliminating the need for external state management libraries in most cases.",
              },
              {
                title: "Intuitive Syntax",
                content:
                  "Write less boilerplate code with Svelte's clean, HTML-like syntax that feels natural and is easy to learn.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-orange-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-orange-500/40 hover:scale-102 transition-all duration-400 hover:shadow-2xl hover:shadow-orange-500/20 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quote Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-12 text-center relative">
            <div className="text-6xl text-orange-500/30 mb-8">"</div>
            <p className="text-2xl italic text-white/90 mb-8 leading-relaxed">
              Svelte doesn't just make development faster—it makes the end result faster too. It's the framework that
              gets out of your way and lets you focus on building great user experiences.
            </p>
            <p className="text-orange-500 font-semibold text-lg">Rich Harris, Creator of Svelte</p>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-3xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Try Svelte?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers who have already made the switch to faster, more efficient web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://svelte.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                Get Started with Svelte
              </a>
              <a
                href="https://kit.svelte.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 hover:scale-105 transition-all duration-300"
              >
                Try SvelteKit
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}