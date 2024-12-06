<template lang='pug'>
.exhibition_works
  section
    b-row.mt-5.mb-2
      b-col(cols='12' md='3')
        .back
          a(:href='`/exhibitions/${exhibition.exhibition.slug}`') 
            img(src='~/assets/graphics/back_arrow.svg')
            | Exhibition Information
      b-col(cols='12' md='9')
        .d-flex.justify-content-between.align-items
          h4.text-uppercase
            | Exhibition Works: 
            span.maker(v-if='filtered_maker') {{filtered_maker.first_name}} {{filtered_maker.last_name}}
          router-link.d-none.d-lg-block(:to='exhibition_link' v-if='filtered_maker') View All


    b-row
      b-col(cols='12' md='3')
        .mb-5
          h3.mb-5
            | {{exhibition.exhibition.title}}: 
            span.lowercase {{exhibition.exhibition.sub_title}}
          .mb-5
            | {{exhibition.exhibition.start_date | dayjs('MMMM D, YYYY')}}
            br 
            | {{exhibition.exhibition.end_date | dayjs('MMMM D, YYYY')}}
        .mb-5
          h3 Artists
          .whisper (click to filter)
          ul.makers
            li(v-for='maker in makers') 
              img(src='~/assets/graphics/forward_arrow.svg' v-if='maker.slug == maker_slug')
              router-link.filter(:to='`/exhibitions/${exhibition.exhibition.slug}/works?maker=${maker.slug}`') 
                | {{maker.first_name}} {{maker.last_name}}
          router-link(:to='exhibition_link' v-if='filtered_maker') View All
      b-col(cols='12' md='9')
        .mb-5
          b-row
            b-col.mb-4(v-for='work in filtered_works' :key='work.id' cols='12' md='4')
              .work.h-100
                nuxt-link(:to='workUrl(work)').d-flex.flex-column.justify-content-between.h-100
                  .image(v-if='thumb(work)')
                    nuxt-img(:src='thumb(work)')
                  .info
                    h4 {{work.title}}
                    h5 {{work.maker.first_name}} {{work.maker.last_name}}
                    h5 {{work.medium}}
                    h5 {{work.dimensions}}
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
  img
    width: 20px
    margin-right: 5px
.maker
  color: #ff5722
.work
  padding-bottom: 50px
  cursor: pointer
  a
    text-decoration: none !important
    border-bottom: 1px solid white
  .image
    margin-bottom: 40px
    height: 100%
    display: flex
    align-items: center
    img
      width: 100%
.info
  h4, h5
    font-weight: normal
    margin-bottom: 5px
    font-size: 14px
  h4
    font-weight: 400
    font-style: italic
ul
  padding: 0px
  li
    list-style: none
    margin-bottom: 3px
.makers
  img
    width: 14px
</style>
