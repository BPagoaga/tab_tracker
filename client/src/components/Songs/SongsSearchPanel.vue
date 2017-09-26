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
    search(value) {
      console.log(value);
      const route = {
        name: "Songs"
      };

      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }

      this.$router.push(route);
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
