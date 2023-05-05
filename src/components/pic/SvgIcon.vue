<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
  },
  color: {
    type: String,
    default: '#333',
  },
});
//console.log(`props` , props);

const svgName = computed(() => {
  if (props.name.includes('/')) {
    return `#${props.name}`;
  } else {
    return `#/${props.name}`;
  }
});
const svgClass = computed(() =>
  props.className ? 'svg-icon ' + props.className : 'svg-icon',
);
</script>

<template>
  <i>
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="svgName" :fill="color" />
    </svg>
  </i>
</template>

<style lang="scss" scoped>
i {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
  @media (min-width: 1024px) {
    top: calc(50% - 25px);
    left: 0;
    border: 1px solid solid;
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
}
.svg-icon {
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  fill: currentColor;
  overflow: hidden;
}
.ion-primary {
  color: aquamarine;
}
</style>
