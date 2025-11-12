import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl sm:text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          dev.portfolio
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" aria-label="Email" className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur-md">
          <nav className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" className="p-2 rounded-full hover:bg-black/5">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
