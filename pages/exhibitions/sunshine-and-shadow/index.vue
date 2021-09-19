<template lang='pug'>
  .sunshine-and-shadow
    .content
      .mb-5
        
        b-row.images
          b-col(cols='12' md='6')
            img(src='/images/sunshine-and-shadow/laura-berman-somata-9.jpg')
            .caption 
              i Somata 9 
              | Laura Berman - 2021
          b-col(cols='12' md='6')
            img(src='/images/sunshine-and-shadow/lily-meuller-reflection.jpg')
            .caption 
              i Reflection 
              | Lily Meuller - 2021
      b-row
        b-col(cols='12' md='4')
          .mb-5
            h3 SUNSHINE AND SHADOW
            h3 Textiles in Contempoary Art
            h4 
              | September 18, 2021 - 
              br 
              |  October 9, 2021
          .mb-5
            div Works by:
            .mb-4
              div Laura Berman
              a(href='https://www.instagram.com/bermanlaura/' target='_blank')
                InstagramLogo.instagram
                | bermanlaura
            .mb-4
              div Kim Eichler-Messmer
              a(href='https://www.instagram.com/kimemquilts/' target='_blank')
                InstagramLogo.instagram
                | kimemquilts
            .mb-4
              div Lily Mueller
              a(href='https://www.instagram.com/lilymariemueller/' target='_blank') 
                InstagramLogo.instagram
                | lilymariemueller
            .mb-4
              div Melissa Paré
              a(href='https://www.instagram.com/moraye_/' target='_blank') 
                InstagramLogo.instagram
                | moraye_
            .mb-4
              div Gerry Trilling
              a(href='https://www.instagram.com/trillinggerry/' target='_blank') 
                InstagramLogo.instagram
                | trillinggerry

        b-col(cols='12' md='8')
          .mb-5
            p Troost Gardens is pleased to present our second exhibition, featuring five contemporary midwestern artists - Laura Berman, Kim Eichler-Messmer, Lily Mueller, Melissa Paré and Gerry Trilling. The title of the show “Sunshine and Shadow” is taken from a popular American quilt pattern that was used starting in the late 19th century by the Amish community. It evokes a history of innovative, female driven, fiber based, American abstraction as well as an imagery that is connected to color, light & darkness, and nature. This group of artists investigates the language of textiles and fiber to create dynamic abstractions, each drawing from diverse source material such as a family member’s heart beat, psychedelic music, modern architecture, antique jewelry, weather patterns, and plant life. Although the works are made in diverse media including painted silk, block printing, crochet and hand and machine sewing, they are tied together through an improvisational approach and intuitive sensibility that is well paired with each of their chosen media. Together, the works reveal the exciting possibilities that a contemporary investigation of textiles has to offer. 
</template>
<script lang='coffee'>
import InstagramLogo from '~/components/InstagramLogo'
export default
  components: { InstagramLogo }
  mounted: ->
</script>
<style lang='sass' scoped>
div[class^='col']
  display: flex
  flex-direction: column
  justify-content: space-between
h3 
  text-transform: none
</style>
