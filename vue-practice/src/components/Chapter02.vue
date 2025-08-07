/* -------------------------------------------------------------------------- */
/*                            속성 바인딩 (v-bind)                               */
/* -------------------------------------------------------------------------- */

<script setup lang="ts">
import { ref } from 'vue';

const titleClass = ref('title');
const color = ref('빨강');

const toggleClass = () => {
  // titleClass.value = titleClass.value === 'title' ? 'done' : 'title';
  if (titleClass.value === 'title') {
    titleClass.value = 'done';
    color.value = '파랑'; 
  } else {
    titleClass.value = 'title';
    color.value = '빨강'; 
  }
  
};

</script>

<template>
  <div>
    <h1 v-bind:class="titleClass">나는 {{ color }} !</h1>
    <h1 :id="titleClass">나는 {{ color }} !</h1>

    <button type="button" @click="toggleClass">Toggle</button>
  </div>
</template>

<style scoped>
#title,
.title {
  color: red;
}
#done,
.done {
  color: dodgerblue;
}

</style>