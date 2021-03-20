var microfrontend_product;(()=>{"use strict";var e,r,t,n,o,a,i,u,l,d,f,c,s,p,h={185:(e,r,t)=>{var n={"./Pages":()=>Promise.all([t.e(865),t.e(180)]).then((()=>()=>t(180))),"./Fragments":()=>t.e(265).then((()=>()=>t(265)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n=t.S.default,o="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>o,init:()=>a})}},v={};function b(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={exports:{}};return h[e].call(t.exports,t,t.exports,b),t.exports}b.m=h,b.c=v,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>e+"."+{3:"57a552147d39f8f42408",138:"2e0a1fb268b3f87b46a9",180:"5c4b4a406d945ec312ce",265:"242df91878fe53ee634c",526:"c66e0cef94bc511d5b0e",570:"621133f8d779c9c12dee",637:"379d78715fe7a6262e88",865:"6e3425243367286eb36c"}[e]+".js",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="product:",b.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var f=l[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,b.nc&&i.setAttribute("nonce",b.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var c=(r,n)=>{i.onerror=i.onload=null,clearTimeout(s);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),u&&document.head.appendChild(i)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var a=b.S[t],i="product",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];switch(t){case"default":u("@material-ui/core","4.11.3",(()=>Promise.all([b.e(138),b.e(865)]).then((()=>()=>b(138))))),u("microfrontend-react","1.0.0",(()=>b.e(570).then((()=>()=>b(570))))),u("react","17.0.1",(()=>b.e(526).then((()=>()=>b(526))))),u("react","17.0.1",(()=>b.e(3).then((()=>()=>b(3)))))}return e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var r=b.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(u=e[a]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():o(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var d,f,c=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(f=(typeof(d=r[i]))[0]))return!l||("u"==c?u>n&&!o:""==c!=o);if("u"==f){if(!l||"u"!=c)return!1}else if(l)if(c==f)if(u<=n){if(d!=e[u])return!1}else{if(o?d>e[u]:d<e[u])return!1;d!=e[u]&&(l=!1)}else if("s"!=c&&"n"!=c){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||f<c!=o)return!1;l=!1}else"s"!=c&&"n"!=c&&(l=!1,u--)}}var s=[],p=s.pop.bind(s);for(i=1;i<e.length;i++){var h=e[i];s.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",l=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(u(t,o,n)),d(e[t][o])},d=e=>(e.loaded=1,e.get()),f=(e=>function(r,t,n,o){var a=b.I(r);return a&&a.then?a.then(e.bind(e,r,b.S[r],t,n,o)):e(0,b.S[r],t,n,o)})(((e,r,t,n,o)=>r&&b.o(r,t)?l(r,0,t,n):o())),c={},s={865:()=>f("default","react",[1,17,0,1],(()=>b.e(526).then((()=>()=>b(526))))),824:()=>f("default","react",[1,17,0,1],(()=>b.e(637).then((()=>()=>b(3))))),47:()=>f("default","@material-ui/core",[1,4,11,3],(()=>b.e(138).then((()=>()=>b(138))))),738:()=>f("default","microfrontend-react",[8,"file:","","/","","/libs/microfrontend",,"react"],(()=>b.e(570).then((()=>()=>b(570)))))},p={180:[47,738],570:[824],865:[865]},b.f.consumes=(e,r)=>{b.o(p,e)&&p[e].forEach((e=>{if(b.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},n=r=>{delete c[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var o=s[e]();o.then?r.push(c[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={584:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(865!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=b.p+b.u(r),i=new Error;b.l(a,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,u]=t,l=0;for(n in i)b.o(i,n)&&(b.m[n]=i[n]);for(u&&u(b),r&&r(t);l<a.length;l++)o=a[l],b.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0},t=self.webpackChunkproduct=self.webpackChunkproduct||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var g=b(185);microfrontend_product=g})();
//# sourceMappingURL=micro-frontend.nocache.js.map