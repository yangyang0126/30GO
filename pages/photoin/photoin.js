// pages/photo/photo.js

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
    imageID:"",
  },

  onChangeName(event) {
    this.setData({
      name:event.detail
    })  
  },

  upload:function() {  
    var that = this; 
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        wx.cloud.uploadFile({
          cloudPath: 'photo/'+that.data.name +'_'+ new Date().getTime() + '.png', // 上传至云端的路径
          filePath: tempFilePaths[0], // 小程序临时文件路径
          success: res => {  
            db.collection('photo')
            .add({
              data:{                
                fileID:res.fileID,                  
                }
            }).then(res => {
              console.log(res)
              wx.showToast({
                title: '提交成功',   
                icon: 'success',   
                duration: 2000//持续的时间   
              })
            }).catch(console.error)
                   
          },
          fail: console.error
        })
      }
    })    
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