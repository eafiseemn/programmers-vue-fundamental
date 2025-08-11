<script setup lang="ts">

defineProps<{
  active:boolean,
  remainder:number
}>();

const emit = defineEmits<{
  (e:'toggle'):void;
}>()

</script>

<template>
  <div class="filter-container">
    <span>{{  remainder }} 개</span>
    <button type="button" @click="emit('toggle')">
      {{ active ? '전체 보기' : '완료된 항목 가리기' }}
    </button>
  </div>
</template>

<style scoped>
.filter-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>