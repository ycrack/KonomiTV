import{j as y,k as D,h as x,e as m}from"./VChip-Dh-kTiWs.js";import{h as A}from"./VTextField-CXO-vs30.js";import{H as L,K as S,X as w,r as B,d3 as F,w as g,O as I,a2 as O,Q as f,j as p,cJ as R,c_ as T}from"./index-bUaC_4Uu.js";const j=L({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...y({origin:"center center",scrollStrategy:"block",transition:{component:D},zIndex:2400})},"VDialog"),z=S()({name:"VDialog",props:j(),emits:{"update:modelValue":a=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(a,E){let{emit:v,slots:u}=E;const l=w(a,"modelValue"),{scopeId:V}=x(),e=B();function d(t){var r,c;const n=t.relatedTarget,s=t.target;if(n!==s&&((r=e.value)!=null&&r.contentEl)&&((c=e.value)!=null&&c.globalTop)&&![document,e.value.contentEl].includes(s)&&!e.value.contentEl.contains(s)){const o=T(e.value.contentEl);if(!o.length)return;const i=o[0],h=o[o.length-1];n===i?h.focus():i.focus()}}F&&g(()=>l.value&&a.retainFocus,t=>{t?document.addEventListener("focusin",d):document.removeEventListener("focusin",d)},{immediate:!0});function P(){var t;v("afterEnter"),(t=e.value)!=null&&t.contentEl&&!e.value.contentEl.contains(document.activeElement)&&e.value.contentEl.focus({preventScroll:!0})}function b(){v("afterLeave")}return g(l,async t=>{var n;t||(await O(),(n=e.value.activatorEl)==null||n.focus({preventScroll:!0}))}),I(()=>{const t=m.filterProps(a),n=f({"aria-haspopup":"dialog","aria-expanded":String(l.value)},a.activatorProps),s=f({tabindex:-1},a.contentProps);return p(m,f({ref:e,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},t,{modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,"aria-modal":"true",activatorProps:n,contentProps:s,role:"dialog",onAfterEnter:P,onAfterLeave:b},V),{activator:u.activator,default:function(){for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return p(R,{root:"VDialog"},{default:()=>{var i;return[(i=u.default)==null?void 0:i.call(u,...c)]}})}})}),A({},e)}});export{z as V};
