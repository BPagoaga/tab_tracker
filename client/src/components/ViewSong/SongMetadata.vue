<template>
  <panel title="Song Metadata" classList="full-height-panel">
    <div slot="edit-song">
          <v-btn class="cyan accent-2" light absolute middle right fab :to="{ name: 'Edit Song', params: { songId: song.id }}" router>
            <v-icon>edit</v-icon>
          </v-btn>
        </div>
    <v-list two-line>
      <v-subheader v-if="song.title" v-text="song.title"></v-subheader>
      <v-list-tile>
        <v-list-tile-avatar>
          <img :src="song.albumImage">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title> Artiste</v-list-tile-title>
          <v-list-tile-sub-title v-html="song.artist"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-style-content>
          <v-list-tile-title> Album</v-list-tile-title>
          <v-list-tile-sub-title v-html="song.album"></v-list-tile-sub-title>
        </v-list-style-content>
      </v-list-tile>
    </v-list>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  components: {
    Panel
  },
  props: ["song"]
};
</script>

<style scoped>

</style>
