/**
 * 单词分组实体类
 */

import {guid} from '../utils/util'
import {Word} from './Word'

export class WordGroup{
  //单词分组的id
  private id:string
  //分组名  
  private name:string
  //分组下的单词数量
  private count:number
  //分组下的单词列表
  private list:Array<Word>
  //初始化各变量
  public constructor(){
    this.id = guid()
    this.name = ''
    this.count = 0
    this.list = new Array<Word>();
  }

  public setId(id:string):void{
    this.id = id
  }

  public setName(name:string):void{
    this.name = name
  }

  public setCount(count:number):void{
    this.count = count
  }

  public setList(list:Array<Word>):void{
    this.list = list
  }

  public getId():string{
    return this.id
  }

  public getName():string{
    return this.name
  }

  public getCount():number{
    return this.count
  }

  public getList():Array<Word>{
    return this.list
  }
}