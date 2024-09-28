<template lang='pug'>
  .index_page
    .hero
      nuxt-img.img(src='images/tg_building_front_12_22_21.jpg' sizes="sm:100vw lg:1400px")
      .caption December 22, 2021 5:24pm
    .content
      section
        p We are on hiatus at the moment.  We have shows scheledued for Fall 2024.  Please visit our <a href='https://www.instagram.com/troostgardens/' target='_blank'>Instagram</a> account for up-to-date details.
      //- section
        h2 
          span Current 
          | Exhibition
          section.exhibtion
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
          span Past&nbsp;
          | Exhibitions
          section.exhibtion
        b-row
          b-col.order-2.order-lg-1(cols='12' md='5')
            .d-flex.flex-column.justify-content-between.h-100
              .info.mb-5
                h3.mb-4 Pollinating Visions
                .mb-3
                  h4 June 10, 2023 - July 1, 2023
              
                h3 Artists
                ul
                  li Hadley Clark
                  li Kate Clements
                  li Julie Farstad
                  li Elise Gagliardi
                  li Amanda Gehin
                  li Jackob Graves
                  li Von Greer
                  li Rachel Gregor
                  li Diana Heise
                  li Caroline Honas
                  li Hùng Lê
                  li Linda Lighton
                  li Frances MacLeod
                  li Miriamne Marlowe
                  li Sean Nash
                  li Jason Needham
                  li Kiki Serna
          b-col.order-1.order-lg-2(cols='12' md='7')
            .d-flex
              .image.p-3
                nuxt-img(src='images/pollinating-visions/amanda-gehin-hummingbird-vs-von-karman-vortex-streets-shedding-off-stems.jpg' sizes="sm:100vw lg:1400px")
                .caption Amanda Gehin: Hummingbird vs Von Kármán Vortex Streets Shedding off Stems
        b-row
          b-col.order-2.order-lg-1(cols='12' md='5')
            .d-flex.flex-column.justify-content-between.h-100
              .info.mb-5
                h3.mb-4 Fortune's Moving
                .mb-3
                  h4 May 13, 2023 - May 27, 2023
                p Curated by Chelsea Smith
              
                h3 Artists
                ul
                  li 
                    a(href='https://niadart.org/felecia-griffin/' target='_blank') Felicia Griffin
                  li 
                    a(href='https://www.emkettner.com' target='_blank') Em Kettner
                  li 
                    a(href='https://www.noelmaghathe.com' target='_blank') Noel Maghathe 
                  li 
                    a(href='https://www.meinolfweavingschool.org' target='_blank') Travis Meinolf 
                  li 
                    a(href='https://lillypowell.com' target='_blank') Lilly Powell 
                  li 
                    a(href='https://www.formationfiberstudio.com' target='_blank') Ashley Arnett-Shipley
          b-col.order-1.order-lg-2(cols='12' md='7')
            .d-flex
              .image.p-3
                nuxt-img(src='images/fortunes-moving/em-ketner-the-comet-detail.jpg' sizes="sm:100vw lg:1400px")
                .caption Em Kettner, The Comet
      section.exhibtion
        b-row
          b-col.order-2.order-lg-1(cols='12' md='5')
            .d-flex.flex-column.justify-content-between.h-100
              .info.mb-5
                h3.mb-4 Call and Response I: Unpacking Complex Narratives
                .mb-3
                  h4 February 4th - Februrary 25th, 2023
                p Curated by Harold Smith
              
                h3 Artists
                ul
                  li Vivian Wilson-Bluett
                  li Kwanza Humphrey
          b-col.order-1.order-lg-2(cols='12' md='7')
            .d-flex
              .image.p-3.w-50
                nuxt-img(src='images/call-and-response-1/humphrey.jpg' sizes="sm:100vw lg:1400px")
                .caption Kwanza Humphrey, Follow My Mothers Keeper
              .image.p-3.w-50
                nuxt-img(src='images/call-and-response-1/wilson-bluett.jpg' sizes="sm:100vw lg:1400px")
                .caption Vivian Wilson-Bluett, Untitled

      section.exhibtion
        b-row
          b-col.order-2.order-lg-1(cols='12' md='5')
            .d-flex.flex-column.justify-content-between.h-100
              .info
                h3.mb-4
                  a(href='/') The Ways of Magic
                .mb-5
                  h4 January 7th - January 28th, 2023
                ul
                  li Yevgeniya Baras
                  li NedRa Bonds
                  li Melissa Brown
                  li Hadley Clark
                  li Angelina Gualdoni
                  li EJ Hauser
                  li Misha Kligman
                  li Heather Lyon
                  li Mike Paré
                  li Andy Ryan
                  li Chico Sierra




              //- a.view.d-flex.align-items-center(href='/exhibitions/songs-systems-structures')
                span.mr-2 View Exhibition
                RightArrow
          b-col.order-1.order-lg-2(cols='12' md='7')
            //- a(href='/exhibitions/songs-systems-structures')
            nuxt-img.mb-3.mb-lg-0(src='images/the-ways-of-magic/andy-ryan-Emission.jpg' sizes="sm:100vw lg:1400px")
            .caption Andy Ryan, Emission 2022
      section.exhibtion
        b-row
          b-col.order-2.order-lg-1(cols='12' md='5')
            .d-flex.flex-column.justify-content-between.h-100
              .info
                h3.mb-4
                  a(href='/exhibitions/songs-systems-structures') Songs, Systems & Structures: A Drawing Survey
                h4 March 26th, 2022 - <br> April 23rd, 2022
              a.view.d-flex.align-items-center(href='/exhibitions/songs-systems-structures')
                span.mr-2 View Exhibition
                RightArrow
          b-col.order-1.order-lg-2(cols='12' md='7')
            a(href='/exhibitions/songs-systems-structures')
              nuxt-img.mb-3.mb-lg-0(src='images/songs-systems-structures/albert-owens-rickey-moss.jpg' sizes="sm:100vw lg:1400px")
              //- b-img.mb-3.mb-lg-0(fluid src='/images/2-l-to-r-dylan-sanchez-cesar-lopez-2000.jpg')
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
              nuxt-img.mb-3.mb-lg-0(fluid :src='exhibition.primary_image.image.thumb.url' sizes="sm:100vw lg:1400px")
              .caption {{ exhibition.primary_image.caption }}
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
        content: 'https://www.troostgardens.com/_nuxt/image/f81437.jpg'
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
