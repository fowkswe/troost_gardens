<template lang='pug'>
  .page.mdw_fair
    section
      b-row
        b-col(cols='4')
          h1 
            a(href='https://www.mdwfair.com/assembly' target='_blank') MDW Fair
          
          p 
            | September 9, 2022 -
            br
            | September 11, 2022
          p 
            a(href='https://www.manacontemporary.com/visit/chicago/', target='_blank') Mana Contemporary, Chicago
          p 
            | 2233 S Throop Street <br>
            | Chicago, IL 60608
        b-col(cols='8')

    section
      b-row
        b-col(cols='4')
          section
            h6 Artists:
            .artist
              a(href='https://www.instagram.com/jonahcriswell/' target='_blank') 
                InstagramLogo.instagram
                | Jonah Chriswell 
            .artist
              a(href='https://www.instagram.com/mattern.baron/' target='_blank') 
                InstagramLogo.instagram
                | Baron Mattern 
            .artist
              a(href='https://www.instagram.com/bad_drawng/' target='_blank') 
                InstagramLogo.instagram
                | Jacob Everest 
            .artist Lee Lang 
            .artist Michael Rasco 
            .artist
              a(href='https://www.instagram.com/currychx/' target='_blank') 
                InstagramLogo.instagram
                | Celina Curry 
        b-col(cols='8')
          .swiper
            .swiper-slide Slide 1
            .swiper-slide Slide 2
            .swiper-slide Slide 3
            .swiper-slide Slide 4
          
</template>
<script lang='coffee'>
import InstagramLogo from '~/components/InstagramLogo'

export default
  components: { InstagramLogo }
  head: ->
    title: 'MDW Fair @ Mana Contemporary Chicago, IL'
  mounted: ->
    console.log('mounted');
    swiper = new this.$swiper('.swiper', 
      {
      direction: 'vertical',
      loop: true,
      })
  
</script>

<style lang='sass' scoped>
</style>
