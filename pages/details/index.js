//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    expressDetails: {}
  },
  onLoad: function (option) {
    var that = this
    wx.request({
      url: app.globalData.url,
      data: {
        type: option.eCompany,
        postid: option.inputNumber
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          expressDetails: res.data
        })
      }
    })
  }
})
