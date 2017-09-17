<template>
  <v-layout column>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pb-2 pl-2">
          <slot></slot>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title'
  ],
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
