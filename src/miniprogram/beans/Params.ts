/**
 * 系统参数类
 */
export class Params{
  private speed:number
  private repeat:number
  private interval:number
  private pause:number
  private mode:Mode
  private pron:Pronunciation
  /**
   * 构造方法中给各参数赋默认值
   */
  public constructor(){
    //默认语速为4
    this.speed = 4
    //默认每个单词重复3次
    this.repeat = 3
    //默认每次重复之间间隔3秒钟
    this.interval = 3
    //默认每个单词之间停顿5秒钟
    this.pause = 5
    //默认顺序播放
    this.mode = Mode.ORDER
    //默认为英式发音
    this.pron = Pronunciation.BRITISH
  }

  public setSpeed(speed:number):void{
    this.speed = speed
  }
  public setRepeat(repeat: number): void {
    this.repeat = repeat
  }
  public setInterval(interval: number): void {
    this.interval = interval
  }
  public setPause(pause: number): void {
    this.pause = pause
  }
  public setMode(mode: Mode): void {
    this.mode = mode
  }
  public setPron(pron:Pronunciation):void{
    this.pron = pron
  }
  public getSpeed():number{
    return this.speed
  }
  public getRepeat(): number {
    return this.repeat
  }
  public getInterval(): number {
    return this.interval
  }
  public getPause(): number {
    return this.pause
  }
  public getMode(): Mode {
    return this.mode
  }
  public getPron():Pronunciation{
    return this.pron
  }
}

/**
 * 播放模式
 */
export enum Mode{
  //随机播放
  RANDOM,
  //顺序播放
  ORDER
}

/**
 * 发音类型
 */
export enum Pronunciation{
  //英式发音
  BRITISH,
  //美式发音
  AMERICAN
}