//删除页面脚本
import { StorageUtil } from '../../utils/StorageUtil'
import { WordGroup } from '../../beans/WordGroup'
import { Word } from '../../beans/Word'

/**
 * 页面状态的枚举类型
 * 页面可以处在删除单词状态或者删除分组状态
 */
enum State {
  //删除分组状态
  DELETE_GROUP,
  //删除单词状态
  DELETE_WORD
}

Page({
  data:{
    groupid:'',
    curState:State.DELETE_GROUP,
    preState:State.DELETE_GROUP,
    State:State,
    wordGroupList:new Array<WordGroup>(),
    wordList:new Array<Word>(),
    deleteGroupList:new Array<WordGroup>(),
    deleteWordList:new Array<Word>()
  },
  onLoad(options:any){
    let groupid:string = options.groupid
    if (typeof (groupid)==='undefined'||groupid===''){
      this.translateStateTo(State.DELETE_GROUP)
    }else{
      this.setData!({
        groupid:groupid
      })
      this.translateStateTo(State.DELETE_WORD)
    }
    this.flushPageData()
  },
  /**
   * 取消按钮点击事件处理
   * 不管是删除单词分组
   * 还是删除单词
   * 只要点了取消按钮
   * 都是直接返回上个页面
   */
  cancel(){
    wx.navigateBack({
      delta:1
    })
  },
  translateStateTo(nextState: State) {
    let preState:State = this.data.curState
    this.setData!({
      curState: nextState,
      preState:preState
    })
  },
  flushPageData(){
    let wordGroupList:Array<WordGroup> = StorageUtil.getWordGroup()
    let wordList:Array<Word> = new Array<Word>()
    if(this.data.curState===State.DELETE_WORD){
      for(let i=0;i<wordGroupList.length;i++){
        if(wordGroupList[i].getId()===this.data.groupid){
          wordList = wordGroupList[i].getList()
        }
      }
    }
    this.setData!({
      wordGroupList:wordGroupList,
      wordList:wordList
    })
  },
  groupSelectChange(e:any){
    let deleteGroupList:Array<WordGroup> = new Array<WordGroup>()
    let groupids:Array<string> = e.detail.value
    for(let i=0;i<groupids.length;i++){
      let wordGroup:WordGroup = new WordGroup()
      wordGroup.setId(groupids[i])
      deleteGroupList.push(wordGroup)
    }
    this.setData!({
      deleteGroupList:deleteGroupList
    })
  },
  wordSelectChange(e: any) {
    let deleteWordList: Array<Word> = new Array<Word>()
    let words: Array<string> = e.detail.value
    for (let i = 0; i < words.length; i++) {
      let word: Word = words[i]
      deleteWordList.push(word)
    }
    this.setData!({
      deleteWordList:deleteWordList
    })
  },
  deleteGroup() {
    let that:any = this
    wx.showModal({
      title: '提示',
      content: '确定删除所选分组吗',
      success(res) {
        if (res.confirm) {
          let deleteGroupList: Array<WordGroup> = that.data.deleteGroupList
          for (let i = 0; i < deleteGroupList.length; i++) {
            StorageUtil.deleteWordGroup(deleteGroupList[i])
          }
          that.cancel()
        }
      }
    })
  },
  deleteWord(){
    let that:any = this
    wx.showModal!({
      title: '提示',
      content: '确定删除所选单词吗',
      success(res) {
        if (res.confirm) {
          let wordGroup: WordGroup = new WordGroup()
          let deleteWordList: Array<Word> = that.data.deleteWordList
          wordGroup.setId(that.data.groupid)
          for (let i = 0; i < deleteWordList.length; i++) {
            StorageUtil.deleteWord(wordGroup, deleteWordList[i])
          }
          that.cancel()
        }
      }
    })
  }
})