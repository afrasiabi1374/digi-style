<template>
  <div class="main-wrapper">
    <ul class="wrapper">
      <template v-for="data in tabData">
        <li class="tab-item" :key="data.id" @click="initTab = data.id">
          <p class="tab-caption">
            {{data.name}}
          </p>
        </li>
      </template>
    </ul>
    <div class="tab-result">
      <div class="first-tab-img-warapper">
        <img class="first-tab-img-warapper-img" draggable="false" :src="tabResult.tabImage[0]" alt="" width="100%" height="20%">
        <span class="tab-result-caption"> دسته کپشن</span>
      </div>
      <div class="second-tab-img-wrapper">
        <template  v-for="(item, i) in tabResult.tabImage">
          <div class="img-wrapper"  v-if="item && item !== tabResult.tabImage[0]" :class="[tabResult.tabImage.length == 3?'two':'', tabResult.tabImage.length == 4 ? 'tree' : '', tabResult.tabImage.length == 5 ? 'four': '']">
            <img draggable="false" :src="item" alt="" width="100%" height="100%" :key="i">
            <span class="tab-result-caption"> دسته کپشن</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tab',
    props: ['tabData'],
    data(){
      return{
        initTab: 1,
      }
    },
    computed :{
      tabResult() {
        return this.$store.getters.getTab(this.initTab)
      }

    },
    mounted() {
    }

  }
</script>

<style scoped>
  .main-wrapper{
    background-color: #f2f9ff;
    display: flex;
    flex-direction: column;

  }
  .wrapper{
    display: flex;
    text-align: right;
    flex-direction: row-reverse;
    justify-content: center;
    width: 100%;
    list-style-type: none;
    gap: 5%;
    margin: auto;
    padding: 3% 0;
  }
  .tab-item{
    cursor: pointer;
  }
  .tab-caption{
    font-size: 1.5em;
  }
  .tab-result{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .first-tab-img-warapper{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 1s;
    overflow: hidden;
    transition: all 1s;
    width: 91%;
  }
  .first-tab-img-warapper:hover > .first-tab-img-warapper-img{
    transform: scale(1.07);
    transition: all 1s;
  }
  .first-tab-img-warapper > .first-tab-img-warapper-img{
    transition: all 1s;
  }
  .tab-result-caption{
    position: absolute;
    right: 0%;
    bottom: 0%;
    z-index: 10;
    background-color: white;
    padding: .8% 2%;
    background-color: #f2f9ff;
  }
  .second-tab-img-wrapper{
    display: flex;
    justify-content: space-between;
    padding: 2.5% 0;
    width: 91%;
    height: 279px;
  }
  .img-wrapper{
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .img-wrapper > img{
    transition: all 1s;
  }
  .img-wrapper:hover > img {
    transition: all 1s;
    transform: scale(1.07);
  }
  .two{
    width: 48%;
  }
  .tree{
    width: 32%;
  }

  .four{
    width: 24%;
  }
</style>
