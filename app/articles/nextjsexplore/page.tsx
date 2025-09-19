"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function NextjsExplorePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePlaygroundClick = () => {
    alert('Next.js playground coming soon!')
  }

  const handleStarterClick = () => {
    alert('🚀 Next.js starter guide coming soon!')
  }

  const productionFeatures = [
    {
      icon: "🚀",
      title: "Zero Configuration",
      description: "Automatic compilation and bundling. Optimized for production from the start. Next.js handles the complex configuration so you can focus on building features, not tooling.",
      highlight: "Ready to Deploy"
    },
    {
      icon: "🌐",
      title: "Hybrid: SSG and SSR",
      description: "Pre-render pages at build time (SSG) or request time (SSR). Choose the right rendering method for each page. Perfect for SEO and performance without sacrificing flexibility.",
      highlight: "Best of Both Worlds"
    },
    {
      icon: "⚡",
      title: "Automatic Code Splitting",
      description: "Every page only loads what's necessary. Smaller bundles mean faster page loads. Route-based code splitting happens automatically without any configuration.",
      highlight: "Optimized Loading"
    },
    {
      icon: "🛣️",
      title: "File-based Routing",
      description: "Create routes by adding files to the pages directory. Dynamic routes, nested layouts, and API routes work out of the box. No complex routing configuration needed.",
      highlight: "Intuitive Navigation"
    },
    {
      icon: "🔌",
      title: "API Routes",
      description: "Build full-stack React applications with serverless functions. Create API endpoints as Node.js functions. Deploy frontend and backend together seamlessly.",
      highlight: "Full-Stack React"
    },
    {
      icon: "🎯",
      title: "TypeScript Support",
      description: "Built-in TypeScript support with zero configuration. Automatic type checking, IntelliSense, and error detection. Write safer, more maintainable code from day one.",
      highlight: "Type Safety"
    }
  ]

  const performanceMetrics = [
    { label: "Performance", value: 95, width: "95%" },
    { label: "Accessibility", value: 92, width: "92%" },
    { label: "Best Practices", value: 98, width: "98%" },
    { label: "SEO", value: 100, width: "100%" }
  ]

  const performanceBenefits = [
    { icon: "🎯", text: "Automatic image optimization and lazy loading" },
    { icon: "📦", text: "Smart bundling and tree shaking" },
    { icon: "🚀", text: "Route prefetching for instant navigation" },
    { icon: "⚡", text: "Optimized fonts and third-party scripts" },
    { icon: "🔄", text: "Incremental static regeneration" }
  ]

  const deploymentPlatforms = [
    {
      icon: "▲",
      title: "Vercel",
      description: "Zero-configuration deployment with preview URLs, automatic HTTPS, and global CDN. Built by the creators of Next.js."
    },
    {
      icon: "☁️",
      title: "Netlify",
      description: "Git-based deployment with form handling, identity management, and edge functions. Great for static and hybrid apps."
    },
    {
      icon: "🌐",
      title: "AWS Amplify",
      description: "Full-stack deployment with authentication, APIs, and databases. Integrates seamlessly with AWS services."
    },
    {
      icon: "🔥",
      title: "Firebase Hosting",
      description: "Google's hosting platform with CDN, SSL, and integration with Firebase services like Firestore and Auth."
    }
  ]

  const ecosystemTools = [
    {
      icon: "🎨",
      title: "Styled Components",
      description: "CSS-in-JS library with built-in Next.js support. Write component-scoped styles with the power of JavaScript and TypeScript."
    },
    {
      icon: "📝",
      title: "MDX",
      description: "Write JSX in your Markdown content. Perfect for blogs, documentation, and content-heavy sites with interactive components."
    },
    {
      icon: "🔐",
      title: "NextAuth.js",
      description: "Complete authentication solution for Next.js. OAuth providers, email/password, JWTs, and database sessions - all with zero configuration."
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Built-in analytics for Vercel deployments, plus easy integration with Google Analytics, Mixpanel, and other tracking services."
    },
    {
      icon: "🛠️",
      title: "SWR",
      description: "Data fetching library by the Next.js team. Caching, revalidation, focus tracking, and more - all built for React applications."
    },
    {
      icon: "🎯",
      title: "Headless CMS",
      description: "Perfect integration with headless CMS solutions like Contentful, Strapi, Sanity, and more for content-driven applications."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Floating Triangles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
            }}
          >
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-400/20"></div>
          </motion.div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-1 h-1 rounded-full bg-gray-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
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
          className="text-2xl font-bold text-white hover:text-gray-400 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tell Me More <span className="text-gray-400">Tech</span>
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
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
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
              className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Next.js
            </motion.h1>
            <motion.div
              className="text-2xl md:text-3xl font-bold text-gray-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              React for Production
            </motion.div>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
            </motion.p>
            <motion.button
              onClick={handlePlaygroundClick}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Try Next.js Live
            </motion.button>
          </motion.div>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="text-8xl md:text-[10rem] filter drop-shadow-2xl font-black text-white"
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
              ▲
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Production Features Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Production Ready by Default
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Next.js provides everything you need to build fast, SEO-friendly applications without the configuration headaches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionFeatures.map((feature, index) => (
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
                <span className="inline-block bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full text-sm font-medium">
                  {feature.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
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
              Performance That Matters
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Next.js applications consistently achieve high performance scores and deliver exceptional user experiences across all devices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
                Lighthouse Score Averages
              </h3>
              
              <div className="space-y-6">
                {performanceMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-1">
                      <div className="text-slate-800 font-semibold mb-2">{metric.label}</div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          className="h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: metric.width }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 min-w-[60px] text-right">
                      {metric.value}
                    </div>
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
              <h3 className="text-3xl font-bold text-white mb-6">Built for Speed</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Next.js optimizations happen automatically, giving you production-ready performance without the manual tuning typically required for React applications.
              </p>
              <div className="space-y-4">
                {performanceBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl mt-1">{benefit.icon}</div>
                    <span className="text-white/90 leading-relaxed">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deployment Section */}
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
              Deploy Anywhere
            </h2>
            <p className="text-xl text-slate-600">
              Next.js applications can be deployed to any platform that supports Node.js, or exported as static sites for CDN deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/90 hover:scale-105 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-3">{platform.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{platform.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              The Next.js Ecosystem
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Next.js has a thriving ecosystem of tools, libraries, and services that extend its capabilities and streamline development.
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
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Building with Next.js
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            Tell Me More Tech - Next.js Explorer ready for production! ▲
          </p>
        </div>
      </footer>
    </div>
  )
}