const BASEURL = "https://www.yykoo.cn"; // 测服
// const BASEURL = "https://www.yykaoo.com"; // 正服
App({
  data: {
    access_token: '', // access_token
    DEPARTMENTLIST: BASEURL + '/yykaoo/app/common/departmentList.do', // 获取科室列表
    DEPARTMENTALLLIST: BASEURL + '/yykaoo/app/common/departmentAllList.do', // 获取所有二级科室
    DOCTORLIST: BASEURL + '/yykaoo/app/doctor/list.do', // 专家列表
    DOCTORVIEW: BASEURL + '/yykaoo/app/member/favorite/view.do', // 专家详情
    SEARCH: BASEURL + '/yykaoo/app/doctor/search.do', // 搜索
    ORDERLIST: BASEURL + '/yykaoo/app/member/order/listV2.do', // 订单列表
    ORDERVIEW: BASEURL + '/yykaoo/app/member/order/view.do', // 订单详情
    SENDCODE: BASEURL + '/yykaoo/app/common/send_code.do', // 发送短信验证码
    LOGIN: BASEURL + '/yykaoo/app/login/xcx_verif_code_sign_login.do', // 登录
    FILEUPLOAD: BASEURL + '/yykaoo/file/upload.do', // 文件上传
    MEDICALRECORDSAVE: BASEURL + '/yykaoo/app/member/medical_record/save.do', // 新增病例
    CREATEORDER: BASEURL + '/yykaoo/app/member/order/create_order.do', // 新建订单
    ORDERVIEW: BASEURL + '/yykaoo/app/member/order/view.do', // 获取订单详情
    TOPAY: BASEURL + '/yykaoo/app/member/order/toPay.do', // app支付获取参数
    MEDICALRECORDLIST: BASEURL + '/yykaoo/app/member/medical_record/list.do', // 获取病例列表信息
    MEDICALRECORDLISVIEW: BASEURL + '/yykaoo/app/member/medical_record/view.do', // 获取指定病例信息
    BANNERLSIT: BASEURL + '/yykaoo/app/market/bannerList.do', // banner
  },
  onLaunch: function (options) {
    //   当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    // console.log(this.data);
  },
  onShow: function (options) {
    //   当小程序启动，或从后台进入前台显示，会触发 onShow
    console.log('onShow');
    console.log(options);
  },
  onHide: function (res) {
    //   当小程序从前台进入后台，会触发 onHide
    console.log('onHide');
  },
  onError: function (msg) {
    //   当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    console.log('onError');
    console.log(msg)
  },
  setAccessToken: function(aceessToken){
    this.data.access_token = aceessToken;
  },
})
