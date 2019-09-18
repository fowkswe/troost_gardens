<template lang='pug'>
  .item_show
    .d-flex
      .image_container.d-flex.justify-content-center.align-items-center
        //- VuePictureSwipe(:items='images')
        img(src='~assets/philomene_s.jpg')
      .item_description
        h1  V. White Landscape
        h2 Philomene Bennett
        .description : ''
        .provenance : ''
        .condition_notes Aged paint visible in images
        .dimensions 70" x 36"
        .dimensions_metric 190cm x 85cm
        .medium Oil on canvas
        .year_created 1970
        .created_period : ''
        button.button Inquire
</template>
<script lang='coffee'>
# import VuePictureSwipe from 'vue-picture-swipe'

export default
  # components: { VuePictureSwipe }
  data: ->
    images: []
    # images: [
    #   { src: '/_nuxt/assets/philomene.jpg', thumbnail: '/_nuxt/assets/philomene_t.jpg', w: 4032, h: 3024 },
    #   { src: '/_nuxt/assets/kitchen.jpg', thumbnail: '/_nuxt/assets/kitchen_t.jpg', w: 1600, h: 1067, title: 'Will be used for caption' },
    #   { src: '/_nuxt/assets/calder.jpg', thumbnail: '/_nuxt/assets/calder_t.jpg', w: 1600, h: 1149 }
    #   ]
    # images: [
    #   { src: 'https://placeimg.com/1640/1480/any',thumbnail: 'https://placeimg.com/400/300/any', w: 1640,h: 1480, title: 'Will be used for caption' },
    #   { src: 'https://placeimg.com/1640/1480/any',thumbnail: 'https://placeimg.com/400/300/tech', w: 1640,h: 1480 }
    #   ]
</script>
<style lang='sass' scoped>
.image_container
  min-height: calc(100vh - 70px)
.item_description
  margin-left: 10vw
.item_show
  img
    max-width: 80%
</style>
