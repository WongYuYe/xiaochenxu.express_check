//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    expressDetails: null,
    eCompanys: [ "申通", "EMS" ],  // 邮递公司列表
    eCompanysNum: [ "shentong", "ems" ],  // 邮递公司列表
    currentCompany: '',  // 当前邮递公司
    isCheck: false,  // 是否签收，默认未签收
    isExist: false  // 运单是否存在，默认不存在
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
        wx.showNavigationBarLoading()
        var resData = res.data
        if (resData.status == 200) {
          var index = that.data.eCompanysNum.indexOf(resData.com)
          if (resData.ischeck) {
            that.setData({
              isExist: true,
              expressDetails: resData,
              currentCompany: that.data.eCompanys[index],
              isCheck: 'Received'
            })
          } else {
            that.setData({
              isExist: true,
              expressDetails: resData,
              currentCompany: that.data.eCompanys[index],
              isCheck: 'in transit'
            })
          }
        } else {
          that.setData({
            isExist: false
          })
        }
        wx.hideNavigationBarLoading()
      }
    })
  }
})
