<template>
  <VueSlickCarousel :arrows="true" v-bind="carouselSettings">
    <template v-for="(item, i) in 8" >
      <Card :key="i" />
    </template>
  </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import Card from  './Card'
  export default {
    components:{
      VueSlickCarousel,
      Card
    },
    data(){
      return{
        carouselSettings: {
          'infinite': false,
          'speed': 500,
          'slidesToShow': 3,
          'slidesToScroll': 4,
          'initialSlide': 0,
          'responsive': [
            {
              'breakpoint': 1024,
              'settings': {
                'slidesToShow': 2,
                'slidesToScroll': 2,
                'infinite': true,
              }
            },
            {
              'breakpoint': 600,
              'settings': {
                'slidesToShow': 1,
                'slidesToScroll': 1,
                'initialSlide': 1
              }
            },
            {
              'breakpoint': 480,
              'settings': {
                'slidesToShow': 1,
                'slidesToScroll': 1
              }
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>


</style>
