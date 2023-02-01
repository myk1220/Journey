
Page({
  data: {
  },
  login() {
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://example.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  getPhoneNumber(e) {
    console.log(e);
  },
  toIndex() {
    wx.navigateTo({
      url: '/pages/journey_map/index',
    })
  }
});
