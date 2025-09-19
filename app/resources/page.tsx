"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ResourcesPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const resourceCategories = [
    {
      title: "Code Editors & IDEs",
      icon: "💻",
      color: "from-blue-500 to-purple-600",
      resources: [
        {
          name: "Visual Studio Code",
          url: "https://code.visualstudio.com",
          description: "Free, powerful code editor with extensions",
        },
        { name: "WebStorm", url: "https://www.jetbrains.com/webstorm", description: "Professional JavaScript IDE" },
        { name: "Sublime Text", url: "https://www.sublimetext.com", description: "Sophisticated text editor for code" },
        { name: "Atom", url: "https://atom.io", description: "Hackable text editor for the 21st century" },
      ],
    },
    {
      title: "Design Tools",
      icon: "🎨",
      color: "from-pink-500 to-rose-600",
      resources: [
        { name: "Figma", url: "https://figma.com", description: "Collaborative interface design tool" },
        {
          name: "Adobe XD",
          url: "https://www.adobe.com/products/xd.html",
          description: "UI/UX design and prototyping",
        },
        { name: "Sketch", url: "https://www.sketch.com", description: "Digital design toolkit for Mac" },
        { name: "Canva", url: "https://canva.com", description: "Easy-to-use design platform" },
      ],
    },
    {
      title: "Version Control",
      icon: "🔧",
      color: "from-green-500 to-teal-600",
      resources: [
        { name: "GitHub", url: "https://github.com", description: "Code hosting and collaboration platform" },
        { name: "GitLab", url: "https://gitlab.com", description: "DevOps platform with Git repository" },
        { name: "Bitbucket", url: "https://bitbucket.org", description: "Git solution for teams" },
        { name: "Git", url: "https://git-scm.com", description: "Distributed version control system" },
      ],
    },
    {
      title: "Frontend Frameworks",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-600",
      resources: [
        { name: "React", url: "https://react.dev", description: "Library for building user interfaces" },
        { name: "Vue.js", url: "https://vuejs.org", description: "Progressive JavaScript framework" },
        { name: "Angular", url: "https://angular.io", description: "Platform for building mobile and desktop apps" },
        { name: "Svelte", url: "https://svelte.dev", description: "Cybernetically enhanced web apps" },
      ],
    },
    {
      title: "Backend & Databases",
      icon: "🗄️",
      color: "from-orange-500 to-red-600",
      resources: [
        { name: "Node.js", url: "https://nodejs.org", description: "JavaScript runtime built on Chrome V8" },
        { name: "MongoDB", url: "https://mongodb.com", description: "Document-based NoSQL database" },
        { name: "PostgreSQL", url: "https://postgresql.org", description: "Advanced open source database" },
        { name: "Firebase", url: "https://firebase.google.com", description: "Google's mobile and web app platform" },
      ],
    },
    {
      title: "CSS Frameworks",
      icon: "🎭",
      color: "from-purple-500 to-indigo-600",
      resources: [
        { name: "Tailwind CSS", url: "https://tailwindcss.com", description: "Utility-first CSS framework" },
        { name: "Bootstrap", url: "https://getbootstrap.com", description: "Popular CSS framework" },
        { name: "Bulma", url: "https://bulma.io", description: "Modern CSS framework based on Flexbox" },
        { name: "Chakra UI", url: "https://chakra-ui.com", description: "Modular and accessible component library" },
      ],
    },
    {
      title: "Deployment & Hosting",
      icon: "🚀",
      color: "from-emerald-500 to-green-600",
      resources: [
        { name: "Vercel", url: "https://vercel.com", description: "Platform for frontend frameworks and static sites" },
        { name: "Netlify", url: "https://netlify.com", description: "All-in-one platform for automating web projects" },
        { name: "AWS", url: "https://aws.amazon.com", description: "Amazon's cloud computing platform" },
        { name: "Heroku", url: "https://heroku.com", description: "Cloud platform as a service" },
      ],
    },
    {
      title: "Learning Platforms",
      icon: "📚",
      color: "from-yellow-500 to-orange-600",
      resources: [
        {
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org",
          description: "Comprehensive web development documentation",
        },
        { name: "freeCodeCamp", url: "https://freecodecamp.org", description: "Learn to code for free" },
        { name: "Codecademy", url: "https://codecademy.com", description: "Interactive coding lessons" },
        { name: "Pluralsight", url: "https://pluralsight.com", description: "Technology skills platform" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.1,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider mb-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Developer Resources
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Essential Developer Resources
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Curated collection of the best tools, platforms, and resources to supercharge your development journey
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {["Free Resources", "Official Links", "Regularly Updated", "Community Approved"].map((tag, index) => (
              <span key={index} className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="text-center">
                  <div
                    className={`inline-flex items-center gap-4 bg-gradient-to-r ${category.color} p-6 rounded-2xl shadow-2xl`}
                  >
                    <span className="text-4xl">{category.icon}</span>
                    <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  </div>
                </div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.a
                      key={resourceIndex}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: resourceIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Resource Card Content */}
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {resource.name}
                          </h3>
                          <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </div>
                        </div>

                        <p className="text-white/70 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                          {resource.description}
                        </p>

                        {/* Hover Effect Bar */}
                        <div
                          className={`h-1 bg-gradient-to-r ${category.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                        ></div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              More Resources Coming Soon
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're constantly updating our resource collection. Have a suggestion for a tool or platform that should be
              included?
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "🔄", title: "Regular Updates", desc: "New resources added weekly" },
                { icon: "✅", title: "Quality Checked", desc: "All resources are tested and verified" },
                { icon: "🌟", title: "Community Driven", desc: "Suggestions from developers like you" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-purple-300 mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Suggest a Resource
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-12 rounded-3xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%201000%22%3E%3Cpolygon%20fill=%22rgba(255,255,255,0.1)%22%20points=%220,1000%201000,800%201000,1000%22/%3E%3C/svg%3E')] bg-cover"></div>

            {/* <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 opacity-90">
                Get notified when we add new resources and tools to our collection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
