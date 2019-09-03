let audio = wx.createInnerAudioContext()
Page({
  data: {              mp3:'https://gitee.com/dengjijie/tingxie/raw/master/%E9%9F%B3%E9%A2%91/dictvoice%20.mpeg',
    pause:true
  },
  onLoad() {
    audio.src = this.data.mp3
    audio.autoplay = false
  },
  test(){
    let that = this
    if (audio.pause) {
      audio.play()
      this.setData!({
        pause:false
      })
      audio.onEnded(()=>{
        that.setData!({
          pause:true
        })
      })
    }
  }
})