<template>
  <div class="item">
    <slot name="icon"></slot>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  margin-top: 2rem;
  display: flex;
}
.details {
  flex: 1;
  margin-left: 1rem;
}
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: aquamarine;
}
</style>
