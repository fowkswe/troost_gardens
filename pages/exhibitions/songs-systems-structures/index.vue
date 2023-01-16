<template lang='pug'>
  .page.songs-systems-structures
    section
      b-row
        b-col(cols='12' md='4')
          .mb-5
            h2.mb-4 Songs, Systems & Structures:
              .lowercase A Drawing Survey
            p 
              | March 26th, 2022
              br 
              | April 23rd, 2022
        b-col(cols='12' md='8')
          //- pre {{exhibition}}
          .primary_image
            nuxt-img(src='/images/songs-systems-structures/albert-owens-rickey-moss.jpg')
            .caption 
              .info Albert Owens, Rickey Moss
              .credit &copy;2022 Sally Paul
    section
      b-row
        b-col(cols='12' md='4')
          .mb-5
            h6 Works by:
            .row.mb-4.mb-md-1(v-for='maker in artists')
              .col-md-5 {{maker.first_name}} {{maker.last_name}}
              .col-md-7
                a(href='`https://www.instagram.com/#{maker.instagram}/`' target='_blank' v-if='maker.instagram')
                  InstagramLogo.instagram
                  | {{maker.instagram}}
        b-col(cols='12' md='8')
          .content.mb-5
            p One of the goals that Troost Gardens set for its program was to keep our eyes open to the interesting things happening in the KC art world.  What we found was an abundance of artists making and thinking about drawing in innovative and inspiring ways.  This exhibition consists of over 60 drawings made by 9 artists living in the Kansas City metro area including Erin Aguilar, Kelly John Clark, Austin Dearth, Jacob Everest, Baron Mattern, Rickey Moss, Lily Mueller, Albert Owens, and Michael Rasco. 
            p Drawing is perhaps the first recorded mode of human expression. It can be direct, transcendent, personal and poetic, obsessive and lyrical.  A drawing can be a record of sorts of an artist’s experiences, memories, and preoccupations. Oftentimes, a drawing lets you into the mind and thought process of the artist, making internal musings and ways of thinking and seeing visible. We hope you enjoy this survey and these artists' unique vision and a devotion to the medium.  

    //- section
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
import SlideShow from '~/components/SlideShow'
import InstagramLogo from '~/components/InstagramLogo'
import PlusIcon from '~/components/graphics/PlusIcon'
import gallery from '~/mixins/gallery.coffee'

export default
  mixins: [gallery]
  head: ->
    title: @title
    meta: [
      { hid: 'description', name: 'description', content: @description }
      { property: 'og:title', content: @title }
      { property: 'og:description', 'Sunshine and Shadow: Textiles in Contemporary Art, five contemporary midwestern artists - Laura Berman, Kim Eichler-Messmer, Lily Mueller, Melissa Paré and Gerry Trilling' }
      { property: 'og:image', content: @meta_image }
      { property: 'og:url', content: "https://www.troostgardens.com#{@$route.path}" }
      { property: 'og:site_name', content: 'Troost Gardens - Kansas City Art' }
      { hid: 'twitter:title', name: 'twitter:title', content: @title }
      { hid: 'twitter:description', name: 'twitter:description', content: @description }
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
      { hid: 'twitter:image', name: 'twitter:image', content: @meta_image }

    ]
  components: { SlideShow, InstagramLogo, PlusIcon }
  data: ->
    exhibition: null
    slideCount: 0
  computed:
    title: ->
      'Songs, Systems & Structures: A Drawing Survey - Troost Gardens, Kanasas City'
    description: ->
      'Troost Gardens: five contemporary midwestern artists - Laura Berman, Kim Eichler-Messmer, Lily Mueller, Melissa Paré and Gerry Trilling'
    meta_image: -> 
      "https://www.troostgardens.com#{@$img('http://localhost:3000/uploads/image/image/28/swarm.jpg')}"
    artists: ->
      [ 
        { 
          first_name: 'Erin'
          last_name: 'Aguilar'
        }
        {
          first_name: 'Kelly'
          last_name: 'John Clark'
          instagram: 'lake_face_studio'
          website: 'https://www.kellyjohnclark.net/'
        }
        { 
          first_name: 'Austin'
          last_name: 'Dearth'
          instagram: 'austindearthsrobots'
        }
        { 
          first_name: 'Jacob'
          last_name: 'Everest'
          instagram: 'bad_drawing'
        }
        { 
          first_name: 'Baron'
          last_name: 'Mattern'
          instagram: 'mattern.baron'
        }
        { 
          first_name: 'Lily'
          last_name: 'Meuller'
          instagram: 'lilymariemueller'
          website: 'https://www.lilymueller.com/'
        }
        { 
          first_name: 'Albert'
          last_name: 'Owens'
          instagram: 'albertrowens'
        }
        { 
          first_name: 'Michael'
          last_name: 'Rasco'
        }
      ]
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
    swipeHandler: (e) ->
      if e == 'left'
        @nextImage()
      else
        @previousImage()
  asyncData: (context) ->
    exhibition = await context.$axios.get("http://localhost:3000/api/exhibitions/sunshine-and-shadow.json")
    return
      exhibition: exhibition.data
    
</script>
<style lang='sass' scoped>

.primary_image
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
