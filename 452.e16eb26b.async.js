(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[452],{57004:function(ie,k,p){"use strict";p.r(k),p.d(k,{$:function(){return R.$},ComputedObjects:function(){return je},ComputedScopeRef:function(){return b},OBJECT_PATH_DELIMITER:function(){return j},StoreWatcher:function(){return Ee},computed:function(){return _e},createAction:function(){return he},createActions:function(){return ve},createStore:function(){return pt},createUseWatch:function(){return xe},createWatch:function(){return ne},getSnap:function(){return R.getSnap},getVal:function(){return T},getValueByPath:function(){return K},installComputed:function(){return Ae},installWatch:function(){return Re},isIncludePath:function(){return $e},isSkipComputed:function(){return ce},markRaw:function(){return R.markRaw},setVal:function(){return M},skipComputed:function(){return q},watch:function(){return ct}});var Z=p(39114),oe=p.n(Z),De=p(70125),F=p.n(De),R=p(14102),Ke=p(79664),C=p.n(Ke),j="/";function K(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:j,r=[];try{return typeof n=="function"&&(n=n.call(e,e)),r=Array.isArray(n)?n:typeof n=="string"?n.split(t):[],r.length>0?T(e,r):e}catch(a){return e}}var se=Symbol("SKIP_COMPUTED");function q(e){return e[se]=!0,e}function ce(e){return e[se]===!0}function Me(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",t=typeof e=="function"?e():e instanceof Error?e.stack:e;try{var r;(r=console)[n].apply(r,["[@speedform/reactive] "].concat(C()(Array.isArray(t)?t:[t])))}catch(a){}}function le(e,n){if(!Array.isArray(e))throw new Error("path must be an array");return n==="self"?e:n==="root"?[]:n==="parent"?e.slice(0,-2):n==="current"?e.slice(0,-1):typeof n=="string"?n.startsWith("./")?[].concat(C()(e.slice(0,-1)),C()(n.slice(2).split(j))):n.startsWith("../")?le(e.slice(0,-1),n.slice(3)):(n.includes(".")&&(console.warn('[@speedform/reactive] The dependency path uses "/" as the separator, and will automatically convert'),n=n.replaceAll(".","/")),[].concat(C()(e.slice(0,-1)),C()(n.split(j)))):Array.isArray(n)?n:e}function fe(e){return e.map(function(n){return Array.isArray(n)?n.join("."):n}).join("_")}function Ie(e){return e instanceof Error?e:new Error(e)}function ke(e,n){return(e||[]).map(function(t){return Array.isArray(t)?t:typeof t=="string"?t.startsWith("./")||t.startsWith("../")?t:t.includes(j)?t.split(j):t.split("."):[]})}function We(e,n,t){return e.map(function(r){return T(n,le(t,r))})}function $e(e,n){return e.length>n.length?!1:e.every(function(t,r){return t===n[r]})}function pe(e){return toString.call(e)==="[object Map]"}function de(e,n){var t=e.get(n);if(t!==void 0)return t;var r=e.get(Number(n)||n);if(r!==void 0)return r}function T(e,n){if(n.length===0)return e;var t,r=e;return n.forEach(function(a){t=pe(r)?de(r,a):r[a],r=t}),t}function M(e,n,t){var r=e,a=n.length-1;n.forEach(function(u,i){var c=pe(r);if(i===a){c?r.set(u,t):r[u]=t;return}var s=c?de(r,u):r[u];r=s})}function Le(e){return typeof e=="function"&&e.then&&typeof e.then=="function"||e&&e instanceof Promise}function ve(e,n,t,r){return Object.entries(e||{}).reduce(function(a,u){var i=F()(u,2),c=i[0],s=i[1];return a[c]=he(s,n.setState,t),a},{})}function he(e,n,t){var r=function(u){typeof u=="function"&&n(function(i){u(i)})};return function(){var a=e.apply(void 0,arguments);if(Le(a))return a.then(function(u){r(u)});r(a)}}var Pe=p(77937),ye=p.n(Pe),Ue=p(41176),ge=p.n(Ue),Ne=p(65523),Fe=p.n(Ne),Ge=p(7122),Be=p.n(Ge),He=p(19108),Je=p.n(He),Ye=p(90393),W=p.n(Ye),ze=p(7392),ee=p.n(ze),Qe=p(26851),Xe=p.n(Qe),me=p(96820),Ze=p(71660),qe=p(45727);function _(e,n){var t=n.input,r=n.type,a=n.computedContext,u=n.computedOptions,i=n.storeOptions,c=e;if(typeof i.onComputedContext=="function"){var s=i.onComputedContext.call(e,e,{type:r,valuePath:a.fullKeyPath});s!==void 0&&(c=s)}var l=a.keyPath,o=a.fullKeyPath,f=et(e,r=="context"?u.context:u.scope,r=="context"?i.computedThis:i.computedScope);try{if(f===b.Current)return K(e,l);if(f===b.Parent)return K(e,o.slice(0,o.length-2));if(f===b.Root)return c;if(f===b.Depends)return Array.isArray(t)?t:[];if(typeof f=="string")return K(e,[].concat(C()(l),C()(f.split(j))));if(Array.isArray(f))if(f.length>0&&f[0].startsWith("@")){var d=K(e,[].concat(C()(f[0].substring(1).split(j)),C()(f.slice(1))));return K(e,d)}else return K(e,f);else if(typeof f=="number"){var O=f>o.length-2?o.length-f-1:0;return K(e,o.slice(0,O))}else return e}catch(g){return e}}function _e(e,n,t){if(typeof e!="function")throw new Error("getter must be a function");var r=[],a={async:!1,enable:!0,timeout:0,depends:[],toComputedResult:b.Self,immediate:!0};if(arguments.length==1)r=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))r=arguments[1];else if(Xe()(arguments[1])=="object")Object.assign(a,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(r=arguments[1],Object.assign(a,arguments[2]));var u=a.async===!0||(0,me.$)(e)||arguments.length>=2&&Array.isArray(n);a.async=u,a.depends=r;var i=function(){return{fn:e,options:a}};return i.__COMPUTED__=u?"async":"sync",i}function et(e,n,t){var r=n==null?t:n;if(typeof r=="function")try{r=r.call(e,e)}catch(a){}return r==null?t==null?b.Root:t:r}function Ce(e,n){var t="";return typeof n=="function"?t=n(e):typeof n=="string"?t=n:t=fe(e),t}function Oe(e,n,t,r){var a=n.fullKeyPath,u=n.parent,i=n.value,c=r.onCreateComputed,s=i(),l=s.fn,o=s.options;if(!(u&&!Object.hasOwn(u,a[a.length-1]))){if(typeof c=="function"&&typeof l=="function"){var f=c.call(e,a,l,o);o.scope||(o.scope=b.Current),o.context||(o.context=b.Root),typeof f=="function"&&(l=f)}var d=a.join(j);r.log("Create sync computed: ".concat(d));var O=Ce(a,o.id),g=e.mutate({fn:function(E,G){if(!o.enable){r.log("Async computed <".concat(d,"> is disabled"),"warn");return}r.log("Run sync computed for : ".concat(d));var L=G.input,m=_(E,{input:L,computedOptions:o,computedContext:n,storeOptions:r,type:"context"}),P=_(E,{input:L,computedOptions:o,computedContext:n,storeOptions:r,type:"scope"}),x=o.initial;try{x=l.call(m,P)}catch(D){if(typeof o.onError=="function")try{var S;(S=o.onError)===null||S===void 0||S.call(m,D)}catch(U){}}M(E,a,x)},desc:O,checkDeadCycle:!1});n.replaceValue(T(g.snap,a)),t.set(d,{mutate:g,group:o.group,async:!1,run:function(E){return g.run(E)}})}}function be(e,n,t){return Object.assign({value:void 0,loading:!1,timeout:0,retry:0,error:null,progress:0,run:(0,R.markRaw)(q(function(r){return e.runMutateTask({desc:n,extraArgs:r})})),cancel:(0,R.markRaw)(q(function(){console.log("cancel")}))},t)}function tt(e,n,t,r,a){var u=be(e,r,a),i=T(n,t);Object.assign(i,u,a)}function nt(e,n,t){var r=Object.assign({},t),a=r.max,u=a===void 0?100:a,i=r.min,c=i===void 0?0:i,s=r.value,l=s===void 0?0:s;return e(function(o){return M(o,[].concat(C()(n),["progress"]),l)}),{value:function(f){f>u&&(f=u),f<c&&(f=c),e(function(d){return M(d,[].concat(C()(n),["progress"]),f)})},end:function(){this.value(u)}}}function z(e,n,t){e(function(r){Object.entries(t).forEach(function(a){var u=F()(a,2),i=u[0],c=u[1];M(r,[].concat(C()(n),[i]),c)})})}function rt(e,n,t){return te.apply(this,arguments)}function te(){return te=ee()(W()().mark(function e(n,t,r){var a,u,i,c,s,l,o,f,d,O,g,V,E,G,L,m,P,x,S,D,U,B,h;return W()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:a=r.input,u=r.computedOptions,i=r.computedContext,c=r.storeOptions,s=r.computedResultPath,l=r.setState,o=_(n,{input:a,computedOptions:u,computedContext:i,storeOptions:c,type:"context"}),f=_(n,{input:a,computedOptions:u,computedContext:i,storeOptions:c,type:"scope"}),d=i.fullKeyPath,O=u.timeout,g=O===void 0?0:O,V=u.retry,E=V===void 0?[0,0]:V,G=Array.isArray(E)?E:[Number(E),0],L=F()(G,2),m=L[0],P=L[1],S=new AbortController,D={onTimeout:function(w){return x=w},getProgressbar:function(w){return nt(l,d,w)},getSnap:function(w){return(0,R.getSnap)(w,!1)},abortSignal:S.signal,cancel:S.abort},U=!1,z(l,s,{cancel:(0,R.markRaw)(q(function(){return S.abort()}))}),S.signal.addEventListener("abort",function(){U=!0}),B=W()().mark(function H(){var w,J,I,N,we,v,Te,re,ae,X,ue,Y,Ve;return W()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(I=!1,N=!1,we=h>0,v={},y.prev=2,Te=Array.isArray(g)?g:[g,0],re=F()(Te,2),ae=re[0],X=ae===void 0?0:ae,ue=re[1],Y=ue===void 0?0:ue,z(l,s,{loading:!0,error:null,retry:h>0?m-h:0,timeout:Y>1?Y:X,progress:0}),!U){y.next=7;break}throw new Error("Aborted");case 7:return X>0&&(w=setTimeout(function(){N=!0,typeof x=="function"&&x(),I||(clearInterval(J),z(l,s,{loading:!1,error:"TIMEOUT",timeout:0}))},X),Y>1&&(J=setInterval(function(){z(l,s,{timeout:Y--}),Y===0&&clearInterval(J)},X/Y))),y.next=10,t.call(o,f,D);case 10:Ve=y.sent,N||Object.assign(v,{result:Ve,error:null,timeout:0}),y.next=20;break;case 14:if(y.prev=14,y.t0=y.catch(2),I=!0,typeof u.onError=="function")try{u.onError.call(o,y.t0)}catch(vt){}N||Object.assign(v,{error:Ie(y.t0).message,timeout:0}),m>0&&Object.assign(v,{retry:m-h});case 20:return y.prev=20,clearTimeout(w),clearInterval(J),(!I||h==m)&&Object.assign(v,{loading:!1}),!I&&!N&&Object.assign(v,{error:null}),z(l,s,v),y.finish(20);case 27:if(!I){y.next=31;break}if(!(m>0&&P>0&&h<m)){y.next=31;break}return y.next=31,(0,qe.g)(P);case 31:case"end":return y.stop()}},H,null,[[2,14,20,27]])}),h=0;case 13:if(!(h<m+1)){A.next=18;break}return A.delegateYield(B(),"t0",15);case 15:h++,A.next=13;break;case 18:case"end":return A.stop()}},e)})),te.apply(this,arguments)}function Se(e,n,t,r){var a=n.fullKeyPath,u=n.parent,i=n.value,c=r.onCreateComputed;if(!(u&&!Object.hasOwn(u,a[a.length-1]))){var s=i(),l=s.fn,o=s.options;if(o.async=!0,typeof c=="function"&&typeof l=="function"){var f=c.call(e,a,l,o);o.scope||(o.scope=b.Current),o.context||(o.context=b.Root),typeof f=="function"&&(l=f)}var d=o.depends,O=o.initial,g=o.toComputedResult,V=g===void 0?"self":g,E=o.immediate,G=o.noReentry,L=G===void 0?!1:G,m=!1,P=(0,Ze.d)(V,{self:a,root:[],parent:a.slice(0,a.length-2),current:a.slice(0,a.length-1),Array:V,String:[].concat(C()(a.slice(0,a.length-1)),[String(V).split(j)])},{defaultValue:a}),x=ke(d);x.length==0&&r.log("async computed <".concat(a.join("."),"> should specify depends"),"warn");var S=Ce(a,o.id),D=a.join(j);r.log("Create async computed: ".concat(D," (depends=").concat(x.length==0?"None":fe(x),")"));var U=e.mutate({deps:function(h){return We(x,h,a)},fn:function(h,Q){if(Q.isFirstCall)if(V=="self")M(h,a,be(e,S,{result:O}));else{tt(e,h,P,S,{result:O});var A=T(h,a.slice(0,a.length-1));delete A[a[a.length-1]]}},task:function(){var B=ee()(W()().mark(function Q(A){var H,w,J,I,N;return W()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(H=A.draft,w=A.setState,J=A.input,I=A.extraArgs,o.enable){v.next=4;break}return r.log("Async computed <".concat(D,"> is disabled"),"warn"),v.abrupt("return");case 4:if(r.log("Run async computed for : ".concat(D)),N=Object.assign({},o,I),!(L&&m&&r.debug)){v.next=9;break}return r.log("Reentry async computed: ".concat(D),"warn"),v.abrupt("return");case 9:return m=!0,v.prev=10,v.next=13,rt(H,l,{input:J,computedResultPath:P,computedOptions:N,computedContext:n,storeOptions:r,setState:w});case 13:return v.abrupt("return",v.sent);case 14:return v.prev=14,m=!1,v.finish(14);case 17:case"end":return v.stop()}},Q,null,[[10,,14,17]])}));function h(Q){return B.apply(this,arguments)}return h}(),immediate:E,desc:S,checkDeadCycle:!1});n.replaceValue(T(U.snap,a)),t.set(D,{mutate:U,group:o.group,async:!0,run:function(h){return U.runTask(h)}})}}function Ae(e){var n=e.stateCtx,t=e.params,r=e.storeOptions,a=e.extendObjects,u=t.value;u.__COMPUTED__=="async"?Se(n,t,a.computedObjects,r):u.__COMPUTED__=="sync"?Oe(n,t,a.computedObjects,r):(0,me.$)(u)?(t.value=function(){return{fn:u,options:{depends:[],initial:void 0,immediate:!0,enable:!0,context:r.computedThis}}},Se(n,t,a.computedObjects,r)):(t.value=function(){return{fn:u,options:{initial:void 0,enable:!0,context:r.computedThis}}},Oe(n,t,a.computedObjects,r))}var je=function(e){Fe()(t,e);var n=Be()(t);function t(){return ye()(this,t),n.apply(this,arguments)}return ge()(t,[{key:"runGroup",value:function(){var r=ee()(W()().mark(function u(i){return W()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Promise.all(C()(this.values()).filter(function(l){return l.group==i}).map(function(l){return l.async?l.mutate.runTask():l.mutate.run()})));case 1:case"end":return s.stop()}},u,this)}));function a(u){return r.apply(this,arguments)}return a}()}]),t}(Je()(Map)),at=p(20458),ut=p(71698),it=p.n(ut),ot=p(79862),$=p.n(ot),st=p(70079);function ct(e,n,t){var r=Object.assign({on:n},t),a=function(){return{fn:e,options:r}};return a.__COMPUTED__="watch",a}var Ee=function(){function e(n){ye()(this,e),$()(this,"listeners",new Map),$()(this,"_off",function(){}),$()(this,"_wacher",{off:function(){}}),$()(this,"_ctx",void 0),$()(this,"_storeOptions",void 0),$()(this,"_enable",!0),$()(this,"cache",new Map),$()(this,"listenerCache",void 0),this._storeOptions=n}return ge()(e,[{key:"bind",value:function(t){this._ctx||(this._ctx=t),this.createWacher()}},{key:"enable",get:function(){return this._enable},set:function(t){this._enable=t}},{key:"createWacher",value:function(){var t=this,r=(0,R.watch)(function(u){var i=u.triggerReasons,c=i.map(function(s){return s.keyPath});c.forEach(function(s){if(!t.hitListenerFromCache(s)){var l=it()(t.listeners),o;try{for(l.s();!(o=l.n()).done;){var f=F()(o.value,2),d=f[0],O=f[1];try{t.executeListener(s,JSON.parse(d),O)}catch(g){console.warn("Error while run watchLisenter("+s+"->"+d+")",g.stack)}}}catch(g){l.e(g)}finally{l.f()}}})},function(){return[t._ctx.state]}),a=r.unwatch;this._wacher={off:a}}},{key:"addListenerToCache",value:function(t,r,a,u){var i=this.getValueKey(t);this.cache.has(i)||this.cache.set(i,[]);var c=this.cache.get(i);c.push([r,a,u])}},{key:"getValueKey",value:function(t){return JSON.stringify(t)}},{key:"hitListenerFromCache",value:function(t){var r=this,a=this.getValueKey(t);if(this.cache.has(a)){var u=T(this._ctx.state,t),i=this.cache.get(a);return i.forEach(function(c){var s=F()(c,3),l=s[0],o=s[1],f=s[2],d=o(u,f);d!==void 0&&r._ctx.setState(function(O){M(O,l,d)})}),i.length>0}return!1}},{key:"getListenerCache",value:function(t){this.listenerCache||(this.listenerCache=new Map);var r=t.join(".");return this.listenerCache.has(r)||this.listenerCache.set(r,{}),this.listenerCache.get(r)}},{key:"executeListener",value:function(t,r,a){var u=this,i=a.fn,c=a.options,s=c.on;if(typeof s=="function"){var l=T(this._ctx.state,t);try{if(s(t,l)==!0){var o={getSelfValue:function(){return T((0,R.getSnap)(u._ctx.state),r)},getCache:function(){return u.getListenerCache(r)},srcPath:t,selfPath:r};this.addListenerToCache(t,r,i,o);var f=i(l,o);f!==void 0&&this._ctx.setState(function(d){M(d,r,f)})}}catch(d){this._storeOptions.log("Error while run watchLisenter(".concat(t,"->").concat(r,")")+d.stack,"error")}}}},{key:"off",value:function(){this._off()}},{key:"on",value:function(){}},{key:"add",value:function(t,r){var a=r.fullKeyPath;this.listeners.set(this.getValueKey(a),{fn:t.fn,options:t.options})}},{key:"remove",value:function(t){this.listeners.delete(this.getValueKey(t))}}]),e}();function Re(e){var n=e.stateCtx,t=e.params,r=e.storeOptions,a=e.extendObjects,u=a.watchObjects;u==null||u.bind(n),r.log("install watch for <".concat(t.fullKeyPath.join(j),">"));var i=t.value();u.add(i,t),n.setState(function(c){M(c,t.fullKeyPath,i.options.initial)})}function ne(e){return function(n,t){var r=(0,R.watch)(function(u){var i=u.triggerReasons,c=i.map(function(s){return s.keyPath});n(c)},function(){return t==null?void 0:t.map(function(u){return K(e.state,u)})}),a=r.unwatch;return a}}function xe(e){return function(n,t){(0,st.useEffect)(function(){return ne(e)(n,t)},[])}}function lt(e,n,t,r){var a=e.fullKeyPath,u=e.value,i=a.join(".");if(typeof u=="function"&&!t._replacedKey[i]&&!ce(u)){t._replacedKey[i]=!0;var c={stateCtx:n,extendObjects:t,storeOptions:r,params:e};u.__COMPUTED__=="watch"?Re(c):Ae(c)}}var b=function(e){return e.Root="root",e.Current="current",e.Parent="parent",e.Depends="depends",e.Self="self",e}({});function ft(e){return function(n,t){var r=e.useState;if(n==null)return r();var a=r(),u=F()(a,2),i=u[0],c=u[1],s=n(i),l=c;return typeof t=="function"&&(l=function(f){c(function(d){t.call(d,d,f)})}),[s,l]}}function pt(e,n){var t=Object.assign({id:Math.random().toString(16).substring(2),debug:!0,computedThis:b.Root,computedScope:b.Current,singleton:!0},n);t.log=function(){t.debug&&Me.apply(void 0,arguments)};var r=t.singleton?e:(0,at.I)(e),a={computedObjects:new je,watchObjects:new Ee(t),_replacedKey:{}};return(0,R.model)(function(u){var i=u.sharex(r.state,{stopArrDep:!1,moduleName:t.id,onRead:function(o){lt(o,i,a,t)}}),c=ve(r.actions,i,u,t),s=ft(i);return oe()(oe()({actions:c},i),{},{state:i.reactive,useState:s,watch:ne(i),useWatch:xe(i)},a)})}},2109:function(ie){function k(p){var Z=new Error("Cannot find module '"+p+"'");throw Z.code="MODULE_NOT_FOUND",Z}k.keys=function(){return[]},k.resolve=k,k.id=2109,ie.exports=k}}]);
