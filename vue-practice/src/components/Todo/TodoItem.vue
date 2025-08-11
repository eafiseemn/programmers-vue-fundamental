<script setup lang="ts">
import { useId } from 'vue';
import type { Todo } from './type';

const props = defineProps<{
  todo:Todo
}>();

const emit = defineEmits<{
  toggle: [id:number],
  delete: [id:number]
}>();

const checkboxId = useId();

const toggleTodo = () => {
  emit('toggle', props.todo.id);
}

const deleteTodo = () => {
  emit('delete', props.todo.id);
}

</script>

<template>
  <li class="todo-item" :class="{ completed: todo.completed }">
    <input 
      type="checkbox" 
      class="todo-checkbox" 
      :id="checkboxId"
      :checked="todo.completed" 
      @change="toggleTodo"
    />
    <label :for="checkboxId">
      <span class="todo-text">{{ todo.text }}</span>
    </label>

    <button type="button" class="delete-btn" @click="deleteTodo">삭제</button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 1rem 0.8rem ;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.todo-item:hover {
  background-color: rgba(100, 82, 203, 0.2);
}

.delete-btn {
  padding: 0.3rem 0.5rem;
  margin-left: 2rem;
  background-color: rgba(255, 65, 65, 0.5);
  border: none;
  color: white;

  &:hover {
    background-color: rgba(255, 65, 65, 0.9);;
  }
}

.todo-item.completed {
  background-color: rgba(0, 0, 0, 0.2);
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
}

.todo-checkbox {
  margin-right: 0.8rem;
}
</style>