<template>
<div class="local_com">
    <div class="d-flex com_title_2">
        <h4 class="com-1">we help local communities around the globe</h4><img src="@/assets/images/vector_white.png" alt="Heifer small logo" class="vector"> <h4 class="com-1 com-2 hidden">donate today and help build a better world</h4>
    </div>
    <div class="pics">
        <div class="com_sec">
            <h2 class="com_text">This spring, you can be part of some of these amazing projects.</h2>
        </div>
        <div class= "com_pics">
            <img src="@/assets/images/imgs_scroll.png" alt="Community pictures" class="scroll_pics">
        </div>
    </div>
</div>

</template>


<script>
export default {
  name: 'localcommunity2',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/sass/localcommunity.scss";
</style>
