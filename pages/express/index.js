//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    eCompanys: [ "申通", "EMS" ],  // 邮递公司列表
    eCompanysNum: [ "shentong", "ems" ],  // 邮递公司列表
    currentCompany: null,  // 当前选择的邮递公司index
    inputNumber: null   // 输入的邮递单号 3335534374395
  },
  onLoad: function () {
    wx.showNavigationBarLoading()
    setTimeout(() => wx.hideNavigationBarLoading(), 400)
  },
  // 选择邮递公司
  pickECompany: function(e) {
    that.setData({
      currentCompany: e.detail.value
    })
  },
  getNumber: function (e) {
    this.setData({
      inputNumber: e.detail.value
    })
  },
  checkExpress: function () {
    var that = this
    if (!that.data.currentCompany) {
      that.pickECompany(that)
    }
    // if (that.data.currentCompany && that.data.inputNumber) {
    //   wx.navigateTo({
    //     url: '/pages/details/index?eCompany=' + that.data.eCompanysNum[that.data.currentCompany] + '&inputNumber=' + that.data.inputNumber
    //   })
    // }
  }
})
