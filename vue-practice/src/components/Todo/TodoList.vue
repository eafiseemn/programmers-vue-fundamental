<script setup lang="ts">
import type { Todo } from './type';
import TodoItem from './TodoItem.vue';

defineProps<{
  todos: Todo[];
}>();

const emit = defineEmits<{
  'toggle-todo':[id:number],
  'delete-todo':[id:number]
}>();

const handleToggle = (id:number) => {
  emit('toggle-todo', id);
}

const handleDelete = (id:number) => {
  emit('delete-todo', id);
}

</script>

<template>
  <ul class="todo-list" v-if="todos.length > 0">
    <!-- <li v-for="todo in todos" :key="String(todo.id)">
      <input type="checkbox" :value="todo.completed" />
      {{ todo.text }}
    </li> -->
    <TodoItem 
      v-for="todo in todos" 
      :key="String(todo.id)"
      :todo="todo"
      @toggle="handleToggle"
      @delete="handleDelete"
    />
  </ul>
  <div class="empty-state" v-else>
    <p>남은 할 일이 없습니다. 새로운 할 일을 추가해보세요!</p>
  </div>
</template>

<style scoped>
.todo-list {
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);

  li {
    list-style: none;
    text-align: left;
  }
}

.empty-state {
  padding: 40px;
  color: #888;
}


</style>