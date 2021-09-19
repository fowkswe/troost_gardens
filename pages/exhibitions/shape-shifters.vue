<template lang='pug'>
.container
  .exhibition
    Header
    .hero
      .information
        h1 Shape Shifters
        h2 December 19, 2020 -<br>January 16th 2021
      .image
      img(src='~/static/images/2-l-to-r-dylan-sanchez-cesar-lopez-2000.jpg')
      .hero_footer.d-flex.justify-content-between
        .controls.d-flex.align-items-center
          LeftArrow.mr-2
          RightArrow.mr-2
          .indicator 1 of 56
        .caption R: Dyl Sanchez, L: Cesar Lopez
    .content
      b-row
        b-col.information(cols='3')
          h3 Curated by:
          a(href='https://www.instagram.com/lodger_art' target='_blank')
            InstagramLogo.instagram
            | lodger_art
          
          h3 Works by:
          .mb-4
            | Dyl Sanchez
            br
            a(href='https://www.instagram.com/baba_gan0ush' target='_blank')
              InstagramLogo.instagram
              | baba_gan0ush
          .mb-4
            | Kylie McConnell
            br
            a(href='https://www.instagram.com/garbage.human' target='_blank') 
              InstagramLogo.instagram
              | garbage.human
          .mb-4
            | Cesar Lopez 
            br
            a(href='https://www.instagram.com/youngbauhaus' target='_blank')
              InstagramLogo.instagram
              | youngbauhaus
          
          .row.mb-4.mb-md-1
            
            .col-md-5 Cesar Lopez
            .col-md-7
              a(href='https://www.instagram.com/youngbauhaus' target='_blank')
                InstagramLogo.instagram
                | youngbauhaus
          .row.mb-4.mb-md-1
            .col-md-5 Kylie McConnell
            .col-md-7
              a(href='https://www.instagram.com/garbage.human' target='_blank') 
                InstagramLogo.instagram
                | garbage.human
          .row.mb-4.mb-md-1
            .col-md-5 Dyl Sanchez
            .col-md-7
              a(href='https://www.instagram.com/baba_gan0ush' target='_blank')
                InstagramLogo.instagram
                | baba_gan0ush
        b-col(cols='9')
          p Shape Shifters was a curatorial installation by the nomadic gallery project, Lodger Arts, run by Charlotte Street fellow Craig Deppen Auge.
          p  Utilizing the outdated office renovation from decades ago that was in place when Troost Gardens aquired the building, Deppen Auge showcased the work of 3 up and coming Kansas City artists, spanning a warren of small, interconnected rooms.
  
</template>
<script lang='coffee'>
import Header from '~/components/Header'
import InstagramLogo from '~/components/InstagramLogo'
import RightArrow from '~/components/graphics/RightArrow'
import LeftArrow from '~/components/graphics/LeftArrow'
export default
  components: { Header, InstagramLogo, RightArrow, LeftArrow }
  head:
    title: 'Troost Gardens'
    meta: [
      {
        hid: 'description'
        name: 'description'
        content: 'Troost Gardens is an Art and Design gallery located on 7323 Troost KCMO 64131'
      }
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.troostgardens.com/_nuxt/img/515ba8c.jpg'
      }
    ]
</script>
<style lang='sass' scoped>
  h3
    font-weight: 400
    text-decoration: underline
    /* text-transform: uppercase */
    margin-bottom: 10px
  .hero
    position: relative
    margin-bottom: 30px
    .information
      position: absolute
      top: 60%
      left: 10%
    .image
      position: absolute
    img
      width: 100%
    h1
      font-style: italic
      text-transform: uppercase
      font-weight: 500
      letter-spacing: 8px
    h2
      font: 100 24px Roboto
      line-height: 28px
    .hero_footer
      margin-top: 10px
      font-size: 16px
      color: #773AA865
      letter-spacing: 1.2px
      svg
        width: 16px
    
</style>
