<template>
  <div class="containers">
    
      <div class="hero">  
        <img src="~@/assets/images/swing.png" alt="Behind the better world swing" class="swing">
        <h1 class="hero-title">This summer, be a house farmer with Heifer</h1>
        <h3 class="hero-text">We build a better world for local communities around the globe and you get to be a part of it.</h3>
        <button class="btn btn-farmer">become a house farmer</button>  
      </div>

      <div class="home-div row">
        <div class="row-sm col">
          <h2 class="home-sec">Growing your own food shouldn’t be scary, and it isn’t!</h2>
        </div>
        <div class="row-sm col">
          <p class="home-para">With small habits and a bit of guidance, you can grow small crops at your apartment or home garden!</p>
          <button class="btn btn-outline-dark btn-home"><a href="https://www.heifer.org/our-work/work-areas/environmental-sustainability.html">learn more</a></button>
        </div>
      </div>

      <div class="steps">
        <h5 class="steps-first-line">First steps</h5>
        <h2 class="steps-sec-line">Simple actions can make you grow incredible vegetables.</h2>
        <h5 class="steps-third-line">Make sure to provide your plants with:</h5>
        <div class="row">
          <div class="row-sm col">
            <i class="fa-solid fa-sun"></i>
            <h4 class="steps-for-line">sunlight</h4>
            <p class="steps-third-line">Plants need at least six hours of direct sunlight a day.</p>
          </div>
          <div class="row-sm col">
            <i class="fa-solid fa-mountain"></i>
            <h4 class="steps-for-line">soil</h4>
            <p class="steps-third-line">Use a well-draining potting mix to keep roots healthy.</p>
          </div>
          <div class="row-sm col">
            <i class="fa-solid fa-water"></i>
            <h4 class="steps-for-line">water</h4>
            <p class="steps-third-line last-line">Plants in pots need a lot of water. Make access to water easy so it doesn’t get tedious.</p>
          </div>
        </div>
      </div>

      <whattogrow></whattogrow>

      <div class="row share"> 
        <div class="row-sm col order-2 food_text">
          <h2 class="grow-text">Now that you know how and what to grow, share your crops with us!</h2>
          <p class="grow-text">Share a picture on instagram with the hastag: <span class="bold">#summerwithheifer </span> with a recipe made with your home-grown veggies!</p>
        </div>

        <div class="row-sm col order-1 food_logo">
          <img src="@/assets/images/heifer_int.png" alt="Heifer International food" >
        </div>
      </div>

      <localcommunity></localcommunity>
      <countries></countries>

      <div class="video">
        <video controls>
          <source src="@/assets/video/heifer_video_1.mp4" title="Heifer Reel" type="video/mp4">
        </video>
      </div>

      <simpledonate></simpledonate>
      
  </div>
</template>

<script>
// @ is an alias to /src
import whattogrow from '@/components/WhatToGrow.vue';
import localcommunity from '@/components/LocalCommunity.vue';
import countries from '@/components/Countries.vue';
import simpledonate from '@/components/SimpleDonate';


export default {
  name: 'Home',
  components : {
    whattogrow, localcommunity, countries, simpledonate,
  }
}

</script>

<style lang="scss">
@import "@/assets/sass/home.scss";
</style>
