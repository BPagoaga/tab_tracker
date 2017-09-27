<template>
  <panel :title="title">
    <v-text-field label="Search by song, artiste, album or genre" v-model="search"></v-text-field>
  </panel>
</template>

<script>
export default {
  data() {
    return {
      title: "Search",
      search: ""
    };
  },
  watch: {
    search: function(value) {
      const route = {
        name: "Songs"
      };
      setTimeout(() => {
        if (this.search !== "") {
          route.query = {
            search: this.search
          };
        }

        this.$router.push(route);
      }, 400);
    },

    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>

<style>

</style>
