<template lang="pug">
.sworks
  .mb-5
    b-button(:to="'/sworks'" variant='outline-primary')
      BIconArrowLeft.mr-2
      | Back to Artworks
  b-row
    b-col(cols=12 md=4)
      .mb-5
        h1 {{ artwork.title }}
        h2 {{ artistName }}
        a(:href='artwork.artist.website' target='_blank' v-if='artwork.artist && artwork.artist.website') View Artists Website
      .mb-3
        p {{ artwork.medium.title }}
        p {{ artwork.dimensions }}
        p {{ artwork.description }}
        h3 ${{ artwork.price }}
      b-button.mb-3(:href='mailto' variant='primary')
        | Inquire
    b-col(cols=12 md=8)
      b-img.w-100(:src='urlFor(artwork.image)')
</template>
<script lang="js">
import { BIconArrowLeft } from 'bootstrap-vue'
import { client, urlFor } from '../../lib/sanity.ts'

export default {
  components: { BIconArrowLeft },
  head () {
    return {
      title: this.artwork.title,
      meta: [
        { property: 'og:title', content: this.artwork.title },
        { hid: 'description', name: 'description', content: this.artwork.description },
        { property: 'og:description', content: this.artwork.description },
        { property: 'og:image', content: urlFor(this.artwork.image) },
        { property: 'og:url', content: `https://www.troostgardens.com${this.$route.path}` },
        { property: 'og:site_name', content: 'Troost Gardens - Kansas City Art' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.artwork.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.artwork.description },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:image', name: 'twitter:image', content: urlFor(this.artwork.image) }
      ]
    }
  },
  computed: {
    mailto () {
      return `mailto:hi@troostgardens.com?subject=I would like to know more about ${this.artistName} - ${this.artwork.title}`
    },
    artistName () {
      return this.artwork.artist ? this.artwork.artist?.full_name : 'Unknown Artist'
    }
  },
  async asyncData (context) {
    const query = "*[slug.current == '" + context.route.params.id +
                  "']{_id,slug,title,dimensions,description,medium->{title},price,artist->{full_name, website},image}[0]"

    const artwork = await client.fetch(query)

    return { artwork }
  },
  methods: {
    urlFor
  }
}
</script>
<style lang='sass' scoped>
ximg
  width: 100%
</style>
