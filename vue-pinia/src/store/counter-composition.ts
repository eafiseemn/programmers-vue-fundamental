/* Composition API - 관심사 분리

  Vue3 부터 지원
  트리 쉐이킹, 가상 DOM, 정적 트리 호이스팅 (SSG), IE 지원 X

  setup()

*/

import { defineStore } from "pinia";
// import { computed, ref } from "vue";
import { computed, reactive, toRefs } from "vue";

export const useCounterStore = defineStore('counter', () => {
  // 반응성 상태
  const state = reactive({
    count: 0,
    name: 'tiger'
  })

  // 파생 상태
  const getters = {
    doubleCount: computed(() => state.count * 2)
  }

  const actions = {
    increment() { state.count++; },
    decrement() { state.count--; },
    resetCounter() { state.count = 0; }
  }

  return {
    ...toRefs(state),
    ...getters,
    ...actions
  }
})

// 반응성을 잃지 않도록 state는 toRef로 감싸서 return 해야함