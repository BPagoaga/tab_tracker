<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="add-song"></slot>
    </v-toolbar>

    <div class="pl-4 pr-4 pb-2 pl-2">
      <slot></slot>
    </div>
  </div>
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
