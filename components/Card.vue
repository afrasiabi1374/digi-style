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
            v-if="timer===true"
          />
        </div>
        <div class="title" v-if="timer===true">پیشنهاد شگفت آویز</div>
      </div>
      <p class="brand">{{src.brand}}</p>
      <div class="card-img-wrapper">
        <img draggable="false" class="card-img" :src="src.image" alt="عکس محصول">
      </div>
      <div class="sale-persent digit">25%</div>
      <span class="pro-title digit">{{src.title}}
      </span>

      <p>
          <span class="price digit">
            {{src.price}}
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
    props:[
      'src',
      'timer'
    ],
    name: 'Card'
  }
</script>

<style scoped>
  .card-wrapper{
    background-color: transparent;
    height: 100%;
    width: 100%;
  }
  .card{
    width: 90%;
    height: 100%;
    margin: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    direction: rtl;

  }
  .price{
    font-size: 16px;
    padding: 2%;
    margin-right: auto;
    text-align: left;
    }
</style>
