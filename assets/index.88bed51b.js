(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function w(){}const Je=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Qe(t){return t()}function De(){return Object.create(null)}function I(t){t.forEach(Qe)}function re(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ft(t){return Object.keys(t).length===0}function Me(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t){let e;return Me(t,n=>e=n)(),e}function G(t,e,n){t.$$.on_destroy.push(Me(e,n))}function se(t,e,n,s){if(t){const r=Ye(t,e,n,s);return t[0](r)}}function Ye(t,e,n,s){return t[1]&&s?ut(n.ctx.slice(),t[1](s(e))):n.ctx}function le(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(e.dirty.length,r.length);for(let c=0;c<o;c+=1)l[c]=e.dirty[c]|r[c];return l}return e.dirty|r}return e.dirty}function oe(t,e,n,s,r,l){if(r){const o=Ye(e,n,s,l);t.p(o,r)}}function ie(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Oe(t){return t==null?"":t}function dt(t){return t&&re(t.destroy)?t.destroy:w}const Ze=typeof window<"u";let _t=Ze?()=>window.performance.now():()=>Date.now(),Ae=Ze?t=>requestAnimationFrame(t):w;const Y=new Set;function et(t){Y.forEach(e=>{e.c(t)||(Y.delete(e),e.f())}),Y.size!==0&&Ae(et)}function mt(t){let e;return Y.size===0&&Ae(et),{promise:new Promise(n=>{Y.add(e={c:t,f:n})}),abort(){Y.delete(e)}}}function N(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=C("style");return gt(tt(t),e),e.sheet}function gt(t,e){return N(t.head||t,e),e.sheet}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function C(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function q(){return F(" ")}function nt(){return F("")}function K(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function E(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ht(t){return Array.from(t.childNodes)}function _e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function z(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function je(t,e,n){t.classList[n?"add":"remove"](e)}function rt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}const me=new Map;let pe=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function bt(t,e){const n={stylesheet:pt(e),rules:{}};return me.set(t,n),n}function yt(t,e,n,s,r,l,o,c=0){const i=16.666/s;let u=`{
`;for(let _=0;_<=1;_+=i){const h=e+(n-e)*l(_);u+=_*100+`%{${o(h,1-h)}}
`}const a=u+`100% {${o(n,1-n)}}
}`,d=`__svelte_${vt(a)}_${c}`,p=tt(t),{stylesheet:f,rules:g}=me.get(p)||bt(p,t);g[d]||(g[d]=!0,f.insertRule(`@keyframes ${d} ${a}`,f.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${s}ms linear ${r}ms 1 both`,pe+=1,d}function He(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),pe-=r,pe||wt())}function wt(){Ae(()=>{pe||(me.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),me.clear())})}let ne;function H(t){ne=t}function Se(){if(!ne)throw new Error("Function called outside component initialization");return ne}function We(t){Se().$$.on_mount.push(t)}function he(){const t=Se();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=rt(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,l)}),!l.defaultPrevented}return!0}}function Be(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const ee=[],B=[],ae=[],we=[],$t=Promise.resolve();let $e=!1;function kt(){$e||($e=!0,$t.then(qe))}function ge(t){ae.push(t)}function Te(t){we.push(t)}const ye=new Set;let ce=0;function qe(){const t=ne;do{for(;ce<ee.length;){const e=ee[ce];ce++,H(e),Et(e.$$)}for(H(null),ee.length=0,ce=0;B.length;)B.pop()();for(let e=0;e<ae.length;e+=1){const n=ae[e];ye.has(n)||(ye.add(n),n())}ae.length=0}while(ee.length);for(;we.length;)we.pop()();$e=!1,ye.clear(),H(t)}function Et(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ge)}}let Z;function Lt(){return Z||(Z=Promise.resolve(),Z.then(()=>{Z=null})),Z}function Re(t,e,n){t.dispatchEvent(rt(`${e?"intro":"outro"}${n}`))}const de=new Set;let x;function ze(){x={r:0,c:[],p:x}}function Pe(){x.r||I(x.c),x=x.p}function k(t,e){t&&t.i&&(de.delete(t),t.i(e))}function L(t,e,n,s){if(t&&t.o){if(de.has(t))return;de.add(t),x.c.push(()=>{de.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Ct={duration:0};function Mt(t,e,n){let s=e(t,n),r=!1,l,o,c=0;function i(){l&&He(t,l)}function u(){const{delay:d=0,duration:p=300,easing:f=Je,tick:g=w,css:$}=s||Ct;$&&(l=yt(t,0,1,p,d,f,$,c++)),g(0,1);const _=_t()+d,h=_+p;o&&o.abort(),r=!0,ge(()=>Re(t,!0,"start")),o=mt(M=>{if(r){if(M>=h)return g(1,0),Re(t,!0,"end"),i(),r=!1;if(M>=_){const T=f((M-_)/p);g(T,1-T)}}return r})}let a=!1;return{start(){a||(a=!0,He(t),re(s)?(s=s(),Lt().then(u)):u())},invalidate(){a=!1},end(){r&&(i(),r=!1)}}}function Fe(t,e){const n=e.token={};function s(r,l,o,c){if(e.token!==n)return;e.resolved=c;let i=e.ctx;o!==void 0&&(i=i.slice(),i[o]=c);const u=r&&(e.current=r)(i);let a=!1;e.block&&(e.blocks?e.blocks.forEach((d,p)=>{p!==l&&d&&(ze(),L(d,1,1,()=>{e.blocks[p]===d&&(e.blocks[p]=null)}),Pe())}):e.block.d(1),u.c(),k(u,1),u.m(e.mount(),e.anchor),a=!0),e.block=u,e.blocks&&(e.blocks[l]=u),a&&qe()}if(ct(t)){const r=Se();if(t.then(l=>{H(r),s(e.then,1,e.value,l),H(null)},l=>{if(H(r),s(e.catch,2,e.error,l),H(null),!e.hasCatch)throw l}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Ne(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function W(t){t&&t.c()}function A(t,e,n,s){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),s||ge(()=>{const o=t.$$.on_mount.map(Qe).filter(re);t.$$.on_destroy?t.$$.on_destroy.push(...o):I(o),t.$$.on_mount=[]}),l.forEach(ge)}function S(t,e){const n=t.$$;n.fragment!==null&&(I(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function At(t,e){t.$$.dirty[0]===-1&&(ee.push(t),kt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,s,r,l,o,c=[-1]){const i=ne;H(t);const u=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:r,bound:De(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:De(),dirty:c,skip_bound:!1,root:e.target||i.$$.root};o&&o(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(d,p,...f)=>{const g=f.length?f[0]:p;return u.ctx&&r(u.ctx[d],u.ctx[d]=g)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](g),a&&At(t,d)),p}):[],u.update(),a=!0,I(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const d=ht(e.target);u.fragment&&u.fragment.l(d),d.forEach(b)}else u.fragment&&u.fragment.c();e.intro&&k(t.$$.fragment),A(t,e.target,e.anchor,e.customElement),qe()}H(i)}class O{$destroy(){S(this,1),this.$destroy=w}$on(e,n){if(!re(n))return w;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Q=[];function St(t,e){return{subscribe:ue(t,e).subscribe}}function ue(t,e=w){let n;const s=new Set;function r(c){if(P(t,c)&&(t=c,n)){const i=!Q.length;for(const u of s)u[1](),Q.push(u,t);if(i){for(let u=0;u<Q.length;u+=2)Q[u][0](Q[u+1]);Q.length=0}}}function l(c){r(c(t))}function o(c,i=w){const u=[c,i];return s.add(u),s.size===1&&(n=e(r)||w),c(t),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:o}}function ve(t,e,n){const s=!Array.isArray(t),r=s?[t]:t,l=e.length<2;return St(n,o=>{let c=!1;const i=[];let u=0,a=w;const d=()=>{if(u)return;a();const f=e(s?i[0]:i,o);l?o(f):a=re(f)?f:w},p=r.map((f,g)=>Me(f,$=>{i[g]=$,u&=~(1<<g),c&&d()},()=>{u|=1<<g}));return c=!0,d(),function(){I(p),a()}})}const ke={raw:"",words:[""],wordsWanted:0,active:!1},fe=ue(""),j=ue(ke),X=ue("disconnected"),Ee=ue(!1),Wt=ve(j,t=>{if(t.active)return t.active}),Tt=ve(j,t=>{if(t.raw)return t.raw.split(" ")}),qt=ve(j,t=>{if(t.wordsWanted)return t.wordsWanted});ve(j,t=>{if(t.words&&t.wordsWanted)return[t.wordsWanted,t.words.length]});const st="https://openai-server-n8us.onrender.com",zt=st+"/connect",Pt=st+"/completion",Ie=async()=>{await fetch(zt).then(t=>t.text()).then(t=>{at(X)!="working"&&(t==="connected"?X.set("connected"):X.set("disconnected"))}).catch(t=>{console.error(t),X.set("disconnected")})},lt=async t=>{X.set("working"),await fetch(Pt+`?prompt=${t}`).then(e=>e.text()).then(e=>{X.set("connected");let n=e.split(" ");j.set({raw:e,words:n,wordsWanted:n.length,active:!0})}).catch(e=>{console.error(e)})},Nt=t=>{let e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText||""},Dt=async()=>{await lt("Start a fictional fairytale story:")},Ot=async t=>{let e=Nt("continue this story: "+t);await lt(e)};function jt(t){let e;return{c(){e=C("span"),E(e,"class","svelte-1rn9lw9")},m(n,s){y(n,e,s)},p:w,i:w,o:w,d(n){n&&b(e)}}}class V extends O{constructor(e){super(),D(this,e,null,jt,P,{})}}function Ht(t){let e,n,s,r,l,o,c,i,u,a,d,p,f,g,$,_,h,M,T,R,U;return e=new V({}),r=new V({}),c=new V({}),a=new V({}),f=new V({}),_=new V({}),T=new V({}),{c(){n=C("div"),W(e.$$.fragment),s=q(),l=C("div"),W(r.$$.fragment),o=q(),i=C("div"),W(c.$$.fragment),u=q(),d=C("div"),W(a.$$.fragment),p=q(),g=C("div"),W(f.$$.fragment),$=q(),h=C("div"),W(_.$$.fragment),M=q(),R=C("div"),W(T.$$.fragment),z(n,"display","contents"),z(n,"--width","5em"),z(l,"display","contents"),z(l,"--width","2em"),z(i,"display","contents"),z(i,"--width","1em"),z(d,"display","contents"),z(d,"--width","4em"),z(g,"display","contents"),z(g,"--width","2em"),z(h,"display","contents"),z(h,"--width","0.5em"),z(R,"display","contents"),z(R,"--width","0.5em")},m(m,v){y(m,n,v),A(e,n,null),y(m,s,v),y(m,l,v),A(r,l,null),y(m,o,v),y(m,i,v),A(c,i,null),y(m,u,v),y(m,d,v),A(a,d,null),y(m,p,v),y(m,g,v),A(f,g,null),y(m,$,v),y(m,h,v),A(_,h,null),y(m,M,v),y(m,R,v),A(T,R,null),U=!0},p:w,i(m){U||(k(e.$$.fragment,m),k(r.$$.fragment,m),k(c.$$.fragment,m),k(a.$$.fragment,m),k(f.$$.fragment,m),k(_.$$.fragment,m),k(T.$$.fragment,m),U=!0)},o(m){L(e.$$.fragment,m),L(r.$$.fragment,m),L(c.$$.fragment,m),L(a.$$.fragment,m),L(f.$$.fragment,m),L(_.$$.fragment,m),L(T.$$.fragment,m),U=!1},d(m){m&&e&&b(n),S(e,m),m&&b(s),m&&r&&b(l),S(r,m),m&&b(o),m&&c&&b(i),S(c,m),m&&b(u),m&&a&&b(d),S(a,m),m&&b(p),m&&f&&b(g),S(f,m),m&&b($),m&&_&&b(h),S(_,m),m&&b(M),m&&T&&b(R),S(T,m)}}}class Bt extends O{constructor(e){super(),D(this,e,null,Ht,P,{})}}const Le=(t,e)=>t.slice(0,e).join(" "),Ce=t=>t.replace(/(\r\n|\n|\r)/gm,""),te=t=>{var e=document.createRange();e.selectNodeContents(t),e.collapse();var n=window.getSelection();n.removeAllRanges(),n.addRange(e)};function Ve(t){let e,n=Ce(Le(t[4],t[1]))+"",s;return{c(){e=C("span"),s=F(n),E(e,"class","svelte-1ypiqyw")},m(r,l){y(r,e,l),N(e,s)},p(r,l){l&18&&n!==(n=Ce(Le(r[4],r[1]))+"")&&_e(s,n)},d(r){r&&b(e)}}}function Rt(t){return{c:w,m:w,i:w,o:w,d:w}}function Ft(t){return{c:w,m:w,i:w,o:w,d:w}}function It(t){let e,n;return e=new Bt({}),{c(){W(e.$$.fragment)},m(s,r){A(e,s,r),n=!0},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){L(e.$$.fragment,s),n=!1},d(s){S(e,s)}}}function Vt(t){let e,n,s,r,l,o,c,i=t[3]&&Ve(t),u={ctx:t,current:null,token:null,hasCatch:!1,pending:It,then:Ft,catch:Rt,blocks:[,,,]};return Fe(r=t[2],u),{c(){e=C("div"),n=F(t[5]),i&&i.c(),s=nt(),u.block.c(),E(e,"contenteditable","true"),E(e,"id","writingWindow"),E(e,"class","svelte-1ypiqyw")},m(a,d){y(a,e,d),N(e,n),i&&i.m(e,null),N(e,s),u.block.m(e,u.anchor=null),u.mount=()=>e,u.anchor=null,t[11](e),l=!0,o||(c=[K(e,"keydown",t[6]),K(e,"focus",t[7]),K(e,"blur",t[7])],o=!0)},p(a,[d]){t=a,(!l||d&32)&&_e(n,t[5]),t[3]?i?i.p(t,d):(i=Ve(t),i.c(),i.m(e,s)):i&&(i.d(1),i=null),u.ctx=t,d&4&&r!==(r=t[2])&&Fe(r,u)},i(a){l||(k(u.block),l=!0)},o(a){for(let d=0;d<3;d+=1){const p=u.blocks[d];L(p)}l=!1},d(a){a&&b(e),i&&i.d(),u.block.d(),u.token=null,u=null,t[11](null),o=!1,I(c)}}}function Gt(t,e,n){let s,r,l,o;G(t,Wt,_=>n(3,s=_)),G(t,qt,_=>n(1,r=_)),G(t,Tt,_=>n(4,l=_)),G(t,fe,_=>n(5,o=_));let c=null,i;const u=()=>i,a=async()=>{s&&await p(),n(2,c=Ot(o)),await c,te(i)},d=async()=>{n(2,c=Dt()),await c,te(i)};We(()=>{fe.set(""),j.set(ke),n(2,c=d())});const p=async()=>{await fe.set(o+Ce(Le(l,r))),await j.set(ke),te(i)},f=async _=>{s&&await p(),_.key==="Tab"?(_.preventDefault(),a()):fe.set(i.textContent)},g=_=>{_.type==="focus"?Ee.set(!0):Ee.set(!1)};function $(_){B[_?"unshift":"push"](()=>{i=_,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&3&&r&&te(i)},[i,r,c,s,l,o,f,g,u,a,d,$]}class xt extends O{constructor(e){super(),D(this,e,Gt,Vt,P,{getDiv:8,getAdventureMore:9,getAdventureStart:10})}get getDiv(){return this.$$.ctx[8]}get getAdventureMore(){return this.$$.ctx[9]}get getAdventureStart(){return this.$$.ctx[10]}}function Xt(t,{delay:e=0,duration:n=400,easing:s=Je}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:l=>`opacity: ${l*r}`}}function Kt(t){const e=Ut(t);return t.addEventListener("touchstart",e),t.addEventListener("mousedown",e),{destroy(){t.removeEventListener("touchstart",e),t.removeEventListener("mousedown",e)}}}function Ut(t){const e=Jt(t);return function(n){n.preventDefault(),t.dispatchEvent(new CustomEvent("dragstart"));const s="touches"in n?"touchmove":"mousemove",r="touches"in n?"touchend":"mouseup";document.addEventListener(s,e),document.addEventListener(r,l);function l(o){o.stopPropagation(),document.removeEventListener(s,e),document.removeEventListener(r,l),t.dispatchEvent(new CustomEvent("dragend"))}}}function Jt(t){const e=t.parentNode;return function(n){const{left:s,width:r}=e.getBoundingClientRect(),l="touches"in n?n.touches[0].clientX:n.clientX,o=Math.min(Math.max((l-s)/r,0),1)||0;t.dispatchEvent(new CustomEvent("drag",{detail:o}))}}function Qt(t){let e,n,s,r,l,o;const c=t[4].default,i=se(c,t,t[3],null);return{c(){e=C("div"),n=C("div"),i&&i.c(),E(n,"class","thumb-content svelte-8w8x88"),je(n,"active",t[1]),E(e,"class","thumb svelte-8w8x88"),E(e,"style",s=`left: ${t[0]*100}%;`)},m(u,a){y(u,e,a),N(e,n),i&&i.m(n,null),r=!0,l||(o=[dt(Kt.call(null,e)),K(e,"dragstart",t[5]),K(e,"drag",t[6]),K(e,"dragend",t[7])],l=!0)},p(u,[a]){i&&i.p&&(!r||a&8)&&oe(i,c,u,u[3],r?le(c,u[3],a,null):ie(u[3]),null),(!r||a&2)&&je(n,"active",u[1]),(!r||a&1&&s!==(s=`left: ${u[0]*100}%;`))&&E(e,"style",s)},i(u){r||(k(i,u),r=!0)},o(u){L(i,u),r=!1},d(u){u&&b(e),i&&i.d(u),l=!1,I(o)}}}function Yt(t,e,n){let{$$slots:s={},$$scope:r}=e;const l=he();let o,{pos:c}=e;const i=()=>(n(1,o=!0),l("active",!0)),u=({detail:d})=>n(0,c=d),a=()=>(n(1,o=!1),l("active",!1));return t.$$set=d=>{"pos"in d&&n(0,c=d.pos),"$$scope"in d&&n(3,r=d.$$scope)},[c,o,l,r,s,i,u,a]}class ot extends O{constructor(e){super(),D(this,e,Yt,Qt,P,{pos:0})}}const Zt=t=>({}),Ge=t=>({}),en=t=>({}),xe=t=>({});function Xe(t){let e,n,s;return{c(){e=C("input"),E(e,"type","number"),e.value=n=t[0][1],E(e,"name",s=t[1][1]),E(e,"class","svelte-1q9yxz9")},m(r,l){y(r,e,l)},p(r,l){l&1&&n!==(n=r[0][1])&&e.value!==n&&(e.value=n),l&2&&s!==(s=r[1][1])&&E(e,"name",s)},d(r){r&&b(e)}}}function tn(t){let e;return{c(){e=C("div"),E(e,"class","thumb svelte-1q9yxz9")},m(n,s){y(n,e,s)},p:w,d(n){n&&b(e)}}}function nn(t){let e;const n=t[10].default,s=se(n,t,t[15],null),r=s||tn();return{c(){r&&r.c()},m(l,o){r&&r.m(l,o),e=!0},p(l,o){s&&s.p&&(!e||o&32768)&&oe(s,n,l,l[15],e?le(n,l[15],o,null):ie(l[15]),null)},i(l){e||(k(r,l),e=!0)},o(l){L(r,l),e=!1},d(l){r&&r.d(l)}}}function rn(t){let e;const n=t[10].left,s=se(n,t,t[15],xe),r=s||nn(t);return{c(){r&&r.c()},m(l,o){r&&r.m(l,o),e=!0},p(l,o){s?s.p&&(!e||o&32768)&&oe(s,n,l,l[15],e?le(n,l[15],o,en):ie(l[15]),xe):r&&r.p&&(!e||o&32768)&&r.p(l,e?o:-1)},i(l){e||(k(r,l),e=!0)},o(l){L(r,l),e=!1},d(l){r&&r.d(l)}}}function Ke(t){let e,n,s;function r(o){t[13](o)}let l={$$slots:{default:[on]},$$scope:{ctx:t}};return t[3][1]!==void 0&&(l.pos=t[3][1]),e=new ot({props:l}),B.push(()=>Ne(e,"pos",r)),e.$on("active",t[14]),{c(){W(e.$$.fragment)},m(o,c){A(e,o,c),s=!0},p(o,c){const i={};c&32768&&(i.$$scope={dirty:c,ctx:o}),!n&&c&8&&(n=!0,i.pos=o[3][1],Te(()=>n=!1)),e.$set(i)},i(o){s||(k(e.$$.fragment,o),s=!0)},o(o){L(e.$$.fragment,o),s=!1},d(o){S(e,o)}}}function sn(t){let e;return{c(){e=C("div"),E(e,"class","thumb svelte-1q9yxz9")},m(n,s){y(n,e,s)},p:w,d(n){n&&b(e)}}}function ln(t){let e;const n=t[10].default,s=se(n,t,t[15],null),r=s||sn();return{c(){r&&r.c()},m(l,o){r&&r.m(l,o),e=!0},p(l,o){s&&s.p&&(!e||o&32768)&&oe(s,n,l,l[15],e?le(n,l[15],o,null):ie(l[15]),null)},i(l){e||(k(r,l),e=!0)},o(l){L(r,l),e=!1},d(l){r&&r.d(l)}}}function on(t){let e;const n=t[10].right,s=se(n,t,t[15],Ge),r=s||ln(t);return{c(){r&&r.c()},m(l,o){r&&r.m(l,o),e=!0},p(l,o){s?s.p&&(!e||o&32768)&&oe(s,n,l,l[15],e?le(n,l[15],o,Zt):ie(l[15]),Ge):r&&r.p&&(!e||o&32768)&&r.p(l,e?o:-1)},i(l){e||(k(r,l),e=!0)},o(l){L(r,l),e=!1},d(l){r&&r.d(l)}}}function un(t){let e,n,s,r,l,o,c,i,u,a,d,p,f=t[2]&&Xe(t);function g(h){t[11](h)}let $={$$slots:{default:[rn]},$$scope:{ctx:t}};t[3][0]!==void 0&&($.pos=t[3][0]),u=new ot({props:$}),B.push(()=>Ne(u,"pos",g)),u.$on("active",t[12]);let _=t[2]&&Ke(t);return{c(){e=C("input"),r=q(),f&&f.c(),l=q(),o=C("div"),c=C("div"),i=q(),W(u.$$.fragment),d=q(),_&&_.c(),E(e,"type","number"),e.value=n=t[0][0],E(e,"name",s=t[1][0]),E(e,"class","svelte-1q9yxz9"),E(c,"class","progress svelte-1q9yxz9"),E(c,"style",t[5]),E(o,"class","track svelte-1q9yxz9")},m(h,M){y(h,e,M),y(h,r,M),f&&f.m(h,M),y(h,l,M),y(h,o,M),N(o,c),N(o,i),A(u,o,null),N(o,d),_&&_.m(o,null),p=!0},p(h,[M]){(!p||M&1&&n!==(n=h[0][0])&&e.value!==n)&&(e.value=n),(!p||M&2&&s!==(s=h[1][0]))&&E(e,"name",s),h[2]?f?f.p(h,M):(f=Xe(h),f.c(),f.m(l.parentNode,l)):f&&(f.d(1),f=null),(!p||M&32)&&E(c,"style",h[5]);const T={};M&32768&&(T.$$scope={dirty:M,ctx:h}),!a&&M&8&&(a=!0,T.pos=h[3][0],Te(()=>a=!1)),u.$set(T),h[2]?_?(_.p(h,M),M&4&&k(_,1)):(_=Ke(h),_.c(),k(_,1),_.m(o,null)):_&&(ze(),L(_,1,1,()=>{_=null}),Pe())},i(h){p||(k(u.$$.fragment,h),k(_),p=!0)},o(h){L(u.$$.fragment,h),L(_),p=!1},d(h){h&&b(e),h&&b(r),f&&f.d(h),h&&b(l),h&&b(o),S(u),_&&_.d()}}}function cn(t){return[Math.min(...t),Math.max(...t)]}function fn(t,e,n){let s,{$$slots:r={},$$scope:l}=e;const o=he();let{name:c=[]}=e,{range:i=!1}=e,{min:u=0}=e,{max:a=100}=e,{step:d=1}=e,{value:p=[u,a]}=e,f,g=!1,{order:$=!1}=e;function _(v){const J=u%d,it=a-u;n(0,p=v.map(be=>u+be*it).map(be=>Math.round((be-J)/d)*d+J)),o("input",p)}function h(v){n(3,f=v.map(J=>Math.min(Math.max(J,u),a)).map(J=>(J-u)/(a-u)))}function M(){h(p),_(f)}function T(v){t.$$.not_equal(f[0],v)&&(f[0]=v,n(3,f),n(2,i),n(9,$),n(4,g))}const R=({detail:v})=>n(4,g=v);function U(v){t.$$.not_equal(f[1],v)&&(f[1]=v,n(3,f),n(2,i),n(9,$),n(4,g))}const m=({detail:v})=>n(4,g=v);return t.$$set=v=>{"name"in v&&n(1,c=v.name),"range"in v&&n(2,i=v.range),"min"in v&&n(6,u=v.min),"max"in v&&n(7,a=v.max),"step"in v&&n(8,d=v.step),"value"in v&&n(0,p=v.value),"order"in v&&n(9,$=v.order),"$$scope"in v&&n(15,l=v.$$scope)},t.$$.update=()=>{t.$$.dirty&540&&i&&$&&g&&n(3,f=cn(f)),t.$$.dirty&24&&g&&_(f),t.$$.dirty&17&&(g||h(p)),t.$$.dirty&192&&M(),t.$$.dirty&12&&n(5,s=`
    left: ${i?Math.min(f[0],f[1])*100:0}%;
    right: ${100-Math.max(f[0],i?f[1]:f[0])*100}%;
  `)},[p,c,i,f,g,s,u,a,d,$,r,T,R,U,m,l]}class an extends O{constructor(e){super(),D(this,e,fn,un,P,{name:1,range:2,min:6,max:7,step:8,value:0,order:9})}}function dn(t){let e=t[0][0]+"",n,s,r=t[0][1]+"",l,o,c,i,u,a;function d(f){t[2](f)}let p={max:t[0][1]};return t[0]!==void 0&&(p.value=t[0]),i=new an({props:p}),B.push(()=>Ne(i,"value",d)),i.$on("input",t[1]),{c(){n=F(e),s=F(" / "),l=F(r),o=q(),c=C("div"),W(i.$$.fragment),E(c,"class","sliderContainer svelte-qt37ju")},m(f,g){y(f,n,g),y(f,s,g),y(f,l,g),y(f,o,g),y(f,c,g),A(i,c,null),a=!0},p(f,[g]){(!a||g&1)&&e!==(e=f[0][0]+"")&&_e(n,e),(!a||g&1)&&r!==(r=f[0][1]+"")&&_e(l,r);const $={};g&1&&($.max=f[0][1]),!u&&g&1&&(u=!0,$.value=f[0],Te(()=>u=!1)),i.$set($)},i(f){a||(k(i.$$.fragment,f),a=!0)},o(f){L(i.$$.fragment,f),a=!1},d(f){f&&b(n),f&&b(s),f&&b(l),f&&b(o),f&&b(c),S(i)}}}function _n(t,e,n){const s=he();let r=[0,0];j.subscribe(c=>{n(0,r[0]=c.wordsWanted,r),n(0,r[1]=c.words.length,r)});const l=()=>{j.update(c=>(c.wordsWanted=r[0],c)),s("message",{type:"moveCursorToEnd"})};function o(c){r=c,n(0,r)}return[r,l,o]}class mn extends O{constructor(e){super(),D(this,e,_n,dn,P,{})}}function pn(t){let e;return{c(){e=C("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svelte-8hbimu"><path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"></path></svg>',E(e,"class","svelte-8hbimu")},m(n,s){y(n,e,s)},p:w,i:w,o:w,d(n){n&&b(e)}}}class gn extends O{constructor(e){super(),D(this,e,null,pn,P,{})}}function hn(t){let e,n,s,r,l;return n=new gn({}),{c(){e=C("button"),W(n.$$.fragment),E(e,"class","svelte-1m03w3z")},m(o,c){y(o,e,c),A(n,e,null),s=!0,r||(l=K(e,"click",t[0]),r=!0)},p:w,i(o){s||(k(n.$$.fragment,o),s=!0)},o(o){L(n.$$.fragment,o),s=!1},d(o){o&&b(e),S(n),r=!1,l()}}}function vn(t){const e=he();return[s=>{console.log("blah"),s.preventDefault(),e("message",{type:"continueAdventure"})}]}class bn extends O{constructor(e){super(),D(this,e,vn,hn,P,{})}}function yn(t){let e;return{c(){e=F("press tab to generate")},m(n,s){y(n,e,s)},p:w,i:w,o:w,d(n){n&&b(e)}}}function wn(t){let e,n,s,r;e=new bn({}),e.$on("message",t[5]);let l=t[1]&&t[2].active&&Ue(t);return{c(){W(e.$$.fragment),n=q(),l&&l.c(),s=nt()},m(o,c){A(e,o,c),y(o,n,c),l&&l.m(o,c),y(o,s,c),r=!0},p(o,c){o[1]&&o[2].active?l?c&6&&k(l,1):(l=Ue(o),l.c(),k(l,1),l.m(s.parentNode,s)):l&&(ze(),L(l,1,1,()=>{l=null}),Pe())},i(o){r||(k(e.$$.fragment,o),k(l),r=!0)},o(o){L(e.$$.fragment,o),L(l),r=!1},d(o){S(e,o),o&&b(n),l&&l.d(o),o&&b(s)}}}function Ue(t){let e,n;return e=new mn({}),e.$on("message",t[6]),{c(){W(e.$$.fragment)},m(s,r){A(e,s,r),n=!0},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){L(e.$$.fragment,s),n=!1},d(s){S(e,s)}}}function $n(t){let e,n,s,r;const l=[wn,yn],o=[];function c(i,u){return i[3]()?0:1}return n=c(t),s=o[n]=l[n](t),{c(){e=C("div"),s.c(),E(e,"class","svelte-1f86seu")},m(i,u){y(i,e,u),o[n].m(e,null),t[7](e),r=!0},p(i,[u]){s.p(i,u)},i(i){r||(k(s),r=!0)},o(i){L(s),r=!1},d(i){i&&b(e),o[n].d(),t[7](null)}}}function kn(t,e,n){let s,r;G(t,Ee,$=>n(1,s=$)),G(t,j,$=>n(2,r=$));let l=window.visualViewport.height,o=window.visualViewport,c,i;We(()=>{n(0,c.style.bottom=`${l-o.height}px`,c)});function u(){i||(i=Mt(c,Xt,{duration:500})),i.start()}const a=()=>/iPhone|iPad|iPod/.test(window.navigator.userAgent),d=()=>{/iPhone|iPad|iPod/.test(window.navigator.userAgent)||(l=o.height),n(0,c.style.bottom=`${l-o.height}px`,c)};window.visualViewport.addEventListener("resize",d);function p($){Be.call(this,t,$)}function f($){Be.call(this,t,$)}function g($){B[$?"unshift":"push"](()=>{c=$,n(0,c)})}return[c,s,r,a,u,p,f,g]}class En extends O{constructor(e){super(),D(this,e,kn,$n,P,{transition:4})}get transition(){return this.$$.ctx[4]}}function Ln(t){let e,n;return{c(){e=C("div"),E(e,"id","status"),E(e,"class",n=Oe(t[0])+" svelte-jtfmqh")},m(s,r){y(s,e,r)},p(s,[r]){r&1&&n!==(n=Oe(s[0])+" svelte-jtfmqh")&&E(e,"class",n)},i:w,o:w,d(s){s&&b(e)}}}function Cn(t,e,n){let s;G(t,X,l=>n(0,s=l)),We(async()=>{r()});const r=async()=>{Ie(),setInterval(async()=>{Ie()},2e3)};return[s]}class Mn extends O{constructor(e){super(),D(this,e,Cn,Ln,P,{})}}function An(t){let e,n,s,r,l;return r=new Mn({}),{c(){e=C("div"),n=C("h1"),n.textContent="Adventure Writer",s=q(),W(r.$$.fragment),E(e,"class","svelte-1ly5bqw")},m(o,c){y(o,e,c),N(e,n),N(e,s),A(r,e,null),l=!0},p:w,i(o){l||(k(r.$$.fragment,o),l=!0)},o(o){L(r.$$.fragment,o),l=!1},d(o){o&&b(e),S(r)}}}class Sn extends O{constructor(e){super(),D(this,e,null,An,P,{})}}function Wn(t){let e,n,s,r,l,o,c;n=new Sn({});let i={};r=new xt({props:i}),t[3](r);let u={};return o=new En({props:u}),t[4](o),o.$on("message",t[2]),{c(){e=C("main"),W(n.$$.fragment),s=q(),W(r.$$.fragment),l=q(),W(o.$$.fragment)},m(a,d){y(a,e,d),A(n,e,null),N(e,s),A(r,e,null),N(e,l),A(o,e,null),c=!0},p(a,[d]){const p={};r.$set(p);const f={};o.$set(f)},i(a){c||(k(n.$$.fragment,a),k(r.$$.fragment,a),k(o.$$.fragment,a),c=!0)},o(a){L(n.$$.fragment,a),L(r.$$.fragment,a),L(o.$$.fragment,a),c=!1},d(a){a&&b(e),S(n),t[3](null),S(r),t[4](null),S(o)}}}function Tn(t,e,n){let s,r;const l=i=>{i.detail.type==="continueAdventure"&&s.getAdventureMore(),i.detail.type==="moveCursorToEnd"&&te(s.getDiv())};function o(i){B[i?"unshift":"push"](()=>{s=i,n(0,s)})}function c(i){B[i?"unshift":"push"](()=>{r=i,n(1,r)})}return[s,r,l,o,c]}class qn extends O{constructor(e){super(),D(this,e,Tn,Wn,P,{})}}new qn({target:document.getElementById("app")});