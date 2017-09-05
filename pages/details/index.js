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
    showDetails: false,  // 运单是否存在，存在显示细节，默认不显示
    showErr: false  // 运单是否存在，不存在显示err，默认不存在
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
              showDetails: true,
              expressDetails: resData,
              currentCompany: that.data.eCompanys[index],
              isCheck: 'Received'
            })
          } else {
            that.setData({
              showDetails: true,
              expressDetails: resData,
              currentCompany: that.data.eCompanys[index],
              isCheck: 'in transit'
            })
          }
        } else {
          that.setData({
            showErr: false
          })
        }
        wx.hideNavigationBarLoading()
      }
    })
  }
})
