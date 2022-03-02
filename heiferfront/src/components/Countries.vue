
<template>
<div class="countries">
    <h2 class="grow-text">We assist communities in more than 20 countries</h2>
    <p class="grow-title countries-text">Heifer has projects in more than 21 countries that help local farmers, allowing families to have economic support and reduce global hunger and poverty.</p>
    <img src="@/assets/images/interactive_map.png" alt="World Map" class="img-fluid map">
</div>

</template>


<script>
export default {
  name: 'countries',
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
@import "@/assets/sass/countries.scss";
</style>
