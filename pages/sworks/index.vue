<template lang="pug">
.sworks_index
  h1 Artworks for sale
  b-row
    b-col(col=3 v-for="artwork in artworks" :key="artwork._id")
      router-link(:to="`/sworks/${artwork.slug}`")
        pre {{ artwork }}
        h2 {{artwork.title}}
        h3 {{artwork.artist.full_name}}
        img(:src='urlFor(artwork.image)')

</template>
<script lang="ts">
import { client, urlFor } from '../../lib/sanity.ts'

export default {
  async asyncData (context) {
    const artworks = await client.fetch("*[_type == 'artwork']{_id,slug,title,dimensions,medium,price,artist->{full_name},image}")

    return { artworks }
  },
  methods: {
    urlFor
  }
  // async setup () {
  //   const { data: artworks } = await client.fetch('*[_type == "artwork"]')
  //   console.log('artworks', artworks)

  //   // const { data: artworks } = useSanityFetcher('*[_type == "artwork"]{title,"imageUrl": image.asset->url}')
  //   return { artworks }
  // }
}
</script>
