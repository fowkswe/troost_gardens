<template lang='pug'>
  .sunshine-and-shadow
    h1 Primer: Charged Abstraction
    a(href='/press-releases/primer-press-release.pdf') Download Press Release
</template>
<script lang='coffee'>
export default
  mounted: ->
    location.href = '/press-releases/primer-press-release.pdf'
</script>
