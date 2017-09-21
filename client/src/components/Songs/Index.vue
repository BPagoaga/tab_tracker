<template>
  <v-layout column>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
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
    </v-flex>
  </v-layout>
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
