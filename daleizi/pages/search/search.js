// pages/search/search.js
Page({
  data:{
    value: '',
    page: 0,
    flag: true,
    doctorList: [] // 专家列表
  },
  handlerCancel: function(e){
    // 取消
    wx.navigateBack()
  },
  searchData: function(e){
    this.setData({
      value: e.detail.value,
      page: 0
    });
    this.getDoctorList();
  },
  getDoctorList: function(){
    console.log(this.data);
    const _this = this;
    wx.request({
      url: getApp().data.SEARCH,
      data: {
        flag: 1, //  0:搜索全部（医院、科室、医生）、1-医生、2-科室、3-医院
        searchItem: 0, // 0:专家 1：私人医生 2:专家+私人医生
        pageNumber: _this.data.page,
        keyword: _this.data.value
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        console.log(res);
        let doctorList = _this.data.page ? _this.data.doctorList : [];
        if (res.data.success && res.data.appSearchResult.doctorList.length > 0) {
          doctorList = doctorList.concat(res.data.appSearchResult.doctorList);
          const p = res.data.appSearchResult.doctorList.length == 10 ? ++_this.data.page : _this.data.page;
          _this.setData({
            page: p,
            flag: res.data.appSearchResult.doctorList.length == 10,
            doctorList: doctorList
          });
        }
      }
    })
  }, 
  onReachBottom: function(){
    console.log();
    if(this.data.flag){
      this.getDoctorList();
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})