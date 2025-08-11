<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter-composition01';

const counter = useCounterStore();
const { count } = storeToRefs(useCounterStore());

</script>

<template>
  <div>
    <h2>Counter App</h2>
    <button type="button" @click="counter.increment"> + </button>
    <div> {{ count }} </div>
    <button type="button" @click="counter.decrement"> - </button>
    <hr />
    <button type="button" @click="counter.resetCounter">Reset</button>
  </div>
</template>

<style scoped>

</style>