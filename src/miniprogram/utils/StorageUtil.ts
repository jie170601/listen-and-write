/**
 * 缓存操作类
 * 
 * 为什么要把单词存在本地？
 * -因为没钱买服务器！
 * 
 * 小程序有免费的云数据库了为什么不用？
 * -因为懒！那样还得开发一系列的用户管理啥的。
 * -只想把听写功能做好！其它功能想要的可以自己做，所以开源了！
 * 
 * 存在本地真的没问题吗？
 * -有问题的，比如微信不高兴了就清缓存，保存的单词就全没了！
 * -每个小程序只有10KB的缓存空间，对学霸来说可能不够用！
 */

import { WordGroup } from '../beans/WordGroup'
import { Word } from '../beans/Word'

export class StorageUtil{

  /**
   * 添加分组
   * 方法是先获取当前的单词分组数组
   * 再往数组里push要添加的分组
   * 再把push后的数组保存会缓存
   */
  public static addWordGroup(wordGroup: WordGroup): void {
    let wordGroupList: Array<WordGroup> = this.getWordGroup()
    wordGroupList.unshift(wordGroup)
    this.saveWordGroupList(wordGroupList)
  }

  /**
   * 获取所有的单词分组
   * 如果没有任何的单词分组
   * 或者获取失败
   * 则返回空数组
   */
  public static getWordGroup():Array<WordGroup>{
    let wordGroupList:Array<any> = wx.getStorageSync('wordGroupList')
    if(!wordGroupList){
      return new Array<WordGroup>()
    }
    //这里注意了
    //不是只简单返回缓存的list
    //实践证明缓存里面存的对象会丢失方法
    //所以要把缓存取出的list封装到WordGroupList中
    let list:Array<WordGroup> = new Array<WordGroup>()
    for(let i=0;i<wordGroupList.length;i++){
      let wordGroup:WordGroup = new WordGroup()
      wordGroup.setCount(wordGroupList[i].count)
      wordGroup.setId(wordGroupList[i].id)
      wordGroup.setName(wordGroupList[i].name)
      wordGroup.setList(wordGroupList[i].list)
      list.push(wordGroup)
    }
    return list
  }

  /**
   * 删除单词分组
   */
  public static deleteWordGroup(wordGroup:WordGroup): void {
    let wordGroupList: Array<WordGroup> = this.getWordGroup()
    let groupListTemp: Array<WordGroup> = new Array<WordGroup>()
    for (let i = 0; i < wordGroupList.length; i++) {
      if (wordGroupList[i].getId()!==wordGroup.getId()) {
        groupListTemp.push(wordGroupList[i]);
      }
    }
    this.saveWordGroupList(groupListTemp)
  }

  /**
   * 往单词分组下添加单词
   */
  public static addWord(wordGroup:WordGroup,word:Word):void{
    let wordGroupList: Array<WordGroup> = this.getWordGroup()
    for(let i=0;i<wordGroupList.length;i++){
      if(wordGroupList[i].getId()===wordGroup.getId()){
        let wordList: Array<Word> = wordGroupList[i].getList()
        wordList.unshift(word)
        wordGroupList[i].setList(wordList)
        wordGroupList[i].setCount(wordList.length)
        this.saveWordGroupList(wordGroupList)
        return
      }
    }
  }

  /**
   * 删除单词分组下的指定单词
   */
  public static deleteWord(wordGroup:WordGroup,word:Word):void{
    let wordGroupList: Array<WordGroup> = this.getWordGroup()
    for (let i = 0; i < wordGroupList.length; i++) {
      if (wordGroupList[i].getId() === wordGroup.getId()) {
        let wordList: Array<Word> = wordGroupList[i].getList()
        let wordListTemp: Array<Word> = new Array<Word>()
        for (let j = 0; j < wordList.length; j++) {
          if (wordList[j] !== word) {
            wordListTemp.push(wordList[j])
          }
        }
        wordGroupList[i].setList(wordListTemp)
        wordGroupList[i].setCount(wordListTemp.length)
        this.saveWordGroupList(wordGroupList)
        return
      }
    }
  }

  /**
   * 将单词列表保存到缓存
   */
  private static saveWordGroupList(wordGroupList:Array<WordGroup>):void{
    wx.setStorageSync('wordGroupList',wordGroupList)
  }
}