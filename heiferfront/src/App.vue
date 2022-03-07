<template>
  <section class="app-wrapper">

    <header class="heifer-header">
      <nav class="navbar">
        <router-link :to="'/home'"><img src="@/assets/images/logo_m.png" alt="Heifer logo" class="navbar-brand logo-m"></router-link>
        <router-link :to="'/home'"><img src="@/assets/images/logo.png" alt="Heifer logo" class="navbar-brand hidden logo"></router-link>
        <button class="btn donate_btn nav-item"><router-link :to="'/donate'">donate</router-link></button>
      </nav>
    </header>

    <router-view></router-view>

    <footer class="footer">
      <div class="footer_logo">
        <img src="@/assets/images/footer_logo.png" alt="Heifer Logo" class="footer_logo_inline">
      </div>
      <div class="hidden footer_logo_lg">
        <img src="@/assets/images/footer_logo_lg.png" alt="Heifer Logo" class="footer_logo_inline">
      </div>
      <div class="footer_margin">
        <div>
          <ul class="footer_nav_1">
            <li><h4>Sitemap</h4></li>
            <li><p>Home</p></li>
            <li><p>About us</p></li>
            <li><p>Contact us</p></li>
            <li><button class="btn btn-footer">Donate</button></li>
          </ul>
        </div>
        <div>
          <ul class="footer_nav_2">
            <li><h4>Follow us on Social Media</h4></li>
            <li><a href="https://www.facebook.com/"><p>Facebook</p></a></li>
            <li><a href="https://www.instagram.com/"><p>Instagram</p></a></li>
            <li><a href="https://www.youtube.com/"><p>Youtube</p></a></li>
            <li><a href="https://www.tiktok.com/en/"><p>Tiktok</p></a></li>
          </ul>
        </div>
      </div>
    </footer>
  </section>
</template>

<style lang="scss">
@import "@/assets/sass/main.scss";
</style>
