"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function GettingStartedPage() {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(800) // fallback value

  useEffect(() => {
    // Set initial window height and handle scroll
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
      
      const handleScroll = () => setScrollY(window.scrollY)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const codeSymbols = ["<>", "{}", "[]", "()", "/>", "&&", "||", "=>"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 text-white overflow-hidden">
      {/* Floating Code Symbols */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {codeSymbols.map((symbol, index) => (
          <motion.div
            key={index}
            className="absolute text-6xl font-mono text-white/10"
            style={{ left: `${10 + index * 10}%` }}
            animate={{
              y: [windowHeight, -100],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: index * 2,
              ease: "linear",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 md:pt-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 bg-gradient-to-r from-white via-yellow-300 to-rose-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-pulse leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Start Your Coding Journey
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            From zero to hero in modern web development
          </motion.p>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto opacity-80 leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Master the fundamentals, build amazing projects, and launch your career in tech with our comprehensive
            learning path.
          </motion.p>

          {/* Journey Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-8 md:mt-12">
            {[
              { number: "1", title: "Learn", desc: "Master the basics" },
              { number: "2", title: "Build", desc: "Create projects" },
              { number: "3", title: "Deploy", desc: "Share your work" },
              { number: "4", title: "Succeed", desc: "Land your dream job" },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-yellow-300/10 hover:border-yellow-300 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-300/20"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-yellow-300 mb-2 md:mb-4">{step.number}</div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2">{step.title}</h3>
                <p className="text-xs md:text-sm opacity-80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-yellow-300 to-rose-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your Learning Roadmap
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-300 to-rose-400 rounded-full hidden md:block"></div>

            {/* Timeline Items */}
            {[
              {
                title: "HTML & CSS Fundamentals",
                description:
                  "Learn the building blocks of web development. Master semantic HTML and modern CSS techniques.",
                skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
              },
              {
                title: "JavaScript Essentials",
                description: "Dive into programming logic, DOM manipulation, and modern JavaScript features.",
                skills: ["ES6+", "DOM", "Events", "Async/Await", "APIs"],
              },
              {
                title: "React Development",
                description: "Build dynamic user interfaces with the most popular JavaScript library.",
                skills: ["Components", "Hooks", "State", "Props", "Context"],
              },
              {
                title: "Backend & Databases",
                description: "Learn server-side development and data management.",
                skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "APIs"],
              },
              {
                title: "Full-Stack Projects",
                description: "Combine everything to build complete web applications.",
                skills: ["MERN Stack", "Authentication", "Deployment", "Testing"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 md:mb-16 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 mx-0 md:mx-8 mb-6 md:mb-0 hover:bg-white/8 hover:border-yellow-300/50 hover:scale-102 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-300/10 w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-4">{item.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-yellow-300/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium border border-yellow-300/30 hover:bg-yellow-300/30 hover:scale-110 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-300 to-rose-400 rounded-full flex items-center justify-center text-xl md:text-2xl font-black text-slate-900 shadow-2xl shadow-yellow-300/40 animate-pulse flex-shrink-0">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="bg-gradient-to-br from-purple-700 to-indigo-600 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-yellow-300 to-rose-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Choose Your Path
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "🎨",
                title: "Frontend Developer",
                description: "Create beautiful, interactive user interfaces that users love.",
                highlights: [
                  { icon: "⚡", text: "React & Vue.js mastery" },
                  { icon: "🎯", text: "UI/UX best practices" },
                  { icon: "📱", text: "Mobile-first design" },
                ],
              },
              {
                icon: "⚙️",
                title: "Backend Developer",
                description: "Build robust servers, APIs, and database systems.",
                highlights: [
                  { icon: "🚀", text: "Node.js & Python" },
                  { icon: "🗄️", text: "Database design" },
                  { icon: "🔒", text: "Security & authentication" },
                ],
              },
              {
                icon: "🌟",
                title: "Full-Stack Developer",
                description: "Master both frontend and backend to build complete applications.",
                highlights: [
                  { icon: "🔄", text: "End-to-end development" },
                  { icon: "☁️", text: "Cloud deployment" },
                  { icon: "📊", text: "Performance optimization" },
                ],
              },
            ].map((path, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center hover:bg-white/15 hover:border-yellow-300/50 hover:scale-105 transition-all duration-400 hover:shadow-2xl hover:shadow-yellow-300/20 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 animate-bounce">{path.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-4">{path.title}</h3>
                <p className="text-white/90 mb-6 md:mb-8 leading-relaxed">{path.description}</p>

                <div className="space-y-3 md:space-y-4">
                  {path.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 rounded-xl border-l-4 border-yellow-300"
                    >
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-300 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs md:text-sm flex-shrink-0">
                        {highlight.icon}
                      </div>
                      <span className="text-white/90 text-sm md:text-base">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-gradient-to-br from-slate-900 to-black py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 bg-gradient-to-r from-yellow-300 to-rose-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Essential Resources
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "📚", title: "Documentation", desc: "Official guides & references" },
              { icon: "🎥", title: "Video Tutorials", desc: "Step-by-step learning" },
              { icon: "💻", title: "Code Examples", desc: "Real-world projects" },
              { icon: "🤝", title: "Community", desc: "Connect with developers" },
            ].map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/10 hover:border-yellow-300 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-300/20 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">{resource.icon}</div>
                <h4 className="text-lg md:text-xl font-bold text-yellow-300 mb-2 md:mb-4">{resource.title}</h4>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">{resource.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}