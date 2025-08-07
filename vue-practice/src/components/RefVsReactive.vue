<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue';


const objRef = ref({ name: 'moon' });

const objReactive = reactive({
  inner: { name: 'sun' }
});

const updateObject = () => {
  console.log('clicked total!');
  const newObj = { name: 'star' };
  objRef.value = { ... newObj };
  objReactive.inner = { ...newObj };
}

const updateRef = () => {
  console.log('clicked ref!');
  const newObj = { name: 'star' };
  objRef.value = { ... newObj };
}
const updateReactive = () => {
  console.log('clicked reactive!');
  const newObj = { name: 'star' };
  objReactive.inner = { ...newObj };
}

/* 반응성 데이터를 바꾸더라도 바뀌는 부분만 실행됨 (전체 호출 & 리렌더링 X) */
// ref의 변화 감지
watchEffect(() => {
  console.log(objRef.value);
})
// reactive의 변화 감지
watchEffect(() => {
  console.log(objReactive.inner);
})

// 특정 source의 변화만 감지하고 싶을 때
watch(objRef, (newValue) => {
  console.log(newValue);
  console.log(objReactive.inner);
})

</script>

<template>
  <div>
    <h2>반응성 테스트</h2>
    <div>
      <p>ref: {{ objRef }}</p>
      <p>reactive: {{ objReactive.inner }}</p>
    </div>

    <button type="button" @click="updateObject">전체 객체를 재할당!</button>
    <button type="button" @click="updateRef">ref 객체를 재할당!</button>
    <button type="button" @click="updateReactive">reactive 객체를 재할당!</button>
  </div>
</template>

<style scoped>

</style>