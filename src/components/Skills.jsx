export default function Skills() {
  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'FastAPI', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Postgres/MongoDB', level: 'Proficient' },
    { name: 'Testing (Jest/Pytest)', level: 'Proficient' },
    { name: 'CI/CD', level: 'Proficient' },
  ]

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Skills</h2>
          <p className="mt-3 text-gray-600">Focused on shipping quality, accessible, performant web apps.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">{s.level}</p>
              <h3 className="mt-1 text-lg font-semibold">{s.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
