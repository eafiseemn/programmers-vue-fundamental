<!-- ----------------------------------------------------------------------- -->
<!--                            Provide & Inject                             -->
<!-- ----------------------------------------------------------------------- -->


<script setup lang="ts">
import { provide, ref } from 'vue';
import ChildComp from './ChildComp10-4.vue';
import { scoreKey } from '../store/score';

const score = ref(3);
const comment = ref('');

const updateScore = (v:number) => score.value = v;
const updateComment = (v:string) => comment.value = v;

provide(scoreKey, { score, comment, updateScore, updateComment });

</script>

<template>
  <div>
    <strong>Parent</strong>
    <p>score : {{ score }}</p>
    <p>comment : {{ comment }}</p>
    <hr />
    <ChildComp />
  </div>
</template>

<style scoped>

</style>