import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'gwsyyifo',
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production'
})

export async function getArtworks () {
  const artworks = await client.fetch('*[_type == "artwork"]')
  return artworks
}

const builder = imageUrlBuilder(client)

export function urlFor (source) {
  return builder.image(source)
}
