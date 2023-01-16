<template lang='pug'>
.slide_show(ref='slide_show')
  .slides
    .slide(v-for='(slide, i) in images' :class='{ show: current_slide == i}')
      nuxt-img(:src='slide.image.url' :class='{ vertical: !slide.horizontal }')
  //- flickity.slides(ref="flickity" :options="flickityOptions")
    //- .slide(v-for='slide in images' :style='`width: ${the_width}px`' :class='{ vertical: !slide.horizontal }')
    .slide(v-for='slide in images')
      nuxt-img(:src='slide.image.url')
  //- .gauge
    .dashes
      .dash(v-for='(dash, i) in images' :class='{ active: current_slide == i}')
    .info
      .indicator Slide {{current_slide+1}} of {{images.length}} 
      .slide_nav
        LeftArrow
        RightArrow
  //- .slide(v-for='(slide, i) in slides' :class='slideClass(i)' v-touch:swipe='swipeHandler')
    .double(v-if='slide.length > 1')
      .image_container
        .image
          nuxt-img(:src='slide[0].image.url')
          PlusIcon
          .frame
        .caption 
          .info {{slide[0].caption}}
          .credit {{slide[0].credit}}
      .image_container(v-if='slide[1]')
        .image
          nuxt-img(:src='slide[1].image.url')
          PlusIcon
          .frame
        .caption 
          .info {{slide[1].caption}}
          .credit {{slide[1].credit}}
    .image_container(v-else)
      .image
        nuxt-img(:src='slide.image.url')
        PlusIcon
        .frame
      .caption 
        .info {{slide.caption}}
        .credit {{slide.credit}}
  
  //- .slide(v-for='(image, i) in horizontal_images' :class='slideClass(i)' v-touch:swipe='swipeHandler')
    .image_container
      .image
        nuxt-img(:src='image.image.url')
        PlusIcon
        .frame
      .caption 
        .info {{image.caption}}
        .credit {{image.credit}}
  //- .slide(v-for='(pair, i) in doubles' :class='slideClass(i)' v-touch:swipe='swipeHandler')
    .double
      .image_container
        .image
          nuxt-img(:src='pair[0].image.url')
          PlusIcon
          .frame
        .caption 
          .info {{pair[0].caption}}
          .credit {{pair[0].credit}}
      .image_container(v-if='pair[1]')
        .image
          nuxt-img(:src='pair[1].image.url')
          PlusIcon
          .frame
        .caption 
          .info {{pair[1].caption}}
          .credit {{pair[1].credit}}
</template>
<script lang='coffee'>
# import Flickity from 'vue-flickity';
import PlusIcon from '~/components/graphics/PlusIcon'
import LeftArrow from '~/components/graphics/LeftArrow'
import RightArrow from '~/components/graphics/RightArrow'

export default
  props: ['images']
  components: { PlusIcon, LeftArrow, RightArrow }
  data: ->
    current_slide: 0
    the_width: 0
    movit: false
    flickityOptions:
      initialIndex: 3
      prevNextButtons: false
      pageDots: false
      wrapAround: true
  mounted: ->
    window.addEventListener 'keydown', @presser
    @.$nextTick =>
      @the_width = @$refs.slide_show.clientWidth
  beforeDestroy: ->
    window.removeEventListener 'keydown', @presser
  computed:
    horizontal_images: ->
      @images.filter (i) => i.horizontal
    vertical_images: ->
      @images.filter (i) => !i.horizontal
    doubles: ->
      images = @vertical_images
      chunks = []
      loop
        chunk = []
        chunk.push(images.shift()) if images
        chunk.push(images.shift()) if images
        chunks.push(chunk)
        break if images.length < 1
        # break if images == undefined
      @slideCount = chunks.length
      chunks
    slides: ->
      @shuffle(@doubles.concat(@horizontal_images))
  methods:
    shuffle: (a) ->
      j = undefined
      x = undefined
      i = undefined
      i = a.length - 1
      while i > 0
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
        i--
      a
    presser: (e) ->
      if e.keyCode == 37
        @previousSlide()
      else if e.keyCode == 39
        @nextSlide()
      else if e.keyCode == 27
        @$emit('escapeKey')
    previousSlide: ->
      clearInterval(@runner) if @runner
      if @current_slide == 0
        @current_slide = @images.length - 1
      else
        @current_slide--
    nextSlide: ->
      @movit = true
      clearInterval(@runner) if @runner
      if @current_slide < @images.length - 1
        @current_slide++
      else
        @current_slide = 0
    slideClass: (slide) ->
      if slide == @current_slide
        'show'
      else
        'hide'

</script>
<style lang='sass' scoped>
.slide_show
  width: 100%
  height: 80vh
.slides
  position: relative
  .slide
    display: none
    position: absolute
    top: 0
    left: 0
    img
      width: 100%
      &.vertical
        width: 56.25%
  .show
    display: block
// .slide_show
  width: 100%
  overflow: hidden
  .slides
    display: flex
    width: 9999999px
    margin-bottom: 30px
  .slide
    &.vertical
      img
        width: 56.25%
    img
      width: 100%
      display: block
      margin: 0 auto

  .gauge
    font-size: 12px
    color: #5D00BB
    font-weight: 300
    text-align: right
    ::v-deep svg 
      path
        fill: #f1e6fe
    .info
      display: flex
      justify-content: space-between
      align-items: center
      svg
        width: 25px
        margin-left: 30px
        &:hover
          cursor: pointer
          ::v-deep path
            transition: 0.4s
            fill: #5d00bb
  .dashes
    width: 100%
    display: flex
    justify-content: space-between
  .dash
    height: 2px 
    flex-grow: 1
    margin-right: 5px
    background: #f1e6fe
    &:last-of-type
      margin-right: 0px
    &.active
      background: #5D00BB

.shitx
  .slides
    width: 100%
    position: relative
    .slide
      margin-bottom: 40px
      
    .double
      display: flex
      justify-content: space-between
      .image_container
        width: 49%
    .image_container
      position: relative
      width: 100%
      .image
        position: relative
        .frame
          position: absolute
          top: 0px
          left: 0px
          width: 100%
          height: 100%
          transition: 0.4s
          border: 0px solid #5D00BB
        img
          width: 100%
        svg
          position: absolute
          margin-top: 50%
          margin-left: calc(-50% - 125px/2)
          transition: 0.4s
          opacity: 0
      &:hover
        cursor: pointer
        svg
          transition: 0.4s
          opacity: 1
        .frame
          transition: 0.4s
          border: 5px solid #5D00BB
          
      
    .movit
      animation: moveSlideshow 1s linear infinite
    @keyframes moveSlideshow
      100%
        transform: translateX(-66.6666%)


    // .slide
      position: absolute
      display: flex
      justify-content: center
      top: 0
      width: 100%
      // height: 100%
      transition: 0.5s
      .double
        display: flex
        justify-content: space-between
        width: 100%
        background: red
        .image_container
          width: 49%
          display: flex
          flex-direction: column
          justify-content: space-between
          .image
            position: relative
            width: 100%
            height: 100%
            &:hover
              cursor: pointer
              svg
                transition: 0.1s
                opacity: 1
              img
                transition: 0.1s
                border: 5px solid #5D00BB
            svg
              position: absolute
              margin-top: 50%
              margin-left: calc(50% - 125px/2)
              opacity: 0
            img
              position: absolute
              width: 100%
              &:hoverx
                cursor: pointer
                transition: 0.1s
                border: 5px solid #5D00BB
          .caption
            border: 3px solid pink
            height: 100%
            background: blue
        // max-height: 98%
</style>
