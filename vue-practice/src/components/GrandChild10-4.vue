<!-- ----------------------------------------------------------------------- -->
<!--                            Provide & Inject                             -->
<!-- ----------------------------------------------------------------------- -->


<script setup lang="ts">
import { inject } from 'vue';
import { scoreKey, type ScoreContext } from '../store/score';

const ctx = inject(scoreKey);
if(!ctx) throw new Error('Props 받아오기 실패');

const { score, comment, updateScore, updateComment } = ctx as ScoreContext;

</script>

<template>
  <div>
    <strong>GrandChild</strong>
    
    <input 
      type="range"
      :value="score"
      min="0"
      max="10"
      @input="updateScore(+(($event.target as HTMLInputElement).value))" />
    <br />
    <input 
      type="text"
      :value="comment"
      @input="updateComment(($event.target as HTMLInputElement).value)"
    />
    <p>score : {{ score }}</p>
    <p>comment : {{ comment }}</p>
    
  </div>
</template>

<style scoped>
strong {
  display: block;
  margin-bottom: 1rem;
}
</style>