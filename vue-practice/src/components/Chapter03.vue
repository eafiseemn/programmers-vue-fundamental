<!-- ----------------------------------------------------------------------- -->
<!--                                EventListener                            -->
<!-- ----------------------------------------------------------------------- -->

<!-- 
v-on 디렉티브를 사용하여 DOM 이벤트를 감지할 수 있습니다.
v-on의 축양 문법은 @ 기호로 사용합니다. 

vue는 setup 함수를 전체 다시 실행하지 않습니다.
- 컴포넌트가 최초로 마운트될 때 단 한번만 실행.
- 이후 ref나 reactive가 변경되더라도 
    컴포넌트는 다시 렌더링되지만
    setup은 다시 실행되지 않음.

반응형 값이 아닌 값을 수정할 경우 vue는 리렌더링을 진행하지 않고, 반응형 값만 업데이트함.

| Composition API 함수         설명                                 |
| --------------------- | -------------------------------         |
| `onBeforeMount()`     | DOM이 마운트되기 직전에 호출                  |
| `onMounted()`         | DOM이 마운트된 직후 한 번 호출                |
| `onBeforeUpdate()`    | 반응형 값 변경으로 DOM 업데이트 전에 호출        |
| `onUpdated()`         | DOM 업데이트 후 호출                        |
| `onBeforeUnmount()`   | 컴포넌트가 DOM에서 제거되기 직전에 호출          |
| `onUnmounted()`       | 컴포넌트가 제거된 직후 호출                    |
| `onActivated()`       | `<keep-alive>` 컴포넌트가 활성화될 때 호출     |
| `onDeactivated()`     | `<keep-alive>` 컴포넌트가 비활성화될 때 호출    |
| `onErrorCaptured()`   | 하위 컴포넌트에서 발생한 오류를 캐치할 때          |
| `onRenderTracked()`   | 반응형 추적 디버깅용                          |
| `onRenderTriggered()` | 반응형 값이 변경되어 컴포넌트가 다시 렌더링될 때     |
 -->

<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';

const count = ref(0);

// 2. component가 mount 되었을 때
onMounted(() => {
  console.log('Mounted!');
});

// 1. mount 직전 (layout처럼)
onBeforeMount(() => {
  console.log('beforeMount!');
});

// 4. dom이 업데이트 되었을 때
onUpdated(() => {
  console.log('Updated!');
});
// watchEffect가 언제 실행될 지 명확하지 않으면 안정성을 위해 onUpdated를 사용

// 3. dom 업데이트 직전
onBeforeUpdate(() => {
  console.log('beforeUpdate!')
})

const updateCounter = () => {
  count.value++;
}
const resetCounter = () => {
  count.value = 0;
}

</script>

<template>
  <button type="button" @click="updateCounter">숫자 세기 : {{ count }}</button>
  <button type="button" @click="resetCounter">숫자 초기화</button>
</template>

<style scoped>
button {
  display: block;
  margin-bottom: 1.2rem;
}
</style>