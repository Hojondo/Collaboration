// pages/wode/wode.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var userName = '张三';
var app = getApp();
function findName(name) {
    var map = {};
    map.listProArray = new Set();
    map.listArray = new Set();
    map.modalProArray = new Set();
    map.modalArray = new Set();
    app.globalData.allProjectsList.forEach(function (currentProject) {
        currentProject.list.forEach(function (currentList) {
            currentList.li.forEach(function (currentLi) {
                if(currentLi.name === name){
                    map.listArray.add(currentList.listName);
                    map.listProArray.add(currentProject.projectName)
                }
            })
        });
        currentProject.modals.forEach(function (currentModals) {
            currentModals.workSet.forEach(function (currentWorkSet) {
                if(currentWorkSet.name === name){
                    map.modalArray.add(currentModals.modalName);
                    map.modalProArray.add(currentProject.projectName)
                }
            })
        })
    });
    // map.listProArray = Array.from(map.listProArray);
    // map.listArray = Array.from(map.listArray);
    // map.modalProArray = Array.from(map.modalProArray);
    // map.modalArray = Array.from(map.modalArray);

    map.listProObj = {};
    map.listProArray.forEach(function (current) {
        map.listProObj[current] = true;
    });
    map.listObj = {};
    map.listArray.forEach(function (current) {
        map.listObj[current] = true;
    });
    map.modalProObj = {};
    map.modalProArray.forEach(function (current) {
        map.modalProObj[current] = true;
    });
    map.modalObj = {};
    map.modalArray.forEach(function (current) {
        map.modalObj[current] = true;
    });

    return map;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
      userName : userName,
      userNameMap : findName(userName),
      avator : '/resources/img/avatar.jpg',
      tabs: ["事项", "模型"],
      activeIndex: 1,
      allProjectsList : app.globalData.allProjectsList,
      currentTime : new Date()
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
    tabClick: function (e) {
        this.setData({
            // sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    checkModalHis : function () {
      wx.navigateTo({
          url:'/pages/wodeModalHis/wodeModalHis',
      })
    }
})
