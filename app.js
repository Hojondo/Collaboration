//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId todo
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框

        }
      }
    })
  },
  globalData: {
      userInfo: null,
      allEmployee: [{name:'员工1'}, {name:'员工2'},{name:'员工3'}],
      allTeams : ['红瓦科技研发中心','红瓦科技销售部','族库大师运营中心','红瓦科技研发中心2','红瓦科技2'],
      allProjectsList : [
          {
              projectName : '海钓施工项目',
              list : [
                  {
                      listName : '默认清单',
                      li : [
                          {
                              content:'海钓施工项士大夫但是士大夫大师傅是目事项1',
                              name:'张三',
                              time:'2018-9-21',
                              detail : '描述啊啊啊111111',
                              done: false,
                              reply : [
                                  {
                                      name : 'xx',
                                      time : '2018-9-21',
                                      content : '回复内容1回复内容1回复内容1',
                                      img : ['https://avatars0.githubusercontent.com/u/7891383?s=460&v=4','https://avatars1.githubusercontent.com/u/53387?s=460&v=4']
                                  },{
                                      name : 'xxd',
                                      time : '2018-9-11',
                                      content : '回复内容2回复内容2回复内容2',
                                      img : []
                                  }
                              ]
                          },{
                              content:'海钓施工项目事项2',
                              name:'李四',
                              time:'2018-9-21',
                              detail : '描述啊啊啊',
                              done: true,
                              reply : [
                                  {
                                      name : 'xxd',
                                      time : '2018-9-11',
                                      content : '回复内容2回复内容2回复内容2士大夫但是',
                                      img : []
                                  },
                              ]
                          }
                      ]
                  }, {
                      listName : '前期准备',
                      li : [
                          {
                              content:'海钓施工项目事项3',
                              name:'王五',
                              time:'2018-9-21',
                              done: false,
                              reply : []
                          },{
                              content:'海钓施工项目事项3士大夫大师傅',
                              name:'张三',
                              time:'2018-9-21',
                              done: true,
                              reply : []
                          },{
                              content:'海钓施工项目事项34534',
                              name:'时代的',
                              time:'2018-9-21',
                              done: true,
                              reply : []
                          },{
                              content:'海钓施工项目事项3韩寒回复',
                              name:'士大夫',
                              time:'2018-9-21',
                              done: false,
                              reply : []
                          },{
                              content:'海钓施工项目事项3好地方',
                              name:'给对方',
                              time:'2018-9-21',
                              done: true,
                              reply : []
                          },{
                              content:'海钓施工项目事项3回复对方',
                              name:'方法',
                              time:'2018-9-21',
                              done: true,
                              reply : []
                          },{
                              content:'海钓施工项目事项3和地方地方',
                              name:'收到',
                              time:'2018-9-21',
                              done: false,
                              reply : []
                          }
                      ]
                  }
              ],
              modals :[
                  {
                      modalName: '模型名称1',
                      workSet:[
                          {
                              content:'轴网和标高',
                              name:'张三',
                              time:'2019-9-21',
                              done: false,
                          },{
                              content:'一层建筑',
                              name:'张三',
                              time:'2019-9-21',
                              done: false,
                          },{
                              content:'二层建筑',
                              name:'张三',
                              time:'2019-9-21',
                              done: false,
                          },{
                              content:'三层建筑',
                              name:'张三',
                              time:'2019-9-21',
                              done: false,
                          }
                      ]
                  }, {
                      modalName: '模型名称2',
                      workSet:[
                          {
                              content:'轴网和标高',
                              name:'张三',
                              time:'2019-9-21',
                              done: true,
                          },{
                              content:'一层建筑',
                              name:'例子',
                              time:'2019-9-21',
                              done: false,
                          }
                      ]
                  }
              ]
          },
          {
              projectName : '灯塔二期',
              list: [
                  {
                      listName:'灯塔二期清单1',
                      li :[
                          {
                              content:'灯塔二期1',
                              name:'海七',
                              time:'2018-9-21',
                              done: false
                          },{
                              content:'灯塔二期1',
                              name:'张三',
                              time:'2018-9-21',
                              done: false
                          }
                      ]
                  },{
                      listName:'灯塔二期清单2',
                      li : [
                          {
                              content:'灯塔二期323',
                              name:'周六',
                              time:'2018-9-21',
                              done: false
                          },{
                              content:'灯塔二期323',
                              name:'周六',
                              time:'2018-9-21',
                              done: false
                          }
                      ]
                  }
              ],
              modals :[
                  {
                      modalName: '灯塔模型名称1',
                      workSet:[
                          {
                              content:'灯塔模型名称 0层建筑',
                              name:'王五',
                              time:'2019-9-21',
                              done: false,
                          },{
                              content:'一层建筑',
                              name:'例子',
                              time:'2019-9-21',
                              done: false,
                          }
                      ]
                  }
              ]
          }],
  }
})
