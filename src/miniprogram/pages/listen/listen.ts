//index.js
//获取应用实例
import { Word2Mp3 } from '../../utils/Word2Mp3'
import {StorageUtil} from '../../utils/StorageUtil'
import {WordGroup} from '../../beans/WordGroup'
import {Word} from '../../beans/Word'
import {AudioUtil} from '../../utils/AudioUtil'
import {Params,Mode,Pronunciation} from '../../beans/Params'

let audioUtil:AudioUtil = new AudioUtil(StorageUtil.getParams())

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
    downloadCount:0,
    playCount:0,
    wordGroup:new WordGroup(),
    wordGroupList:new Array <WordGroup>(),
    showTopTips:false,
    errMsg:'',
    params:new Params(),
    mode:Mode,
    pron:Pronunciation,
    show:false,
    words:[],
    word:""
  },
  onLoad(options:any) {
    let groupid:string = options.groupid
    let wordGroup: WordGroup = new WordGroup()
    let wordGroupList: Array<WordGroup> = StorageUtil.getWordGroup()
    let params: Params = StorageUtil.getParams()
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
      params:params,
      wordGroup: wordGroup,
      wordGroupList: wordGroupList
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
      let mp3Files: Word2Mp3 = new Word2Mp3(this.data.params)
      let that = this
      let words: Array<Word> = this.data.wordGroup.getList()
      if (this.data.params.getMode()===Mode.RANDOM) {
        words = this.shuffle(words)
      }
      this.setData!({
        show:true,
        words:words
      })
      this.translateState(StateEnum.PLAY)
      mp3Files.getFilePaths(words, (count: number) => {
        let curNumber: number = Math.round(count / words.length * 100)
        that.setData!({
          downloadCount: curNumber
        })
      }).then((paths: string[]) => {
        console.log(paths[0])
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
  audioReady(paths: string[]) {
    audioUtil.updateParams(StorageUtil.getParams())
    audioUtil.setPaths(paths)
    audioUtil.setProccess(this.playProccess)
    audioUtil.setEnd(this.end)
    audioUtil.ready()
    audioUtil.playOrPause()
    this.setData!({
      show:false
    })
  },
  playProccess(cur:number){
    let curNumber: number = Math.round(cur / this.data.wordGroup.getList().length * 100)
    let words:Word[] = this.data.words
    let word:Word = words[cur-1]
    this.setData!({
      word:word,
      playCount: curNumber
    })
  },
  end(){
    this.setData!({
      curState:StateEnum.STOP,
      downloadCount:0,
      playCount:0,
      showTopTips: false,
      errMsg: ''
    })
  },
  flushParams() {
    StorageUtil.setParams(this.data.params)
  },
  modeChange() {
    let params: Params = this.data.params
    if (params.getMode() === Mode.RANDOM) {
      params.setMode(Mode.ORDER)
    } else if (params.getMode() === Mode.ORDER) {
      params.setMode(Mode.RANDOM)
    }
    this.setData!({
      params: params,
    })
    this.flushParams()
  },
  pronChange() {
    let params: Params = this.data.params
    if (params.getPron() === Pronunciation.AMERICAN) {
      params.setPron(Pronunciation.BRITISH)
    } else if (params.getPron() === Pronunciation.BRITISH) {
      params.setPron(Pronunciation.AMERICAN)
    }
    this.setData!({
      params: params,
    })
    this.flushParams()
  },
  toTest(){
    wx.navigateTo({
      url:"../test/test"
    })
  },
  stop(){
    audioUtil.stop()
  },
  show(){
    this.setData!({
      show:false
    })
  },
  hidden(){
    this.setData!({
      show:true
    })
  },
  shuffle(words: string[]): string[] {
    let len = words.length
    for (let i = 0; i < len; i++) {
      let end = len - 1
      let index = (Math.random() * (end + 1)) >> 0
      let t = words[end]
      words[end] = words[index]
      words[index] = t
    }
    return words
  }
})
