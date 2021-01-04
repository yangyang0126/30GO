// 初始化数据库
wx.cloud.init()
const db = wx.cloud.database(); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    widthImg:0,
    heightImg:0,
    Img:[],
    imgNum:0, // 图片的初始数量
  },

  onClickImg: function(event){
    var imgUrl = event.currentTarget.dataset.url;
    wx.previewImage({
      urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
      current: '', // 当前显示图片的http链接，默认是第一个      
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
    db.collection('photo').limit(18)
    .orderBy('fileID','desc')
    .get({      
      success: res => {
        //console.log(res.data)            
        this.setData({
          Img: res.data
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
    this.setData({
      widthImg:width/3.3,
      heightImg:height/3.3
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
      title: '照片刷新中',
      duration: 1000
    })    
    let x = this.data.imgNum + 18
    //console.log(x)
    let oldImg = this.data.Img
    db.collection('photo').orderBy('fileID','desc').skip(x) 
    // 限制返回数量为 20 条
      .get()
      .then(res => {
      // 利用concat函数连接新数据与旧数据      
        this.setData({
          Img: oldImg.concat(res.data),
          imgNum: x
        })
        //console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    //console.log('circle 下一页');

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})