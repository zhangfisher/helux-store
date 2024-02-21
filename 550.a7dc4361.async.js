"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[550],{81550:function(L,g,x){x.r(g),x.d(g,{Box:function(){return y},Button:function(){return j},Card:function(){return C},Col:function(){return z},ColorBlock:function(){return I},Divider:function(){return D},Field:function(){return B},Input:function(){return A},JsonViewer:function(){return R},Loading:function(){return f},Row:function(){return V},ValidResult:function(){return h}});var p=x(70079),n=x(35250),y=function(e){var i=e.title,l=e.enable,r=l===void 0?!0:l,o=e.visible,t=o===void 0?!0:o;return(0,n.jsxs)("div",{style:{display:t?"flex":"none",position:"relative",flexDirection:"column",padding:"8px",margin:"16px 4px 4px 4px",boxSizing:"border-box",border:"1px solid #bbb"},children:[(0,n.jsx)("span",{style:{position:"absolute",padding:"2px 4px 2px 4px",top:"-16px",background:"white",left:"8px",color:r?"#bbb":"gray"},children:i||""}),e.children]})},m=x(55667),f=function(e){var i=e.size,l=i===void 0?20:i,r=e.visible,o=r===void 0?!0:r,t=e.color,a=e.tips,d=a===void 0?"loading...":a;return(0,n.jsx)("span",{title:d,style:{display:o?"inline-block":"none",cursor:"pointer",padding:"2px"},children:(0,n.jsx)(m.Z1,{width:l,height:l,color:t})})},j=function(e){var i=e.visible,l=i===void 0?!0:i,r=e.loading,o=e.timeout,t=o===void 0?0:o,a=e.progress,d=a===void 0?0:a,c=e.cancel,s=e.onClick,v=(0,p.useRef)(null);return(0,p.useEffect)(function(){v.current&&(v.current.style.display=l?"flex":"none")}),(0,n.jsxs)("div",{ref:v,className:"speed-button",onClick:s,style:{padding:"8px",margin:"4px",cursor:"pointer",display:l?"flex":"none",flexDirection:"row",borderRadius:"6px",alignItems:"center",border:"1px solid #bbb",background:"#eee",textAlign:"center"},children:[r?(0,n.jsx)(f,{}):null,(0,n.jsx)("div",{style:{flexGrow:1,backgroundColor:"transparent"},children:e.children}),t>0?(0,n.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:t}):"",d>0?(0,n.jsxs)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:[d,"%"]}):"",e.error?(0,n.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:e.error}):"",e.loading&&typeof c=="function"?(0,n.jsx)("button",{onClick:c,style:{padding:"4px",color:"red",margin:"2px",fontSize:"10px",backgroundColor:"#eee",borderRadius:"4px",cursor:"pointer"},children:" \u5355\u51FB\u53D6\u6D88"}):""]})},C=function(e){var i=e.title,l=e.enable,r=l===void 0?!0:l,o=e.visible,t=o===void 0?!0:o,a=e.buttons,d=a===void 0?[]:a,c=Array.isArray(e.children)?e.children:[e.children];return(0,n.jsxs)("div",{className:"card",style:{border:"1px solid #ccc",background:r?"white":"gray",margin:"8px",display:t?"flex":"none",flexDirection:"column"},children:[(0,n.jsxs)("div",{className:"header",style:{display:"flex",flexDirection:"row",backgroundColor:"#eee",padding:"6px",lineHeight:"150%"},children:[(0,n.jsx)("span",{style:{flexGrow:1,color:r?"#222":"gray"},children:i}),(0,n.jsx)("span",{style:{},children:d.map(function(s,v){return(0,n.jsx)("span",{className:"button",style:{padding:"4px",margin:"4px",cursor:"pointer"},onClick:s.onClick,children:s.title},v)})})]}),(0,n.jsx)("div",{style:{padding:"12px"},children:c.map(function(s,v){return c.length>1&&v==c.length-1&&s.classList&&s.classList.contains("footer")?(0,n.jsx)("div",{className:"footer",style:{borderTop:"1px solid #ccc",padding:"8px"},children:s}):s})})]})},w=x(39114),b=x.n(w),$=x(35424),k={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"white",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#444444",base0C:"#a1efe4",base0D:"#018ba7",base0E:"#81a9ff",base0F:"#cc6633"},R=function(e){return(0,n.jsx)($.L,b()(b()({getItemString:function(){return""},hideRoot:!0,shouldExpandNodeInitially:function(){return!0}},e),{},{theme:k}))},h=function(e){var i=e.validate,l=e.help;if(i!=null){var r=typeof i!="boolean",o=r?i==null?void 0:i.result:i,t=r?i==null?void 0:i.loading:!1,a=r?i==null?void 0:i.error:l;return(0,n.jsxs)("span",{style:{color:"red",display:t||!o?"flex":"none"},children:[(0,n.jsx)(f,{visible:t,tips:"\u6B63\u5728\u9A8C\u8BC1..."}),!t&&(o?"":a)]})}},B=function(e){var i=e.enable,l=i===void 0?!0:i,r=e.visible,o=r===void 0?!0:r,t=e.title,a=t===void 0?"":t,d=e.children,c=d===void 0?"":d,s=e.memo;return(0,n.jsxs)("div",{className:"field",style:{position:"relative",display:o===!1?"none":"flex",boxSizing:"border-box",flexDirection:"row",width:"100%",alignItems:"center",padding:"8px"},children:[(0,n.jsxs)("label",{className:"field-label",style:{minWidth:"160px",fontWeight:"bold",color:l===!1?"gray":"inherit"},children:[a,":"]}),(0,n.jsxs)("span",{className:"field-value",style:{flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center",color:l===!1?"gray":"inherit"},children:[typeof c=="function"?"":c,s&&(0,n.jsx)("span",{style:{color:"gray"},children:s})]}),(0,n.jsx)(h,b()({},e))]})},D=function(e){var i=e.title,l=e.visible,r=l===void 0?!0:l;return(0,n.jsx)("div",{style:{height:"36px",borderBottom:"1px solid #eee",marginBottom:"16px",display:r?"flex":"none"},children:(0,n.jsx)("h4",{style:{position:"absolute",background:"white",padding:"4px",color:"#bbb"},children:i})})},S=x(47851);function N(){var u="".concat(Math.floor(Math.random()*16777215).toString(16));return"#".concat(u.padStart(6,"0"))}var I=function(e){var i=(0,p.useRef)(0),l=e.name,r=e.value,o=r===void 0?"":r,t=e.inline,a=N(),d="block";return S.rgb(a).isDark()?d="white":d="block",(0,p.useEffect)(function(){i.current++}),(0,n.jsxs)("div",b()(b()({},e),{},{style:b()(b()({backgroundColor:a,padding:"4px",color:d,display:"flex"},e.style),{},{alignItems:"center"}),children:[(0,n.jsxs)("span",{style:{flexGrow:1},children:[l?(0,n.jsxs)("span",{style:{padding:"2px"},children:[l,"="]}):"",(0,n.jsx)("span",{style:{padding:"2px"},children:String(o)})]}),(0,n.jsx)("span",{style:{fontSize:"8px"},children:i.current})]}))},z=function(e){var i=e.visible,l=i===void 0?!0:i,r=e.border,o=r===void 0?!0:r,t=e.padding,a=t===void 0?"8px":t,d=e.margin,c=d===void 0?"0px":d,s=e.grow,v=s===void 0?1:s;return(0,n.jsx)("div",{className:"layout-col",style:{display:l?"flex":"none",position:"relative",flexDirection:"column",padding:a,flexGrow:v,margin:c,boxSizing:"border-box",border:o?"1px solid #eee":"none"},children:e.children})},V=function(e){var i=e.visible,l=i===void 0?!0:i,r=e.border,o=r===void 0?!0:r,t=e.padding,a=t===void 0?"8px":t,d=e.grow,c=d===void 0?1:d;return(0,n.jsx)("div",{className:"layout-row",style:{display:l?"flex":"none",position:"relative",flexDirection:"row",flexGrow:c,padding:a,margin:"4px",boxSizing:"border-box",border:o?"1px solid #eee":"none"},children:e.children})},A=function(e){var i=e.name,l=e.enable,r=l===void 0?!0:l,o=e.validate,t=o===void 0?!0:o,a=e.visible,d=a===void 0?!0:a,c=e.placeholder,s=e.onChange,v=e.value,G=e.style;return(0,n.jsx)("input",{style:Object.assign({border:t?"1px solid #bbb":"1px solid red",borderRadius:"4px",background:r?"white":"gray",margin:"4px",padding:"8px",display:d?"block":"none"},G),type:"text",name:i,placeholder:c,value:v!=null?v:"",readOnly:!r,onChange:s})}}}]);
