// pages/index/details/details.js
var detildata = require("../../data/listdata.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detildata: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //因为数据源的问题，setData接收的是对象类型的，所以直接把这个放入，
    //然后在wxml页面直接用js中的对象名即可获取到数据
    this.setData(detildata.initdata[options.user_id]);
    this.setData({
      newsdata: options.user_id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})