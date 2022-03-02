<template>
  <section class="app-wrapper">

    <header class="heifer-header">
      <nav class="navbar">
        <img src="@/assets/images/logo_m.png" alt="Heifer logo" class="navbar-brand logo-m">
        <img src="@/assets/images/logo.png" alt="Heifer logo" class="navbar-brand hidden logo">
        <button class="btn donate_btn nav-item"> donate </button>
      </nav>
    </header>

    <router-view></router-view>

    <footer>
      
    </footer>
  </section>
</template>

<style lang="scss">
@import "@/assets/sass/main.scss";
</style>
