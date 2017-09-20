<template>
  <panel title='Song Structure'>
    <textarea v-model="song.tab" readonly></textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  props: ['song']
}
</script>

<style>

</style>
