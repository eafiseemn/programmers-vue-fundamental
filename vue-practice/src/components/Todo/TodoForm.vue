<script setup lang="ts">
import { ref } from 'vue';


const emit = defineEmits<{
  'add-todo':[text:string]
}>();

const newTodo = ref('');
const handleSubmit = () => {
  const newTodoItem = newTodo.value.trim();

  if(!newTodoItem || newTodoItem.length === 0) {
    alert('할 일을 입력해주세요!');
    return;
  }

  emit('add-todo', newTodoItem);
  newTodo.value = '';
}

</script>

<template>
  <form 
    class="input-wrapper"
    @submit.prevent="handleSubmit"
  >
    <input class="input-text" type="text" v-model="newTodo" />
    <button class="add-btn">추가</button>
  </form>
</template>

<style scoped>
.input-wrapper {
  width: 100%;
  display: flex;
}

.input-text {
  flex: 1;
}

.add-btn {
  border: none;
  background-color: dodgerblue;
  color: white;
  font-size: 1rem;
  margin-left: 0.5rem;
}
</style>