<template lang='pug'>
  .you-like-what-you-know
    h1 You Like What You Know
    a(href='/press-releases/You-Like-What-You-Know-Press-Release.pdf') Download Press Release
</template>
<script lang='coffee'>
export default
  mounted: ->
    location.href = '/press-releases/You-Like-What-You-Know-Press-Release.pdf'
</script>
