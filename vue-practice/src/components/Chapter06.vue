<!-- ----------------------------------------------------------------------- -->
<!--                              List Rendering                             -->
<!-- ----------------------------------------------------------------------- -->

<!-- 
Vue의 리스트 렌더링은 v-for 디렉티브를 사용하여 만들 수 있습니다.
Vue는 내부적으로 Proxy를 사용하기 때문에 immutable 데이터를 강제하지 않습니다. (직접 Push 가능)
 -->


<script setup lang="ts">

import { ref } from 'vue';

let id = 0;

interface Todo {
  id: number;
  text: string;
}

const todos = ref<Todo[]>([
  { id: id++, text: 'HTML 배우기'},
  { id: id++, text: 'CSS 배우기'},
  { id: id++, text: 'JavaScript 배우기'},
  { id: id++, text: 'TypeScript 배우기'},
  { id: id++, text: 'React 배우기'},
  { id: id++, text: 'Vue 배우기'},
]);

const newTodo = ref('');

const addTodo = () => {
  // e.preventDefault(); // vue에서는 @submit.prevent로 preventDefault 불러오기 가능
  const newTodoItem = newTodo.value.trim();

  if(!newTodoItem) {
    alert('할 일을 입력해주세요!');
    return;
  }

  todos.value.push({ id: id++, text: newTodoItem });

  // 입력 필드 초기화
  newTodo.value = '';
}

const deleteTodo = (id:number) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
}

</script>

<template>
  <h1>To-Do List</h1>
  <div v-if="todos.length > 0"  style="margin-bottom: 1.2rem;">총 할 일 : {{ todos.length }} 개</div>
  <div v-else style="margin-bottom: 1.2rem;">할 일 끝! 🥳</div>
  <form class="inputWrapper" @submit.prevent="addTodo">
    <input type="text" placeholder="할 일을 입력하세요" v-model="newTodo" />
    <button type="submit">➕</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button type="button" @click="() => deleteTodo(todo.id)">❌</button>
    </li>
  </ul>
</template>

<style scoped>
li {
  text-align: left;
  display: list-item;
  margin-bottom: 1rem;
  list-style-type: disc;
}

button {
  margin-left: 2rem;
  padding: 0.3rem 1rem;
}

input {
  width: 100%;
  height: 2rem;
}

.inputWrapper {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  
  button {
    margin: 0;
    padding: 0.5rem 0.3rem;
  }
}
</style>