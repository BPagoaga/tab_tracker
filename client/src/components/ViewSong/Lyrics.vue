<template>
  <panel title='Lyrics'>
    <textarea v-model="lyrics" readonly></textarea>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  components: {
    Panel
  },
  props: ["lyrics"]
};
</script>

<style>

</style>
