var e$2,r$2,shim,useSyncExternalStoreShim_production_min,e$1,k,l$1,m,n$1,p,u$1,shimExports,events,l,t;import{r as reactExports,R as React,a as ReactDOM,j as jsxRuntimeExports,E as ExtensionRender,u as useFlexboxJustifyContent,S as Stars,b as Stars$1,c as axios,d as ReviewGateway,e as axiosPrivate,f as useGateway,g as useStoreId,h as useProductId,i as ReviewStatisticsContext,T as ThemeContext,k as useLocale,l as f,m as client,I as I18nextProvider,n as instance,F as FilterContextProvider,o as ThemeContextProvider,p as ReviewStatisticsContextProvider}from"./bk-index.js";e$2=Object.defineProperty,r$2=function(a,b){return e$2(a,"name",{value:b,configurable:!0})},shim={exports:{}},useSyncExternalStoreShim_production_min={},e$1=reactExports;function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}k="function"==typeof Object.is?Object.is:h,l$1=e$1.useState,m=e$1.useEffect,n$1=e$1.useLayoutEffect,p=e$1.useDebugValue;function q(d,c){var b=c(),f=l$1({inst:{value:b,getSnapshot:c}}),a=f[0].inst,e=f[1];return n$1(function(){a.value=b,a.getSnapshot=c,r$1(a)&&e({inst:a})},[d,b,c]),m(function(){return r$1(a)&&e({inst:a}),d(function(){r$1(a)&&e({inst:a})})},[d]),p(b),b}function r$1(a){var b=a.getSnapshot,c;a=a.value;try{return c=b(),!k(a,c)}catch(a){return!0}}function t$2(b,a){return a()}u$1="undefined"==typeof window||"undefined"==typeof window.document||"undefined"==typeof window.document.createElement?t$2:q,useSyncExternalStoreShim_production_min.useSyncExternalStore=void 0!==e$1.useSyncExternalStore?e$1.useSyncExternalStore:u$1,shim.exports=useSyncExternalStoreShim_production_min,shimExports=shim.exports;const noop=()=>{},UNDEFINED=noop(),OBJECT=Object,isUndefined=a=>a===UNDEFINED,isFunction=a=>typeof a=="function",mergeObjects=(a,b)=>({...a,...b}),isPromiseLike=a=>isFunction(a.then),table=new WeakMap;let counter=0;const stableHash=a=>{const e=typeof a,d=a&&a.constructor,f=d==Date;let b,c;if(OBJECT(a)===a&&!f&&d!=RegExp){{if(b=table.get(a),b)return b;if(b=++counter+"~",table.set(a,b),d==Array){b="@";for(c=0;c<a.length;c++)b+=stableHash(a[c])+",";table.set(a,b)}if(d==OBJECT){b="#";const d=OBJECT.keys(a).sort();while(!isUndefined(c=d.pop()))isUndefined(a[c])||(b+=c+":"+stableHash(a[c])+",");table.set(a,b)}}}else b=f?a.toJSON():e=="symbol"?a.toString():e=="string"?JSON.stringify(a):""+a;return b},SWRGlobalState=new WeakMap,EMPTY_CACHE={},INITIAL_CACHE={},STR_UNDEFINED="undefined",isWindowDefined=typeof window!=STR_UNDEFINED,isDocumentDefined=typeof document!=STR_UNDEFINED,hasRequestAnimationFrame=()=>isWindowDefined&&typeof window.requestAnimationFrame!=STR_UNDEFINED,createCacheHelper=(b,a)=>{const c=SWRGlobalState.get(b);return[()=>!isUndefined(a)&&b.get(a)||EMPTY_CACHE,d=>{if(!isUndefined(a)){const e=b.get(a);a in INITIAL_CACHE||(INITIAL_CACHE[a]=e),c[5](a,mergeObjects(e,d),e||EMPTY_CACHE)}},c[6],()=>{if(!isUndefined(a))if(a in INITIAL_CACHE)return INITIAL_CACHE[a];return!isUndefined(a)&&b.get(a)||EMPTY_CACHE}]};let online=!0;const isOnline=()=>online,[onWindowEvent,offWindowEvent]=isWindowDefined&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[noop,noop],isVisible=()=>{const a=isDocumentDefined&&document.visibilityState;return isUndefined(a)||a!=="hidden"},initFocus=a=>(isDocumentDefined&&document.addEventListener("visibilitychange",a),onWindowEvent("focus",a),()=>{isDocumentDefined&&document.removeEventListener("visibilitychange",a),offWindowEvent("focus",a)}),initReconnect=c=>{const a=()=>{online=!0,c()},b=()=>{online=!1};return onWindowEvent("online",a),onWindowEvent("offline",b),()=>{offWindowEvent("online",a),offWindowEvent("offline",b)}},preset={isOnline,isVisible},defaultConfigOptions={initFocus,initReconnect},IS_REACT_LEGACY=!React.useId,IS_SERVER=!isWindowDefined||"Deno"in window,rAF=a=>hasRequestAnimationFrame()?window.requestAnimationFrame(a):setTimeout(a,1),useIsomorphicLayoutEffect=IS_SERVER?reactExports.useEffect:reactExports.useLayoutEffect,navigatorConnection=typeof navigator!="undefined"&&navigator.connection,slowConnection=!IS_SERVER&&navigatorConnection&&(["slow-2g","2g"].includes(navigatorConnection.effectiveType)||navigatorConnection.saveData),serialize=a=>{if(isFunction(a))try{a=a()}catch(b){a=""}const b=a;return a=typeof a=="string"?a:(Array.isArray(a)?a.length:a)?stableHash(a):"",[a,b]};let __timestamp=0;const getTimestamp=()=>++__timestamp,FOCUS_EVENT=0,RECONNECT_EVENT=1,MUTATE_EVENT=2,ERROR_REVALIDATE_EVENT=3;events={__proto__:null,ERROR_REVALIDATE_EVENT,FOCUS_EVENT,MUTATE_EVENT,RECONNECT_EVENT};async function internalMutate(...h){const[d,g,j,e]=h,a=mergeObjects({populateCache:!0,throwOnError:!0},typeof e=="boolean"?{revalidate:e}:e||{});let c=a.populateCache;const f=a.rollbackOnError;let b=a.optimisticData;const k=a=>typeof f=="function"?f(a):f!==!1,l=a.throwOnError;if(isFunction(g)){const b=g,a=[],c=d.keys();for(const e of c)!/^\$(inf|sub)\$/.test(e)&&b(d.get(e)._k)&&a.push(e);return Promise.all(a.map(i))}return i(g);async function i(v){const[g]=serialize(v);if(!g)return;const[n,i]=createCacheHelper(d,g),[y,o,x,w]=SWRGlobalState.get(d),p=()=>{const b=y[g],c=isFunction(a.revalidate)?a.revalidate(n().data,v):a.revalidate!==!1;if(c)if(delete x[g],delete w[g],b&&b[0])return b[0](MUTATE_EVENT).then(()=>n().data);return n().data};if(h.length<3)return p();let e=j,f;const t=getTimestamp();o[g]=[t,0];const u=!isUndefined(b),q=n(),r=q.data,s=q._c,m=isUndefined(s)?r:s;if(u&&(b=isFunction(b)?b(m,r):b,i({data:b,_c:m})),isFunction(e))try{e=e(m)}catch(a){f=a}if(e&&isPromiseLike(e)){if(e=await e.catch(a=>{f=a}),t!==o[g][0]){if(f)throw f;return e}f&&u&&k(f)&&(c=!0,i({data:m,_c:UNDEFINED}))}if(c)if(!f)if(isFunction(c)){const a=c(e,m);i({data:a,error:UNDEFINED,_c:UNDEFINED})}else i({data:e,error:UNDEFINED,_c:UNDEFINED});if(o[g][1]=getTimestamp(),Promise.resolve(p()).then(()=>{i({_c:UNDEFINED})}),f){if(l)throw f;return}return e}}const revalidateAllKeys=(a,b)=>{for(const c in a)a[c][0]&&a[c][0](b)},initCache=(a,b)=>{if(!SWRGlobalState.has(a)){const e=mergeObjects(defaultConfigOptions,b),c={},f=internalMutate.bind(UNDEFINED,a);let g=noop;const d={},i=(b,c)=>{const a=d[b]||[];return d[b]=a,a.push(c),()=>a.splice(a.indexOf(c),1)},j=(b,c,f)=>{a.set(b,c);const e=d[b];if(e)for(const a of e)a(c,f)},h=()=>{if(!SWRGlobalState.has(a))if(SWRGlobalState.set(a,[c,{},{},{},f,j,i]),!IS_SERVER){const b=e.initFocus(setTimeout.bind(UNDEFINED,revalidateAllKeys.bind(UNDEFINED,c,FOCUS_EVENT))),d=e.initReconnect(setTimeout.bind(UNDEFINED,revalidateAllKeys.bind(UNDEFINED,c,RECONNECT_EVENT)));g=()=>{b&&b(),d&&d(),SWRGlobalState.delete(a)}}};return h(),[a,f,h,g]}return[a,SWRGlobalState.get(a)[4]]},onErrorRetry=(g,h,b,f,c)=>{const d=b.errorRetryCount,a=c.retryCount,e=~~((Math.random()+.5)*(1<<(a<8?a:8)))*b.errorRetryInterval;if(!isUndefined(d)&&a>d)return;setTimeout(f,e,c)},compare=(a,b)=>stableHash(a)==stableHash(b),[cache,mutate]=initCache(new Map),defaultConfig=mergeObjects({onLoadingSlow:noop,onSuccess:noop,onError:noop,onErrorRetry,onDiscarded:noop,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:slowConnection?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:slowConnection?5e3:3e3,compare,isPaused:()=>!1,cache,mutate,fallback:{}},preset),mergeConfigs=(c,a)=>{const b=mergeObjects(c,a);if(a){const{use:d,fallback:e}=c,{use:f,fallback:g}=a;d&&f&&(b.use=d.concat(f)),e&&g&&(b.fallback=mergeObjects(e,g))}return b},SWRConfigContext=reactExports.createContext({}),INFINITE_PREFIX="$inf$",enableDevtools=isWindowDefined&&window.__SWR_DEVTOOLS_USE__,use$1=enableDevtools?window.__SWR_DEVTOOLS_USE__:[],setupDevTools=()=>{enableDevtools&&(window.__SWR_DEVTOOLS_REACT__=React)},normalize=a=>isFunction(a[1])?[a[0],a[1],a[2]||{}]:[a[0],null,(a[1]===null?a[2]:a[1])||{}],useSWRConfig=()=>mergeObjects(defaultConfig,reactExports.useContext(SWRConfigContext)),middleware=a=>(c,b,d)=>{const e=b&&((...d)=>{const[a]=serialize(c),[,,,e]=SWRGlobalState.get(cache);if(a.startsWith(INFINITE_PREFIX))return b(...d);const f=e[a];return isUndefined(f)?b(...d):(delete e[a],f)});return a(c,e,d)},BUILT_IN_MIDDLEWARE=use$1.concat(middleware),withArgs=a=>function(...h){const e=useSWRConfig(),[j,f,g]=normalize(h),b=mergeConfigs(e,g);let c=a;const{use:i}=b,d=(i||[]).concat(BUILT_IN_MIDDLEWARE);for(let a=d.length;a--;)c=d[a](c);return c(j,f||b.fetcher||null,b)},subscribeCallback=(b,c,d)=>{const a=c[b]||(c[b]=[]);return a.push(d),()=>{const b=a.indexOf(d);b>=0&&(a[b]=a[a.length-1],a.pop())}};setupDevTools();const use=React.use||(a=>{if(a.status==="pending")throw a;if(a.status==="fulfilled")return a.value;throw a.status==="rejected"?a.reason:(a.status="pending",a.then(b=>{a.status="fulfilled",a.value=b},b=>{a.status="rejected",a.reason=b}),a)}),WITH_DEDUPE={dedupe:!0},useSWRHandler=(V,k,c)=>{const{cache:g,compare:u,suspense:v,fallbackData:C,revalidateOnMount:q,revalidateIfStale:t,refreshInterval:n,refreshWhenHidden:I,refreshWhenOffline:F,keepPreviousData:U}=c,[o,R,e,Q]=SWRGlobalState.get(g),[a,E]=serialize(V),w=reactExports.useRef(!1),j=reactExports.useRef(!1),s=reactExports.useRef(a),A=reactExports.useRef(k),x=reactExports.useRef(c),b=()=>x.current,z=()=>b().isVisible()&&b().isOnline(),[d,y,P,O]=createCacheHelper(g,a),m=reactExports.useRef({}).current,N=isUndefined(C)?c.fallback[a]:C,G=(a,b)=>{for(const d in m){const c=d;if(c==="data"){if(!u(a[c],b[c])){if(!isUndefined(a[c]))return!1;if(!u(p,b[c]))return!1}}else if(b[c]!==a[c])return!1}return!0},H=reactExports.useMemo(()=>{const j=(()=>!!a&&(!!k&&(isUndefined(q)?!b().isPaused()&&(!v&&(!!isUndefined(t)||t)):q)))(),e=b=>{const a=mergeObjects(b);return delete a._k,!j?a:{isValidating:!0,isLoading:!0,...a}},f=d(),g=O(),h=e(f),i=f===g?h:e(g);let c=h;return[()=>{const a=e(d()),b=G(a,c);return b?(c.data=a.data,c.isLoading=a.isLoading,c.isValidating=a.isValidating,c.error=a.error,c):(c=a,a)},()=>i]},[g,a]),f=shimExports.useSyncExternalStore(reactExports.useCallback(b=>P(a,(a,c)=>{G(c,a)||b()}),[g,a]),H[0],H[1]),J=!w.current,M=o[a]&&o[a].length>0,h=f.data,i=isUndefined(h)?N:h,r=f.error,D=reactExports.useRef(i),p=U?isUndefined(h)?D.current:h:i,B=(()=>!(M&&!isUndefined(r))&&(J&&!isUndefined(q)?q:!b().isPaused()&&(v?!isUndefined(i)&&t:isUndefined(i)||t)))(),K=!!(a&&k&&J&&B),S=isUndefined(f.isValidating)?K:f.isValidating,T=isUndefined(f.isLoading)?K:f.isLoading,l=reactExports.useCallback(async t=>{const n=A.current;if(!a||!n||j.current||b().isPaused())return!1;let g,i,l=!0;const m=t||{},f=!e[a]||!m.dedupe,h=()=>IS_REACT_LEGACY?!j.current&&a===s.current&&w.current:a===s.current,k={isValidating:!1,isLoading:!1},p=()=>{y(k)},q=()=>{const b=e[a];b&&b[1]===i&&delete e[a]},r={isValidating:!0};isUndefined(d().data)&&(r.isLoading=!0);try{if(f&&(y(r),c.loadingTimeout&&isUndefined(d().data)&&setTimeout(()=>{l&&h()&&b().onLoadingSlow(a,c)},c.loadingTimeout),e[a]=[n(E),getTimestamp()]),[g,i]=e[a],g=await g,f&&setTimeout(q,c.dedupingInterval),!e[a]||e[a][1]!==i)return f&&h()&&b().onDiscarded(a),!1;k.error=UNDEFINED;const j=R[a];if(!isUndefined(j)&&(i<=j[0]||i<=j[1]||j[1]===0))return p(),f&&h()&&b().onDiscarded(a),!1;const m=d().data;k.data=u(m,g)?m:g,f&&h()&&b().onSuccess(g,a,c)}catch(d){q();const c=b(),{shouldRetryOnError:e}=c;c.isPaused()||(k.error=d,f&&h()&&(c.onError(d,a,c),(e===!0||isFunction(e)&&e(d))&&(!b().revalidateOnFocus||!b().revalidateOnReconnect||z())&&c.onErrorRetry(d,a,c,c=>{const b=o[a];b&&b[0]&&b[0](events.ERROR_REVALIDATE_EVENT,c)},{retryCount:(m.retryCount||0)+1,dedupe:!0})))}return l=!1,p(),!0},[a,g]),L=reactExports.useCallback((...a)=>internalMutate(g,s.current,...a),[]);if(useIsomorphicLayoutEffect(()=>{A.current=k,x.current=c,isUndefined(h)||(D.current=h)}),useIsomorphicLayoutEffect(()=>{if(!a)return;const c=l.bind(UNDEFINED,WITH_DEDUPE);let d=0;const e=(a,e={})=>{if(a==events.FOCUS_EVENT){const a=Date.now();b().revalidateOnFocus&&a>d&&z()&&(d=a+b().focusThrottleInterval,c())}else if(a==events.RECONNECT_EVENT)b().revalidateOnReconnect&&z()&&c();else if(a==events.MUTATE_EVENT)return l();else if(a==events.ERROR_REVALIDATE_EVENT)return l(e)},f=subscribeCallback(a,o,e);return j.current=!1,s.current=a,w.current=!0,y({_k:E}),B&&(isUndefined(i)||IS_SERVER?c():rAF(c)),()=>{j.current=!0,f()}},[a]),useIsomorphicLayoutEffect(()=>{let a;function c(){const b=isFunction(n)?n(d().data):n;b&&a!==-1&&(a=setTimeout(e,b))}function e(){!d().error&&(I||b().isVisible())&&(F||b().isOnline())?l(WITH_DEDUPE).then(c):c()}return c(),()=>{a&&(clearTimeout(a),a=-1)}},[n,I,F,a]),reactExports.useDebugValue(p),v&&isUndefined(i)&&a){if(!IS_REACT_LEGACY&&IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");A.current=k,x.current=c,j.current=!1;const b=Q[a];if(!isUndefined(b)){const a=L(b);use(a)}if(isUndefined(r)){const a=l(WITH_DEDUPE);isUndefined(p)||(a.status="fulfilled",a.value=!0),use(a)}else throw r}return{mutate:L,get data(){return m.data=!0,p},get error(){return m.error=!0,r},get isValidating(){return m.isValidating=!0,S},get isLoading(){return m.isLoading=!0,T}}},useSWR=withArgs(useSWRHandler);function r(c,a){(a==null||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function t$1(a){if(Array.isArray(a))return a}function e(c,h,i,d,e,f,g){var a,b;try{a=c[f](g),b=a.value}catch(a){i(a);return}a.done?h(b):Promise.resolve(b).then(d,e)}function n(a){return function(){var b=this,c=arguments;return new Promise(function(f,g){var h=a.apply(b,c);function d(a){e(h,f,g,d,i,"next",a)}function i(a){e(h,f,g,d,i,"throw",a)}d(void 0)})}}function o(b,e){var a=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"],c,d,f,g,h;if(a==null)return;c=[],d=!0,f=!1;try{for(a=a.call(b);!(d=(g=a.next()).done);d=!0)if(c.push(g.value),e&&c.length===e)break}catch(a){f=!0,h=a}finally{try{!d&&a.return!=null&&a.return()}finally{if(f)throw h}}return c}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(b,c){return t$1(b)||o(b,c)||i(b,c)||a()}function i(a,c){if(!a)return;if(typeof a=="string")return r(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if(b==="Object"&&a.constructor&&(b=a.constructor.name),b==="Map"||b==="Set")return Array.from(b);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return r(a,c)}l=globalThis&&globalThis.__generator||function(g,h){var e,c,a,f,b={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]};return f={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function d(a){return function(b){return i([a,b])}}function i(d){if(e)throw new TypeError("Generator is already executing.");while(b)try{if(e=1,c&&(a=d[0]&2?c.return:d[0]?c.throw||((a=c.return)&&a.call(c),0):c.next)&&!(a=a.call(c,d[1])).done)return a;switch(c=0,a&&(d=[d[0]&2,a.value]),d[0]){case 0:case 1:a=d;break;case 4:return b.label++,{value:d[1],done:!1};case 5:b.label++,c=d[1],d=[0];continue;case 7:d=b.ops.pop(),b.trys.pop();continue;default:if(!(a=b.trys,a=a.length>0&&a[a.length-1])&&(d[0]===6||d[0]===2)){b=0;continue}if(d[0]===3&&(!a||d[1]>a[0]&&d[1]<a[3])){b.label=d[1];break}if(d[0]===6&&b.label<a[1]){b.label=a[1],a=d;break}if(a&&b.label<a[2]){b.label=a[2],b.ops.push(d);break}a[2]&&b.ops.pop(),b.trys.pop();continue}d=h.call(g,b)}catch(a){d=[6,a],c=0}finally{e=a=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}};function s(b,c){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=d.body,e=d.method,f=d.query;return useSWR(b,function(){var d=n(function(d){var g,h,i;return l(this,function(j){switch(j.label){case 0:return typeof b!="string"&&(g=u(b,1),d=g[0],g),f&&(d="".concat(d,"?").concat(Object.entries(f).reduce(function(b,c,d,e){var a=u(b,2),f=a[0],g=a[1];return c+f+"="+JSON.stringify(g)+(d!==e.length-1?"¨&":"")},""))),c?a?[4,c.post(d,a)]:[3,2]:[3,5];case 1:return h=j.sent(),[3,4];case 2:return[4,c.get(d)];case 3:h=j.sent(),j.label=4;case 4:return[2,h.data];case 5:return a?[4,fetch(d,{body:a.toString(),method:(e===null||e===void 0?void 0:e.toUpperCase())||"POST"})]:[3,7];case 6:return i=j.sent(),[3,9];case 7:return[4,fetch(d)];case 8:i=j.sent(),j.label=9;case 9:return[2,i.json()]}})});return function(a){return d.apply(this,arguments)}}())}r$2(s,"useFetch"),t=r$2(function(a){reactExports.useEffect(function(){var h=document.head.querySelectorAll("style"),b=!0,d=!1,e=void 0,c,f,i,g;try{for(c=h[Symbol.iterator](),f;!(b=(f=c.next()).done);b=!0)if(i=f.value,i.innerHTML===a)return}catch(a){d=!0,e=a}finally{try{!b&&c.return!=null&&c.return()}finally{if(d)throw e}}g=document.createElement("style"),g.innerHTML=a,document.head.appendChild(g)},[a])},"useStyleInjection");const findFirstElementInDOM=a=>a.filter(a=>a!==null).sort((a,b)=>!a||!b?0:a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)[0],insertReviewSection=k=>{var i,j;const s=document.getElementById("bk-review-section"),q=document.getElementById("auto-bk-review-section");if(s||q){console.log("returned because already review section");return}let c;const p=document.querySelectorAll('.shopify-section[id*="template"]');for(const a of p)if(a.querySelector("h1")||a.querySelector("h2")){c=a;break}const h=document.querySelector("main")??document.querySelector("#main")??document.querySelector('[role="main"]'),g=c?c.parentNode:h,a=document.createElement("div");a.classList.add("bk-reviews",k),a.style.width="100%",a.style.height="fit-content",a.id="auto-bk-review-section";const b=document.querySelector(".container--flush"),m=document.querySelector('.shopify-section[id*="recently-viewed-products"]'),n=document.querySelector('.shopify-section[id*="recommendations"]'),t=document.querySelector("product-recommendations"),o=document.querySelector('.shopify-section[id*="promotions"]'),e=document.querySelector('.shopify-section[id*="product-content"]'),d=document.querySelector('.shopify-section[id*="information-tabs"]'),r=[m,n,t,o],f=findFirstElementInDOM(r),l=f==null?void 0:f.parentNode;f&&l?(console.log("insertBeforeSection",f),l.insertBefore(a,f)):(e==null?void 0:e.nextElementSibling)?(console.log("productSection",e),(i=e.parentNode)==null?void 0:i.insertBefore(a,e.nextElementSibling)):(d==null?void 0:d.nextElementSibling)?(console.log("informationTabsSection",d),(j=d.parentNode)==null?void 0:j.insertBefore(a,d.nextElementSibling)):(b==null?void 0:b.parentNode)&&b.nextElementSibling?(console.log("containerFlush",b),b.parentNode.insertBefore(a,b.nextElementSibling)):c?c.nextElementSibling?(console.log("after targetSection"),g==null?void 0:g.insertBefore(a,c.nextElementSibling)):(console.log("child of targetSectionParent"),g==null?void 0:g.appendChild(a)):h?(console.log("child of mainSection"),h.appendChild(a)):console.log("no section found"),ReactDOM.render(jsxRuntimeExports.jsx(ExtensionRender,{theme:k,extension:"review-section"}),a)},insertStarSection=b=>{const d=document.getElementById("bk-star-section"),e=document.getElementById("auto-bk-star-section");if(d||e){console.log("returned because already star section");return}const a=document.querySelector("main")??document.querySelector("#main")??document.querySelector('[role="main"]'),c=[(a==null?void 0:a.querySelector("h1"))??document.querySelector("h1")??(a==null?void 0:a.querySelector("h2"))??document.querySelector("h2")],f=document.querySelectorAll(".small--hide h1, .small--hide h2");f.forEach(a=>{c.push(a)}),c.forEach(a=>{const d=a==null?void 0:a.parentElement,c=document.createElement("div");c.classList.add("bk-reviews",b),c.id="auto-bk-star-section",a&&d&&(a.style.marginBottom="0",d.insertBefore(c,a.nextSibling),ReactDOM.render(jsxRuntimeExports.jsx(ExtensionRender,{theme:b,extension:"star-section"}),c))})};function DefaultCollectionStarSection({reviewAmount:b,averageRating:c}){const a=reactExports.useRef(null),d=useFlexboxJustifyContent(a);return jsxRuntimeExports.jsx("div",{ref:a,className:"tw-flex tw-gap-2 tw-text-black/80 tw-text-md",style:{justifyContent:d},children:jsxRuntimeExports.jsxs("div",{className:"tw-flex tw-gap-1 tw-items-center",children:[jsxRuntimeExports.jsx(Stars,{starSize:"medium",className:"tw-text-2xl mb-[1px]",averageRating:c}),jsxRuntimeExports.jsxs("p",{className:"tw-text-[max(14px,_1rem)] tw-leading-[normal]",children:["(",b,")"]})]})})}function PianoCollectionStarSection({reviewAmount:a,averageRating:b}){const c=reactExports.useRef(null),d=useFlexboxJustifyContent(c);return jsxRuntimeExports.jsx("div",{className:"tw-flex tw-gap-2 tw-text-black/80 tw-text-md tw-items-center",style:{justifyContent:d},children:jsxRuntimeExports.jsxs("div",{className:"tw-flex tw-gap-1 tw-items-center",children:[jsxRuntimeExports.jsx(Stars$1,{starSize:"medium",className:"tw-text-2xl tw-mb-[1px]",averageRating:b}),jsxRuntimeExports.jsxs("p",{className:"tw-text-[max(14px,_1rem)]",children:["(",a,")"]})]})})}function collectionStarSectionFactory({theme:d,componentProps:e}){const{reviewAmount:a,averageRating:b}=e,c={default:jsxRuntimeExports.jsx(DefaultCollectionStarSection,{reviewAmount:a,averageRating:b}),sol:jsxRuntimeExports.jsx(DefaultCollectionStarSection,{reviewAmount:a,averageRating:b}),classic:jsxRuntimeExports.jsx(DefaultCollectionStarSection,{reviewAmount:a,averageRating:b}),wide:jsxRuntimeExports.jsx(DefaultCollectionStarSection,{reviewAmount:a,averageRating:b}),piano:jsxRuntimeExports.jsx(PianoCollectionStarSection,{reviewAmount:a,averageRating:b})};return c[d]??c.default}function CollectionStarSection({theme:a,reviewAmount:b,averageRating:c}){const d=collectionStarSectionFactory({theme:a,componentProps:{reviewAmount:b,averageRating:c}});return jsxRuntimeExports.jsx("div",{className:"tw-my-[0.75rem]",children:d})}const getStoreProducts=async g=>{const c=250,e=`https://${g}/products.json?limit=${c}`,d=5,f=3;let a=[],b=!1;for(let g=0;g<f;g++)if(await Promise.all(new Array(d).fill(0).map(async(l,j)=>{const k=d*g+j+1,f=`${e}&page=${k}`,h=await axios.get(f);if(h.status!==200){console.error(`Failed to fetch products from ${f}`);return}const i=h.data.products;a=a.concat(i),i.length<c&&(b=!0)})),b)break;return a},insertProductStatistics=(j,b,f,g,h)=>{const{averageRating:i,reviewAmount:e}=j;if(b.querySelector(`.collection-star-section[data-product-id="${g}"]`))return;if(h&&!e)return;const a=document.createElement("div");a.classList.add("collection-star-section","bk-reviews",f),a.setAttribute("data-product-id",g),a.style.textAlign="inherit",b.style.margin="0";const c=b.parentElement;if(!c)return;const d=b.nextElementSibling;d?(d.style.setProperty("margin-top","0"),c.insertBefore(a,d)):c.appendChild(a),ReactDOM.render(jsxRuntimeExports.jsx(CollectionStarSection,{theme:f,averageRating:i,reviewAmount:e}),a)},getStoreProductsMap=async(b,c)=>{const a=new Map;return b.forEach(b=>{a.set(b.handle,b.id)}),a},insertProductsStatistics=async(b,c,d,e,f)=>{const a=new Map;b.forEach(b=>{a.set(b.productId,b)}),await Promise.all(c.map(async c=>{var g,h,i;const l=decodeURIComponent(c.getAttribute("href")??""),j=(h=(g=l.split("/products/"))==null?void 0:g[1])==null?void 0:h.split("?")[0];if(!j)return;const b=d.get(j),k=b?a.get(String(b)):null,m=(i=c.parentElement)==null?void 0:i.querySelector(`.collection-star-section[data-product-id="${b}"]`);if(m)return;if(k)return insertProductStatistics(k,c,e,String(b),f),await Promise.resolve()})),fixSliderOverflow()},getProductCards=h=>{let a=[];const d='.shopify-section[id*="recently-viewed-products"]',e='.shopify-section[id*="recommendations"]',f='.shopify-section[id*="promotions"]',g=[d,e,f],b=['a[href*="/products/"][class*="title"]','[class*="title"] a[href*="/products/"]','a[href*="/products/"][id*="CardLink"]','a[href*="/products/"][class*="product-link"]','a[href*="/products/"][class*="link"]'];let c=b;if(h){let a;for(const c of b){const d=document.querySelector(c);if(d){a=c;break}}if(!a)return[];c=g.map(b=>`${b} ${a}`)}for(const b of c)if(a=document.querySelectorAll(b),a.length)break;return Array.from(a).filter(a=>a instanceof HTMLElement)},getProductHandles=b=>{const a=new Set;return b.forEach(e=>{var b,c;const f=decodeURIComponent(e.getAttribute("href")??""),d=(c=(b=f.split("/products/"))==null?void 0:b[1])==null?void 0:c.split("?")[0];if(!d)return;a.add(d)}),a},getFilteredProducts=(b,c)=>{const a=[];for(const d of c)b.has(d.handle)&&a.push(d);return a},getProductIds=a=>a.map(a=>a.id).sort((a,b)=>Number(b)-Number(a)),getProductsStatistics=(a,b)=>{const c=new ReviewGateway(a[0],b,axiosPrivate);return c.getCollectionStatistics(a)},fixSliderOverflow=()=>{const a=[],b=[".flickity-viewport:has(.collection-star-section)",".product-list:has(.collection-star-section)"];for(const c of b){const d=document.querySelectorAll(c);a.push(...d)}if(!a.length)return;a.forEach(a=>{const b=a.querySelector(".flickity-slider > div");if(!b)return;const c=b.offsetHeight,d=a.offsetHeight;c>d&&(a.style.height=`${c}px`)})};let allStoreProducts;const statistics=new Map,getStatisticsAndMap=async(e,b)=>{const f=getProductHandles(e);allStoreProducts||(allStoreProducts=await getStoreProducts(b));const c=getFilteredProducts(f,allStoreProducts),d=getProductIds(c),a=d.toString(),g=await getStoreProductsMap(c);return statistics.get(a)||statistics.set(a,await getProductsStatistics(d,b)),{statistics:statistics.get(a),productMap:g}};async function insertCollectionStarSection(g,h,c,e=!1,f=!0){const d=getProductCards(g),{statistics:a,productMap:b}=await getStatisticsAndMap(d,h);f&&c&&a&&b&&insertProductsStatistics(a,d,b,c,e)}function observeDOM(b,c){const a=new MutationObserver(c);return a.observe(b,{childList:!0,subtree:!0}),a}const injectThemePreferencesStyle=a=>{if(!a)return;const b=`.bk-reviews > * {${Object.entries(a).filter(([a])=>a.includes("Color")).map(([b,a])=>a&&`--twc-${b.split("Color")[0]}: ${f(a).slice(4,-1).replaceAll(",","")}`).join("; ")};}`;t(b)};function App(){const i=useGateway(),b=useStoreId(),e=useProductId(),{reviewStatistics:c}=reactExports.useContext(ReviewStatisticsContext),{theme:a,setTheme:f,themePreferences:d,setThemePreferences:g}=reactExports.useContext(ThemeContext);if(useLocale(),injectThemePreferencesStyle(d),!b)return null;const h=!(c==null?void 0:c.reviewAmount)&&(d==null?void 0:d.starsWithoutReviews)===!1;reactExports.useEffect(()=>{i.getStorePreferences().then(h=>{const{theme:c,theme_preferences:a}=h;if(f(c),!a||!g)return;g(a);const d=()=>insertCollectionStarSection(Boolean(e),b,c,(a==null?void 0:a.starsWithoutReviews)===!1,(a==null?void 0:a.starsInBox)!==!1);d(),setTimeout(()=>observeDOM(window.document.body,d),1e3)}).catch(()=>f("default"))},[]),reactExports.useEffect(()=>{var d;b&&e&&a&&c&&((d=document.querySelector("#bk-reviews-root"))==null?void 0:d.setAttribute("data-theme",a),h||(insertStarSection(a),insertReviewSection(a)))},[a,c,b,e,h]);const j=!1;return j&&a!==void 0?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(ExtensionRender,{theme:a,extension:"star-section"}),jsxRuntimeExports.jsx(ExtensionRender,{theme:a,extension:"review-section"})]}):null}client.createRoot(document.getElementById("bk-reviews-root")).render(jsxRuntimeExports.jsx(React.StrictMode,{children:jsxRuntimeExports.jsx(I18nextProvider,{i18n:instance,children:jsxRuntimeExports.jsx(FilterContextProvider,{children:jsxRuntimeExports.jsx(ThemeContextProvider,{children:jsxRuntimeExports.jsx(ReviewStatisticsContextProvider,{children:jsxRuntimeExports.jsx(App,{})})})})})}))