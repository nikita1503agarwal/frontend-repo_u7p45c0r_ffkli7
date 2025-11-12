import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-700 bg-white/70 backdrop-blur px-3 py-1 rounded-full border border-white/40">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Portfolio • Web Developer
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight text-gray-900">
            Building delightful web experiences that feel fast and fun
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            I craft interactive, accessible, and performant products using modern web technologies.
            Explore selected work, skills, and how I can help bring your ideas to life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-gray-800 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/80 backdrop-blur text-gray-900 px-5 py-3 text-sm font-semibold shadow-sm border border-gray-200 hover:bg-white transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/80" />
    </section>
  )
}
