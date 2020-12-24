// pages/we/we.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    widthImg:0,
    heightImg:0,
    Img:[ 
      "https://s3.ax1x.com/2020/12/21/rdgmWR.png",
"https://s3.ax1x.com/2020/12/21/rdguS1.png",
"https://s3.ax1x.com/2020/12/21/rdgeY9.png",
"https://s3.ax1x.com/2020/12/21/rdgZFJ.jpg",
"https://s3.ax1x.com/2020/12/21/rdgEo4.jpg",
"https://s3.ax1x.com/2020/12/21/rdgMy6.png",
"https://s3.ax1x.com/2020/12/21/rdgKQx.png",
"https://s3.ax1x.com/2020/12/21/rdg1eO.png",
"https://s3.ax1x.com/2020/12/21/rdgQOK.png",
"https://s3.ax1x.com/2020/12/21/rdgJFH.png",
"https://s3.ax1x.com/2020/12/21/rwGADx.png",
"https://s3.ax1x.com/2020/12/21/rwGkK1.png",
"https://s3.ax1x.com/2020/12/21/rwGivR.png",
"https://s3.ax1x.com/2020/12/21/rwGEb6.png",
"https://s3.ax1x.com/2020/12/21/rwGP29.png",
"https://s3.ax1x.com/2020/12/21/rwGZVK.png",
"https://s3.ax1x.com/2020/12/21/rwGeUO.png",
"https://s3.ax1x.com/2020/12/21/rwGm5D.png",
"https://s3.ax1x.com/2020/12/21/rwGK8H.png",
"https://s3.ax1x.com/2020/12/21/rwGuPe.png",
"https://s3.ax1x.com/2020/12/21/rwGM2d.png",
"https://s3.ax1x.com/2020/12/21/rwGQxA.png",
"https://s3.ax1x.com/2020/12/21/rwG1KI.png",
"https://s3.ax1x.com/2020/12/21/rwG3rt.png",
"https://s3.ax1x.com/2020/12/21/rwG8qP.png",
"https://s3.ax1x.com/2020/12/21/rwGYa8.png",
"https://s3.ax1x.com/2020/12/21/rwGJVf.png",
"https://s3.ax1x.com/2020/12/21/rwGUPg.png",
"https://s3.ax1x.com/2020/12/21/rwGaGQ.png",
"https://s3.ax1x.com/2020/12/21/rwGtIS.png",
"https://s3.ax1x.com/2020/12/21/rwGd2j.png",
"https://s3.ax1x.com/2020/12/21/rwGwxs.jpg",
"https://s3.ax1x.com/2020/12/21/rwGDrq.png",
"https://s3.ax1x.com/2020/12/21/rwGBMn.jpg",
"https://s3.ax1x.com/2020/12/21/rwGrq0.png",
"https://s3.ax1x.com/2020/12/21/rwGyZV.png",
"https://s3.ax1x.com/2020/12/21/rwG6aT.png",
"https://s3.ax1x.com/2020/12/21/rwGcIU.png",
"https://s3.ax1x.com/2020/12/21/rwGRG4.png",
"https://s3.ax1x.com/2020/12/21/rwG2iF.jpg",
"https://s3.ax1x.com/2020/12/21/rdg3wD.jpg",
"https://s3.ax1x.com/2020/12/21/rdg8Te.png",
"https://s3.ax1x.com/2020/12/21/rdgtfA.png",
"https://s3.ax1x.com/2020/12/21/rdgYYd.png",
"https://s3.ax1x.com/2020/12/21/rdgUSI.png",
"https://s3.ax1x.com/2020/12/21/rdgd6P.png",
"https://s3.ax1x.com/2020/12/21/rdgalt.png",
"https://s3.ax1x.com/2020/12/21/rdgBm8.png",
"https://s3.ax1x.com/2020/12/21/rdgwOf.jpg",
"https://s3.ax1x.com/2020/12/21/rwVDkq.png",
"https://s3.ax1x.com/2020/12/21/rwVrt0.png",
"https://s3.ax1x.com/2020/12/21/rwV07n.png",
"https://s3.ax1x.com/2020/12/21/rwVshV.png",
"https://s3.ax1x.com/2020/12/21/rwVw0s.png",
"https://s3.ax1x.com/2020/12/21/rwVc1U.png",
"https://s3.ax1x.com/2020/12/21/rwVgcF.png",
"https://s3.ax1x.com/2020/12/21/rwV2X4.png",
"https://s3.ax1x.com/2020/12/21/rwVWnJ.png",
"https://s3.ax1x.com/2020/12/21/rwVfB9.png",
"https://s3.ax1x.com/2020/12/21/rwVh7R.png",
"https://s3.ax1x.com/2020/12/21/rwV5A1.png",
"https://s3.ax1x.com/2020/12/21/rwVoh6.png",
"https://s3.ax1x.com/2020/12/21/rwVItx.png",
"https://s3.ax1x.com/2020/12/21/rwV79K.png",
"https://s3.ax1x.com/2020/12/21/rwVH1O.png",
"https://s3.ax1x.com/2020/12/21/rwVbcD.png",
"https://s3.ax1x.com/2020/12/21/rwVqje.png",
"https://s3.ax1x.com/2020/12/21/rwVOnH.png",
"https://s3.ax1x.com/2020/12/21/rwVXBd.png",
"https://s3.ax1x.com/2020/12/21/rwVjHA.png",
"https://s3.ax1x.com/2020/12/21/rwVxAI.png",
"https://s3.ax1x.com/2020/12/21/rwZS4P.png",
"https://s3.ax1x.com/2020/12/21/rwVzNt.png",
"https://s3.ax1x.com/2020/12/21/rwZ99f.png",
"https://s3.ax1x.com/2020/12/21/rwZPgS.png",
"https://s3.ax1x.com/2020/12/21/rwZC38.png",
"https://s3.ax1x.com/2020/12/21/rwZkuQ.png",
"https://s3.ax1x.com/2020/12/21/rwZijg.png",
"https://s3.ax1x.com/2020/12/21/rwZABj.png",
"https://s3.ax1x.com/2020/12/21/rdgD0S.jpg",
"https://s3.ax1x.com/2020/12/21/rdg6Yj.png",
"https://s3.ax1x.com/2020/12/21/rdgrTg.png",
"https://s3.ax1x.com/2020/12/21/rdgykQ.png",
"https://s3.ax1x.com/2020/12/21/rdg2pn.png",
"https://s3.ax1x.com/2020/12/21/rdgcfs.png",
"https://s3.ax1x.com/2020/12/21/rdgW60.png",
"https://s3.ax1x.com/2020/12/21/rdgRlq.png",
"https://s3.ax1x.com/2020/12/21/rdgfXV.png",
"https://s3.ax1x.com/2020/12/21/rdg4mT.png",
"https://s3.ax1x.com/2020/12/21/rdg50U.png",
"https://s3.ax1x.com/2020/12/21/rdgI7F.png",
"https://s3.ax1x.com/2020/12/21/rdgTk4.png",
"https://s3.ax1x.com/2020/12/21/rdg7tJ.png",

    ]
    

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
      widthImg:width/6,
      heightImg:height/6
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