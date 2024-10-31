(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();const Kt=!1;var Yt=Array.isArray,Ut=Array.from,Gt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Qt=Object.getPrototypeOf;function Xt(t){return t()}function G(t){for(var n=0;n<t.length;n++)t[n]()}const k=2,mt=4,R=8,nt=16,x=32,K=64,D=128,z=256,m=512,O=1024,B=2048,wt=4096,V=8192,Zt=16384,tn=1<<18,Et=1<<19,st=Symbol("$state");function gt(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function rn(t){return!nn(t,this.v)}function en(t){throw new Error("effect_in_teardown")}function ln(){throw new Error("effect_in_unowned_derived")}function on(t){throw new Error("effect_orphan")}function un(){throw new Error("effect_update_depth_exceeded")}function sn(){throw new Error("state_unsafe_local_read")}function fn(){throw new Error("state_unsafe_mutation")}function bt(t){return{f:0,v:t,reactions:null,equals:gt,version:0}}function an(t,n=!1){var e;const r=bt(t);return n||(r.equals=rn),c!==null&&c.l!==null&&((e=c.l).s??(e.s=[])).push(r),r}function cn(t,n=!1){return _n(an(t,n))}function _n(t){return f!==null&&f.f&k&&(E===null?Dn([t]):E.push(t)),t}function ft(t,n){return f!==null&&lt()&&f.f&(k|nt)&&(E===null||!E.includes(t))&&fn(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v=n,t.version=jt(),kt(t,O),lt()&&s!==null&&s.f&m&&!(s.f&x)&&(h!==null&&h.includes(t)?(g(s,O),U(s)):T===null?An([t]):T.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),o=r.length,l=0;l<o;l++){var u=r[l],i=u.f;i&O||!e&&u===s||(g(u,n),i&(m|D)&&(i&k?kt(u,B):U(u)))}}const pn=2;var at,Tt,Ot;function dn(){if(at===void 0){at=window;var t=Element.prototype,n=Node.prototype;Tt=it(n,"firstChild").get,Ot=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function hn(t=""){return document.createTextNode(t)}function St(t){return Tt.call(t)}function Nt(t){return Ot.call(t)}function ct(t,n){return St(t)}function _t(t,n=1,r=!1){let e=t;for(;n--;)e=Nt(e);return e}function yn(t){var n=k|O;s===null?n|=D:s.f|=Et;const r={children:null,ctx:c,deps:null,equals:gt,f:n,fn:t,reactions:null,v:null,version:0,parent:s};if(f!==null&&f.f&k){var e=f;(e.children??(e.children=[])).push(r)}return r}function xt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&k?rt(e):W(e)}}}function Ct(t){var n,r=s;N(t.parent);try{xt(t),n=Rt(t)}finally{N(r)}return n}function Dt(t){var n=Ct(t),r=(L||t.f&D)&&t.deps!==null?B:m;g(t,r),t.equals(n)||(t.v=n,t.version=jt())}function rt(t){xt(t),j(t,0),g(t,V),t.v=t.children=t.deps=t.ctx=t.reactions=null}function At(t){s===null&&f===null&&on(),f!==null&&f.f&D&&ln(),et&&en()}function mn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var o=(t&K)!==0,l=s,u={ctx:c,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:n,last:null,next:null,parent:o?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=q;try{vt(!0),ot(u),u.f|=Zt}catch(p){throw W(u),p}finally{vt(i)}}else n!==null&&U(u);var _=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Et)===0;if(!_&&!o&&e&&(l!==null&&mn(u,l),f!==null&&f.f&k)){var v=f;(v.children??(v.children=[])).push(u)}return u}function wn(t){const n=F(R,null,!1);return g(n,m),n.teardown=t,n}function J(t){At();var n=s!==null&&(s.f&x)!==0&&c!==null&&!c.m;if(n){var r=c;(r.e??(r.e=[])).push({fn:t,effect:s,reaction:f})}else{var e=Lt(t);return e}}function En(t){return At(),bn(t)}function gn(t){const n=F(K,t,!0);return()=>{W(n)}}function Lt(t){return F(mt,t,!1)}function bn(t){return F(R,t,!0)}function kn(t){return Tn(t)}function Tn(t,n=0){return F(R|nt|n,t,!0)}function On(t,n=!0){return F(R|x,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=et,e=f;pt(!0),S(null);try{n.call(null)}finally{pt(r),S(e)}}}function Ft(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;W(r,n),r=e}}function Sn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&x||W(n),n=r}}function W(t,n=!0){var r=!1;if((n||t.f&tn)&&t.nodes_start!==null){for(var e=t.nodes_start,o=t.nodes_end;e!==null;){var l=e===o?null:Nt(e);e.remove(),e=l}r=!0}Ft(t),Mt(t,n&&!r),j(t,0),g(t,V);var u=t.transitions;if(u!==null)for(const _ of u)_.stop();qt(t);var i=t.parent;i!==null&&i.first!==null&&Pt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Pt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}let Q=!1,X=[];function Nn(){Q=!1;const t=X.slice();X=[],G(t)}function xn(t){Q||(Q=!0,queueMicrotask(Nn)),X.push(t)}function Cn(t){throw new Error("lifecycle_outside_component")}let H=!1,q=!1,et=!1;function vt(t){q=t}function pt(t){et=t}let Z=[],P=0;let f=null;function S(t){f=t}let s=null;function N(t){s=t}let E=null;function Dn(t){E=t}let h=null,w=0,T=null;function An(t){T=t}let It=0,L=!1,c=null;function jt(){return++It}function lt(){return c!==null&&c.l===null}function Y(t){var u,i;var n=t.f;if(n&O)return!0;if(n&B){var r=t.deps,e=(n&D)!==0;if(r!==null){var o;if(n&z){for(o=0;o<r.length;o++)((u=r[o]).reactions??(u.reactions=[])).push(t);t.f^=z}for(o=0;o<r.length;o++){var l=r[o];if(Y(l)&&Dt(l),e&&s!==null&&!L&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||g(t,m)}return!1}function Ln(t,n,r){throw t}function Rt(t){var d;var n=h,r=w,e=T,o=f,l=L,u=E,i=c,_=t.f;h=null,w=0,T=null,f=_&(x|K)?null:t,L=!q&&(_&D)!==0,E=null,c=t.ctx;try{var v=(0,t.fn)(),p=t.deps;if(h!==null){var a;if(j(t,w),p!==null&&w>0)for(p.length=w+h.length,a=0;a<h.length;a++)p[w+a]=h[a];else t.deps=p=h;if(!L)for(a=w;a<p.length;a++)((d=p[a]).reactions??(d.reactions=[])).push(t)}else p!==null&&w<p.length&&(j(t,w),p.length=w);return v}finally{h=n,w=r,T=e,f=o,L=l,E=u,c=i}}function qn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var o=r.length-1;o===0?r=n.reactions=null:(r[e]=r[o],r.pop())}}r===null&&n.f&k&&(h===null||!h.includes(n))&&(g(n,B),n.f&(D|z)||(n.f^=z),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)qn(t,r[e])}function ot(t){var n=t.f;if(!(n&V)){g(t,m);var r=s;s=t;try{Ft(t),n&nt?Sn(t):Mt(t),qt(t);var e=Rt(t);t.teardown=typeof e=="function"?e:null,t.version=It}catch(o){Ln(o)}finally{s=r}}}function Fn(){P>1e3&&(P=0,un()),P++}function Mn(t){var n=t.length;if(n!==0){Fn();var r=q;q=!0;try{for(var e=0;e<n;e++){var o=t[e];o.f&m||(o.f^=m);var l=[];Bt(o,l),Pn(l)}}finally{q=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(V|wt))&&Y(e)&&(ot(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Pt(e):e.fn=null))}}function In(){if(H=!1,P>1001)return;const t=Z;Z=[],Mn(t),H||(P=0)}function U(t){H||(H=!0,queueMicrotask(In));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|x)){if(!(r&m))return;n.f^=m}}Z.push(n)}function Bt(t,n){var r=t.first,e=[];t:for(;r!==null;){var o=r.f,l=(o&x)!==0,u=l&&(o&m)!==0;if(!u&&!(o&wt))if(o&R){l?r.f^=m:Y(r)&&ot(r);var i=r.first;if(i!==null){r=i;continue}}else o&mt&&e.push(r);var _=r.next;if(_===null){let a=r.parent;for(;a!==null;){if(t===a)break t;var v=a.next;if(v!==null){r=v;continue t}a=a.parent}}r=_}for(var p=0;p<e.length;p++)i=e[p],n.push(i),Bt(i,n)}function I(t){var i;var n=t.f,r=(n&k)!==0;if(r&&n&V){var e=Ct(t);return rt(t),e}if(f!==null){E!==null&&E.includes(t)&&sn();var o=f.deps;h===null&&o!==null&&o[w]===t?w++:h===null?h=[t]:h.push(t),T!==null&&s!==null&&s.f&m&&!(s.f&x)&&T.includes(t)&&(g(s,O),U(s))}else if(r&&t.deps===null){var l=t,u=l.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(l))&&(u.deriveds??(u.deriveds=[])).push(l)}return r&&(l=t,Y(l)&&Dt(l)),t.v}function Vt(t){const n=f;try{return f=null,t()}finally{f=n}}const jn=~(O|B|m);function g(t,n){t.f=t.f&jn|n}function Wt(t,n=!1,r){c={p:c,c:null,e:null,m:!1,s:t,x:null,l:null},n||(c.l={s:null,u:null,r1:[],r2:bt(!1)})}function $t(t){const n=c;if(n!==null){const u=n.e;if(u!==null){var r=s,e=f;n.e=null;try{for(var o=0;o<u.length;o++){var l=u[o];N(l.effect),S(l.reaction),Lt(l.fn)}}finally{N(r),S(e)}}c=n.p,n.m=!0}return{}}function Rn(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(st in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&st in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jt(r);for(let o in e){const l=e[o].get;if(l)try{l.call(t)}catch{}}}}}const Bn=new Set,dt=new Set;function Vn(t,n,r,e){function o(l){if(e.capture||M.call(n,l),!l.cancelBubble){var u=f,i=s;S(null),N(null);try{return r.call(this,l)}finally{S(u),N(i)}}}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?xn(()=>{n.addEventListener(t,o,e)}):n.addEventListener(t,o,e),o}function Wn(t,n,r,e,o){var l={capture:e,passive:o},u=Vn(t,n,r,l);(n===document.body||n===window||n===document)&&wn(()=>{n.removeEventListener(t,u,l)})}function M(t){var ut;var n=this,r=n.ownerDocument,e=t.type,o=((ut=t.composedPath)==null?void 0:ut.call(t))||[],l=o[0]||t.target,u=0,i=t.__root;if(i){var _=o.indexOf(i);if(_!==-1&&(n===document||n===window)){t.__root=n;return}var v=o.indexOf(n);if(v===-1)return;_<=v&&(u=_)}if(l=o[u]||t.target,l!==n){Gt(t,"currentTarget",{configurable:!0,get(){return l||r}});var p=f,a=s;S(null),N(null);try{for(var d,y=[];l!==null;){var b=l.assignedSlot||l.parentNode||l.host||null;try{var C=l["__"+e];if(C!==void 0&&!l.disabled)if(Yt(C)){var[zt,...Ht]=C;zt.apply(l,[t,...Ht])}else C.call(l,t)}catch($){d?y.push($):d=$}if(t.cancelBubble||b===n||b===null)break;l=b}if(d){for(let $ of y)queueMicrotask(()=>{throw $});throw d}}finally{t.__root=n,delete t.currentTarget,S(p),N(a)}}}function $n(t){var n=document.createElement("template");return n.innerHTML=t,n.content}function zn(t,n){var r=s;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=n)}function Hn(t,n){var r=(n&pn)!==0,e,o=!t.startsWith("<!>");return()=>{e===void 0&&(e=$n(o?t:"<!>"+t),e=St(e));var l=r?document.importNode(e,!0):e.cloneNode(!0);return zn(l,l),l}}function Kn(t,n){t!==null&&t.before(n)}const Yn=["touchstart","touchmove"];function Un(t){return Yn.includes(t)}function Gn(t,n){var r=n==null?"":typeof n=="object"?n+"":n;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function Jn(t,n){return Qn(t,n)}const A=new Map;function Qn(t,{target:n,anchor:r,props:e={},events:o,context:l,intro:u=!0}){dn();var i=new Set,_=a=>{for(var d=0;d<a.length;d++){var y=a[d];if(!i.has(y)){i.add(y);var b=Un(y);n.addEventListener(y,M,{passive:b});var C=A.get(y);C===void 0?(document.addEventListener(y,M,{passive:b}),A.set(y,1)):A.set(y,C+1)}}};_(Ut(Bn)),dt.add(_);var v=void 0,p=gn(()=>{var a=r??n.appendChild(hn());return On(()=>{if(l){Wt({});var d=c;d.c=l}o&&(e.$$events=o),v=t(a,e)||{},l&&$t()}),()=>{var b;for(var d of i){n.removeEventListener(d,M);var y=A.get(d);--y===0?(document.removeEventListener(d,M),A.delete(d)):A.set(d,y)}dt.delete(_),ht.delete(v),a!==r&&((b=a.parentNode)==null||b.removeChild(a))}});return ht.set(v,p),v}let ht=new WeakMap;function Xn(t=!1){const n=c,r=n.l.u;if(!r)return;let e=()=>Rn(n.s);if(t){let o=0,l={};const u=yn(()=>{let i=!1;const _=n.s;for(const v in _)_[v]!==l[v]&&(l[v]=_[v],i=!0);return i&&o++,o});e=()=>I(u)}r.b.length&&En(()=>{yt(n,e),G(r.b)}),J(()=>{const o=Vt(()=>r.m.map(Xt));return()=>{for(const l of o)typeof l=="function"&&l()}}),r.a.length&&J(()=>{yt(n,e),G(r.a)})}function yt(t,n){if(t.l.s)for(const r of t.l.s)I(r);n()}function Zn(t){c===null&&Cn(),c.l!==null?tr(c).m.push(t):J(()=>{const n=Vt(t);if(typeof n=="function")return n})}function tr(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}const nr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nr);var rr=Hn('<div class="container svelte-1k782vy"><img src="./src/assets/szabolcs.jpg" alt="Profilkép" width="auto" height="150" style="border-radius: 50%; margin-bottom: 1rem;"> <h1 class="svelte-1k782vy">Molnár Szabolcs</h1> <h2 class="svelte-1k782vy">SOB Esti</h2> <h2 class="svelte-1k782vy">Webfejlesztő</h2> <h3>Projectek:</h3> <a href="https://szabolcsmolnar82.github.io/autokalkulator/">Hatótáv Kalkulátor</a> <div class="counter svelte-1k782vy"> </div> <button class="svelte-1k782vy">Kattints ide!</button></div>');function er(t,n){Wt(n,!1);let r=cn(0);Zn(()=>{ft(r,Number(localStorage.getItem("clickCount"))||0)});function e(){ft(r,I(r)+1),localStorage.setItem("clickCount",I(r))}Xn();var o=rr(),l=_t(ct(o),12),u=ct(l),i=_t(l,2);kn(()=>Gn(u,`Látogatások száma: ${I(r)??""}`)),Wn("click",i,e),Kn(t,o),$t()}Jn(er,{target:document.getElementById("app")});