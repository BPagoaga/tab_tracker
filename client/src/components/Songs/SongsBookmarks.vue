<template>
  <panel :title="title">
    <v-data-table
      :headers="headers"
      :items="bookmarks"
      :pagination.sync="pagination"
    >
      <template slot="items" scope="props">
      <td>{{ props.item.title }}</td>
      <td class="text-xs-right">{{ props.item.artist }}</td>
    </template>
    </v-data-table>
  </panel>
</template>

<script>
import SongsPanel from "@/components/Songs/SongsPanel";
import SongsSearchPanel from "@/components/Songs/SongsSearchPanel";
import SongsBookmarks from "@/components/Songs/SongsBookmarks";
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
  },
  data() {
    return {
      title: "Bookmarks",
      bookmarks: [],
      pagination: {
        sortBy: "date",
        descending: true
      },
      headers: [
        {
          text: "Title",
          value: "title"
        },
        {
          text: "Artist",
          value: "artist"
        }
      ]
    };
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index()).data;
    }
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  }
};
</script>

<style scoped>

</style>
