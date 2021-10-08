<template lang='pug'>
  .work_modal(v-if='work')
    header
      nuxt-link(:to='exhibition_url')
        h1 TG
    .info_pane
      .info
        i {{work.title}}
        br
        | {{maker_name}}
        br
        | {{work.medium}}
        br
        | {{work.dimensions}}
        br
        | ${{work.price_cents/100}}
        br
        br
        a.button(:href='mail_to') 
          | Inquire
          RightArrow
    .image_pane
      .image
        nuxt-img(:src='work.images[0].image.url' fluid)
</template>
<script lang='coffee'>
import RightArrow from '~/components/graphics/RightArrow'
import TimesIcon from '~/components/graphics/TimesIcon'
import Header from '~/components/Header'

export default
  layout: 'work'
  head: ->
    title: @title
    meta: [
      { property: 'og:title', content: @title }
      { property: 'og:image', content: @$img(@work.images[0].image.url) }
      { property: 'og:url', content: "https://www.troostgardens.com#{@$route.path}" }
      { property: 'og:site_name', content: 'Troost Gardens - Kansas City Art' }
    ]
  components: { RightArrow, TimesIcon, Header }
  mounted: ->
    window.addEventListener 'keydown', @presser
  beforeDestroy: ->
    window.removeEventListener 'keydown', @presser
  computed: 
    title: ->
      "#{@maker_name} - #{@work.title} at Troost Gardens, Kansas City"
    maker_name: ->
      "#{@work.maker.first_name} #{@work.maker.last_name}"
    mail_to: ->
      "mailto:hi@troostgardens.com?subject=I would like to know more about #{@maker_name} - #{@work.title}"
    exhibition_url: ->
      "/exhibitions/#{@work.exhibition.slug}"
  methods: 
    closeWork: ->
      @$router.push( path: @exhibition_url)
    presser: (e) ->
      if e.keyCode == 27
        @closeWork()
  asyncData: (context) ->
    work = await context.$axios.get("http://localhost:3000/api/works/#{context.route.params.id}.json")
    return
      work: work.data
</script>
<style lang='sass' scoped>
.work_modal
  display: flex
  width: 100vw
  height: 100vh
  header
    position: absolute
  .info_pane
    width: 25%
    background: black
    display: flex
    flex-direction: column
    justify-content: flex-end
    .info
      padding: 40px
      color: white
      font-size: 16px
  .image_pane
    width: 75%
    display: flex
    justify-content: center
    align-items: center
    .image
      height: 80%
      width: 80%
      display: flex
      justify-content: center
      align-items: center
      img
        max-height: 100%
        max-width: 100%
  .button
    border: 2px solid white
    border-radius: 5px
    color: white
    padding: 10px 20px
    text-decoration: none
    ::v-deep svg
      height: 12px
      path
        fill: white
    &:hover
      color: black
      border: 2px solid #E1FF28
      ::v-deep path
          fill: black
      
@media (max-width: 480px)
  .work_modal
    display: flex
    position: relative
    flex-direction: column
    justify-content: space-between
    width: 100%
    min-height: 100vh
    top: 0px
    header
      position: relative
      margin-top: 0px
      padding: 10px 10px 0px 10px
    .info_pane
      display: block
      padding: 20px
      width: 100%
      order: 2
      .closer
        position: relative
        margin-bottom: 20px
    .image_pane
      width: 100%
      height: 100%
      padding: 10px
      display: block
      order: 1
      .image
        width: 100%
        max-width: 100%
        height: 100%
</style>
