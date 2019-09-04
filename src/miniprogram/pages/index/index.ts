//获取应用实例
import {StorageUtil} from '../../utils/StorageUtil'
import { WordGroup } from '../../beans/WordGroup'
import { Word } from '../../beans/Word'
import {parse} from '../../utils/papaparse'

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
    //保存添加单词状态下输入的单词
    addWord:'',
    //当前展开的单词分组ID
    groupid:'',
    //用户输入的添加分组名称
    addGroupName: '',
    //状态枚举
    State: StateEnum,
    //批量添加单词输入的字数统计
    textAreaCount: 0,
    //批量添加单词输入的内容
    textAreaValue: '',
    //单词分组列表
    wordGroupList:new Array<WordGroup>(),
    //当前状态
    curState: StateEnum.WORD_UNFOLD_STATE,
    //上一个状态
    preState:StateEnum.WORD_UNFOLD_STATE
  },
  onLoad() {
    //页面加载的时候刷新一次页面
    this.flushPageData()
  },
  onShow(){
    //页面显示的时候再刷新一次页面
    //为了删除单词后次页面能自动同步
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
  //添加分组输入框输入事件处理
  addGroupNameChanged(e:any){
    this.setData!({
      addGroupName:e.detail.value
    })
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
  /**
   * 页面变成添加单词状态
   */
  toAddWord(){
    this.translateStateTo(StateEnum.ADD_WORD_STATE)
  },
  /**
   * 添加单词输入框事件处理
   */
  addWordChanged(e:any){
    this.setData!({
      addWord:e.detail.value,
      groupid:e.currentTarget.id
    })
  },
  /**
   * 保存添加单词
   */
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
   * 当取消添加单词按钮点击的时候
   * 需要将状态改为单词分组展开状态
   * 并且将输入的单词置为空
   */
  cancelAddWord() {
    this.translateStateTo(StateEnum.WORD_FOLD_STATE)
    this.setData!({
      addWord: ''
    })
  },
  /**
   * 批量添加单词按钮点击事件处理
   */
  toAddWords(){
    this.translateStateTo(StateEnum.BATCH_ADD_STATE)
  },
  /**
   * 批量添加单词输入框事件处理
   */
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
  /**
   * 去听写界面
   */
  listen(){
    let that:any = this
    wx.navigateTo({
      url: '../listen/listen?groupid='+that.data.groupid
    })
    return false
  },
  /**
   * 去单词意思界面
   */
  mean(e:any){
    let word:Word = e.currentTarget.id
    let groupid:string = this.data.groupid
    wx.navigateTo({
      url:'../mean/mean?groupid='+groupid+'&word='+word
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '每一次听写，为了离梦想更近',
      path: '/pages/index/index',
      imageUrl: "http://img1.ph.126.net/gtigWEVlA6XbXE9aFrB0ew==/2098114476501923011.jpg"
    }
  }
})

