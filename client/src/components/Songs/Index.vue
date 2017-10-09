<template>
  <v-container fluid grid-list-md>
    <v-layout row>
      <v-flex xs-12 sm8 offset-sm2 md6 offset-md0 v-if="isUserLoggedIn">
        <songs-bookmarks></songs-bookmarks>
        <recently-viewed-songs class="mt-2" />
      </v-flex>
      <v-flex xs12 sm8 offset-sm2 offset-md0 :class="{
        md6: isUserLoggedIn,
        md12: !isUserLoggedIn
      }">
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
import { mapState } from "vuex";

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
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  }
};
</script>

<style scoped>

</style>
