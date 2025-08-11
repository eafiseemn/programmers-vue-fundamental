<!-- ----------------------------------------------------------------------- -->
<!--                            Props & Emit                                 -->
<!-- ----------------------------------------------------------------------- -->

<!-- 

자식 컴포넌트는 Props를 통해 부모로부터 값을 입력받을 수 있습니다.
defineProps를 사용해 전달 받은 props의 타입을 정의할 수 있습니다.
props의 기본값이 필요한 경우 withDefaults를 사용해 기본값을 정의할 수 있습니다.

자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달하기 위해선 defineEmit 함수를 사용할 수 있습니다.
defineEmit으로 정의된 이벤트는 emit의 값으로 전달되며 부모 컴포넌트가 해당 이벤트를 사용할 수 있습니다.

-->


<script setup lang="ts">

// 부모 -> 자식 Props - 컴파일 타입 매크로
// 타입 인자 방식 : 제네릭 타입 선언 컴파일 시점에 타입 확정
const props = withDefaults(defineProps<{
  msg: string;
  onHandle: () => void;
  size?: string;
}>(),{
  size: 'md'    // Props에 없을 때 기본값 설정
});

// const _props = defineProps({
//   msg: String
// });

console.log(props.msg);


// 자식 -> 부모 Emit
const emit = defineEmits(['response']);
const handleClick = () => {
  emit('response', '자식으로부터 전달 받은 데이터📤');
};


</script>

<!-- template 안에서는 언래핑된 상태로 사용할 수 있음 -->
<template>
  <div>
    {{ msg }}
  </div>
  <br />
  <button type="button" @click="onHandle">
    Props Button
  </button>
  <button type="button" @click="handleClick">
    Emit Button
  </button>
</template>

<style scoped>

</style>