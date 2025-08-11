<!-- Option API -->

<!-- 

Pinia는 Vue에서 사용할 수 있는 전역 상태관리 도구입니다.
Pinia는 options syntax와 composition syntax 2가지를 사용할 수 있습니다.

store를 구조분해하려면, storeToRefs 함수가 필요합니다.
단, actions는 구조분해되지 않습니다.

 -->


<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter-options';


const counter = useCounterStore();
// console.log(counter);

// pinia의 actions는 구조분해 불가능, state도 반응성이 깨짐
// const { count, increment, decrement } = useCounterStore();

// state의 반응성을 유지하면서 구조분해하려면 storeToRefs 사용
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