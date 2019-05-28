// pages/wodeSearch/wodeSearch.js
var app = getApp();
var searchContent = null;
var tempSearchContent = null;
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
function getResult() {//拿到输入内容 跳转
    console.log('拿到结果')
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      showModal : false,
      index_range : 0,
      index_numbers : 0,
      index_types : 0,
      projectsName:['所有项目'].concat(getAllPnE().listProArray),
      numbers : ['所有人'].concat(getAllPnE().employeeArray),
      types:['所有内容','模型','事项','文件'],
      // result :
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      searchContent = options.value;
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
    bindRangeChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index_range: e.detail.value
        });
        getResult();
    },
    bindNumbersChange : function(e){
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index_numbers: e.detail.value
        });
        getResult();
    },
    bindTypesChange : function(e){
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index_types: e.detail.value
        });
        getResult();
    },

    getSearchContent : function(e){
        tempSearchContent = e.detail.value;
    },
    showModalTap : function () {
        if(tempSearchContent){
            this.setData({
                showModal : true
            })
        }
        else{
            wx.showModal({
                content: '请输入内容',
                showCancel: false,
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    }
                }
            });
        }

    },
})
