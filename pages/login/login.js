// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentStep : 'inputAccount',
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

  },
    nextStep : function () {
        //向服务器发起请求，返回 是否已存在账号
        var self = this;
        // success(res)
        var res_value = 'wei注册';
        self.setData({
            currentStep : res_value==='已注册'?'bind':'register'
        })
    },
    gotoIndex : function () {
        wx.navigateTo({
            url: '/pages/index/index'
        })
    }
})
