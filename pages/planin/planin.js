// pages/planin/planin.js
wx.cloud.init()
const db = wx.cloud.database(); // 初始化数据库
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"",
    name:"",
    age:"",
    learn:"",
    certificate:"",
    read:"",
    change:"",
    city:"",
    sport:"",
    adress:"", 
    text:"",
    code:"",  
  },

  onChangeName(event) {     
    this.setData({
      name:event.detail
    })  
  },
  onChangeLearn(event) {     
    this.setData({
      learn:event.detail
    })  
  },
  onChangeCer(event) {     
    this.setData({
      certificate:event.detail
    })  
  },
  onChangeRead(event) {     
    this.setData({
      read:event.detail
    })  
  },
  onChangeChange(event) {     
    this.setData({
      change:event.detail
    })  
  },
  onChangeCity(event) {     
    this.setData({
      city:event.detail
    })  
  },
  onChangeSport(event) {     
    this.setData({
      sport:event.detail
    })  
  },
  onChangeAddress(event) {     
    this.setData({
      adress:event.detail
    })  
  },
  onChangeText(event) {     
    this.setData({
      text:event.detail
    })  
  },
  onChangeCode(event) {     
    this.setData({
      code:event.detail
    })  
  },

  insert:function () {
    //var TIME = util.formatTime(new Date());
    console.log(new Date())
    this.setData({
    time: util.formatTime(new Date()),
    });
    db.collection('plan2021')
    .add({
      data:{
        time:this.data.time,
        name:this.data.name,
        learn:this.data.learn,
        certificate:this.data.certificate,
        read:this.data.read,
        change:this.data.change,
        city:this.data.city,
        sport:this.data.sport,
        adress:this.data.adress,
        text:this.data.text,
        code:this.data.code,
        }
    }
      
    )
    .then(res => {
      console.log(res)
      wx.showToast({
        title: '提交成功',   
        icon: 'success',   
        duration: 2000//持续的时间   
      })
    })
    .catch(console.error)
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})