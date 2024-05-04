"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8361],{8361:(q,x,A)=>{A.r(x),A.d(x,{startInputShims:()=>X});var D=A(467),l=A(8476),M=A(909),y=A(4920),R=A(4379);A(8438);const P=new WeakMap,C=(e,t,s,r=0,o=!1)=>{P.has(e)!==s&&(s?H(e,t,r,o):Y(e,t))},H=(e,t,s,r=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r&&(n.disabled=!0),o.appendChild(n),P.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},Y=(e,t)=>{const s=P.get(e);s&&(P.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},T="input, textarea, [no-blur], [contenteditable]",F="$ionPaddingTimer",p=(e,t,s)=>{const r=e[F];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[F]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},N=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&p(t,0,s)},{once:!0})};let w=0;const B="data-ionic-skip-scroll-assist",Z=(e,t,s,r,o,n,i,a=!1)=>{const v=n&&(void 0===i||i.mode===R.a.None);let L=!1;const u=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?j(e,t,s,r,S.detail.keyboardHeight,v,a,u,!1):L=!0},c=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c)},h=function(){var S=(0,D.A)(function*(){t.hasAttribute(B)?t.removeAttribute(B):(j(e,t,s,r,o,v,a,u),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",c))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h),()=>{e.removeEventListener("focusin",h),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c)}},K=e=>{document.activeElement!==e&&(e.setAttribute(B,"true"),e.focus())},j=function(){var e=(0,D.A)(function*(t,s,r,o,n,i,a=!1,v=0,L=!0){if(!r&&!o)return;const u=((e,t,s,r)=>{var o;return((e,t,s,r)=>{const o=e.top,n=e.bottom,i=t.top,v=i+15,u=Math.min(t.bottom,r-s)-50-n,f=v-o,c=Math.round(u<0?-u:f>0?-f:0),h=Math.min(c,o-i),m=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:s,inputSafeY:4-(o-v)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),s,r)})(t,r||o,n,v);if(r&&Math.abs(u.scrollAmount)<4)return K(s),void(i&&null!==r&&(p(r,w),N(s,r,()=>w=0)));if(C(t,s,!0,u.inputSafeY,a),K(s),(0,y.r)(()=>t.click()),i&&r&&(w=u.scrollPadding,p(r,w)),typeof window<"u"){let f;const c=function(){var S=(0,D.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",c),r&&(yield(0,M.c)(r,0,u.scrollAmount,u.scrollDuration)),C(t,s,!1,u.inputSafeY),K(s),i&&N(s,r,()=>w=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",c)};if(r){const S=yield(0,M.g)(r);if(L&&u.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===s.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",c),void(f=setTimeout(c,1e3))}c()}});return function(s,r,o,n,i,a){return e.apply(this,arguments)}}(),X=function(){var e=(0,D.A)(function*(t,s){if(void 0===l.d)return;const r="ios"===s,o="android"===s,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",r),v=t.getBoolean("inputBlurring",!1),L=t.getBoolean("scrollPadding",!0),u=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,c=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var _=(0,D.A)(function*(d){yield new Promise(I=>(0,y.c)(d,I));const O=d.shadowRoot||d,g=O.querySelector("input")||O.querySelector("textarea"),b=(0,M.f)(d),W=b?null:d.closest("ion-footer");if(g){if(b&&a&&!f.has(d)){const I=((e,t,s)=>{if(!s||!t)return()=>{};const r=a=>{(e=>e===e.getRootNode().activeElement)(t)&&C(e,t,a)},o=()=>C(e,t,!1),n=()=>r(!0),i=()=>r(!1);return(0,y.a)(s,"ionScrollStart",n),(0,y.a)(s,"ionScrollEnd",i),t.addEventListener("blur",o),()=>{(0,y.b)(s,"ionScrollStart",n),(0,y.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",o)}})(d,g,b);f.set(d,I)}if("date"!==g.type&&"datetime-local"!==g.type&&(b||W)&&i&&!c.has(d)){const I=Z(d,g,b,W,n,L,h,o);c.set(d,I)}}});return function(O){return _.apply(this,arguments)}}();v&&(()=>{let e=!0,t=!1;const s=document;(0,y.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(T))return;const v=i.target;v!==a&&(v.matches(T)||v.closest(T)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const _ of u)S(_);l.d.addEventListener("ionInputDidLoad",_=>{S(_.detail)}),l.d.addEventListener("ionInputDidUnload",_=>{(_=>{if(a){const d=f.get(_);d&&d(),f.delete(_)}if(i){const d=c.get(_);d&&d(),c.delete(_)}})(_.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);