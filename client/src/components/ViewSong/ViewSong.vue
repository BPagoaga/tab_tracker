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
import SongsHistoryService from "@/services/SongsHistoryService";
import { mapState } from "vuex";

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
    const songId = this.route.params.songId;
    this.song = (await SongsService.show(songId)).data;

    if (this.isUserLoggedIn) {
      SongsHistoryService.post({
        songId,
        userId: this.user.id
      });
    }
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user", "route"])
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
