<script setup>
// 有自動引入 可省略
// import FetchComposables from '../components/composables/FetchComposables.vue'
// import FetchPinia from '../components/pinia/FetchPinia.vue'
</script>
<template>
  <div class="fetch">
    <h1>This is an fetch page</h1>
    <br />
  </div>
  <FetchComposables />
  <hr class="hr" />
  <FetchPinia />
</template>
<style lang="scss" scoped>
.hr {
  margin: 50px 0px;
}
@media (min-width: 1024px) {
  .fetch {
    margin-top: 50px;
  }
}
</style>
