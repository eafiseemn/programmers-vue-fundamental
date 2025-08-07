/* -------------------------------------------------------------------------- */
/*                               ref & reactive                               */
/* -------------------------------------------------------------------------- */

<script setup lang="ts">  // setup = export default 해주는 것
import { reactive, ref } from 'vue';
  
/*
  ref : 
    원시 값 (string, number, boolean) 을 반응성으로 만들기 위해 사용
    객체도 사용할 수 있음; .value 로 접근해야함
    내부적으로 proxy를 사용하여 속성 접근을 감시합니다.
    shallow copy ( 얕은 레벨의 조작만 가능 )
*/

  const message = ref('Hello, World!');
  console.log(message.value);

  const refMsgObj = ref({ message: "Hello, World ~" });
  console.log(refMsgObj.value.message);

/*
  reactive :
    객체 타입 (Object, Array, Function) 을 깊은 반응성(deep reactive)으로 만들기 위한 방법
    내부적으로 Proxy를 사용하여 속성 접근을 감시합니다.
    deep copy ( 깊은 레벨의 조작 가능 )
*/
  const messageObj = reactive({
    message: 'Hello, World :)'
  })
  // console.log(messageObj.message);

/*
  vue v.2.0 +
  Object를 넣을 경우 ref는 재할당하면 반응성을 유지함, reactive는 반응성 상실
  vue v.3.0 ~
  reactive 도 반응성 유지
*/
  // const newData = { name: 'tiger' };
  // message.value = { ...newData };
  // messageObj.message = { ...newData };

  // console.log(message.value);       // Proxy(Object) {name: 'tiger'}
  // console.log(messageObj.message);  // Proxy(Object) {name: 'tiger'}

/*
  JS처럼 상태값을 직접 갱신할 수 있음
*/
  message.value = 'Hello, World !!';
  // console.log(message.value);
  
  messageObj.message = 'Hello, World :)'
  // console.log(messageObj.message);

</script>

<template>
  <h1> {{ message }} </h1>
  <!-- <h1> {{ refMsgObj.message }} </h1> -->
  <h1> {{ messageObj.message }} </h1>
</template>

<style scoped>
  body {
    background-image: url("https://momentum.photos/img/f49d69a2-dbed-42d0-8443-9c0871ecd491.jpg?momo_cache_bg_uuid=f775feb3-30d0-4aa5-b565-ec5d5402bb9a");
  }

</style>