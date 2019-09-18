<template lang='pug'>
  .index_page.d-flex.justify-content-center.align-items-center
    .image_container
      NuxtLink(to='/items/thing')
        img(src='~assets/philomene.jpg')
      .caption
        | V. White Landscape
        .whisper Philomene Bennett
</template>
<script lang='coffee'>
export default
  mounted: ->
    console.log 'hi'
</script>

<style lang='sass'>
  .index_page
    min-height: calc(100vh - 70px)
    .image_container
      position: relative
      width: 65%
      margin-bottom: 30vh
      img
        width: 100%
      .caption
        position: absolute
        background: rgba(255, 255, 255, 0.7)
        color: #333
        padding: 10px
        bottom: 10px
        right: 10px
        font-size: 20px
        font-family: Helvetica
        .whisper
          font-size: 13px
</style>
