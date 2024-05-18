/**
 * 同步计算
 */
import { ComputedScopeRef, StoreDefine, StoreOptions } from "../types/store";
import { getComputedId, getVal, setVal  } from "../utils";
import { OBJECT_PATH_DELIMITER } from '../consts';
import { ComputedDescriptorParams, ComputedObject, ComputedTarget, IComputeParams, RuntimeComputedOptions } from './types';
import { getComputedRefDraft } from "../context"
import { IStore } from '../types/store';

/**
 * 为同步计算属性生成mutate
 * @param stateCtx
 * @param computedParams
 */

export function createComputedMutate<T extends StoreDefine>(computedParams:IComputeParams,store:IStore<T>,storeOptions: Required<StoreOptions<T>>,computedTo?:ComputedTarget) :ComputedObject | undefined{

    // 1. 获取计算属性的描述
    const { fullKeyPath:valuePath, parent,value } = computedParams;    
    let { fn: getter, options: computedOptions }  = value() as ComputedDescriptorParams<any>    
    // 排除掉所有非own属性,例如valueOf等
    if (parent && !Object.hasOwn(parent, valuePath[valuePath.length - 1])) {
      return;
    }
  
    // 2. 运行Hook:  当创建计算属性前时运行hook，本Hook的目的是允许重新指定computedThis或者重新包装原始计算函数
    const { onCreateComputed } = storeOptions;
    if (typeof onCreateComputed == "function" && typeof getter === "function") {
      const newGetter = onCreateComputed.call(store,valuePath, getter,computedOptions);    
      if(!computedOptions.scope) computedOptions.scope = ComputedScopeRef.Current
      if(!computedOptions.context) computedOptions.context = ComputedScopeRef.Root
      if (typeof newGetter == "function") getter = newGetter;
    }

    // 3. 参数解析: 
    // 当传入computedTarget时，代表计算结果要更新外部对象中
    const isExternal= computedTo!==undefined
    const mutateId = isExternal ? computedOptions.id as string :  getComputedId(valuePath,computedOptions.id)
    const mutateName =isExternal ? mutateId : valuePath.join(OBJECT_PATH_DELIMITER)  

    storeOptions.log(`Create sync computed: ${mutateName}`);    
    
    // 4. 创建mutate实例
    const mutate = store.stateCtx.mutate({
      fn: (draft, params) => {
        if(!computedOptions.enable){
          storeOptions.log(`Sync computed <${mutateName}> is disabled`,'warn')
          return 
        }
        storeOptions.log(`Run sync computed for : ${mutateName}`);
        const { input } = params;
        // 1. 根据配置参数获取计算函数的上下文对象      
        const thisDraft = getComputedRefDraft(draft,{input,computedOptions,computedContext: computedParams,storeOptions,type:"context"})
        const scopeDraft= getComputedRefDraft(draft,{input,computedOptions,computedContext: computedParams,storeOptions,type:"scope"})      
        // 2. 执行getter函数
        let computedResult = computedOptions.initial;
        try {
          computedResult = getter.call(thisDraft,scopeDraft);
        } catch (e: any) {// 如果执行计算函数出错,则调用        
          if (typeof computedOptions.onError === "function") {
            try {
              computedOptions.onError?.call(thisDraft, e);
            } catch { }
          }
        }
        // 3. 将getter的返回值替换到状态中的,完成移花接木
        setVal(draft, valuePath, computedResult);
      },
      desc: mutateId,
      // 关闭死循环检测，信任开发者
      checkDeadCycle: false,
    });
    // 移花接木原地替换
    if(!isExternal) computedParams.replaceValue(getVal(store.stateCtx.state, valuePath));
    
    // 5. 创建计算对象实例
    const computedObject = {      
      id:mutateName,
      mutate,
      group:computedOptions.group,
      async:false,
      options:computedOptions,
      get enable(){return computedOptions.enable as boolean},
      set enable(val:boolean){computedOptions.enable=val},
      run:(options?:RuntimeComputedOptions)=>{
        const params = {desc:mutateId,extraArgs:options}
        return isExternal ? computedTo.stateCtx.runMutateTask(params) : store.stateCtx.runMutateTask(params)
      }
    }
    store.computedObjects.set(mutateName,computedObject)   
    return  computedObject
  }