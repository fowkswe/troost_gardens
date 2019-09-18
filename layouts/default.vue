<template lang='pug'>
  .container-fluidx
    header.d-flex
      .logo.p-4.align-self-center.mr-auto
        nuxt-link(to='/') 
          h1 Troost Gardens

      #menu.d-flex.align-items-center
        ul
          li
            a(href='/') Exhibitions
          li
            a(href='/') Artists
          li
            a(href='/') About
          li
            a(href='/') Visit
    .content
      Nuxt
    footer
      .logo.p-4.align-self-center.mr-auto
        h1 Troost Gardens
      h1 &copy; 2019
</template>

<style>
</style>
