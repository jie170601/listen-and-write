Page({
  data: {
    gitee:'https://gitee.com/dengjijie/listen-and-write',
    github:'https://github.com/jie170601/listen-and-write'
  },
  onLoad() {
  },
  toGitee(){
    let that = this
    wx.setClipboardData({
      data: that.data.gitee,
      complete:()=>{
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  toGithub(){
    let that = this
    wx.setClipboardData({
      data: that.data.github,
      complete: () => {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})