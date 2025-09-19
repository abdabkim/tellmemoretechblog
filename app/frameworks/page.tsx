import Link from "next/link"

export default function FrameworksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Frontend Frameworks
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose your weapon wisely. Every framework has its strengths, and we'll help you find the perfect match for
            your next project.
          </p>
        </div>
      </section>

      {/* Framework Showcase */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* React Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">⚛️</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">React</h3>
                  <div className="text-blue-600 font-medium">The library that started it all</div>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                React revolutionized how we think about UI components. With its virtual DOM and massive ecosystem, it's
                the go-to choice for everything from startups to Fortune 500 companies.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Huge Community
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">JSX Syntax</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Virtual DOM
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Flexible</span>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/articles/reactexplore"
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors"
                >
                  Explore React
                </Link>
                <button className="flex-1 bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Compare
                </button>
              </div>
            </div>

            {/* Vue Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-green-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">💚</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Vue.js</h3>
                  <div className="text-green-600 font-medium">The progressive framework</div>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Vue strikes the perfect balance between simplicity and power. Its gentle learning curve and excellent
                documentation make it a favorite among developers.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Easy to Learn
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Great Docs
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Two-way Binding
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Progressive
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/articles/vueexplore"
                  className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-green-700 transition-colors"
                >
                  Explore Vue
                </Link>
                <button className="flex-1 bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Compare
                </button>
              </div>
            </div>

            {/* Angular Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-red-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🅰️</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Angular</h3>
                  <div className="text-red-600 font-medium">The full-featured framework</div>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Angular is the Swiss Army knife of frameworks. Built by Google, it comes with everything you need out of
                the box: routing, forms, HTTP client, testing tools.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  Full-Featured
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  Enterprise Ready
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  Google Backed
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/articles/angularexplore" className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Explore Angular
                </Link>
                <button className="flex-1 bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Compare
                </button>
              </div>
            </div>

            {/* Svelte Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-orange-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Svelte</h3>
                  <div className="text-orange-600 font-medium">The compiler-first approach</div>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Svelte flips the script entirely. Instead of doing the work in the browser, it compiles your components
                at build time. The result? Blazing fast apps.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  No Runtime
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  Small Bundles
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  Fast Performance
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  Simple Syntax
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/articles/svelteexplore"
                  className="flex-1 bg-orange-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-orange-700 transition-colors"
                >
                  Explore Svelte
                </Link>
                <button className="flex-1 bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Compare
                </button>
              </div>
            </div>

            {/* Next.js Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-400">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">▲</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Next.js</h3>
                  <div className="text-slate-600 font-medium">React, but production-ready</div>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Next.js takes React and adds all the production essentials: server-side rendering, static site
                generation, API routes, and automatic code splitting.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">SSR/SSG</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  API Routes
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Zero Config
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Vercel Ready
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/articles/nextjsexplore" className="flex-1 bg-slate-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-slate-900 transition-colors">
                  Explore Next.js
                </Link>
                <button className="flex-1 bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Compare
                </button>
              </div>
            </div>

            {/* Nuxt Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-emerald-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">💎</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Nuxt.js</h3>
                  <div className="text-emerald-600 font-medium">Vue.js on steroids</div>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Nuxt is to Vue what Next is to React. It adds server-side rendering, static site generation, and a
                modular architecture that makes building Vue applications a breeze.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  Vue Based
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  SSR/SSG
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  Modular
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  Auto Routing
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/articles/nuxtjsexplore" className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                  Explore Nuxt.js
                </Link>
                <button className="flex-1 bg-slate-100 text-slate-700 py-3 px-4 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Making the Right Choice</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every framework excels in different scenarios. Here's how to think about choosing the right tool for your
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <h4 className="text-2xl font-bold text-slate-800 mb-4">🚀 Starting Your First Project?</h4>
              <p className="text-slate-600 leading-relaxed">
                Vue.js offers the gentlest learning curve with excellent documentation. You can start small and scale up
                as you learn. React is also beginner-friendly with tons of tutorials available.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <h4 className="text-2xl font-bold text-slate-800 mb-4">🏢 Building Enterprise Apps?</h4>
              <p className="text-slate-600 leading-relaxed">
                Angular provides structure and conventions that help large teams stay organized. Its full-featured
                approach means fewer decisions about which libraries to use for common tasks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
              <h4 className="text-2xl font-bold text-slate-800 mb-4">⚡ Need Maximum Performance?</h4>
              <p className="text-slate-600 leading-relaxed">
                Svelte's compile-time optimizations deliver the smallest bundle sizes and fastest runtime performance.
                Perfect for applications where every millisecond matters.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <h4 className="text-2xl font-bold text-slate-800 mb-4">🌐 Building for SEO?</h4>
              <p className="text-slate-600 leading-relaxed">
                Next.js and Nuxt.js excel at server-side rendering and static site generation, giving you the SEO
                benefits of traditional websites with the interactivity of SPAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Dive Deeper?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get our comprehensive framework comparison guide and weekly tips on choosing the right tools for your
            projects.
          </p>
          <Link
            href="/getting-started"
            className="inline-block bg-white text-slate-800 py-4 px-8 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
          >
            Get the Framework Guide
          </Link>
        </div>
      </section>
    </div>
  )
}
