"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{84463:function(e,n,l){l.d(n,{u:function(){return et}});var c,h,_,b,E=l(2784),w=l.t(E,2);function disposables_o(){let e=[],n={addEventListener:(e,l,c,h)=>(e.addEventListener(l,c,h),n.add(()=>e.removeEventListener(l,c,h))),requestAnimationFrame(...e){let l=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(l))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let l=setTimeout(...e);return n.add(()=>clearTimeout(l))},microTask(...e){var l;let c={current:!0};return l=()=>{c.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(l):Promise.resolve().then(l).catch(e=>setTimeout(()=>{throw e})),n.add(()=>{c.current=!1})},style(e,n,l){let c=e.style.getPropertyValue(n);return Object.assign(e.style,{[n]:l}),this.add(()=>{Object.assign(e.style,{[n]:c})})},group(e){let n=disposables_o();return e(n),this.add(()=>n.dispose())},add:n=>(e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let n of e.splice(l,1))n()}),dispose(){for(let n of e.splice(0))n()}};return n}function use_disposables_p(){let[e]=(0,E.useState)(disposables_o);return(0,E.useEffect)(()=>()=>e.dispose(),[e]),e}var S=Object.defineProperty,d=(e,n,l)=>n in e?S(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,r=(e,n,l)=>(d(e,"symbol"!=typeof n?n+"":n,l),l);let N=new class{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},use_iso_morphic_effect_l=(e,n)=>{N.isServer?(0,E.useEffect)(e,n):(0,E.useLayoutEffect)(e,n)};function use_latest_value_s(e){let n=(0,E.useRef)(e);return use_iso_morphic_effect_l(()=>{n.current=e},[e]),n}let use_event_o=function(e){let n=use_latest_value_s(e);return E.useCallback((...e)=>n.current(...e),[n])};function f(){let e=(0,E.useRef)(!1);return use_iso_morphic_effect_l(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function use_server_handoff_complete_l(){let e;let n=(e="undefined"==typeof document,(0,w.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[l,c]=E.useState(N.isHandoffComplete);return l&&!1===N.isHandoffComplete&&c(!1),E.useEffect(()=>{!0!==l&&c(!0)},[l]),E.useEffect(()=>N.handoff(),[]),!n&&l}let O=Symbol();function y(...e){let n=(0,E.useRef)(e);(0,E.useEffect)(()=>{n.current=e},[e]);let l=use_event_o(e=>{for(let l of n.current)null!=l&&("function"==typeof l?l(e):l.current=e)});return e.every(e=>null==e||(null==e?void 0:e[O]))?void 0:l}function match_u(e,n,...l){if(e in n){let c=n[e];return"function"==typeof c?c(...l):c}let c=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,match_u),c}function g(e,...n){e&&n.length>0&&e.classList.add(...n)}function v(e,...n){e&&n.length>0&&e.classList.remove(...n)}let P=(0,E.createContext)(null);P.displayName="OpenClosedContext";var A=((c=A||{})[c.Open=1]="Open",c[c.Closed=2]="Closed",c[c.Closing=4]="Closing",c[c.Opening=8]="Opening",c);function open_closed_u(){return(0,E.useContext)(P)}function open_closed_s({value:e,children:n}){return E.createElement(P.Provider,{value:e},n)}function class_names_t(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var L=((h=L||{})[h.None=0]="None",h[h.RenderStrategy=1]="RenderStrategy",h[h.Static=2]="Static",h),H=((_=H||{})[_.Unmount=0]="Unmount",_[_.Hidden=1]="Hidden",_);function C({ourProps:e,theirProps:n,slot:l,defaultTag:c,features:h,visible:_=!0,name:b,mergeRefs:E}){E=null!=E?E:k;let w=R(n,e);if(_)return m(w,l,c,b,E);let S=null!=h?h:0;if(2&S){let{static:e=!1,...n}=w;if(e)return m(n,l,c,b,E)}if(1&S){let{unmount:e=!0,...n}=w;return match_u(e?0:1,{0:()=>null,1:()=>m({...n,hidden:!0,style:{display:"none"}},l,c,b,E)})}return m(w,l,c,b,E)}function m(e,n={},l,c,h){let{as:_=l,children:b,refName:w="ref",...S}=F(e,["unmount","static"]),N=void 0!==e.ref?{[w]:e.ref}:{},O="function"==typeof b?b(n):b;"className"in S&&S.className&&"function"==typeof S.className&&(S.className=S.className(n));let P={};if(n){let e=!1,l=[];for(let[c,h]of Object.entries(n))"boolean"==typeof h&&(e=!0),!0===h&&l.push(c);e&&(P["data-headlessui-state"]=l.join(" "))}if(_===E.Fragment&&Object.keys(x(S)).length>0){if(!(0,E.isValidElement)(O)||Array.isArray(O)&&O.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${c} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(S).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=O.props,n="function"==typeof(null==e?void 0:e.className)?(...n)=>class_names_t(null==e?void 0:e.className(...n),S.className):class_names_t(null==e?void 0:e.className,S.className),l=n?{className:n}:{};return(0,E.cloneElement)(O,Object.assign({},R(O.props,x(F(S,["ref"]))),P,N,{ref:h(O.ref,N.ref)},l))}return(0,E.createElement)(_,Object.assign({},F(S,["ref"]),_!==E.Fragment&&N,_!==E.Fragment&&P),O)}function k(...e){return e.every(e=>null==e)?void 0:n=>{for(let l of e)null!=l&&("function"==typeof l?l(n):l.current=n)}}function R(...e){if(0===e.length)return{};if(1===e.length)return e[0];let n={},l={};for(let c of e)for(let e in c)e.startsWith("on")&&"function"==typeof c[e]?(null!=l[e]||(l[e]=[]),l[e].push(c[e])):n[e]=c[e];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(l).map(e=>[e,void 0])));for(let e in l)Object.assign(n,{[e](n,...c){for(let h of l[e]){if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;h(n,...c)}}});return n}function U(e){var n;return Object.assign((0,E.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function x(e){let n=Object.assign({},e);for(let e in n)void 0===n[e]&&delete n[e];return n}function F(e,n=[]){let l=Object.assign({},e);for(let e of n)e in l&&delete l[e];return l}function transition_S(e=""){return e.split(/\s+/).filter(e=>e.length>1)}let z=(0,E.createContext)(null);z.displayName="TransitionContext";var q=((b=q||{}).Visible="visible",b.Hidden="hidden",b);let B=(0,E.createContext)(null);function transition_U(e){return"children"in e?transition_U(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function se(e,n){let l=use_latest_value_s(e),c=(0,E.useRef)([]),h=f(),_=use_disposables_p(),b=use_event_o((e,n=H.Hidden)=>{let b=c.current.findIndex(({el:n})=>n===e);-1!==b&&(match_u(n,{[H.Unmount](){c.current.splice(b,1)},[H.Hidden](){c.current[b].state="hidden"}}),_.microTask(()=>{var e;!transition_U(c)&&h.current&&(null==(e=l.current)||e.call(l))}))}),w=use_event_o(e=>{let n=c.current.find(({el:n})=>n===e);return n?"visible"!==n.state&&(n.state="visible"):c.current.push({el:e,state:"visible"}),()=>b(e,H.Unmount)}),S=(0,E.useRef)([]),N=(0,E.useRef)(Promise.resolve()),O=(0,E.useRef)({enter:[],leave:[],idle:[]}),P=use_event_o((e,l,c)=>{S.current.splice(0),n&&(n.chains.current[l]=n.chains.current[l].filter(([n])=>n!==e)),null==n||n.chains.current[l].push([e,new Promise(e=>{S.current.push(e)})]),null==n||n.chains.current[l].push([e,new Promise(e=>{Promise.all(O.current[l].map(([e,n])=>n)).then(()=>e())})]),"enter"===l?N.current=N.current.then(()=>null==n?void 0:n.wait.current).then(()=>c(l)):c(l)}),A=use_event_o((e,n,l)=>{Promise.all(O.current[n].splice(0).map(([e,n])=>n)).then(()=>{var e;null==(e=S.current.shift())||e()}).then(()=>l(n))});return(0,E.useMemo)(()=>({children:c,register:w,unregister:b,onStart:P,onStop:A,wait:N,chains:O}),[w,b,c,P,A,O,N])}function Ne(){}B.displayName="NestingContext";let V=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ae(e){var n;let l={};for(let c of V)l[c]=null!=(n=e[c])?n:Ne;return l}let Y=L.RenderStrategy,K=U(function(e,n){let{show:l,appear:c=!1,unmount:h=!0,..._}=e,b=(0,E.useRef)(null),w=y(b,n);use_server_handoff_complete_l();let S=open_closed_u();if(void 0===l&&null!==S&&(l=(S&A.Open)===A.Open),![!0,!1].includes(l))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[N,O]=(0,E.useState)(l?"visible":"hidden"),P=se(()=>{O("hidden")}),[L,H]=(0,E.useState)(!0),q=(0,E.useRef)([l]);use_iso_morphic_effect_l(()=>{!1!==L&&q.current[q.current.length-1]!==l&&(q.current.push(l),H(!1))},[q,l]);let V=(0,E.useMemo)(()=>({show:l,appear:c,initial:L}),[l,c,L]);(0,E.useEffect)(()=>{if(l)O("visible");else if(transition_U(P)){let e=b.current;if(!e)return;let n=e.getBoundingClientRect();0===n.x&&0===n.y&&0===n.width&&0===n.height&&O("hidden")}else O("hidden")},[l,P]);let K={unmount:h},X=use_event_o(()=>{var n;L&&H(!1),null==(n=e.beforeEnter)||n.call(e)}),et=use_event_o(()=>{var n;L&&H(!1),null==(n=e.beforeLeave)||n.call(e)});return E.createElement(B.Provider,{value:P},E.createElement(z.Provider,{value:V},C({ourProps:{...K,as:E.Fragment,children:E.createElement(Q,{ref:w,...K,..._,beforeEnter:X,beforeLeave:et})},theirProps:{},defaultTag:E.Fragment,features:Y,visible:"visible"===N,name:"Transition"})))}),Q=U(function(e,n){var l,c,h;let _;let{beforeEnter:b,afterEnter:w,beforeLeave:S,afterLeave:N,enter:O,enterFrom:P,enterTo:L,entered:q,leave:V,leaveFrom:K,leaveTo:Q,...X}=e,et=(0,E.useRef)(null),er=y(et,n),en=null==(l=X.unmount)||l?H.Unmount:H.Hidden,{show:es,appear:ei,initial:ea}=function(){let e=(0,E.useContext)(z);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[eo,el]=(0,E.useState)(es?"visible":"hidden"),eu=function(){let e=(0,E.useContext)(B);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:ec,unregister:ed}=eu;(0,E.useEffect)(()=>ec(et),[ec,et]),(0,E.useEffect)(()=>{if(en===H.Hidden&&et.current){if(es&&"visible"!==eo){el("visible");return}return match_u(eo,{hidden:()=>ed(et),visible:()=>ec(et)})}},[eo,et,ec,ed,es,en]);let ef=use_latest_value_s({base:transition_S(X.className),enter:transition_S(O),enterFrom:transition_S(P),enterTo:transition_S(L),entered:transition_S(q),leave:transition_S(V),leaveFrom:transition_S(K),leaveTo:transition_S(Q)}),ep=(h={beforeEnter:b,afterEnter:w,beforeLeave:S,afterLeave:N},_=(0,E.useRef)(ae(h)),(0,E.useEffect)(()=>{_.current=ae(h)},[h]),_),em=use_server_handoff_complete_l();(0,E.useEffect)(()=>{if(em&&"visible"===eo&&null===et.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[et,eo,em]);let eh=ei&&es&&ea,ev=em&&(!ea||ei)?es?"enter":"leave":"idle",eg=function(e=0){let[n,l]=(0,E.useState)(e),c=f(),h=(0,E.useCallback)(e=>{c.current&&l(n=>n|e)},[n,c]),_=(0,E.useCallback)(e=>!!(n&e),[n]);return{flags:n,addFlag:h,hasFlag:_,removeFlag:(0,E.useCallback)(e=>{c.current&&l(n=>n&~e)},[l,c]),toggleFlag:(0,E.useCallback)(e=>{c.current&&l(n=>n^e)},[l])}}(0),e_=use_event_o(e=>match_u(e,{enter:()=>{eg.addFlag(A.Opening),ep.current.beforeEnter()},leave:()=>{eg.addFlag(A.Closing),ep.current.beforeLeave()},idle:()=>{}})),eb=use_event_o(e=>match_u(e,{enter:()=>{eg.removeFlag(A.Opening),ep.current.afterEnter()},leave:()=>{eg.removeFlag(A.Closing),ep.current.afterLeave()},idle:()=>{}})),ey=se(()=>{el("hidden"),ed(et)},eu),ex=(0,E.useRef)(!1);!function({immediate:e,container:n,direction:l,classes:c,onStart:h,onStop:_}){let b=f(),E=use_disposables_p(),w=use_latest_value_s(l);use_iso_morphic_effect_l(()=>{e&&(w.current="enter")},[e]),use_iso_morphic_effect_l(()=>{let e=disposables_o();E.add(e.dispose);let l=n.current;if(l&&"idle"!==w.current&&b.current){var S,N,O;let n,b,E,P,A,L,H;return e.dispose(),h.current(w.current),e.add((S=c.current,N="enter"===w.current,O=()=>{e.dispose(),_.current(w.current)},b=N?"enter":"leave",E=disposables_o(),P=void 0!==O?(n={called:!1},(...e)=>{if(!n.called)return n.called=!0,O(...e)}):()=>{},"enter"===b&&(l.removeAttribute("hidden"),l.style.display=""),A=match_u(b,{enter:()=>S.enter,leave:()=>S.leave}),L=match_u(b,{enter:()=>S.enterTo,leave:()=>S.leaveTo}),H=match_u(b,{enter:()=>S.enterFrom,leave:()=>S.leaveFrom}),v(l,...S.base,...S.enter,...S.enterTo,...S.enterFrom,...S.leave,...S.leaveFrom,...S.leaveTo,...S.entered),g(l,...S.base,...A,...H),E.nextFrame(()=>{v(l,...S.base,...A,...H),g(l,...S.base,...A,...L),function(e,n){let l=disposables_o();if(!e)return l.dispose;let{transitionDuration:c,transitionDelay:h}=getComputedStyle(e),[_,b]=[c,h].map(e=>{let[n=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,n)=>n-e);return n}),E=_+b;if(0!==E){l.group(l=>{l.setTimeout(()=>{n(),l.dispose()},E),l.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&l.dispose()})});let c=l.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(n(),c())})}else n();l.add(()=>n()),l.dispose}(l,()=>(v(l,...S.base,...A),g(l,...S.base,...S.entered),P()))}),E.dispose)),e.dispose}},[l])}({immediate:eh,container:et,classes:ef,direction:ev,onStart:use_latest_value_s(e=>{ex.current=!0,ey.onStart(et,e,e_)}),onStop:use_latest_value_s(e=>{ex.current=!1,ey.onStop(et,e,eb),"leave"!==e||transition_U(ey)||(el("hidden"),ed(et))})});let eE=X;return eh?eE={...eE,className:class_names_t(X.className,...ef.current.enter,...ef.current.enterFrom)}:ex.current&&(eE.className=class_names_t(X.className,null==(c=et.current)?void 0:c.className),""===eE.className&&delete eE.className),E.createElement(B.Provider,{value:ey},E.createElement(open_closed_s,{value:match_u(eo,{visible:A.Open,hidden:A.Closed})|eg.flags},C({ourProps:{ref:er},theirProps:eE,defaultTag:"div",features:Y,visible:"visible"===eo,name:"Transition.Child"})))}),X=U(function(e,n){let l=null!==(0,E.useContext)(z),c=null!==open_closed_u();return E.createElement(E.Fragment,null,!l&&c?E.createElement(K,{ref:n,...e}):E.createElement(Q,{ref:n,...e}))}),et=Object.assign(K,{Child:X,Root:K})},28562:function(e,n,l){let c,h;l.d(n,{Ih:function(){return M},x7:function(){return Ie},ZP:function(){return eh},GK:function(){return T}});var _,b=l(2784);let E={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||E,w=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,S=/\/\*[^]*?\*\/|  +/g,N=/\n+/g,o=(e,n)=>{let l="",c="",h="";for(let _ in e){let b=e[_];"@"==_[0]?"i"==_[1]?l=_+" "+b+";":c+="f"==_[1]?o(b,_):_+"{"+o(b,"k"==_[1]?"":n)+"}":"object"==typeof b?c+=o(b,n?n.replace(/([^,])+/g,e=>_.replace(/(^:.*)|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,e):e?e+" "+n:n)):_):null!=b&&(_=/^--/.test(_)?_:_.replace(/[A-Z]/g,"-$&").toLowerCase(),h+=o.p?o.p(_,b):_+":"+b+";")}return l+(n&&h?n+"{"+h+"}":h)+c},O={},s=e=>{if("object"==typeof e){let n="";for(let l in e)n+=l+s(e[l]);return n}return e},i=(e,n,l,c,h)=>{var _;let b=s(e),E=O[b]||(O[b]=(e=>{let n=0,l=11;for(;n<e.length;)l=101*l+e.charCodeAt(n++)>>>0;return"go"+l})(b));if(!O[E]){let n=b!==e?e:(e=>{let n,l,c=[{}];for(;n=w.exec(e.replace(S,""));)n[4]?c.shift():n[3]?(l=n[3].replace(N," ").trim(),c.unshift(c[0][l]=c[0][l]||{})):c[0][n[1]]=n[2].replace(N," ").trim();return c[0]})(e);O[E]=o(h?{["@keyframes "+E]:n}:n,l?"":"."+E)}let P=l&&O.g?O.g:null;return l&&(O.g=O[E]),_=O[E],P?n.data=n.data.replace(P,_):-1===n.data.indexOf(_)&&(n.data=c?_+n.data:n.data+_),E},p=(e,n,l)=>e.reduce((e,c,h)=>{let _=n[h];if(_&&_.call){let e=_(l),n=e&&e.props&&e.props.className||/^go/.test(e)&&e;_=n?"."+n:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+c+(null==_?"":_)},"");function u(e){let n=this||{},l=e.call?e(n.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),n.p):l.reduce((e,l)=>Object.assign(e,l&&l.call?l(n.p):l),{}):l,t(n.target),n.g,n.o,n.k)}u.bind({g:1});let P,A,L,H=u.bind({k:1});function j(e,n){let l=this||{};return function(){let c=arguments;function a(h,_){let b=Object.assign({},h),E=b.className||a.className;l.p=Object.assign({theme:A&&A()},b),l.o=/ *go\d+/.test(E),b.className=u.apply(l,c)+(E?" "+E:""),n&&(b.ref=_);let w=e;return e[0]&&(w=b.as||e,delete b.as),L&&w[0]&&L(b),P(w,b)}return n?n(a):a}}var W=e=>"function"==typeof e,T=(e,n)=>W(e)?e(n):e,z=(c=0,()=>(++c).toString()),dist_b=()=>{if(void 0===h&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");h=!e||e.matches}return h},q=new Map,$=e=>{if(q.has(e))return;let n=setTimeout(()=>{q.delete(e),dist_u({type:4,toastId:e})},1e3);q.set(e,n)},J=e=>{let n=q.get(e);n&&clearTimeout(n)},v=(e,n)=>{switch(n.type){case 0:return{...e,toasts:[n.toast,...e.toasts].slice(0,20)};case 1:return n.toast.id&&J(n.toast.id),{...e,toasts:e.toasts.map(e=>e.id===n.toast.id?{...e,...n.toast}:e)};case 2:let{toast:l}=n;return e.toasts.find(e=>e.id===l.id)?v(e,{type:1,toast:l}):v(e,{type:0,toast:l});case 3:let{toastId:c}=n;return c?$(c):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===c||void 0===c?{...e,visible:!1}:e)};case 4:return void 0===n.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==n.toastId)};case 5:return{...e,pausedAt:n.time};case 6:let h=n.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+h}))}}},B=[],V={toasts:[],pausedAt:void 0},dist_u=e=>{V=v(V,e),B.forEach(e=>{e(V)})},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[n,l]=(0,b.useState)(V);(0,b.useEffect)(()=>(B.push(l),()=>{let e=B.indexOf(l);e>-1&&B.splice(e,1)}),[n]);let c=n.toasts.map(n=>{var l,c;return{...e,...e[n.type],...n,duration:n.duration||(null==(l=e[n.type])?void 0:l.duration)||(null==e?void 0:e.duration)||Y[n.type],style:{...e.style,...null==(c=e[n.type])?void 0:c.style,...n.style}}});return{...n,toasts:c}},G=(e,n="blank",l)=>({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...l,id:(null==l?void 0:l.id)||z()}),dist_h=e=>(n,l)=>{let c=G(n,e,l);return dist_u({type:2,toast:c}),c.id},dist_n=(e,n)=>dist_h("blank")(e,n);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,n,l)=>{let c=dist_n.loading(n.loading,{...l,...null==l?void 0:l.loading});return e.then(e=>(dist_n.success(T(n.success,e),{id:c,...l,...null==l?void 0:l.success}),e)).catch(e=>{dist_n.error(T(n.error,e),{id:c,...l,...null==l?void 0:l.error})}),e};var Z=(e,n)=>{dist_u({type:1,toast:{id:e,height:n}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:n,pausedAt:l}=I(e);(0,b.useEffect)(()=>{if(l)return;let e=Date.now(),c=n.map(n=>{if(n.duration===1/0)return;let l=(n.duration||0)+n.pauseDuration-(e-n.createdAt);if(l<0){n.visible&&dist_n.dismiss(n.id);return}return setTimeout(()=>dist_n.dismiss(n.id),l)});return()=>{c.forEach(e=>e&&clearTimeout(e))}},[n,l]);let c=(0,b.useCallback)(()=>{l&&dist_u({type:6,time:Date.now()})},[l]),h=(0,b.useCallback)((e,l)=>{let{reverseOrder:c=!1,gutter:h=8,defaultPosition:_}=l||{},b=n.filter(n=>(n.position||_)===(e.position||_)&&n.height),E=b.findIndex(n=>n.id===e.id),w=b.filter((e,n)=>n<E&&e.visible).length;return b.filter(e=>e.visible).slice(...c?[w+1]:[0,w]).reduce((e,n)=>e+(n.height||0)+h,0)},[n]);return{toasts:n,handlers:{updateHeight:Z,startPause:ee,endPause:c,calculateOffset:h}}},K=H`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Q=H`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,X=H`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,et=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Q} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${X} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,er=H`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,en=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${er} 1s linear infinite;
`,es=H`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ei=H`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ea=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${es} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ei} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,eo=j("div")`
  position: absolute;
`,el=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,eu=H`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ec=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${eu} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:n,type:l,iconTheme:c}=e;return void 0!==n?"string"==typeof n?b.createElement(ec,null,n):n:"blank"===l?null:b.createElement(el,null,b.createElement(en,{...c}),"loading"!==l&&b.createElement(eo,null,"error"===l?b.createElement(et,{...c}):b.createElement(ea,{...c})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ed=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ef=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,n)=>{let l=e.includes("top")?1:-1,[c,h]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(l),ge(l)];return{animation:n?`${H(c)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${H(h)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ep=b.memo(({toast:e,position:n,style:l,children:c})=>{let h=e.height?Ae(e.position||n||"top-center",e.visible):{opacity:0},_=b.createElement(M,{toast:e}),E=b.createElement(ef,{...e.ariaProps},T(e.message,e));return b.createElement(ed,{className:e.className,style:{...h,...l,...e.style}},"function"==typeof c?c({icon:_,message:E}):b.createElement(b.Fragment,null,_,E))});_=b.createElement,o.p=void 0,P=_,A=void 0,L=void 0;var Ee=({id:e,className:n,style:l,onHeightUpdate:c,children:h})=>{let _=b.useCallback(n=>{if(n){let i=()=>{c(e,n.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,c]);return b.createElement("div",{ref:_,className:n,style:l},h)},Re=(e,n)=>{let l=e.includes("top"),c=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${n*(l?1:-1)}px)`,...l?{top:0}:{bottom:0},...c}},em=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:n="top-center",toastOptions:l,gutter:c,children:h,containerStyle:_,containerClassName:E})=>{let{toasts:w,handlers:S}=D(l);return b.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",..._},className:E,onMouseEnter:S.startPause,onMouseLeave:S.endPause},w.map(l=>{let _=l.position||n,E=Re(_,S.calculateOffset(l,{reverseOrder:e,gutter:c,defaultPosition:n}));return b.createElement(Ee,{id:l.id,key:l.id,onHeightUpdate:S.updateHeight,className:l.visible?em:"",style:E},"custom"===l.type?T(l.message,l):h?h(l):b.createElement(ep,{toast:l,position:_}))}))},eh=dist_n}}]);