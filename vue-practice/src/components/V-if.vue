<!-- ----------------------------------------------------------------------- -->
<!--                           조건부 렌더링 Practice                           -->
<!-- ----------------------------------------------------------------------- -->

<!-- Select 선택에 따라 이미지 조건부 렌더링 & p 태그 조건부 렌더링 -->
<!-- 
1. 반응성 데이터 설정 (ref)
2. v-model 바인딩
3. 반응성 데이터에 따른 v-if 처리
-->

<script setup lang="ts">

import { ref } from 'vue'

const sunnyIcon = 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
const cloudyIcon = 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png'
const rainyIcon = 'https://cdn-icons-png.flaticon.com/512/609/609348.png'
const snowIcon = 'https://cdn-icons-png.flaticon.com/512/6363/6363108.png'

const weather = ref('');

</script>

<template>
  <div>
    <h2>오늘 날씨는 어떤가요?</h2>

    <select v-model="weather">
      <option value="">선택하세요</option>
      <option value="sunny">🌞 맑음</option>
      <option value="cloudy">☁️ 흐림</option>
      <option value="rainy">☔️ 비</option>
      <option value="snowy">☃️ 눈</option>
    </select>

    <div style="margin-top: 1rem;"></div>

    <img :src="sunnyIcon" alt="햇님" v-if="weather === 'sunny'" />
    <img :src="cloudyIcon" alt="구름" v-else-if="weather === 'cloudy'" />
    <img :src="rainyIcon" alt="비" v-else-if="weather === 'rainy'" />
    <img :src="snowIcon" alt="눈" v-else-if="weather === 'snowy'" />

    <p v-if="weather === 'sunny'">맑은 날입니다. 산책 어떠세요?</p>
    <p v-else-if="weather === 'cloudy'">구름이 많네요. 비가 올까요?</p>
    <p v-else-if="weather === 'rainy'">비가 오고 있어요! 우산 챙기셨나요?</p>
    <p v-else-if="weather === 'snowy'">눈이 오는 날씨에요. 감기 조심하세요!</p>
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