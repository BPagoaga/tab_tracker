<template>
  <div :class="fullClassList">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="add-song"></slot>
      <slot name="edit-song"></slot>
    </v-toolbar>

    <div class="pl-4 pr-4 pb-2 pl-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'classList'
  ],
  data() {
    return {

    }
  },
  computed: {
    fullClassList() {
      return 'white elevation-2 ' + this.classList
    }
  }
}
</script>

<style scoped>
.full-height-panel {
  min-height: 100%;
}
</style>
