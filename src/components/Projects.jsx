export default function Projects() {
  const projects = [
    {
      title: 'Realtime Collab Board',
      description: 'A multiplayer whiteboard with cursor presence and drawing sync using WebSockets.',
      tags: ['React', 'FastAPI', 'WebSockets'],
      link: '#',
    },
    {
      title: 'Headless Commerce Starter',
      description: 'Composable storefront starter with product search, cart, and checkout integrations.',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      link: '#',
    },
    {
      title: 'AI Content Toolkit',
      description: 'Batch generate & edit content with prompt templates, guards, and export flows.',
      tags: ['Python', 'OpenAI', 'ETL'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
          <p className="mt-3 text-gray-600">A few things I loved building recently.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all bg-white">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-950">{p.title}</h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-900 text-white">Demo</span>
              </div>
              <p className="mt-2 text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-gray-50" />
    </section>
  )
}
