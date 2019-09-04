/**
 * 音频播放类
 * 
 * 本类是单词听写的一大核心
 * 听写的基础是能够稳定播放音频
 */

import {Params} from '../beans/Params'

let innerAudioContext = wx.createInnerAudioContext()

export class AudioUtil{

  /**
   * 声明几个必要的属性
   */
  private paths:string[]//播放的音频文件路径
  private cur:number//已经播放的单词数
  private paused:boolean//播放是否暂停
  //当前单词播放完成的回调函数
  //通常用来显示播放进度
  //所以会传入一个参数cur
  //表示当前正在播放的单词是第几个
  private proccess:Function
  //出错的回调，没参数
  private error:Function
  //播放完成的回调
  private end:Function
  //播放参数
  private repeat:number
  private pause:number
  private interval:number
  /**
   * 初始化各个属性
   */
  public constructor(params:Params){
    this.paths = []
    this.cur = 1
    this.paused = true
    this.proccess = function(){}
    this.error = function(){}
    this.end = function () { }
    this.repeat = params.getRepeat()
    this.pause = params.getPause()
    this.interval = params.getInterval()
  }

  public updateParams(params: Params): void {
    this.repeat = params.getRepeat()
    this.pause = params.getPause()
    this.interval = params.getInterval()
  }

  /**
   * 各个属性的get和set方法
   */
  public setPaths(paths:string[]):void{
    this.paths = paths
  }
  public setProccess(proccess:Function):void{
    this.proccess = proccess
  }
  public setError(error:Function):void{
    this.error = error
  }
  public setEnd(end:Function):void{
    this.end = end
  }

  /**
   * 准备开始播放
   * 准备好第一个单词并阻塞
   * 点播放就能开始播放了
   */
  public ready():void{
    (async () => {
      this.cur = 1
      console.log(this.repeat)
      for (let i = 0; i < this.paths.length; i++) {
        this.proccess(this.cur++)
        for (let j = 0; j < this.repeat; j++) {
          if(!await this.playSync(this.paths[i])){
            innerAudioContext.destroy()
            innerAudioContext = wx.createInnerAudioContext()
            this.error()
            return
          }
          if (j < this.repeat - 1) {
            await this.delay(this.interval*1000)
          }
        }
        if (i < this.paths.length - 1) {
          await this.delay(this.pause*1000)
        }
      }
      innerAudioContext.stop()
      this.paused = true
      this.end()
    })()
  }

  /**
   * 播放状态切换方法
   * 当前在播放就暂停
   * 当前是暂停就播放
   */
  public playOrPause(): void {
    if (this.paused) {
      innerAudioContext.play()
      this.paused = false
    } else {
      innerAudioContext.pause()
      this.paused = true
    }
  }

  /**
   * 播放方法
   * 
   * 这个方法返回一个Promise实例
   * 方便async方法调用await
   */
  private playSync(path:string):Promise<boolean>{
    let that:AudioUtil = this
    return new Promise((resolve)=>{
      innerAudioContext.autoplay = true
      innerAudioContext.src = path
      //为什么设了autoplay了还要调用play方法？？
      innerAudioContext.play()
      //有些时候要一开始暂停播放
      //比如ready方法调用了，playOrPause方法还没调用的时候
      innerAudioContext.onCanplay(function () {
        if(that.paused){//如果是暂停状态，就暂停喽
          innerAudioContext.pause();
        }
      })
      innerAudioContext.onEnded(()=>{
        resolve(true)
      })
      innerAudioContext.onError(()=>{
        resolve(false)
      })
    })
  }

  //延时函数
  //感谢Promise
  //感谢async、await
  //让我不要一层层套回调来实现延时了
  //虽然它最终还是翻译成了一层层回调去执行的
  //但是这样逻辑清晰了，代码也清晰了
  //减少了各种出错，是个挺赞的新技术（我才学会）
  private delay(time:number):Promise<void>{
    return new Promise((resolve)=>{
      setTimeout(resolve,time)
    })
  }
}