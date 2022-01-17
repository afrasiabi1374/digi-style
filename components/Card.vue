<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="time-title">
        <div class="time">
          <Timer
            :year="1410"
            :month="12"
            :date="26"
            :hour="14"
            :minute="29"
            :second="10"
            :millisecond="10"
          />
        </div>
        <div class="title">پیشنهاد شگفت آویز</div>
      </div>
      <p class="brand">افراتین</p>
      <div class="card-img-wrapper">
        <img draggable="false" class="card-img" src="~/assets/images/products/cream.jpg" alt="عکس محصول">
      </div>
      <div class="sale-persent digit">25%</div>
      <p class="pro-title digit">ماسک صورت ورقه ای سوپر فروت فریمن مدل All skin types حجم 150 میلی لیتر
      </p>
      <p>
          <span class="price digit">
            50000تومان
          </span>
      </p>
    </div>
  </div>
</template>

<script>
  import Timer from  './Timer'
  export default {
    components:{
      Timer
    },
    name: 'Card'
  }
</script>

<style scoped>
  .card-wrapper{
    background-color: transparent;
    height: 88%;

  }
  .card{
    width: 90%;
    height: 100%;
    margin: auto;
    background-color: white;
  }
  .time-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4px;
    padding: .5% 3%;


  }
  .title{
    color: #f04d7d;
    font-size: 14px;
  }
  .time{
    color: #f04d7d;
  }
  .brand{
    padding: 3%;
    text-align: right;
  }
  .sale-persent{
    text-align: center;
    float: left;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background-color: black;
    color: white;
    clear: both;
  }
  .card-img-wrapper{
    width: 80%;
    height: 50%;
    margin: auto;
  }
  .card-img{
    width: 100%;
    height: 100%;
  }
  .pro-title{
    clear: both;
    font-size: 14px;
    font-weight: lighter;
    padding: 2%;

  }
  .price{
    font-size: 16px;
    padding: 2%;
  }
</style>
