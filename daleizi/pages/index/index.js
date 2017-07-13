// pages/index/index.js
Page({
  data: {
    banner: [{
      "bannerOrder": 1,
      "bannerSpecialCoverUrl": "../../imgs/banner.png",
      "bannerSpecialUrl": "http://www.baidu.com",
      "bannerState": 1,
      "bannerTitle": "1"
    },
    {
      "bannerOrder": 2,
      "bannerSpecialCoverUrl": "../../imgs/banner.png",
      "bannerSpecialUrl": "http://www.sina.com.cn",
      "bannerState": 1,
      "bannerTitle": "2"
    }],
    departmentList: []
  },
  searchDoctor: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  getDepartmentList: function () {
    // 获取科室列表
    const _this = this;
    wx.request({
      url: getApp().data.DEPARTMENTLIST,
      method: 'POST',
      success: function (res) {
        console.log(res);
        if (res.data.success && res.data.departmentList.length > 0) {
          _this.setData({
            departmentList: res.data.departmentList
          });
        }
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getDepartmentList();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})