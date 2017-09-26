<template>
  <v-container fluid grid-list-md>
    <v-layout row>
      <v-flex xs12 sm6>
        <song-metadata :song="song"></song-metadata>
      </v-flex>
      <v-flex xs12 sm6>
        <you-tube :youtubeId="song.youtubeId"></you-tube>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6>
        <song-structure :song="song"></song-structure>
      </v-flex>
      <v-flex xs12 sm6>
        <lyrics :lyrics="song.lyrics"></lyrics>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongsService from "@/services/SongsService";
import SongMetadata from "@/components/ViewSong/SongMetadata";
import SongStructure from "@/components/ViewSong/SongStructure";
import YouTube from "@/components/ViewSong/YouTube";
import Lyrics from "@/components/ViewSong/Lyrics";

export default {
  components: {
    SongMetadata,
    SongStructure,
    YouTube,
    Lyrics
  },
  data() {
    return {
      song: null
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data;
  }
};
</script>

<style>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 700px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
