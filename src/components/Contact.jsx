import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! I will get back to you soon.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Get in touch</h2>
          <p className="mt-3 text-gray-600">Have a project in mind? Let’s talk.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 sm:max-w-xl">
          <input name="name" required placeholder="Your name" className="w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <input name="email" type="email" required placeholder="Your email" className="w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <textarea name="message" required placeholder="Tell me about your project" rows="5" className="w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-gray-800 transition-colors">
            Send Message
          </button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>
      </div>
    </section>
  )
}
