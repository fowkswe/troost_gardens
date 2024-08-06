<template lang="pug">
.sworks_index
  h1 Artworks for sale
  b-row
    b-col(cols=12 md=4 v-for="artwork in artworks" :key="artwork._id")
      router-link(:to="`/sworks/${artwork.slug.current}`")
        b-img.mb-2(:src='urlFor(artwork.image).width(400).url()')
        .d-flex.justify-content-between
          .info.mb-4
            h4 {{artwork.title}}
            h5 {{artistName(artwork)}}
          BIconArrowRight

</template>
<script lang="js">
import { BIconArrowRight } from 'bootstrap-vue'
import { client, urlFor } from '../../lib/sanity.ts'

export default {
  components: { BIconArrowRight },
  async asyncData (context) {
    const artworks = await client.fetch("*[_type == 'artwork']{_id,slug,title,dimensions,medium,price,artist->{full_name},image}")

    return { artworks }
  },
  methods: {
    urlFor,
    artistName (artwork) {
      return artwork.artist ? artwork.artist.full_name : 'Unknown Artist'
    }
  }
}
</script>
<style lang='sass' scoped>
img
  width: 100%
</style>
