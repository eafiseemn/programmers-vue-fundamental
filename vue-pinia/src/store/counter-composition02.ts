/* Composition API - Reactive Object 로 묶기 */

import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const store = reactive({
    count: 0,
    name: 'tiger',
    get doubleCount() {
      return this.count * 2;
    },
    increment() { this.count++; },
    decrement() { this.count--; },
    resetCounter() { this.count = 0; }
  })

  return store;
})