
<template>
<div>
  <div class="simple_donate">
    <div class="flex_wrapper"> 
      <div class="simple_title">
        <h2 >With your donation, families all around the world can fight hunger and poverty.</h2>
        <br>
        <h2>To donate is simple:</h2>
      </div>
      <div class="all_boxes">
        <div class="secondry_boxes">
          <div class="d_box">
            <img src="@/assets/images/vector_n2.png" alt="Heifer Icon" class="icon_n2">
            <p>Choose a donation</p>
            <p>amount you wish to give monthly</p>
          </div>

          <div class="d_box">
            <img src="@/assets/images/vector_n2.png" alt="Heifer Icon" class="icon_n2">
            <p>Fill out your information to</p>
            <p>receive your goods</p>
          </div>
        </div>
        <div class="secondry_boxes">  
          <div class="d_box">
            <img src="@/assets/images/vector_n2.png" alt="Heifer Icon" class="icon_n2">
            <p>Then, share a picture of you new <br>garden with the hashtag</p>
            <p class="bold">#springwithheifer</p>
          </div>

          <div class="d_box last_box">
            <img src="@/assets/images/vector_n2.png" alt="Heifer Icon" class="icon_n2">
            <p>Enjoy fresh vegetables </p>
            <p>you grown yourself!</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="fees">
    <h2 class="fees_title">You can make a huge impact and also get an incentive to keep doing the work at your home!</h2>
    <div class="fee_align">
      <div class="fee-box">
        <h2 class="amount">$10</h2>
        <h5 class="amount_sub">monthly</h5>
        <br>
        <br>
        <ul>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><p class="first_line">Every penny goes to Heifer Projects</p></li>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><p class="first_line">1 pack of random  vegetable seeds</p></li>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><p class="first_line last_line">5 trees will be planted each month</p></li>
        </ul>
        <button class="btn fees_btn"><router-link :to="'/donate'">DONATE</router-link></button>
        <h5 class="spring_due">The subscription lasts until the end of spring.</h5>
      </div>

      <div class="fee-box">
        <h2 class="amount">$25</h2>
        <h5 class="amount_sub">monthly</h5>
        <br>
        <br>
        <ul>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><p class="first_line">Every penny goes to Heifer Projects</p></li>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><p class="first_line">2 packs of random vegetable seeds</p></li>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><p class="first_line last_line">10 trees will be planted each month</p></li>
        </ul>
        <button class="btn fees_btn"><router-link :to="'/donate'">DONATE</router-link></button>
        <h5 class="spring_due">The subscription lasts until the end of spring.</h5>  
      </div>

      <div class="fee-box fee-box_2">
        <h2 class="amount">$50+</h2>
        <h5 class="amount_sub">monthly</h5>
        <br>
        <br>
        <ul>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><p class="line">Every penny goes to Heifer Projects</p></li>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><p class="line">4 packs of vegetable seeds</p></li>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><p class="line">10 trees will be planted each month</p></li>
          <li><img src="@/assets/images/vector_2.png" alt="Heifer_icon" class="icon"><p class="first_line line">Enter on a draw to visit a Heifer project of choice in person</p></li>
        </ul>
        <button class="btn fees_btn"><router-link :to="'/donate'">DONATE</router-link></button>  

        <h5 class="spring_due">The subscription lasts until the end of spring.</h5>
      </div>

    </div>
  </div>

  
  
  <h2 class="ready">Ready to make a difference this spring?</h2>
  <div class="btn_align">
    <button class="btn fees_btn_last"><router-link :to="'/donate'">DONATE</router-link></button> 
  </div>
</div>
</template>


<script>
export default {
  name: 'simpledonate',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/sass/simpledonate.scss";
</style>
