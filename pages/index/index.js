//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
        allTeams: app.globalData.allTeams,
        showModal:false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //todo 向服务器请求是否该微信已绑定存在的账号;否的话 跳到login
        // wx.navigateTo({
        //     url: '/pages/login/login'
        // })
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
    //事件处理函数
    newTeam : function () {
        this.setData({
            showModal : true,
        });
        // var query = wx.createSelectorQuery();
        // var theNeaTeamInput = query.select('#newTeamName');
        // theNeaTeamInput.fields({
        //     dataset: true,
        //     size: true,
        //     scrollOffset: true,
        //     properties: ['scrollX', 'scrollY'],
        //     computedStyle: ['margin', 'backgroundColor']
        // }, function(res){
        //     console.log(res.dataset);
        // }).exec()
    },
    modalConfirm : function () {
        console.log('确认')
    },
    modalCancel : function () {
        console.log('取消')
    },
    switchtabto : function () {
        wx.switchTab({
            url: '/pages/wode/wode',
            success : function () {

            }
        })
    }
})
