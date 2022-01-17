<template>
  <div>
    <div height="100vh">
      <VueSlickCarousel :fade="true" :arrows="true" :dots="true" v-model="settings">
        <div v-for="item in mainSliderSRC" :key="item.id">
          <img width="100%" draggable="false" height="100%" :src="item.src" alt="banner image"/>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="carousel-wrapper">
      <div class="shegeft-wrapper">
        <img class="shegeft-logo" draggable="false" src="../assets/images/shegeft-aviz/shegeft-aviz-logo.svg" alt="شگفت آویز">
        <a class="shegeft-link" href="#">شگفت آویز</a>
      </div>
        <div class="group-carousel-wrapper">
          <Carousel/>
        </div>
    </div>
    <br><br><br>
    <div class="tab-wrapper">
      <Tab :tabData = "categoryAndPro"/>
    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import '~/assets/SlickSlider/MainSlider.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import Carousel from '~/components/Carousel'
  import Tab from '~/components/Tab'

  export default {
    name: 'IN',
    components: {
      Carousel,
      VueSlickCarousel,
      Tab
    },
    data() {
      return {
        settings: {
          'fade': true,
          'infinite': true,
          'speed': 500,
          'slidesToShow': 1,
          'slidesToScroll': 1,
          arrows: true
        }
      }
    },
    computed: {
      mainSliderSRC() {
        return this.$store.state.mainSliderData
      },
      categoryAndPro(){
        return this.$store.getters.getCategoryAndProducts
      }
    }
  }
</script>
<style scoped>
  .carousel-wrapper {
    width: 100%;
    min-height: 40vh;
    margin-top: 4%;
    background-color: #f2f9ff;
    display: flex;
    flex-direction: row-reverse;
    padding-top: 2%;
    padding-bottom: 2%;
  }

  .shegeft-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
  .shegeft-link {
    background-color: #f04d7d;
    color: #fff;
    border: 1px solid transparent;
  }
  .shegeft-logo {
    width: 58%;
  }
  .shegeft-link {
    width: 60%;
    text-align: center;
    padding: 4%;
  }
  .group-carousel-wrapper{
    width: 85%;
  }
  .tab-wrapper
  {
    width: 100%;
  }
</style>
