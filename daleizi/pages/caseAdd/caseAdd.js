// pages/caseAdd/caseAdd.js
// 获取地区数据
var area = require('../../common/area.js');
var p = 0, c = 0, d = 0;


Page({
  data:{

    sex: 0,
    age: 0,
    nexus:0,
    arrayAge:[],
    arraySex: ['男', '女'],
    arrayNexus:['本人','亲戚','朋友'],

    provinceName: [],
    provinceCode: [],
    provinceSelIndex: '',
    cityName: [],
    cityCode: [],
    citySelIndex: '',
    districtName: [],
    districtCode: [],
    districtSelIndex: '',
    showDistpicker: false,
    showOpacity: true
    

  },
  arrayAge: function(){
    var num=120;
    var arrayNum=[];
    for ( var i =0; i <= num; i++){
        arrayNum.push(i);
    }
    return arrayNum;
  },
  listenerPickerSex: function(e) {
      //改变sex值，通过setData()方法重绘界面
      this.setData({
        sex: e.detail.value
      });
  }, 
  listenerPickerAge: function(e) {
      //改变age值，通过setData()方法重绘界面
      this.setData({
        age: e.detail.value
      });
     
  },
  listenerPickerNexus: function(e) {
      //改变nexus值，通过setData()方法重绘界面
      this.setData({
        nexus: e.detail.value
      });
     
  },
  //选择地址
    setAreaData: function( p, c, d){
        var p = p, c = c, d = d;
        
        // 设置省的数据
        var province = area['100000']; 
        var provinceName = [];
        var provinceCode =[];
        for (var item in province){
            provinceName.push(province[item]);
            provinceCode.push(item);
        }
        this.setData({
            provinceName:provinceName,
            provinceCode:provinceCode
        })
        // 设置市的数据
        var city = area[provinceCode[p]];
        var cityName = [];
        var cityCode = [];
        for(var item in city){
            cityName.push(city[item]);
            cityCode.push(item);
        }
        this.setData({
            cityName:cityName,
            cityCode:cityCode
        })
        // 设置区的数据
        var district = area[cityCode[c]];
        var districtName = [];
        var districtCode = [];
        for(var item in district){
            districtName.push(district[item]);
            districtCode.push(item);
        }
        this.setData({
            districtName:districtName,
            districtCode:districtCode
        })
    },
    changeArea: function (e) {
      p = e.detail.value[0]
      c = e.detail.value[1]
      d = e.detail.value[2]
      this.setAreaData(p, c, d)
    },
    showDistpicker: function () {
      console.log(1);
      this.setData({
        showDistpicker: true
      })
    },
    distpickerCancel: function () {
      this.setData({
        showDistpicker: false
      })
    },
    distpickerSure: function () {
      this.setData({
        provinceSelIndex: p,
        citySelIndex: c,
        districtSelIndex: d
      })
      this.distpickerCancel()
    },
  onLoad:function(options){
    var arr = this.arrayAge();
    this.setData({
        arrayAge: arr
    });
    
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

 