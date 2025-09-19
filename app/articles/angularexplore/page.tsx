"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AngularExplorePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCLIClick = () => {
    alert('Angular CLI tutorial coming soon!')
  }

  const handleEnterpriseClick = () => {
    alert('🏢 Angular enterprise guide coming soon!')
  }

  const enterpriseFeatures = [
    {
      icon: "🏗️",
      title: "Opinionated Architecture",
      description: "Angular provides strong conventions and patterns that help large teams stay organized. With services, modules, and dependency injection, your code stays structured as it grows.",
      highlight: "Scalable Structure"
    },
    {
      icon: "🔍",
      title: "TypeScript First",
      description: "Built with TypeScript from the ground up, Angular provides excellent type safety, IntelliSense, and refactoring capabilities. Catch errors at compile time, not runtime.",
      highlight: "Type Safety"
    },
    {
      icon: "🧪",
      title: "Comprehensive Testing",
      description: "Angular includes everything for testing: unit tests with Jasmine and Karma, end-to-end tests with Protractor, and powerful testing utilities built right in.",
      highlight: "Test Ready"
    },
    {
      icon: "⚙️",
      title: "Powerful CLI",
      description: "The Angular CLI handles project setup, code generation, building, testing, and deployment. Consistent project structure and best practices enforced automatically.",
      highlight: "Developer Productivity"
    },
    {
      icon: "🔒",
      title: "Security Built-in",
      description: "Angular has built-in protections against XSS, CSRF, and other vulnerabilities. Security isn't an afterthought - it's baked into the framework's DNA.",
      highlight: "Secure by Default"
    },
    {
      icon: "🌐",
      title: "Internationalization",
      description: "First-class i18n support for building applications that work across languages and cultures. Date, number, and currency formatting included.",
      highlight: "Global Ready"
    }
  ]

  const architectureLayers = [
    "Components & Templates",
    "Services & Dependency Injection", 
    "Modules & Lazy Loading",
    "Router & Navigation",
    "HTTP Client & Interceptors",
    "Forms & Validation"
  ]

  const architectureFeatures = [
    { icon: "🎯", text: "Dependency injection for clean, testable code" },
    { icon: "📡", text: "Powerful HTTP client with interceptors" },
    { icon: "🛣️", text: "Feature-rich router with lazy loading" },
    { icon: "📝", text: "Reactive and template-driven forms" },
    { icon: "🎨", text: "Animations API for smooth UX" }
  ]

  const companies = [
    { logo: "🏦", name: "Deutsche Bank" },
    { logo: "🎯", name: "Samsung" },
    { logo: "💳", name: "PayPal" },
    { logo: "🏢", name: "Microsoft" },
    { logo: "🚀", name: "NASA" },
    { logo: "📺", name: "HBO" }
  ]

  const ecosystemTools = [
    {
      icon: "🎨",
      title: "Angular Material",
      description: "Google's Material Design components for Angular. Production-ready UI components that follow accessibility best practices and design guidelines."
    },
    {
      icon: "📱",
      title: "Ionic",
      description: "Build native mobile apps with Angular and web technologies. Deploy to iOS, Android, and web from a single codebase with native performance."
    },
    {
      icon: "🖥️",
      title: "Electron",
      description: "Create desktop applications with Angular and web technologies. Build cross-platform desktop apps that feel native on Windows, macOS, and Linux."
    },
    {
      icon: "⚡",
      title: "Angular Universal",
      description: "Server-side rendering for Angular applications. Improve SEO, performance, and user experience with pre-rendered pages and progressive enhancement."
    },
    {
      icon: "🔧",
      title: "Angular DevKit",
      description: "Build tools and schematics for Angular development. Create custom build processes, code generators, and development workflows."
    },
    {
      icon: "☁️",
      title: "Angular Fire",
      description: "Official Angular library for Firebase. Integrate with Firebase services like Firestore, Authentication, and Cloud Functions seamlessly."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-rose-900 to-pink-900 text-white overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-red-400/30"
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
              className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Angular
            </motion.h1>
            <motion.div
              className="text-2xl md:text-3xl font-bold text-red-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Enterprise-Grade Framework
            </motion.div>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Built by Google for scale, Angular provides everything you need to build robust, maintainable applications. From dependency injection to comprehensive testing tools, Angular is designed for teams building serious software.
            </motion.p>
            <motion.button
              onClick={handleCLIClick}
              className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Try Angular CLI
            </motion.button>
          </motion.div>
          
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative">
              <motion.div
                className="text-8xl md:text-[10rem] filter drop-shadow-2xl z-20 relative"
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
                🅰️
              </motion.div>
              
              {/* Orbital rings */}
              <motion.div
                className="absolute inset-0 border-2 border-red-400/30 rounded-full w-48 h-48 md:w-64 md:h-64"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="absolute w-3 h-3 bg-red-400 rounded-full -top-1.5 left-1/2 transform -translate-x-1/2"></div>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 border-2 border-rose-400/20 rounded-full w-64 h-64 md:w-80 md:h-80"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="absolute w-2 h-2 bg-rose-400 rounded-full -top-1 left-1/2 transform -translate-x-1/2"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
              Built for Enterprise
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Angular isn't just a framework - it's a complete platform designed for building large-scale applications that need to be maintainable, testable, and scalable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
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
                <span className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                  {feature.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              The Angular Architecture
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Angular's layered architecture promotes separation of concerns and makes large applications manageable and maintainable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl p-4 border border-red-400/30 text-center font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {layer}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Everything You Need</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Angular is a complete platform that includes everything needed for building modern web applications. No decisions about which router or HTTP client to use - Angular provides them all.
              </p>
              <div className="space-y-4">
                {architectureFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl mt-1">{feature.icon}</div>
                    <span className="text-white/90 leading-relaxed">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="relative z-20 py-16 px-4 bg-white/5 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600">
              Major companies rely on Angular for their mission-critical applications because of its enterprise-grade features and long-term support.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/90 hover:scale-105 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <div className="font-bold text-slate-800 text-sm">{company.name}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              The Angular Ecosystem
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Angular's ecosystem provides everything needed for enterprise development, from UI components to development tools to cloud deployment.
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
              onClick={handleEnterpriseClick}
              className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Building Enterprise Apps
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            Tell Me More Tech - Angular Explorer loaded for enterprise! 🅰️
          </p>
        </div>
      </footer>
    </div>
  )
}