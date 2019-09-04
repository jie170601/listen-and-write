
import { Params, Mode, Pronunciation } from '../../beans/Params'
import { StorageUtil } from '../../utils/StorageUtil'

Page({
  data: {
    params: new Params(),
    modeChecked:false,
    pronChecked:false
  },
  onLoad() {
    let params: Params = StorageUtil.getParams()
    let modeChecked:boolean = false
    let pronChecked:boolean = false
    if(params.getMode()===Mode.RANDOM){
      modeChecked = true
    }
    if(params.getPron()===Pronunciation.AMERICAN){
      pronChecked = true
    }
    this.setData!({
      params:params,
      modeChecked:modeChecked,
      pronChecked:pronChecked
    })
  },
  flushParams(){
    StorageUtil.setParams(this.data.params)
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
  }
})