<template lang='pug'>
  .index_page
    .content
      .mb-5
        img.img(src='~/assets/front_of_building.jpg')
      .mb-1 &nbsp;
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
            section
              h3.mb-2 
                a(href='/exhibitions/sunshine-and-shadow')
                  | Sunshine and Shadow: 
                  span.lowercase Textiles in Contemporary Art
              h4.mb-4 September 18, 2021 - October 9, 2021
              p Works by:
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
                .col-md-5 Melissa Paré
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
            section
              h3.mb-2 
                a(href='/exhibitions/you-like-what-you-know') You Like What You Know
              h4.mb-4 August 21, 2021 - September 11, 2021
              p 
                | Folk art selections from the Fowks family collection. 

            section
              h3.mb-2 Primer
              h4.mb-4 November 2021
              p 
                | Curated by 
                a(href='https://www.instagram.com/philipdenker' target='_blank') 
                  InstagramLogo.instagram
                  | philipdenker
                |.
              p Artists, TBD
            
            section
              h3.mb-2 
                a(href='https://www.lodgergallery.com/shapeshifters' target='_blank') Shape Shifters
              h4.mb-4 December 20th 2020 - January 16, 2021
              p 
                | Curated by 
                a(href='https://www.instagram.com/lodger_art' target='_blank') 
                  InstagramLogo.instagram
                  | lodger_art
                br
                a(href='https://www.lodgergallery.com/shapeshifters' target='_blank') View Show &nearr;
              p Works by:
              .row.mb-4.mb-md-1
                .col-md-5 Dyl Sanchez
                .col-md-7
                  a(href='https://www.instagram.com/baba_gan0ush' target='_blank')
                    InstagramLogo.instagram
                    | baba_gan0ush
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
        .col-md-4
          h2.mb-5 Contact
          .contacts
            p 
              | 7323 Troost<br>
              | KCMO 64131
            div 
              .mb-1
                a(href='https://www.instagram.com/troostgardens' target='_blank')
                  InstagramLogo.instagram
                  |troostgardens
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
table
  td
    padding: 0 20px 8px 0
.lowercase
  text-transform: none
</style>
