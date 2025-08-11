<script setup lang="ts">
import { ref } from 'vue';
import ChildComp from './ChildComp10-1.vue';

const message = ref('');
const childMsg = ref('자식 컴포넌트로부터 아직 메시지를 받지 못했어요!');
const handler = () => {
  console.log('clicked');
  message.value = '부모가 자식에게 전달한 데이터📥';
}

</script>

<template>
  <div>
    {{ childMsg }}
    <!-- v-bind를 이용해 props 전달하기 -->
    <!-- @emit-variable를 이용해 자식의 emit 받아오기 -->
    <ChildComp :msg="message" :onHandle="handler" @response="msg => childMsg = msg" />
  </div>
</template>

<style scoped>

</style>