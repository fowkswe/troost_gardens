<template lang='pug'>
  .page.sunshine-and-shadow
    .hero
      .mb-5
        b-row.images
          b-col(cols='12' md='6')
            nuxt-img(src='http://localhost:3000/uploads/image/image/28/swarm.jpg' fluid)
            .caption 
              i Swarm
              | Melissa Paré
          b-col(cols='12' md='6')
            b-img(src='/images/sunshine-and-shadow/lily-meuller-reflection.jpg' fluid)
            .caption 
              i Reflection 
              | Lily Meuller - 2021
      pre {{work}}
    section
      b-row
        b-col(cols='12' md='4')
          .mb-5
            h2.mb-4 
              | Sunshine and Shadow:
              .lowercase Textiles in Contempoary Art
            p 
              | September 18, 2021 - 
              br 
              |  October 9, 2021
          .mb-5
            h6 Works by:
            .row.mb-4.mb-md-1
              .col-md-5 Laura Berman
              .col-md-7
                a(href='https://www.instagram.com/bermanlaura/' target='_blank')
                  InstagramLogo.instagram
                  | bermanlaura
            .row.mb-4.mb-md-1
              .col-md-5 Kim Eichler-Messmer
              .col-md-7
                a(href='https://www.instagram.com/kimemquilts/' target='_blank')
                  InstagramLogo.instagram
                  | kimemquilts
            .row.mb-4.mb-md-1
              .col-md-5 Lily Mueller
              .col-md-7
                a(href='https://www.instagram.com/lilymariemueller/' target='_blank') 
                  InstagramLogo.instagram
                  | lilymariemueller
            .row.mb-4.mb-md-1
              .col-md-5  Melissa Paré
              .col-md-7
                a(href='https://www.instagram.com/moraye_/' target='_blank') 
                  InstagramLogo.instagram
                  | moraye_
            .row.mb-4.mb-md-1
              .col-md-5 Gerry Trilling
              .col-md-7
                a(href='https://www.instagram.com/trillinggerry/' target='_blank') 
                  InstagramLogo.instagram
                  | trillinggerry
        b-col(cols='12' md='8')
          .content.mb-5
            p Troost Gardens is pleased to present our second exhibition, featuring five contemporary midwestern artists - Laura Berman, Kim Eichler-Messmer, Lily Mueller, Melissa Paré and Gerry Trilling. The title of the show “Sunshine and Shadow” is taken from a popular American quilt pattern that was used starting in the late 19th century by the Amish community. It evokes a history of innovative, female driven, fiber based, American abstraction as well as an imagery that is connected to color, light & darkness, and nature. This group of artists investigates the language of textiles and fiber to create dynamic abstractions, each drawing from diverse source material such as a family member’s heart beat, psychedelic music, modern architecture, antique jewelry, weather patterns, and plant life. Although the works are made in diverse media including painted silk, block printing, crochet and hand and machine sewing, they are tied together through an improvisational approach and intuitive sensibility that is well paired with each of their chosen media. Together, the works reveal the exciting possibilities that a contemporary investigation of textiles has to offer. 
    section
      h3 Exhibition Works 
      b-row
        b-col(v-for='work in exhibition.works' :key='work.id' cols='12' md='4')
          .work
            nuxt-link(:to='workUrl(work)')
              .image(v-if='thumb(work)')
                nuxt-img(:src='thumb(work)')
              .info
                h5 {{work.title}}
                h4 {{work.maker.first_name}} {{work.maker.last_name}}
                h4 {{work.medium}}
                h4 {{work.dimensions}}
</template>
<script lang='coffee'>
import InstagramLogo from '~/components/InstagramLogo'
export default
  head: ->
    title: 'Sunshine and Shadow: Textiles in Contemporary Art - Troost Gardens, Kanasas City'
    meta: [
      { property: 'og:title', content: @exhibition.title }
      { property: 'og:image', content: @$img('http://localhost:3000/uploads/image/image/28/swarm.jpg') }
      { property: 'og:url', content: "https://www.troostgardens.com#{@$route.path}" }
      { property: 'og:site_name', content: 'Troost Gardens - Kansas City Art' }
    ]
  components: { InstagramLogo }
  data: ->
    exhibition: null
  methods:
    thumb: (work) ->
      if work.images.length > 0
        work.images[0].image.thumb.url
      else
        null
    showWork: (work) ->
      @work = work
      @$router.replace( query: { slug: work.slug })
    workUrl: (work) ->
      "/works/#{work.slug}"
  asyncData: (context) ->
    exhibition = await context.$axios.get('http://localhost:3000/api/exhibitions/1.json')
    return
      exhibition: exhibition.data
    
</script>
<style lang='sass' scoped>
.images
  div[class^='col']
    display: flex
    flex-direction: column
    justify-content: space-between
    img
      width: 100%
.work
  margin-bottom: 50px
  cursor: pointer
  padding: 25px
  border: 1px solid white
  border-radius: 24px
  a
    text-decoration: none !important
  &:hover
    border: 1px solid #531195
    a
      font-style: normal !important
.image
  margin-bottom: 20px
  img
    width: 100%
.info
  h4, h5
    font-size: 12px
    font-weight: normal
    margin-bottom: 5px
  h5
    font-style: italic

</style>
