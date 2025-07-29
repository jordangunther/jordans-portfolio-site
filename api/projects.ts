// api/projects.ts
import { createClient } from '@sanity/client'
import { config } from 'dotenv'

config()

const client = createClient({
  projectId: 'haimt247',
  dataset: 'production',
  apiVersion: '2023-07-28',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

export async function getProjects() {
  const query = `*[_type == "project"]{_id, title, description, link}`
  return await client.fetch(query)
}