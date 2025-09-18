"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface DebugTool {
  logo: string
  title: string
  category: string
  description: string
}

interface DebugMindset {
  icon: string
  title: string
  description: string
}

interface ProcessStep {
  number: number
  title: string
  description: string
}

interface ProTip {
  icon: string
  title: string
  description: string
}

interface DebugPitfall {
  logo: string
  title: string
  category: string
  description: string
}

export default function DebuggingProPage(): JSX.Element {
  const [scrollY, setScrollY] = useState<number>(0)
  const [windowHeight, setWindowHeight] = useState<number>(800)
  const [floatingBugs] = useState(() => 
    ["🐛", "🐞", "🔥", "⚠️", "❌", "💥", "🚨"].map((bug, index) => ({
      icon: bug,
      left: (index * 12.7) % 100,
      top: (index * 8.3) % 100,
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

  const debugMindsets: DebugMindset[] = [
    {
      icon: "🧠",
      title: "Curiosity Over Frustration",
      description: "The first rule of professional debugging: approach every bug with curiosity, not anger. Bugs are puzzles waiting to be solved, not personal attacks on your competence. This mindset shift alone will make you a more effective debugger."
    },
    {
      icon: "🎯", 
      title: "Systematic Investigation",
      description: "Random changes and 'try this, try that' approaches waste time and can introduce new bugs. Professional debugging follows a systematic process: reproduce, isolate, hypothesize, test, and verify."
    },
    {
      icon: "📚",
      title: "Learn from Every Bug", 
      description: "Each bug is a learning opportunity. Document what caused it, how you found it, and how you fixed it. This knowledge base becomes invaluable for future debugging sessions and helps you recognize patterns."
    }
  ]

  const debugTools: DebugTool[] = [
    {
      logo: "🌐",
      title: "Browser DevTools",
      category: "Frontend Debugging",
      description: "The most powerful frontend debugging tool is already in your browser. Chrome, Firefox, and Safari DevTools offer console debugging, network monitoring, performance analysis, and DOM inspection capabilities that are essential for web development."
    },
    {
      logo: "🖥️",
      title: "IDE Debuggers", 
      category: "Code-Level Debugging",
      description: "Modern IDEs like VS Code, IntelliJ, and Visual Studio provide sophisticated debugging capabilities with breakpoints, variable inspection, call stack analysis, and step-through debugging that let you see exactly what your code is doing."
    },
    {
      logo: "📊",
      title: "Logging Libraries",
      category: "Application Monitoring", 
      description: "Strategic logging with tools like Winston, Log4j, or built-in console methods helps track application flow and identify issues. Good logging practices can prevent many debugging sessions before they start."
    },
    {
      logo: "🔬",
      title: "Testing Frameworks",
      category: "Proactive Debugging",
      description: "Unit tests, integration tests, and end-to-end tests with frameworks like Jest, Pytest, or Selenium don't just prevent bugs—they help isolate and identify issues when they do occur."
    }
  ]

  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: "Reproduce the Bug",
      description: "Before you can fix a bug, you need to consistently reproduce it. Document the exact steps, environment conditions, and inputs that trigger the issue. If you can't reproduce it reliably, you can't verify your fix."
    },
    {
      number: 2, 
      title: "Isolate the Problem",
      description: "Narrow down where the bug occurs. Use binary search techniques—comment out half your code, test, then narrow further. The goal is to identify the smallest possible area where the bug exists."
    },
    {
      number: 3,
      title: "Form a Hypothesis", 
      description: "Based on your observations, form a theory about what's causing the bug. What assumptions might be wrong? What edge cases weren't considered? Good hypotheses are specific and testable."
    },
    {
      number: 4,
      title: "Test Your Theory",
      description: "Create minimal test cases to verify your hypothesis. Use debugger breakpoints, logging, or temporary code changes to gather evidence. Don't just guess—prove your theory with data."
    },
    {
      number: 5,
      title: "Fix and Verify",
      description: "Implement your fix, then thoroughly test to ensure the bug is resolved and no new issues were introduced. Run your test suite and manually verify the fix works in different scenarios."
    }
  ]

  const debugPitfalls: DebugPitfall[] = [
    {
      logo: "❌",
      title: "Assumption Errors",
      category: "Mental Trap", 
      description: "'It worked yesterday' or 'this code can't be wrong' are dangerous assumptions. Always verify your assumptions with data. The bug is often in the code you're most confident about."
    },
    {
      logo: "🔥",
      title: "Random Changes",
      category: "Time Waster",
      description: "Making random changes hoping something will work is inefficient and dangerous. Each change should be based on a hypothesis and should be tracked so you can revert if needed."
    },
    {
      logo: "⏰", 
      title: "Tunnel Vision",
      category: "Cognitive Bias",
      description: "Focusing too narrowly on one area of code can blind you to the real issue. Step back periodically and consider other possibilities. Sometimes the bug is in a completely different module."
    },
    {
      logo: "😤",
      title: "Emotional Debugging",
      category: "Productivity Killer",
      description: "Debugging while frustrated or stressed leads to poor decisions and missed clues. Take breaks, walk away, and come back with fresh eyes. Many breakthroughs happen during these mental breaks."
    }
  ]

  const proTips: ProTip[] = [
    {
      icon: "📝",
      title: "Keep a Debug Log",
      description: "Document unusual bugs and their solutions. You'll be amazed how often similar issues resurface. Your future self will thank you for the detailed notes."
    },
    {
      icon: "🔄", 
      title: "Use Version Control",
      description: "Make frequent commits when debugging. This lets you easily revert changes and compare working vs. broken states. Git diff is a powerful debugging tool."
    },
    {
      icon: "🤝",
      title: "Pair Debug",
      description: "Fresh eyes catch things you've missed. Pair debugging with a colleague often leads to faster solutions and knowledge sharing for both developers."
    },
    {
      icon: "🛡️",
      title: "Defensive Programming", 
      description: "Write code that fails gracefully. Add input validation, error handling, and meaningful error messages. Good defensive programming prevents many bugs."
    },
    {
      icon: "⚡",
      title: "Learn Your Tools",
      description: "Master your debugger's advanced features: conditional breakpoints, watch expressions, and call stack analysis. Powerful tools are only useful if you know how to use them."
    },
    {
      icon: "🎯",
      title: "Simplify and Isolate",
      description: "When stuck, create a minimal example that reproduces the bug. Remove complexity until you find the essential elements causing the issue."
    }
  ]

  const advancedStrategies: DebugMindset[] = [
    {
      icon: "🕵️",
      title: "Rubber Duck Debugging", 
      description: "Explain your code line-by-line to an inanimate object (or colleague). Often, the act of verbalizing your logic reveals flawed assumptions or missed edge cases. This technique is surprisingly effective for complex bugs."
    },
    {
      icon: "⏰",
      title: "Git Bisect for Historical Bugs",
      description: "When a bug appeared 'sometime recently,' use git bisect to binary search through your commit history. This automatically finds the exact commit that introduced the bug, even in codebases with thousands of commits."
    },
    {
      icon: "🎯", 
      title: "Minimal Reproduction Cases",
      description: "Create the smallest possible code example that demonstrates the bug. Strip away everything non-essential. This technique often reveals the root cause and makes it easier to get help from colleagues or Stack Overflow."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-orange-900 text-white overflow-hidden">
      {/* Floating Bug Icons */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {floatingBugs.map((bug, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-30"
            style={{
              left: `${bug.left}%`,
              top: `${bug.top}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 8 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.6,
              ease: "easeInOut",
            }}
          >
            {bug.icon}
          </motion.div>
        ))}
      </div>

      {/* Error Code Rain */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-red-400/20"
            style={{
              left: `${(index * 10) % 100}%`,
              top: `${(index * 7) % 100}%`,
            }}
            animate={{
              y: [windowHeight, -100],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: index * 2,
              ease: "linear",
            }}
          >
            {index % 3 === 0 ? "ERROR 404" : index % 3 === 1 ? "NULL POINTER" : "STACK OVERFLOW"}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-20 pt-20 bg-gradient-to-br from-red-600/10 to-orange-600/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider mb-8 shadow-2xl shadow-red-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Developer Skills
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              backgroundPosition: `${scrollY * 0.1}% 50%`,
            }}
          >
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Debugging
            </span>
            <br />
            <span className="text-white">Like a Pro: Tools and Mindsets</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center font-bold text-lg">
                AT
              </div>
              <div>
                <h4 className="text-red-400 font-semibold">Alex Thompson</h4>
                <p className="text-white/70 text-sm">Senior Software Engineer</p>
              </div>
            </motion.div>

            <motion.div
              className="text-white/80 font-medium"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              ⏱️ 6 min read
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {["🔍", "🛠️", "🧠", "⚡"].map((icon, index) => (
              <motion.div
                key={index}
                className="text-4xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-5xl mx-auto px-4 py-16 relative z-20">
        {/* Introduction */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl leading-relaxed text-white/90 mb-6">
            Debugging isn't just a technical skill—it's an art form that combines logical thinking, pattern recognition, and the right mindset. Every developer will tell you that debugging can be the most frustrating part of coding, but also the most rewarding when you finally crack that elusive bug.
          </p>
          <p className="text-xl leading-relaxed text-white/90">
            The difference between a good developer and a great one isn't just writing code; it's being able to systematically hunt down and eliminate bugs with efficiency and confidence. Let's explore the tools, techniques, and mental frameworks that separate debugging pros from the rest.
          </p>
        </motion.section>

        {/* The Debugging Mindset */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-red-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🧠
            </motion.span>
            The Debugging Mindset
          </h2>

          <div className="space-y-8">
            {debugMindsets.map((mindset: DebugMindset, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-red-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-red-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{mindset.icon}</span>
                  <h3 className="text-2xl font-bold text-red-400">{mindset.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{mindset.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Essential Debugging Tools */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-red-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              🛠️
            </motion.span>
            Essential Debugging Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {debugTools.map((tool: DebugTool, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-orange-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{tool.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-400 mb-2">{tool.title}</h3>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* The Professional Debugging Process */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-red-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              🔍
            </motion.span>
            The Professional Debugging Process
          </h2>

          <div className="bg-black/30 border border-red-500/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-400 text-center mb-8">🔍 The 5-Step Debugging Method</h3>

            <div className="space-y-8">
              {processSteps.map((step: ProcessStep, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-400 rounded-full flex items-center justify-center text-lg font-bold text-red-900 shadow-2xl shadow-red-400/40 flex-shrink-0">
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-red-400 mb-3">{step.title}</h4>
                    <p className="text-white/90 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Code Examples */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-red-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              💻
            </motion.span>
            Debugging Techniques in Action
          </h2>

          <p className="text-xl leading-relaxed text-white/90 mb-8">
            Let's look at some practical debugging scenarios and how professional developers approach them:
          </p>

          <div className="space-y-8">
            {/* Code Example 1 */}
            <div className="bg-black/50 border border-red-500/30 rounded-2xl p-6 relative overflow-hidden group">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="flex justify-between items-center mb-4 pb-3 border-b border-red-500/30">
                <span className="text-red-400 font-semibold">Common Bug: Undefined Variable</span>
                <button className="text-red-300 hover:text-red-200 text-sm">Copy</button>
              </div>

              <pre className="text-white/90 leading-relaxed overflow-x-auto text-sm">
                <code>{`// ❌ Bug: users array is undefined
console.log(users.length); // TypeError: Cannot read property 'length' of undefined

// 🔍 Debug approach:
console.log('users variable:', users);
console.log('typeof users:', typeof users);
console.log('users === undefined:', users === undefined);

// ✅ Professional fix with defensive programming:
const userCount = users?.length ?? 0;
console.log(\`Found \${userCount} users\`);`}</code>
              </pre>
            </div>

            {/* Code Example 2 */}
            <div className="bg-black/50 border border-orange-500/30 rounded-2xl p-6 relative overflow-hidden group">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="flex justify-between items-center mb-4 pb-3 border-b border-orange-500/30">
                <span className="text-orange-400 font-semibold">Async Bug: Race Condition</span>
                <button className="text-orange-300 hover:text-orange-200 text-sm">Copy</button>
              </div>

              <pre className="text-white/90 leading-relaxed overflow-x-auto text-sm">
                <code>{`// ❌ Bug: Race condition with async operations
let data = null;
fetchUserData().then(result => data = result);
console.log(data); // null - runs before fetch completes

// 🔍 Debug with timing logs:
console.log('1. Starting fetch...');
fetchUserData().then(result => {
  console.log('3. Fetch completed:', result);
  data = result;
});
console.log('2. This runs immediately');

// ✅ Professional fix with proper async handling:
const data = await fetchUserData();
console.log('Data loaded:', data);`}</code>
              </pre>
            </div>
          </div>
        </motion.section>

        {/* Advanced Debugging Strategies */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-red-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            >
              🚀
            </motion.span>
            Advanced Debugging Strategies
          </h2>

          <div className="space-y-8">
            {advancedStrategies.map((strategy: DebugMindset, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-yellow-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{strategy.icon}</span>
                  <h3 className="text-2xl font-bold text-yellow-400">{strategy.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Common Debugging Pitfalls */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-red-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
            >
              ⚠️
            </motion.span>
            Common Debugging Pitfalls
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {debugPitfalls.map((pitfall: DebugPitfall, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-red-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-red-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{pitfall.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">{pitfall.title}</h3>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                      {pitfall.category}
                    </span>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">{pitfall.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pro Debugging Tips */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-red-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 3 }}
            >
              💡
            </motion.span>
            Pro Debugging Tips
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proTips.map((tip: ProTip, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-orange-500/20 rounded-xl p-6 hover:bg-white/8 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h4 className="text-lg font-bold text-orange-400 mb-3">{tip.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Building Debugging Intuition */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-red-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
            >
              🧪
            </motion.span>
            Building Debugging Intuition
          </h2>

          <p className="text-xl leading-relaxed text-white/90 mb-8">
            Professional debugging isn't just about tools and techniques—it's about developing intuition that comes from experience. Here are ways to accelerate that learning curve:
          </p>

          <div className="space-y-6">
            {[
              {
                icon: "🧪",
                title: "Experiment Deliberately",
                description: "Don't just fix bugs—understand why they happened. Experiment with variations of the bug to deepen your understanding of the underlying system. This builds pattern recognition for future issues."
              },
              {
                icon: "📚", 
                title: "Study Others' Code",
                description: "Read open-source projects and study how experienced developers structure their code to minimize bugs. Pay attention to error handling, input validation, and defensive programming techniques."
              },
              {
                icon: "🔍",
                title: "Question Everything", 
                description: "Develop a healthy skepticism about your assumptions. That library you trust? That API you've used a hundred times? That function that 'always works'? Question them all when debugging."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-2xl font-bold text-cyan-400">{item.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* The Psychology of Debugging */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-red-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 4 }}
            >
              🧘
            </motion.span>
            The Psychology of Debugging
          </h2>

          <p className="text-xl leading-relaxed text-white/90 mb-6">
            Great debuggers understand that debugging is as much a psychological challenge as a technical one. Managing your mental state and approach can be the difference between a quick resolution and hours of frustration.
          </p>

          <p className="text-xl leading-relaxed text-white/90 mb-8">
            Remember: every expert was once a beginner who got frustrated with bugs. The difference is they learned to channel that frustration into systematic investigation. They developed patience, curiosity, and the humility to question their own assumptions.
          </p>

          <div className="bg-white/5 border border-green-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-green-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">🧘</span>
              <h3 className="text-2xl font-bold text-green-400">Embrace the Challenge</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Reframe debugging from "something is broken" to "here's an interesting puzzle to solve." This mindset shift reduces stress and opens your mind to creative solutions. The best debuggers genuinely enjoy the hunt.
            </p>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-12 rounded-3xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-600/10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Debug Like a Pro?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Debugging mastery comes from practice, the right tools, and most importantly, the right mindset. Start applying these techniques today and watch your debugging skills transform.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🛠️</div>
                <h4 className="text-lg font-bold mb-3">Explore Dev Tools</h4>
                <p className="text-sm opacity-90">Master the debugging tools that professional developers rely on daily.</p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-lg font-bold mb-3">Advanced Course</h4>
                <p className="text-sm opacity-90">Take your debugging skills to the next level with comprehensive training.</p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-lg font-bold mb-3">Join Community</h4>
                <p className="text-sm opacity-90">Connect with other developers and share debugging experiences.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}