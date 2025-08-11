import { defineStore } from "pinia";

// 1단계 : Counter Store 정의
export const useCounterStore = defineStore('counter', {
  // state: 데이터 저장소 (반드시 함수의 형태로 작성 후 값 반환) - ref & reactive
  state: () => {
    return { count: 0 }
  },
  // state: () => ({ count: 0 })

  // getter: computed
  getters: {
    doubleCount: (state) => state.count * 2
  },

  // actions: 상태를 변경하는 methods - emit
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    randomCounter() {
      this.count = Math.round(100 * Math.random());
    },
    resetCounter() {
      this.count = 0;
    }
  }
})