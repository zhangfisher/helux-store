(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[452],{57004:function(oe,M,p){"use strict";p.r(M),p.d(M,{$:function(){return E.$},ComputedObjects:function(){return qe},ComputedScopeRef:function(){return O},OBJECT_PATH_DELIMITER:function(){return h},computed:function(){return Ye},createAction:function(){return ye},createActions:function(){return he},createStore:function(){return ot},createUseWatch:function(){return Re},createWatch:function(){return re},getSnap:function(){return E.getSnap},getVal:function(){return w},getValueByPath:function(){return V},installComputed:function(){return xe},installWatch:function(){return Ee},isIncludePath:function(){return We},isSkipComputed:function(){return fe},markRaw:function(){return E.markRaw},setVal:function(){return D},skipComputed:function(){return _},watch:function(){return rt}});var q=p(39114),se=p.n(q),Ve=p(70125),P=p.n(Ve),E=p(14102),De=p(79664),C=p.n(De),h="/";function V(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:h,r=[];try{return typeof t=="function"&&(t=t.call(e,e)),r=Array.isArray(t)?t:typeof t=="string"?t.split(n):[],r.length>0?w(e,r):e}catch(a){return e}}var ce=Symbol("SKIP_COMPUTED");function _(e){return e[ce]=!0,e}function fe(e){return e[ce]===!0}function Ke(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",n=typeof e=="function"?e():e instanceof Error?e.stack:e;try{var r;(r=console)[t].apply(r,["[@speedform/reactive] "].concat(C()(Array.isArray(n)?n:[n])))}catch(a){}}function le(e,t){if(!Array.isArray(e))throw new Error("path must be an array");return t==="self"?e:t==="root"?[]:t==="parent"?e.slice(0,-2):t==="current"?e.slice(0,-1):typeof t=="string"?t.startsWith("./")?[].concat(C()(e.slice(0,-1)),C()(t.slice(2).split(h))):t.startsWith("../")?le(e.slice(0,-1),t.slice(3)):(t.includes(".")&&(console.warn('[@speedform/reactive] The dependency path uses "/" as the separator, and will automatically convert'),t=t.replaceAll(".","/")),[].concat(C()(e.slice(0,-1)),C()(t.split(h)))):Array.isArray(t)?t:e}function pe(e){return e.map(function(t){return Array.isArray(t)?t.join("."):t}).join("_")}function ke(e){return e instanceof Error?e:new Error(e)}function Ie(e,t){return(e||[]).map(function(n){return Array.isArray(n)?n:typeof n=="string"?n.startsWith("./")||n.startsWith("../")?n:n.includes(h)?n.split(h):n.split("."):[]})}function Me(e,t,n){return e.map(function(r){return w(t,le(n,r))})}function We(e,t){return e.length>t.length?!1:e.every(function(n,r){return n===t[r]})}function de(e){return toString.call(e)==="[object Map]"}function ve(e,t){var n=e.get(t);if(n!==void 0)return n;var r=e.get(Number(t)||t);if(r!==void 0)return r}function w(e,t){if(t.length===0)return e;var n,r=e;return t.forEach(function(a){n=de(r)?ve(r,a):r[a],r=n}),n}function D(e,t,n){var r=e,a=t.length-1;t.forEach(function(i,u){var s=de(r);if(u===a){s?r.set(i,n):r[i]=n;return}var c=s?ve(r,i):r[i];r=c})}function Le(e){return typeof e=="function"&&e.then&&typeof e.then=="function"||e&&e instanceof Promise}function he(e,t,n,r){return Object.entries(e||{}).reduce(function(a,i){var u=P()(i,2),s=u[0],c=u[1];return a[s]=ye(c,t.setState,n),a},{})}function ye(e,t,n){var r=function(i){typeof i=="function"&&t(function(u){i(u)})};return function(){var a=e.apply(void 0,arguments);if(Le(a))return a.then(function(i){r(i)});r(a)}}var $e=p(20458),Pe=p(41176),ge=p.n(Pe),Ue=p(77937),me=p.n(Ue),Fe=p(90393),G=p.n(Fe),Ne=p(7392),Ce=p.n(Ne),Be=p(26851),He=p.n(Be),Oe=p(96820),Je=p(71660),Ge=p(45727);function ee(e,t){var n=t.input,r=t.type,a=t.computedContext,i=t.computedOptions,u=t.storeOptions,s=e;if(typeof u.onComputedContext=="function"){var c=u.onComputedContext.call(e,e,{type:r,valuePath:a.fullKeyPath});c!==void 0&&(s=c)}var l=a.keyPath,o=a.fullKeyPath,f=ze(e,r=="context"?i.context:i.scope,r=="context"?u.computedThis:u.computedScope);try{if(f===O.Current)return V(e,l);if(f===O.Parent)return V(e,o.slice(0,o.length-2));if(f===O.Root)return s;if(f===O.Depends)return Array.isArray(n)?n:[];if(typeof f=="string")return V(e,[].concat(C()(l),C()(f.split(h))));if(Array.isArray(f))if(f.length>0&&f[0].startsWith("@")){var d=V(e,[].concat(C()(f[0].substring(1).split(h)),C()(f.slice(1))));return V(e,d)}else return V(e,f);else if(typeof f=="number"){var y=f>o.length-2?o.length-f-1:0;return V(e,o.slice(0,y))}else return e}catch(b){return e}}function Ye(e,t,n){if(typeof e!="function")throw new Error("getter must be a function");var r=[],a={async:!1,timeout:0,depends:[],toComputedResult:O.Self,immediate:!0};if(arguments.length==1)r=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))r=arguments[1];else if(He()(arguments[1])=="object")Object.assign(a,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(r=arguments[1],Object.assign(a,arguments[2]));var i=a.async===!0||(0,Oe.$)(e)||arguments.length>=2&&Array.isArray(t);a.async=i,a.depends=r;var u=function(){return{fn:e,options:a}};return u.__COMPUTED__=i?"async":"sync",u}function ze(e,t,n){var r=t==null?n:t;if(typeof r=="function")try{r=r.call(e,e)}catch(a){}return r==null?n==null?O.Root:n:r}function be(e,t){var n="";return typeof t=="function"?n=t(e):typeof t=="string"?n=t:n=pe(e),n}function je(e,t,n,r){var a=t.fullKeyPath,i=t.parent,u=t.value,s=r.onCreateComputed,c=u(),l=c.fn,o=c.options;if(!(i&&!Object.hasOwn(i,a[a.length-1]))){if(typeof s=="function"&&typeof l=="function"){var f=s.call(e,a,l,o);o.scope||(o.scope=O.Current),o.context||(o.context=O.Root),typeof f=="function"&&(l=f)}r.log("Create sync computed: ".concat(a.join(h)));var d=be(a,o.id),y=e.mutate({fn:function(S,W){r.log("Run sync computed for : ".concat(a.join(h)));var L=W.input,$=ee(S,{input:L,computedOptions:o,computedContext:t,storeOptions:r,type:"context"}),g=ee(S,{input:L,computedOptions:o,computedContext:t,storeOptions:r,type:"scope"}),K=o.initial;try{K=l.call($,g)}catch(j){if(typeof o.onError=="function")try{var x;(x=o.onError)===null||x===void 0||x.call($,j)}catch(z){}}D(S,a,K)},desc:d,checkDeadCycle:!1});return t.replaceValue(w(y.snap,a)),n[d]}}function Ae(e,t,n){return Object.assign({value:void 0,loading:!1,timeout:0,retry:0,error:null,progress:0,run:(0,E.markRaw)(_(function(r){return e.runMutateTask({desc:t,extraArgs:r})})),cancel:(0,E.markRaw)(_(function(){console.log("cancel")}))},n)}function Qe(e,t,n,r,a){var i=Ae(e,r,a),u=w(t,n);Object.assign(u,i,a)}function Xe(e,t,n){var r=Object.assign({},n),a=r.max,i=a===void 0?100:a,u=r.min,s=u===void 0?0:u,c=r.value,l=c===void 0?0:c;return e(function(o){return D(o,[].concat(C()(t),["progress"]),l)}),{value:function(f){f>i&&(f=i),f<s&&(f=s),e(function(d){return D(d,[].concat(C()(t),["progress"]),f)})},end:function(){this.value(i)}}}function X(e,t,n){e(function(r){Object.entries(n).forEach(function(a){var i=P()(a,2),u=i[0],s=i[1];D(r,[].concat(C()(t),[u]),s)})})}function Ze(e,t,n){return te.apply(this,arguments)}function te(){return te=Ce()(G()().mark(function e(t,n,r){var a,i,u,s,c,l,o,f,d,y,b,S,W,L,$,g,K,x,j,z,U,T,m;return G()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:a=r.input,i=r.computedOptions,u=r.computedContext,s=r.storeOptions,c=r.computedResultPath,l=r.setState,o=ee(t,{input:a,computedOptions:i,computedContext:u,storeOptions:s,type:"context"}),f=ee(t,{input:a,computedOptions:i,computedContext:u,storeOptions:s,type:"scope"}),d=u.fullKeyPath,y=i.timeout,b=y===void 0?0:y,S=i.retry,W=S===void 0?[0,0]:S,L=Array.isArray(W)?W:[Number(W),0],$=P()(L,2),g=$[0],K=$[1],j=new AbortController,z={onTimeout:function(R){return x=R},getProgressbar:function(R){return Xe(l,d,R)},getSnap:function(R){return(0,E.getSnap)(R,!1)},abortSignal:j.signal,cancel:j.abort},U=!1,X(l,c,{cancel:(0,E.markRaw)(_(function(){return j.abort()}))}),j.signal.addEventListener("abort",function(){U=!0}),T=G()().mark(function N(){var R,B,I,Q,A,H,we,ae,ie,Z,ue,J,Te;return G()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(I=!1,Q=!1,A=m>0,H={},v.prev=2,we=Array.isArray(b)?b:[b,0],ae=P()(we,2),ie=ae[0],Z=ie===void 0?0:ie,ue=ae[1],J=ue===void 0?0:ue,X(l,c,{loading:!0,error:null,retry:m>0?g-m:0,timeout:J>1?J:Z,progress:0}),!U){v.next=7;break}throw new Error("Aborted");case 7:return Z>0&&(R=setTimeout(function(){Q=!0,typeof x=="function"&&x(),I||(clearInterval(B),X(l,c,{loading:!1,error:"TIMEOUT",timeout:0}))},Z),J>1&&(B=setInterval(function(){X(l,c,{timeout:J--}),J===0&&clearInterval(B)},Z/J))),v.next=10,n.call(o,f,z);case 10:Te=v.sent,Q||Object.assign(H,{result:Te,error:null,timeout:0}),v.next=20;break;case 14:if(v.prev=14,v.t0=v.catch(2),I=!0,typeof i.onError=="function")try{i.onError.call(o,v.t0)}catch(ct){}Q||Object.assign(H,{error:ke(v.t0).message,timeout:0}),g>0&&Object.assign(H,{retry:g-m});case 20:return v.prev=20,clearTimeout(R),clearInterval(B),(!I||m==g)&&Object.assign(H,{loading:!1}),!I&&!Q&&Object.assign(H,{error:null}),X(l,c,H),v.finish(20);case 27:if(!I){v.next=31;break}if(!(g>0&&K>0&&m<g)){v.next=31;break}return v.next=31,(0,Ge.g)(K);case 31:case"end":return v.stop()}},N,null,[[2,14,20,27]])}),m=0;case 13:if(!(m<g+1)){k.next=18;break}return k.delegateYield(T(),"t0",15);case 15:m++,k.next=13;break;case 18:case"end":return k.stop()}},e)})),te.apply(this,arguments)}function Se(e,t,n,r){var a=t.fullKeyPath,i=t.parent,u=t.value,s=r.onCreateComputed;if(!(i&&!Object.hasOwn(i,a[a.length-1]))){var c=u(),l=c.fn,o=c.options;if(o.async=!0,typeof s=="function"&&typeof l=="function"){var f=s.call(e,a,l,o);o.scope||(o.scope=O.Current),o.context||(o.context=O.Root),typeof f=="function"&&(l=f)}var d=o.depends,y=o.initial,b=o.toComputedResult,S=b===void 0?"self":b,W=o.immediate,L=o.noReentry,$=L===void 0?!1:L,g=!1,K=(0,Je.d)(S,{self:a,root:[],parent:a.slice(0,a.length-2),current:a.slice(0,a.length-1),Array:S,String:[].concat(C()(a.slice(0,a.length-1)),[String(S).split(h)])},{defaultValue:a}),x=Ie(d);x.length==0&&r.log("async computed <".concat(a.join("."),"> should specify depends"),"warn");var j=be(a,o.id);r.log("Create async computed: ".concat(a.join(h)," (depends=").concat(x.length==0?"None":pe(x),")"));var z=e.mutate({deps:function(T){return Me(x,T,a)},fn:function(T,m){if(m.isFirstCall)if(S=="self")D(T,a,Ae(e,j,{result:y}));else{Qe(e,T,K,j,{result:y});var F=w(T,a.slice(0,a.length-1));delete F[a[a.length-1]]}},task:function(){var U=Ce()(G()().mark(function m(F){var k,N,R,B,I;return G()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(k=F.draft,N=F.setState,R=F.input,B=F.extraArgs,r.log("Run async computed for : ".concat(a.join(h))),I=Object.assign({},o,B),!($&&g&&r.debug)){A.next=6;break}return r.log("Reentry async computed: ".concat(a.join(h)),"warn"),A.abrupt("return");case 6:return g=!0,A.prev=7,A.next=10,Ze(k,l,{input:R,computedResultPath:K,computedOptions:I,computedContext:t,storeOptions:r,setState:N});case 10:return A.abrupt("return",A.sent);case 11:return A.prev=11,g=!1,A.finish(11);case 14:case"end":return A.stop()}},m,null,[[7,,11,14]])}));function T(m){return U.apply(this,arguments)}return T}(),immediate:W,desc:j,checkDeadCycle:!1});return t.replaceValue(w(z.snap,a)),n[j]=z,n[j]}}function xe(e){var t=e.stateCtx,n=e.params,r=e.storeOptions,a=e.extendObjects,i=n.value;i.__COMPUTED__=="async"?Se(t,n,a.computedObjects,r):i.__COMPUTED__=="sync"?je(t,n,a.computedObjects,r):(0,Oe.$)(i)?(n.value=function(){return{fn:i,options:{depends:[],initial:void 0,immediate:!0,context:r.computedThis}}},Se(t,n,a.computedObjects,r)):(n.value=function(){return{fn:i,options:{initial:void 0,context:r.computedThis}}},je(t,n,a.computedObjects,r))}var qe=ge()(function e(){me()(this,e)}),_e=p(71698),et=p.n(_e),tt=p(79862),Y=p.n(tt),nt=p(70079);function rt(e,t,n){var r=Object.assign({on:t},n),a=function(){return{fn:e,options:r}};return a.__COMPUTED__="watch",a}var at=function(){function e(t){me()(this,e),Y()(this,"listeners",new Map),Y()(this,"_off",function(){}),Y()(this,"_wacher",{off:function(){}}),Y()(this,"_enable",!0),Y()(this,"cache",new Map),Y()(this,"listenerCache",void 0),this.options=t,this.createWacher()}return ge()(e,[{key:"stateCtx",get:function(){return this.options.stateCtx}},{key:"storeOptions",get:function(){return this.options.storeOptions}},{key:"extendObjects",get:function(){return this.options.extendObjects}},{key:"enable",get:function(){return this._enable},set:function(n){this._enable=n}},{key:"createWacher",value:function(){var n=this,r=(0,E.watch)(function(i){var u=i.triggerReasons,s=u.map(function(c){return c.keyPath});s.forEach(function(c){if(!n.hitListenerFromCache(c)){var l=et()(n.listeners),o;try{for(l.s();!(o=l.n()).done;){var f=P()(o.value,2),d=f[0],y=f[1];try{n.executeListener(c,JSON.parse(d),y)}catch(b){console.warn("Error while run watchLisenter("+c+"->"+d+")",b.stack)}}}catch(b){l.e(b)}finally{l.f()}}})},function(){return[n.stateCtx.state]}),a=r.unwatch;this._wacher={off:a}}},{key:"addListenerToCache",value:function(n,r,a,i){var u=this.getValueKey(n);this.cache.has(u)||this.cache.set(u,[]);var s=this.cache.get(u);s.push([r,a,i])}},{key:"getValueKey",value:function(n){return JSON.stringify(n)}},{key:"hitListenerFromCache",value:function(n){var r=this,a=this.getValueKey(n);if(this.cache.has(a)){var i=w(this.stateCtx.state,n),u=this.cache.get(a);return u.forEach(function(s){var c=P()(s,3),l=c[0],o=c[1],f=c[2],d=o(i,f);d!==void 0&&r.stateCtx.setState(function(y){D(y,l,d)})}),u.length>0}return!1}},{key:"getListenerCache",value:function(n){this.listenerCache||(this.listenerCache=new Map);var r=n.join(".");return this.listenerCache.has(r)||this.listenerCache.set(r,{}),this.listenerCache.get(r)}},{key:"executeListener",value:function(n,r,a){var i=this,u=a.fn,s=a.options,c=s.on;if(typeof c=="function"){var l=w(this.stateCtx.state,n);try{if(c(n,l)==!0){var o={getSelfValue:function(){return w((0,E.getSnap)(i.stateCtx.state),r)},getCache:function(){return i.getListenerCache(r)},srcPath:n,selfPath:r};this.addListenerToCache(n,r,u,o);var f=u(l,o);f!==void 0&&this.stateCtx.setState(function(d){D(d,r,f)})}}catch(d){this.storeOptions.log("Error while run watchLisenter(".concat(n,"->").concat(r,")")+d.stack,"error")}}}},{key:"off",value:function(){this._off()}},{key:"on",value:function(){}},{key:"add",value:function(n,r){var a=r.fullKeyPath;this.listeners.set(this.getValueKey(a),{fn:n.fn,options:n.options})}},{key:"remove",value:function(n){this.listeners.delete(this.getValueKey(n))}}]),e}(),ne;function Ee(e){var t=e.stateCtx,n=e.params,r=e.storeOptions,a=e.extendObjects;ne||(ne=new at({stateCtx:t,storeOptions:r,extendObjects:a})),r.log("install watch for <".concat(n.fullKeyPath.join(h),">"));var i=n.value();ne.add(i,n),t.setState(function(u){D(u,n.fullKeyPath,i.options.initial)})}function re(e){return function(t,n){var r=(0,E.watch)(function(i){var u=i.triggerReasons,s=u.map(function(c){return c.keyPath});t(s)},function(){return n==null?void 0:n.map(function(i){return V(e.state,i)})}),a=r.unwatch;return a}}function Re(e){return function(t,n){(0,nt.useEffect)(function(){return re(e)(t,n)},[])}}function it(e,t,n,r){var a=e.fullKeyPath,i=e.value,u=a.join(".");if(typeof i=="function"&&!n._replacedKey[u]&&!fe(i)){n._replacedKey[u]=!0;var s={stateCtx:t,extendObjects:n,storeOptions:r,params:e};i.__COMPUTED__=="watch"?Ee(s):xe(s)}}var O=function(e){return e.Root="root",e.Current="current",e.Parent="parent",e.Depends="depends",e.Self="self",e}({});function ut(e){return function(t,n){var r=e.useState;if(t==null)return r();var a=r(),i=P()(a,2),u=i[0],s=i[1],c=t(u),l=s;return typeof n=="function"&&(l=function(f){s(function(d){n.call(d,d,f)})}),[c,l]}}function ot(e,t){var n=Object.assign({id:Math.random().toString(16).substring(2),debug:!0,computedThis:O.Root,computedScope:O.Current,singleton:!0},t);n.log=function(){n.debug&&Ke.apply(void 0,arguments)};var r=n.singleton?e:(0,$e.I)(e),a={computedObjects:{},watchObjects:{},_replacedKey:{}};return(0,E.model)(function(i){var u=i.sharex(r.state,{stopArrDep:!1,moduleName:n.id,onRead:function(o){it(o,u,a,n)}}),s=he(r.actions,u,i,n),c=ut(u);return se()(se()({actions:s},u),{},{state:u.reactive,useState:c,watch:re(u),useWatch:Re(u)},a)})}},2109:function(oe){function M(p){var q=new Error("Cannot find module '"+p+"'");throw q.code="MODULE_NOT_FOUND",q}M.keys=function(){return[]},M.resolve=M,M.id=2109,oe.exports=M}}]);
