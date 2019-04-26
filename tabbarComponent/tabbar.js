// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#EE7700",
        "list": [
          {
            "pagePath": "pages/index/index",
            "iconPath": "icon/index.png",
            "selectedIconPath": "icon/index2.png",
            "text": "首页"
          },
          {
            "pagePath": "pages/classify/classify",
            "iconPath": "icon/classify.png",
            "selectedIconPath": "icon/classify2.png",
            "text": "分类"
          },
          {
            "pagePath": "pages/product/product",
            "iconPath": "icon/icon_release.png",
            "isSpecial": true,
            "text": "MSM"
          },
          {
            "pagePath": "pages/activity/activity",
            "iconPath": "icon/activity.png",
            "selectedIconPath": "icon/activity2.png",
            "text": "活动"
          },
          {
            "pagePath": "pages/personal/personal",
            "iconPath": "icon/geren.png",
            "selectedIconPath": "icon/geren2.png",
            "text": "我的"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
