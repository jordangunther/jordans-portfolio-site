//api/projects.ts
import { useEffect, useState } from 'react'

interface Project {
  _id: string
  title: string
  description: string
  link: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then(setProjects)
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p._id}>
            <a href={p.link} className="text-blue-600 underline">{p.title}</a>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}