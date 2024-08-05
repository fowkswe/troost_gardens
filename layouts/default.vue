<template lang='pug'>
  .troost_gardens
    b-container
      header
        nuxt-link(to='/')
          h1 Troost Gardens
      Nuxt.content_body
      .email_signup
        h3.mb-3 Receive Email Updates
        b-row
          b-col(cols='12' lg='4')
            // Begin Mailchimp Signup Form
            #mc_embed_signup
              form#mc-embedded-subscribe-form.validate(action='https://troostgardens.us5.list-manage.com/subscribe/post?u=02872f954e9760bd64c866a7a&id=2627ad7daf', method='post', name='mc-embedded-subscribe-form', target='_blank', novalidate='')
                #mc_embed_signup_scroll
                  .d-flex.mb-4.justify-content-between.align-items-top
                    .mc-field-group
                      b-form-input#mce-EMAIL.required.email(type='email', value='', name='EMAIL' placeholder='Email')
                      #mce-responses.clear.foot
                        #mce-error-response.response(style='display:none')
                        #mce-success-response.response(style='display:none')
                    input.d-inline#mc-embedded-subscribe.button(type='submit', value='Subscribe', name='subscribe')
                  // real people should not fill this in and expect good things - do not remove this or risk form bot signups
                  div(style='position: absolute; left: -5000px;', aria-hidden='true')
                    input(type='text', name='b_02872f954e9760bd64c866a7a_2627ad7daf', tabindex='-1', value='')
            script(type='text/javascript', src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js')
            script(type='text/javascript').
              (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[4]='PHONE';ftypes[4]='phone';fnames[1]='MMERGE1';ftypes[1]='address';}(jQuery));var $mcj = jQuery.noConflict(true);
          b-col(cols='12' lg='8')
            p We'll notify you of upcoming exhibitions, events and other art related activites.  You can expect no more than 1-2 emails a month.  We certainly will not share your email with any other entity.
      footer
        b-row
          b-col(cols='12' md='4')
            .d-flex.flex-column.justify-content-between.h-100
              .d-flex
                h1.mr-4 TG
                p Troost Gardens is a project space based in <br>Kansas City, MO.
              .copy.mb-4.mb-md-0 Unless otherwise specified, all Images &copy;{{year}} Troost Gardens
          b-col(cols='12' md='4')
            p Generally, Troost Gardens is open during exhibitions on Saturday 1-4p, or by appointment.  
            p Please check our Instagram for the latest information regarding open hours.
          b-col(cols='12' md='4').text-md-right
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
# import { useSanityClient } from 'vue-sanity'
import Header from '~/components/Header'
import TroostGardensLogo from '~/components/TroostGardensLogo'
import InstagramLogo from '~/components/InstagramLogo'
import RightArrow from '~/components/graphics/RightArrow'

export default
  components: { Header, TroostGardensLogo, InstagramLogo, RightArrow }
  xsetup: ->
    useSanityClient
      projectId: 'gwsyyifo',
      dataset: 'production',
      useCdn: process.env.NODE_ENV == 'production'

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
.content_body
  min-height: 70vh
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

.email_signup
  margin-top: 160px
  margin-bottom: 160px
  .mc-field-group
    width: 66%
    margin-right: 10px
  input[type='email']
    padding: 5px 10px !important
    font-family: Roboto !important
  input[type='submit']
    font-family: Roboto !important
    width: 32%
    height: 38px
    background: white
    border: 1px solid #ff684e
    padding: 5px 20px !important
    border-radius: 5px
    color: #ff684e
  ::v-deep .mce_inline_error
    padding: 0px !important
    margin: 0px !important
    background: white !important
    color: #ff684e !important
    font-weight: 400 !important
    display: block !important
    width: 100% !important
    
  a
    border: 1px solid #ff684e
    padding: 5px 20px
    border-radius: 5px
footer
  padding-top: 60px
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

@media (max-width: 480px)
  .troost_gardens
    padding-top: 0px
    padding-bottom: 0px
  .container
    padding: 15px 20px 20px 20px
</style>
