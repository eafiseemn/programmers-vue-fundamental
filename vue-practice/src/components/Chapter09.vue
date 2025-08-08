<!-- ----------------------------------------------------------------------- -->
<!--                                 Watchers                                -->
<!-- ----------------------------------------------------------------------- -->

<script setup lang="ts">
import { ref, watch } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';


const todoId = ref(1);
const todoData = ref(null);
const isLoading = ref(false);

async function fetchData() {

  isLoading.value = true;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
    if(!res.ok) {
      console.error('fetch 실패');
      return;
    }

    const data = await res.json();
    todoData.value = data;

    return data.title;
  } catch(err) {
    console.error('fetch 실패', err);
  } finally {
    isLoading.value = false;
  }
  
}

fetchData();

// todoId가 변경될 때마다 fetchData를 실행
watch(todoId, fetchData);

// cleanup
// const handle = watch(...);

// 일시정지, 중단, 재시작 등도 제어 가능
// const { pause, stop, resume } = watch(...);

</script>

<template>
  <div class="container">
    <p>할 일 ID : {{ todoId }}</p>
    <button type="button" @click="todoId++">다음 할 일 가져오기</button>

    <p v-if="isLoading">로딩 중...</p>
    <hr />
    <!-- <Suspense>
      <template #fallback="LoadingSpinner"></template>
    </Suspense> -->
    <LoadingSpinner v-if="isLoading" />
    <pre v-else>
      <code> {{ todoData }} </code>
    </pre>
  </div>
</template>

<style scoped>

.container {
  width: 500px;
  height: 500px;
}

pre {
  background-color: rgb(67, 73, 80);
  border-radius: 0.3rem;
}

code {
  color: whitesmoke;
  text-align: left;
}

</style>