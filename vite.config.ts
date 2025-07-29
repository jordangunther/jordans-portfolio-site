import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getProjects } from './api/projects'
import { config } from 'dotenv'
import type { ServerResponse } from 'http'

config()

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'custom-api',
      configureServer(server) {
        server.middlewares.use('/api/projects', async (_req, res: ServerResponse) => {
          console.log('✅ [middleware] /api/projects was hit')
          const data = await getProjects()
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        })
      },
    },
  ],
})