<template lang='pug'>
  .troost_gardens
    b-container(fluid)
      header
        nuxt-link(to='/')
          h1 Troost Gardens
      Nuxt
    footer
      .container
        .footer-box
          b-row
            b-col(cols='12' md='4')
              a(href='https://goo.gl/maps/gcTpQK8mbfhQEL1FA' target='_blank').contact 7323 Troost, KCMO 64131
            b-col(cols='12' md='4')
              .copy All Images &copy;{{year}} Troost Gardens
            b-col(cols='12' md='4')
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
.footer-box
  font-size: 1.4rem
  svg
    width: 20px
  div[class^='col']
    margin-bottom: 20px
</style>
