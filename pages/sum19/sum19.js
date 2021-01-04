// pages/summary/summary.js

wx.cloud.init()
const db = wx.cloud.database(); // 初始化数据库

const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,    
    time:"",
    timeData: {},
    summary:[],
    sumNum:0,
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
    db.collection('summary2019')
    .orderBy('time', 'desc')
    .get({      
      success: res => {
        //console.log(res.data)            
        this.setData({
          summary: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    })    
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
    this.onReady()  
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '总结加载中',
      duration: 1000
    })    
    let x = this.data.sumNum + 20
    //console.log(x)
    let oldSum = this.data.summary
    db.collection('summary2019').orderBy('time','desc').skip(x) 
    // 限制返回数量为 20 条
      .get()
      .then(res => {
      // 利用concat函数连接新数据与旧数据      
        this.setData({
          summary: oldSum.concat(res.data),
          sumNum: x
        })
        //console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})