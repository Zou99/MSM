//index.js
var Newsdata = require("../data/listdata.js");
//获取应用实例
const app = getApp()

Page({
  data: {
    gamedata:"",
    numberdata:"",
    tabbar: {},
    isloading: false,
    animate: true,
    speed: 2000,
    userdata: "",
    accright:"iconfanhui-r",
    array:[
      {
        accText: "美食",
        accIcon:"iconmeishi1",
        accStyle:"#f55d5b"
      },
      {
        accText: "汉堡披萨",
        accIcon: "iconhanbao",
        accStyle:"#fe8120"
      },
      {
        accText: "下午茶",
        accIcon: "iconxiawucha",
        accStyle:"#fd8220"
      },
      {
        accText: "家常菜",
        accIcon: "iconcai",
        accStyle:"#d176ea"
      },
      {
        accText: "火锅",
        accIcon: "icontubiaozhizuomobanhuoguo-",
        accStyle:"#69dcd0"
      },
      {
        accText: "烤肉",
        accIcon: "iconkaorou",
        accStyle:"#bd6fd7"
      },
      {
        accText: "蛋糕",
        accIcon: "icondangao",
        accStyle:"#fb766a"
      },
      {
        accText: "粉面",
        accIcon: "iconmian",
        accStyle:"#f9678b"
      },
      {
        accText: "西餐",
        accIcon: "iconpisa",
        accStyle:"#fc6c8b"
      },
      {
        accText: "小吃",
        accIcon: "iconmian",
        accStyle:"#58c1f3"
      }
    ],
    commodity:[
      {
        comImg:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3552747563,3327852235&fm=26&gp=0.jpg",
        comShopnam:"尚滋味小龙虾",
        comScore:"4.5分 | 23人评价",
        comMoney:"29.9",
        commCent:"53",
        commZheko:"4.1"
      },
      {
        comImg: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3327084735,2832343786&fm=26&gp=0.jpg",
        comShopnam: "欢乐谷玛雅水公园",
        comScore: "6.5分 | 103人评价",
        comMoney: "59.9",
        commCent: "1153",
        commZheko: "6"
      }
    ]
  },
  
  onLoad: function () {
    app.editTabbar();
    //这是首页中的 我要吃 template 的引入部分
    this.setData({
      numberdata: Newsdata.initdata,
      gamedata: Newsdata.satdata
      
    })
  },
  scan:function(){
    //点击首页扫码的图标  实现扫描二维码功能
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },
  zzqmap:function(){
    wx.navigateTo({
      url: './maop/maop'
    })
  },
  //下拉刷新更新数据
  onReachBottom: function () {
    console.log("不会套数据写个console");
    this.setData({
      //当条件满足的时候，页面滑动到最底下，先显示 正在加载 的样式 ||
      // isloading 正在加载样式的在data中的名
      isloading: true
    })
    //定义一组上拉加载后应该加载的一组数据
    let data = [
      {
        comImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4074429072,212530208&fm=26&gp=0.jpg",
        comShopnam: "中华恐龙园",
        comScore: "5.5分 | 93人评价",
        comMoney: "89.9",
        commCent: "1153",
        commZheko: "7.5"
      },
      {
        comImg: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1479240791,4251834898&fm=26&gp=0.jpg",
        comShopnam: "宿迁项王故里",
        comScore: "6.5分 | 103人评价",
        comMoney: "59.9",
        commCent: "1153",
        commZheko: "6"
      }
    ]
    setTimeout(() => {
      //找到要跟新的数据
      this.setData({
        //concat是js中的一个方法，用于合并
        commodity: this.data.commodity.concat(data),
        //当开始加载数据的时候要控制正在加载的 字样式再次隐藏
        isloading: false
      })
    }, 2000)
  },
  //点击一个商品跳转到商品列表
  arrList:function(){
    wx.navigateTo({
      url: 'lists/lists',
    })
  },
  //点击商品跳转到商品详情
  indexdetil:function(event){
    var user_id = event.currentTarget.dataset.user_id;
    wx.navigateTo({
      url: 'details/details?user_id=' + user_id
    })
  }
})
