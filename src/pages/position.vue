<script setup>
// 有自動引入 可省略
// import PositionComposables from '../components/composables/PositionComposables.vue'
// import PositionPinia from '../components/pinia/PositionPinia.vue'
</script>
<template>
  <div class="position">
    <h1>This is an position page</h1>
    <br />
  </div>
  <PositionComposables />
  <hr class="hr" />
  <PositionPinia />
</template>
<style lang="scss" scoped>
.hr {
  margin: 50px 0;
}
@media (min-width: 1024px) {
  .position {
    margin-top: 50px;
  }
}
</style>
