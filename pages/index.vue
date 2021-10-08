<template lang='pug'>
  .page.index_page
    .hero
      img.img(src='~/assets/front_of_building.jpg')
    .content
      .row.mb-3
        .col-md-8
          section
            p Troost Gardens is a project space based in Kansas City, MO.  
            P 
              a(href='/exhibitions/sunshine-and-shadow')
                i 
                  | Sunshine and Shadow: 
                  span.lowercase Textiles in Contemporary Art
              | &nbsp; is open September 18th - October 9th.
            p 
              | Please check 
              a(href='https://www.instagram.com/troostgardens' target='_blank') 
                InstagramLogo.instagram
                | troostgardens
              | &nbsp;for updates.

      .row.mb-3
        .col-md-8
          section
            h2.mb-5 Exhibitions
            b-row
              b-col(cols='12' md='2')
                h6 Current
              b-col(cols='12' md='10')
                section
                  h3.mb-2 
                    a(href='/exhibitions/sunshine-and-shadow')
                      | Sunshine and Shadow: 
                      span.lowercase Textiles in Contemporary Art
                  h4.mb-4 September 18, 2021 - October 9, 2021

            b-row
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
export default
  components: { TroostGardensLogo, InstagramLogo, Header }
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
.hero
  margin-bottom: 40px
  img
    width: 100%
    border-radius: 25px
.content
  font-size: 20px

table
  td
    padding: 0 20px 8px 0
</style>
