/**
 * 类型
 */

import type { ComputedScope, IStore } from "../store/types";
import { Dict } from "../types"
import { WatchDescriptor } from "../watch";
import { Reactiveable } from "../reactives/types"; 


// 指向helux的IOperateParams类型，但是我们只用到其是的部分类型
// Pick<IOperateParams,'keyPath' | 'fullKeyPath' | 'value' | 'parent' | 'replaceValue'>;
export type IComputeParams = {
  keyPath     : string[]              // 路径
  fullKeyPath : string[]          // 完整路径，包括自身
  value       : any
  parent?     : any
  replaceValue: (newValue: any) => void;
}

 
/**
 * 返回函数的返回值类型
 * 支持返回()=>Promise<R>中的R类型 
 */
export type AsyncReturnType<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer R> ? R : (
    T extends (...args: any) => infer R ? R : any)
 

export type PickComputedResult<T> = T extends  ComputedDescriptor<infer X> ? AsyncComputedObject<X> : 
    ( T extends WatchDescriptor<any,infer X> ? X :
        ( T extends ComputedSyncReturns<infer X> ? X: 
            (T extends AsyncComputed<infer X> ? AsyncComputedObject<X>: 
                (T extends Computed<infer R> ? R : T) 
            )
        )                              
    )
    
/**
 
 转换状态中的计算属性函数的类型
 将状态中的计算属性函数转换为计算属性函数的返回值类型
 如：ComputedState<{count:()=>1}> => {count:number}
 如：ComputedState<{count:async ()=>1}> => {count:number}

*/
export type ComputedState<T extends Record<string, any>> = {
    [K in keyof T]: T[K] extends (...args:any) => any ? PickComputedResult<T[K]> : T[K] extends Record<string, any> ? ComputedState<T[K]> : T[K];
};

 

// 在ComputedState的基础上，排除了undefined的类型
export type RequiredComputedState<T extends Record<string, any>> = {
    [K in keyof T]-?: Exclude<T[K],undefined> extends (...args:any) => any ? PickComputedResult<Exclude<T[K],undefined>> : Required<T[K]>extends Record<string, any> ? ComputedState<Exclude<T[K],undefined> > : Exclude<T[K],undefined> ;
};



// 表示Store中的函数的类型， =Computed代表是一个计算属性，=Watch代表是一个观察函数
export type StateComputedType = 'Computed' | 'Watch'

export interface ComputedProgressbar{
    value:(num:number)=>void
    end:()=>void
  }
  
  // 作为计算函数的第二个参数传入
  export interface ComputedParams extends Record<string,any>{
    // 获取一个进度条，用来显示异步计算的进度
    getProgressbar?:(opts?:{max?:number,min?:number,value?:number})=>ComputedProgressbar
    // 当计算函数启用超时时，可以指定一个cb，在超时后会调用此函数
    onTimeout?:(cb:()=>void)=>void    
    /**
     * 
     * 提供一个函数用来获取当前Scope的快照
     * 传入的scope是一个经过Proxy处理的响应式对象，此方法可以对scope进行转换为普通对象   
     */
    getSnap?:<T=Dict>(scope:any)=>T  
    /**
     * 在执行计算函数时，如果传入AbortController.signal可以用来传递给异步计算函数，用来取消异步计算
     * 例如：fetch(url,{signal:signal})
     */
    abortSignal:AbortSignal  
    /**
     * 用来取消操作正在执行的异步计算函数
     * 异步函数可以通过此方法来取消异步计算
     * 
     * @returns 
     */
    cancel:()=>void
    /**
     * 额外的参数，用来传递给计算函数
     */
    extras?:any
  }
  
  export interface ComputedOptions<Value=any,Extras extends Dict={}> {
    // 计算函数的唯一标识，如果未指定，则自动生成一个唯一标识
    id?      : string                          
    scope?   : ComputedScope               // 计算函数的第一个参数
    initial? : Value
    // 异步计算,默认情况下，通过typeof(fn)=="async function"来判断是否是异步计算函数
    // 但是在返回Promise或者Babel转码等情况下，判断会失效时，需要手动指定async=true
    async?:boolean
    // 指定依赖，例如["key","a.b.c"]等形式
    depends?:ComputedDepends
    /**
     * 指定超时时间，当计算函数执行超过指定时间后，会自动设置loading为false
     * 如果timeout是一个数组，则第一个值表示超时时间，第二个值表示超时期的倒计时间隔
     * 例如：[1000,10]表示1000ms代表1s后超时并置loading=false
     * 10代表setInterval(1000/100), 每次执行时-1，直到为0时停止
     * 这样就可以通过绑定timeout值来实现倒计时的效果
     * 如果要实现60秒倒计时，可以这样写：[60*1000,60],这样value.timeout就会从60开始递减
     */
    timeout?:number  | [number,number]    

    /**
     * 
     * 针对异步计算属性
     * 
     * true: 在创建异步计算时马上执行一次
     * false: 在创建异步计算时不马上执行一次，后续仅在依赖变化时执行
     * auto: 当initial==undefined时会马上执行一次，initial!=undefined不会马上执行一次，因为该计算属性已经有初始化了
     * 
     * 同步计算没有此问题
     * 
     * 
     */
    immediate?:'auto' | boolean
    /**
     *  计算函数不可重入，即同一个计算函数在执行过程中，不会再次执行   
     *  如果重入时，则在debug=true时会在控制台打印出警告信息
     */
    noReentry?:boolean
    /**
     * 提供一个异步信号，用来传递给异步计算函数以便可以取消异步计算
     */
    abortSignal?:()=>AbortSignal | null | void | undefined
    /**
     * 当计算函数执行出错时的重试次数
     * 
     * retry:3  表示最多重试3次,重试间隔为0，加上第1次执行，总共执行4次
     * retry:[3,1000] 表示最多重试3次，重试间隔为1000ms，加上第1次执行，总共执行4次
     * 
     * 重试数据可以通过AsyncComputedObject.retry获取
     * 当首次执行失败时触发重试，此时AsyncComputedObject.retry=3，然后每次重试-1，直到为0时停止重试
     * 可以在UI中通过AsyncComputedObject.retry来实时显示重试次数
     * 
     */
    retry?:number | [number,number]
    /**
     * 当执行计算getter函数出错时的回调
     */
    onError?:(e:Error)=>void              
    /**
     * 为该计算函数指定一个分组名
     * 
     * 此属性用来将计算函数分组，比如一个store中具有相同group的计算函数
     * 
     * 然后就可以启用/关闭/运行指定分组的计算函数
     * 
     * 在表单中通过为所有validate指定统一的分组名称，这样就可以统一控制表单的验证是否计算
     * 
     * 
     * store.computedObjects.get(["a","b"]).run() // 重新启动
     * 
     * 马上重新运行指定组的计算函数
     * store.computedObjects.getGroup("a"]).run() // 运行组
     * // 启用/禁用指定组的计算函数 =false 代表禁用计算 =true开启动计算
     * store.computedObjects.enableGroup("b"]) 
     * 
     */
    group?:string
    /**
     * 计算开关
     * 当=false时不会执行计算
     * 
     */
  
    enable?:boolean
  
    /**
     * 额外合并到计算结果AsyncComputedObject中的属性
     */
    extras?:Extras                  
    /**
     * 默认情况下，计算结果会写入到当前store中computed所在的位置,即selfPath
     * 如果指定此属性，则会将计算结果写入selfReactiveable指定的位置selfPath
     * 此参数仅在动态创建计算属性时使用
     * 
     */
    selfReactiveable?: Reactiveable
    /**
     * 
     * 默认情况下，每一个计算属性均会创建一个computedObject对象实便并且保存到store.computedObjects中
     * 
     * 默认=true,=false则不会保存
     * 
     */
    objectify?:boolean 
    /**
     * 当计算完成后的回调函数
     */
    onDone?(this:IStore<any>,args:{id:string,error:Error | undefined,timeout:boolean ,abort:boolean ,valuePath:string[],scope:any,result:any}):void
  };
  
  export type ComputedDepends =Array<string | Array<string>> 
  export type ComputedGetter<R,Scope=any> = (scopeDraft: Scope) => Exclude<R,Promise<any>>
  export type AsyncComputedGetter<R,Scope=any,P extends Dict = Dict> = (scopeDraft:Scope,options:Required<ComputedParams> & P) => Promise<R>
  
  // 当调用run方法时，用来传参覆盖原始的计算参数
  export type RuntimeComputedOptions = Pick<ComputedOptions,'onDone' | 'scope' | 'abortSignal' | 'noReentry' | 'retry' | 'onError' | 'timeout' | 'extras'>
  
  export type AsyncComputedObject<Result= any,ExtAttrs extends Dict = {}> ={
    loading : boolean;
    progress: number;                // 进度值    
    timeout : number ;               // 超时时间，单位ms，当启用超时时进行倒计时
    error   : any;
    retry   : number                 // 重试次数，当执行重试操作时，会进行倒计时，每次重试-1，直到为0时停止重试
    result  : Result;                // 计算结果保存到此处
    run     : (options?:RuntimeComputedOptions) => {};        // 重新执行任务
    cancel  : ()=>void                                        // 中止正在执行的异步计算
  } & ExtAttrs
  
  
export type ComputedDescriptorParams<R>  = StateValueDescriptorParams<(scope:any) => Promise<R> | R,ComputedOptions<R>>

// 计算属性的声明形式
export type Computed<T=any> = (...args: any) => T; // 同步计算函数
export type AsyncComputed<T=any> = (...args: any) => Promise<T>; // 异步计算函数

// 使用computed函数创建的计算属性
// export type ComputedDescriptor<T=any> = ((...args: any) => ComputedDescriptorParams<T>) 
//                                         & {__COMPUTED__: 'sync' | 'async' | 'watch'};
                                        
// export type ComputedDescriptor<R=any> = StateValueDescriptor<(scope:any) => Promise<R> | R,ComputedOptions<R>>

export interface StateValueDescriptorParams<Fn extends Function,Options extends Dict = Dict> {
  getter: Fn
  options:Options
} 



// 用在声明一个计算属性
export type AsyncComputedDefine<R=any,Scope extends Dict = Dict> = AsyncComputedGetter<R,Scope> | ComputedDescriptor<R,Scope>


export type ComputedDescriptorDefine<R=any,Scope extends Dict = Dict> = {
  getter: AsyncComputedGetter<R,Scope> | ComputedGetter<R,Scope>;
  options: ComputedOptions<R>;
} 

export  interface ComputedDescriptor<R=any,Scope extends Dict = Dict>  {
  ():ComputedDescriptorDefine<R,Scope>
  __COMPUTED__: 'sync' | 'async' | 'watch' 
} 


export type ComputedSyncReturns<T=any> = (...args: any) => Exclude<T,Promise<any>>;  

 

// 执行计算函数时的上下文
export type ComputedRunContext = {
  id               : string
  desc             : string
  valuePath        : string[],
  isComputedRunning: boolean  
  deps             : (string | string[])[]
  resultPath       : string[]  
  getter           : ComputedGetter<any> | AsyncComputedGetter<any>,
  dependValues     : any[]
}


export type ComputedType = "Computed" | "Watch"