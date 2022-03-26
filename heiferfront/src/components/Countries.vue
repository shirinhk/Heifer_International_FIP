
<template>
<div class="countries">
    <h2 class="grow-text">We assist communities in more than 20 countries</h2>
    <p class="grow-title countries-text">Heifer has projects in more than 21 countries that help local farmers, allowing families to have economic support and reduce global hunger and poverty.</p>
    <div class="map_container">
      <img src="@/assets/images/interactive_map_2.png" alt="World Map" class="img-fluid map" usemap="#planetmap">
      <img src="@/assets/images/milk.png" alt="Milk Icon" class="honey">
      <div class="hover_project">
        <h4>Nika Milk Project</h4>
        <h6>Nicaragua</h6>
        <p>Supporting farming families in Nicaragua’s ‘Milky Way,’ to increase production and diversify their product offerings. </p>
        <button class="btn hover_btn"><a href="https://www.heifer.org/our-work/flagship-projects/new-incomes-and-key-alliances-for-milk-nicaragua.html">learn more</a></button>
      </div>
      <img src="@/assets/images/milk.png" alt="Milk Icon" class="milk_1">
      <div class="hover_project hover_project_milk_1">
        <h4>Dairy Network In The Andes</h4>
        <h6>Ecuador</h6>
        <p>Through coordination and financial services, farmers are able to enter formal markets and meet bigger orders. </p>
        <button class="btn hover_btn"><a href="https://www.heifer.org/our-work/flagship-projects/dairy-network-in-the-andes-ecuador.html">learn more</a></button>
      </div>
      <img src="@/assets/images/egg.png" alt="Egg Icon" class="egg">
      <div class="hover_project hover_project_egg">
        <h4>Hatching Hope</h4>
        <h6>Senegal</h6>
        <p>An efficient, productive poultry farm can change everything for farmers, their families, and their communities. </p>
        <button class="btn hover_btn"><a href="https://www.heifer.org/our-work/flagship-projects/hatching-hope.html">learn more</a></button>
      </div>
      <img src="@/assets/images/honey.png" alt="Milk Icon" class="milk_2">
      <div class="hover_project hover_project_milk_2">
        <h4>Income Project</h4>
        <h6>Cambodia</h6>
        <p>Through specialized production techniques, cooperatives and connections to local markets, Cambodian families earn living incomes. </p>
        <button class="btn hover_btn"><a href="https://www.heifer.org/our-work/flagship-projects/income-project-cambodia.html">learn more</a></button>
      </div>
    </div>  
  </div>
</template>


<script>
export default {
  name: 'countries',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/sass/countries.scss";
</style>
