import{b as Ve,d as ne,u as Ke,c as V,p as We,r as ve,o as Oe,a as Xe,w as L,e as Ge,n as Qe,f as ue,g as Ze,h as Ye,_ as et,i as tt,j as nt,k as K,l as le,E as rt}from"./index-RQLAaoDU.js";const st=["start","center","end","space-around","space-between","space-evenly"],ot=["top","middle","bottom"],it=Ve({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:st,default:"start"},align:{type:String,values:ot}}),at=ne({name:"ElRow"}),ct=ne({...at,props:it,setup(e){const t=e,n=Ke("row"),r=V(()=>t.gutter);We(ve,{gutter:r});const s=V(()=>{const o={};return t.gutter&&(o.marginRight=o.marginLeft=`-${t.gutter/2}px`),o}),i=V(()=>[n.b(),n.is(`justify-${t.justify}`,t.justify!=="start"),n.is(`align-${t.align}`,!!t.align)]);return(o,c)=>(Oe(),Xe(Ye(o.tag),{class:Qe(ue(i)),style:Ze(ue(s))},{default:L(()=>[Ge(o.$slots,"default")]),_:3},8,["class","style"]))}});var ut=et(ct,[["__file","row.vue"]]);const lt=tt(ut);function Ae(e,t){return function(){return e.apply(t,arguments)}}const{toString:ft}=Object.prototype,{getPrototypeOf:re}=Object,q=(e=>t=>{const n=ft.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>q(t)===e),M=e=>t=>typeof t===e,{isArray:P}=Array,F=M("undefined");function dt(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ge=A("ArrayBuffer");function pt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ge(e.buffer),t}const ht=M("string"),R=M("function"),Te=M("number"),z=e=>e!==null&&typeof e=="object",mt=e=>e===!0||e===!1,j=e=>{if(q(e)!=="object")return!1;const t=re(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=A("Date"),wt=A("File"),Et=A("Blob"),bt=A("FileList"),St=e=>z(e)&&R(e.pipe),Rt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=q(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Ot=A("URLSearchParams"),At=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function _e(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const xe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ne=e=>!F(e)&&e!==xe;function Q(){const{caseless:e}=Ne(this)&&this||{},t={},n=(r,s)=>{const i=e&&_e(t,s)||s;j(t[i])&&j(r)?t[i]=Q(t[i],r):j(r)?t[i]=Q({},r):P(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&B(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(B(t,(s,i)=>{n&&R(s)?e[i]=Ae(s,n):e[i]=s},{allOwnKeys:r}),e),Tt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_t=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},xt=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&re(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Nt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Pt=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Te(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ct=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&re(Uint8Array)),Ft=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Bt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Dt=A("HTMLFormElement"),Ut=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Lt=A("RegExp"),Pe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};B(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},jt=e=>{Pe(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},kt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return P(e)?r(e):r(String(e).split(t)),n},Ht=()=>{},It=(e,t)=>(e=+e,Number.isFinite(e)?e:t),W="abcdefghijklmnopqrstuvwxyz",de="0123456789",Ce={DIGIT:de,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+de},qt=(e=16,t=Ce.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Mt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const zt=e=>{const t=new Array(10),n=(r,s)=>{if(z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=P(r)?[]:{};return B(r,(o,c)=>{const p=n(o,s+1);!F(p)&&(i[c]=p)}),t[s]=void 0,i}}return r};return n(e,0)},$t=A("AsyncFunction"),Jt=e=>e&&(z(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:P,isArrayBuffer:ge,isBuffer:dt,isFormData:Rt,isArrayBufferView:pt,isString:ht,isNumber:Te,isBoolean:mt,isObject:z,isPlainObject:j,isUndefined:F,isDate:yt,isFile:wt,isBlob:Et,isRegExp:Lt,isFunction:R,isStream:St,isURLSearchParams:Ot,isTypedArray:Ct,isFileList:bt,forEach:B,merge:Q,extend:gt,trim:At,stripBOM:Tt,inherits:_t,toFlatObject:xt,kindOf:q,kindOfTest:A,endsWith:Nt,toArray:Pt,forEachEntry:Ft,matchAll:Bt,isHTMLForm:Dt,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:Pe,freezeMethods:jt,toObjectSet:kt,toCamelCase:Ut,noop:Ht,toFiniteNumber:It,findKey:_e,global:xe,isContextDefined:Ne,ALPHABET:Ce,generateString:qt,isSpecCompliantForm:Mt,toJSONObject:zt,isAsyncFn:$t,isThenable:Jt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Fe=m.prototype,Be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Be[e]={value:e}});Object.defineProperties(m,Be);Object.defineProperty(Fe,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Fe);return a.toFlatObject(e,o,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Vt=null;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function De(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(s,i){return s=De(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Kt(e){return a.isArray(e)&&!e.some(Z)}const Wt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,E){return!a.isUndefined(E[d])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,d,E){let b=f;if(f&&!E&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Kt(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(b=a.toArray(f)))return d=De(d),b.forEach(function(_,Je){!(a.isUndefined(_)||_===null)&&t.append(o===!0?pe([d],Je,i):o===null?d:d+"[]",h(_))}),!1}return Z(f)?!0:(t.append(pe(E,d,i),h(f)),!1)}const u=[],w=Object.assign(Wt,{defaultVisitor:l,convertValue:h,isVisitable:Z});function S(f,d){if(!a.isUndefined(f)){if(u.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));u.push(f),a.forEach(f,function(b,T){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(T)?T.trim():T,d,w))===!0&&S(b,d?d.concat(T):[T])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function se(e,t){this._pairs=[],e&&$(e,this,t)}const Ue=se.prototype;Ue.append=function(t,n){this._pairs.push([t,n])};Ue.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||vt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Xt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=Xt,je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gt=typeof URLSearchParams<"u"?URLSearchParams:se,Qt=typeof FormData<"u"?FormData:null,Zt=typeof Blob<"u"?Blob:null,Yt={isBrowser:!0,classes:{URLSearchParams:Gt,FormData:Qt,Blob:Zt},protocols:["http","https","file","blob","url","data"]},ke=typeof window<"u"&&typeof document<"u",en=(e=>ke&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),tn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",nn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ke,hasStandardBrowserEnv:en,hasStandardBrowserWebWorkerEnv:tn},Symbol.toStringTag,{value:"Module"})),O={...nn,...Yt};function rn(e,t){return $(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function sn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function on(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function He(e){function t(n,r,s,i){let o=n[i++];const c=Number.isFinite(+o),p=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,p?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=on(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(sn(r),s,n,0)}),n}return null}function an(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const oe={transitional:je,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(He(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return $(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),an(t)):t}],transformResponse:[function(t){const n=this.transitional||oe.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{oe.headers[e]={}});const ie=oe,cn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),un=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&cn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function C(e){return e&&String(e).trim().toLowerCase()}function k(e){return e===!1||e==null?e:a.isArray(e)?e.map(k):String(e)}function ln(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const fn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function v(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function dn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function pn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class J{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,p,h){const l=C(p);if(!l)throw new Error("header name must be a non-empty string");const u=a.findKey(s,l);(!u||s[u]===void 0||h===!0||h===void 0&&s[u]!==!1)&&(s[u||p]=k(c))}const o=(c,p)=>a.forEach(c,(h,l)=>i(h,l,p));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!fn(t)?o(un(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=C(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return ln(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=C(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||v(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=C(o),o){const c=a.findKey(r,o);c&&(!n||v(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||v(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=k(s),delete n[i];return}const c=t?dn(i):String(i).trim();c!==i&&delete n[i],n[c]=k(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=C(o);r[c]||(pn(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(J.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(J);const g=J;function X(e,t){const n=this||ie,r=t||n,s=g.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Ie(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,m,{__CANCEL__:!0});function hn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const mn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function yn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function qe(e,t){return e&&!yn(t)?wn(e,t):t}const En=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function bn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Sn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),l=r[i];o||(o=h),n[s]=p,r[s]=h;let u=i,w=0;for(;u!==s;)w+=n[u++],u=u%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),h-o<t)return;const S=l&&h-l;return S?Math.round(w*1e3/S):void 0}}function we(e,t){let n=0;const r=Sn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,p=r(c),h=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:p||void 0,estimated:p&&o&&h?(o-i)/p:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Rn=typeof XMLHttpRequest<"u",On=Rn&&function(e){return new Promise(function(n,r){let s=e.data;const i=g.from(e.headers).normalize();let{responseType:o,withXSRFToken:c}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let l;if(a.isFormData(s)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((l=i.getContentType())!==!1){const[d,...E]=l?l.split(";").map(b=>b.trim()).filter(Boolean):[];i.setContentType([d||"multipart/form-data",...E].join("; "))}}let u=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(d+":"+E))}const w=qe(e.baseURL,e.url);u.open(e.method.toUpperCase(),Le(w,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function S(){if(!u)return;const d=g.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:d,config:e,request:u};hn(function(_){n(_),h()},function(_){r(_),h()},b),u=null}if("onloadend"in u?u.onloadend=S:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(S)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||je;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new m(E,b.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},O.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&En(w))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&mn.read(e.xsrfCookieName);d&&i.set(e.xsrfHeaderName,d)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(E,b){u.setRequestHeader(b,E)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",we(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",we(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{u&&(r(!d||d.type?new D(null,e,u):d),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const f=bn(w);if(f&&O.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},Y={http:Vt,xhr:On};a.forEach(Y,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ee=e=>`- ${e}`,An=e=>a.isFunction(e)||e===null||e===!1,Me={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!An(n)&&(r=Y[(o=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Ee).join(`
`):" "+Ee(i[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Y};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function be(e){return G(e),e.headers=g.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Me.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return G(e),r.data=X.call(e,e.transformResponse,r),r.headers=g.from(r.headers),r},function(r){return Ie(r)||(G(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=g.from(r.response.headers))),Promise.reject(r)})}const Se=e=>e instanceof g?e.toJSON():e;function N(e,t){t=t||{};const n={};function r(h,l,u){return a.isPlainObject(h)&&a.isPlainObject(l)?a.merge.call({caseless:u},h,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(h,l,u){if(a.isUndefined(l)){if(!a.isUndefined(h))return r(void 0,h,u)}else return r(h,l,u)}function i(h,l){if(!a.isUndefined(l))return r(void 0,l)}function o(h,l){if(a.isUndefined(l)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,l)}function c(h,l,u){if(u in t)return r(h,l);if(u in e)return r(void 0,h)}const p={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(h,l)=>s(Se(h),Se(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const u=p[l]||s,w=u(e[l],t[l],l);a.isUndefined(w)&&u!==c||(n[l]=w)}),n}const ze="1.6.2",ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Re={};ae.transitional=function(t,n,r){function s(i,o){return"[Axios v"+ze+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Re[o]&&(Re[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function gn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],p=c===void 0||o(c,i,e);if(p!==!0)throw new m("option "+i+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const ee={assertOptions:gn,validators:ae},x=ee.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=N(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ee.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ee.assertOptions(s,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=g.concat(o,i);const c=[];let p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(p=p&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const h=[];this.interceptors.response.forEach(function(d){h.push(d.fulfilled,d.rejected)});let l,u=0,w;if(!p){const f=[be.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,h),w=f.length,l=Promise.resolve(n);u<w;)l=l.then(f[u++],f[u++]);return l}w=c.length;let S=n;for(u=0;u<w;){const f=c[u++],d=c[u++];try{S=f(S)}catch(E){d.call(this,E);break}}try{l=be.call(this,S)}catch(f){return Promise.reject(f)}for(u=0,w=h.length;u<w;)l=l.then(h[u++],h[u++]);return l}getUri(t){t=N(this.defaults,t);const n=qe(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(n,r){return this.request(N(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(N(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}I.prototype[t]=n(),I.prototype[t+"Form"]=n(!0)});const H=I;class ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new D(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ce(function(s){t=s}),cancel:t}}}const Tn=ce;function _n(e){return function(n){return e.apply(null,n)}}function xn(e){return a.isObject(e)&&e.isAxiosError===!0}const te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(te).forEach(([e,t])=>{te[t]=e});const Nn=te;function $e(e){const t=new H(e),n=Ae(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return $e(N(e,s))},n}const y=$e(ie);y.Axios=H;y.CanceledError=D;y.CancelToken=Tn;y.isCancel=Ie;y.VERSION=ze;y.toFormData=$;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=_n;y.isAxiosError=xn;y.mergeConfig=N;y.AxiosHeaders=g;y.formToJSON=e=>He(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=Me.getAdapter;y.HttpStatusCode=Nn;y.default=y;const Pn=y;var Cn={VITE_APP_ENV:"production",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Fn={baseURL:Cn.VITE_APP_AXIOS_BASE_URL,timeout:1e3,headers:{"X-Custom-Header":"foobar"}},U=Pn.create(Fn);U.interceptors.request.use(e=>(console.log("config=============="),console.log(e),e),e=>Promise.reject(e));U.interceptors.response.use(e=>e.data,e=>Promise.reject(e));const Bn=U.request,Dn=U.post;U.get;const Un=e=>Bn({url:"/v1/user/register",method:"post",data:e,headers:{contentType:"json",ccc:"ddd"},$customized:{aaa:"bbb"}}),Ln=e=>Dn("/v1/user/register",e,{headers:{contentType:"json",ccc:"ddd"},$customized:{aaa:"bbb"}}),kn=ne({__name:"AxiosTest",setup(e){const t=()=>{Un({userName:"heiheihe",password:"IloveU@1"}).then(r=>{console.log(r)}).catch(r=>{console.log(r)})},n=()=>{Ln({userName:"heiheihe",password:"IloveU@1"}).then(r=>{console.log(r)}).catch(r=>{console.log(r)})};return(r,s)=>{const i=rt,o=lt;return Oe(),nt("main",null,[K(o,null,{default:L(()=>[K(i,{onClick:t,plain:""},{default:L(()=>[le("register/request(post)")]),_:1}),K(i,{onClick:n,plain:""},{default:L(()=>[le("register/post")]),_:1})]),_:1})])}}});export{kn as default};
