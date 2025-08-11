<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
  total: number;
  completed: number;
}>();

const remainder = computed(() => props.total - props.completed);

</script>

<template>
  <div>
    <p>전체 할 일 : {{ total }} 개</p>
    <p>완료 : {{ completed }} 개 | 남은 할 일 : {{ remainder }} 개</p>
  </div>
</template>

<style scoped>

</style>