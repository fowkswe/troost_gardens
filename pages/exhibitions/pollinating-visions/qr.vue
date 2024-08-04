<template lang='pug'>
  .document
    h1.mb-5 Pollinating Visions
    .mb-5
      b-button(to='/press-releases/pollinating-visions/pollinating-visions-statement-price-list.pdf' target='_blank') Curatorial Statement And Price List
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
  mounted: ->
     location.href = '/press-releases/pollinating-visions/pollinating-visions-statement-price-list.pdf'
</script>
