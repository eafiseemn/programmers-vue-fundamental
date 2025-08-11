<script setup lang="ts">
import { useUserStore } from '../store/user-options';

const user = useUserStore();

user.fetchUser();

// 상태 변경 & 업데이트
// user.$patch((state) => {
//   state.item.push ({ 
//     name: '...',
//     website: '...',
//     ...
//    })
// })

</script>

<template>
  <div>
    <h1>Use List</h1>
    <ul>
      <li v-for="users in user.userData" :key="users.id">{{ users.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

li {
  text-align: left;
}

</style>