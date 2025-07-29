import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'haimt247', // find this in cms/sanity.config.ts
  dataset: 'production',
  apiVersion: '2023-07-28',
  useCdn: true,
})