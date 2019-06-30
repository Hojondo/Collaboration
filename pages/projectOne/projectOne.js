// pages/projectOne/projectOne.js
const qiniuUploader = require("../../utils/qiniuUploader");
var app = getApp();
var currentProject = '海钓施工项目';
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
      tabs: ["事项", "模型","文件"],
      activeIndex: 0,
      currentProject : currentProject,
      allProjectsList : app.globalData.allProjectsList,
      numbers : getAllPnE().employeeArray,
      theEmployeeChecked : [],
      showModal_newList : false,
      showModal_editList : false,
      showModal_newModal : false,
      showModal_editPro : false,
      showModal_checkProNumber : false,
      fadeFiles : [
          {
              name : '协同大师V1.0',
              type : 'rar',
              size : '1.4MB',
              owner : 'xx',
              upTime : '2018-08-06'
          },{
              name : '协同大师V2.0',
              type : 'rar',
              size : '1.4MB',
              owner : 'xx',
              upTime : '2018-08-26'
          },{
              name : '协同大师V3.0',
              type : 'png',
              size : '1.4MB',
              owner : '试试',
              upTime : '2018-08-23'
          },{
              name : '协同大师V4.0',
              type : 'docx',
              size : '1.4MB',
              owner : 'xx',
              upTime : '2018-08-16'
          }
      ]
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
    newList : function () {
        this.setData({
            showModal_newList : true
        })
    },
    modalConfirm_newList : function(){

    },
    editList : function (e) {
        this.setData({
            showModal_editList : true
        })
    },
    modalConfirm_editList : function(){

    },


    newModal : function(){
        this.setData({
            showModal_newModal : true
        })
    },
    modalConfirm_newModal : function () {

    },
    openActionSheet : function(){
        var self = this;
        wx.showActionSheet({
            itemList: ['编辑项目名称、描述', '查看、修改项目成员'],
            success: function(res) {
                if (!res.cancel) {
                    switch (res.tapIndex) {
                        case 0:
                            self.setData({
                                showModal_editPro : true
                            });
                            break;
                        case 1:
                            self.setData({
                                showModal_checkProNumber : true
                            });
                            break;
                    }
                }
            }
        });
    },
    downLoadFile : function(e){
        wx.downloadFile({
            url: '', //仅为示例，并非真实的资源
            success: function(res) {
                // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
                if (res.statusCode === 200) {
                    wx.playVoice({
                        filePath: res.tempFilePath
                    })
                }
            }
        })
    },
    uploadImg : function () {
        wx.chooseImage({
            success: function(res) {
                var tempFilePaths = res.tempFilePaths
                wx.uploadFile({
                    url: '', //仅为示例，非真实的接口地址
                    filePath: tempFilePaths[0],
                    name: 'file',
                    formData:{
                        'user': 'test'
                    },
                    success: function(res){
                        var data = res.data;
                        debugger
                        //do something
                    }
                })
            }
        })
    },
    allCheck : function () {
        var self = this;
        var theArray = [];
        for (var i = 0, lenI = self.data.numbers.length; i < lenI; ++i){
            theArray[i] = true;
        }
        this.setData({
            theEmployeeChecked : theArray
        })
    },
})
