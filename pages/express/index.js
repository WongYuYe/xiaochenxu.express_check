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
  },
  // 选择邮递公司
  pickECompany: function(e) {
    this.setData({
      currentCompany: e.detail.value
    })
  },
  getNumber: function (e) {
    this.setData({
      inputNumber: e.detail.value
    })
  },
  checkExpress: function () {
    wx.navigateTo({
      url: '/pages/details/index?eCompany=' + this.data.eCompanysNum[this.data.currentCompany] + '&inputNumber=' + this.data.inputNumber
    })
  }
})
