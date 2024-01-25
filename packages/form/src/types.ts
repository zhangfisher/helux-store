import { AsyncComputedObject,ComputedAsyncReturns } from "helux-store";


// 用来声明表单定义中的动态计算属性
export type ComputedAttr<R=unknown,Args extends any[]=any[]> = ((...args:Args)=>R)  
  | ((...args:Args)=>Promise<R>)
  | AsyncComputedObject<R>
  | ComputedAsyncReturns<R>
  | R  

 
export type ReactFC<Props=unknown> = React.FC<React.PropsWithChildren<
    Pick<React.HTMLAttributes<HTMLElement>,'className' | 'style'> & Props>> 

export type FormData = Record<string, any>;
 
 
export type Primitive = number | boolean | string | null | undefined 


export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'TRACE' | 'CONNECT'
export type HttpFormEnctype = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'application/json' | 'text/xml'