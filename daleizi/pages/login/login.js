// pages/login/login.js
Page({
  data: {
    username: '', // 用户名
    code: '', // 验证码
    codename: '获取验证码', // 获取验证码
    codetype: true, // 验证码状态,是否获取验证码
    codeCD: 0, // 倒计时
    time: 60 // 倒计时时间
  },
  usernameBlur: function (e) {
    // 手机号失去焦点时验证
    const username = e.detail.value.trim();
    this.setData({
      username: username.length == 11 ? username : ''
    });
  },
  codeInput: function(e){
    // 获取验证码
    this.setData({
      code: e.detail.value.trim()
    });
  },
  usernameVertify: function () {
    // 验证手机号
    const reg = /^1[34578]\d{9}$/;
    if (!this.data.username) {
      console.log("请输入手机号");
      return false;
    }
    if (!reg.test(this.data.username)) {
      console.log("请输入正确的手机号");
      return false;
    }
    return true;
  },  
  codeVertify: function(){
    // 验证验证码
    if(!this.data.code){
      console.log("请输入验证码");
      return false;
    }
    return true;
  },
  getCode: function () {
    // 获取验证码
    if (!this.data.codetype) return; // 若已获取验证码则不再响应
    if (!this.usernameVertify()) return;
    var _this = this;
    wx.request({
      url: getApp().data.SENDCODE,
      data: {
        phone: this.data.username,
        p: '',
        role: 0,
        type: 0,
        sign: '',
        version: ''
      },
      header: {'content-type': 'application/x-www-form-urlencoded'},
      method: 'POST',
      success: function (res) {
        console.log(res);
        if (res.data.success) {
          _this.resendCode();
        }
      }
    });
  },
  resendCode: function(){
    // 重新发送验证码
    const _this = this;
    let time = this.data.time;
    this.data.codeCD = setInterval(()=>{
      if (--time >= 1){
        _this.setData({
          codename: '重新获取(' + time +'s)',
          codetype: false
        });
      } else {
        _this.setData({
          codename: '获取验证码',
          codetype: true
        });
        clearInterval(_this.data.codeCD);
      }
    }, 1000);
  },
  login: function(){
    // 登录
    if (!this.usernameVertify()) return;
    if (!this.codeVertify()) return;
    let systemName, platform;
    const _this = this;
    wx.getSystemInfo({
      success: function(e){
        systemName = e.system;
        platform = e.platform;
      },
      fail: function(e){
        // 失败时设置默认值
        systemName = "systemName";
        platform = "platform";
      }
    });
    wx.request({
      url: getApp().data.LOGIN,
      data: {
        username: this.data.username,
        verifCode: this.data.code,
        systemName: systemName,
        platform: platform
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        console.log(res);
        if(res.data.success){
          getApp().setAccessToken(res.data.appMember.accessToken);
          wx.navigateBack();
        }
      }
    })

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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