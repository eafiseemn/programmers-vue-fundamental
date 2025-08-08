<!-- ----------------------------------------------------------------------- -->
<!--                                Computed                                 -->
<!-- ----------------------------------------------------------------------- -->

<!-- 

vue에서는 다른 반응형 데이터 소스를 기반으로 .value를 계산할 때 computed()를 사용할 수 있습니다.
computed는 getter 함수를 받아, getter에서 반환된 읽기 전용 반응형 ref 객체를 반환합니다.

computed는 react의 useMemo와 유사하게, 값이 변하는지를 감지하여 호출됩니다.
computed는 결과를 캐시하고 의존성이 변경될 때 자동으로 업데이트하므로, 다음과 같은 경우에 주로 사용합니다.
 - 계산된 결과를 여러 곳에서 사용해야할 때
 - 무거운 연산 (정렬, 필터링, etc, ..)
 - 반응형 데이터에 의존하는 계산

computed는 자동으로 의존성 값을 추적하고 필요할 때만 업데이트 되기 때문에,
성능 낭비 없이 여러 파생 상태를 만들 수 있습니다.

React의 useMemo는 남발하면 오히려 가독성이 떨어지고, 의존성 배열 관리가 더 복잡해지는 단점이 있지만,
Vue의 computed는 자동 추적이라 별도의 의존성 배열을 관리할 필요가 없고 Side Effect (부수 효과) 가 적습니다.
 - template 로직에 3줄 이상 들어갈 때 사용
 - 하나의 computed 안에서 너무 많은 책임이 이루어질 때 computed로 쪼개서 사용
 - ...

 -->


<script setup lang="ts">

import { computed, ref } from 'vue';

let id = 0;

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const todos = ref<Todo[]>([
  { id: id++, text: 'HTML 배우기', done:false},
  { id: id++, text: 'CSS 배우기', done:false},
  { id: id++, text: 'JavaScript 배우기', done:false},
  { id: id++, text: 'TypeScript 배우기', done:false},
  { id: id++, text: 'React 배우기', done:false},
  { id: id++, text: 'Vue 배우기', done:false},
]);

const newTodo = ref('');

const addTodo = () => {
  const newTodoItem = newTodo.value.trim();
  if(!newTodoItem) {
    alert('할 일을 입력해주세요!');
    return;
  }
  todos.value.push({ id: id++, text: newTodoItem, done:false });
  newTodo.value = '';
}

const deleteTodo = (id:number) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
}

const hideCompleted = ref(false);

// 파생 상태
// filteredTodo().length를 계산할 때와 li 렌더링 시킬 때 2번씩 호출 됨
// 강제 리렌더링될 때도 매번 2번씩 호출됨
const filteredTodo = () => {
  console.log('filter 실행');
  return hideCompleted.value ? todos.value.filter(item => !item.done) : todos.value;
}

// 계산된 파생 상태 : computed 사용
// 한 번만 호출, 값이 바뀌지 않으면 리렌더링이 일어나도 호출되지 않음
const computedTodo = computed(() => {
  console.log('computed 실행');
  return hideCompleted.value ? todos.value.filter(item => !item.done) : todos.value;
});

const forceRenderCount = ref(0);

</script>

<template>
  <h1>To-Do List</h1>
  <form class="inputWrapper" @submit.prevent="addTodo">
    <input type="text" placeholder="할 일을 입력하세요" v-model="newTodo" />
    <button type="submit">➕</button>
  </form>
  <h3>v-if 조건 처리</h3>
  <div v-if="todos.length > 0"  style="margin-bottom: 1.2rem;">총 할 일 : {{ todos.length }} 개</div>
  <div v-else style="margin-bottom: 1.2rem;">할 일 끝! 🥳</div>
  <ul>
    <template v-for="todo in todos" :key="todo.id">
      <li v-if="(!hideCompleted && todo.done) || !todo.done">
        <div class="todoWrapper">
          <input type="checkbox" :id="`${todo.id}`" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </div>
        <button type="button" @click="() => deleteTodo(todo.id)">❌</button>
      </li>
    </template>
  </ul>
  <hr />
  <h3>filter로 파생 상태 만들기</h3>
  <div v-if="todos.length > 0"  style="margin-bottom: 1.2rem;">총 할 일 : {{ filteredTodo().length }} 개</div>
  <div v-else style="margin-bottom: 1.2rem;">할 일 끝! 🥳</div>
  <ul>
    <li v-for="todo in filteredTodo()" :key="todo.id">
      <div class="todoWrapper">
        <input type="checkbox" :id="`${todo.id}`" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </div>
      <button type="button" @click="() => deleteTodo(todo.id)">❌</button>
    </li>
  </ul>
  <h3>computed 사용</h3>
  <div v-if="todos.length > 0"  style="margin-bottom: 1.2rem;">총 할 일 : {{ computedTodo.length }} 개</div>
  <div v-else style="margin-bottom: 1.2rem;">할 일 끝! 🥳</div>
  <ul>
    <li v-for="todo in computedTodo" :key="todo.id">
      <div class="todoWrapper">
        <input type="checkbox" :id="`${todo.id}`" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </div>
      <button type="button" @click="() => deleteTodo(todo.id)">❌</button>
    </li>
  </ul>

  <button type="button" @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show All' : 'Hide Completed' }}
  </button>

  <button type="button" @click="forceRenderCount++">강제 Re-rendering {{ forceRenderCount }}</button>
</template>

<style scoped>
ul {
  padding-left: 0;
  width: 20rem;
}
li {
  text-align: left;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
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

.todoWrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  
  input {
    width: 1.2rem;
    margin-right: 0.7rem;
  }
  span {
    flex-grow: 1;
  }
}

.done {
  text-decoration: line-through;
}
</style>