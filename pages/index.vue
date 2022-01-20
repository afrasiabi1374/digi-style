<template>
  <div>
    <div height="100vh">
      <Slider :mainSliderSRC="mainSliderSRC"/>
    </div>
    <div class="carousel-wrapper">
      <div class="shegeft-wrapper">
        <img class="shegeft-logo" draggable="false" src="../assets/images/shegeft-aviz/shegeft-aviz-logo.svg"
             alt="شگفت آویز">
        <a class="shegeft-link" href="#">شگفت آویز</a>
      </div>
      <div class="group-carousel-wrapper">
        <Carousel
          :src="[
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/cream.jpg'), title: 'کرم آب رسا مرغوب'  , price: 645000 , brand:'مارک'},
            ]"
          :timer="true"/>
      </div>
    </div>
    <br><br><br>
    <div class="tab-wrapper">
      <Tab :tabData="categoryAndPro"/>
    </div>

    <div class="carousel-wrapper">
      <div class="shegeft-wrapper">
        <h2 class="more-see digit">پر بازدید ترین های اخیر</h2>
        <a class="simple-outline-btn" href="#">مشاهده همه</a>
      </div>
      <div class="group-carousel-wrapper">
        <Carousel
          :src="[
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            {image:require('~/assets/images/products/woman-dress.jpg'), title: 'پیراهن زنانه درس ایگو کد 1010018 رنگ قرمز'  , price: 645000 , brand:'مارک'},
            ]"
          timer="false"/>
      </div>
    </div>

    <div class="new-brand">
      <div class="new-brand-img-wrapper">
        <img src="../assets/images/banners/ikat.jpg" alt="new-brand">
      </div>
      <div class="new-brand-img-wrapper">
        <img src="../assets/images/banners/jame-push.jpg" alt="new-brand">
      </div>
    </div>


    <div class="carousel-wrapper">
      <div class="shegeft-wrapper">
        <h2 class="more-see digit">پر فروش ترین های اخیر</h2>
        <a class="simple-outline-btn" href="#">مشاهده همه</a>
      </div>
      <div class="group-carousel-wrapper">
        <Carousel :src="[
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          {image:require('~/assets/images/products/saatmochi.jpg'), title: 'مچ بند هوشمند شیائومی مدل Mi Band 5 Global Version'  , price: 645000 , brand:'مارک'},
          ]" timer="false"/>
      </div>
    </div>

    <h2 class="title">محبوب ترین برند ها</h2>
    <div class="carousel-wrapper2">
      <div class="shegeft-wrapper2"></div>
      <div class="g-c-left">
        <div class="card-wrapper">
          <div class="logo-brand">
            <img src="../assets/images/log/dru.png" class="shegeft-wrapper2-img" width="80px" alt="">
            <h5 class="poiner shegeft-wrapper2-describe">مشاهده تمام محصولات</h5>
          </div>
          <div class="n-card-wrapper">
            <Card
              :src="{image:require('~/assets/images/products/water-pump.jpg'), title: 'کرم آبرسان کامان سری واتربمب مدل COLLAGEN حجم 500 میلی لیتر'  , price: 645000 , brand:'مارک'}"/>
          </div>
          <div class="n-card-wrapper">
            <Card
              :src="{image:require('~/assets/images/products/water-pump.jpg'), title: 'کرم آبرسان کامان سری واتربمب مدل COLLAGEN حجم 500 میلی لیتر'  , price: 645000 , brand:'مارک'}"/>
          </div>
          <div class="n-card-wrapper">
            <Card
              :src="{image:require('~/assets/images/products/water-pump.jpg'), title: 'کرم آبرسان کامان سری واتربمب مدل COLLAGEN حجم 500 میلی لیتر'  , price: 645000 , brand:'مارک'}"/>
          </div>
        </div>
      </div>
    </div>


    <div class="carousel-wrapper2" dir="rtl">
      <div class="shegeft-wrapper2"></div>
      <div class="g-c-left">
        <div class="card-wrapper">
          <div class="logo-brand">
            <img src="../assets/images/log/clock-brand.png" class="shegeft-wrapper2-img" width="80px" alt="">
            <h5 class="poiner shegeft-wrapper2-describe">مشاهده تمام محصولات</h5>
          </div>
          <div class="n-card-wrapper">
            <Card
              :src="{image:require('~/assets/images/products/saarmochi.jpg'), title: 'کرم آبرسان کامان سری واتربمب مدل COLLAGEN حجم 500 میلی لیتر'  , price: 645000 , brand:'مارک'}"/>
          </div>
          <div class="n-card-wrapper">
            <Card
              :src="{image:require('~/assets/images/products/saarmochi.jpg'), title: 'کرم آبرسان کامان سری واتربمب مدل COLLAGEN حجم 500 میلی لیتر'  , price: 645000 , brand:'مارک'}"/>
          </div>
          <div class="n-card-wrapper">
            <Card
              :src="{image:require('~/assets/images/products/saarmochi.jpg'), title: 'کرم آبرسان کامان سری واتربمب مدل COLLAGEN حجم 500 میلی لیتر'  , price: 645000 , brand:'مارک'}"/>
          </div>
        </div>
      </div>
    </div>

    <div class="sale-banner-wrapper">
      <h2 class="title">زیبایی و سلامت</h2>
      <br><br>
      <div class="sale-banners">
        <div class="sale-banner-item">
          <img src="../assets/images/sale-banner/30.jpg" alt="">
        </div>
        <div class="sale-banner-item">
          <img src="../assets/images/sale-banner/35.jpg" alt="">
        </div>
        <div class="sale-banner-item">
          <img src="../assets/images/sale-banner/50.jpg" alt="">
        </div>
        <div class="sale-banner-item">
          <img src="../assets/images/sale-banner/60.jpg" alt="">
        </div>
      </div>
    </div>

    <div class="carousel-wrapper" style="background-color: white">
      <div class="shegeft-wrapper">
        <h2 class="more-see digit">جدید ترین های اخیر</h2>
        <a class="simple-outline-btn" href="#">مشاهده همه</a>
      </div>
      <div class="group-carousel-wrapper" style="background-color: white">
        <Carousel
          :src="[
            {image:require('~/assets/images/products/switshirt.jpg'), title: 'سویشرت مردانه ان سی نو مدل راندو رنگ زرد'  , price: 568000 , brand:'مارک'},
            {image:require('~/assets/images/products/switshirt.jpg'), title: 'سویشرت مردانه ان سی نو مدل راندو رنگ زرد'  , price: 568000 , brand:'مارک'},
            {image:require('~/assets/images/products/switshirt.jpg'), title: 'سویشرت مردانه ان سی نو مدل راندو رنگ زرد'  , price: 568000 , brand:'مارک'},
            {image:require('~/assets/images/products/switshirt.jpg'), title: 'سویشرت مردانه ان سی نو مدل راندو رنگ زرد'  , price: 568000 , brand:'مارک'},
            {image:require('~/assets/images/products/switshirt.jpg'), title: 'سویشرت مردانه ان سی نو مدل راندو رنگ زرد'  , price: 568000 , brand:'مارک'},
            {image:require('~/assets/images/products/switshirt.jpg'), title: 'سویشرت مردانه ان سی نو مدل راندو رنگ زرد'  , price: 568000 , brand:'مارک'},
            {image:require('~/assets/images/products/switshirt.jpg'), title: 'سویشرت مردانه ان سی نو مدل راندو رنگ زرد'  , price: 568000 , brand:'مارک'},
            ]"
          timer="false"/>
      </div>
    </div>
    <div class="takhfif-wrapper">
      <img draggable="false" class="takhfif" src="../assets/images/BigBanners/cartehadiye.png" alt="" width="100%">
    </div>
    <section class="varenty">
      <div class="varenty-item">
        <img src="../assets/images/tazmin/tahvil.svg" draggable="false" alt="">
        <h3>تحویل به موقع و آسان</h3>
      </div>
      <div class="varenty-item">
        <img src="../assets/images/tazmin/asl.svg" draggable="false" alt="">
        <h3>تضمین اصالت کالا</h3>
      </div>
      <div class="varenty-item">
        <img src="../assets/images/tazmin/bazgasht.svg" draggable="false" alt="">
        <h3>تضمین بازگشت کالا</h3>
      </div>
    </section>
  </div>
</template>

<script>
  import Carousel from '~/components/Carousel'
  import Tab from '~/components/Tab'
  import Card from '~/components/Card'
  import Slider from '~/components/Slider'
  export default {
    name: 'IN',
    components: {
      Slider,
      Card,
      Carousel,

      Tab
    },
    data() {
      return {

      }
    },
    computed: {
      mainSliderSRC() {
        return this.$store.state.mainSliderData
      },
      categoryAndPro() {
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
    position: relative;
  }

  .carousel-wrapper2 {
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: row-reverse;
    padding-top: 2%;
    position: relative;
    z-index: -2;
  }

  .g-c-left {
    width: 100%;
    height: 100%;
    margin-top: 4%;
    background-color: transparent;
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
    width: 60%;
    text-align: center;
    padding: 4%;
    transition: all .5s;

  }

  .simple-outline-btn {
    background-color: white;
    color: black;
    border: 1px solid black;
    width: 60%;
    text-align: center;
    padding: 4%;
    transition: all .5s;

  }

  .simple-outline-btn:hover {
    background-color: black;
    color: white;
    transition: all .5s;
  }

  .shegeft-link:hover {
    background-color: white;
    color: #f04d7d;
    transition: all .5s;
    border: 1px solid #f04d7d;
  }

  .shegeft-logo {
    width: 58%;
  }

  .group-carousel-wrapper {
    width: 85%;
  }

  .group-carousel-wrapper {
    width: 75%;
    position: relative;
  }

  .shegeft-wrapper2 {
    width: 100%;
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    position: absolute;
    z-index: 12;
    top: 16%;
    background-color: #e9e9e9;
    z-index: -1;
  }

  .logo-brand {
    width: 20%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .tab-wrapper {
    width: 100%;
  }

  .more-see {
    width: 50%;
  }

  .new-brand {
    margin: auto;
    display: flex;
    width: 95%;
    justify-content: space-between;

  }

  .new-brand-img-wrapper {
    width: 48.5%;
  }

  .new-brand-img-wrapper > img {
    width: 100%;
  }

  .poiner {
    cursor: pointer;
  }

  .card-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    gap: 1%;
  }

  .n-card-wrapper {
    width: 24%;
  }

  .title {
    margin-top: 2%;
    padding-right: 3%;
    text-align: right;
  }

  .sale-banner-wrapper {
    display: flex;
    flex-direction: column;
  }

  .sale-banners {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2%;
  }

  .sale-banner-item {
    width: 20%;
  }

  .sale-banner-item > img {
    width: 100%;
  }

  .varenty {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 3%;
  }

  .varenty-item {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 21px;
    color: #434343;
  }

  .varenty-item > img {
    width: 50%;
  }

  .takhfif-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: auto;
  }
</style>
