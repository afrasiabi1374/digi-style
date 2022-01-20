<template>
    <VueSlickCarousel :fade="true" :arrows="true" :dots="true" v-model="settings">
      <div v-for="item in mainSliderSRC" :key="item.id">
        <img width="100%" draggable="false" height="100%" :src="item.src" alt="banner image"/>
      </div>
    </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  // optional style for arrows & dots
  import '~/assets/SlickSlider/MainSlider.css'
  export default {
    name: 'Slider',
    props:[
      'mainSliderSRC'
    ],
    components:{
      VueSlickCarousel
    },
    data(){
      return{
        settings: {
          'fade': true,
          'infinite': true,
          'speed': 500,
          'slidesToShow': 1,
          'slidesToScroll': 1,
          arrows: true
        }
      }
    }
  }
</script>

<style scoped>

</style>
