<script setup lang="ts">
// auto-imports 가 있으면 import 구문을 쓰지 않아도 자동으로 불러와짐
// 대신 tsconfig.app.json 의 include에 "auto-imports.d.ts" 추가해야 Lint에서 무시됨

// import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'

const count = ref(0);   // React의 useState 처럼 작동
console.log(count.value);
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
</style>
