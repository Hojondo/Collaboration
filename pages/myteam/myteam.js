// pages/myteam/myteam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allEmployee:[{
        avator:'/resources/img/avatar.jpg',
        name:'收到'
    },{
        avator:'/resources/img/avatar.jpg',
        name:'房东'
    },{
        avator:'/resources/img/avatar.jpg',
        name:'是对方'
    },{
        avator:'/resources/img/avatar.jpg',
        name:'士大夫'
    },{
        avator:'/resources/img/avatar.jpg',
        name:'士大夫2'
    },{
        avator:'/resources/img/avatar.jpg',
        name:'烦烦烦'
    },{
        avator:'/resources/img/avatar.jpg',
        name:'事实上'
    },{
        avator:'/resources/img/avatar.jpg',
        name:'地方'
    },{
        avator:'/resources/img/avatar.jpg',
        name:'收到'
    }]
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
  onShareAppMessage: function (res) {
      if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target)
      }
      else if(res.from === 'menu'){

      }
      return {
          title: '转发标题',
          path: '/page/index/index',
          // imageUrl : ''
      }
  }
})
