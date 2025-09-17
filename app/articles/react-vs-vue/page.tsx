"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ReactVsVuePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const comparisonData = [
    { criteria: "Learning Curve", react: "7/10", vue: "9/10", winner: "vue" },
    { criteria: "Performance", react: "9/10", vue: "8/10", winner: "react" },
    { criteria: "Ecosystem", react: "10/10", vue: "8/10", winner: "react" },
    { criteria: "Developer Experience", react: "8/10", vue: "9/10", winner: "vue" },
    { criteria: "Job Market", react: "10/10", vue: "7/10", winner: "react" },
    { criteria: "Bundle Size", react: "7/10", vue: "8/10", winner: "vue" },
    { criteria: "TypeScript Support", react: "9/10", vue: "8/10", winner: "react" },
    { criteria: "Community Support", react: "10/10", vue: "8/10", winner: "react" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 text-white overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            className={`absolute w-2 h-2 rounded-full ${index % 2 === 0 ? "bg-blue-400" : "bg-green-400"}`}
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
      <section className="min-h-screen flex items-center justify-center px-4 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider mb-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Framework Comparison
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            React vs Vue: The Ultimate Showdown
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Two titans of frontend development go head-to-head. Which framework will reign supreme in 2025?
          </motion.p>

          {/* Framework Logos */}
          <div className="flex items-center justify-center gap-8 md:gap-16 mb-16">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-6xl font-bold text-blue-900 shadow-2xl shadow-blue-400/40 mb-4"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                ⚛️
              </motion.div>
              <h3 className="text-2xl font-bold text-blue-400">React</h3>
            </motion.div>

            <motion.div
              className="text-6xl font-black text-yellow-400 mx-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              VS
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl shadow-green-400/40 mb-4"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
              >
                🟢
              </motion.div>
              <h3 className="text-2xl font-bold text-green-400">Vue</h3>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                MJ
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold">Mike Johnson</h4>
                <p className="text-white/70 text-sm">Full-Stack Developer</p>
              </div>
            </div>
            <span className="text-white/60">•</span>
            <span className="text-white/80 font-medium">12 min read</span>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Head-to-Head Comparison
          </motion.h2>

          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Table Header */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 text-blue-900 p-6 grid grid-cols-1 md:grid-cols-4 gap-4 font-bold text-center">
              <div className="md:col-span-2">Criteria</div>
              <div>React</div>
              <div>Vue</div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 border-b border-white/10 hover:bg-white/5 hover:translate-x-2 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-2 font-semibold text-white/90 text-center md:text-left">{row.criteria}</div>
                <div className="text-center">
                  <span
                    className={`inline-block px-4 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-110 ${
                      row.winner === "react"
                        ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 relative"
                        : "bg-blue-400/20 text-blue-400 border border-blue-400/30"
                    }`}
                  >
                    {row.react}
                    {row.winner === "react" && <span className="absolute -top-3 -right-3 text-lg">👑</span>}
                  </span>
                </div>
                <div className="text-center">
                  <span
                    className={`inline-block px-4 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-110 ${
                      row.winner === "vue"
                        ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 relative"
                        : "bg-green-400/20 text-green-400 border border-green-400/30"
                    }`}
                  >
                    {row.vue}
                    {row.winner === "vue" && <span className="absolute -top-3 -right-3 text-lg">👑</span>}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Framework Comparison */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Deep Dive Analysis
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* React Side */}
            <motion.div
              className="bg-white/5 border-2 border-blue-400/30 rounded-2xl p-8 hover:border-blue-400 hover:scale-102 transition-all duration-400 hover:shadow-2xl hover:shadow-blue-400/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.span
                  className="text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  ⚛️
                </motion.span>
                <h3 className="text-3xl font-bold text-blue-400">React</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-green-400 mb-3">✅ Pros</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Massive ecosystem and community support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Excellent job market opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Flexible and powerful component architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Strong TypeScript integration</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-3">❌ Cons</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Steeper learning curve for beginners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Requires additional libraries for full functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Frequent updates can break compatibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Vue Side */}
            <motion.div
              className="bg-white/5 border-2 border-green-400/30 rounded-2xl p-8 hover:border-green-400 hover:scale-102 transition-all duration-400 hover:shadow-2xl hover:shadow-green-400/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.span
                  className="text-4xl"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                >
                  🟢
                </motion.span>
                <h3 className="text-3xl font-bold text-green-400">Vue</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-green-400 mb-3">✅ Pros</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Gentle learning curve, beginner-friendly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Excellent developer experience out of the box</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Smaller bundle sizes and better performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Great documentation and tooling</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-3">❌ Cons</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Smaller ecosystem compared to React</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Fewer job opportunities in some markets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Less flexibility in large-scale applications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Code Comparison
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* React Code */}
            <motion.div
              className="bg-black/50 border border-blue-400/30 rounded-2xl p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="flex justify-between items-center mb-4 pb-3 border-b border-blue-400/30">
                <span className="text-blue-400 font-semibold">Counter.jsx</span>
                <button className="text-blue-300 hover:text-blue-200 text-sm">Copy</button>
              </div>

              <pre className="text-white/90 leading-relaxed overflow-x-auto text-sm">
                <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default Counter;`}</code>
              </pre>
            </motion.div>

            {/* Vue Code */}
            <motion.div
              className="bg-black/50 border border-green-400/30 rounded-2xl p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="flex justify-between items-center mb-4 pb-3 border-b border-green-400/30">
                <span className="text-green-400 font-semibold">Counter.vue</span>
                <button className="text-green-300 hover:text-green-200 text-sm">Copy</button>
              </div>

              <pre className="text-white/90 leading-relaxed overflow-x-auto text-sm">
                <code>{`<template>
  <div class="counter">
    <button @click="count++">
      Count: {{ count }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>`}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Which Should You Choose?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Choose React if:</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>You want maximum job opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>You need a large ecosystem of libraries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>You're building complex, large-scale apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>You prefer flexibility over convention</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-400/30 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Choose Vue if:</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>You're new to frontend frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>You want great developer experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>You prefer smaller bundle sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>You like convention over configuration</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-purple-500/10 border border-purple-400/30 rounded-2xl">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">The Verdict</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Both React and Vue are excellent choices in 2025. React dominates the job market and offers unmatched
                flexibility, while Vue provides a more approachable learning curve and better developer experience. Your
                choice should depend on your specific needs, team expertise, and project requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-12 rounded-3xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%201000%22%3E%3Cpolygon%20fill=%22rgba(255,255,255,0.1)%22%20points=%220,1000%201000,800%201000,1000%22/%3E%3C/svg%3E')] bg-cover"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to Start Building?</h2>
              <p className="text-xl mb-8 opacity-90">
                Choose your framework and start your journey to becoming a frontend master.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  Learn React
                </a>
                <a
                  href="https://vuejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  Learn Vue
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
