
<template>
<div class="countries">
    <h2 class="grow-text">We assist communities in more than 20 countries</h2>
    <p class="grow-title countries-text">Heifer has projects in more than 21 countries that help local farmers, allowing families to have economic support and reduce global hunger and poverty.</p>
    <div class="map_container">
      <img src="@/assets/images/interactive_map_2.png" alt="World Map" class="img-fluid map" usemap="#planetmap">
      <img src="@/assets/images/honey.png" alt="Honey Icon" class="honey">
      <div class="hover_project hidden">
        <h4>Nika Honey Project</h4>
        <h6>Nicaragua</h6>
        <p>Supporting farming families in Nicaragua’s ‘Honey Bees,’ to increase production and diversify their product offerings. </p>
        <button class="btn hover_btn">learn more</button>
      </div>
      <img src="@/assets/images/milk.png" alt="Milk Icon" class="milk_1">
      <div class="hover_project hover_project_milk_1 hidden">
        <h4>Ecua Milk Project</h4>
        <h6>Ecuador</h6>
        <p>Supporting farming families in Ecuador’s ‘Milky Way,’ to increase production and diversify their product offerings. </p>
        <button class="btn hover_btn">learn more</button>
      </div>
      <img src="@/assets/images/egg.png" alt="Egg Icon" class="egg">
      <div class="hover_project hover_project_egg hidden">
        <h4>Sene Egg Project</h4>
        <h6>Senegal</h6>
        <p>Supporting farming families in Senegal’s ‘Egg,’ to increase production and diversify their product offerings. </p>
        <button class="btn hover_btn">learn more</button>
      </div>
      <img src="@/assets/images/milk.png" alt="Milk Icon" class="milk_2">
      <div class="hover_project hover_project_milk_2 hidden">
        <h4>Cambo Milk Project</h4>
        <h6>Cambodia</h6>
        <p>Supporting farming families in Cambodia’s ‘Milky Way,’ to increase production and diversify their product offerings. </p>
        <button class="btn hover_btn">learn more</button>
      </div>
    </div>  
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
