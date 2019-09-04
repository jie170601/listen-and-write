/**
 * papaparse.js库的typescript声明文件
 * 用来实现IDE自动提示和解决tsc编译报错
 */

//没有config参数会以默认形式运行
export function parse(input: string): any;
//带config参数能更灵活运用解析
export function parse(input:string,config:object):any;