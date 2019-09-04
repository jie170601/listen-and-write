/**
 * word字符串转为mp3文件路径
 * 下载音频文件和返回下载进度原本不需要同步
 * 在下载完成的回调方法里做对应的操作即可
 * 但是不同步会造成调用此类的代码需要处理同步
 * 因为肯定要确保下载完成再进行下一步操作
 * 所以直接在此类中处理成了同步下载
 * 调用的地方直接调用就能保证音频文件已经下载完成
 */
import {Params,Pronunciation} from '../beans/Params'

//TTS API的请求路径
const ttsApi: string = "https://dict.youdao.com/dictvoice?le=auto"

//将Word2Mp3类暴露出来，给其它模块使用
export class Word2Mp3{

  private count:number = 0//用来计数，表示成功下载音频文件的个数，可以用在计算进度上
  private paths:string[] = []//用来保存音频文件的临时路径
  private rate:number
  private type:number

  //构造函数，仅初始化各属性
  constructor(params:Params){
    this.count = 0
    this.paths = []
    this.rate = params.getSpeed()
    this.type = 1
    if(params.getPron()===Pronunciation.AMERICAN){
      this.type = 2
    }
  }

  /**
   * 这是个同步方法
   * 为了保证下载完成再返回所有文件路径
   * 及准确的获取下载的进度
   * 需要使用同步
   * await只能用在async方法里面
   * 
   * words参数为单词的字符串数组
   * downloadSuccess方法为下载成功一个单词的回调函数
   * 因为是async方法，所以方法返回一个Promise
   * 要取返回的真实值，需要使用Promise的then链
   */
  public async getFilePaths(words:string[],downloadSuccess:Function){
    for(let i:number=0;i<words.length;i++){
      //对于空的字符串，不转换成音频
      if (words[i] !== null && words[i].trim() !== '') {
        //这里进行阻塞，保证下载的同步
        await this.getMp3FilePath(words[i], downloadSuccess)
      }
    }
    return this.paths
  }

  /**
   * 这里构造了一个Promise函数
   * 执行这个方法将返回一个Promise
   * await后面的方法为Promise时，会阻塞并等待Promise的状态变为resolve或者reject
   * 而await后面函数如果是Promise的话，返回的结果为resolve或者reject函数传过来的参数
   * 这个方法与getFilePaths方法一起，实现了音频文件的同步下载
   * 
   * words参数为单词的字符串数组
   * downloadSuccess方法为下载成功一个单词的回调函数
   * 方法返回一个Promise
   */
  private getMp3FilePath(word:string,downloadSuccess:Function){
    let that = this
      let promise:Promise<any> = new Promise((resolve,reject)=>{
        wx.downloadFile({
          url: ttsApi + "&audio=" + word + "&rate=" + that.rate+"&type="+that.type,
          success: (res: any) => {
            this.paths.push(res.tempFilePath)
            this.count++
            downloadSuccess(this.count)
            resolve(res)
          },
          fail: (res: any) => {
            reject(res)
          }
        })
      })
      return promise
  }
}