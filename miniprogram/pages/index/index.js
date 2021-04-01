//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    hasUserInfo: false,
    logged: false,
    takeSession: false,
    requestResult: '',
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') // 如需尝试获取用户信息可改为false
  },

  onSum: function() {
    console.log('run');
    wx.cloud.callFunction({
      name: "sum",
      data: {
        a:1,b:2
      },
      success: (res) => {
        console.log(res);
      }
    })
  }
})
