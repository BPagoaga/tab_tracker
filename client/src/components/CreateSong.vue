<template>
  <v-layout row>
    <v-flex xs12 md5>
      <panel :title="titleLeft">
        <v-text-field label="Titre" v-model="song.title" required :rules="[required]"></v-text-field>
        <v-text-field label="Artiste" v-model="song.artist" required :rules="[required]"></v-text-field>
        <v-text-field label="Genre" v-model="song.genre" required :rules="[required]"></v-text-field>
        <v-text-field label="Album" v-model="song.album" required :rules="[required]"></v-text-field>
        <v-text-field label="Image" v-model="song.albumImage" required :rules="[required]"></v-text-field>
        <v-text-field label="Youtube" v-model="song.youtubeId" required :rules="[required]"></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs12 md6 offset-md1>
      <panel :title="titleRight">
        <v-text-field label="Lyrics" v-model="song.lyrics" multi-line required :rules="[required]"></v-text-field>
        <v-text-field label="Tab" v-model="song.tab" multi-line required :rules="[required]"></v-text-field>
      </panel>

      <v-alert class="ml-4" :value="error" transition="scale-transition" error>
        {{error}}
      </v-alert>
      <v-btn class="cyan" @click="create" dark>Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
import SongsService from "@/services/SongsService";

export default {
  components: {
    Panel
  },
  data() {
    return {
      titleLeft: "Song metadata",
      titleRight: "Song structure",
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: value => !!value || "Required"
    };
  },
  methods: {
    async create() {
      this.error = null;
      const allFieldsFilled = Object.keys(this.song).every(key => {
        !!this.song[key];
      });
      console.log("hi", allFieldsFilled);
      if (!allFieldsFilled) {
        this.error = "Please fill all the fields";
        // return
      }

      try {
        await SongsService.post(this.song);
        this.$router.push({
          name: "Songs"
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style>

</style>
