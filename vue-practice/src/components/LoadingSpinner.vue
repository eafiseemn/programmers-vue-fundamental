<script setup lang="ts">

</script>

<template>
  <div class="loading-component">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>

.loading-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px 0;
}

.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid rgba(135, 206, 250, 0.4);
  border-top: 5px solid dodgerblue;
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>