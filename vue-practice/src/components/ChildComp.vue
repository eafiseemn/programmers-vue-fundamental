<!-- ----------------------------------------------------------------------- -->
<!--                                 Provider                                -->
<!-- ----------------------------------------------------------------------- -->
 
<script setup lang="ts">
import GrandChild from './GrandChild.vue';

</script>

<template>
  <div>
    <strong>Child</strong>
    <p>중간 Child는 아무것도 받지 않습니다.</p>
    <hr />
    <GrandChild />
  </div>
</template>

<style scoped>

</style>