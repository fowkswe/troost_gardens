<template lang='pug'>
  .sunshine-and-shadow
    h1 Sunshine And Shadow
    a(href='/press-releases/Sunshine-and-Shadow-Press-Release.pdf') Download Press Release
</template>
<script lang='coffee'>
export default
  mounted: ->
    location.href = '/press-releases/Sunshine-and-Shadow-Press-Release.pdf'
</script>
