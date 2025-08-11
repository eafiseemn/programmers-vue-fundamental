import type { InjectionKey, Ref } from "vue"

// Type Definition
export type ScoreContext = {
  score: Ref<number>;
  comment: Ref<string>;
  updateScore: (v:number) => void;
  updateComment: (v:string) => void;
}


// Key Definition
export const scoreKey:InjectionKey<ScoreContext> = Symbol('score');
