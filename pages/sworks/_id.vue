<template lang="pug">
  .sworks

</template>
<script lang="ts">
import { useSanityClient } from 'vue-sanity'

export default {
  name: 'App',
  setup () {
    useSanityClient({
      projectId: 'gwsyyifo',
      dataset: 'production',
      useCdn: process.env.NODE_ENV === 'production'
    })
  }
}
</script>
