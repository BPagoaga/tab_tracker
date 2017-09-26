<template>
  <panel title="Youtube Video">
    <youtube class="youtube-wrapper" :video-id="youtubeId" :player-width="500" :player-height="200"></youtube>
  </panel>
</template>

<script>
import VueYoutubeEmbed from "vue-youtube-embed";

export default {
  components: {
    VueYoutubeEmbed
  },
  props: ["youtubeId"]
};
</script>

<style>
.youtube-wrapper>iframe {
  max-width: 100%;
}
</style>
