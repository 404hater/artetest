(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{2350:function(){},5586:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/purchaseresult",function(){return n(6352)}])},9487:function(e,t,n){"use strict";var r=n(5893);n(7294);var i=n(9418),s=n.n(i);let o=e=>{let{info:t}=e;return(0,r.jsx)("div",{className:"goodsInfo ".concat(s().goodsInfo),children:null==t?void 0:t.map(e=>{var t;return(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:e.title}),(0,r.jsx)("dd",{children:(0,r.jsx)("ul",{children:null===(t=e.content)||void 0===t?void 0:t.map(e=>{if(e.value)return(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:e.name}),e.value]},e.name)})})})]},e.title)})})};t.Z=o},4957:function(e,t,n){"use strict";var r=n(5893);n(7294);var i=n(4032),s=n.n(i);let o=e=>{let{imgSrc:t,goodsInfo:n,className:i,fileExt:o}=e;return(0,r.jsxs)("div",{className:"purchaseTop".concat(i?" ".concat(i):""," ").concat(s().purchaseTop),children:[(0,r.jsx)("div",{className:"imgArea",children:"mp4"===o||t&&".mp4".indexOf(t.slice(-4))>-1?(0,r.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:(0,r.jsx)("source",{src:t})},t):(0,r.jsx)("div",{className:"imgAreaInner",style:{backgroundImage:"url(".concat(t,")")}})}),(0,r.jsx)("div",{className:"rightSide",children:n})]})};t.Z=o},3826:function(e,t,n){"use strict";var r=n(7294);let i=e=>{(0,r.useEffect)(()=>()=>{e.init()},[])};t.Z=i},5873:function(e,t,n){"use strict";n.d(t,{w:function(){return i}});var r=n(7294);let i=e=>{(0,r.useEffect)(()=>{let t=document.querySelector(".wrap > .header"),n=document.querySelector(".wrap > .container");if(e){let r=document.querySelector(e);r.style.paddingTop=t.clientHeight+"px"}else n.style.paddingTop=t.clientHeight+"px"},[])}},2470:function(e,t,n){var r=n(3454);n(2350);var i=n(7294),s=i&&"object"==typeof i&&"default"in i?i:{default:i};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=void 0!==r&&r.env&&!0,c=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,s=void 0===i?a:i;u(c(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",u("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(u(c(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(r){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];u(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&u(c(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},h={};function p(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return h[r]||(h[r]="jsx-"+d(e+"-"+n)),h[r]}function m(e,t){var n=e+t;return h[n]||(h[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[n]}var f=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i;this._sheet=r||new l({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var s=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=s,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=p(r,n);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return m(i,e)}):[m(i,t)]}}return{styleId:p(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),v=i.createContext(null);v.displayName="StyleSheetContext";var _=s.default.useInsertionEffect||s.default.useLayoutEffect,y=new f;function g(e){var t=y||i.useContext(v);return t&&_(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}g.dynamic=function(e){return e.map(function(e){return p(e[0],e[1])}).join(" ")},t.style=g},1857:function(e,t,n){"use strict";e.exports=n(2470).style},6352:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(5893),i=n(7294),s=n(9858),o=n(5873),a=n(1163),c=n(1664),l=n.n(c),u=n(9487),d=n(5725),h=n.n(d),p=n(4144),m=n.n(p);let f=e=>{let{bannerImgSrc:t,content:n,style:i}=e;return(0,r.jsxs)("div",{className:"banner ".concat(m().banner),style:i,children:[(0,r.jsx)("img",{src:t,alt:"",className:"bannerImg ".concat(m().bannerImg)}),n&&n]})};var v=n(4957),_=n(283),y=n(8490),g=n(786),S=n(6670),x=n(5462),j=n(527),R=n(3313),b=n(3826),F=n(3454);let C=(0,S.Pi)(()=>{var e,t,n,c,d,p,m,S,C,T,N,I,z;let w=(0,a.useRouter)(),{commonStore:k,purchaseResultStore:E}=(0,R.o)(),O=(0,x.Z)();(0,o.w)(".containerInner"),(0,i.useEffect)(()=>{if("physical"!==w.query.type&&k.activate){let e=async()=>{var e,t;let n=w.query.productid,r=w.query.salesType;if(n||(n=null!==(e=localStorage.getItem("productId"))&&void 0!==e?e:""),r||(r=null!==(t=localStorage.getItem("salesType"))&&void 0!==t?t:""),w.isReady&&k.activate&&k.userInfo){let{method:i,pg_token:s,type:o,orderid:a}=w.query;await E.load(r,n,a),"kakao"===i&&s&&o&&a&&await j.Z.post("/payment/kakaoApproval",{type:o,orderId:Number(a),pgToken:s})}};return w.isReady&&k.activate&&k.userInfo&&(E.init(),e().then()),()=>{E.clearParams()}}"physical"===w.query.type&&k.activate&&E.loadPhysical(w.query.orderid).then()},[w,k.userInfo,k.activate,w.query.type]);let q=(0,_.X)();return(0,b.Z)(E),(0,r.jsx)(s.Z,{bg:"gray",headerBg:"white",children:E.isLoaded&&(0,r.jsxs)("div",{className:"purchaseResult ".concat(h().purchaseResult),children:[(0,r.jsx)("div",{className:"resultMessage",children:(z="".concat(w.query.method),"physical"==="".concat(w.query.type)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:(0,g.Z)(y.HT.q6.c_.T[O],"purchaseResultCoinTitle",q)}),(0,r.jsx)("p",{children:(0,g.Z)(y.HT.q6.c_.k[O],"purchaseResultCoinContent",q)})]}):"coin"===z?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:(0,g.Z)(y.HT.q6.e2.T[O],"purchaseResultCoinTitle",q)}),(0,r.jsx)("p",{children:(0,g.Z)(y.HT.q6.e2.k[O],"purchaseResultCoinContent",q)})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:(0,g.Z)(y.HT.q6.V7.T[O],"purchaseResultCashTitle",q)}),(0,r.jsx)("p",{children:(0,g.Z)(y.HT.q6.V7.k[O],"purchaseResultCashContent",q)})]}))}),(0,r.jsxs)("div",{className:"resultContent",children:[(0,r.jsx)("div",{className:"resultContentInner",children:"physical"!==w.query.type?(0,r.jsx)(v.Z,{imgSrc:"".concat("https://dstrict.s3.amazonaws.com/artenft").concat(null===(e=E.productData)||void 0===e?void 0:e.data.previewFilePath).concat(null===(t=E.productData)||void 0===t?void 0:t.data.previewFileName),goodsInfo:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("strong",{className:"goodsName",children:"".concat(["COSMOS","RAPESEED"].some(e=>{var t;return(null===(t=E.productData)||void 0===t?void 0:t.data.editionName)===e})?"FLOWER -":""," ").concat(null===(n=E.productData)||void 0===n?void 0:n.data.editionName," ").concat(null===(c=E.productData)||void 0===c?void 0:c.data.editionNumber)}),(0,r.jsx)(u.Z,{info:E.productInfo})]}),fileExt:null===(d=E.productData)||void 0===d?void 0:d.data.properties.fileExtension}):(0,r.jsx)(v.Z,{imgSrc:"".concat(F.env.NEXT_PUBLIC_S3_URL).concat(null===(p=E.physicalData)||void 0===p?void 0:p.product.thumbFilePath).concat(null===(m=E.physicalData)||void 0===m?void 0:m.product.thumbFileName),goodsInfo:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("strong",{className:"goodsName",children:"".concat(["COSMOS","RAPESEED"].some(e=>{var t;return(null===(t=E.productData)||void 0===t?void 0:t.data.editionName)===e})?"FLOWER -":""," ").concat(null===(S=E.physicalData)||void 0===S?void 0:S.product.editionName," ").concat(null===(C=E.physicalData)||void 0===C?void 0:C.product.editionNumber)}),(0,r.jsx)(u.Z,{info:[{title:"ORDER INFORMATION",content:[{name:"구매자",value:null===(T=E.physicalData)||void 0===T?void 0:T.ordererInfo.name},{name:"구매일시",value:"".concat(null===(N=E.physicalData)||void 0===N?void 0:N.orderStatus.orderStatusName)},{name:"주문번호",value:null===(I=E.physicalData)||void 0===I?void 0:I.orderNumber}]}]})]})})}),(0,r.jsx)("button",{onClick:()=>w.replace("/mynft"),className:"blackButton",children:y.HT.q5[O]})]}),(0,r.jsx)(f,{bannerImgSrc:"/images/content/img_banner".concat(q?"_m":"",".png"),content:(0,r.jsxs)("div",{style:{...q?{top:"5rem",transform:"translate3d(-50%, 0, 0)",margin:"0",fontSize:"2rem",fontWeight:"300"}:{top:"50%",transform:"translate3d(-50%, -50%, 0)",margin:"0 0 0 -260px",fontSize:"20px",fontWeight:"500"},whiteSpace:"nowrap",position:"absolute",left:"50%",textAlign:"center",color:"#333"},children:[(0,g.Z)(y.HT.Fb[O],"purchaseResultBannerText"),(0,r.jsx)(l(),{href:"/mynft",style:{...q?{display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",margin:"1rem auto 0",borderBottom:".4rem solid #ccc",fontFamily:"Noto Sans KR",fontSize:"1.3rem",fontWeight:"bold",color:"#111"}:{display:"flex",justifyContent:"center",alignItems:"center",width:248,height:44,margin:"15px auto 0",fontSize:13,color:"#111",background:"#fff"}},children:y.HT.RB[O]})]})})]})})});var T=C},9418:function(e){e.exports={goodsInfo:"GoodsInfo_goodsInfo__0Qn7T"}},4032:function(e){e.exports={purchaseTop:"PurchaseTop_purchaseTop__3lUbh"}},4144:function(e){e.exports={banner:"Banner_banner__4pQio",bannerImg:"Banner_bannerImg__jbIph"}},5725:function(e){e.exports={purchaseResult:"PurchaseResult_purchaseResult___mHZO"}}},function(e){e.O(0,[664,858,774,888,179],function(){return e(e.s=5586)}),_N_E=e.O()}]);