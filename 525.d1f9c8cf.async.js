(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[525],{11528:function(mt,I,f){"use strict";f.r(I),f.d(I,{$:function(){return j.$},ComputedObjects:function(){return Tt},ComputedScopeRef:function(){return A},OBJECT_PATH_DELIMITER:function(){return g},SKIP_COMPUTED:function(){return at},WatchObject:function(){return Rt},WatchObjects:function(){return Dt},computed:function(){return kt},createAsyncComputedMutate:function(){return ot},createAsyncComputedObject:function(){return _},createComputedMutate:function(){return ut},createObject:function(){return j.share},createStore:function(){return we},createUseWatch:function(){return It},createWatch:function(){return pt},getSnap:function(){return j.getSnap},getVal:function(){return M},getValueByPath:function(){return k},installComputed:function(){return ct},installWatch:function(){return vt},isIncludePath:function(){return Bt},isSkipComputed:function(){return Ct},markRaw:function(){return j.markRaw},setAsyncComputedObject:function(){return Et},setVal:function(){return P},skipComputed:function(){return q},watch:function(){return ye}});var A=function(t){return t.Root="root",t.Current="current",t.Parent="parent",t.Depends="depends",t.Self="self",t}({}),xt=f(70125),N=f.n(xt);function R(t){return(t||["ROOT"]).map(function(e){return Array.isArray(e)?e.join("."):e}).join("_")}function L(t,e){var n="";return typeof e=="function"?n=e(t):typeof e=="string"?n=e:n=R(t),n}function Ut(t){return t instanceof Error?t:new Error(t)}var g=".",at=Symbol("SKIP_COMPUTED");function Ct(t){return t[at]===!0}var Nt=f(79664),O=f.n(Nt);function it(t,e,n){if(!Array.isArray(t))throw new Error("curPath must be an array");return e==="self"?t:e==="root"?[]:e==="parent"?t.slice(0,-2):e==="current"?t.slice(0,-1):typeof e=="string"?e.startsWith("./")?[].concat(O()(t.slice(0,-1)),O()(e.slice(2).split(g))):e.startsWith("../")?it(t.slice(0,-1),e.slice(3),!0):e.startsWith("/")?(e=e.replace(/^(\/)*/,""),O()(e.split(g))):n?[].concat(O()(t.slice(0,-1)),O()(e.split(g))):O()(e.split(g)):Array.isArray(e)?e:t}function bt(t,e){var n=t.get(e);if(n!==void 0)return n;var r=t.get(Number(e)||e);if(r!==void 0)return r}function St(t){return toString.call(t)==="[object Map]"}function M(t,e){if(e.length===0)return t;var n,r=t;return e.forEach(function(a){n=St(r)?bt(r,a):r[a],r=n}),n}function Gt(t,e,n){return t.map(function(r){return M(e,it(n,r))})}function Kt(t){return(t||[]).map(function(e){return Array.isArray(e)?e:typeof e=="string"?e.startsWith("./")||e.startsWith("../")?e:e.includes(g)?e.split(g):e.split("."):[]})}var Ht=f(26851),Ft=f.n(Ht);function Me(t){return _typeof(t)=="object"&&t.hasOwnProperty("__COMPUTED__")&&["async","sync"].includes(t.__COMPUTED__)&&t.hasOwnProperty("fn")&&typeof t.fn=="function"&&t.hasOwnProperty("options")&&_typeof(t.options)=="object"}function Pe(t){return _typeof(t)=="object"&&["result","loading","timeout","retry","run"].every(function(e){return t.hasOwnProperty(e)})}function Bt(t,e){return t.length>e.length?!1:t.every(function(n,r){return n===e[r]})}function Lt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",n=typeof t=="function"?t():t instanceof Error?t.stack:t;try{var r;(r=console)[e].apply(r,["[@speedform/reactive] "].concat(O()(Array.isArray(n)?n:[n])))}catch(a){}}function P(t,e,n){var r=t,a=e.length-1;e.forEach(function(i,s){var u=St(r);if(s===a){u?r.set(i,n):r[i]=n;return}var o=u?bt(r,i):r[i];r=o})}function q(t){return t[at]=!0,t}function k(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:g,r=[];try{return typeof e=="function"&&(e=e.call(t,t)),r=Array.isArray(e)?e:typeof e=="string"?e.split(n):[],r.length>0?M(t,r):t}catch(a){return t}}function zt(t,e,n){var r=e==null?n:e;if(typeof r=="function")try{r=r.call(t,t)}catch(a){}return r==null?n==null?A.Root:n:r}function Jt(t,e){var n=e.dependValues,r=e.valuePath,a=e.funcOptions,i=e.storeOptions,s=e.computedType,u=t;if(typeof i.onComputedContext=="function"){var o=i.onComputedContext.call(t,t,{computedType:s,valuePath:r});o!==void 0&&(u=o)}var p=r.length>=1?r.slice(0,r.length-1):[],c=zt(t,a.scope,i.scope&&i.scope(s));try{if(c===A.Current)return k(t,p);if(c===A.Parent)return k(t,r.slice(0,r.length-2));if(c===A.Root)return u;if(c===A.Depends)return Array.isArray(n)?n.map(function(v){return typeof v=="function"?v():v}):[];if(typeof c=="string")return k(t,it(r,c));if(Array.isArray(c))if(c.length>0&&c[0].startsWith("@")){var l=k(t,[].concat(O()(c[0].substring(1).split(g)),O()(c.slice(1))));return k(t,l)}else return k(t,c);else if(typeof c=="number"){var d=c>r.length-2?r.length-c-1:0;return k(t,r.slice(0,d))}else return t}catch(v){return t}}function Ot(t,e,n,r){var a=n.valuePath,i=n.dependValues;return Jt(e,{dependValues:i,valuePath:a,funcOptions:r,storeOptions:t.options,computedType:"Computed"})}var Yt=f(77937),G=f.n(Yt),Zt=f(41176),K=f.n(Zt),Qt=f(79862),D=f.n(Qt),jt=function(){function t(e,n,r){G()(this,t),D()(this,"options",void 0),this.store=e,this.selfState=n,this.options=Object.assign({},r)}return K()(t,[{key:"id",get:function(){return L(this.options.selfPath,this.options.id)}},{key:"enable",get:function(){return this.options.enable},set:function(n){this.options.enable=n}},{key:"group",get:function(){return this.options.group}},{key:"async",get:function(){return this.options.async}},{key:"run",value:function(n){var r;return(r=this.store.options.reactiveable)===null||r===void 0?void 0:r.runComputed(this.id,n)}},{key:"cancel",value:function(){}}]),t}(),At=f(44340);function wt(t,e,n,r){var a=n.options.onCreateComputed;if(typeof a=="function"&&typeof e=="function"){var i=a.call(n,t,e,r);r.scope||(r.scope=A.Current),r.context||(r.context=A.Root),typeof i=="function"&&(e=i)}}function Xt(t,e){var n=e.id||L(t,e.id),r=e.selfState?n:t.join(g);return[n,r]}function qt(t,e){var n=t.path,r=e.selfState,a=e.toComputedResult,i=a===void 0?"self":a;return r?[n]:(0,At.d)(i,{self:n,root:[],parent:n.slice(0,n.length-2),current:n.slice(0,n.length-1),Array:i,String:[].concat(O()(n.slice(0,n.length-1)),[String(i).split(g)])},{defaultValue:n})}function _t(t,e,n){var r=t.valuePath,a=t.id,i=t.name,s=t.resultPath,u=t.getter,o=e.selfState;n.reactiveable.createComputed({onComputed:function(c){var l=c.draft,d=c.values;if(!e.enable){n.options.log("Sync computed <".concat(i,"> is disabled"),"warn");return}n.options.log("Run sync computed for : ".concat(i)),t.dependValues=d;var v=o||l,y=o?l:Ot(n,l,t,e),h=e.initial;try{h=u.call(v,y)}catch(w){if(typeof e.onError=="function")try{var b;(b=e.onError)===null||b===void 0||b.call(v,w)}catch(m){}}o?o.setState(function(w){P(w,s,h)}):P(l,s,h)},options:e})}function ut(t,e){var n=t.path,r=t.parent,a=t.value;if(!(r&&!Object.hasOwn(r,n[n.length-1]))){var i=a(),s=i.getter,u=i.options;wt(n,s,e,u);var o=u.selfState,p=qt(t,u),c=Xt(n,u),l=N()(c,2),d=l[0],v=l[1];e.options.log("Create sync computed: ".concat(v));var y={id:u.id||L(n,u.id),name:o?d:n.join(g),resultPath:p,isMutateRunning:!1,dependValues:[],valuePath:n,deps:[],getter:s};_t(y,u,e),o||t.replaceValue(M(e.state,n));var h=new jt(e,o,u);return e.computedObjects.set(v,h),h}}var te=f(90393),E=f.n(te),ee=f(7392),z=f.n(ee),j=f(67687),ne=f(10346);function _(t,e,n){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:(0,j.markRaw)(q(function(r){return t.reactiveable.runComputed(e,Object.assign({},r))})),cancel:(0,j.markRaw)(q(function(){console.log("cancel")}))},n)}function Et(t,e,n,r,a){var i=_(t,r,a),s=M(e,n);Object.assign(s,i,a)}function re(t,e,n){var r=Object.assign({},n),a=r.max,i=a===void 0?100:a,s=r.min,u=s===void 0?0:s,o=r.value,p=o===void 0?0:o;return t(function(c){return P(c,[].concat(O()(e),["progress"]),p)}),{value:function(l){l>i&&(l=i),l<u&&(l=u),t(function(d){return P(d,[].concat(O()(e),["progress"]),l)})},end:function(){this.value(i)}}}function J(t,e,n){t(function(r){Object.entries(n).forEach(function(a){var i=N()(a,2),s=i[0],u=i[1];P(r,[].concat(O()(e),[s]),u)})})}function ae(t,e,n,r){return st.apply(this,arguments)}function st(){return st=z()(E()().mark(function t(e,n,r,a){var i,s,u,o,p,c,l,d,v,y,h,b,w,m,H,T,$,Z,et,S,V;return E()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:i=n.valuePath,s=n.getter,u=n.resultPath,o=r.timeout,p=o===void 0?0:o,c=r.retry,l=c===void 0?[0,0]:c,d=r.selfState,v=d?d.setState:a.setState,y=d||e,h=d?e:Ot(a,e,n,r),b=Array.isArray(l)?l:[Number(l),0],w=N()(b,2),m=w[0],H=w[1],$=new AbortController,Z={onTimeout:function(W){return T=W},getProgressbar:function(W){return re(v,i,W)},getSnap:function(W){return(0,j.getSnap)(W,!1)},abortSignal:$.signal,cancel:$.abort},et=!1,J(v,u,{cancel:(0,j.markRaw)(q(function(){return $.abort()}))}),$.signal.addEventListener("abort",function(){et=!0}),S=E()().mark(function nt(){var W,rt,B,Q,Ee,x,$t,ht,gt,X,yt,U,Wt;return E()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(B=!1,Q=!1,Ee=V>0,x={},C.prev=2,$t=Array.isArray(p)?p:[p,0],ht=N()($t,2),gt=ht[0],X=gt===void 0?0:gt,yt=ht[1],U=yt===void 0?0:yt,J(v,u,{loading:!0,error:null,retry:V>0?m-V:0,timeout:U>1?U:X,progress:0}),!et){C.next=7;break}throw new Error("Aborted");case 7:return X>0&&(W=setTimeout(function(){Q=!0,typeof T=="function"&&T(),B||(clearInterval(rt),J(v,u,{loading:!1,error:"TIMEOUT",timeout:0}))},X),U>1&&(rt=setInterval(function(){J(v,u,{timeout:U--}),U===0&&clearInterval(rt)},X/U))),C.next=10,s.call(y,h,Z);case 10:Wt=C.sent,Q||Object.assign(x,{result:Wt,error:null,timeout:0}),C.next=20;break;case 14:if(C.prev=14,C.t0=C.catch(2),B=!0,typeof r.onError=="function")try{r.onError.call(y,C.t0)}catch(Ve){}Q||Object.assign(x,{error:Ut(C.t0).message,timeout:0}),m>0&&Object.assign(x,{retry:m-V});case 20:return C.prev=20,clearTimeout(W),clearInterval(rt),(!B||V==m)&&Object.assign(x,{loading:!1}),!B&&!Q&&Object.assign(x,{error:null}),J(v,u,x),C.finish(20);case 27:if(!B){C.next=31;break}if(!(m>0&&H>0&&V<m)){C.next=31;break}return C.next=31,(0,ne.g)(H);case 31:case"end":return C.stop()}},nt,null,[[2,14,20,27]])}),V=0;case 13:if(!(V<m+1)){F.next=18;break}return F.delegateYield(S(),"t0",15);case 15:V++,F.next=13;break;case 18:case"end":return F.stop()}},t)})),st.apply(this,arguments)}function ie(t,e,n){var r=t.valuePath,a=t.id,i=t.deps,s=t.name,u=t.resultPath,o=t.isMutateRunning,p=t.getter,c=e.toComputedResult,l=e.selfState,d=e.initial,v=e.noReentry;n.reactiveable.createAsyncComputed({depends:function(h){return Gt(i,h,r)},initial:function(h){if(l)l.setState(function(w){Object.assign(w,_(n,a,{result:d}))});else if(c=="self")P(h,r,_(n,a,{result:d}));else{Et(n,h,u,a,{result:d});var b=M(h,r.slice(0,r.length-1));delete b[r[r.length-1]]}},onComputed:function(){var y=z()(E()().mark(function b(w){var m,H,T,$,Z;return E()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(m=w.draft,H=w.values,T=w.options,!(!e.enable&&(T==null?void 0:T.enable)!==!0)){S.next=4;break}return n.options.log("Async computed <".concat(s,"> is disabled"),"warn"),S.abrupt("return");case 4:if(n.options.log("Run async computed for : ".concat(s)),$=Object.assign({},e,T),!(v&&o&&n.options.debug)){S.next=9;break}return n.options.log("Reentry async computed: ".concat(s),"warn"),S.abrupt("return");case 9:return t.isMutateRunning=!0,t.dependValues=H,S.prev=11,S.next=14,ae(m,t,$,n);case 14:return Z=S.sent,n.emit("computed",{path:r,id:a}),S.abrupt("return",Z);case 17:return S.prev=17,t.isMutateRunning=!1,S.finish(17);case 20:case"end":return S.stop()}},b,null,[[11,,17,20]])}));function h(b){return y.apply(this,arguments)}return h}(),options:e})}function ue(t,e){var n=t.path,r=e.selfState,a=e.toComputedResult,i=a===void 0?"self":a;return r?[n]:(0,At.d)(i,{self:n,root:[],parent:n.slice(0,n.length-2),current:n.slice(0,n.length-1),Array:i,String:[].concat(O()(n.slice(0,n.length-1)),[String(i).split(g)])},{defaultValue:n})}function ot(t,e){var n=t.path,r=t.parent,a=t.value;if(!(r&&!Object.hasOwn(r,n[n.length-1]))){var i=a(),s=i.getter,u=i.options;u.async=!0,wt(n,s,e,u);var o=u.depends,p=o===void 0?[]:o,c=u.selfState,l=ue(t,u),d=Kt(p);d.length==0&&e.options.log("async computed <".concat(n.join("."),"> should specify depends"),"warn");var v=u.id||L(n,u.id),y=c?v:n.join(g);e.options.log("Create async computed: ".concat(y," (depends=").concat(d.length==0?"None":R(d),")"));var h={id:u.id||L(n,u.id),name:c?v:n.join(g),resultPath:l,isMutateRunning:!1,dependValues:[],valuePath:n,deps:d,getter:s};ie(h,u,e),c||t.replaceValue(M(e.state,n));var b=new jt(e,c,u);return e.computedObjects.set(v,b),b}}var Mt=f(20649);function ct(t,e,n){var r=t.value,a;if(r.__COMPUTED__=="async"?a=ot(t,e):r.__COMPUTED__=="sync"?a=ut(t,e):(0,Mt.$)(r)?(t.value=function(){return{getter:r,options:{depends:[],initial:void 0,immediate:!0,enable:!0}}},a=ot(t,e)):(t.value=function(){return{getter:r,options:{initial:void 0,enable:!0}}},a=ut(t,e)),a&&typeof e.options.onCreateComputedObject=="function")try{e.options.onCreateComputedObject(t.path,a)}catch(i){e.options.log(i.stack,"error")}}var se=f(71698),lt=f.n(se),oe=f(44114),Y=f.n(oe),ce=f(19365),le=f.n(ce),fe=f(72904),de=f.n(fe),pe=f(65523),ft=f.n(pe),ve=f(7122),dt=f.n(ve),he=f(19108),Pt=f.n(he);function kt(t,e,n){if(typeof t!="function")throw new Error("computed getter must be a function");var r=[],a={async:!1,enable:!0,timeout:0,depends:[],toComputedResult:A.Self,immediate:!0};if(arguments.length==1)r=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))r=arguments[1];else if(Ft()(arguments[1])=="object")Object.assign(a,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(r=arguments[1],Object.assign(a,arguments[2]));var i=a.async===!0||(0,Mt.$)(t)||arguments.length>=2&&Array.isArray(e);a.async=i,a.depends=r;var s=function(){return{getter:t,options:a}};return s.__COMPUTED__=i?"async":"sync",s}function tt(){return Math.random().toString(36).slice(2)}function ge(t){return function(e,n){var r=Object.assign({id:tt(),scope:t.stateCtx.state,context:t.stateCtx.state},n);if(!Array.isArray(r.depends)||r.depends.length==0)throw new Error("options.depends must be an array and not empty");var a=(0,j.sharex)({}),i={path:[],parent:null,value:kt(e,r.depends,n)};return ct(i,t),a}}var Tt=function(t){ft()(n,t);var e=dt()(n);function n(r){var a;return G()(this,n),a=e.call(this),D()(Y()(a),"_createComputed",void 0),a.store=r,a}return K()(n,[{key:"runGroup",value:function(){var r=z()(E()().mark(function i(s){return E()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Promise.all(O()(this.values()).filter(function(p){return p.group==s}).map(function(p){return p.async,p.run()})));case 1:case"end":return o.stop()}},i,this)}));function a(i){return r.apply(this,arguments)}return a}()},{key:"enableGroup",value:function(){var r=z()(E()().mark(function i(s){var u,o,p;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:u=lt()(this.values());try{for(u.s();!(o=u.n()).done;)p=o.value,p.options.enable=s}catch(d){u.e(d)}finally{u.f()}case 2:case"end":return l.stop()}},i,this)}));function a(i){return r.apply(this,arguments)}return a}()},{key:"delete",value:function(a){return le()(de()(n.prototype),"delete",this).call(this,a)}},{key:"new",get:function(){return this._createComputed||(this._createComputed=ge(this.store)),this._createComputed}}]),n}(Pt()(Map));function Vt(t){return typeof t=="function"?t:typeof t=="string"?function(e){return R(e)==R(t.split(g))}:Array.isArray(t)?function(e){return t.map(function(n){return typeof n=="string"?n.split(g):Array.isArray(n)?n:[String(n)]}).some(function(n){return R(e)==R(n)})}:function(){return!1}}function ye(t,e,n){var r=Object.assign({depends:Vt(e),enable:!0},n),a=function(){return{listener:t,options:r}};return a.__COMPUTED__="watch",a}function pt(t){return function(e,n){var r=(0,j.watch)(function(i){var s=i.triggerReasons,u=s.map(function(o){return o.keyPath});e(u)},function(){return n==null?void 0:n.map(function(i){return k(t.stateCtx.state,i)})}),a=r.unwatch;return a}}var me=f(70079);function vt(t,e){e.options.log("install watch for <".concat(t.path.length==0?"Dynamic":t.path.join(g),">"));var n=t.value();n.options.selfPath=t.path;var r=e.watchObjects.add(n),a=n.options.context;return a?a.setState(function(i){i.value=n.options.initial}):(t.replaceValue(n.options.initial),e.stateCtx.setState(function(i){P(i,t.path,n.options.initial)}),(0,j.flush)(e.stateCtx.state)),r}function It(t){return function(e,n,r){(0,me.useEffect)(function(){var a={path:["value"],parent:void 0,value:function(){var u={listener:e,options:Object.assign({depends:Vt(n),context:(0,j.sharex)({value:0}),selfPath:["value"],initial:0,enable:!0,scope:A.Depends},r)};return u}},i=vt(a,t);return function(){t.watchObjects.delete(i.id)}},[n])}}var Rt=function(){function t(e,n){if(G()(this,t),D()(this,"_cache",void 0),D()(this,"_listener",void 0),D()(this,"_options",void 0),this.store=e,this._options=Object.assign({enable:!0,selfPath:[],group:void 0,context:void 0,initial:void 0},n.options),typeof this._options.depends!="function")throw new Error("watch options.depends must be a function");if(!this._options.id){var r=this._options.selfPath;this._options.id=this._options.id||this._options.context?tt():R(r)}this._listener=n.listener}return K()(t,[{key:"id",get:function(){return this._options.id}},{key:"options",get:function(){return this._options}},{key:"selfPath",get:function(){return this._options.selfPath}},{key:"depends",get:function(){return this._options.depends}},{key:"enable",get:function(){return this._options.enable},set:function(n){this._options.enable=n}},{key:"cache",get:function(){return this._cache||(this._cache={}),this._cache}},{key:"value",get:function(){var n=this._options.context?this._options.context:this.store.state;return M((0,j.getSnap)(n),this.selfPath)}},{key:"getName",value:function(){return this._options.context?this.id:this.selfPath.join(g)}},{key:"reset",value:function(){this._cache={}}},{key:"run",value:function(n,r){var a=this;if(!this.enable){this.store.options.log("WatchObject <".concat(this.getName(),"> is disabled"));return}try{var i=this._listener.call(this,r,n,this);i!==void 0&&(this._options.context?this._options.context.setState(function(s){s.value=i}):this.store.setState(function(s){P(s,a.selfPath,i)}))}catch(s){}}}]),t}(),Dt=function(t){ft()(n,t);var e=dt()(n);function n(r){var a;return G()(this,n),a=e.call(this),D()(Y()(a),"_off",void 0),D()(Y()(a),"_enable",!0),a.store=r,r.on("created",a.onStateCreated.bind(Y()(a))),a}return K()(n,[{key:"onStateCreated",value:function(){this.createWacher()}},{key:"enable",get:function(){return this._enable},set:function(a){this._enable=a}},{key:"createWacher",value:function(){var a=this,i=(0,j.watch)(function(u){var o=u.triggerReasons;if(a._enable){var p=o.map(function(c){return c.keyPath});p.forEach(function(c){var l=M(a.store.state,c),d=lt()(a.values()),v;try{for(d.s();!(v=d.n()).done;){var y=v.value;y.depends(c,l)&&y.run(c,l)}}catch(h){d.e(h)}finally{d.f()}})}},function(){return[a.store.state]}),s=i.unwatch;this._off=s}},{key:"reset",value:function(){this._off&&this._off(),this.createWacher()}},{key:"add",value:function(a){var i=new Rt(this.store,a);return this.set(i.id,i),i}},{key:"enableGroup",value:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,s=lt()(this.values()),u;try{for(s.s();!(u=s.n()).done;){var o=u.value;o.options.group==a&&(o.options.enable=i)}}catch(p){s.e(p)}finally{s.f()}}}]),n}(Pt()(Map));function Ce(t,e){var n=t.path,r=t.value,a=R(n);typeof r=="function"&&!e._replacedKeys[a]&&!Ct(r)&&(e._replacedKeys[a]=!0,r.__COMPUTED__=="watch"?vt(t,e):ct(t,e))}function be(t){return function(e,n){var r=t.stateCtx.useState;if(e==null)return r();var a=r(),i=N()(a,2),s=i[0],u=i[1],o=e(s),p=u;return typeof n=="function"&&(p=function(l){u(function(d){n.call(d,d,l)})}),[o,p]}}function Se(t){return function(e){t.reactiveable.setState(function(n){e(n)})}}var Oe=f(24222),je=function(){function t(e,n){G()(this,t)}return K()(t,[{key:"state",get:function(){throw new Error("Method not implemented.")}},{key:"useState",value:function(n,r){throw new Error("Method not implemented.")}},{key:"setState",value:function(n){throw new Error("Method not implemented.")}},{key:"createAsyncComputed",value:function(n){throw new Error("Method not implemented.")}},{key:"createComputed",value:function(n){throw new Error("Method not implemented.")}},{key:"runComputed",value:function(n,r){throw new Error("Method not implemented.")}}]),t}(),Ae=function(t){ft()(n,t);var e=dt()(n);function n(r,a){var i,s;return G()(this,n),s=e.call(this,r,a),D()(Y()(s),"_stateCtx",void 0),s._stateCtx=(0,j.sharex)(r,{stopArrDep:!1,moduleName:(i=a.id)!==null&&i!==void 0?i:tt(),onRead:function(o){a.onRead({path:o.fullKeyPath,value:o.value,parent:o.parent,replaceValue:o.replaceValue})}}),s}return K()(n,[{key:"state",get:function(){return this._stateCtx.reactive}},{key:"useState",value:function(a,i){var s=this._stateCtx.useState(),u=N()(s,2),o=u[0],p=u[1],c=typeof a=="function"?a(o):o,l=typeof i=="function"?function(d){p(function(v){i.call(v,v,d)})}:p;return[c,l]}},{key:"setState",value:function(a){this._stateCtx.setState(a)}},{key:"createAsyncComputed",value:function(a){var i=a.initial,s=a.onComputed,u=a.depends,o=a.options;return this._stateCtx.mutate({deps:function(c){return typeof u=="function"?u(c):null},fn:function(c,l){l.isFirstCall&&typeof i=="function"&&i(c,l)},task:function(){var p=z()(E()().mark(function l(d){var v,y,h,b;return E()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(v=d.draft,y=d.setState,h=d.input,b=d.extraArgs,typeof i!="function"){m.next=3;break}return m.abrupt("return",s({draft:v,setState:y,values:h,options:Object.assign({},b)}));case 3:case"end":return m.stop()}},l)}));function c(l){return p.apply(this,arguments)}return c}(),immediate:o.immediate,desc:o.id,checkDeadCycle:!1}),o.id}},{key:"createComputed",value:function(a){var i=a.onComputed,s=a.options;return this._stateCtx.mutate({fn:function(o,p){var c=p.input;typeof i=="function"&&i({draft:o,values:c})},desc:s.id,checkDeadCycle:!1}),s.id}},{key:"runComputed",value:function(a,i){var s={desc:a,extraArgs:i};this._stateCtx.runMutateTask(s)}}]),n}(je);function we(t,e){var n=Object.assign({id:tt(),debug:!0,scope:function(){return A.Current},singleton:!0},e);n.log=function(){n.debug&&Lt.apply(void 0,arguments)};var r=(0,Oe.Z)(),a={options:n,on:r.on,off:r.off,emit:r.emit,_replacedKeys:{}};return a.computedObjects=new Tt(a),a.watchObjects=new Dt(a),a.reactiveable=new Ae(t,{id:n.id,onRead:function(s){Ce(s,a)}}),a.state=a.reactiveable.state,a.emit("created"),a.useState=be(a),a.setState=Se(a),a.watch=pt(a),a.useWatch=It(a),a.watch=pt(a),a}},43095:function(mt){function I(f){var A=new Error("Cannot find module '"+f+"'");throw A.code="MODULE_NOT_FOUND",A}I.keys=function(){return[]},I.resolve=I,I.id=43095,mt.exports=I}}]);
