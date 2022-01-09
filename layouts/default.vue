<template>
  <div id="main-wrapper" width="100%">
    <header>
      <div class="cart-sign">
        <div class="cart">
          <div class="counter">{{0}}</div>
        </div>
        <div class="sign">
          وارد شوید
        </div>
      </div>
      <div class="nav-wrapper">
        <img src="../assets/images/log/indexLogo.svg" alt="logo" width="207" height="34">
        <div class="c-header__seperator"></div>
      </div>
      <div class="search" >
        <input class="search-input" type="text" placeholder="جستجوی محصولات ">
      </div>
    </header>
      <nav>
        <template v-for="item in categoryAndPro">
          <li  :class="['nav-item', item.subCat.length > 0 ? 'main-parent': '']" :key="item.id"  @mouseover="subCatMaker(item , 'subCat')" >{{ item.name }}</li>
        </template>
        <ul  class="parent"  >
          <template v-for="item in subCat">
            <li class="parent-item" :key="item.id" @mouseover="subCatMaker(item,'child')">
              {{item.name}}
              <img src="../assets/icons/shirt.png" alt="" width="20" height="20">
            </li>
          </template>
          <div class="categories">
            <div class="mega-col">
              <h3 class="mega-link-title">خرید لباس مردانه</h3>
              <ul v-for="item in child" class="child-wrapper">
                <li class="mega-link-wrapper" :key="item.id">
                  <nuxt-link to="#">{{item.name}}</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="mega-col">
              <h3>
                {{ festival[0]}}
              </h3>
              <div class="festival-img" >
                <template v-for="(item, i) in festival[1]">
                  <img :src="item" alt="عکس برند" :key="i" width="200px" height="110px">
                </template>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    <Nuxt/>
  </div>
</template>
<script scoped>
  export default {
    data(){
      return{
        subCat: '',
        child: '',
        festival: []
      }
    },
    methods:{
      subCatMaker(item, type){
        if (type == 'child') {
          this.child = item.child
          if (item.festival !== undefined){
            this.festival[1] = item.festival[0]?.src
            this.festival[0] = item.festival[0]?.name

          }
        }else if(type == 'subCat') {
          this.subCat = item.subCat
          this.child = item.subCat[0]?.child? item.subCat[0].child : ''
        }
      }
    },
    computed:{
      categoryAndPro(){
        return this.$store.getters.getCategoryAndProducts
      }
    }
  }
</script>
<style>
  .main-wrapperV {
    display: flex;
    flex-direction: column;
  }

  header {
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    z-index: 2;
    width: 100%;
    text-align: center;
    padding-top: 22px;
  }

  .cart-sign {
    flex-grow: 2;
  }

  .nav-wrapper {
    flex-grow: 3;
  }

  .search {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .cart-sign {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }

  .cart {
    background-image: url("assets/images/icons/basket.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 22px;
    height: 22px;
    position: relative;

  }

  .counter {
    background: #ef5a88;
    border-radius: 50%;
    color: white;
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10%;
    left: 72%;
  }

  .sign {
    padding-right: 6%;
    font-size: 13px;
  }

  .nav-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    align-items: center;
  }

  .c-header__seperator {
    height: 1px;
    width: 438px;
    max-width: 100%;
    background-color: #000;
    margin-top: 26px;
  }

  .c-header__supercat-seperator {
    display: block;
    width: 1px;
    height: 15px;
    margin: auto 20px;
    margin-top: auto;
    margin-right: 20px;
    margin-bottom: auto;
    margin-left: 20px;
    background-color: rgba(0, 0, 0, .54);
  }

  nav {
    display: flex;
    flex-direction: row-reverse;
    justify-content:center;
    width: 100%;
    padding-top: 2%;
    flex-wrap: nowrap;
    position: absolute;
    z-index: 9;
    top: 10%;
  }

  nav li {
    list-style-type: none;
    font-size: 13px;
    cursor: pointer;

  }

  nav li:hover {
    font-weight: bold;
  }

  .search-input {
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
    outline: none;
    padding: 4px 30px 4px 0;
    text-align: right;
  }
  .main-parent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;


  }
  .parent{
    position: absolute;
    top: 100%;
    width: 100vw;
    background-color: white;
    display: none;
    flex-direction: row-reverse;
    list-style-type: none;
    justify-content: center;
    font-weight: 700;
    font-size: .75rem;
    display: none;
  }
  .parent-item{
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    padding: 8px 25px;
  }
  .parent-item:hover {
    border-bottom: 3px solid #1bb4d8;
  }
  .categories{
    width: 100vw;
    height: 70vh;
    background-color: white;
    position: absolute;
    top: 100%;
    border-top: 1px solid lightslategray;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    padding-top: 5%;

  }
  .nav-item{
    padding: 10px 20px;
  }
  nav .main-parent:hover ~  .parent ,.parent:hover,
  nav .main-parent:hover ~ .categories,
  .parent:hover ~ .categories, .categories:hover{
    display: flex;
    transition: all 2s;
  }
  .categories:hover + .parent {
    display: flex;
    transition: all 2s;
  }
  .mega-link-wrapper{
    text-align: right;
    color: #757575;
    font-size: .812rem;
    font-weight: 400;
    letter-spacing: normal;
    -webkit-transition: all .3s ease-in-out;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 10%;
    height: 30px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

  }
  .mega-link-title{
    text-align: right;
    letter-spacing: normal;
    -webkit-transition: all .3s ease-in-out;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 10%;
    height: 30px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
</style>

