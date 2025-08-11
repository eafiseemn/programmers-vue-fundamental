<!-- ----------------------------------------------------------------------- -->
<!--                     Emit & v-model .. and Slot                          -->
<!-- ----------------------------------------------------------------------- -->


<script setup lang="ts">
import { ref } from 'vue';
import ChildComp from './ChildComp10-2.vue';

const score = ref(2);
const comment = ref('');


</script>

<template>
  <div>
    <ChildComp v-model:score="score" v-model:comment="comment">
      Hello, World!

      <template #extra>
        Nice to Meet You!
      </template>

      Hola~
    </ChildComp>
    <p>score : {{ score }}</p>
    <p>comment : {{ comment }}</p>
  </div>
</template>

<style scoped>

</style>