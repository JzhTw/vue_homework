(function(){"use strict";var e={6138:function(e,t,n){var o=n(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Demosite")]),e._v(" | "),t("router-link",{attrs:{to:"/demosite2"}},[e._v("Demosite2")])],1),t("router-view")],1)},i=[],a=n(1001),u={},s=(0,a.Z)(u,r,i,!1,null,null,null),c=s.exports,l=n(2631),f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"demosite"},[t("button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"button"},on:{click:e.changeShow}},[e._v(" Toggle Section2 ")]),t("div",{staticClass:"box"},[t("div",{staticClass:"section1"},[e._v(" Section 1 ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"section2"},[e._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi tenetur itaque esse hic, perspiciatis fuga odit ratione modi velit illo amet placeat deserunt nostrum nesciunt aspernatur reiciendis sed accusamus harum. ")])])])},d=[],m={name:"DemositeView",components:{},data(){return{show:!1}},methods:{changeShow(){const e=this;e.show=!e.show}}},p=m,v=(0,a.Z)(p,f,d,!1,null,null,null),h=v.exports;o.ZP.use(l.Z);const g=[{path:"/",name:"demosite",component:h},{path:"/demosite2",name:"demosite2",component:()=>n.e(878).then(n.bind(n,2471))}],b=new l.Z({routes:g});var w=b,y=n(3822),A=n(6265),j=n.n(A);const _=j().create({timeout:5e3});_.interceptors.request.use((e=>e),(e=>{Promise.reject(e)})),_.interceptors.response.use((e=>(console.log(e),e)),(e=>(console.log("err"+e),Promise.reject(e))));var k=_;function P(){return k({url:"https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6",method:"get"})}o.ZP.use(y.ZP);var O=new y.ZP.Store({state:{ajaxData:[]},getters:{ajaxData:e=>e.ajaxData},mutations:{CHANGE_AJAXDATA(e,t){e.ajaxData=t}},actions:{async getData({commit:e},t){return new Promise(((n,o)=>{P().then((o=>{const r=o.data;let i=[];void 0!=t?(i=r.filter((e=>e.UID===t)),e("CHANGE_AJAXDATA",i)):e("CHANGE_AJAXDATA",r),n(!0)})).catch((e=>{o(e)}))}))}},modules:{}});o.ZP.config.productionTip=!1,new o.ZP({router:w,store:O,render:e=>e(c)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/demosite2.ce47d6ec.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="demosite:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],s=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var l=s(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkdemosite"]=self["webpackChunkdemosite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6138)}));o=n.O(o)})();
//# sourceMappingURL=app.d1c64746.js.map