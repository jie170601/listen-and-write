Page({
  data: {
    list:""    
  },
  onLoad() {
    let a = [
      {word:'ab',desc:'ab'},
      {word:'ab',desc:'ab'},
      { word: 'ab', desc: 'ab' }
    ]
    wx.setStorageSync("words_listen_list",a)
  },
  found(){
    let list:any = wx.getStorageSync("words_listen_list")
    if(list.length>0){
      let str:string = ""
      for(let i=0;i<list.length-1;i++){
        str += list[i].word+','
      }
      str += list[list.length - 1].word
      this.setData!({
        list:str
      })
      wx.setClipboardData({
        data:str,
        complete:()=>{
          wx.showToast({
            title:"复制成功",
            icon:"success"
          })
        }
      })
    }else{
      wx.showToast({
        title:"没有找到单词",
        icon:"none"
      })
    }
  }
})