<template>
  <v-layout column>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
      <songs-search-panel></songs-search-panel>
      <songs-panel class="mt-2"></songs-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from "@/components/Songs/SongsPanel";
import SongsSearchPanel from "@/components/Songs/SongsSearchPanel";

export default {
  components: {
    // Panel,
    SongsPanel,
    SongsSearchPanel
  },
  data() {
    return {
      title: "Songs"
    };
  }
};
</script>

<style scoped>

</style>
