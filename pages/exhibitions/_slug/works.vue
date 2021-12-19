<template lang='pug'>
.exhibition_works
  section
    b-row
      b-col(cols='12' md='3')
        .back
          a(:href='`/exhibitions/${exhibition.exhibition.slug}`') 
            img(src='~/assets/graphics/back_arrow.svg')
            | Back to exhibition

        .mb-5
          h3.mb-4 
            | {{exhibition.exhibition.title}}: 
            .lowercase {{exhibition.exhibition.sub_title}}
          .mb-5
            | {{exhibition.exhibition.start_date | dayjs('MMMM D, YYYY')}}
            br 
            | {{exhibition.exhibition.end_date | dayjs('MMMM D, YYYY')}}
        .mb-5
          h3 Artists
          .whisper (click to filter)
          ul
            li(v-for='maker in makers') 
              router-link.filter(:to='`/exhibitions/${exhibition.exhibition.slug}/works?maker=${maker.slug}`') {{maker.first_name}} {{maker.last_name}}
          router-link(:to='exhibition_link' v-if='filtered_maker') View All
      b-col(cols='12' md='9')
        .d-flex.justify-content-between.align-items
          h3.mb-5 
            | Exhibition Works 
            span.maker(v-if='filtered_maker') {{filtered_maker.first_name}} {{filtered_maker.last_name}}
          router-link(:to='exhibition_link' v-if='filtered_maker') View All
        .mb-5
          b-row
            b-col(v-for='work in filtered_works' :key='work.id' cols='12' md='4')
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
export default 
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
  data: ->
    exhibition: null
    maker_slug: null
  mounted: ->
    @maker_slug = @$route.query?.maker
  watch:
    '$route.query': ->
      @maker_slug = @$route.query?.maker
  computed:
    title: ->
      "#{@exhibition.exhibition.title} #{@exhibition.exhibition.sub_title}"
    description: ->
      names = @makers.map (m) =>
        "#{m.first_name} #{m.last_name}"
      "#{@exhibition.exhibition.title} #{@exhibition.exhibition.sub_title}: the artwork of - #{names.join(', ')} - Troost Gardens"
    meta_image: -> 
      "https://www.troostgardens.com#{@$img(@exhibition.primary_image.image.url)}"
    exhibition_link: ->
      "/exhibitions/#{@exhibition.exhibition.slug}/works"
    works: ->
      @exhibition.works
    makers: ->
      @exhibition.makers
    filtered_maker: ->
      @makers.find (m) =>
        m.slug == @maker_slug
    filtered_works: ->
      if @filtered_maker
        @works.filter (w) =>
          w.maker.slug == @filtered_maker.slug
      else
        @works
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
    exhibition = await context.$axios.get("http://localhost:3000/api/exhibitions/#{context.route.params.slug}.json")
    return
      exhibition: exhibition.data
      maker_slug: context.route.query?.maker
</script>
<style lang='sass' scoped>
.back
  margin-bottom: 20px
  img
    width: 20px
    margin-right: 5px
.maker
  color: #ff5722
.work
  margin-bottom: 50px
  cursor: pointer
  a
    text-decoration: none !important
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
ul
  padding: 0px
  li
    list-style: none
    margin-bottom: 3px
.xfilter
  color: red
    
</style>
