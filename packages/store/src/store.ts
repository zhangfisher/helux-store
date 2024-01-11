/**

 
 */

import { ISharedCtx, model  } from "helux"
import { Actions, createActions } from './action';
import { ComputedState, Dict, RequiredComputedState } from "./types";
import { createComputed } from "./computed";
import type { ComputedOptions, ComputedRefDraftOptions } from "./computed";
import { deepClone } from "flex-tools/object/deepClone";


export interface StoreSchema<State> extends Dict{
    state:State
    actions?:Actions<State>
}

export enum ComputedScopeRef{
    Root = 0,
    Current = 1,
    Parent = 2,
    Depends = 3          // 指向依赖数组
}
export type NonDependsScopeRef = Exclude<ComputedScopeRef, ComputedScopeRef.Depends>;
// 指定Store中计算函数的上下文,如果是字符串代表是当前对象的指定键，如果是string[]，则代表是当前Store对象的完整路径
export type StoreComputedScope  =  ComputedScopeRef | string | string[] | ((state:any)=>string | string[] | ComputedScopeRef)
export type StoreComputedContext  = NonDependsScopeRef | string | string[] | ((state:any)=>string | string[] | NonDependsScopeRef)

export type StateGetter<State,Value=any> = (state:State)=>Value
export type StateSetter<State,Value=any> = (state:State,value:Value)=>void

/**
 *  StateGetter函数返回
 *
 *  [ fullName,setFullName ] = useState<string,[string,string]>((state)=>state.user.firstName+state.user.lastName,(state,fullName:[string,string])=>{
 *        state.user.firstName = fullName[0]
 *        state.user.lastName = fullName[1]
 *  })
 *
 *
 * @param useState
 */
function wrapperUseState<State extends Dict>(stateCtx:ISharedCtx<State["state"]>){
    return function<Value=any,SetValue=Value>(getter?:StateGetter<RequiredComputedState<State>,Value>,setter?:StateSetter<RequiredComputedState<State>,SetValue>){
        const useState = stateCtx.useState
        if(getter==undefined){
            return useState()
        }
        const [ state,setState ] = useState()
        const value = getter(state)
        let setValue = undefined
        if( typeof(setter)=='function' ){
            setValue=(value:SetValue)=>{
                // @ts-ignore
                setState((draft)=>{
                    setter.call(draft,draft,value)
                })                
            }
        }
        return [ value,setValue ]
    }
}



export interface StoreOptions{
    // 计算函数的默认上下文，即传入的给计算函数的draft对象是根state还是所在的对象或父对象
    // 如果未指定时，同步计算的上下文指向current，异步指定的上下文指向root
    computedThis?: StoreComputedContext
    computedScope?: StoreComputedScope
    // 当创建计算属性前调用
    onCreateComputed?:(keyPath:string[],getter:Function,options:ComputedOptions)=>Function | void
    // 是否是单例模式，如果是单例模式，那么所有的计算属性都是共享的，否则每个实例都有自己的计算属性
    // =false时会对传入的data进行深度克隆，这样就可以创建多个互相不干扰的实例
    singleton?:boolean
    /**
     * 可以拦截修改计算函数的context,scope
     */
    onComputedContext(draft:any,options:ComputedRefDraftOptions):any
}


export type IStore<State extends Dict=Dict> = ISharedCtx<State> & {
    state:ISharedCtx<State>['reactive']
    useState:ReturnType<typeof wrapperUseState>
}


export function createStore<T extends StoreSchema<any>>(data:T,options?:StoreOptions){
    const opts = Object.assign({
        computedThis:ComputedScopeRef.Root,
        computedScope:ComputedScopeRef.Current,
        singleton:true
    },options) as Required<StoreOptions>
    const storeData = opts.singleton ? data : deepClone(data)

    return  model((api) => { 
        const stateCtx = api.sharex<ComputedState<T['state']>>(storeData.state as any,{
            stopArrDep: false
        })
        // 1. 创建Actions
        const actions = createActions<T>(storeData.actions,stateCtx,api,opts)

        // 2. 处理Computed属性
        createComputed<T['state']>(stateCtx,api,opts)!

        // 3. 处理useState
        const useState = wrapperUseState<T['state']>(stateCtx)

        return {
          actions,
          ...stateCtx,
          state:stateCtx.reactive,
          useState
        }
      });

}
