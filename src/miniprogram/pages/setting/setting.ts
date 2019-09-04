
import { Params, Mode, Pronunciation } from '../../beans/Params'
import { StorageUtil } from '../../utils/StorageUtil'

Page({
  data: {
    params: new Params(),
    modeChecked:false,
    pronChecked:false
  },
  onLoad() {
  },
  onShow() {
    let params: Params = StorageUtil.getParams()
    let modeChecked: boolean = false
    let pronChecked: boolean = false
    if (params.getMode() === Mode.RANDOM) {
      modeChecked = true
    }
    if (params.getPron() === Pronunciation.AMERICAN) {
      pronChecked = true
    }
    this.setData!({
      params: params,
      modeChecked: modeChecked,
      pronChecked: pronChecked
    })
  },
  flushParams(){
    StorageUtil.setParams(this.data.params)
  },
  speedChange(e:any){
    let speed: number = e.detail.value
    let params: Params = this.data.params
    params.setSpeed(speed)
    this.setData!({
      params:params
    })
    this.flushParams()
  },
  repeatChange(e: any){
    let repeat: number = e.detail.value
    let params: Params = this.data.params
    params.setRepeat(repeat)
    this.setData!({
      params: params
    })
    this.flushParams()
  },
  intervalChange(e: any){
    let interval: number = e.detail.value
    let params: Params = this.data.params
    params.setInterval(interval)
    this.setData!({
      params: params
    })
    this.flushParams()
  },
  pauseChange(e: any){
    let pause: number = e.detail.value
    let params: Params = this.data.params
    params.setPause(pause)
    this.setData!({
      params: params
    })
    this.flushParams()
  },
  modeChange() {
    let params: Params = this.data.params
    let modeChecked:boolean = !this.data.modeChecked
    if (params.getMode() === Mode.RANDOM) {
      params.setMode(Mode.ORDER)
    }else if (params.getMode() === Mode.ORDER) {
      params.setMode(Mode.RANDOM)
    }
    this.setData!({
      params:params,
      modeChecked:modeChecked
    })
    this.flushParams()
  },
  pronChange(){
    let params: Params = this.data.params
    let pronChecked: boolean = !this.data.pronChecked
    if (params.getPron() === Pronunciation.AMERICAN) {
      params.setPron(Pronunciation.BRITISH)
    } else if (params.getPron() === Pronunciation.BRITISH) {
      params.setPron(Pronunciation.AMERICAN)
    }
    this.setData!({
      params: params,
      pronChecked: pronChecked
    })
    this.flushParams()
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
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '曾经也讨厌过英语课上听写单词',
      path: '/pages/setting/setting',
      imageUrl: "http://img1.ph.126.net/gtigWEVlA6XbXE9aFrB0ew==/2098114476501923011.jpg"
    }
  }
})