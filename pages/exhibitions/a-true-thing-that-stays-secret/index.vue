import { h } from "@vue/composition-api";

<template lang="pug">
  .a-true-thing-that-stays-secret
    .content
      .mb-5
        .hero
          b-img(src='/images/a-true-thing-that-stays-secret/gallery-shot.jpg' fluid)
          .caption
            .credit &copy;2024 Sally Paul
            .info Tacha, Tacha, Dodson, Skorija, Tacha
      b-row
        b-col(cols='12' md='4')
          .mb-5
            h3 A True Thing That Stays Secret
            p
              | September 28, 2024 -
              br
              |  November 2, 2024
          .mb-5
            h3 Artists
            ul
              li
                a(href='https://www.instagram.com/erinlindsdods/' target='_blank') Erin Dodson
              li
                a(href='https://www.instagram.com/alex_skorija/' target='_blank') Alex Skorija
              li
                a(href='https://www.instagram.com/lbtk/' target='_blank') Leah Tacha
              li
                a(href='https://www.instagram.com/katoler/' target='_blank') Katherine Toler
        b-col(cols='12' md='8')
          .mb-5
            p <i>A True Thing That Stays Secret</i>, a group exhibit featuring work by Erin Dodson, Alex Skorija, Leah Tacha and Katherine Toler. A True Thing That Stays Secret takes its title from the text of an article by Alina Stefanescu, on the aesthetic merits of the ellipse in poetry, prose, and translation. She affectionately describes how these three dots can show the tension between what is revealed and what is omitted, what is spoken and what breaks off into silence, what points without explaining. The works in this exhibition engage this tension through various modes of material exploration in response to intuitive and spontaneous image generation, emotional reverberations, or sensory experiences of the physical world.
          .mb-5
            h3 Erin Dodson
            p I see the world through a lens of creation, decay, and time. I hope to share the experience of living in a temporary body, in the context of geological time, situated somewhere within the infinite. I think of the things I will leave behind after my own time, and I see the sediment of the past becoming the ground of the future; I see places for decay to abstract, obliterate, and join the physical to the divine. Photography, drawing, painting, ceramics and sculpture have all provided possibilities to explore these themes. A practice of sustained observation and attention to experience leads to images that are personal and unfixed.
          .mb-5
            h3 Alex Skorija
            p These abstract works reflect the artist’s intuitive and emotive process of experimenting with a variety of compositional possibilities. Skorija’s paintings evoke a sense of luminosity with their sensitivity to color and contemplative subtlety.
          .mb-5
            h3 Leah Tacha
            p My work is flexing somewhere between the tender and the powerful.  I am compelled to make artwork that is as straightforward, honest, and unpredictable as daily life. As a woman, it is paramount for me to say what I want in a powerful and clear way.  I want to make sense of the various identities a woman can contain, those that I take on in my daily life, and the female archetypes that I grew up with and surround us today. I’m focusing on reconciling the expansiveness of this mental and physical landscape and I find myself in a new understanding of our society's deep misogyny. There is simultaneous joy and comfort with the backdrop of clawing to make space for ourselves. My space is made through an intuitive base of drawing and collage from the heart, the transformation of clay reflecting the pulses of the body and sculptures that contain the power of a distinctive vision of a singular woman.
          .mb-5
            h3 Katherine Toler
            p My work is a record of observations of natural and emotional landscapes and explores the subtlety and inexplicable aspects of feeling and color. Records of sensation, carved in stone. It’s palpable— something pure and undisturbed. A subtle awareness, the feeling of air. Documenting sensation is like following ghosts or chasing shadows. Capturing color that is hovering between one moment and the next. Tracing the silhouettes, trying to define their form. The feeling of a cool rock in my hand. The light you see when you close your eyes.


</template>
<script lang='coffee'>
export default
  mounted: ->
</script>
<style lang='sass'>
</style>
