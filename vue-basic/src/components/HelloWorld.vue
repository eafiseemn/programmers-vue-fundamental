<script setup lang="ts">
const props = defineProps<{ msg: string }>()
console.log(props.msg);
</script>

<template>
  <div>
    hello, world!
    {{ msg }}
  </div>
</template>

<style scoped>

</style>