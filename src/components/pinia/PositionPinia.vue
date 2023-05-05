<script setup>
// 有自動引入 可省略
// import { ref, toRefs } from 'vue'
// import { storeToRefs } from 'pinia';

// 統一入口載入
// import { usePositionStore } from "../../stores/index.js"
import { usePositionStore } from '@/stores/index.js';
const positionStore = usePositionStore();
//------ pinia -------
/* 
store 只能解構 函式 / reactive
ref / computed 會失去雙向綁定特色 所以要再用 storeToRefs 重新包起來 
*/
const { refName, refObj } = storeToRefs(positionStore);
console.log('pinia 座標範例');
console.log('refName', refName);
console.log('refObj', refObj);
/* 普通函式 或 pinia-
解構ref裡面的值 無法在解構
*/
const { X, Y } = refObj;
console.log('X', X, 'Y', Y);

/* 普通函式 或 pinia-
解構reactive裡面的值 會失去特性
要再用toRefs 讓裡面的值雙向綁定
*/
const { reactiveObj } = positionStore;
console.log('reactiveObj', reactiveObj);
const { X2, Y2 } = toRefs(reactiveObj);
console.log('X2', X2, 'Y2', Y2);
</script>
<template>
  <h4>座標位置: pinia</h4>
  <h3>ref 解構</h3>
  <p>{{ refName }}</p>
  <br />

  <h3>ref 物件</h3>
  <p>X :{{ refObj.X }} / Y: {{ refObj.Y }}</p>
  <br />

  <h3 class="red">ref物件 / XY值 解構(無效)</h3>
  <p>X :{{ X }} / Y: {{ Y }}</p>
  <br />

  <h3>reactive 物件</h3>
  <p>X2 :{{ reactiveObj.X2 }} / Y2: {{ reactiveObj.Y2 }}</p>
  <br />

  <h3>reactive 物件 / XY值 toRefs重新解構</h3>
  <p>X2 :{{ X2 }} / Y2: {{ Y2 }}</p>
</template>
<style lang="scss" scoped>
h4 {
  font-size: 24px;
  color: aqua;
}
button {
  display: block;
  padding: 10px 20px;
}
.red {
  color: red;
}
</style>
