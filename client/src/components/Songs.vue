<template>
  <panel :title="title">
    <h1>Title</h1>

    <v-list two-line>
      <template v-for="song in songs">
        <v-subheader :key="song.title" v-if="song.title" v-text="song.title"></v-subheader>
        <!-- <v-divider v-else-if="song.divider" v-bind:inset="song.inset"></v-divider>
                      <v-list-tile avatar v-else v-bind:key="song.title" @click="" download>
                        <v-list-tile-avatar>
                          <img v-bind:src="song.avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title v-html="song.title"></v-list-tile-title>
                          <v-list-tile-sub-title v-html="song.subtitle"></v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile> -->
      </template>
    </v-list>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data() {
    return {
      title: 'Songs',
      songs: [
        { title: 'song1' },
        { title: 'song2' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
