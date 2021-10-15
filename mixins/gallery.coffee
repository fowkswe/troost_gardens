 export default
  data: ->
    currentImage: 0
  mounted: ->
    window.addEventListener 'keydown', @presser
  beforeDestroy: ->
    window.removeEventListener 'keydown', @presser
  methods:
    presser: (e) ->
      console.log(e.keyCode);
      if e.keyCode == 37
        @previousImage()
      else if e.keyCode == 39
        @nextImage()
      else if e.keyCode == 27
        @$emit('escapeKey')
    previousImage: ->
      clearInterval(@runner) if @runner
      if @currentImage == 0
        @currentImage = @images.length - 1
      else
        @currentImage--
    nextImage: ->
      clearInterval(@runner) if @runner
      if @currentImage < @images.length - 1
        @currentImage++
      else
        @currentImage = 0
    slideClass: (image) ->
      if image == @currentImage
        'show'
      else
        'hide'
