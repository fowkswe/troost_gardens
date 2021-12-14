<template lang='pug'>
  .page.sunshine-and-shadow
    section
      b-row
        b-col(cols='12' md='4')
          .mb-5
            h3.mb-4 
              | {{exhibition.exhibition.title}}:
              .lowercase {{exhibition.exhibition.sub_title}}
            div 
              | {{exhibition.exhibition.start_date | dayjs('MMMM D, YYYY')}}
              br 
              | {{exhibition.exhibition.end_date | dayjs('MMMM D, YYYY')}}
        b-col(cols='12' md='8')
          .primary_image
            nuxt-img(:src='exhibition.primary_image.image.url')
            .caption 
              .info {{exhibition.primary_image.caption}}
              .credit {{exhibition.primary_image.credit}}
    section
      b-row
        b-col(cols='12' md='4')
          .mb-5
            h6 Works by:
            .row.mb-4.mb-md-1(v-for='maker in exhibition.makers')
              .col-md-5 {{maker.first_name}} {{maker.last_name}}
              .col-md-7
                a(:href='`https://www.instagram.com/${maker.instagram}/`' target='_blank' v-if='maker.instagram')
                  InstagramLogo.instagram
                  | {{maker.instagram}}
        b-col(cols='12' md='8')
          .content.mb-5
            p(v-html='exhibition.exhibition.description')
    section
      .mb-5(v-if='exhibition.exhibition.slug == "xprimer"')
        h4 Exhibition Images Coming Soon
      .mb-5(v-else)
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
      { property: 'og:description', @description }
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
      "#{@exhibition.exhibition.title} #{@exhibition.exhibition.sub_title}"
      # 'Sunshine and Shadow: Textiles in Contemporary Art - Troost Gardens, Kanasas City'
    description: ->
      names = @exhibition.makers.map (m) =>
        "#{m.first_name} #{m.last_name}"
      "#{@exhibition.exhibition.title} #{@exhibition.exhibition.sub_title}: the artwork of - #{names.join(', ')} - Troost Gardens"
    meta_image: -> 
      "https://www.troostgardens.com#{@$img(@exhibition.primary_image.image.url)}"
    horizontal_images: ->
      @exhibition.images.filter (i) => i.horizontal
    vertical_images: ->
      @exhibition.images.filter (i) => !i.horizontal
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
      
    images: ->
      @vertical_images
      # @exhibition.images
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
    # exhibition = await context.$axios.get("http://localhost:3000/api/exhibitions/#{context.route.params.id}.json")
    exhibition = await context.$axios.get("http://localhost:3000/api/exhibitions/#{context.route.params.id}.json")
    
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
