(function(){"use strict";var e={4035:function(e,t,r){var n=r(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Demosite")]),e._v(" | "),t("router-link",{attrs:{to:"/demosite2"}},[e._v("Demosite2")])],1),t("router-view")],1)},i=[],a=r(1001),s={},u=(0,a.Z)(s,o,i,!1,null,null,null),l=u.exports,c=r(2631),v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"demosite"},[t("button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"button"},on:{click:e.changeShow}},[e._v(" Toggle Section2 ")]),t("div",{staticClass:"box"},[t("div",{staticClass:"section1"},[e._v(" Section 1 ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"section2"},[e._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi tenetur itaque esse hic, perspiciatis fuga odit ratione modi velit illo amet placeat deserunt nostrum nesciunt aspernatur reiciendis sed accusamus harum. ")])])])},f=[],p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._m(0),t("h3",[e._v("Installed CLI Plugins")]),e._m(1),t("h3",[e._v("Essential Links")]),e._m(2),t("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e._self._c;return t("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),t("br"),e._v(" check out the "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},m=d,g=(0,a.Z)(m,p,h,!1,null,"a87ea5ee",null),_=g.exports,b={name:"DemositeView",components:{HelloWorld:_},data(){return{show:!1}},methods:{changeShow(){const e=this;e.show=!e.show}}},w=b,k=(0,a.Z)(w,v,f,!1,null,null,null),j=k.exports;n.ZP.use(c.Z);const y=[{path:"/",name:"demosite",component:j},{path:"/demosite2",name:"demosite2",component:()=>r.e(443).then(r.bind(r,2302))}],A=new c.Z({routes:y});var x=A,C=r(3822),P=r(6265),O=r.n(P);const S=O().create({timeout:5e3});S.interceptors.request.use((e=>e),(e=>{Promise.reject(e)})),S.interceptors.response.use((e=>(console.log(e),e)),(e=>(console.log("err"+e),Promise.reject(e))));var T=S;function D(){return T({url:"https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6",method:"get"})}n.ZP.use(C.ZP);var E=new C.ZP.Store({state:{ajaxData:[]},getters:{ajaxData:e=>e.ajaxData},mutations:{CHANGE_AJAXDATA(e,t){e.ajaxData=t}},actions:{async getData({commit:e},t){return new Promise(((r,n)=>{D().then((n=>{const o=n.data;let i=[];void 0!=t?(i=o.filter((e=>e.UID===t)),e("CHANGE_AJAXDATA",i)):e("CHANGE_AJAXDATA",o),r(!0)})).catch((e=>{n(e)}))}))}},modules:{}});n.ZP.config.productionTip=!1,new n.ZP({router:x,store:E,render:e=>e(l)}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about.d335ec60.js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="demosite:";r.l=function(n,o,i,a){if(e[n])e[n].push(o);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var v=l[c];if(v.getAttribute("src")==n||v.getAttribute("data-webpack")==t+i){s=v;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[o];var f=function(t,r){s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p=""}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=i);var a=r.p+r.u(t),s=new Error,u=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};r.l(a,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],s=n[1],u=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(u)var c=u(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self["webpackChunkdemosite"]=self["webpackChunkdemosite"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4035)}));n=r.O(n)})();
//# sourceMappingURL=app.990534fd.js.map