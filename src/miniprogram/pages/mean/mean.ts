import { WordGroup } from '../../beans/WordGroup'
import { Word } from '../../beans/Word'
import {StorageUtil} from '../../utils/StorageUtil'

//金山词霸的单词api的key
//去官网发邮件给金山词霸
//他们会回复邮件并给出key
//永久免费不限访问次数的，真的良心
let key: string = '0'

Page({
  data: {
    //单词
    word_name: "",
    //英式发音
    ph_en: "",
    //美式发音
    ph_am: "",
    //当前单词索引
    index: 0,
    //词意列表
    parts: [],
    //单词列表
    wordList:new Array<Word>()
  },
  onLoad(options:any) {
    let groupid:string = options.groupid
    let word:Word = options.word
    let wordGroup: WordGroup = this.getWordGroupById(groupid)
    let wordList: Array<Word> = wordGroup.getList()
    let index:number = this.getIndex(word,wordList)
    this.setData!({
      index:index,
      wordList:wordList
    })
    this.flushPage(word)
  },
  /**
  * 设置页面参数
  */
  flushPage: function (word:string) {
    let content = this
    wx.request({
      url: 'https://dict-co.iciba.com/api/dictionary.php?type=json&w=' + word + '&key='+key,
      success: function (res:any) {
        let data:any = res.data
        let word_name:string = data.word_name
        let ph_en:string = data.symbols[0].ph_en
        let ph_am:string = data.symbols[0].ph_am
        let parts:Array<any> = new Array()
        for (let i = 0; i < data.symbols[0].parts.length; i++) {
          let part:any = data.symbols[0].parts[i].part
          let mean:string = ''
          for (let j = 0; j < data.symbols[0].parts[i].means.length; j++) {
            mean += data.symbols[0].parts[i].means[j] + '；'
          }
          parts.push({
            part: part,
            mean: mean
          })
        }
        content.setData!({
          word_name: word_name,
          ph_en: ph_en,
          ph_am: ph_am,
          parts: parts
        })
      }
    })
  },
  /**
   * 通过ID获取单词分组
   */
  getWordGroupById(id:string):WordGroup{
    let wordGroupList:Array<WordGroup> = StorageUtil.getWordGroup()
    for(let i=0;i<wordGroupList.length;i++){
      if(wordGroupList[i].getId()===id){
        return wordGroupList[i]
      }
    }
    return new WordGroup()
  },
  /**
   * 获取当前单词在单词列表中的索引
   */
  getIndex(word:Word,wordList:Array<Word>):number{
    for(let i=0;i<wordList.length;i++){
      if(word===wordList[i]){
        return i
      }
    }
    return 0
  },
  /**
   * 切换单词按钮点击事件
   * 将当前单词索引+1
   * 并刷新当前页面
   */
  next(){
    let wordList: Array<Word> = this.data.wordList
    let index:number = this.data.index+1
    //如果下一个单词的索引超过了单词列表的长度
    //说明已经到了最后一个单词了
    //则索引跳回第一个单词
    if(index===wordList.length){
      index = 0
    }
    this.setData!({
      index:index
    })
    this.flushPage(wordList[index])
  }
})