<template>
  <panel title="Song Metadata" classList="full-height-panel">
    <section class="actions">
      <div slot="edit-song" class="edit-song">
          <v-btn class="cyan accent-2" light fab :to="{ name: 'Edit Song', params: { songId: song.id }}" router>
            <v-icon>edit</v-icon>
          </v-btn>          
      </div>
      <div slot="bookmark-song" class="bookmark-song">
          <v-btn v-if="isUserLoggedIn && !bookmark" class="cyan accent-2" light fab @click="setBookmark">
            <v-icon class="green--text text--darken-2">bookmark</v-icon>
          </v-btn>  
          <v-btn v-if="isUserLoggedIn && bookmark" class="cyan accent-2" light fab @click="unsetBookmark">
            <v-icon class="red--text text--darken-2">turned_in_not</v-icon>
          </v-btn>          
      </div>
    </section>
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
        <v-list-tile-content>
          <v-list-tile-title> Album</v-list-tile-title>
          <v-list-tile-sub-title v-html="song.album"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  props: ["song"],
  data() {
    return {
      bookmark: null
    };
  },
  methods: {
    async setBookmark() {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id
        })).data;
      } catch (err) {
        console.error(err);
      }
    },
    async unsetBookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (err) {
        console.error(err);
      }
    }
  },
  async mounted() {
    if (!this.isUserLoggedIn) return;

    try {
      const bookmarks = (await BookmarksService.index({
        songId: this.song.id
      })).data;

      if (Array.isArray(bookmarks)) {
        this.bookmark = bookmarks[0] ? bookmarks[0] : null;
      }
    } catch (err) {
      console.error(err);
    }
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  }
};
</script>

<style scoped>
.edit-song,
.bookmark-song {
  float: left;
}

.full-height-panel {
  position: relative;
}

.actions {
  position: absolute;
  right: 0;
  top: 0;
}

.red {
  color: red;
}

.green {
  color: green;
}
</style>
