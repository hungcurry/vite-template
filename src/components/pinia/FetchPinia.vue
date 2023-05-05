<script setup>
// 有自動引入 可省略
// import { onMounted , watch } from 'vue';
// import { storeToRefs } from 'pinia';

// 統一入口載入
// import { useFetchStore } from "../../stores/index.js"
import { useFetchStore } from '@/stores/index.js';
const FetchStore = useFetchStore();
const { useName, isLoad, errorMessage } = storeToRefs(FetchStore);
const { reactiveAry, FetchInit } = FetchStore;

const fetchClick = () => {
  FetchInit('http://www.mocky.io/v2/5cc3f5723400005d00765480');
};
</script>
<template>
  <div class="mb">
    <h4>Pinia-Fetch</h4>
    <p>ref: {{ useName }}</p>
    <button @click="fetchClick">點我打API</button>
  </div>

  <div v-if="errorMessage">{{ errorMessage }}</div>
  <p v-else-if="!isLoad">Loading...</p>

  <div v-else>
    <ul v-for="(item, idx) in reactiveAry.data" :key="item.name">
      <li>{{ item.name }}</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
h4 {
  font-size: 24px;
  color: aqua;
}
button {
  display: block;
  padding: 15px 5px;
  font-size: 14px;
}
.mb {
  margin-bottom: 30px;
}
</style>
