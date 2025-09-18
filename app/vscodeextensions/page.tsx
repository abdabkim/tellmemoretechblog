"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Extension {
  logo: string
  title: string
  category: string
  description: string
  benefits: string[]
  benefitTitle: string
}

interface ProductivityBoost {
  icon: string
  title: string
  description: string
}

interface InstallStep {
  number: number
  title: string
  description: string
}

interface ProTip {
  icon: string
  title: string
  description: string
}

export default function VSCodeExtensionsPage(): JSX.Element {
  const [scrollY, setScrollY] = useState<number>(0)
  const [windowHeight, setWindowHeight] = useState<number>(800)
  const [floatingCodes] = useState(() => 
    ["</>", "{}", "[]", "()", "//", "/* */", "=>", "&&"].map((code, index) => ({
      symbol: code,
      left: (index * 11.3) % 100,
      top: (index * 9.7) % 100,
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

  const productivityBoosts: ProductivityBoost[] = [
    {
      icon: "⚡",
      title: "Automation is Everything",
      description: "The best developers aren't just good at writing code—they're experts at eliminating repetitive tasks. Extensions automate formatting, linting, file navigation, and countless other micro-tasks that add up to hours of saved time each week."
    },
    {
      icon: "🧠",
      title: "Intelligent Assistance", 
      description: "Modern extensions don't just automate—they intelligently assist. From AI-powered code completion to smart refactoring suggestions, these tools act like having an expert pair programmer looking over your shoulder."
    },
    {
      icon: "🎯",
      title: "Focus Enhancement",
      description: "Great extensions eliminate distractions and help you maintain flow state. They reduce context switching, provide instant feedback, and keep your workspace organized so you can focus on what matters: solving problems."
    }
  ]

  const essentialExtensions: Extension[] = [
    {
      logo: "🎨",
      title: "Prettier",
      category: "Code Formatting",
      description: "Stop wasting time manually formatting code. Prettier automatically formats your JavaScript, TypeScript, CSS, HTML, and more with consistent, opinionated formatting that your entire team can adopt.",
      benefitTitle: "Time Saved:",
      benefits: [
        "No more manual indentation and spacing",
        "Eliminates formatting discussions in code reviews", 
        "Instant formatting on save",
        "Works across 20+ languages"
      ]
    },
    {
      logo: "🔍",
      title: "ESLint",
      category: "Code Quality",
      description: "Catch errors and enforce coding standards in real-time. ESLint identifies potential bugs, style inconsistencies, and problematic patterns before they make it to production.",
      benefitTitle: "Benefits:",
      benefits: [
        "Real-time error detection",
        "Customizable rules for your team",
        "Auto-fix for many issues", 
        "Prevents common JavaScript pitfalls"
      ]
    },
    {
      logo: "🚀",
      title: "GitHub Copilot",
      category: "AI Assistant", 
      description: "Your AI pair programmer that suggests entire lines or blocks of code as you type. Trained on billions of lines of code, Copilot understands context and generates relevant suggestions.",
      benefitTitle: "Productivity Boost:",
      benefits: [
        "Generates boilerplate code instantly",
        "Suggests functions based on comments",
        "Helps with unfamiliar APIs",
        "Speeds up repetitive coding tasks"
      ]
    },
    {
      logo: "🌲",
      title: "File Tree Generator",
      category: "Documentation",
      description: "Instantly generate ASCII directory trees for documentation, README files, or project overviews. Perfect for explaining project structure to team members or in documentation.",
      benefitTitle: "Use Cases:",
      benefits: [
        "Quick project structure documentation",
        "README file illustrations", 
        "Onboarding new team members",
        "Project planning and organization"
      ]
    },
    {
      logo: "🔗",
      title: "Auto Rename Tag",
      category: "HTML/JSX Helper",
      description: "Automatically rename paired HTML/JSX tags. Change an opening tag and the closing tag updates instantly, eliminating a common source of markup errors.",
      benefitTitle: "Saves Time On:",
      benefits: [
        "HTML and JSX editing",
        "Refactoring component structures",
        "Preventing mismatched tag errors",
        "Faster markup modifications"
      ]
    },
    {
      logo: "🎯",
      title: "Bracket Pair Colorizer", 
      category: "Code Readability",
      description: "Color-codes matching brackets, making it easier to identify scope and catch syntax errors. Essential for deeply nested code structures and complex logic.",
      benefitTitle: "Improves:",
      benefits: [
        "Code readability in complex functions",
        "Bracket matching accuracy",
        "Debugging nested structures",
        "Overall code comprehension"
      ]
    }
  ]

  const advancedExtensions: Extension[] = [
    {
      logo: "🌊",
      title: "GitLens",
      category: "Git Integration",
      description: "Supercharge your Git workflow with inline blame annotations, rich commit history, and powerful repository insights directly in your editor.",
      benefitTitle: "Git Superpowers:",
      benefits: [
        "See who changed what code and when",
        "Visualize file history and changes",
        "Compare branches and commits",
        "Navigate repository history easily"
      ]
    },
    {
      logo: "📁",
      title: "Path Intellisense",
      category: "File Navigation",
      description: "Autocompletes file paths as you type import statements. No more guessing at directory structures or typos in file paths.",
      benefitTitle: "Navigation Benefits:",
      benefits: [
        "Faster import statement completion",
        "Prevents path typos and errors",
        "Works with relative and absolute paths",
        "Supports multiple file types"
      ]
    },
    {
      logo: "⚡",
      title: "Thunder Client",
      category: "API Testing",
      description: "A lightweight REST API client built directly into VS Code. Test APIs without leaving your editor or switching to external tools like Postman.",
      benefitTitle: "API Testing:",
      benefits: [
        "Test APIs without leaving VS Code",
        "Save and organize API requests",
        "Environment variable support",
        "Response formatting and validation"
      ]
    },
    {
      logo: "🎨",
      title: "Live Server",
      category: "Development Server",
      description: "Launch a local development server with live reload for static and dynamic pages. See your changes instantly without manually refreshing.",
      benefitTitle: "Development Speed:",
      benefits: [
        "Instant live reload on file changes",
        "Works with any static site",
        "Custom port and host configuration",
        "HTTPS support for testing"
      ]
    }
  ]

  const installSteps: InstallStep[] = [
    {
      number: 1,
      title: "Install Extensions",
      description: "Open VS Code, press Ctrl+Shift+X (Cmd+Shift+X on Mac) to open the Extensions panel. Search for each extension by name and click Install."
    },
    {
      number: 2,
      title: "Configure Settings",
      description: "Open Settings (Ctrl+,) and configure extensions to work together. Enable format on save, set up auto-fix on save, and customize keybindings for your workflow."
    },
    {
      number: 3,
      title: "Sync Across Devices", 
      description: "Use VS Code's built-in Settings Sync to keep your extensions and configurations consistent across all your development machines."
    },
    {
      number: 4,
      title: "Team Configuration",
      description: "Create workspace settings and recommended extensions for your team. Add a .vscode folder to your project with extensions.json for team consistency."
    }
  ]

  const productivityMetrics: Extension[] = [
    {
      logo: "⏱️",
      title: "Formatting & Linting",
      category: "Time Saved",
      description: "Prettier + ESLint combination saves an average of 45 minutes daily by eliminating manual formatting and catching errors early.",
      benefitTitle: "",
      benefits: []
    },
    {
      logo: "🤖", 
      title: "AI Code Completion",
      category: "Productivity Gain",
      description: "GitHub Copilot users report 55% faster coding for repetitive tasks and 30% improvement in overall development speed.",
      benefitTitle: "",
      benefits: []
    },
    {
      logo: "🔧",
      title: "Workflow Optimization",
      category: "Efficiency Boost",
      description: "Navigation and file management extensions reduce context switching by 40%, helping maintain focus and flow state.",
      benefitTitle: "",
      benefits: []
    }
  ]

  const proTips: ProTip[] = [
    {
      icon: "🎛️",
      title: "Customize Keybindings",
      description: "Create custom keyboard shortcuts for your most-used extension commands. This can save seconds on every operation that add up to hours over time."
    },
    {
      icon: "🔄",
      title: "Regular Extension Audits",
      description: "Review your extensions quarterly. Disable unused ones to keep VS Code fast and discover new extensions that could improve your workflow."
    },
    {
      icon: "👥",
      title: "Team Standardization",
      description: "Standardize essential extensions across your team. This improves code consistency and makes it easier to help each other with setup issues."
    },
    {
      icon: "⚡",
      title: "Performance Monitoring",
      description: "Use VS Code's built-in performance monitor (Help > Show Running Extensions) to identify extensions that slow down your editor."
    },
    {
      icon: "🔐",
      title: "Security Awareness",
      description: "Only install extensions from trusted publishers. Review permissions and consider the security implications of extensions that access your code."
    },
    {
      icon: "📱",
      title: "Cross-Platform Setup",
      description: "Test your extension setup across different operating systems if you work on multiple platforms. Some extensions behave differently on Mac, Windows, and Linux."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Floating Code Symbols */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {floatingCodes.map((code, index) => (
          <motion.div
            key={index}
            className="absolute text-3xl font-mono text-blue-400/30"
            style={{
              left: `${code.left}%`,
              top: `${code.top}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 8, -8, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.7,
              ease: "easeInOut",
            }}
          >
            {code.symbol}
          </motion.div>
        ))}
      </div>

      {/* Code Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-purple-400/20"
            style={{
              left: `${(index * 8.3) % 100}%`,
              top: `${(index * 6.7) % 100}%`,
            }}
            animate={{
              y: [windowHeight, -100],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              delay: index * 1.5,
              ease: "linear",
            }}
          >
            {index % 4 === 0 ? "import {}" : index % 4 === 1 ? "export default" : index % 4 === 2 ? "const arrow = () =>" : "function()"}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-20 pt-20 bg-gradient-to-br from-blue-600/10 to-purple-600/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider mb-8 shadow-2xl shadow-blue-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Productivity Tools
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
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              VS Code
            </span>
            <br />
            <span className="text-white">Extensions That Will Save You Hours</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-lg">
                SM
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold">Sarah Martinez</h4>
                <p className="text-white/70 text-sm">Frontend Developer & VS Code Expert</p>
              </div>
            </motion.div>

            <motion.div
              className="text-white/80 font-medium"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              ⏱️ 8 min read
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {["⚡", "🛠️", "🎯", "🚀"].map((icon, index) => (
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
            Visual Studio Code has revolutionized how developers write code, but its true power lies in its extensibility. The right extensions can transform your coding workflow from tedious to seamless, automating repetitive tasks and providing intelligent assistance that can save you hours every week.
          </p>
          <p className="text-xl leading-relaxed text-white/90">
            After years of fine-tuning my VS Code setup and helping dozens of developers optimize their workflows, I've discovered the extensions that make the biggest impact on productivity. These aren't just nice-to-have tools—they're game-changers that will fundamentally improve how you code.
          </p>
        </motion.section>

        {/* Why Extensions Matter */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💡
            </motion.span>
            Why Extensions Matter
          </h2>

          <div className="space-y-8">
            {productivityBoosts.map((boost: ProductivityBoost, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-blue-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{boost.icon}</span>
                  <h3 className="text-2xl font-bold text-blue-400">{boost.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{boost.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Essential Productivity Extensions */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              🛠️
            </motion.span>
            Essential Productivity Extensions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {essentialExtensions.map((extension: Extension, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{extension.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{extension.title}</h3>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {extension.category}
                    </span>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed mb-6">{extension.description}</p>
                
                {extension.benefits.length > 0 && (
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-3">{extension.benefitTitle}</h4>
                    <ul className="space-y-2">
                      {extension.benefits.map((benefit: string, bIndex: number) => (
                        <li key={bIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/80 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Advanced Workflow Extensions */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              🚀
            </motion.span>
            Advanced Workflow Extensions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {advancedExtensions.map((extension: Extension, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-indigo-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{extension.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-2">{extension.title}</h3>
                    <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                      {extension.category}
                    </span>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed mb-6">{extension.description}</p>
                
                <div>
                  <h4 className="text-indigo-400 font-semibold mb-3">{extension.benefitTitle}</h4>
                  <ul className="space-y-2">
                    {extension.benefits.map((benefit: string, bIndex: number) => (
                      <li key={bIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Setup Guide */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              ⚙️
            </motion.span>
            Setting Up Your Extension Workflow
          </h2>

          <div className="bg-black/30 border border-blue-500/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-8">⚙️ Quick Setup Guide</h3>

            <div className="space-y-8">
              {installSteps.map((step: InstallStep, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-lg font-bold text-blue-900 shadow-2xl shadow-blue-400/40 flex-shrink-0">
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-400 mb-3">{step.title}</h4>
                    <p className="text-white/90 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Configuration Examples */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
              💻
            </motion.span>
            Configuration Examples
          </h2>

          <div className="space-y-8">
            {/* Settings.json Example */}
            <div className="bg-black/50 border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden group">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="flex justify-between items-center mb-4 pb-3 border-b border-blue-500/30">
                <span className="text-blue-400 font-semibold">settings.json - Optimal Configuration</span>
                <button className="text-blue-300 hover:text-blue-200 text-sm">Copy</button>
              </div>

              <pre className="text-white/90 leading-relaxed overflow-x-auto text-sm">
                <code>{`{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "path-intellisense.autoSlashAfterDirectory": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "git.enableSmartCommit": true
}`}</code>
              </pre>
            </div>

            {/* Extensions.json Example */}
            <div className="bg-black/50 border border-purple-500/30 rounded-2xl p-6 relative overflow-hidden group">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="flex justify-between items-center mb-4 pb-3 border-b border-purple-500/30">
                <span className="text-purple-400 font-semibold">extensions.json - Team Recommendations</span>
                <button className="text-purple-300 hover:text-purple-200 text-sm">Copy</button>
              </div>

              <pre className="text-white/90 leading-relaxed overflow-x-auto text-sm">
                <code>{`{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "github.copilot",
    "eamodio.gitlens",
    "christian-kohler.path-intellisense",
    "rangav.vscode-thunder-client",
    "ritwickdey.liveserver"
  ]
}`}</code>
              </pre>
            </div>
          </div>
        </motion.section>

        {/* Productivity Metrics */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
            >
              📊
            </motion.span>
            Productivity Metrics
          </h2>

          <div className="bg-white/5 border border-green-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-green-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">📊</span>
              <h3 className="text-2xl font-bold text-green-400">Measurable Time Savings</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Based on developer surveys and time-tracking studies, the right VS Code extensions can save experienced developers 15-25% of their coding time. For a developer spending 6 hours daily coding, that's 1-1.5 hours saved every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productivityMetrics.map((metric: Extension, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-yellow-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{metric.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{metric.title}</h3>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                      {metric.category}
                    </span>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pro Extension Tips */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 3 }}
            >
              💡
            </motion.span>
            Pro Extension Tips
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proTips.map((tip: ProTip, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-cyan-500/20 rounded-xl p-6 hover:bg-white/8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h4 className="text-lg font-bold text-cyan-400 mb-3">{tip.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Building Your Extension Toolkit */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-4">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
            >
              🏗️
            </motion.span>
            Building Your Extension Toolkit
          </h2>

          <p className="text-xl leading-relaxed text-white/90 mb-8">
            The key to maximizing productivity with VS Code extensions isn't just installing every popular extension—it's curating a focused toolkit that matches your specific workflow and development style. Start with the essentials, measure their impact, and gradually add specialized extensions as your needs evolve.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: "📈",
                title: "Progressive Enhancement",
                description: "Begin with formatting and linting extensions that provide immediate value. Add AI assistance and advanced git tools as you become comfortable. Finally, incorporate specialized extensions for your specific tech stack and workflow requirements."
              },
              {
                icon: "🎯", 
                title: "Quality Over Quantity",
                description: "A well-configured set of 10-15 extensions will serve you better than 50+ random installations. Focus on extensions that solve real problems in your daily workflow rather than adding features you might never use."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-emerald-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-2xl font-bold text-emerald-400">{item.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12 rounded-3xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              These extensions represent years of community refinement and developer feedback. Start with the essentials and watch your coding efficiency soar.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🛠️</div>
                <h4 className="text-lg font-bold mb-3">More Dev Tools</h4>
                <p className="text-sm opacity-90">Discover additional development tools that complement your VS Code setup.</p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-lg font-bold mb-3">Master VS Code</h4>
                <p className="text-sm opacity-90">Take your VS Code skills to the next level with comprehensive training.</p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-lg font-bold mb-3">Join Community</h4>
                <p className="text-sm opacity-90">Connect with other developers and share your favorite extensions and setups.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}