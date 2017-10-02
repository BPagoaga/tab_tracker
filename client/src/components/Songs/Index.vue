<template>
  <v-container fluid grid-list-md>
    <v-layout row>
      <v-flex xs-12 sm8 offset-sm2 md6 offset-md0>
        <songs-bookmarks></songs-bookmarks>
        <recently-viewed-songs class="mt-2" />
      </v-flex>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md0>
        <songs-search-panel></songs-search-panel>
        <songs-panel class="mt-2"></songs-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongsPanel from "@/components/Songs/SongsPanel";
import SongsSearchPanel from "@/components/Songs/SongsSearchPanel";
import SongsBookmarks from "@/components/Songs/SongsBookmarks";
import RecentlyViewedSongs from "@/components/Songs/RecentlyViewedSongs";

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
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
