<!-- ----------------------------------------------------------------------- -->
<!--               조건부 표시 (v-show) / 조건부 렌더링 (v-if)                     -->
<!-- ----------------------------------------------------------------------- -->

<!-- v-show는 렌더링 되지만 display:none 처리 -->
<!-- v-if는 조건에 부합하지 않으면 아예 렌더링 되지 않음 -->
<!-- v-else는 if 조건에 부합하지 않을 경우에만 렌더링 -->
<!-- v-if-else로 다른 조건 처리도 가능 -->

<script setup lang="ts">
import { ref } from 'vue';

const awesome = ref(false);
const type = ref('');

const toggle = () => {
  awesome.value = !awesome.value;
  type.value = type.value === 'active' ? '' : 'active';
}

</script>

<template>
  <button type="button" @click="toggle">토글 버튼</button>
  <h1 v-show="awesome">Programmers 친구들은 너무 대단해!</h1>
  <h2 v-if="type === 'active'">너무 멋진 친구들이야!</h2>
  <template v-else>
    <h1>안녕 나는 Programmers 수강생이야</h1>
    <h2>Vue를 공부하고 있어!</h2>
  </template>
</template>

<style scoped>

</style>