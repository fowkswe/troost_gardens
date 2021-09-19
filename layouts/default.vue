<template lang='pug'>
  .troost_gardens
    .container
      .bounding_box
        Header
        Nuxt
    footer
      .container
        .footer-box
          .d-flex.justify-content-between
            .contact 7323 Troost, KCMO 64131
            .copy All Images &copy;{{year}} Troost Gardens
            .insta
              a(href='https://www.instagram.com/troostgardens')
                InstagramLogo.instagram
                | troostgardens
</template>
<style>
</style>
<script lang='coffee'>
import Header from '~/components/Header'
import TroostGardensLogo from '~/components/TroostGardensLogo'
import InstagramLogo from '~/components/InstagramLogo'
export default
  components: { TroostGardensLogo, InstagramLogo, Header }
  computed: 
    year: ->
      new Date().getFullYear()
</script>
<style lang='sass' scoped>
.bounding_box
  background: white
  box-shadow: -10px 10px 2px #d2d2d270
  margin-top: 20px
  margin-bottom: 90px
  padding: 40px
  border-radius: 25px
.footer-box
  background: white
  box-shadow: -10px -10px 2px #d2d2d270
  font-size: 1.4rem
  padding: 40px
  border-radius: 25px 25px 0 0
  svg
    width: 30px

  
</style>
