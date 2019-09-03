Page({
  data: {
    
  },
  onLoad() {
  },
  question_1(){
    wx.navigateTo({
      url: '../found/found',
    })
  },
  question_2() {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  question_3() {
    wx.navigateTo({
      url: '../warn/warn',
    })
  },
  question_4() {
    wx.navigateTo({
      url: '../open/open',
    })
  }
})