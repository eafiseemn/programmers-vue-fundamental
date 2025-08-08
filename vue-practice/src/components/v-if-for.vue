<!-- ----------------------------------------------------------------------- -->
<!--             조건부 렌더링 Practice 2 - 조건부 List Rendering                 -->
<!-- ----------------------------------------------------------------------- -->

<!-- Select 선택에 따라 이미지 조건부 렌더링 & p 태그 조건부 렌더링 -->

<script setup lang="ts">

import { ref } from 'vue'

const sunnyIcon = 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
const cloudyIcon = 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png'
const rainyIcon = 'https://cdn-icons-png.flaticon.com/512/609/609348.png'
const snowIcon = 'https://cdn-icons-png.flaticon.com/512/6363/6363108.png'

const weather = ref('');

const weatherOptions = [
  {
    value: 'sunny',
    emoji: '🌞',
    label: '맑음',
    icon: sunnyIcon,
    message: '맑은 날입니다. 산책 어떠세요?'
  },
  {
    value: 'cloudy',
    emoji: '☁️',
    label: '흐림',
    icon: cloudyIcon,
    message: '구름이 많네요. 비가 올까요?'
  },
  {
    value: 'rainy',
    emoji: '☔️',
    label: '비',
    icon: rainyIcon,
    message: '비가 오고 있어요! 우산 챙기셨나요?'
  },
  {
    value: 'snowy',
    emoji: '☃️',
    label: '눈',
    icon: snowIcon,
    message: '눈이 오는 날씨에요. 감기 조심하세요!'
  },
]

</script>

<template>
  <div>
    <h2>오늘 날씨는 어떤가요?</h2>

    <select v-model="weather">
      <option value="">선택하세요</option>
      <option 
        v-for="option in weatherOptions" 
        :value="option.value"
        :key="option.value"
      >{{ option.emoji }} {{ option.label }}</option>
    </select>

    <div style="margin-top: 1rem;"></div>

    <template v-if="weather">
      <div v-for="{ value, icon, label, message } in weatherOptions" :key="value">
        <template v-if="value === weather">
          <img :src="icon" :alt="label" />
          <p>{{ message }}</p>
        </template>
      </div>
    </template>
    <p v-else>날씨를 선택해주세요.</p>
  </div>
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

select {
  width: 10rem;
  height: 2rem;
  text-align: center;
  font-size: 1rem;
}
</style>