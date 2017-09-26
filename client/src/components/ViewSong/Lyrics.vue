<template>
  <panel title='Lyrics'>
    <textarea v-model="lyrics" readonly></textarea>
  </panel>
</template>

<script>
export default {
  props: ["lyrics"]
};
</script>

<style>

</style>
