<template lang='pug'>
  .troost_gardens
    b-container
      header
        nuxt-link(to='/')
          h1 Troost Gardens
      Nuxt
      footer
        b-row
          b-col(cols='12' md='6')
            .d-flex.flex-column.justify-content-between.h-100
              .d-flex
                h1.mr-4 TG
                p Troost Gardens is a project space based in <br>Kansas City, MO.
              .copy Unless otherwise specified, all Images &copy;{{year}} Troost Gardens
          b-col(cols='12' md='6').text-right
            .mb-3
              a(href='https://goo.gl/maps/gcTpQK8mbfhQEL1FA' target='_blank')
                | 7323 Troost
                br
                | KCMO 64131
            .contact
              a(href='https://www.instagram.com/troostgardens')
                InstagramLogo.instagram
                | troostgardens
              br
              a(href='mailto:hi@troostgardens.com') hi@troostgardens.com

          
</template>
<style>
</style>
<script lang='coffee'>
# script(async src="https://www.googletagmanager.com/gtag/js?id=G-2NTVJTCSJY")
# script
#   window.dataLayer = window.dataLayer || [];
#   function gtag(){dataLayer.push(arguments);}
#   gtag('js', new Date());
# 
#   gtag('config', 'G-2NTVJTCSJY');
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
.troost_gardens
  background: #e5e5e5
  padding-top: 45px
  padding-bottom: 45px
.container
  background: white
  padding: 35px 45px 45px 45px
header
  margin-bottom: 23px
  h1
    font-size: 45px !important
    margin: 0px
  a
    transition: text-shadow 0.3s ease
    text-shadow: 1px 1px 0 #ff684e, 2px 2px 0 yellow, 3px 3px 0 blue
    font-family: 'Turret Road', san-serif
    letter-spacing: 3.5px
    text-transform: uppercase
    text-decoration: none
    color: #333
    &:hover
      transition: text-shadow 0.3s ease
      text-shadow: -1px -1px 0 #ff684e, -2px -2px 0 yellow, -3px -3px 0 blue
      font-style: normal

footer
  margin-top: 160px
  p
    line-height: 1.3rem
  h1
    text-shadow: 1px 1px 0 #ff684e, 2px 2px 0 yellow, 3px 3px 0 blue
    font-family: 'Turret Road', san-serif
    letter-spacing: 3.5px
    text-transform: uppercase
    text-decoration: none
    color: #333
  .copy
    font-size: 12px
</style>
