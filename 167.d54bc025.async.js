(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[167],{32435:function(f,o,e){"use strict";e.d(o,{FZ:function(){return S},PH:function(){return k},dA:function(){return R}});var t=e(90393),i=e.n(t),r=e(79664),P=e.n(r),u=e(7392),p=e.n(u),O=e(70125),D=e.n(O),L=e(96820);function R(d,C,l,y){return Object.entries(d||{}).reduce(function(a,s){var c=D()(s,2),j=c[0],g=c[1];return(0,L.$)(g)?a[j]=S(g,C.state,l):a[j]=k(g,C.state,l),a},{})}function k(d,C,l){return l.action(C)()(function(){var y=p()(i()().mark(function a(s){var c,j,g;return i()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:c=s.payload,j=s.draft,g=d.apply(void 0,P()(c)),g instanceof Function&&g(j);case 3:case"end":return I.stop()}},a)}));return function(a){return y.apply(this,arguments)}}())}function S(d,C,l){return l.action(C)()(function(){var y=p()(i()().mark(function a(s){var c,j,g;return i()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return c=s.setState,j=s.payload,I.next=3,d.apply(void 0,P()(j));case 3:g=I.sent,g instanceof Function&&c(g);case 5:case"end":return I.stop()}},a)}));return function(a){return y.apply(this,arguments)}}())}},59588:function(f,o,e){"use strict";e.d(o,{F:function(){return c},O:function(){return pe}});var t=e(90393),i=e.n(t),r=e(7392),P=e.n(r),u=e(70125),p=e.n(u),O=e(26851),D=e.n(O),L=e(79664),R=e.n(L),k=e(83198),S=e(54529),d=e(51703),C=e(96820),l=e(88053),y=e(71660),a=e(45727);function s(m,b){var T=b.input,v=b.type,_=b.computedContext,M=b.computedOptions,W=b.storeOptions,F=m;if(typeof W.onComputedContext=="function"){var $=W.onComputedContext.call(m,m,{type:v,valuePath:_.fullKeyPath});$!==void 0&&(F=$)}var w=_.keyPath,U=_.fullKeyPath,n=j(m,v=="context"?M.context:M.scope,v=="context"?W.computedThis:W.computedScope);try{if(n===S.K.Current)return(0,l.MU)(m,w);if(n===S.K.Parent)return(0,l.MU)(m,U.slice(0,U.length-2));if(n===S.K.Root)return F;if(n===S.K.Depends)return Array.isArray(T)?T:[];if(typeof n=="string")if(n.startsWith("@")){var h=(0,l.MU)(m,[].concat(R()(w),R()(n.substring(1).split("."))));return(0,l.MU)(m,h)}else return(0,l.MU)(m,[].concat(R()(w),R()(n.split("."))));else if(Array.isArray(n))if(n.length>0&&n[0].startsWith("@")){var E=(0,l.MU)(m,[].concat(R()(n[0].substring(1).split(".")),R()(n.slice(1))));return(0,l.MU)(m,E)}else return(0,l.MU)(m,n);else if(typeof n=="number"){var A=n>U.length-2?U.length-n-1:0;return(0,l.MU)(m,U.slice(0,A))}else return m}catch(K){return m}}function c(m,b,T){var v;if(typeof m!="function")throw new Error("getter must be a function");var _=[],M={async:!1,timeout:0,depends:[],scope:S.K.Current,toComputedResult:S.K.Self,immediate:!0};if(arguments.length==1)_=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))_=arguments[1];else if(D()(arguments[1])=="object")Object.assign(M,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(_=arguments[1],Object.assign(M,arguments[2]));var W=M.async===!0||(0,C.$)(m)||arguments.length>=2&&Array.isArray(b);W&&((v=M.depends)===null||v===void 0?void 0:v.length)==0&&console.warn("async computed function should specify depends"),M.async=W,M.depends=_;var F=function(){return{fn:m,options:M}};return F.__COMPUTED__=W?"async":"sync",F}function j(m,b,T){var v=b==null?T:b;if(typeof v=="function")try{v=v.call(m,m)}catch(_){}return v==null?T==null?S.K.Root:T:v}function g(m,b){var T="";return typeof b=="function"?T=b(m):typeof b=="string"?T=b:T=(0,l.UQ)(m),T}function x(m,b,T,v){var _=b.fullKeyPath,M=b.parent,W=b.value,F=v.onCreateComputed,$=W(),w=$.fn,U=$.options;if(!(M&&!Object.hasOwn(M,_[_.length-1]))){if(typeof F=="function"&&typeof w=="function"){var n=F.call(m,_,w,U);typeof n=="function"&&(w=n)}v.log("Create sync computed: ".concat(_.join(".")));var h=g(_,U.id),E=m.mutate({fn:function(K,N){v.log("Run sync mutate for : ".concat(_.join(".")));var re=N.input,q=s(K,{input:re,computedOptions:U,computedContext:b,storeOptions:v,type:"context"}),z=s(K,{input:re,computedOptions:U,computedContext:b,storeOptions:v,type:"scope"}),se=U.initial;try{se=w.call(q,z)}catch(oe){if(typeof U.onError=="function")try{var ee;(ee=U.onError)===null||ee===void 0||ee.call(q,oe)}catch(de){}}(0,d.Y6)(K,_,se)},desc:h,checkDeadCycle:!1});return b.replaceValue((0,d.Jy)(E.snap,_)),T[h]}}function I(m,b,T){return Object.assign({value:void 0,loading:!1,timeout:0,retry:0,error:null,progress:0,run:(0,k.markRaw)((0,l.H9)(function(v){return m.runMutateTask({desc:b,extraArgs:v})}))},T)}function B(m,b,T,v,_){var M=I(m,v,_),W=(0,d.Jy)(b,T);Object.assign(W,M,_)}function V(m,b,T){var v=Object.assign({},T),_=v.max,M=_===void 0?100:_,W=v.min,F=W===void 0?0:W,$=v.value,w=$===void 0?0:$;return m(function(U){return(0,d.Y6)(U,[].concat(R()(b),["progress"]),w)}),{value:function(n){n>M&&(n=M),n<F&&(n=F),m(function(h){return(0,d.Y6)(h,[].concat(R()(b),["progress"]),n)})},end:function(){this.value(M)}}}function J(m,b,T){m(function(v){Object.entries(T).forEach(function(_){var M=p()(_,2),W=M[0],F=M[1];(0,d.Y6)(v,[].concat(R()(b),[W]),F)})})}function H(m,b,T){return Q.apply(this,arguments)}function Q(){return Q=P()(i()().mark(function m(b,T,v){var _,M,W,F,$,w,U,n,h,E,A,K,N,re,q,z,se,ee,oe,de,ae;return i()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:_=v.input,M=v.computedOptions,W=v.computedContext,F=v.storeOptions,$=v.computedResultPath,w=v.setState,U=s(b,{input:_,computedOptions:M,computedContext:W,storeOptions:F,type:"context"}),n=s(b,{input:_,computedOptions:M,computedContext:W,storeOptions:F,type:"scope"}),h=W.fullKeyPath,E=M.timeout,A=E===void 0?0:E,K=M.retry,N=K===void 0?[0,0]:K,re=Array.isArray(N)?N:[Number(N),0],q=p()(re,2),z=q[0],se=q[1],oe={onTimeout:function(ne){return ee=ne},getProgressbar:function(ne){return V(w,h,ne)},getSnap:function(ne){return(0,k.getSnap)(ne,!1)},abortSignal:M.abortSignal},de=i()().mark(function te(){var ne,ce,_e,le,ue,ye,G,he,me,ve,fe,be;return i()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return _e=!1,le=!1,ue={},Y.prev=3,ye=Array.isArray(A)?A:[A,0],G=p()(ye,2),he=G[0],me=he===void 0?0:he,ve=G[1],fe=ve===void 0?0:ve,J(w,$,{loading:!0,error:null,retry:0,timeout:fe>1?fe:me,progress:0}),me>0&&(ne=setTimeout(function(){le=!0,typeof ee=="function"&&ee(),_e||(clearInterval(ce),J(w,$,{loading:!1,error:"TIMEOUT",timeout:0}))},me),fe>1&&(ce=setInterval(function(){J(w,$,{timeout:fe--}),fe===0&&clearInterval(ce)},me/fe))),Y.next=9,T.call(U,n,oe);case 9:be=Y.sent,le||Object.assign(ue,{value:be,error:null,timeout:0}),Y.next=19;break;case 13:if(Y.prev=13,Y.t0=Y.catch(3),_e=!0,typeof M.onError=="function")try{M.onError.call(U,Y.t0)}catch(ge){}le||Object.assign(ue,{error:(0,l.by)(Y.t0).message,timeout:0}),z>0&&Object.assign(ue,{retry:z-ae});case 19:return Y.prev=19,clearTimeout(ne),clearInterval(ce),Object.assign(ue,{loading:!1}),!_e&&!le&&Object.assign(ue,{error:null}),J(w,$,ue),Y.finish(19);case 26:if(!_e){Y.next=30;break}if(!(z>0&&se>0)){Y.next=30;break}return Y.next=30,(0,a.g)(se);case 30:case"end":return Y.stop()}},te,null,[[3,13,19,26]])}),ae=0;case 9:if(!(ae<z+1)){Z.next=14;break}return Z.delegateYield(de(),"t0",11);case 11:ae++,Z.next=9;break;case 14:case"end":return Z.stop()}},m)})),Q.apply(this,arguments)}function X(m,b,T,v){var _=b.fullKeyPath,M=b.parent,W=b.value,F=v.onCreateComputed;if(!(M&&!Object.hasOwn(M,_[_.length-1]))){var $=W(),w=$.fn,U=$.options;if(!w)debugger;if(U.async=!0,typeof F=="function"&&typeof w=="function"){var n=F.call(m,_,w,U);typeof n=="function"&&(w=n)}var h=U.depends,E=U.initial,A=U.toComputedResult,K=A===void 0?"self":A,N=U.immediate,re=U.noReentry,q=re===void 0?!1:re,z=!1,se=(0,y.d)(K,{self:_,root:[],parent:_.slice(0,_.length-2),current:_.slice(0,_.length-1),Array:K,String:[].concat(R()(_.slice(0,_.length-1)),[String(K).split(".")])},{defaultValue:_}),ee=(0,l.w3)(h),oe=g(_,U.id);v.log("Create async computed: ".concat(_.join(".")," (depends=").concat(ee.length==0?"None":(0,l.UQ)(ee),")"));var de=m.mutate({deps:function(ie){return ee.map(function(Z){return(0,d.Jy)(ie,Z)})},fn:function(ie,Z){if(Z.isFirstCall)if(K=="self")(0,d.Y6)(ie,_,I(m,oe,{value:E}));else{B(m,ie,se,oe,{value:E});var te=(0,d.Jy)(ie,_.slice(0,_.length-1));delete te[_[_.length-1]]}},task:function(){var ae=P()(i()().mark(function Z(te){var ne,ce,_e,le,ue;return i()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:if(ne=te.draft,ce=te.setState,_e=te.input,le=te.extraArgs,v.log("Run async mutate for : ".concat(_.join("."))),ue=Object.assign({},U,le),!(q&&z&&v.debug)){G.next=6;break}return v.log("Reentry async computed: ".concat(_.join(".")),"warn"),G.abrupt("return");case 6:return z=!0,G.prev=7,G.next=10,H(ne,w,{input:_e,computedResultPath:se,computedOptions:ue,computedContext:b,storeOptions:v,setState:ce});case 10:return G.abrupt("return",G.sent);case 11:return G.prev=11,z=!1,G.finish(11);case 14:case"end":return G.stop()}},Z,null,[[7,,11,14]])}));function ie(Z){return ae.apply(this,arguments)}return ie}(),immediate:N,desc:oe,checkDeadCycle:!1});return b.replaceValue((0,d.Jy)(de.snap,_)),T[oe]=de,T[oe]}}function pe(m){var b=m.stateCtx,T=m.params,v=m.storeOptions,_=m.extendObjects,M=T.value;M.__COMPUTED__=="async"?X(b,T,_.computedObjects,v):M.__COMPUTED__=="sync"?x(b,T,_.computedObjects,v):(0,C.$)(M)?(T.value=function(){return{fn:M,options:{depends:[],initial:void 0,immediate:!0,context:v.computedThis}}},X(b,T,_.computedObjects,v)):(T.value=function(){return{fn:M,options:{initial:void 0,context:v.computedThis}}},x(b,T,_.computedObjects,v))}},93167:function(f,o,e){"use strict";e.r(o),e.d(o,{ComputedScopeRef:function(){return t.K},computed:function(){return i.F},createAction:function(){return O.PH},createActions:function(){return O.dA},createAsyncAction:function(){return O.FZ},createStore:function(){return t.M},getValueByPath:function(){return L.MU},installComputed:function(){return i.O},installWatch:function(){return D.m},watch:function(){return D.Y}});var t=e(54529),i=e(59588),r=e(95188),P=e.n(r),u={};for(var p in r)["default","getValueByPath","ComputedScopeRef","createStore","computed","installComputed"].indexOf(p)<0&&(u[p]=function(R){return r[R]}.bind(0,p));e.d(o,u);var O=e(32435),D=e(54942),L=e(88053)},54529:function(f,o,e){"use strict";e.d(o,{K:function(){return S},M:function(){return C}});var t=e(39114),i=e.n(t),r=e(70125),P=e.n(r),u=e(83198),p=e(32435),O=e(20458),D=e(88053),L=e(59588),R=e(54942);function k(l,y,a){var s={};l.setOnReadHook(function(c){var j=c.fullKeyPath,g=c.value,x=j.join(".");if(typeof g=="function"&&!s[x]&&!(0,D.Mk)(g)){s[x]=!0;var I={stateCtx:l,extendObjects:y,storeOptions:a,params:c};g.__COMPUTED__=="watch"?(0,R.m)(I):(0,L.O)(I)}})}var S=function(l){return l.None="none",l.Root="root",l.Current="current",l.Parent="parent",l.Depends="depends",l.Self="self",l}({});function d(l){return function(y,a){var s=l.useState;if(y==null)return s();var c=s(),j=P()(c,2),g=j[0],x=j[1],I=y(g),B=x;return typeof a=="function"&&(B=function(J){x(function(H){a.call(H,H,J)})}),[I,B]}}function C(l,y){var a=Object.assign({id:Math.random().toString(16).substring(2),debug:!0,computedThis:S.Root,computedScope:S.Current,singleton:!0},y);a.log=function(){a.debug&&D.cM.apply(void 0,arguments)};var s=a.singleton?l:(0,O.I)(l),c={computedObjects:{},watchObjects:{}};return(0,u.model)(function(j){var g=j.sharex(s.state,{stopArrDep:!1,moduleName:a.id}),x=(0,p.dA)(s.actions,g,j,a);k(g,c,a);var I=d(g);return i()(i()({actions:x},g),{},{state:g.reactive,useState:I},c)})}},95188:function(){},88053:function(f,o,e){"use strict";e.d(o,{H9:function(){return p},MU:function(){return P},Mk:function(){return O},UQ:function(){return R},by:function(){return k},cM:function(){return D},w3:function(){return S}});var t=e(79664),i=e.n(t),r=e(51703);function P(d,C){var l=[];try{return typeof C=="function"&&(C=C.call(d,d)),l=Array.isArray(C)?C:typeof C=="string"?C.split("."):[],l.length>0?(0,r.Jy)(d,l):d}catch(y){return d}}var u=Symbol("SKIP_COMPUTED");function p(d){return d[u]=!0,d}function O(d){return d[u]===!0}function D(d){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",l=typeof d=="function"?d():d instanceof Error?d.stack:d;try{var y;(y=console)[C].apply(y,["[helux-store] "].concat(i()(Array.isArray(l)?l:[l])))}catch(a){}}function L(d,C){return C==="self"?d:C==="root"?[]:C==="parent"?d.slice(0,-2):C==="current"?d.slice(0,-1):typeof C=="string"?[].concat(_toConsumableArray(d.slice(0,-1)),[C.split(".")]):Array.isArray(C)?C:d}function R(d){return d.map(function(C){return Array.isArray(C)?C.join("."):C}).join("_")}function k(d){return d instanceof Error?d:new Error(d)}function S(d,C){var l=[];return l=(d||[]).map(function(y){return Array.isArray(y)?l:y.split(".")}),l}},54942:function(f,o,e){"use strict";e.d(o,{Y:function(){return d},m:function(){return y}});var t=e(70125),i=e.n(t),r=e(71698),P=e.n(r),u=e(77937),p=e.n(u),O=e(41176),D=e.n(O),L=e(79862),R=e.n(L),k=e(83198),S=e(51703);function d(a,s,c){var j=Object.assign({on:s},c),g=function(){return{fn:a,options:j}};return g.__COMPUTED__="watch",g}var C=function(){function a(s){p()(this,a),R()(this,"listeners",new Map),R()(this,"_off",function(){}),R()(this,"wacher",{off:function(){}}),R()(this,"_enable",!0),R()(this,"cache",new Map),this.options=s,this.createWacher()}return D()(a,[{key:"stateCtx",get:function(){return this.options.stateCtx}},{key:"storeOptions",get:function(){return this.options.storeOptions}},{key:"extendObjects",get:function(){return this.options.extendObjects}},{key:"enable",get:function(){return this._enable},set:function(c){this._enable=c}},{key:"createWacher",value:function(){var c=this,j=(0,k.watch)(function(x){var I=x.triggerReasons,B=I.map(function(V){return V.keyPath});B.forEach(function(V){if(!c.hitListenerFromCache(V)){var J=P()(c.listeners),H;try{for(J.s();!(H=J.n()).done;){var Q=i()(H.value,2),X=Q[0],pe=Q[1];try{c.executeListener(V,X,pe)}catch(m){}}}catch(m){J.e(m)}finally{J.f()}}})},function(){return[c.stateCtx.state]}),g=j.unwatch;this.wacher={off:g}}},{key:"addListenerToCache",value:function(c,j,g,x){this.cache.has(c)||this.cache.set(c,[]);var I=this.cache.get(c);I.push([j,g,x])}},{key:"hitListenerFromCache",value:function(c){var j=this;if(this.cache.has(String(c))){var g=(0,S.Jy)(this.stateCtx.state,c),x=this.cache.get(String(c));return x.forEach(function(I){var B=i()(I,3),V=B[0],J=B[1],H=B[2],Q=J(g,H);Q!==void 0&&j.stateCtx.setState(function(X){(0,S.Y6)(X,V,Q)})}),x.length>0}return!1}},{key:"executeListener",value:function(c,j,g){var x=this,I=g.fn,B=g.options,V=B.on;if(typeof V=="function"){var J=(0,S.Jy)(this.stateCtx.state,c);try{if(V(c,J)==!0){var H={getSelfValue:function(){return(0,S.Jy)(x.stateCtx.state,j)},srcPath:c};this.addListenerToCache(String(c),j,I,H);var Q=I(J,H);Q!==void 0&&this.stateCtx.setState(function(X){(0,S.Y6)(X,j,Q)})}}catch(X){this.storeOptions.log("Error while run watchLisenter(".concat(c,"->").concat(j,")")+X.stack,"error")}}}},{key:"off",value:function(){this._off()}},{key:"on",value:function(){}},{key:"add",value:function(c,j){var g=j.fullKeyPath;this.listeners.set(g,{fn:c.fn,options:c.options})}},{key:"remove",value:function(c){this.listeners.delete(c)}}]),a}(),l;function y(a){var s=a.stateCtx,c=a.params,j=a.storeOptions,g=a.extendObjects;l||(l=new C({stateCtx:s,storeOptions:j,extendObjects:g})),l.add(c.value(),c)}},45727:function(f,o,e){"use strict";var t=e(36057);e(99096),Object.defineProperty(o,"g",{enumerable:!0,get:function(){return t.a}})},39533:function(f,o,e){"use strict";var t=e(9706);function i(r){return r?!!(Array.isArray(r)||r instanceof Set||r instanceof Map||t.a(r)):!1}o.a=i},7e3:function(){"use strict"},25501:function(f,o){"use strict";function e(t){if(typeof t!="function")return!1;if(Object.prototype.toString.call(t)==="[object GeneratorFunction]"||Object.getPrototypeOf(t)===Object.getPrototypeOf(function*(){})||t.constructor.name==="GeneratorFunction")return!0;let i=t.toString();return!!/^\s*(?:function)?\*/gm.test(i)}o.a=e},51449:function(f,o,e){"use strict";var t=e(95410),i=e(9706),r=e(92994);function P(u){if(r.a(u)||typeof u=="boolean"||typeof u=="function"||u instanceof Error)return!1;if(u==null||u==null||Array.isArray(u)&&u.length==0||i.a(u)&&Object.keys(u).length==0||typeof u=="string"&&u.trim()=="")return!0;try{if(t.a(u)&&u.size==0)return!0}catch(p){}return!1}o.a=P},98115:function(f,o){"use strict";function e(t){if(typeof t!="object")return!1;try{return t.constructor.toString().startsWith("class")}catch(i){return!1}}o.a=e},95410:function(f,o){"use strict";function e(t){return t!=null&&typeof t[Symbol.iterator]=="function"&&typeof t!="string"}o.a=e},9706:function(f,o){"use strict";function e(t){if(typeof t!="object"||t===null)return!1;var i=Object.getPrototypeOf(t);if(i===null)return!0;for(var r=i;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return i===r}o.a=e},99096:function(f,o,e){"use strict";var t=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,O=(y,a,s)=>a in y?t(y,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):y[a]=s,D=(y,a)=>{for(var s in a||(a={}))u.call(a,s)&&O(y,s,a[s]);if(P)for(var s of P(a))p.call(a,s)&&O(y,s,a[s]);return y},L=(y,a)=>i(y,r(a)),R=(y=>e(2109))(function(y){return e(2109).apply(this,arguments)}),k=(y,a,s)=>{if(!a.has(y))throw TypeError("Cannot "+s)},S=(y,a,s)=>(k(y,a,"read from private field"),s?s.call(y):a.get(y)),d=(y,a,s)=>{if(a.has(y))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(y):a.set(y,s)},C=(y,a,s,c)=>(k(y,a,"write to private field"),c?c.call(y,s):a.set(y,s),s),l=(y,a,s)=>new Promise((c,j)=>{var g=B=>{try{I(s.next(B))}catch(V){j(V)}},x=B=>{try{I(s.throw(B))}catch(V){j(V)}},I=B=>B.done?c(B.value):Promise.resolve(B.value).then(g,x);I((s=s.apply(y,a)).next())});o.a=D,o.b=L,o.c=R,o.d=S,o.e=d,o.f=C,o.g=l},74620:function(f,o){"use strict";function e(t,i){if(t===void 0)return!1;if(t===i)return!0;if(!("__proto__"in t))return!1;let r=t.__proto__;for(;r!=null;){if(r===i||r.name===i.name)return!0;r=r.__proto__}return!1}o.a=e},45884:function(f,o){"use strict";function e(t){return t&&typeof t=="function"}o.a=e},20391:function(f,o,e){"use strict";var t=e(68223),i=e(45884),r=e(39533);function P(u){if(u==null||t.a(u)||i.a(u))return u;if(Array.isArray(u))return u.map(p=>r.a(p)?P(p):p);if(u instanceof Set){let p=new Set;for(let O of u.values())r.a(O)?p.add(P(O)):p.add(O);return p}else if(u instanceof Map){let p=new Map;for(let[O,D]of u.entries())r.a(D)?p.set(O,P(D)):p.set(O,D);return p}else if(typeof u=="object"){let p={};return Object.entries(u).forEach(([O,D])=>{r.a(D)?p[O]=P(D):p[O]=D}),p}else return u}o.a=P},67991:function(f,o){"use strict";function e(t){return typeof t=="function"&&(t.$$isAsync||Object.prototype.toString.call(t)==="[object AsyncFunction]"||t.constructor&&t.constructor.name==="AsyncFunction")}o.a=e},92994:function(f,o){"use strict";function e(t,i=!1){if(typeof t=="number")return!0;if(typeof t!="string"||i)return!1;try{if(t.includes(".")){let r=parseFloat(t);return t.endsWith(".")?!isNaN(r)&&String(r).length===t.length-1:!isNaN(r)&&String(r).length===t.length}else{let r=parseInt(t);return!isNaN(r)&&String(r).length===t.length}}catch(r){return!1}}o.a=e},59176:function(f,o,e){"use strict";var t=e(9706);function i(r){let P=typeof r;if(r==="undefined"||r===null||P==="string"||P==="boolean"||P==="number")return!0;if(P.includes("function"))return!1;if(Array.isArray(r)){if(r.some(u=>!i(u)))return!1}else if(t.a(r)&&Object.values(r).some(u=>!i(u)))return!1;return!0}o.a=i},36057:function(f,o,e){"use strict";var t=e(99096);function i(r){return t.g(this,null,function*(){return new Promise((P,u)=>setTimeout(P,r))})}o.a=i},68223:function(f,o){"use strict";function e(t){return t==null||t==null||typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="symbol"||typeof t=="bigint"}o.a=e},12282:function(f,o){"use strict";function e(t){try{return typeof t=="object"&&t.constructor===Object}catch(i){return!1}}o.a=e},36715:function(f,o){"use strict";function e(t,i,r){let P=r==null?void 0:r.defaultValue,u={Number:"number",String:"string",Function:"function",Object:"object",Boolean:"boolean"};r!=null&&r.typeMatchers&&Object.assign(u,r.typeMatchers);let p=P;for(let[O,D]of Object.entries(i))if(Array.isArray(t)){if(O.endsWith("Array")){let L=u[O.slice(0,-5)];if(Array.isArray(t)&&t.every(R=>typeof R==L)){p=D;break}}}else if(O==t&&typeof O==typeof t){p=D;break}else if(O==t&&typeof t=="number"){p=D;break}else if(O in u){let L=u[O];if(typeof L=="function"&&L(t)){p=D;break}else if(L==typeof t){p=D;break}}else if(O=="Array"){if(Array.isArray(t)){p=D;break}}else if(O.endsWith("Array")){let L=u[O.slice(0,-5)];if(Array.isArray(t)&&t.every(R=>typeof R==L)){p=D;break}}return typeof p=="function"?p(t):p}o.a=e},61260:function(f,o){"use strict";function e(t){let i=!1;if(typeof t=="function"&&t.prototype)try{t.arguments&&t.caller}catch(r){i=!0}return i}o.a=e},13090:function(f,o){"use strict";function e(t){if(!t)return!1;if(typeof t=="number")return!0;if(typeof t!="string")return!1;try{let i=parseInt(t);return!isNaN(i)&&String(i).length===t.length}catch(i){return!1}}o.a=e},71660:function(f,o,e){"use strict";var t=e(36715);e(99096),Object.defineProperty(o,"d",{enumerable:!0,get:function(){return t.a}})},20458:function(f,o,e){"use strict";var t=e(20391);e(68223),e(45884),e(7e3),e(25501),e(98115),e(13090),e(12282),e(51449),e(95410),e(74620),e(59176),e(39533),e(67991),e(61260),e(9706),e(92994),e(99096),Object.defineProperty(o,"I",{enumerable:!0,get:function(){return t.a}})},96820:function(f,o,e){"use strict";var t=e(67991);e(99096),Object.defineProperty(o,"$",{enumerable:!0,get:function(){return t.a}})},2109:function(f){function o(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=function(){return[]},o.resolve=o,o.id=2109,f.exports=o},45466:function(f,o,e){var t=e(16487);function i(r){if(Array.isArray(r))return t(r)}f.exports=i,f.exports.__esModule=!0,f.exports.default=f.exports},71698:function(f,o,e){var t=e(91229);function i(r,P){var u=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!u){if(Array.isArray(r)||(u=t(r))||P&&r&&typeof r.length=="number"){u&&(r=u);var p=0,O=function(){};return{s:O,n:function(){return p>=r.length?{done:!0}:{done:!1,value:r[p++]}},e:function(S){throw S},f:O}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D=!0,L=!1,R;return{s:function(){u=u.call(r)},n:function(){var S=u.next();return D=S.done,S},e:function(S){L=!0,R=S},f:function(){try{!D&&u.return!=null&&u.return()}finally{if(L)throw R}}}}f.exports=i,f.exports.__esModule=!0,f.exports.default=f.exports},52748:function(f){function o(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}f.exports=o,f.exports.__esModule=!0,f.exports.default=f.exports},16207:function(f){function o(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}f.exports=o,f.exports.__esModule=!0,f.exports.default=f.exports},79664:function(f,o,e){var t=e(45466),i=e(52748),r=e(91229),P=e(16207);function u(p){return t(p)||i(p)||r(p)||P()}f.exports=u,f.exports.__esModule=!0,f.exports.default=f.exports},51703:function(f,o,e){"use strict";e.d(o,{Jy:function(){return M},Y6:function(){return W}});function t(n,h){n.includes(h)||n.push(h)}function i(n,h){const E=n.indexOf(h);E>=0&&n.splice(E,1)}function r(n){return Array.from(new Set(n))}function P(n,h){let E=!1;for(const A of n)if(h.includes(A)){E=!0;break}return E}function u(n,h){let E="";const A=n.length;for(let K=0;K<A;K++){const N=n[K];if(h.startsWith(N)){E=N;break}}return E}function p(n,h){if(!n)return[];const E=n(h);return Array.isArray(E)?E:[E]}var O=function(){if(typeof globalThis!="undefined")return globalThis;if(typeof global!="undefined")return global;if(typeof window!="undefined")return window;if(this!==void 0)return this;throw new Error("no globalThis")}(),D=null;function L(...n){}var R=null;function k(...n){return n}function S(...n){return[]}var d=Object.prototype.toString,C="[object Map]";function l(n){return d.call(n)===C}function y(n){return n===Number.MAX_SAFE_INTEGER}function a(){return!(!D&&O.name!=="previewFrame"&&!O.BrowserFS)}function s(n){return n&&typeof n=="object"&&!Array.isArray(n)}function c(n){return n&&typeof n=="object"}function j(n){return typeof n=="function"}function g(n){return D?Object.prototype.toString.call(n)==="[object AsyncFunction]":!0}function x(n){return typeof n=="symbol"}function I(n){if(!n)return!1;const h=typeof n;return(h==="object"||h==="function")&&j(n.then)}function B(n){try{return n.test,!1}catch(h){return!0}}function V(){return typeof Proxy=="function"}function J(n,h=!1,E=""){var N;let A=n,K=!1;if(n instanceof Error&&(K=!0,A=n.message),a()&&n&&((N=O.alert)==null||N.call(O,`${E}${A}, see details in console.`)),console.error(n),h)throw K?n:new Error(String(n))}function H(n,h=0){h===0?(console.error(n),a()&&console.trace(n)):h===1?console.error(n):console.warn(n)}function Q(n){return y(n)?1:n+1}var X=!!Reflect,pe=Object.prototype.hasOwnProperty;function m(n,h){return X?Reflect.has(n,h):pe.call(n,h)}function b(n,h,E){let A=n[h];return A||(A=n[h]=E),A}function T(n,h,E){let A=n.get(h);return A||(n.set(h,E),A=E),A}function v(n,h){let E="";for(const A in n)if(h.startsWith(A)){E=A;break}return E}function _(n,h){const E=n.get(h);if(E!==void 0)return E;const A=n.get(Number(h)||h);return A!==void 0?A:void 0}function M(n,h){let E,A=n;return h.forEach(K=>{E=l(A)?_(A,K):A[K],A=E}),E}function W(n,h,E){let A=n;const K=h.length-1;h.forEach((N,re)=>{const q=l(A);if(re===K)return void(q?A.set(N,E):A[N]=E);A=q?_(A,N):A[N]})}function F(){return H("changing shared state is invalid"),!0}function $(n){return n}function w(n,h){return`${h}/${n}`}function U(n){return n&&V()}}}]);
