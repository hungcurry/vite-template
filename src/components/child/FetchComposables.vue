<script setup>
// 有自動引入 可省略
// import { onMounted , watch } from 'vue';

// 統一入口 index.js 載入
// import { useFetch } from '../../composables/index.js'
import { useFetch } from '@/composables/index.js';
const { ary, useName, FetchInit } = useFetch();

const fetchClick = () => {
  FetchInit('http://www.mocky.io/v2/5cc3f5723400005d00765480');
};
</script>
<template>
  <div class="mb">
    <h4>composables</h4>
    <p>ref: {{ useName }}</p>
    <button @click="fetchClick">點我打API</button>
  </div>

  <p v-if="ary.length === 0">Loading...</p>
  <div v-else>
    <ul v-for="(item, idx) in ary" :key="item.name">
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
