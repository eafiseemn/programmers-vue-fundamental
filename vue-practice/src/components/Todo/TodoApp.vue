<script setup lang="ts">
import { computed, ref } from 'vue';
import TodoList from './TodoList.vue';
import TodoStats from './TodoStats.vue';
import TodoForm from './TodoForm.vue';
import TodoFilter from './TodoFilter.vue';

const nextTodoId = ref(4);
const isFiltered = ref(false);

const todos = ref([
  { id: 1, text: 'Vue 학습하기', completed: false },
  { id: 2, text: 'Component 분리하기', completed: false },
  { id: 3, text: 'Emit 이해하기', completed: false },
])

function handleDeleteTodo(id:number) {
  const index = todos.value.findIndex(t => t.id === id);
  if(index > -1) {
    todos.value.splice(index, 1);
  }
}

function handleToggleTodo(id:number) {
  const todo = todos.value.find(t => t.id === id);
  if(todo) {
    todo.completed = !todo.completed;
  }
}

const handleAddTodo = (text:string) => {
  todos.value.push({
    id:nextTodoId.value++,
    text,
    completed:false
  });
}

// 파생 상태
const completedCount = computed(() => {
  return filteredTodo.value.filter(t => t.completed).length;
})

const filteredTodo = computed(() => isFiltered.value 
  ? todos.value.filter(t => !t.completed) 
  : todos.value
);

</script>

<template>
  <div class="todo-app">
    <h1>To Do List📋</h1>

    <TodoStats
      :total="filteredTodo.length"
      :completed="completedCount"
    />
    <TodoList 
      :todos="filteredTodo"
      @toggle-todo="handleToggleTodo" 
      @delete-todo="handleDeleteTodo"
    />

    <TodoForm
      @add-todo="handleAddTodo"
    />
    <TodoFilter
      :active="isFiltered"
      :remainder="filteredTodo.length - completedCount"
      @toggle="isFiltered = !isFiltered"
    />
  </div>
</template>

<style scoped>

.todo-app {
  max-width: 600px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
}

</style>