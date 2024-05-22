import { SKIP_COMPUTED } from "../consts";

 

export function isSkipComputed(fn:Function){
    // @ts-ignore
    return fn[SKIP_COMPUTED] === true

    
}
