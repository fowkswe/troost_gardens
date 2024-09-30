<template lang='pug'>
  .document
    h1.mb-5 A True Thing That Stays Secret
    .mb-5
      p Click to download:
        .mb-3
          a(href='/press-releases/a-true-thing-that-stays-secret/a-true-thing-that-stays-secret-price-list.pdf')
            h3 Price List
        .mb-3
          a(href='/press-releases/a-true-thing-that-stays-secret/a-true-thing-that-stays-secret-curatorial-statement.pdf')
            h3 Curatorial<br> Statement
</template>
<script lang='coffee'>
export default
  head:
      title: 'Troost Gardens - A True Thing That Stays Secret - Documents'
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
</script>
<style lang="sass" scoped>
a
  display: flex
  align-items: center
  justify-content: center
  width: 300px
  height: 300px
  border: 1px solid #ff5722
  border-radius: 25px
  &:hover
    background: #ff5722
    color: white
</style>
