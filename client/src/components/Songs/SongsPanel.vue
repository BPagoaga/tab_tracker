<template>
  <panel :title="title">
    <div slot="add-song">
      <v-btn class="cyan accent-2" light medium absolute right fab to="/songs/create" router>
        <v-icon>add</v-icon>
      </v-btn>
    </div>
    <v-list two-line>
      <template v-for="song in songs">
        <v-subheader :key="song.id" v-if="song.title" v-text="song.title"></v-subheader>
        <v-list-tile :key="song.id">
          <v-list-tile-avatar>
            <img :src="song.albumImage">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="song.artist"></v-list-tile-title>
            <v-list-tile-sub-title v-html="song.artist"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-btn class="cyan accent-2" light small right fab :to="{ name: 'Edit Song', params: { songId: song.id }}" router>
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn class="cyan accent-2" light medium right :to="{ name: 'View Song', params: { songId: song.id }}" router>View</v-btn>
        </v-list-tile>
      </template>
    </v-list>
  </panel>
</template>

<script>
import SongsService from "@/services/SongsService";

export default {
  data() {
    return {
      title: "Songs",
      songs: null
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.songs = (await SongsService.index(value)).data;
      }
    }
  },

  async mounted() {
    // request to the backend to get all songs
    this.songs = (await SongsService.index()).data;
  }
};
</script>

<style>

</style>
