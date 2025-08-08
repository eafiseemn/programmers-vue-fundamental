<!-- v-bind와 v-on을 합칠 수 있는 v-model을 사용해서 반응형 데이터 렌더링 -->

<!-- 
모든 항목을 ref로 관리할 경우, 폼이 커지면 중복이 많아지고 관리가 불편해짐
이를 해결하기 위해 반응형(성) 데이터를 객체로 만들어 관리 (reactive)

vue는 반응성 데이터인 객체를 구조분해할 경우 반응성을 상실
toRefs, toRef로 해당 문제를 해결
-->

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';


// 스타일 객체 지정하여 부여하는 방식
const style = {
  height: '6rem',
  flexDirection: 'column' as const,
  gap: '0'
}

const name = ref('');
const agreement = ref(false);
const gender = ref('');
const language = ref('');

const formInput = reactive({
  name: '',
  agreement: false,
  gender: '',
  language: ''
});

// const { name, agreement, gender, language } = formInput;
// const { name, agreement, gender, language } = toRefs(formInput);
// 구조분해할당을 하면 reactive() 객체의 속성은 반응성을 잃음


</script>

<template>
  <div>
    <label :style="style">
      <input type="text" placeholder="이름 입력" v-model="name" />
      <p>이름 : {{ name }} </p>
    </label>
    <label :style="style">
      <input type="text" placeholder="이름 입력" v-model="formInput.name" />
      <p>이름 : {{ formInput.name }} </p>
    </label>

    <hr />

    <label>
      <label for="agreement">동의하시겠습니까?</label>
      <input type="checkbox" v-model="agreement" id="agreement" />
      <p>동의 여부 : {{ agreement }} </p>
    </label>
    <label>
      <label for="agreement2">동의하시겠습니까?</label>
      <input type="checkbox" v-model="formInput.agreement" id="agreement2" />
      <p>동의 여부 : {{ formInput.agreement }} </p>
    </label>

    <hr />

    <label>
      <span>남자</span>
      <input type="radio" name="gender" value="남자" v-model="gender" />
    </label>
    <label>
      <span>여자</span>
      <input type="radio" name="gender" value="여자" v-model="gender" />
    </label>
    <p>성별 : {{ gender }} </p>
    <label>
      <span>남자</span>
      <input type="radio" name="gender2" value="남자" v-model="formInput.gender" />
    </label>
    <label>
      <span>여자</span>
      <input type="radio" name="gender2" value="여자" v-model="formInput.gender" />
    </label>
    <p>성별 : {{ formInput.gender }} </p>
    
    <hr />

    <select v-model="language">
      <option disabled value="">언어 선택</option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>React</option>
      <option>Vue</option>
    </select>
    <p>선택한 언어 : {{ language }} </p>
    <select v-model="formInput.language">
      <option disabled value="">언어 선택</option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>React</option>
      <option>Vue</option>
    </select>
    <p>선택한 언어 : {{ formInput.language }} </p>
  </div>
</template>

<style scoped>
 label {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
 }

 p {
  color: dodgerblue;
 }
</style>