// pages/song/song.js

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
    author:"",
    text:"",
    song:"",
  },

  onChangeName(event) {     
    this.setData({
      name:event.detail
    })  
  },

  onChangeAuthor(event) {     
    this.setData({
      author:event.detail
    })  
  },

  onChangeText(event) {     
    this.setData({
      text:event.detail
    })  
  },

  onChangeSong(event) {     
    this.setData({
      song:event.detail
    })  
  },

  insert:function () {
    //var TIME = util.formatTime(new Date());
    console.log(new Date())
    this.setData({
    time: util.formatTime(new Date()),
    });
    db.collection('song')
    .add({
      data:{
        time:this.data.time,
        name:this.data.name,
        author:this.data.author,
        text:this.data.text,
        song:this.data.song,
        rate:5
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