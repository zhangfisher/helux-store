"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[759],{58759:function(He,M,s){s.r(M),s.d(M,{api:function(){return V},delay:function(){return z},forms:function(){return D}});var V={};s.r(V),s.d(V,{getProjects:function(){return _}});var D={};s.r(D),s.d(D,{Network:function(){return Z},schema:function(){return X}});var k=s(90393),F=s.n(k),q=s(7392),T=s.n(q);function _(e){return N.apply(this,arguments)}function N(){return N=T()(F()().mark(function e(r){var t,n,a;return F()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,fetch(r);case 2:if(t=i.sent,!t.ok){i.next=11;break}return i.next=6,t.json();case 6:return n=i.sent,a=n.map(function(l){return{name:l.name,url:l.html_url,description:l.description,stars:l.stargazers_count}}),i.abrupt("return",a);case 11:throw new Error("".concat(t.status," - ").concat(t.statusText));case 12:case"end":return i.stop()}},e)})),N.apply(this,arguments)}var z=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(t){setTimeout(t,r)})},c=s(57004),ee=s(79664),P=s.n(ee),te=s(70125),j=s.n(te),re=s(39114),C=s.n(re),f=s(70079),Le=s(26851),O=s(13192);function Ke(e){var r=_typeof(e);return e==null||r=="boolean"||r=="number"||r=="string"||r==null}function H(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=0,n,a=!0,u=function i(){if(n==null){a=!0,clearTimeout(t),t=0;return}try{var l=n;n=void 0,e.apply(void 0,P()(l)),t=setTimeout(function(){return i()},r)}finally{}};return function(){for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];if(r==0)return e.apply(void 0,l);n=l,(a||t==0)&&(a=!1,u())}}function Ue(e,r){var t={};for(var n in e)e[n]!==r[n]&&(t[n]=r[n]);return t}function L(e){return new Proxy({},{get:function(t,n,a){return e()[n]}})}function ne(e){return(0,O.P)(e)&&"execute"in e&&(0,O.P)(e.execute)&&"loading"in e.execute}function S(e){return(0,O.P)(e)&&"value"in e}function x(e){return Array.isArray(e)}function R(e){return(0,O.P)(e)&&!S(e)&&!ne(e)}var A="fields",We="actions",m=s(35250);function ae(e,r,t,n){return Object.assign({name:e,help:"",initial:void 0,oldValue:void 0,visible:!0,required:!1,readonly:!1,validate:null,enable:!0,placeholder:""},C()(C()({},r),{},{sync:t,update:n}))}function ue(e,r){var t=(0,f.useRef)(null);return(0,f.useCallback)(function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(t.current==null){var a=e.sync(r);t.current=n==0?a:H(a,n)}return t.current},[])}function ie(e,r){var t=(0,f.useRef)(null),n=(0,f.useState)(0),a=j()(n,2),u=a[0],i=a[1];return(0,f.useCallback)(function(l,o){var v=Object.assign({debounce:0},o),d=v.debounce;if(t.current==null||u!==d){u!==d&&d>0&&i(d);var g=function(h){return function(b){r(typeof h=="function"?function(y){return h.call(y,y.fields)}:function(y){return(0,c.setVal)(y,e,h)}),typeof b.preventDefault=="function"&&b.preventDefault()}};t.current=d>0?g:H(g,d)}return t.current(l)},[])}var $=f.memo(function(e){return(0,m.jsx)(m.Fragment,{children:typeof e.children=="function"&&e.children(e.fieldProps)})},function(e,r){return Object.entries(e.fieldProps).every(function(t){var n=j()(t,2),a=n[0],u=n[1];return["children","sync","update"].includes(a)?!0:u===r.fieldProps[a]})});function le(e){var r=this;return f.memo(function(t){var n=t.name,a=Array.isArray(n)?n:n.split("."),u=[A].concat(P()(a)),i=[A].concat(P()(a));a.push("value"),i.push("value");var l=e.useState(function(b){return(0,c.getVal)(b,u)}),o=j()(l,2),v=o[0],d=o[1],g=ie(i,d),p=ue(e,i),h=ae(r.getFieldName(a),v,p,g);return t.render?(0,m.jsx)($,{fieldProps:h,children:t.render}):Array.isArray(t.children)?t.children.map(function(b){return(0,m.jsx)($,{fieldProps:h,children:b})}):(0,m.jsx)($,{fieldProps:h,children:t.children})},function(t,n){return t.name===n.name})}var K=s(23893);function oe(e,r){return(0,f.useCallback)(function(t){r(function(n){t.call(n,(0,c.getVal)(n,e))})},[])}function U(e,r,t){return(0,K.w)({name:e,help:"",visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,update:t},r)}function se(e){var r=this;return f.memo(function(n){var a=n.name,u=e.useState(),i=j()(u,2),l=i[0],o=i[1],v=Array.isArray(a)?a:a.split("."),d=["fields"].concat(P()(v)),g=(0,c.getVal)(l,d),p=oe(d,o),h=(0,f.useState)(function(){return U(r.getFieldName(v),g,p)}),b=j()(h,2),y=b[0],B=b[1];return(0,f.useEffect)(function(){B(U(r.getFieldName(v),g,p))},[g]),Array.isArray(n.children)?n.children.map(function(ze){return ze(y)}):n.children(y)},function(t,n){return t.name===n.name})}var ce=s(76120);function W(e){return e.value}function G(e){var r={};return Object.entries(e).forEach(function(t){var n=j()(t,2),a=n[0],u=n[1];if(typeof a=="string")if(S(u))r[a]=W(u);else if(R(u)){var i=G(u);i&&Object.keys(i).length>0&&(r[a]=i)}else x(u)&&(r[a]=Y(u))}),r}function Y(e){var r=[];return e.forEach(function(t){S(t)?r.push(W(t)):R(t)?r.push(G(t)):x(t)?r.push(Y(t)):r.push(t)}),r}function fe(e,r,t){var n=Object.assign({},t),a=n.onNotMatch,u=a===void 0?function(){}:a;function i(l,o){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];Object.entries(l).forEach(function(d){var g=j()(d,2),p=g[0],h=g[1];if(typeof p=="string"){var b=[].concat(P()(v),[p]);if(p in o){var y=o[p];S(y)?y.value=h:R(y)?(0,O.P)(h)?i(h,y,b):u(b):x(y)?Array.isArray(h)?i(h,y):u(b):o[p]=h}else u(b)}})}i(e,r)}function Ye(e,r){var t=new FormData,n=Object.assign({getItemName:function(l){return l.join(".")}},r),a=n.getItemName;function u(i,l){if(l!=null){var o=a?a(i):i.join(".");Array.isArray(l)?l.forEach(function(v,d){u([].concat(_toConsumableArray(i),[String(d)]),v)}):isPlainObject(l)?Object.entries(l).forEach(function(v){var d=_slicedToArray(v,2),g=d[0],p=d[1];u([].concat(_toConsumableArray(i),[g]),p)}):t.append(o,l)}}return u([],e),t}function de(e,r){return function(n,a){var u=Object.assign({},a);try{e.setEnableMutate(!1),fe(n,e.state.fields),e.setState(function(i){i.dirty=!1,i.validate=null})}catch(i){console.error(i)}finally{e.setEnableMutate(!0)}}}function ve(e,r){return G(e)}function me(e,r){return function(n){var a=Object.assign({},n);return ve((0,c.getSnap)(e.state).fields)}}function J(e,r){return function(){var t=T()(F()().mark(function n(a){var u;return F()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=Object.assign({},r,a),l.next=3,e.execute.run(u);case 3:if(!e.execute.error){l.next=7;break}throw new Error(e.execute.error);case 7:return l.abrupt("return",e.execute.result);case 8:case"end":return l.stop()}},n)}));return function(n){return t.apply(this,arguments)}}()}function he(e,r){var t=(0,f.useCallback)(function(a){var u=Object.assign({},{noReentry:!0,preventDefault:!0},r,a),i=J(e,u);return function(l){i(),l&&u.preventDefault&&typeof l.preventDefault=="function"&&l.preventDefault()}},[]),n=(0,f.useCallback)(function(a){e.execute.cancel(),a&&typeof a.preventDefault=="function"&&a.preventDefault()},[]);return[t,n]}function ge(e,r){return(0,f.useCallback)(function(t){var n=(0,c.getValueByPath)(e,[].concat(P()(Array.isArray(r)?r:r.split(".")),["execute"]));n.cancel(),t&&typeof t.preventDefault=="function"&&t.preventDefault()},[])}function pe(e,r,t,n){return Object.assign({help:"",title:"",visible:!0,enable:!0},(0,ce.C)(e,"execute"),C()(C()({},e.execute),{},{run:r,cancel:t,ref:n}))}var I=f.memo(function(e){return(0,m.jsx)(m.Fragment,{children:typeof e.children=="function"&&e.children(e.actionProps)})},function(e,r){return Object.entries(e.actionProps).every(function(t){var n=j()(t,2),a=n[0],u=n[1];return["children","run","cancel"].includes(a)?!0:u===r.actionProps[a]})});function ye(e,r,t){function n(a){var u=e.useState(),i=j()(u,1),l=i[0],o=a.name,v=(0,c.getValueByPath)(l,o,"."),d=he(v,r),g=j()(d,1),p=g[0],h=ge(l,o),b=(0,f.useRef)(null),y=pe(v,p,h,b);if(typeof a.render=="function")return(0,m.jsx)(I,{actionProps:y,children:a.render});if(a.children)return Array.isArray(a.children)?a.children.map(function(B){return(0,m.jsx)(I,{actionProps:y,children:B})}):(0,m.jsx)(I,{actionProps:y,children:a.children})}return f.memo(n,function(a,u){return a.name===u.name})}function be(e,r){return computed(function(){var t=_asyncToGenerator(_regeneratorRuntime().mark(function n(a,u){var i;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=getFormData(getSnap(a,!1).fields),o.next=3,e(i,u);case 3:return o.abrupt("return",o.sent);case 4:case"end":return o.stop()}},n)}));return function(n,a){return t.apply(this,arguments)}}(),[],r)}function Je(e,r){return be(function(){var t=_asyncToGenerator(_regeneratorRuntime().mark(function n(a,u){var i;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=new FormData,o.next=3,e(i,u);case 3:return o.abrupt("return",o.sent);case 4:case"end":return o.stop()}},n)}));return function(n,a){return t.apply(this,arguments)}}(),r)}var je=s(83443);function Ae(e){return e.length>1&&e[0]==A&&e[e.length-1]=="value"}function Ce(e){return(0,c.watch)(function(r,t){var n=t.getSelfValue,a=t.srcPath,u=t.selfPath;if((0,c.isIncludePath)(e||u,a)){var i=n();if(!i)return!0}},function(r){return Ae(r)},{initial:!1})}var Qe=s(41176),Xe=s(77937),Ze=s(65523),ke=s(7122),qe=s(19108),_e=null;function Pe(e){return e.length>1&&e[0]==A&&(e[e.length-1]==="validate"||e.length>=2&&e[e.length-2]=="validate"&&e[e.length-1]=="result")&&!(e.length==2&&e[1]=="validate")&&!(e.length==3&&e[1]=="validate"&&e[2]=="result")}function Fe(e){var r=Object.assign({},e),t=r.entry;return(0,c.watch)(function(n,a){var u=a.srcPath,i=a.selfPath,l=a.getCache;if((0,c.isIncludePath)(t||i,u)){var o=l();if(typeof n=="boolean"){var v=u.join(c.OBJECT_PATH_DELIMITER);n?delete o[v]:o[v]=n}return Object.keys(o).length==0}},function(n){return Pe(n)},{initial:!0})}function et(e,r){var t=typeof e=="function"?e():e;if(!t)throw new ValidationError(typeof r=="function"?r():r)}var Oe={title:"SpeedForm",help:"",tips:"",status:"idle",dirty:Ce(["fields"]),validate:Fe({entry:["fields"]}),readonly:!1,enable:!0,visible:!0},Se=s(83038);function xe(e){var r={};return Object.entries(e||{}).forEach(function(t){var n=j()(t,2),a=n[0],u=n[1];S(u)||R(u)||x(u)||(r[a]=u)}),r}function Re(e){return Object.assign({type:"submit",help:"",title:"",dirty:!1,validate:!0,visible:!0,enable:!0,readOnly:!0},xe(e))}var w=f.memo(function(e){return(0,m.jsx)(m.Fragment,{children:typeof e.children=="function"&&e.children(e.submitProps)})},function(e,r){return Object.entries(e.submitProps).every(function(t){var n=j()(t,2),a=n[0],u=n[1];return["children","render"].includes(a)?!0:u===r.submitProps[a]})}),Ee=(0,Se.zo)(function(e,r){var t,n,a=r.className,u=e.visible;return(0,m.jsx)("input",{className:a,style:Object.assign({display:u?"inline-block":"none"},e.style),type:(t=e.type)!==null&&t!==void 0?t:"submit",value:(n=e.title)!==null&&n!==void 0?n:"\u63D0\u4EA4"})},{minWidth:"80px",cursor:"pointer",boxSizing:"border-box",margin:"2px",transition:"filter 0.3s","&:hover":{filter:"brightness(1.2)"}});function Q(e,r,t){var n=Object.assign({preventDefault:!1},r);function a(u){var i=e.useState(),l=j()(i,1),o=l[0],v=u.scope,d=(0,c.getValueByPath)(o,v),g=Re(d),p=typeof u.render=="function"?1:Array.isArray(u.children)?2:typeof u.children=="function"?3:0;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ee,C()({visible:p==0},n)),p===1?(0,m.jsx)(w,{submitProps:g,children:u.render}):p===2?u.children.map(function(h){return(0,m.jsx)(w,{submitProps:g,children:h})}):(0,m.jsx)(w,{submitProps:g,children:u.children})]})}return f.memo(a,function(u,i){return u.name===i.name})}function Ve(e,r,t){return Q(e,C()({type:"submit",title:"\u63D0\u4EA4",style:{borderRadius:"4px",padding:"8px",background:"#1c8ceb",border:"1px solid #1c8ceb",color:"#fff"}},r),t)}function De(e,r,t){return Q(e,C()({type:"reset",title:"\u91CD\u7F6E",style:{borderRadius:"4px",padding:"8px",background:"#eee",border:"1px solid #bbb"}},r),t)}function Te(e,r,t){e.length>=2&&e[0]==A&&e[e.length-1]=="validate"&&(t.scope||(t.scope="value"),t.depends||(t.depends=[]),t.depends.push([].concat(P()(e.slice(0,-1)),["value"])),t.initial=!0)}function Ne(e){(0,je.w)(e,Oe)}function $e(e,r,t){e.length>1&&e[e.length-1]=="execute"&&(t.immediate=!1,t.scope=[A],t.noReentry=!0)}function Ge(e,r,t){e.length>0&&e[0]==A&&t.depends&&t.depends.forEach(function(n,a){Array.isArray(n)&&n.length>0&&n[0]!=A?t.depends[a]=[A].concat(P()(n)):typeof n=="string"&&!n.startsWith("".concat(A,"."))&&(t.depends[a]="".concat(A,".").concat(n))})}function Ie(e){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;e.setEnableMutate(r)}}function we(e,r){var t=(0,K.w)({getFieldName:function(u){return u.length>0?u[u.length-1]==="value"?u.slice(0,-1).join("."):u.join("."):""},singleton:!0},r);Ne(e);var n=(0,c.createStore)({state:e},{debug:t.debug,singleton:t.singleton,computedThis:c.ComputedScopeRef.Root,computedScope:[A],onCreateComputed:function(u,i,l){Te(u,i,l),Ge(u,i,l),$e(u,i,l)},onComputedContext:function(u,i){var l=i.type,o=i.valuePath;if(l=="scope"&&o.length>0&&o[0]==A)return u.fields}});return{Form:Be.call(t,n),Field:le.call(t,n),Group:se.call(t,n),Action:ye(n,{},t),Submit:Ve(n,{},t),Reset:De(n,{},t),getAction:J,fields:L(function(){return n.state.fields}),actions:L(function(){return n.state.actions}),state:n.state,useState:n.useState,freeze:Ie(n),load:de(n,t),getValues:me(n,t),computedObjects:n.computedObjects,store:n}}function Be(e){return f.forwardRef(function(r,t){var n=r.children,a=(0,f.useCallback)(function(i){},[]),u=(0,f.useCallback)(function(i){},[]);return(0,m.jsx)("form",C()(C()({ref:t,className:"speedform-form"},r),{},{onSubmit:a,onReset:u,children:n}))})}var Me=s(99166),E=s.n(Me),X={title:"\u7F51\u7EDC\u914D\u7F6E",fields:{title:{value:"React-Helux-Form",placeholder:"\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",title:"\u7F51\u7EDC\u540D\u79F0",validate:function(r){return r.length>3}},interface:{value:"wifi",title:"\u7F51\u5361\u7C7B\u578B",select:function(){return[{value:"wifi",title:"\u65E0\u7EBF\u7F51\u5361"},{value:"ethernet",title:"\u6709\u7EBF\u7F51\u5361"}]}},ip:{value:"1.1.1.1",title:"IP\u5730\u5740",validate:(0,c.computed)(function(){var e=T()(F()().mark(function r(t){return F()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,z(2e3);case 2:return a.abrupt("return",E().isIP(String(t)));case 3:case"end":return a.stop()}},r)}));return function(r){return e.apply(this,arguments)}}(),[],{async:!0})},gateway:{value:"1.1.1.1",title:"\u7F51\u5173\u5730\u5740",validate:function(r){return E().isIP(r)}},dhcp:{enable:{title:"\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740",value:!0},start:{title:"\u8D77\u59CB\u5730\u5740",value:"192.168.1.1",enable:(0,c.computed)(function(e){return e.enable.value},{scope:c.ComputedScopeRef.Parent}),validate:function(r){return E().isIP(r)}},end:{title:"\u7ED3\u675F\u5730\u5740",value:"192.168.1.100",enable:(0,c.computed)(function(e){return e.dhcp.enable.value},{scope:c.ComputedScopeRef.Root}),validate:function(r){return E().isIP(r)}}},wifi:{title:"\u65E0\u7EBF\u914D\u7F6E",visible:(0,c.computed)(function(e){return e.interface.value==="wifi"},{scope:c.ComputedScopeRef.Root}),ssid:{value:"fast",placeholder:"\u65E0\u7EBF\u7F51\u7EDC",validate:function(r){return r.length>3}},password:{value:"123",placeholder:"\u8F93\u5165\u65E0\u7EBF\u5BC6\u7801",help:"\u5BC6\u7801\u957F\u5EA6\u5E94\u4E0D\u5C0F\u4E8E6\u4F4D",enable:function(r){return r.interface.value==="wifi"},validate:function(r){return r.length>=6}}}}},Z=we(X,{debug:!0});globalThis.Network=Z}}]);
