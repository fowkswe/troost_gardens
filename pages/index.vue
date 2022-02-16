<template lang='pug'>
  .index_page
    .hero
      nuxt-img.img(src='images/tg_building_front_12_22_21.jpg' sizes="sm:100vw lg:1400px")
      .caption December 22, 2021 5:24pm
    .content
      section
        h2 
          strike
            span Current 
            | Exhibition
      section.exhibtion
        .w-50
          p We are currently closed due to the Omicron variant.  We hope to resume our programming and events when pandemic conditions improve.
        
        //- b-row
          b-col.order-2.order-lg-1(cols='12' md='5')
            .d-flex.flex-column.justify-content-between.h-100
              .info
                h3.mb-4
                  a(href='/exhibitions/primer')
                    | {{current_exhibition.title}}: {{current_exhibition.sub_title}}
                h4 
                  | {{current_exhibition.start_date | dayjs('MMMM D, YYYY')}} -
                  | {{current_exhibition.end_date | dayjs('MMMM D, YYYY')}}
              a.view.d-flex.align-items-center(:href='`/exhibitions/${current_exhibition.slug}`') 
                span.mr-2 View Exhibition
                RightArrow
              
          b-col.order-1.order-lg-2(cols='12' md='7')
            a(:href='`/exhibitions/${current_exhibition.slug}`') 
              nuxt-img.mb-3.mb-lg-0(fluid :src='current_exhibition.primary_image.image.thumb.url')
      section
        h2 
          span Past 
          | Exhibitions
      section.exhibtion(v-for='exhibition in past_exhibitions')
        b-row
          b-col.order-2.order-lg-1(cols='12' md='5')
            .d-flex.flex-column.justify-content-between.h-100
              .info
                h3.mb-4
                  a(:href='`/exhibitions/${exhibition.slug}`') 
                    | {{exhibition.title}}: {{exhibition.sub_title}}
                h4 
                  | {{exhibition.start_date | dayjs('MMMM D, YYYY')}} -
                  | {{exhibition.end_date | dayjs('MMMM D, YYYY')}}
              a.view.d-flex.align-items-center(:href='`/exhibitions/${exhibition.slug}`') 
                span.mr-2 View Exhibition
                RightArrow
          b-col.order-1.order-lg-2(cols='12' md='7')
            a(:href='`/exhibitions/${exhibition.slug}`') 
              nuxt-img.mb-3.mb-lg-0(fluid :src='exhibition.primary_image.image.thumb.url')
      section.exhibtion
        b-row
          b-col.order-2.order-lg-1(cols='12' md='5')
            .d-flex.flex-column.justify-content-between.h-100
              .info
                h3.mb-4
                  a(href='/exhibitions/shape-shifters') Shape Shifters
                h4 December 19, 2020 - <br> January 13th, 2021
              a.view.d-flex.align-items-center(href='/exhibitions/shape-shifters')
                span.mr-2 View Exhibition
                RightArrow
          b-col.order-1.order-lg-2(cols='12' md='7')
            a(href='/exhibitions/shape-shifters')
              b-img.mb-3.mb-lg-0(fluid src='/images/2-l-to-r-dylan-sanchez-cesar-lopez-2000.jpg')
      //- .row.mb-3
        .col-md-8
          section
            b-row
              b-col(cols='12' md='2')
                h6 Current
              b-col(cols='12' md='10')
                section
                  h3.mb-2
                    a(href='/exhibitions/primer')
                      | Primer: 
                      span.lowercase Charged Abstraction
                  h4.mb-4 November 27, 2021 - December 11, 2021
                  p 
                    | Curated by 
                    a(href='https://www.instagram.com/philipdenker' target='_blank') 
                      InstagramLogo.instagram
                      | philipdenker
                    |.
            //- b-row
              b-col(cols='12' md='2')
                h6 Upcoming
              b-col(cols='12' md='10')
                section
                  h3.mb-2 Primer
                  h4.mb-4 Late November 2021
                  p 
                    | Curated by 
                    a(href='https://www.instagram.com/philipdenker' target='_blank') 
                      InstagramLogo.instagram
                      | philipdenker
                    |.
            b-row
              b-col(cols='12' md='2')
                h6 Past
              b-col(cols='12' md='10')
                section
                  h3.mb-2 
                    a(href='/exhibitions/sunshine-and-shadow')
                      | Sunshine and Shadow: 
                      span.lowercase Textiles in Contemporary Art
                  h4.mb-4 September 18, 2021 - October 9, 2021
                section
                  h3.mb-2 
                    a(href='/exhibitions/you-like-what-you-know') You Like What You Know
                  h4.mb-4 August 21, 2021 - September 11, 2021
                  p 
                    | Folk art selections from the Fowks family collection. 

                section
                  h3.mb-2 
                    a(href='/exhibitions/shape-shifters') Shape Shifters
                  h4.mb-4 December 20th 2020 - January 16, 2021
                  p 
                    | Curated by 
                    a(href='https://www.instagram.com/lodger_art' target='_blank') 
                      InstagramLogo.instagram
                      | lodger_art
        .col-md-4
          h2.mb-5 Contact
          .contacts
            p 
              a(href='https://goo.gl/maps/gcTpQK8mbfhQEL1FA' target='_blank')
                | 7323 Troost<br>
                | KCMO 64131
            p 
              a(href='https://www.instagram.com/troostgardens' target='_blank')
                InstagramLogo.instagram
                |troostgardens
            p 
              a(href='mailto:hi@troostgardens.com') hi@troostgardens.com
</template>
<script lang='coffee'>
import Header from '~/components/Header'
import TroostGardensLogo from '~/components/TroostGardensLogo'
import InstagramLogo from '~/components/InstagramLogo'
import RightArrow from '~/components/graphics/RightArrow'

export default
  components: { TroostGardensLogo, InstagramLogo, Header, RightArrow }
  data: ->
    exhibitions: null
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
  computed: 
    sorted_exhibitions: ->
      @exhibitions
      # @exhibitions.sort (a, b) =>
      #   console.log a, b
      #   new Date(b.start_date) - new Date(a.start_date)
    past_exhibitions: ->
      @exhibitions #.slice(1)
    current_exhibition: ->
      @exhibitions[0]
  asyncData: (context) ->
    exhibitions = await context.$axios.get("http://localhost:3000/api/exhibitions.json")
    return
      exhibitions: exhibitions.data.exhibitions
</script>

<style lang='sass' scoped>
.hero
  margin-bottom: 40px
.content
  font-size: 20px
img
  width: 100%

.exhibtion
  margin-bottom: 100px
.view
  border-bottom: 1px solid white
  &:hover
    border-bottom: 1px solid black
    
  svg
    width: 25px
</style>
