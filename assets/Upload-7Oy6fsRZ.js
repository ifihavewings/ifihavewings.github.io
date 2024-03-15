import{Z as Pe,b as H,$ as b,d as B,u as I,c as C,a0 as Fe,a1 as pe,a2 as Le,a3 as fe,a4 as ve,a5 as me,a6 as te,o as g,k as E,n as y,e,q as j,f as A,r as R,y as W,z as k,a as D,w as P,g as Re,a7 as q,_ as K,h as ye,a8 as ee,a9 as ge,aa as he,ab as Z,ac as S,ad as Te,ae as G,x as V,F as Ue,Y as be,af as z,ag as De,l as O,ah as Oe,ai as Be,T as Ne,aj as je,P as Ae,ak as Q,al as se,am as qe,an as Me,ao as Ie,D as ae,ap as ze,aq as He,p as Ke,J as We,ar as oe,as as ne,G as Ve,m as Ge,at as Xe,E as Je}from"./index-9zeyy3xN.js";var Ye=1,Ze=4;function re(a){return Pe(a,Ye|Ze)}const Qe=H({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:a=>a>=0&&a<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:b(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:b([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:b(Function),default:a=>`${a}%`}}),xe=["aria-valuenow"],et={viewBox:"0 0 100 100"},tt=["d","stroke","stroke-linecap","stroke-width"],st=["d","stroke","opacity","stroke-linecap","stroke-width"],at={key:0},ot=B({name:"ElProgress"}),nt=B({...ot,props:Qe,setup(a){const t=a,s={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},u=I("progress"),p=C(()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:F(t.percentage)})),d=C(()=>(t.strokeWidth/t.width*100).toFixed(1)),v=C(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),$=C(()=>{const r=v.value,L=t.type==="dashboard";return`
          M 50 50
          m 0 ${L?"":"-"}${r}
          a ${r} ${r} 0 1 1 0 ${L?"-":""}${r*2}
          a ${r} ${r} 0 1 1 0 ${L?"":"-"}${r*2}
          `}),h=C(()=>2*Math.PI*v.value),w=C(()=>t.type==="dashboard"?.75:1),_=C(()=>`${-1*h.value*(1-w.value)/2}px`),m=C(()=>({strokeDasharray:`${h.value*w.value}px, ${h.value}px`,strokeDashoffset:_.value})),l=C(()=>({strokeDasharray:`${h.value*w.value*(t.percentage/100)}px, ${h.value}px`,strokeDashoffset:_.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),o=C(()=>{let r;return t.color?r=F(t.percentage):r=s[t.status]||s.default,r}),c=C(()=>t.status==="warning"?Fe:t.type==="line"?t.status==="success"?pe:Le:t.status==="success"?fe:ve),n=C(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),f=C(()=>t.format(t.percentage));function i(r){const L=100/r.length;return r.map((T,U)=>te(T)?{color:T,percentage:(U+1)*L}:T).sort((T,U)=>T.percentage-U.percentage)}const F=r=>{var L;const{color:N}=t;if(me(N))return N(r);if(te(N))return N;{const T=i(N);for(const U of T)if(U.percentage>r)return U.color;return(L=T[T.length-1])==null?void 0:L.color}};return(r,L)=>(g(),E("div",{class:y([e(u).b(),e(u).m(r.type),e(u).is(r.status),{[e(u).m("without-text")]:!r.showText,[e(u).m("text-inside")]:r.textInside}]),role:"progressbar","aria-valuenow":r.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[r.type==="line"?(g(),E("div",{key:0,class:y(e(u).b("bar"))},[j("div",{class:y(e(u).be("bar","outer")),style:A({height:`${r.strokeWidth}px`})},[j("div",{class:y([e(u).be("bar","inner"),{[e(u).bem("bar","inner","indeterminate")]:r.indeterminate},{[e(u).bem("bar","inner","striped")]:r.striped},{[e(u).bem("bar","inner","striped-flow")]:r.stripedFlow}]),style:A(e(p))},[(r.showText||r.$slots.default)&&r.textInside?(g(),E("div",{key:0,class:y(e(u).be("bar","innerText"))},[R(r.$slots,"default",{percentage:r.percentage},()=>[j("span",null,W(e(f)),1)])],2)):k("v-if",!0)],6)],6)],2)):(g(),E("div",{key:1,class:y(e(u).b("circle")),style:A({height:`${r.width}px`,width:`${r.width}px`})},[(g(),E("svg",et,[j("path",{class:y(e(u).be("circle","track")),d:e($),stroke:`var(${e(u).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":r.strokeLinecap,"stroke-width":e(d),fill:"none",style:A(e(m))},null,14,tt),j("path",{class:y(e(u).be("circle","path")),d:e($),stroke:e(o),fill:"none",opacity:r.percentage?1:0,"stroke-linecap":r.strokeLinecap,"stroke-width":e(d),style:A(e(l))},null,14,st)]))],6)),(r.showText||r.$slots.default)&&!r.textInside?(g(),E("div",{key:2,class:y(e(u).e("text")),style:A({fontSize:`${e(n)}px`})},[R(r.$slots,"default",{percentage:r.percentage},()=>[r.status?(g(),D(e(q),{key:1},{default:P(()=>[(g(),D(Re(e(c))))]),_:1})):(g(),E("span",at,W(e(f)),1))])],6)):k("v-if",!0)],10,xe))}});var rt=K(nt,[["__file","progress.vue"]]);const lt=ye(rt),ke=Symbol("uploadContextKey"),it="ElUpload";class ut extends Error{constructor(t,s,u,p){super(t),this.name="UploadAjaxError",this.status=s,this.method=u,this.url=p}}function le(a,t,s){let u;return s.response?u=`${s.response.error||s.response}`:s.responseText?u=`${s.responseText}`:u=`fail to ${t.method} ${a} ${s.status}`,new ut(u,s.status,t.method,a)}function dt(a){const t=a.responseText||a.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const ct=a=>{typeof XMLHttpRequest>"u"&&ee(it,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,s=a.action;t.upload&&t.upload.addEventListener("progress",d=>{const v=d;v.percent=d.total>0?d.loaded/d.total*100:0,a.onProgress(v)});const u=new FormData;if(a.data)for(const[d,v]of Object.entries(a.data))ge(v)&&v.length?u.append(d,...v):u.append(d,v);u.append(a.filename,a.file,a.file.name),t.addEventListener("error",()=>{a.onError(le(s,a,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return a.onError(le(s,a,t));a.onSuccess(dt(t))}),t.open(a.method,s,!0),a.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const p=a.headers||{};if(p instanceof Headers)p.forEach((d,v)=>t.setRequestHeader(v,d));else for(const[d,v]of Object.entries(p))he(v)||t.setRequestHeader(d,String(v));return t.send(u),t},$e=["text","picture","picture-card"];let pt=1;const x=()=>Date.now()+pt++,we=H({action:{type:String,default:"#"},headers:{type:b(Object)},method:{type:String,default:"post"},data:{type:b([Object,Function,Promise]),default:()=>Z({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:b(Array),default:()=>Z([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:$e,default:"text"},httpRequest:{type:b(Function),default:ct},disabled:Boolean,limit:Number}),ft=H({...we,beforeUpload:{type:b(Function),default:S},beforeRemove:{type:b(Function)},onRemove:{type:b(Function),default:S},onChange:{type:b(Function),default:S},onPreview:{type:b(Function),default:S},onSuccess:{type:b(Function),default:S},onProgress:{type:b(Function),default:S},onError:{type:b(Function),default:S},onExceed:{type:b(Function),default:S}}),vt=H({files:{type:b(Array),default:()=>Z([])},disabled:{type:Boolean,default:!1},handlePreview:{type:b(Function),default:S},listType:{type:String,values:$e,default:"text"}}),mt={remove:a=>!!a},yt=["onKeydown"],gt=["src"],ht=["onClick"],bt=["title"],kt=["onClick"],$t=["onClick"],wt=B({name:"ElUploadList"}),_t=B({...wt,props:vt,emits:mt,setup(a,{emit:t}){const s=a,{t:u}=Te(),p=I("upload"),d=I("icon"),v=I("list"),$=G(),h=V(!1),w=C(()=>[p.b("list"),p.bm("list",s.listType),p.is("disabled",s.disabled)]),_=m=>{t("remove",m)};return(m,l)=>(g(),D(je,{tag:"ul",class:y(e(w)),name:e(v).b()},{default:P(()=>[(g(!0),E(Ue,null,Ne(m.files,o=>(g(),E("li",{key:o.uid||o.name,class:y([e(p).be("list","item"),e(p).is(o.status),{focusing:h.value}]),tabindex:"0",onKeydown:be(c=>!e($)&&_(o),["delete"]),onFocus:l[0]||(l[0]=c=>h.value=!0),onBlur:l[1]||(l[1]=c=>h.value=!1),onClick:l[2]||(l[2]=c=>h.value=!1)},[R(m.$slots,"default",{file:o},()=>[m.listType==="picture"||o.status!=="uploading"&&m.listType==="picture-card"?(g(),E("img",{key:0,class:y(e(p).be("list","item-thumbnail")),src:o.url,alt:""},null,10,gt)):k("v-if",!0),o.status==="uploading"||m.listType!=="picture-card"?(g(),E("div",{key:1,class:y(e(p).be("list","item-info"))},[j("a",{class:y(e(p).be("list","item-name")),onClick:z(c=>m.handlePreview(o),["prevent"])},[O(e(q),{class:y(e(d).m("document"))},{default:P(()=>[O(e(De))]),_:1},8,["class"]),j("span",{class:y(e(p).be("list","item-file-name")),title:o.name},W(o.name),11,bt)],10,ht),o.status==="uploading"?(g(),D(e(lt),{key:0,type:m.listType==="picture-card"?"circle":"line","stroke-width":m.listType==="picture-card"?6:2,percentage:Number(o.percentage),style:A(m.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):k("v-if",!0)],2)):k("v-if",!0),j("label",{class:y(e(p).be("list","item-status-label"))},[m.listType==="text"?(g(),D(e(q),{key:0,class:y([e(d).m("upload-success"),e(d).m("circle-check")])},{default:P(()=>[O(e(pe))]),_:1},8,["class"])):["picture-card","picture"].includes(m.listType)?(g(),D(e(q),{key:1,class:y([e(d).m("upload-success"),e(d).m("check")])},{default:P(()=>[O(e(fe))]),_:1},8,["class"])):k("v-if",!0)],2),e($)?k("v-if",!0):(g(),D(e(q),{key:2,class:y(e(d).m("close")),onClick:c=>_(o)},{default:P(()=>[O(e(ve))]),_:2},1032,["class","onClick"])),k(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),k(" This is a bug which needs to be fixed "),k(" TODO: Fix the incorrect navigation interaction "),e($)?k("v-if",!0):(g(),E("i",{key:3,class:y(e(d).m("close-tip"))},W(e(u)("el.upload.deleteTip")),3)),m.listType==="picture-card"?(g(),E("span",{key:4,class:y(e(p).be("list","item-actions"))},[j("span",{class:y(e(p).be("list","item-preview")),onClick:c=>m.handlePreview(o)},[O(e(q),{class:y(e(d).m("zoom-in"))},{default:P(()=>[O(e(Oe))]),_:1},8,["class"])],10,kt),e($)?k("v-if",!0):(g(),E("span",{key:0,class:y(e(p).be("list","item-delete")),onClick:c=>_(o)},[O(e(q),{class:y(e(d).m("delete"))},{default:P(()=>[O(e(Be))]),_:1},8,["class"])],10,$t))],2)):k("v-if",!0)])],42,yt))),128)),R(m.$slots,"append")]),_:3},8,["class","name"]))}});var ie=K(_t,[["__file","upload-list.vue"]]);const Et=H({disabled:{type:Boolean,default:!1}}),Ct={file:a=>ge(a)},St=["onDrop","onDragover"],_e="ElUploadDrag",Pt=B({name:_e}),Ft=B({...Pt,props:Et,emits:Ct,setup(a,{emit:t}){const s=Ae(ke);s||ee(_e,"usage: <el-upload><el-upload-dragger /></el-upload>");const u=I("upload"),p=V(!1),d=G(),v=h=>{if(d.value)return;p.value=!1,h.stopPropagation();const w=Array.from(h.dataTransfer.files),_=s.accept.value;if(!_){t("file",w);return}const m=w.filter(l=>{const{type:o,name:c}=l,n=c.includes(".")?`.${c.split(".").pop()}`:"",f=o.replace(/\/.*$/,"");return _.split(",").map(i=>i.trim()).filter(i=>i).some(i=>i.startsWith(".")?n===i:/\/\*$/.test(i)?f===i.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(i)?o===i:!1)});t("file",m)},$=()=>{d.value||(p.value=!0)};return(h,w)=>(g(),E("div",{class:y([e(u).b("dragger"),e(u).is("dragover",p.value)]),onDrop:z(v,["prevent"]),onDragover:z($,["prevent"]),onDragleave:w[0]||(w[0]=z(_=>p.value=!1,["prevent"]))},[R(h.$slots,"default")],42,St))}});var Lt=K(Ft,[["__file","upload-dragger.vue"]]);const Rt=H({...we,beforeUpload:{type:b(Function),default:S},onRemove:{type:b(Function),default:S},onStart:{type:b(Function),default:S},onSuccess:{type:b(Function),default:S},onProgress:{type:b(Function),default:S},onError:{type:b(Function),default:S},onExceed:{type:b(Function),default:S}}),Tt=["onKeydown"],Ut=["name","multiple","accept"],Dt=B({name:"ElUploadContent",inheritAttrs:!1}),Ot=B({...Dt,props:Rt,setup(a,{expose:t}){const s=a,u=I("upload"),p=G(),d=Q({}),v=Q(),$=n=>{if(n.length===0)return;const{autoUpload:f,limit:i,fileList:F,multiple:r,onStart:L,onExceed:N}=s;if(i&&F.length+n.length>i){N(n,F);return}r||(n=n.slice(0,1));for(const T of n){const U=T;U.uid=x(),L(U),f&&h(U)}},h=async n=>{if(v.value.value="",!s.beforeUpload)return _(n);let f,i={};try{const r=s.data,L=s.beforeUpload(n);i=se(s.data)?re(s.data):s.data,f=await L,se(s.data)&&qe(r,i)&&(i=re(s.data))}catch{f=!1}if(f===!1){s.onRemove(n);return}let F=n;f instanceof Blob&&(f instanceof File?F=f:F=new File([f],n.name,{type:n.type})),_(Object.assign(F,{uid:n.uid}),i)},w=async(n,f)=>me(n)?n(f):n,_=async(n,f)=>{const{headers:i,data:F,method:r,withCredentials:L,name:N,action:T,onProgress:U,onSuccess:Ee,onError:Ce,httpRequest:Se}=s;try{f=await w(f??F,n)}catch{s.onRemove(n);return}const{uid:X}=n,J={headers:i||{},withCredentials:L,file:n,data:f,method:r,filename:N,action:T,onProgress:M=>{U(M,n)},onSuccess:M=>{Ee(M,n),delete d.value[X]},onError:M=>{Ce(M,n),delete d.value[X]}},Y=Se(J);d.value[X]=Y,Y instanceof Promise&&Y.then(J.onSuccess,J.onError)},m=n=>{const f=n.target.files;f&&$(Array.from(f))},l=()=>{p.value||(v.value.value="",v.value.click())},o=()=>{l()};return t({abort:n=>{Me(d.value).filter(n?([i])=>String(n.uid)===i:()=>!0).forEach(([i,F])=>{F instanceof XMLHttpRequest&&F.abort(),delete d.value[i]})},upload:h}),(n,f)=>(g(),E("div",{class:y([e(u).b(),e(u).m(n.listType),e(u).is("drag",n.drag)]),tabindex:"0",onClick:l,onKeydown:be(z(o,["self"]),["enter","space"])},[n.drag?(g(),D(Lt,{key:0,disabled:e(p),onFile:$},{default:P(()=>[R(n.$slots,"default")]),_:3},8,["disabled"])):R(n.$slots,"default",{key:1}),j("input",{ref_key:"inputRef",ref:v,class:y(e(u).e("input")),name:n.name,multiple:n.multiple,accept:n.accept,type:"file",onChange:m,onClick:f[0]||(f[0]=z(()=>{},["stop"]))},null,42,Ut)],42,Tt))}});var ue=K(Ot,[["__file","upload-content.vue"]]);const de="ElUpload",ce=a=>{var t;(t=a.url)!=null&&t.startsWith("blob:")&&URL.revokeObjectURL(a.url)},Bt=(a,t)=>{const s=Ie(a,"fileList",void 0,{passive:!0}),u=l=>s.value.find(o=>o.uid===l.uid);function p(l){var o;(o=t.value)==null||o.abort(l)}function d(l=["ready","uploading","success","fail"]){s.value=s.value.filter(o=>!l.includes(o.status))}const v=(l,o)=>{const c=u(o);c&&(console.error(l),c.status="fail",s.value.splice(s.value.indexOf(c),1),a.onError(l,c,s.value),a.onChange(c,s.value))},$=(l,o)=>{const c=u(o);c&&(a.onProgress(l,c,s.value),c.status="uploading",c.percentage=Math.round(l.percent))},h=(l,o)=>{const c=u(o);c&&(c.status="success",c.response=l,a.onSuccess(l,c,s.value),a.onChange(c,s.value))},w=l=>{he(l.uid)&&(l.uid=x());const o={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(a.listType==="picture-card"||a.listType==="picture")try{o.url=URL.createObjectURL(l)}catch(c){ze(de,c.message),a.onError(c,o,s.value)}s.value=[...s.value,o],a.onChange(o,s.value)},_=async l=>{const o=l instanceof File?u(l):l;o||ee(de,"file to be removed not found");const c=n=>{p(n);const f=s.value;f.splice(f.indexOf(n),1),a.onRemove(n,f),ce(n)};a.beforeRemove?await a.beforeRemove(o,s.value)!==!1&&c(o):c(o)};function m(){s.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var o;return l&&((o=t.value)==null?void 0:o.upload(l))})}return ae(()=>a.listType,l=>{l!=="picture-card"&&l!=="picture"||(s.value=s.value.map(o=>{const{raw:c,url:n}=o;if(!n&&c)try{o.url=URL.createObjectURL(c)}catch(f){a.onError(f,o,s.value)}return o}))}),ae(s,l=>{for(const o of l)o.uid||(o.uid=x()),o.status||(o.status="success")},{immediate:!0,deep:!0}),{uploadFiles:s,abort:p,clearFiles:d,handleError:v,handleProgress:$,handleStart:w,handleSuccess:h,handleRemove:_,submit:m,revokeFileObjectURL:ce}},Nt=B({name:"ElUpload"}),jt=B({...Nt,props:ft,setup(a,{expose:t}){const s=a,u=G(),p=Q(),{abort:d,submit:v,clearFiles:$,uploadFiles:h,handleStart:w,handleError:_,handleRemove:m,handleSuccess:l,handleProgress:o,revokeFileObjectURL:c}=Bt(s,p),n=C(()=>s.listType==="picture-card"),f=C(()=>({...s,fileList:h.value,onStart:w,onProgress:o,onSuccess:l,onError:_,onRemove:m}));return He(()=>{h.value.forEach(c)}),Ke(ke,{accept:We(s,"accept")}),t({abort:d,submit:v,clearFiles:$,handleStart:w,handleRemove:m}),(i,F)=>(g(),E("div",null,[e(n)&&i.showFileList?(g(),D(ie,{key:0,disabled:e(u),"list-type":i.listType,files:e(h),"handle-preview":i.onPreview,onRemove:e(m)},oe({append:P(()=>[O(ue,ne({ref_key:"uploadRef",ref:p},e(f)),{default:P(()=>[i.$slots.trigger?R(i.$slots,"trigger",{key:0}):k("v-if",!0),!i.$slots.trigger&&i.$slots.default?R(i.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)]),_:2},[i.$slots.file?{name:"default",fn:P(({file:r})=>[R(i.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0),!e(n)||e(n)&&!i.showFileList?(g(),D(ue,ne({key:1,ref_key:"uploadRef",ref:p},e(f)),{default:P(()=>[i.$slots.trigger?R(i.$slots,"trigger",{key:0}):k("v-if",!0),!i.$slots.trigger&&i.$slots.default?R(i.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)):k("v-if",!0),i.$slots.trigger?R(i.$slots,"default",{key:2}):k("v-if",!0),R(i.$slots,"tip"),!e(n)&&i.showFileList?(g(),D(ie,{key:3,disabled:e(u),"list-type":i.listType,files:e(h),"handle-preview":i.onPreview,onRemove:e(m)},oe({_:2},[i.$slots.file?{name:"default",fn:P(({file:r})=>[R(i.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0)]))}});var At=K(jt,[["__file","upload.vue"]]);const qt=ye(At),It=B({__name:"Upload",setup(a){const t=V(),s=V([]),u=Ve({Authorization:localStorage.getItem("token")}),p=(d,v,$)=>{Xe.error(d.message)};return(d,v)=>{const $=Je,h=qt;return g(),D(h,{ref_key:"uploadRef",ref:t,action:"/api/v1/upload/formidable",headers:u,method:"post",multiple:"","file-list":s.value,class:"upload-demo","on-error":p},{trigger:P(()=>[O($,{type:"primary"},{default:P(()=>[Ge("select file")]),_:1})]),_:1},8,["headers","file-list"])}}});export{It as default};