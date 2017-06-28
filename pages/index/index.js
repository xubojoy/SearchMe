var fileData = require('../../utils/config.js')
var app = getApp()
Page({
  data: {
    showData: fileData.mtData().list,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    companys: [],
  },

  onLoad: function () {
    var that = this;
    var data = that.data.showData;
    that.setData({ 
      companys: data
    });
    
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
    console.log('onShareAppMessage')
    return {
      title: '查我',
      desc: '小程序',
      path: '/pages/index/index'
    }
  },
})