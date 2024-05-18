/**
 * 利用helux提供的各种hook接口进行扩展
 * 
 * 
 * 1. 提供computed支持
 * 2. 提供watch支持
 * 
 */

import type { StoreOptions, StoreDefine, IStore } from "./types/store";
import { isSkipComputed } from "./utils";
import {  IComputeParams, installComputed } from "./computed"; 
import { installWatch } from "./watch"; 
 

export function installExtends<T extends StoreDefine>(computedParams:IComputeParams,store:IStore<T>,storeOptions: Required<StoreOptions<T>>) {    
    // 拦截读取state的操作，在第一次读取时，
    // - 为计算函数创建mutate
    // - 将原始属性替换为计算属性值或异步对象
      const { fullKeyPath:valuePath, value } = computedParams;
      const key = valuePath.join(".");
      if ( typeof value === "function" && !store._replacedKeys[key] && !isSkipComputed(value) ) {
        store._replacedKeys[key] = true;    
        if(value.__COMPUTED__=='watch'){
            installWatch<T>(computedParams,store,storeOptions)
        }else{  
            installComputed<T>(computedParams,store,storeOptions)
        } 
      }
}




