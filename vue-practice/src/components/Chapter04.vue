<!-- ----------------------------------------------------------------------- -->
<!--                              Form Binding                               -->
<!-- ----------------------------------------------------------------------- -->

<!-- 
v-bind 와 v-on을 함께 사용하면 폼 입력 요소에 양방향 데이터 바인딩이 가능합니다.
vue는 브라우저의 Event를 그대로 사용합니다.

v-model은 input값이 바인딩 된 상태와 자동으로 동기화 됩니다. (이벤트 핸들러가 필요하지 않습니다.)

v-model은 텍스트 뿐만 아니라 체크박스, 라디오, 드롭다운 등 다양한 인터렉션 태그들에 사용 가능합니다.
-->

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
const modelText = ref('');

const onChangeInput = (e: Event) => {
  // console.log('changed!');
  const target = e.target as HTMLInputElement;
  text.value = target.value;
}

</script>

<template>
  <h2>Ref & EventHandler </h2>
  <input type="text" @input="onChangeInput" />
  <p>입력 값 : {{ text }}</p>

  <hr />

  <h2>V-Model</h2>
  <input type="text" v-model="modelText" />
  <p>입력 값 : {{ modelText }} </p>
</template>

<style scoped>

</style>