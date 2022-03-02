<template>
  <div class="grow">
    <h5 class="grow-title">What to grow</h5>
    <h2 class="grow-text">The best plants to grow in the summer</h2>
    <div class="row">
      <div class="row-sm col">
        <img src="@/assets/images/lettuce.png" alt="Lettuce">
        <h4 class="steps-for-line">salad greens</h4>
        <p class="steps-third-line">fast-growing, shallow-rooted plants. Grow easily when given plenty of water.</p>
      </div>
      <div class="row-sm col">
        <img src="@/assets/images/mint_leaves.png" alt="Mint Leaves">
        <h4 class="steps-for-line">herbs</h4>
        <p class="steps-third-line">Best herbs for home gardening include mint, chives, parsley, lavender, basil, and thyme.</p>
      </div>
      <div class="row-sm col">
        <img src="@/assets/images/tomatoes.png" alt="Tomato">
        <h4 class="steps-for-line">tomatoes</h4>
        <p class="steps-third-line">Grow large and heavy so they need a big pot. Make sure to choose a determinated variety.</p>
      </div>
      <div class="row-sm col">
        <img src="@/assets/images/peppers.png" alt="peppers">
        <h4 class="steps-for-line">peppers</h4>
        <p class="steps-third-line">They are a great choice for growing inside, as they give fruits all year round. And take little space.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'whattogrow',
  props: {
    msg: String
  },
  data() {
    return
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/sass/whattogrow.scss";
</style>
