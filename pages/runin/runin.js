// pages/runin/runin.js

wx.cloud.init()
const db = wx.cloud.database(); // 初始化数据库
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    title:"",
    number:"",
    uint:"",
    endtime:"",
    time:"",
    color:"#74c7b8"
  },

  onChangeName(event) {     
    this.setData({
      name:event.detail
    })  
  },

  onChangeTitle(event) {     
    this.setData({
      title:event.detail
    })  
  },

  onChangeNum(event) {     
    this.setData({
      number:event.detail
    })  
  },

  onChangeUint(event) {     
    this.setData({
      uint:event.detail
    })  
  },

  onChangeTime(event) {     
    this.setData({
      endtime:event.detail
    })  
  },

  onChangeColor(event) {     
    this.setData({
      color:event.detail
    })  
  },

  insert:function () {
    //var TIME = util.formatTime(new Date());
    console.log(new Date())
    this.setData({
    time: util.formatTime(new Date()),
    });
    db.collection('run21')
    .add({
      data:{
        time:this.data.time,
        name:this.data.name,
        title:this.data.title,
        endtime:this.data.endtime,
        number:this.data.number,
        uint:this.data.uint,
        color:this.data.color,
        rate:0
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