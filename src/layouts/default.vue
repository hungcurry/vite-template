<script setup></script>

<template>
  <div>
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/svg/logo.svg"
        width="125"
        height="125"
      />
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/count">Count</RouterLink>
      <RouterLink to="/fetch">Fetch</RouterLink>
      <RouterLink to="/position">Position</RouterLink>
      <RouterLink to="/tailwind">Tailwind</RouterLink>
      <RouterLink to="/bootstrap">Bootstrap</RouterLink>
      <RouterLink to="/element">element</RouterLink>
      <RouterLink to="/ECharts">ECharts</RouterLink>
      <RouterLink to="/test">TestCode</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  margin-top: 2rem;
  text-align: center;
  width: 100%;
}

nav a.router-link-exact-active {
  color: aquamarine;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  font-size: 20px;
  padding: 0 1rem;
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
  }

  nav {
    font-size: 1rem;
    margin-top: 1rem;
    padding: 1rem 0;
    text-align: left;
  }
}
</style>
