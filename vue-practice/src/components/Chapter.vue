<!-- ----------------------------------------------------------------------- -->
<!--                                 Provider                                -->
<!-- ----------------------------------------------------------------------- -->

<script setup lang="ts">
import ChildComp from './ChildComp.vue';
import { inject } from 'vue';
import { scoreKey, type ScoreContext } from '../store/score';

const ctx = inject(scoreKey);
const { score, comment } = ctx as ScoreContext;

</script>

<template>
    <strong>Parent</strong>
    <p>score : {{ score }}</p>
    <p>comment : {{ comment }}</p>
    <hr />
    <ChildComp />
</template>

<style scoped>

</style>