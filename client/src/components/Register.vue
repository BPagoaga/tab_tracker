<template>
  <v-layout column>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
      <panel :title="title">
        <div class="pl-4 pr-4 pb-2 pl-2">
          <form action="" name="tab-tracker-form" autocomplete="off">
            <v-text-field label="Email" v-model="email">
            </v-text-field>
            <v-text-field label="Password" type="password" autocomplete="new-password" v-model="password"></v-text-field>
            <div v-html="error" class="error"></div>
          </form>

          <v-btn class="cyan" @click="register" dark>Register</v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
        
<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data() {
    return {
      title: 'Register',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
