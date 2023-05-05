<script setup></script>
<template>
  <div>
    <div class="tailwind text-center text-7xl text-orange-600">
      <h1>This is an tailwind page</h1>
    </div>

    <div class="card">card</div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="box">
            <div class="bg w-full bg-orange-500 px-4 py-3 text-4xl">
              <h2>Tailwind is Awesome</h2>
              <img
                alt="Vue logo"
                class="logo"
                src="@/assets/svg/logo.svg"
                width="125"
                height="125"
              />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="box">
            <div class="bg w-full bg-red-600 px-4 py-3 text-4xl">
              <h2>Tailwind is Awesome</h2>
              <img
                alt="Vue logo"
                class="logo"
                src="@/assets/svg/logo.svg"
                width="125"
                height="125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 只會拿到最後載入的藍色 如要重新拿取顏色要指定
// @import "@style/config/variables";
@media (min-width: 1024px) {
  .tailwind {
    margin-top: 50px;
  }
}

h1 {
  font-size: 24px;
}

.card {
  @include flexbox-row-center;

  color: let.$primary;
  font-size: let.$font-4xl;
  width: 16rem;
  @include pad(768) {
    width: 26rem;
  }
  @include desktop(1024) {
    width: 40rem;
  }
}
</style>
