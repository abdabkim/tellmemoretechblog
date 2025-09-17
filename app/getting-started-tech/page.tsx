"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface FloatingIcon {
  icon: string
  left: number
  top: number
}

interface Phase {
  month: string
  title: string
  focus: string
  tasks: string[]
  outcome: string
}

interface Challenge {
  challenge: string
  solution: string
  tip: string
}

interface Pillar {
  title: string
  content: string
  skills: string[]
}

interface ResourceSection {
  category: string
  resources: string[]
}

export default function GettingStartedTechPage(): JSX.Element {
  const [scrollY, setScrollY] = useState<number>(0)
  const [windowHeight, setWindowHeight] = useState<number>(800)
  const [floatingIcons] = useState<FloatingIcon[]>(() => 
    ["💻", "🚀", "⚡", "🔧", "📚", "💡", "🎯", "🌟", "⭐", "✨", "🔥", "💎"].map((icon, index) => ({
      icon,
      left: (index * 8.3) % 100,
      top: (index * 13.7) % 100,
    }))
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
      
      const handleScroll = (): void => setScrollY(window.scrollY)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const pillars: Pillar[] = [
    {
      title: "Technical Foundation",
      content: "Master the fundamentals that matter. Focus on problem-solving, not just syntax. Build projects that demonstrate real-world application.",
      skills: ["Data Structures & Algorithms", "Version Control (Git)", "Database Fundamentals", "API Design", "Testing Principles"]
    },
    {
      title: "Portfolio Power",
      content: "Your portfolio is your interview. Create 3-5 polished projects that showcase different skills and tell compelling stories.",
      skills: ["Personal Website", "Full-Stack Application", "Open Source Contributions", "Technical Blog", "Case Studies"]
    },
    {
      title: "Network & Mindset",
      content: "Tech is a relationship-driven industry. Build genuine connections, embrace continuous learning, and develop resilience.",
      skills: ["LinkedIn Presence", "Tech Community Involvement", "Mentorship Relationships", "Growth Mindset", "Communication Skills"]
    }
  ]

  const timeline: Phase[] = [
    {
      month: "Month 1-2",
      title: "Foundation Building",
      focus: "Core Programming Concepts",
      tasks: [
        "Choose your first programming language (Python or JavaScript recommended)",
        "Complete online course or bootcamp prep",
        "Build your first 3 small projects",
        "Set up GitHub profile and learn Git basics",
        "Join tech communities and start networking"
      ],
      outcome: "Solid grasp of programming fundamentals and basic project portfolio"
    },
    {
      month: "Month 3-4",
      title: "Skill Expansion",
      focus: "Specialized Technology Stack",
      tasks: [
        "Learn a web framework (React, Django, or similar)",
        "Build a full-stack application with database",
        "Contribute to 2-3 open source projects",
        "Start a technical blog and write 4-6 articles",
        "Attend virtual meetups and conferences"
      ],
      outcome: "Functional full-stack application and growing professional network"
    },
    {
      month: "Month 5-6",
      title: "Job Search Preparation",
      focus: "Interview Readiness & Applications",
      tasks: [
        "Practice coding interviews daily (LeetCode, HackerRank)",
        "Refine portfolio with 2-3 polished projects",
        "Create compelling LinkedIn profile and resume",
        "Apply to 20-30 positions per week",
        "Schedule informational interviews with industry professionals"
      ],
      outcome: "Interview-ready candidate with strong portfolio and active job applications"
    }
  ]

  const challenges: Challenge[] = [
    {
      challenge: "Imposter Syndrome",
      solution: "Everyone feels this way initially. Focus on your progress, not perfection. Document your learning journey and celebrate small wins. Connect with other beginners—you're not alone in this experience.",
      tip: "Keep a daily learning log to track your progress and see how far you've come"
    },
    {
      challenge: "Information Overload",
      solution: "The tech landscape is vast, but you don't need to learn everything. Focus on one technology stack deeply rather than many superficially. Follow a structured curriculum and resist the urge to constantly switch technologies.",
      tip: "Choose one path and stick with it for at least 3 months before evaluating"
    },
    {
      challenge: "Building Without Experience",
      solution: "Start with guided projects, then modify them to make them your own. Contribute to open source projects to gain real-world experience. Build solutions to problems you actually have—authenticity shows in portfolios.",
      tip: "Every expert was once a beginner. Focus on solving real problems, however small"
    },
    {
      challenge: "Landing That First Job",
      solution: "Apply broadly, including to non-tech companies that need developers. Consider contract work or internships as stepping stones. Network genuinely—many jobs aren't posted publicly. Prepare thoroughly for technical interviews.",
      tip: "Quality applications to 50 companies beats 500 generic applications"
    }
  ]

  const resourceSections: ResourceSection[] = [
    {
      category: "Free Learning",
      resources: ["freeCodeCamp", "The Odin Project", "Codecademy Free Tier", "YouTube tutorials", "MDN Web Docs"]
    },
    {
      category: "Practice Platforms",
      resources: ["LeetCode", "HackerRank", "Codewars", "FrontendMentor", "Project Euler"]
    },
    {
      category: "Community & Networking",
      resources: ["Dev.to", "Stack Overflow", "Reddit r/learnprogramming", "Local meetups", "Tech Twitter"]
    },
    {
      category: "Tools & Setup",
      resources: ["Visual Studio Code", "Git & GitHub", "Chrome DevTools", "Figma", "Postman"]
    }
  ]

  const codeSnippets: string[] = [
    "console.log('hello world')",
    "function() { return true; }",
    "if (learning) { success++; }"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {floatingIcons.map((item: FloatingIcon, index: number) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 6 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Coding Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 15 }).map((_, index: number) => (
          <motion.div
            key={index}
            className="absolute text-sm font-mono text-emerald-400/30"
            style={{
              left: `${(index * 6.7) % 100}%`,
              top: `${(index * 5.3) % 100}%`,
            }}
            animate={{
              y: [windowHeight, -100],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: index * 0.8,
              ease: "linear",
            }}
          >
            {codeSnippets[index % 3]}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-20 pt-20 bg-gradient-to-br from-emerald-600/10 to-cyan-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider mb-8 shadow-2xl shadow-emerald-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Career Transformation
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_200%] leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              backgroundPosition: `${scrollY * 0.1}% 50%`,
            }}
          >
            Breaking Into Tech: Your Complete Roadmap
          </motion.h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-lg">
                MK
              </div>
              <div>
                <h4 className="text-emerald-400 font-semibold">Marcus Kim</h4>
                <p className="text-white/70 text-sm">Senior Engineering Manager</p>
              </div>
            </motion.div>

            <motion.div
              className="text-white/80 font-medium"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              12 min read
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-20">
        {/* Introduction */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-emerald-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🚀
            </motion.span>
            The Tech Industry Transformation
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-8">
            In 2025, the tech industry offers more opportunities than ever before. Whether you're a recent graduate, 
            career changer, or self-taught developer, breaking into tech requires strategy, persistence, and the right 
            foundation. This comprehensive guide will show you exactly how to make the transition successfully.
          </p>
          <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-8 rounded-lg backdrop-blur-lg border border-emerald-500/20 hover:bg-emerald-500/15 hover:translate-x-2 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
            <p className="text-lg leading-relaxed">
              <strong className="text-emerald-400">Reality Check:</strong> The average tech career transition takes 6-12 months of 
              dedicated learning and networking. Success comes from consistent daily progress, not overnight transformations.
            </p>
          </div>
        </motion.section>

        {/* The Three Pillars */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-emerald-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              🏗️
            </motion.span>
            The Three Pillars of Tech Success
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar: Pillar, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-emerald-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-emerald-500/40 hover:scale-102 transition-all duration-400 hover:shadow-2xl hover:shadow-emerald-500/20 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">{pillar.title}</h3>
                <p className="text-white/90 leading-relaxed mb-6">{pillar.content}</p>
                <div className="space-y-2">
                  {pillar.skills.map((skill: string, skillIndex: number) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline Roadmap */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-emerald-400 mb-12 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              🗺️
            </motion.span>
            Your 6-Month Transformation Timeline
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>

            {timeline.map((phase: Phase, index: number) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-lg font-bold text-emerald-900 shadow-2xl shadow-emerald-400/40 z-10">
                  {index + 1}
                </div>
                
                <div className="ml-8 bg-white/5 border border-emerald-500/20 rounded-2xl p-8 flex-1 hover:bg-white/8 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-emerald-400">{phase.title}</h3>
                    <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                      {phase.month}
                    </span>
                  </div>
                  
                  <p className="text-cyan-300 font-semibold mb-4">Focus: {phase.focus}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Tasks:</h4>
                    <ul className="space-y-2">
                      {phase.tasks.map((task: string, taskIndex: number) => (
                        <li key={taskIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/90">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-emerald-500/10 border-l-4 border-emerald-400 p-4 rounded">
                    <h4 className="text-emerald-400 font-semibold mb-2">Expected Outcome:</h4>
                    <p className="text-white/90">{phase.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Common Challenges */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-emerald-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
              🧗‍♂️
            </motion.span>
            Overcoming Common Roadblocks
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((item: Challenge, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-emerald-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-emerald-400 mb-4">{item.challenge}</h3>
                <p className="text-white/90 leading-relaxed mb-4">{item.solution}</p>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-cyan-300 font-medium text-sm">💡 Pro Tip: {item.tip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-600/5 border border-emerald-500/20 rounded-2xl p-12 text-center relative">
            <div className="text-6xl text-emerald-500/30 mb-8">"</div>
            <p className="text-2xl italic text-white/90 mb-8 leading-relaxed">
              I went from teaching high school math to landing a software engineer role at a fintech startup in 8 months. 
              The key was consistency—I coded every single day, even if just for 30 minutes. My teaching background actually 
              became my superpower in explaining complex technical concepts to stakeholders.
            </p>
            <p className="text-emerald-400 font-semibold text-lg">Sarah Chen, Software Engineer at Stripe</p>
            <div className="mt-6 text-sm text-white/70">
              Career transition: Teacher → Developer | Timeline: 8 months | Starting salary: $95k
            </div>
          </div>
        </motion.section>

        {/* Resources Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-emerald-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
              📚
            </motion.span>
            Essential Resources for Your Journey
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceSections.map((section: ResourceSection, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-emerald-500/20 rounded-2xl p-6 hover:bg-white/8 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-emerald-400 mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.resources.map((resource: string, resIndex: number) => (
                    <li key={resIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">{resource}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-12 rounded-3xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-600/10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Your Tech Journey Starts Today</h2>
            <p className="text-xl mb-8 opacity-90">
              The best time to start was yesterday. The second best time is now. Take the first step toward your new career in tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.freecodecamp.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                Start Learning for Free
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-emerald-600 hover:scale-105 transition-all duration-300"
              >
                Create Your GitHub
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}