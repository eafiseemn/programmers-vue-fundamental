<!-- ----------------------------------------------------------------------- -->
<!--                                 DOM Ref                                 -->
<!-- ----------------------------------------------------------------------- -->

<!-- 

React는 useEffect 하나로 대부분을 다 처리합니다. (cleanUp 포함)
반면 Vue는 목적에 따라 watchEffect, onMounted, watch로 역할을 나눠 처리합니다.

기능별로 분리된 이유 :
반응형 시스템 (reactivity system) 이 내장되어 있기 때문
상태 추적은 watchEffect/watch가 자동/명시적으로 처리
DOM의 생명주기 처리는 onMounted, onUpdated를 통해 명확한 시점을 감지

Vue는 웬만하면 내가 다 해줄게 - 느낌; 성능 최적화/개발 편의성
React는 안 해주는 게 아니라, 난 만들어 놨다? 골라서 써 느낌; 문제가 생겼을 때 대규모 생태계 / 인력풀 / 커뮤니티 활용 가능
 -->

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { updateElementText } from '../utils/updateElementText';


const pElementRef = ref<HTMLParagraphElement | null>(null);

const isHTMLElement = (el:unknown): el is HTMLElement => {
  return el instanceof HTMLElement;
}

// DOM 을 ref로 잡아서 조작해야할 때는 Mount 된 이후의 시점에 실행 필요
onMounted(() => {
  if (!pElementRef.value) return;

  if (isHTMLElement(pElementRef.value)) {
    console.log(pElementRef.value);
    pElementRef.value.textContent = 'Mounted!';
  }

  updateElementText(pElementRef, 'Hello, Vue.js');
})

</script>

<template>
  <div>
    <p ref="pElementRef">Hello, World!</p>
  </div>
</template>

<style scoped>

</style>