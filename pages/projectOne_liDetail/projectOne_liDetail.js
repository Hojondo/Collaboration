// pages/projectOne_liDetail/projectOne_liDetail.js
const qiniuUploader = require("../../utils/qiniuUploader");
var app = getApp();
var currentProject = '海钓施工项目';
var userName = '张三';
var tempTextarea_content = null;
var tempTextarea_reply = null;
var tempTextarea = null;
var index_employee = null;
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
      currentProject : currentProject,
      allProjectsList : app.globalData.allProjectsList,
      numbers : getAllPnE().employeeArray,
      theEmployeeChecked : [],
      proIndex : null,
      listIndex : null,
      liIndex : null,
      from: null,
      showModal_content : false,
      showModal_detail : false,
      showModal_multiNumbers : false,
      titleTextAreaHide : false,
      showModal_addReply : false,
      titleTextAreaHide_reply : false,
      showModal_multiNumbers_reply : false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        proIndex : options.pro,
        listIndex : options.list,
        liIndex : options.li,
        from : options.from
    })
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
    toProList : function () {
        var self = this;
        if(self.data.from === 'project'){
            wx.navigateBack();
        }
        else if(self.data.from === 'projectDone'){
            wx.navigateBack({
                delta : 2
            });
        }
        else if(self.data.from === 'wode'){
            wx.navigateTo({
                url: '/pages/projectOne/projectOne?project='+currentProject
            });
        }
        // debugger
    },
    showDetail : function () {
        this.setData({
            showModal_detail : true
        })
    },
    dateChange : function (e) {
        var self = this;
        app.globalData.allProjectsList[self.data.proIndex].list[self.data.listIndex].li[self.data.liIndex].time = e.detail.value;
        this.setData({
            allProjectsList : app.globalData.allProjectsList
        })// page.data只 初始化 赋值一次 todo 最后还是要上传到服务器，每次打开程序初始化app.data
    },
    editContent : function(){
        this.setData({
            showModal_content : true
        })
    },
    textAreaBlur_content : function(e){
        tempTextarea_content = e.detail.value;
    },
    modalConfirm_content : function(){
        var self = this;
        setTimeout(function () {
            app.globalData.allProjectsList[self.data.proIndex].list[self.data.listIndex].li[self.data.liIndex].content = tempTextarea_content;
            self.setData({
                allProjectsList : app.globalData.allProjectsList
            })
        },100)// 因为微信机制是 先tap后blur，所以 手动延迟点击触发的赋值
    },
    textAreaBlur_reply : function(e){
        tempTextarea_reply = e.detail.value;
    },
    modalConfirm_addReply : function(){
        var self = this;
        setTimeout(function () {
            var newReply = {
                name : userName,
                time : new Date(),
                content : tempTextarea_reply
            };
            app.globalData.allProjectsList[self.data.proIndex].list[self.data.listIndex].li[self.data.liIndex].reply.push(newReply);
            self.setData({
                allProjectsList : app.globalData.allProjectsList
            })
        },100)
    },
    showMultiNumbers : function(){
        this.setData({
            showModal_multiNumbers : true,
            titleTextAreaHide : true
        })
    },
    modalConfirm_multiNumbers : function(){
        //设置通知成员 确认
        this.setData({
            titleTextAreaHide : false
        })
    },
    modalCancel_mulitNumbers : function(){
        this.setData({
            titleTextAreaHide : false
        })
    },
    textAreaBlur : function(e){
        tempTextarea = e.detail.value;
    },
    modalConfirm_detail : function () {
        var self = this;
        setTimeout(function () {
            app.globalData.allProjectsList[self.data.proIndex].list[self.data.listIndex].li[self.data.liIndex].detail = tempTextarea;
            self.setData({
                allProjectsList : app.globalData.allProjectsList
            })
        },100)// 因为微信机制是 先tap后blur，所以 手动延迟点击触发的赋值
    },
    cancelName : function () {
        var self = this;
        app.globalData.allProjectsList[self.data.proIndex].list[self.data.listIndex].li[self.data.liIndex].name = null;
        self.setData({
            allProjectsList : app.globalData.allProjectsList
        })
    },
    cancelTime : function () {
        var self = this;
        app.globalData.allProjectsList[self.data.proIndex].list[self.data.listIndex].li[self.data.liIndex].time = null;
        self.setData({
            allProjectsList : app.globalData.allProjectsList
        })
    },
    addReplyBtn : function () {
        this.setData({
            showModal_addReply : true
        })
    },
    showMultiNumbers_reply : function(){
        this.setData({
            showModal_multiNumbers_reply : true,
            titleTextAreaHide_reply : true
        })
    },
    modalConfirm_multiNumbers_reply : function () {
        this.setData({
            titleTextAreaHide_reply : false
        })
    },
    modalCancel_mulitNumbers_reply : function () {
        this.setData({
            titleTextAreaHide_reply : false
        })
    },
    uploadImg : function () {
        // wx.chooseImage({
        //     success: function(res) {
        //         var tempFilePaths = res.tempFilePaths
        //         wx.uploadFile({
        //             url: '', //仅为示例，非真实的接口地址
        //             filePath: tempFilePaths[0],
        //             name: 'file',
        //             formData:{
        //                 'user': 'test'
        //             },
        //             success: function(res){
        //                 var data = res.data
        //                 //do something
        //                 debugger
        //             }
        //         })
        //     }
        // })
        wx.chooseImage({
            count: 1,
            success: function (res) {
                var filePath = res.tempFilePaths[0];
                qiniuUploader.upload(filePath, (res) => {
                    that.setData({
                        'imageURL': res.imageURL,
                    });
                }, (error) => {
                    console.log('error: ' + error);
                }, {
                    region: 'ECN',
                    domain: 'ocmf78gpi.bkt.clouddn.com', // // bucket 域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 ImageURL 字段。否则需要自己拼接
                    // key: 'customFileName.jpg', // [非必须]自定义文件 key。如果不设置，默认为使用微信小程序 API 的临时文件名
                    uptoken: 'wlP6LE5Vx-nYxgaVQJACOfK6TBPpqCEpaaNU7FDx:w8tnaN_ZXi7kl8eG39PgyCefv1E=:eyJzY29wZSI6Imhvbmd3YXp1ZmlsZXMiLCJkZWFkbGluZSI6MTUzNzUyOTU2Mn0=',
                }, (res) => {
                    console.log('上传进度', res.progress)
                    console.log('已经上传的数据长度', res.totalBytesSent)
                    console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
                });
            }
        });
    },
    previewImage : function (e) {
        var currentSrc = e.target.dataset.src;
        var urlsArray = e.target.dataset.replyimgs;
        wx.previewImage({
            current: currentSrc, // 当前显示图片的http链接
            urls: urlsArray // 需要预览的图片http链接列表
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
    bindEmployeeChange : function (e) {
        index_employee = e.detail.value;
        app.globalData.allProjectsList[this.data.proIndex].list[this.data.listIndex].li[this.data.liIndex].name = this.data.numbers[index_employee];
        this.setData({
            allProjectsList : app.globalData.allProjectsList
        })
    }
})
