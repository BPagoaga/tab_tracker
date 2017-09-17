<template>
  <panel :title="title">
    <v-text-field label="Titre" v-model="song.title"></v-text-field>
    <v-text-field label="Artiste" v-model="song.artiste"></v-text-field>
    <v-text-field label="Genre" v-model="song.genre"></v-text-field>
    <v-text-field label="Album" v-model="song.album"></v-text-field>
    <v-text-field label="Image" v-model="song.albumImage"></v-text-field>
    <v-text-field label="Youtube" v-model="song.youtube"></v-text-field>
    <v-text-field label="Lyrics" v-model="song.lyrics"></v-text-field>
    <v-text-field label="Tab" v-model="song.tab"></v-text-field>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
// import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data() {
    return {
      title: 'Create Song',
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  }
}
</script>

<style>

</style>
