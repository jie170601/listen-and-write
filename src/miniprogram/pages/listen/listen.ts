//index.js
//获取应用实例
// import { IMyApp } from '../../app'
import { Word2Mp3 } from '../../utils/Word2Mp3'
// import { showErrorMsg } from '../../utils/util'
import {StorageUtil} from '../../utils/StorageUtil'
import {WordGroup} from '../../beans/WordGroup'
import {Word} from '../../beans/Word'
// import {IndexList} from '../../bean/IndexList'
import {AudioUtil} from '../../utils/AudioUtil'

// const app = getApp<IMyApp>()

const audioUtil:AudioUtil = new AudioUtil()

/**
 * 声明了一个枚举类型
 * 用来区分页面的三种状态：
 * 1.停止状态，只有停止状态可以切换单词列表和试音
 * 2.播放状态，播放状态只能选择暂停和停止
 * 3.暂停状态，暂停状态只能选择播放和停止
 */
enum StateEnum{
  STOP,
  PLAY,
  PAUSE
}

Page({
  data: {
    state:StateEnum,
    curState:StateEnum.STOP,
    showPicker:false,
    downloadCount:0,
    playCount:0,
    /**
     * 默认单词列表选择器选中第一个选项
     */
    pickerIndex:[0],
    wordGroup:new WordGroup(),
    /**
     * 这里遇到一个坑
     * 选择器的数据必须在data里就赋值完成
     * 去代码里再赋值回造成默认选择失效
     */
    wordGroupList: StorageUtil.getWordGroup(),
    showTopTips:false,
    errMsg:''
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad(options:any) {
    let groupid:string = options.groupid
    let wordGroup: WordGroup = new WordGroup()
    let wordGroupList: Array<WordGroup> = StorageUtil.getWordGroup()
    //没有单词分组的情况下，显示前往单词管理页面的按钮
    if (wordGroupList.length === 0) {
      console.log("没有单词分组")
    }
    //默认是第一个单词分组
    wordGroup = wordGroupList[0]
    //如果参数中传了单词分组的ID，则选择参数的单词分组
    for(let i=0;i<wordGroupList.length;i++){
      if(wordGroupList[i].getId()===groupid){
        wordGroup = wordGroupList[i]
      }
    }
    this.setData!({
      wordGroup: wordGroup,
      wordGroupList: wordGroupList
    })
  },
  selectList(){
    let showPicker:boolean = !this.data.showPicker
    this.setData!({
      showPicker: showPicker
    })
    // let curNumber:number = this.data!.curNumber+1
    // this.setData!({
    //   curNumber:curNumber
    // })
    // console.log(curNumber)
  },
  bindChange(e:any){
    console.log(e)
    let wordGroup: WordGroup = this.data.wordGroupList[e.detail.value[0]]
    this.setData!({
      pickerIndex: e.detail.value,
      wordGroup:wordGroup
    })
  },
  translateState(state:StateEnum){
    this.setData!({
      curState:state
    })
  },
  play(){
    if (this.data.curState === StateEnum.STOP) {

      try {
      let mp3Files: Word2Mp3 = new Word2Mp3()
      let that = this
      let words: Array<Word> = this.data.wordGroup.getList()
      this.translateState(StateEnum.PLAY)
      mp3Files.getFilePaths(words, (count: number) => {
        let curNumber: number = Math.round(count / words.length * 100)
        that.setData!({
          downloadCount: curNumber
        })
      }).then((paths: string[]) => {
        console.log(paths.length)
        that.audioReady(paths)
      })
    }catch(e){
      let that = this
      that.setData!({
        showTopTips:true,
        errMsg:e
      })
      setTimeout(()=>{
        that.setData!({
          showTopTips: false,
          errMsg:''
        })
      },3000)
    }
    }
    if(this.data.curState===StateEnum.PAUSE){
      this.translateState(StateEnum.PLAY)
      audioUtil.playOrPause()
    }
  },
  pause(){
    this.translateState(StateEnum.PAUSE)
    audioUtil.playOrPause()
  },
  audioReady(paths:string[]){
    audioUtil.setPaths(paths)
    audioUtil.setProccess(this.playProccess)
    audioUtil.ready()
    audioUtil.playOrPause()
  },
  playProccess(cur:number){
    let curNumber: number = Math.round(cur / this.data.wordGroup.getList().length * 100)
    this.setData!({
      playCount: curNumber
    })
  }
})
