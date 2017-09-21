<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn flat to="/" router>
        TabTracker
      </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark to='/songs' router>Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark to="/login" router v-if="!$store.state.isUserLoggedIn">
        Login
      </v-btn>
      <v-btn flat dark to="/register" router v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark @click="logout" v-if="$store.state.isUserLoggedIn">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      // redirect to homepage
      this.$router.push({
        name: "root"
      });
    }
  }
};
</script>

<style>

</style>
