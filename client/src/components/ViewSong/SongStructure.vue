<template>
  <panel title='Song Structure'>
    <textarea v-model="song.tab" readonly></textarea>
  </panel>
</template>

<script>
export default {
  props: ["song"]
};
</script>

<style>

</style>
