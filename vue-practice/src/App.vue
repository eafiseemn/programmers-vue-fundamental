<script setup lang="ts">
import Chapter from './components/Chapter.vue';
import ScoreProvider from './store/ScoreProvider.vue';
// import RefVsReactive from './components/RefVsReactive.vue';
// import Model from './components/Model.vue';
// import VIf from './components/V-if.vue';
// import VIfFor from './components/v-if-for.vue';
// import TodoApp from './components/Todo/TodoApp.vue';

</script>

<template>
  <ScoreProvider>
    <Chapter />
  </ScoreProvider>
  <!-- <hr /> -->
  <!-- <RefVsReactive /> -->
  <!-- <Model /> -->
  <!-- <VIf /> -->
  <!-- <v-if /> -->
  <!-- <VIfFor /> -->
  <!-- <TodoApp /> -->
</template>

<style scoped>
</style>
