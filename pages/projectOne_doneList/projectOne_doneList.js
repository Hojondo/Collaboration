// pages/projectOne_doneList/projectOne_doneList.js
var app = getApp();
var currentProject = '海钓施工项目';
function findDone() {
    var map = {};
    map.listProArray = new Set();
    map.listArray = new Set();
    app.globalData.allProjectsList.forEach(function (currentProject) {
        currentProject.list.forEach(function (currentList) {
            currentList.li.forEach(function (currentLi) {
                if(currentLi.done === true){
                    map.listArray.add(currentList.listName);
                    map.listProArray.add(currentProject.projectName)
                }
            })
        })
    });
    // map.listProArray = Array.from(map.listProArray);
    // map.listArray = Array.from(map.listArray);

    map.listProObj = {};
    map.listProArray.forEach(function (current) {
        map.listProObj[current] = true;
    });
    map.listObj = {};
    map.listArray.forEach(function (current) {
        map.listObj[current] = true;
    });
    return map;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      currentProject : currentProject,
      allProjectsList : app.globalData.allProjectsList,
      listHasDone : findDone()
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
    backToProject : function () {
        wx.navigateBack();
    }
})
