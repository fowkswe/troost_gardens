<template lang='pug'>
  .work_modal(v-if='work')
    .info_pane
      .closer(@click='closeWork()')
        TimesIcon
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

export default
  components: { RightArrow, TimesIcon }
  props: 
    work:
      default: null
    value:
      default: null
  mounted: ->
    window.addEventListener 'keydown', @presser
  beforeDestroy: ->
    window.removeEventListener 'keydown', @presser
  computed: 
    image: ->
      @$img("http://localhost:3000/#{@work.images[0].image.url}")
    maker_name: ->
      "#{@work.maker.first_name} #{@work.maker.last_name}"
    mail_to: ->
      "mailto:hi@troostgardens.com?subject=I would like to know more about #{@maker_name} - #{@work.title}"
  methods: 
    closeWork: ->
      @work = null
      @$router.replace( query: '')
      @$nuxt.$emit('modalClosed', @work)
      
    presser: (e) ->
      if e.keyCode == 27
        @closeWork()
</script>
<style lang='sass' scoped>
.work_modal
  opacity: 1
  position: fixed
  width: 100vw
  height: 100vh
  top: 0px
  left: 0px
  display: flex
  transition: 1s all
  .closer
    position: absolute
    top: 0px
    cursor: pointer
  .info_pane
    width: 25%
    padding: 40px
    color: white
    font-size: 16px
    color: white
    display: flex
    align-items: flex-end
    background: black
  .image_pane
    display: flex
    width: 75%
    justify-content: center
    align-items: center
    background: white
    height: 100vh
    padding: 5%
    .image
      max-width: 60%
      img
        width: 100%
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
      
</style>
