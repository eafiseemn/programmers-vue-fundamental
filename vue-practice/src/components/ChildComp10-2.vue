<!-- ----------------------------------------------------------------------- -->
<!--                     Emit & v-model .. and Slot                          -->
<!-- ----------------------------------------------------------------------- -->

<script setup lang="ts">

// props는 readonly : 직접 수정할 수 없음
const props = defineProps({
  score:Number,
  comment:String
});

console.log(props);

const emits = defineEmits<{
  // interface type 함수 시그니처
  // (e:'update:score', value:number): void;
  // (e:'update:comment', value:string): void;

  // tuple type
  'update:score':[value:number],
  'update:comment':[value:string]
}>();

</script>

<template>
  <div>
    <slot></slot> (Anonymous Slot)
    <hr />
    <slot name="extra"></slot> (Named Slot)
  </div>
  <hr />
  <div>
    <input 
      type="range" 
      min="0" 
      max="5" 
      :value="score"
      @input="emits('update:score', Number(($event.target as HTMLInputElement).value))"  
    />
    <br />
    <br />
    <textarea @input="emits('update:comment', ($event.target as HTMLTextAreaElement).value)"></textarea>
  </div>
</template>

<style scoped>
br, hr {
  margin: 2rem 0;
}
</style>