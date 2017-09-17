<template>
  <panel :title="title">
    <h1>Title</h1>

    <v-list two-line>
      <template v-for="song in songs">
        <v-subheader :key="song.id" v-if="song.title" v-text="song.title"></v-subheader>
      </template>
      <template v-for="song in songs">
        <v-list-tile :key="song.id">
          <v-list-tile-avatar>
            <img v-bind:src="song.albumImage">
          </v-list-tile-avatar>
          <v-list-tile-content>

            <v-list-tile-title v-html="song.artist"></v-list-tile-title>
            <v-list-tile-sub-title v-html="song.artist"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title v-html="song.lyrics"></v-list-tile-title>
            <v-list-tile-sub-title v-html="song.lyrics"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data() {
    return {
      title: 'Songs',
      songs: null
    }
  },
  async mounted() {
    // request to the backend to get all songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

</style>
