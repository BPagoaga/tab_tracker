<template>
  <v-layout column>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
      <v-form>
        <panel :title="title">
          <div class="pl-4 pr-4 pb-2 pl-2">
            <v-text-field label="Email" type="email" v-model="email"></v-text-field>
            <v-text-field label="Password" type="password" v-model="password"></v-text-field>
            <v-alert class="ml-4" :value="error" transition="scale-transition" error>
              {{error}}
            </v-alert>

            <v-btn class="cyan" @click="submit" dark>Login</v-btn>
          </div>
        </panel>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      title: "Login",
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async submit() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        // redirect the user to the songs page after logging
        this.$router.push({
          name: "Songs"
        });
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
