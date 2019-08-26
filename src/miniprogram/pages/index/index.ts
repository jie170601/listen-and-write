//index.js
//获取应用实例
// import { IMyApp } from '../../app'
// import { Word2Mp3 } from '../../utils/Word2Mp3'
// import { showErrorMsg } from '../../utils/util'
import {StorageUtil} from '../../utils/StorageUtil'
// import {WordList} from '../../bean/WordList'
// import {IndexList} from '../../bean/Index
// import {AudioUtil} from '../../utils/AudioUtil'
import { WordGroup } from '../../beans/WordGroup'
import { Word } from '../../beans/Word'
import {parse} from '../../utils/papaparse'

// const app = getApp<IMyApp>()

// const audioUtil = new AudioUtil()

/**
 * 在这个页面中，有很多复杂的操作
 * 经常要根据当前所处的状态来决定显示什么
 * 或者根据当前的状态来决定按钮的功能是什么
 * 所以想到了用有限状态机
 * 
 * 这里先定义了一个枚举
 * 来保存页面的所有状态
 */ 
enum StateEnum {
  WORD_UNFOLD_STATE = 0,//单词列表未展开状态
  WORD_FOLD_STATE = 1,//单词列表展开状态
  ADD_GROUP_STATE = 2,//添加分组状态
  ADD_WORD_STATE = 3,//添加单词状态
  BATCH_ADD_STATE = 4//批量添加单词状态
}

Page({
  data: {
    addGroupName:'',//用户输入的添加分组名称
    addWord:'',
    groupid:'',
    s: -1,
    wordGroupList:new Array<WordGroup>(),
    State:StateEnum,
    curState: StateEnum.WORD_UNFOLD_STATE,
    preState:StateEnum.WORD_UNFOLD_STATE,
    selectData:[],
    textAreaCount:0,
    textAreaValue:''
  },
  onLoad() {
    this.flushPageData()
  },
  onShow(){
    this.flushPageData()
  },
  /**
   * 状态转移函数
   * 可以将当前状态转移到nextSate
   * 当前状态保存到preState
   * 以备有些地方恢复状态要用到
   */
  translateStateTo(nextState: StateEnum) {
    let preData:StateEnum = this.data.curState
    this.setData!({
      curState: nextState,
      preData:preData
    })
  },
  /**
   * 刷新页面数据，每次数据有变化需要调用此方法刷新一下界面
   */
  flushPageData(){
    let wordGroupList:Array<WordGroup> = StorageUtil.getWordGroup()
    this.setData!({
      wordGroupList:wordGroupList
    })
  },
  /**
   * 添加分组按钮点击事件处理
   * 点击添加分组后
   * 状态转移到添加分组状态
   */
  toAddGroup() {
    this.translateStateTo(StateEnum.ADD_GROUP_STATE)
  },
  /**
   * 保存添加分组按钮点击事件
   * 点击保存后
   * 1.保存分组到分组列表
   * 2.更新页面数据
   * 3.将状态转移到单词列表未展开状态
   */
  saveAddGroup() {
    let wordGroup:WordGroup = new WordGroup()
    wordGroup.setCount(0)
    wordGroup.setName(this.data.addGroupName)
    StorageUtil.addWordGroup(wordGroup)
    this.translateStateTo(StateEnum.WORD_UNFOLD_STATE)
    this.setData!({
      addGroupName:''
    })
    this.flushPageData()
  },
  /**
   * 取消添加分组按钮点击事件
   * 点击取消后
   * 状态转移到单词列表未展开状态
   */
  cancelAddGroup(){
    this.translateStateTo(StateEnum.WORD_UNFOLD_STATE)
  },
  /**
   * 编辑按钮点击事件
   */
  deleteGroup(){
    //this.translateStateTo(StateEnum.DELETE_STATE)
  },
  /**
   * 删除选中的单词分组和单词
   */
  saveDeleteGroup(){
    let that = this
    wx.showModal({
      title: '提示',
      content: '确定删除吗？',
      success(res) {
        if (res.confirm) {
          StorageUtil.deleteWordGroup(new WordGroup())
          that.translateStateTo(that.data.preState)
          that.flushPageData()
        }
      }
    })
  },
  /**
   * 取消编辑
   * 这里状态跳转的时候有两种可能
   * 可能跳转到单词分组展开的状态
   * 也可能跳转到单词分组未展开的状态
   * 具体的要根据前面的状态来判断
   */
  cancelDeleteGroup(){
    this.translateStateTo(this.data.preState)
  },
  //添加分组输入框输入事件处理
  addGroupNameChanged(e:any){
    this.setData!({
      addGroupName:e.detail.value
    })
  },
  //编辑状态下选择改变事件处理
  selectChanged(e:any){
    console.log(e.detail.value)
    // this.setData!({
    //   selectData:e.detail.value
    // })
  },
  /**
   * 展开所点击的单词列表
   * 并收起其它单词列表
   * 如果点击的单词列表本身就是展开的
   * 那么就收起所有的单词列表
   * 页面的状态从展开态变成未展开态
   */
  foldWordGroup(e:any){
    let tapid:string = e.currentTarget.id
    let groupid:string = this.data.groupid
    if (groupid === tapid){
      groupid = ""
      this.translateStateTo(StateEnum.WORD_UNFOLD_STATE)
    } else {
      groupid = tapid
      this.translateStateTo(StateEnum.WORD_FOLD_STATE)
    }
    this.setData!({
      groupid:groupid
    })
  },
  toAddWord(){
    this.translateStateTo(StateEnum.ADD_WORD_STATE)
  },
  addWordChanged(e:any){
    this.setData!({
      addWord:e.detail.value,
      groupid:e.currentTarget.id
    })
  },
  saveAddWord(){
    let wordGroup:WordGroup = new WordGroup()
    let word:Word = this.data.addWord
    wordGroup.setId(this.data.groupid)
    StorageUtil.addWord(wordGroup, word)
    this.translateStateTo(StateEnum.WORD_FOLD_STATE)
    this.setData!({
      addWord: ''
    })
    this.flushPageData()
  },
  /**
   * 批量添加单词按钮点击事件处理
   */
  toAddWords(){
    this.translateStateTo(StateEnum.BATCH_ADD_STATE)
    //console.log(parse("a,b,c,dd"))
  },
  /**
   * 当取消添加单词按钮点击的时候
   * 需要将状态改为单词分组展开状态
   * 并且将输入的单词置为空
   */
  cancelAddWord(){
    this.translateStateTo(StateEnum.WORD_FOLD_STATE)
    this.setData!({
      addWord: ''
    })
  },
  textAreaInput(e:any){
    this.setData!({
      textAreaValue:e.detail.value,
      textAreaCount:e.detail.value.length
    })
  },
  /**
   * 批量添加单词，保存按钮点击事件处理
   */
  saveAddWords(){
    let words:string = this.data.textAreaValue
    let wordList:Array<string> = parse(words).data
    let wordGroup:WordGroup = new WordGroup()
    wordGroup.setId(this.data.groupid)
    for(let i=0;i<wordList.length;i++){
      for (let j = 0; j < wordList[i].length; j++) {
        let word: Word = wordList[i][j]
        StorageUtil.addWord(wordGroup, word)
      }
    }
    this.translateStateTo(StateEnum.WORD_FOLD_STATE)
    this.setData!({
      textAreaCount:0,
      textAreaValue:''
    })
    this.flushPageData()
  }, 
  /**  
   * 批量添加单词，取消按钮点击事件处理
   */
  cancelAddWords(){
    this.translateStateTo(StateEnum.WORD_FOLD_STATE)
    this.setData!({
      textAreaCount:0,
      textAreaValue:''
    })
  },
  /**
   * 去删除单词分组页面
   */
  toDeleteWordGroup(){
    wx.navigateTo({
      url:'../delete/delete'
    })
  },
  /**
   * 去删除单词界面
   */
  toDeleteWord() {
    let that:any = this
    wx.navigateTo({
      url: '../delete/delete?groupid='+that.data.groupid
    })
  },
  listen(){
    let that:any = this
    wx.navigateTo({
      url: '../listen/listen?groupid='+that.data.groupid
    })
    return false
  }
})

