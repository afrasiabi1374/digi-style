export const state = () => {
  return {
    mainSliderData: [
      { id: 1 , src: require("~/assets/images/BigBanners/1.jpg") },
      { id: 2 , src: require("~/assets/images/BigBanners/2.jpg") },
      { id: 3 , src: require("~/assets/images/BigBanners/3.jpg") },
      { id: 4 , src: require("~/assets/images/BigBanners/4.jpg") },
      { id: 5 , src: require("~/assets/images/BigBanners/5.jpg") },
      { id: 6 , src: require("~/assets/images/BigBanners/6.jpg") },
      { id: 7 , src: require("~/assets/images/BigBanners/7.jpg") }
    ],
    cats: [
      {id: 1, name: 'زنانه' , subCat: [
          {id:1, name: 'لباس',description: 'خرید لباس زنانه',icon: '',child:[
              {id:1, name: 'هودی و سویتشرت زنانه',Pro:[]  },
              {id:2, name: 'پیراهن',Pro:[] },
              {id:3, name: 'شلوار',Pro:[] },
            ] , festival: [
              {id: 1, name: 'برترین لباس برندهای زنانه' ,src:[
                require('~/assets/images/festival/woman-clothes/1.jpg'),
                require('~/assets/images/festival/woman-clothes/2.jpg'),
                require('~/assets/images/festival/woman-clothes/3.jpg'),
                require('~/assets/images/festival/woman-clothes/4.jpg'),
                ]}
            ]},
          {id:2, name: 'کیف',description: 'خرید کیف زنانه',icon: '',child:[],  festival: [
              {id: 2, name: 'برترین برند کیف  زنانه' ,src:[
                  require('~/assets/images/festival/woman-bags/1.jpg'),
                  require('~/assets/images/festival/woman-bags/2.jpg'),
                  require('~/assets/images/festival/woman-bags/3.jpg'),
                  require('~/assets/images/festival/woman-bags/4.jpg'),
              ]}
            ]
          },
          {id:3, name: 'کفش زنانه',description: 'خرید کفش زنانه',icon: '',child:[], festival: [] },
          {id:4, name: 'اکسسوری ورزشی',description: 'خرید لوازم ورزشی زنانه',icon: '',child:[], festival: [] },
        ]},


      {id: 2, name: 'مردانه', subCat: [
          {id:1, name: 'لباس',description: 'خرید لباس مردانه',icon: '',child:[
              {id:1, name: 'هودی و سویتشرت',Pro:[] },
              {id:2, name: 'پیراهن',Pro:[] },
              {id:3, name: 'شلوار',Pro:[] },
            ] },
          {id:2, name: 'کیف',description: 'خرید کیف مردانه',icon: '',child:[] },
          {id:3, name: 'کفش',description: 'خرید کفش مردانه',icon: '',child:[] },
          {id:4, name: 'اکسسوری ورزشی',description: 'خرید لوازم ورزشی مردانه',icon: '',child:[] },
        ]
      },
      {id: 3, name: 'بچگانه' , subCat:[]},
      {id: 4, name: 'زیبایی وسلامت' , subCat:[]}
    ]
  }
}

export const getters = {
  getMainBanners(state){
    return state.mainSliderData
  },
  getCategoryAndProducts(state){
    return state.cats
  }
}
