(()=>{var e,r,t,n,o,a,i,u,l,f,c,s,d,p={1921:(e,r,t)=>{Promise.all([t.e(993),t.e(565),t.e(865),t.e(475)]).then(t.bind(t,4475))}},h={};function v(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={exports:{}};return p[e].call(t.exports,t,t.exports,v),t.exports}v.m=p,v.c=h,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce((r,t)=>(v.f[t](e,r),r),[])),v.u=e=>e+"."+{3:"bf42c8f6ebc044c82a3b",236:"85205a1a7257a12280aa",475:"0ded0fc9c346b2f5a1f9",526:"1f482e59ed75907151f2",565:"e41bbe0c1c0f032af44d",570:"4b887d7c265c964c07b0",637:"d689160662e32ebb7a6b",841:"43022d0e5380849e71a4",865:"886414e63793988924f6",993:"4607f6ede057dbfb2f2b"}[e]+".js",v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},v.l=(r,t,n,o)=>{if(e[r])e[r].push(t);else{var a,i;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")=="root:"+n){a=f;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,v.nc&&a.setAttribute("nonce",v.nc),a.setAttribute("data-webpack","root:"+n),a.src=r),e[r]=[t];var c=(t,n)=>{a.onerror=a.onload=null,clearTimeout(s);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach(e=>e(n)),t)return t(n)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),i&&document.head.appendChild(a)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{v.S={};var e={},r={};v.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];v.o(v.S,t)||(v.S[t]={});var a=v.S[t],i=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:"root">i.from))&&(o[r]={get:t,from:"root",eager:!!n})},u=[];switch(t){case"default":i("@material-ui/core","4.11.3",()=>Promise.all([v.e(236),v.e(993),v.e(865)]).then(()=>()=>v(4236))),i("microfrontend-react","1.0.0",()=>v.e(570).then(()=>()=>v(2570))),i("react","17.0.1",()=>v.e(526).then(()=>()=>v(9526))),i("react","17.0.1",()=>v.e(3).then(()=>()=>v(3)))}return e[t]=u.length?Promise.all(u).then(()=>e[t]=1):1}}})(),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var r=v.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),r=e=>{var r=e=>e.split(".").map(e=>+e==e?+e:e),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},t=(e,t)=>{e=r(e),t=r(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=e[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():n(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=r(t);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var f,c,s=u<e.length?(typeof e[u])[0]:"";if(i>=t.length||"o"==(c=(typeof(f=t[i]))[0]))return!l||("u"==s?u>n&&!a:""==s!=a);if("u"==c){if(!l||"u"!=s)return!1}else if(l)if(s==c)if(u<=n){if(f!=e[u])return!1}else{if(a?f>e[u]:f<e[u])return!1;f!=e[u]&&(l=!1)}else if("s"!=s&&"n"!=s){if(a||u<=n)return!1;l=!1,u--}else{if(u<=n||c<s!=a)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,u--)}}var d=[],p=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},a=(e,r)=>{var n=e[r];return Object.keys(n).reduce((e,r)=>!e||!n[e].loaded&&t(e,r)?r:e,0)},i=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+n(t)+")",u=(e,r,t,n)=>{var u=a(e,t);return o(n,u)||"undefined"!=typeof console&&console.warn&&console.warn(i(t,u,n)),l(e[t][u])},l=e=>(e.loaded=1,e.get()),f=(e=>function(r,t,n,o){var a=v.I(r);return a&&a.then?a.then(e.bind(e,r,v.S[r],t,n,o)):e(0,v.S[r],t,n,o)})((e,r,t,n,o)=>r&&v.o(r,t)?u(r,0,t,n):o()),c={},s={7865:()=>f("default","react",[1,17,0,1],()=>v.e(841).then(()=>()=>v(9526))),3047:()=>f("default","@material-ui/core",[1,4,11,3],()=>v.e(236).then(()=>()=>v(4236))),4738:()=>f("default","microfrontend-react",[8,"file:","","/","","/libs/microfrontend",,"react"],()=>v.e(570).then(()=>()=>v(2570))),4824:()=>f("default","react",[1,17,0,1],()=>v.e(637).then(()=>()=>v(3)))},d={475:[3047,4738],570:[4824],865:[7865]},v.f.consumes=(e,r)=>{v.o(d,e)&&d[e].forEach(e=>{if(v.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,v.m[e]=t=>{delete v.c[e],t.exports=r()}},n=r=>{delete c[e],v.m[e]=t=>{throw delete v.c[e],r}};try{var o=s[e]();o.then?r.push(c[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}})},(()=>{var e={179:0};v.f.j=(r,t)=>{var n=v.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(865!=r){var o=new Promise((t,o)=>n=e[r]=[t,o]);t.push(n[2]=o);var a=v.p+v.u(r),i=new Error;v.l(a,t=>{if(v.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}},"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,u]=t,l=0;for(n in i)v.o(i,n)&&(v.m[n]=i[n]);for(u&&u(v),r&&r(t);l<a.length;l++)o=a[l],v.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0},t=self.webpackChunkroot=self.webpackChunkroot||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),v(1921)})();
//# sourceMappingURL=main.nocache.js.map