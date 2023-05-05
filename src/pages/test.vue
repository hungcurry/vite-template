<script setup>
const refName = ref('curry');

const refObj = ref({
  X: 0,
  Y: 0,
});

const abcFn = () => {
  console.log(`89798`);
};
abcFn();
const abcFn2 = a => a + 2;
abcFn2();
</script>

<template>
  <div>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/images/logo.png"
      width="125"
      height="125"
    />

    <!-- header menu -->
    <ul
      class="bg-fb-header fixed bottom-0 left-0 z-50 flex w-full items-center justify-between text-white lg:static lg:bottom-auto lg:left-auto lg:w-auto lg:justify-center"
    >
      <li
        class="nav js-nav-active flex-1 items-center border-b-4 border-transparent lg:mr-6 lg:flex-grow-0"
        id="n1"
      >
        <a href="javascript:;" class="flex justify-center px-10 py-4 lg:px-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-fb h-[30px] w-[30px]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 24px;
}
.card {
  width: 16rem;
}
.js-contactPerson::before {
  content: '';
  height: 125%;
  left: -10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  z-index: 10;
}
</style>
