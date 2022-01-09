<template>
  <div height="100vh">
    <VueSlickCarousel   :fade="true" :arrows="true" :dots="true" v-model="settings">
        <div v-for="item in mainSliderSRC" :key="item.id">
          <img width="100%" height="100%"  :src="item.src" alt="banner image"/>
        </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import '~/assets/SlickSlider/MainSlider.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'IN',
  components: {
    VueSlickCarousel
  },
  data(){
    return{
      settings:{
        "fade": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        arrows: true
      }
    }
  },
  computed: {
    mainSliderSRC(){
      return this.$store.state.mainSliderData
    }
  }
}
</script>
<style>

</style>
