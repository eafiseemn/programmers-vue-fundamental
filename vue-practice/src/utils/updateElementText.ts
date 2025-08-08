import type { Ref } from "vue";

export const updateElementText = (
  elementRef:Ref<HTMLElement | null>, 
  text:string
):void => {
  if (elementRef.value) {
    elementRef.value.textContent = text;
  } else {
    console.warn('Element Ref 요소가 올바르지 않습니다.')
  }
}