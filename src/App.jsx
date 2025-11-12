import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Hi, I’m a web developer who loves playful, interactive interfaces.</h2>
              <p className="mt-4 text-gray-600">I care about clean design, thoughtful motion, and robust engineering. I partner with teams to ship polished products—turning ideas into resilient, scalable experiences.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100">Frontend Engineering</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded border border-purple-100">Design Systems</span>
                <span className="text-xs bg-pink-50 text-pink-700 px-2 py-1 rounded border border-pink-100">Developer Experience</span>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                <p className="text-sm text-gray-500">Available for</p>
                <p className="mt-1 text-lg font-semibold">Freelance and full-time roles</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg border border-gray-200 p-3">
                    <p className="font-semibold">Remote</p>
                    <p className="text-gray-600">Worldwide</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-3">
                    <p className="font-semibold">Timezone</p>
                    <p className="text-gray-600">Flexible</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-3">
                    <p className="font-semibold">Response</p>
                    <p className="text-gray-600">Within 24h</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-3">
                    <p className="font-semibold">Languages</p>
                    <p className="text-gray-600">EN + others</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</footer>
    </div>
  )
}

export default App
