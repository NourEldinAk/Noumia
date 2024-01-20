import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2023-08-10',
    token: import.meta.env.VITE_APP_SANITY_TOKEN,
  })

  const builder = imageUrlBuilder(client);

  export const urlFor = (source) => builder.image(source)
  