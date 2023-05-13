<template lang='pug'>
  .FortunesMoving
    h1.mb-5 Fortune's Moving
    .mb-5
      b-button(to='/press-releases/fortunes-moving/FortunesMoving-statement.pdf' target='_blank') Curatorial Statement
    .mb-5
      b-button(to='/press-releases/fortunes-moving/FortunesMoving-pricelist.pdf' target='_blank') Price List
</template>
<script lang='coffee'>
export default
  head:
      title: 'Troost Gardens - Fortune\'s Moving - Documents'
      meta: [
        {
          hid: 'description'
          name: 'description'
          content: 'Troost Gardens is an Art and Design gallery located on 7323 Troost KCMO 64131'
        }
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.troostgardens.com/_nuxt/image/f81437.jpg'
        }
      ]
  xmounted: ->
     location.href = '/press-releases/SongsSystemsStructures.pdf'
</script>
