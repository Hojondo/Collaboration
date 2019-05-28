// pages/projectOne_newWorkset/projectOne_newWorkset.js
var app = getApp();
function getAllPnE() {
    var map = {};

    map.listProArray = new Set();
    map.employeeArray = new Set();
    app.globalData.allProjectsList.forEach(function (currentProject) {
        map.listProArray.add(currentProject.projectName);
        currentProject.list.forEach(function (currentList) {
            currentList.li.forEach(function (currentLi) {
                map.employeeArray.add(currentLi.name);
            })
        });
        currentProject.modals.forEach(function (currentModals) {
            currentModals.workSet.forEach(function (currentWorkSet) {
                map.employeeArray.add(currentWorkSet.name);
            })
        })
    });
    map.listProArray = Array.from(map.listProArray);
    map.employeeArray = Array.from(map.employeeArray);

    return map;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      employee : getAllPnE().employeeArray,
      employeeIndex : null,
      date: null
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
    chooseOne : function (e) {
        this.setData({
            employeeIndex : e.detail.value,
        })
    },
    dateChange: function(e) {
        this.setData({
            date: e.detail.value
        })
    },
})
