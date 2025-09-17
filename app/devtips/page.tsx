"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TipCard {
  category: string
  title: string
  content: string
  code: string
  language: string
  practicalNote: string
  tags: string[]
}

interface QuickTip {
  title: string
  description: string
}

interface CategoryCard {
  icon: string
  title: string
  description: string
}

export default function DevTipsPage(): JSX.Element {
  const [scrollY, setScrollY] = useState<number>(0)
  const [windowHeight, setWindowHeight] = useState<number>(800)
  const [floatingSymbols] = useState(() => 
    ["{ }", "[ ]", "< >", "( )", "=>", "&&", "||", "??", "!!", "+="].map((symbol, index) => ({
      symbol,
      left: (index * 9.2) % 100,
      top: (index * 11.3) % 100,
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

  const tips: TipCard[] = [
    {
      category: "JavaScript",
      title: "Use Optional Chaining for Safer Object Access",
      content: "Stop defensive coding with lengthy null checks. Optional chaining (?.) safely accesses nested object properties without throwing errors when intermediate values are null or undefined.",
      code: `// Instead of this defensive approach
if (user && user.profile && user.profile.contact) {
    console.log(user.profile.contact.email);
}

// Use optional chaining
console.log(user?.profile?.contact?.email);

// Works with arrays and function calls too
const firstPost = user?.posts?.[0]?.title;
const result = api?.getData?.();`,
      language: "javascript",
      practicalNote: "This is especially useful when working with API responses where data structure might vary or when properties might be missing in different user states.",
      tags: ["ES2020", "Safety", "Clean Code"]
    },
    {
      category: "CSS",
      title: "Master CSS Grid for Complex Layouts",
      content: "CSS Grid isn't just for simple grids. Use named grid areas and implicit grids to create complex, responsive layouts with minimal code.",
      code: `.dashboard {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 250px 1fr 200px;
    min-height: 100vh;
    gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Responsive adjustment */
@media (max-width: 768px) {
    .dashboard {
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
}`,
      language: "css",
      practicalNote: "Named grid areas make your layout intentions crystal clear and easy to modify. They're much more maintainable than numeric line references.",
      tags: ["Layout", "Responsive", "Modern CSS"]
    },
    {
      category: "Performance",
      title: "Debounce Expensive Operations",
      content: "Prevent performance issues from rapid user input by debouncing expensive operations like API calls, DOM manipulations, or complex calculations.",
      code: `function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Debounce search API calls
const debouncedSearch = debounce(async (query) => {
    const results = await fetch(\`/api/search?q=\${query}\`);
    displayResults(await results.json());
}, 300);

// Use on input events
searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});

// Debounce resize events
const debouncedResize = debounce(() => {
    calculateLayout();
    renderCharts();
}, 150);

window.addEventListener('resize', debouncedResize);`,
      language: "javascript",
      practicalNote: "Perfect for search-as-you-type features, window resize handlers, and any user input that triggers expensive operations. Saves bandwidth and improves UX.",
      tags: ["Optimization", "UX", "API Calls"]
    },
    {
      category: "React",
      title: "Custom Hooks for Logic Reuse",
      content: "Extract complex stateful logic into custom hooks to share functionality across components while keeping them clean and focused.",
      code: `// Custom hook for API data fetching
function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

// Use in any component
function UserProfile({ userId }) {
    const { data: user, loading, error } = useApi(\`/api/users/\${userId}\`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return <div>Hello, {user.name}!</div>;
}`,
      language: "jsx",
      practicalNote: "Custom hooks can encapsulate any stateful logic: form handling, local storage, timers, websocket connections, or complex state machines.",
      tags: ["React", "Reusability", "Clean Code"]
    },
    {
      category: "TypeScript",
      title: "Utility Types for Better Type Safety",
      content: "Leverage TypeScript's built-in utility types to create more flexible and maintainable type definitions without repetition.",
      code: `interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    isActive: boolean;
}

// Create types for different use cases
type UserCreate = Omit<User, 'id' | 'createdAt'>;
type UserUpdate = Partial<Pick<User, 'name' | 'email' | 'isActive'>>;
type UserPublic = Omit<User, 'password'>;
type UserResponse = Required<Pick<User, 'id' | 'name' | 'email'>>;

// Function signatures become clear
function createUser(userData: UserCreate): Promise<User> { }
function updateUser(id: string, updates: UserUpdate): Promise<User> { }
function getUserProfile(id: string): Promise<UserPublic> { }

// Advanced utility type example
type APIResponse<T> = {
    data: T;
    status: 'success' | 'error';
    message?: string;
};

type UsersResponse = APIResponse<UserPublic[]>;
type UserResponse = APIResponse<UserPublic>;`,
      language: "typescript",
      practicalNote: "Common utility types: Partial, Required, Pick, Omit, Record, Exclude, Extract. Master these to avoid repeating type definitions.",
      tags: ["TypeScript", "Type Safety", "DRY"]
    },
    {
      category: "Testing",
      title: "Test Behavior, Not Implementation",
      content: "Write tests that verify what your code does (behavior) rather than how it does it (implementation). This makes tests more valuable and less brittle.",
      code: `// ❌ Testing implementation details
test('should call setLoading with true then false', () => {
    const setLoading = jest.fn();
    const component = render(<UserProfile setLoading={setLoading} />);
    
    expect(setLoading).toHaveBeenCalledWith(true);
    expect(setLoading).toHaveBeenCalledWith(false);
});

// ✅ Testing behavior
test('should display user name after loading', async () => {
    const mockUser = { name: 'John Doe', email: 'john@example.com' };
    jest.spyOn(api, 'getUser').mockResolvedValue(mockUser);
    
    render(<UserProfile userId="123" />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    const userName = await screen.findByText('John Doe');
    expect(userName).toBeInTheDocument();
    
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});`,
      language: "javascript",
      practicalNote: "Focus on testing the user experience: what they see, what happens when they interact, and what the final outcome should be.",
      tags: ["Testing", "Quality", "Maintainability"]
    }
  ]

  const quickTips: QuickTip[] = [
    {
      title: "Use console.table()",
      description: "Display arrays and objects in a clean table format instead of console.log() for better debugging visualization."
    },
    {
      title: "Keyboard Shortcuts",
      description: "Master your editor's multi-cursor editing, quick file switching, and refactoring shortcuts to code 3x faster."
    },
    {
      title: "CSS Variables for Theming",
      description: "Use CSS custom properties (--color-primary) for consistent theming and easy dark mode implementation."
    },
    {
      title: "npm Scripts for Automation",
      description: "Set up package.json scripts for common tasks like linting, testing, and deployment to standardize workflows."
    },
    {
      title: "Error Boundaries in React",
      description: "Wrap components in error boundaries to gracefully handle JavaScript errors and provide fallback UI."
    },
    {
      title: "HTTP Status Code Shortcuts",
      description: "Remember: 2xx success, 3xx redirect, 4xx client error, 5xx server error. Know common codes: 200, 201, 400, 401, 403, 404, 500."
    }
  ]

  const categories: CategoryCard[] = [
    {
      icon: "⚡",
      title: "Performance Tips",
      description: "Optimize loading times, reduce bundle sizes, and improve runtime performance with proven techniques."
    },
    {
      icon: "🔧",
      title: "Development Tools",
      description: "Master your development environment with IDE shortcuts, debugging techniques, and productivity hacks."
    },
    {
      icon: "🚀",
      title: "Best Practices",
      description: "Industry-standard approaches to code organization, testing, and maintainable software architecture."
    },
    {
      icon: "🎯",
      title: "Quick Wins",
      description: "Small changes that make a big difference in your daily development workflow and code quality."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Floating Code Symbols */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {floatingSymbols.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-3xl font-mono text-blue-400/20"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      {/* Binary Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-green-400/20"
            style={{
              left: `${(index * 8.3) % 100}%`,
              top: `${(index * 6.7) % 100}%`,
            }}
            animate={{
              y: [windowHeight, -100],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: index * 1.2,
              ease: "linear",
            }}
          >
            {Math.random() > 0.5 ? "1010" : "0101"}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-20 pt-20 bg-gradient-to-br from-blue-600/10 to-indigo-600/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider mb-8 shadow-2xl shadow-blue-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Developer Resources
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_200%] leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              backgroundPosition: `${scrollY * 0.1}% 50%`,
            }}
          >
            Free Developer Tips
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Practical insights, code snippets, and best practices to level up your development skills
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center font-bold text-sm">
                DT
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold">Dev Tips Team</h4>
                <p className="text-white/70 text-sm">Curated by Senior Developers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-20">
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-8 md:gap-12">
            {tips.map((tip: TipCard, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-blue-500/20 rounded-2xl p-8 hover:bg-white/8 hover:border-blue-500/40 transition-all duration-400 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tip.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-blue-400 mb-4">{tip.title}</h3>
                
                <p className="text-white/90 leading-relaxed mb-6">{tip.content}</p>

                <div className="bg-black/50 border border-blue-500/30 rounded-xl p-6 mb-6 relative overflow-hidden group/code">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover/code:translate-x-full transition-transform duration-1000" />

                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-blue-500/30">
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">{tip.language}</span>
                    <button className="text-blue-300 hover:text-blue-200 text-sm">Copy</button>
                  </div>

                  <pre className="text-white/90 leading-relaxed overflow-x-auto text-sm">
                    <code>{tip.code}</code>
                  </pre>
                </div>

                <div className="bg-indigo-500/10 border-l-4 border-indigo-400 p-4 rounded mb-6">
                  <p className="text-indigo-300 text-sm font-medium">💡 {tip.practicalNote}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tip.tags.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/30 hover:bg-blue-400/30 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick Tips Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Quick Development Wins
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Small changes that make a big difference in your daily development workflow
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTips.map((tip: QuickTip, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-indigo-500/20 rounded-xl p-6 hover:bg-white/8 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-indigo-400 mb-3">{tip.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Categories Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Tip Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category: CategoryCard, index: number) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-purple-500/20 rounded-xl p-6 text-center hover:bg-white/8 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-purple-400 mb-3">{category.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-12 rounded-3xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Level Up Your Development Skills</h2>
            <p className="text-xl mb-8 opacity-90">
              Bookmark this page and check back regularly for fresh tips and techniques from the developer community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                Practice on GitHub
              </a>
              <a
                href="https://stackoverflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
              >
                Join Community
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}