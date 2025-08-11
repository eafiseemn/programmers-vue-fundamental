/* Composition API - 개별로 정의하기 */

import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const name = ref('tiger');
  const doubleCount = computed(() => count.value * 2);
  const increment = () => count.value++;
  const decrement = () => count.value--;
  const resetCounter = () => count.value = 0;

  return { count, name, doubleCount, increment, decrement, resetCounter };
});