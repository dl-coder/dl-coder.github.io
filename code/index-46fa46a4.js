(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=window,be=Et.ShadowRoot&&(Et.ShadyCSS===void 0||Et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),Ce=new WeakMap;let co=class{constructor(e,o,r){if(this._$cssResult$=!0,r!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(be&&e===void 0){const r=o!==void 0&&o.length===1;r&&(e=Ce.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ce.set(o,e))}return e}toString(){return this.cssText}};const zo=t=>new co(typeof t=="string"?t:t+"",void 0,ge),It=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new co(o,t,ge)},Oo=(t,e)=>{be?t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):e.forEach(o=>{const r=document.createElement("style"),i=Et.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=o.cssText,t.appendChild(r)})},Ee=be?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const r of e.cssRules)o+=r.cssText;return zo(o)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jt;const Ut=window,Se=Ut.trustedTypes,To=Se?Se.emptyScript:"",Pe=Ut.reactiveElementPolyfillSupport,ne={toAttribute(t,e){switch(e){case Boolean:t=t?To:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},uo=(t,e)=>e!==t&&(e==e||t==t),qt={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:uo};let j=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var o;this.finalize(),((o=this.h)!==null&&o!==void 0?o:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((o,r)=>{const i=this._$Ep(r,o);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,o=qt){if(o.state&&(o.attribute=!1),this.finalize(),this.elementProperties.set(e,o),!o.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,o);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,o,r){return{get(){return this[o]},set(i){const s=this[e];this[o]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||qt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const o=this.properties,r=[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)];for(const i of r)this.createProperty(i,o[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)o.unshift(Ee(i))}else e!==void 0&&o.push(Ee(e));return o}static _$Ep(e,o){const r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(o=>o(this))}addController(e){var o,r;((o=this._$ES)!==null&&o!==void 0?o:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var o;(o=this._$ES)===null||o===void 0||o.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,o)=>{this.hasOwnProperty(o)&&(this._$Ei.set(o,this[o]),delete this[o])})}createRenderRoot(){var e;const o=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Oo(o,this.constructor.elementStyles),o}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostConnected)===null||r===void 0?void 0:r.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostDisconnected)===null||r===void 0?void 0:r.call(o)})}attributeChangedCallback(e,o,r){this._$AK(e,r)}_$EO(e,o,r=qt){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const n=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:ne).toAttribute(o,r.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,o){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const n=i.getPropertyOptions(s),u=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:ne;this._$El=s,this[s]=u.fromAttribute(o,n.type),this._$El=null}}requestUpdate(e,o,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||uo)(this[e],o)?(this._$AL.has(e)||this._$AL.set(e,o),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let o=!1;const r=this._$AL;try{o=this.shouldUpdate(r),o?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw o=!1,this._$Ek(),i}o&&this._$AE(r)}willUpdate(e){}_$AE(e){var o;(o=this._$ES)===null||o===void 0||o.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((o,r)=>this._$EO(r,this[r],o)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};j.finalized=!0,j.elementProperties=new Map,j.elementStyles=[],j.shadowRootOptions={mode:"open"},Pe?.({ReactiveElement:j}),((jt=Ut.reactiveElementVersions)!==null&&jt!==void 0?jt:Ut.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kt;const Lt=window,G=Lt.trustedTypes,Ue=G?G.createPolicy("lit-html",{createHTML:t=>t}):void 0,ae="$lit$",R=`lit$${(Math.random()+"").slice(9)}$`,ho="?"+R,Ro=`<${ho}>`,Q=document,ft=()=>Q.createComment(""),bt=t=>t===null||typeof t!="object"&&typeof t!="function",po=Array.isArray,No=t=>po(t)||typeof t?.[Symbol.iterator]=="function",Wt=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Le=/-->/g,ze=/>/g,B=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oe=/'/g,Te=/"/g,vo=/^(?:script|style|textarea|title)$/i,Io=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),b=Io(1),X=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Re=new WeakMap,W=Q.createTreeWalker(Q,129,null,!1),Do=(t,e)=>{const o=t.length-1,r=[];let i,s=e===2?"<svg>":"",n=nt;for(let l=0;l<o;l++){const c=t[l];let p,h,f=-1,y=0;for(;y<c.length&&(n.lastIndex=y,h=n.exec(c),h!==null);)y=n.lastIndex,n===nt?h[1]==="!--"?n=Le:h[1]!==void 0?n=ze:h[2]!==void 0?(vo.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=B):h[3]!==void 0&&(n=B):n===B?h[0]===">"?(n=i??nt,f=-1):h[1]===void 0?f=-2:(f=n.lastIndex-h[2].length,p=h[1],n=h[3]===void 0?B:h[3]==='"'?Te:Oe):n===Te||n===Oe?n=B:n===Le||n===ze?n=nt:(n=B,i=void 0);const A=n===B&&t[l+1].startsWith("/>")?" ":"";s+=n===nt?c+Ro:f>=0?(r.push(p),c.slice(0,f)+ae+c.slice(f)+R+A):c+R+(f===-2?(r.push(void 0),l):A)}const u=s+(t[o]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ue!==void 0?Ue.createHTML(u):u,r]};let le=class fo{constructor({strings:e,_$litType$:o},r){let i;this.parts=[];let s=0,n=0;const u=e.length-1,l=this.parts,[c,p]=Do(e,o);if(this.el=fo.createElement(c,r),W.currentNode=this.el.content,o===2){const h=this.el.content,f=h.firstChild;f.remove(),h.append(...f.childNodes)}for(;(i=W.nextNode())!==null&&l.length<u;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const f of i.getAttributeNames())if(f.endsWith(ae)||f.startsWith(R)){const y=p[n++];if(h.push(f),y!==void 0){const A=i.getAttribute(y.toLowerCase()+ae).split(R),xt=/([.?@])?(.*)/.exec(y);l.push({type:1,index:s,name:xt[2],strings:A,ctor:xt[1]==="."?Mo:xt[1]==="?"?Vo:xt[1]==="@"?Fo:Dt})}else l.push({type:6,index:s})}for(const f of h)i.removeAttribute(f)}if(vo.test(i.tagName)){const h=i.textContent.split(R),f=h.length-1;if(f>0){i.textContent=G?G.emptyScript:"";for(let y=0;y<f;y++)i.append(h[y],ft()),W.nextNode(),l.push({type:2,index:++s});i.append(h[f],ft())}}}else if(i.nodeType===8)if(i.data===ho)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(R,h+1))!==-1;)l.push({type:7,index:s}),h+=R.length-1}s++}}static createElement(e,o){const r=Q.createElement("template");return r.innerHTML=e,r}};function Z(t,e,o=t,r){var i,s,n,u;if(e===X)return e;let l=r!==void 0?(i=o._$Co)===null||i===void 0?void 0:i[r]:o._$Cl;const c=bt(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,o,r)),r!==void 0?((n=(u=o)._$Co)!==null&&n!==void 0?n:u._$Co=[])[r]=l:o._$Cl=l),l!==void 0&&(e=Z(t,l._$AS(t,e.values),l,r)),e}let Bo=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var o;const{el:{content:r},parts:i}=this._$AD,s=((o=e?.creationScope)!==null&&o!==void 0?o:Q).importNode(r,!0);W.currentNode=s;let n=W.nextNode(),u=0,l=0,c=i[0];for(;c!==void 0;){if(u===c.index){let p;c.type===2?p=new me(n,n.nextSibling,this,e):c.type===1?p=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(p=new jo(n,this,e)),this._$AV.push(p),c=i[++l]}u!==c?.index&&(n=W.nextNode(),u++)}return s}v(e){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,o),o+=r.strings.length-2):r._$AI(e[o])),o++}},me=class bo{constructor(e,o,r,i){var s;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=r,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,o;return(o=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&o!==void 0?o:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Z(this,e,o),bt(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):No(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&bt(this._$AH)?this._$AA.nextSibling.data=e:this.$(Q.createTextNode(e)),this._$AH=e}g(e){var o;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=le.createElement(i.h,this.options)),i);if(((o=this._$AH)===null||o===void 0?void 0:o._$AD)===s)this._$AH.v(r);else{const n=new Bo(s,this),u=n.u(this.options);n.v(r),this.$(u),this._$AH=n}}_$AC(e){let o=Re.get(e.strings);return o===void 0&&Re.set(e.strings,o=new le(e)),o}T(e){po(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,i=0;for(const s of e)i===o.length?o.push(r=new bo(this.k(ft()),this.k(ft()),this,this.options)):r=o[i],r._$AI(s),i++;i<o.length&&(this._$AR(r&&r._$AB.nextSibling,i),o.length=i)}_$AR(e=this._$AA.nextSibling,o){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,o);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var o;this._$AM===void 0&&(this._$Cp=e,(o=this._$AP)===null||o===void 0||o.call(this,e))}},Dt=class{constructor(e,o,r,i,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=o,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,o=this,r,i){const s=this.strings;let n=!1;if(s===void 0)e=Z(this,e,o,0),n=!bt(e)||e!==this._$AH&&e!==X,n&&(this._$AH=e);else{const u=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=Z(this,u[r+l],o,l),c===X&&(c=this._$AH[l]),n||(n=!bt(c)||c!==this._$AH[l]),c===$?e=$:e!==$&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!i&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Mo=class extends Dt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}};const Ho=G?G.emptyScript:"";let Vo=class extends Dt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,Ho):this.element.removeAttribute(this.name)}};class Fo extends Dt{constructor(e,o,r,i,s){super(e,o,r,i,s),this.type=5}_$AI(e,o=this){var r;if((e=(r=Z(this,e,o,0))!==null&&r!==void 0?r:$)===X)return;const i=this._$AH,s=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==$&&(i===$||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o,r;typeof this._$AH=="function"?this._$AH.call((r=(o=this.options)===null||o===void 0?void 0:o.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}let jo=class{constructor(e,o,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}};const Ne=Lt.litHtmlPolyfillSupport;Ne?.(le,me),((Kt=Lt.litHtmlVersions)!==null&&Kt!==void 0?Kt:Lt.litHtmlVersions=[]).push("2.7.2");const qo=(t,e,o)=>{var r,i;const s=(r=o?.renderBefore)!==null&&r!==void 0?r:e;let n=s._$litPart$;if(n===void 0){const u=(i=o?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new me(e.insertBefore(ft(),u),u,void 0,o??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jt,Gt;let F=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,o;const r=super.createRenderRoot();return(e=(o=this.renderOptions).renderBefore)!==null&&e!==void 0||(o.renderBefore=r.firstChild),r}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qo(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return X}};F.finalized=!0,F._$litElement$=!0,(Jt=globalThis.litElementHydrateSupport)===null||Jt===void 0||Jt.call(globalThis,{LitElement:F});const Ie=globalThis.litElementPolyfillSupport;Ie?.({LitElement:F});((Gt=globalThis.litElementVersions)!==null&&Gt!==void 0?Gt:globalThis.litElementVersions=[]).push("3.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=t=>e=>typeof e=="function"?((o,r)=>(customElements.define(o,r),r))(t,e):((o,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(n){customElements.define(o,n)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function Bt(t){return(e,o)=>o!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(t,e,o):Ko(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qt;((Qt=window.HTMLSlotElement)===null||Qt===void 0?void 0:Qt.prototype.assignedElements)!=null;var St=window,_e=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$e=Symbol(),De=new WeakMap,go=class{constructor(e,o,r){if(this._$cssResult$=!0,r!==$e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(_e&&e===void 0){const r=o!==void 0&&o.length===1;r&&(e=De.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&De.set(o,e))}return e}toString(){return this.cssText}},Wo=t=>new go(typeof t=="string"?t:t+"",void 0,$e),E=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new go(o,t,$e)},Jo=(t,e)=>{_e?t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):e.forEach(o=>{const r=document.createElement("style"),i=St.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=o.cssText,t.appendChild(r)})},Be=_e?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const r of e.cssRules)o+=r.cssText;return Wo(o)})(t):t,Xt,zt=window,Me=zt.trustedTypes,Go=Me?Me.emptyScript:"",He=zt.reactiveElementPolyfillSupport,gt={toAttribute(t,e){switch(e){case Boolean:t=t?Go:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},mo=(t,e)=>e!==t&&(e==e||t==t),Zt={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:mo},q=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const r=this._$Ep(o,e);r!==void 0&&(this._$Ev.set(r,o),t.push(r))}),t}static createProperty(t,e=Zt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Zt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of o)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)e.unshift(Be(r))}else t!==void 0&&e.push(Be(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Jo(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=Zt){var r;const i=this.constructor._$Ep(t,o);if(i!==void 0&&o.reflect===!0){const s=(((r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?o.converter:gt).toAttribute(e,o.type);this._$El=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,e){var o;const r=this.constructor,i=r._$Ev.get(t);if(i!==void 0&&this._$El!==i){const s=r.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:gt;this._$El=i,this[i]=n.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||mo)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,i)=>this[i]=r),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdate)===null||i===void 0?void 0:i.call(r)}),this.update(o)):this._$Ek()}catch(r){throw e=!1,this._$Ek(),r}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};q.finalized=!0,q.elementProperties=new Map,q.elementStyles=[],q.shadowRootOptions={mode:"open"},He?.({ReactiveElement:q}),((Xt=zt.reactiveElementVersions)!==null&&Xt!==void 0?Xt:zt.reactiveElementVersions=[]).push("1.6.1");var Yt,Ot=window,Y=Ot.trustedTypes,Ve=Y?Y.createPolicy("lit-html",{createHTML:t=>t}):void 0,N=`lit$${(Math.random()+"").slice(9)}$`,yo="?"+N,Qo=`<${yo}>`,tt=document,mt=(t="")=>tt.createComment(t),yt=t=>t===null||typeof t!="object"&&typeof t!="function",_o=Array.isArray,Xo=t=>_o(t)||typeof t?.[Symbol.iterator]=="function",at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fe=/-->/g,je=/>/g,M=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qe=/'/g,Ke=/"/g,$o=/^(?:script|style|textarea|title)$/i,Zo=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),w=Zo(1),k=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),We=new WeakMap,J=tt.createTreeWalker(tt,129,null,!1),Yo=(t,e)=>{const o=t.length-1,r=[];let i,s=e===2?"<svg>":"",n=at;for(let l=0;l<o;l++){const c=t[l];let p,h,f=-1,y=0;for(;y<c.length&&(n.lastIndex=y,h=n.exec(c),h!==null);)y=n.lastIndex,n===at?h[1]==="!--"?n=Fe:h[1]!==void 0?n=je:h[2]!==void 0?($o.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=M):h[3]!==void 0&&(n=M):n===M?h[0]===">"?(n=i??at,f=-1):h[1]===void 0?f=-2:(f=n.lastIndex-h[2].length,p=h[1],n=h[3]===void 0?M:h[3]==='"'?Ke:qe):n===Ke||n===qe?n=M:n===Fe||n===je?n=at:(n=M,i=void 0);const A=n===M&&t[l+1].startsWith("/>")?" ":"";s+=n===at?c+Qo:f>=0?(r.push(p),c.slice(0,f)+"$lit$"+c.slice(f)+N+A):c+N+(f===-2?(r.push(void 0),l):A)}const u=s+(t[o]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ve!==void 0?Ve.createHTML(u):u,r]},Tt=class{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,s=0;const n=t.length-1,u=this.parts,[l,c]=Yo(t,e);if(this.el=Tt.createElement(l,o),J.currentNode=this.el.content,e===2){const p=this.el.content,h=p.firstChild;h.remove(),p.append(...h.childNodes)}for(;(r=J.nextNode())!==null&&u.length<n;){if(r.nodeType===1){if(r.hasAttributes()){const p=[];for(const h of r.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(N)){const f=c[s++];if(p.push(h),f!==void 0){const y=r.getAttribute(f.toLowerCase()+"$lit$").split(N),A=/([.?@])?(.*)/.exec(f);u.push({type:1,index:i,name:A[2],strings:y,ctor:A[1]==="."?er:A[1]==="?"?rr:A[1]==="@"?ir:Ht})}else u.push({type:6,index:i})}for(const h of p)r.removeAttribute(h)}if($o.test(r.tagName)){const p=r.textContent.split(N),h=p.length-1;if(h>0){r.textContent=Y?Y.emptyScript:"";for(let f=0;f<h;f++)r.append(p[f],mt()),J.nextNode(),u.push({type:2,index:++i});r.append(p[h],mt())}}}else if(r.nodeType===8)if(r.data===yo)u.push({type:2,index:i});else{let p=-1;for(;(p=r.data.indexOf(N,p+1))!==-1;)u.push({type:7,index:i}),p+=N.length-1}i++}}static createElement(t,e){const o=tt.createElement("template");return o.innerHTML=t,o}};function et(t,e,o=t,r){var i,s,n,u;if(e===k)return e;let l=r!==void 0?(i=o._$Co)===null||i===void 0?void 0:i[r]:o._$Cl;const c=yt(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,o,r)),r!==void 0?((n=(u=o)._$Co)!==null&&n!==void 0?n:u._$Co=[])[r]=l:o._$Cl=l),l!==void 0&&(e=et(t,l._$AS(t,e.values),l,r)),e}var tr=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:r}=this._$AD,i=((e=t?.creationScope)!==null&&e!==void 0?e:tt).importNode(o,!0);J.currentNode=i;let s=J.nextNode(),n=0,u=0,l=r[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new Mt(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new sr(s,this,t)),this.u.push(c),l=r[++u]}n!==l?.index&&(s=J.nextNode(),n++)}return i}p(t){let e=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},Mt=class{constructor(t,e,o,r){var i;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cm=(i=r?.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),yt(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==k&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xo(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==_&&yt(this._$AH)?this._$AA.nextSibling.data=t:this.T(tt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Tt.createElement(r.h,this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.p(o);else{const s=new tr(i,this),n=s.v(this.options);s.p(o),this.T(n),this._$AH=s}}_$AC(t){let e=We.get(t.strings);return e===void 0&&We.set(t.strings,e=new Tt(t)),e}k(t){_o(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new Mt(this.O(mt()),this.O(mt()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ht=class{constructor(t,e,o,r,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const i=this.strings;let s=!1;if(i===void 0)t=et(this,t,e,0),s=!yt(t)||t!==this._$AH&&t!==k,s&&(this._$AH=t);else{const n=t;let u,l;for(t=i[0],u=0;u<i.length-1;u++)l=et(this,n[o+u],e,u),l===k&&(l=this._$AH[u]),s||(s=!yt(l)||l!==this._$AH[u]),l===_?t=_:t!==_&&(t+=(l??"")+i[u+1]),this._$AH[u]=l}s&&!r&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},er=class extends Ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},or=Y?Y.emptyScript:"",rr=class extends Ht{constructor(){super(...arguments),this.type=4}j(t){t&&t!==_?this.element.setAttribute(this.name,or):this.element.removeAttribute(this.name)}},ir=class extends Ht{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){var o;if((t=(o=et(this,t,e,0))!==null&&o!==void 0?o:_)===k)return;const r=this._$AH,i=t===_&&r!==_||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==_&&(r===_||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},sr=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}},Je=Ot.litHtmlPolyfillSupport;Je?.(Tt,Mt),((Yt=Ot.litHtmlVersions)!==null&&Yt!==void 0?Yt:Ot.litHtmlVersions=[]).push("2.6.1");var nr=(t,e,o)=>{var r,i;const s=(r=o?.renderBefore)!==null&&r!==void 0?r:e;let n=s._$litPart$;if(n===void 0){const u=(i=o?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new Mt(e.insertBefore(mt(),u),u,void 0,o??{})}return n._$AI(t),n},te,ee,vt=class extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=nr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return k}};vt.finalized=!0,vt._$litElement$=!0,(te=globalThis.litElementHydrateSupport)===null||te===void 0||te.call(globalThis,{LitElement:vt});var Ge=globalThis.litElementPolyfillSupport;Ge?.({LitElement:vt});((ee=globalThis.litElementVersions)!==null&&ee!==void 0?ee:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var L=E`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ar=E`
  ${L}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Vt=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}},H={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},wo=t=>(...e)=>({_$litDirective$:t,values:e}),xo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,r){this._$Ct=e,this._$AM=o,this._$Ci=r}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var I=wo(class extends xo{constructor(t){var e;if(super(t),t.type!==H.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((o=this.st)===null||o===void 0)&&o.has(s))&&this.nt.add(s);return this.render(e)}const i=t.element.classList;this.nt.forEach(s=>{s in e||(i.remove(s),this.nt.delete(s))});for(const s in e){const n=!!e[s];n===this.nt.has(s)||!((r=this.st)===null||r===void 0)&&r.has(s)||(n?(i.add(s),this.nt.add(s)):(i.remove(s),this.nt.delete(s)))}return k}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Ao=Object.defineProperty,lr=Object.defineProperties,dr=Object.getOwnPropertyDescriptor,cr=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,ur=Object.prototype.hasOwnProperty,hr=Object.prototype.propertyIsEnumerable,Xe=(t,e,o)=>e in t?Ao(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,z=(t,e)=>{for(var o in e||(e={}))ur.call(e,o)&&Xe(t,o,e[o]);if(Qe)for(var o of Qe(e))hr.call(e,o)&&Xe(t,o,e[o]);return t},rt=(t,e)=>lr(t,cr(e)),a=(t,e,o,r)=>{for(var i=r>1?void 0:r?dr(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(r?n(e,o,i):n(i))||i);return r&&i&&Ao(e,o,i),i},O=t=>e=>typeof e=="function"?((o,r)=>(customElements.define(o,r),r))(t,e):((o,r)=>{const{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(n){customElements.define(o,n)}}})(t,e),pr=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?rt(z({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function d(t){return(e,o)=>o!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(t,e,o):pr(t,e)}function it(t){return d(rt(z({},t),{state:!0}))}var vr=({finisher:t,descriptor:e})=>(o,r)=>{var i;if(r===void 0){const s=(i=o.originalKey)!==null&&i!==void 0?i:o.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(o.key)}:rt(z({},o),{key:s});return t!=null&&(n.finisher=function(u){t(u,s)}),n}{const s=o.constructor;e!==void 0&&Object.defineProperty(o,r,e(r)),t?.(s,r)}};function st(t,e){return vr({descriptor:o=>{const r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof o=="symbol"?Symbol():"__"+o;r.get=function(){var s,n;return this[i]===void 0&&(this[i]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&n!==void 0?n:null),this[i]}}return r}})}var oe;((oe=window.HTMLSlotElement)===null||oe===void 0?void 0:oe.prototype.assignedElements)!=null;var S=class extends vt{emit(t,e){const o=new CustomEvent(t,z({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}};a([d()],S.prototype,"dir",2);a([d()],S.prototype,"lang",2);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var de=class extends S{constructor(){super(...arguments),this.hasSlotController=new Vt(this,"footer","header","image")}render(){return w`
      <div
        part="base"
        class=${I({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};de.styles=ar;de=a([O("sl-card")],de);var lt=new WeakMap,dt=new WeakMap,re=new WeakSet,At=new WeakMap,ko=class{constructor(t,e){(this.host=t).addController(this),this.options=z({form:o=>{if(o.hasAttribute("form")&&o.getAttribute("form")!==""){const r=o.getRootNode(),i=o.getAttribute("form");if(i)return r.getElementById(i)}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),At.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),At.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,lt.has(this.form)?lt.get(this.form).add(this.host):lt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),dt.has(this.form)||(dt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=lt.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),dt.has(this.form)&&(this.form.reportValidity=dt.get(this.form),dt.delete(this.form))),this.form=void 0}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()==="sl-button";!e&&!i&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(s=>{t.formData.append(o,s.toString())}):t.formData.append(o,r.toString()))}handleFormSubmit(t){var e;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((e=lt.get(this.form))==null||e.forEach(i=>{this.setUserInteracted(i,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),At.set(this.host,[])}handleInteraction(t){const e=At.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if(typeof e.reportValidity=="function"&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){e?re.add(t):re.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{e.hasAttribute(r)&&o.setAttribute(r,e.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!re.has(e),r=!!e.required;e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},we=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(rt(z({},we),{valid:!1,valueMissing:!0}));Object.freeze(rt(z({},we),{valid:!1,customError:!0}));var fr=E`
  ${L}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Co=Symbol.for(""),br=t=>{if(t?.r===Co)return t?._$litStatic$},Rt=(t,...e)=>({_$litStatic$:e.reduce((o,r,i)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[i+1],t[0]),r:Co}),Ze=new Map,gr=t=>(e,...o)=>{const r=o.length;let i,s;const n=[],u=[];let l,c=0,p=!1;for(;c<r;){for(l=e[c];c<r&&(s=o[c],(i=br(s))!==void 0);)l+=i+e[++c],p=!0;u.push(s),n.push(l),c++}if(c===r&&n.push(e[r]),p){const h=n.join("$$lit$$");(e=Ze.get(h))===void 0&&(n.raw=n,Ze.set(h,e=n)),o=u}return t(e,...o)},Pt=gr(w);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var g=t=>t??_;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var ce=new Set,mr=new MutationObserver(Po),K=new Map,Eo=document.documentElement.dir||"ltr",So=document.documentElement.lang||navigator.language,V;mr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function yr(...t){t.map(e=>{const o=e.$code.toLowerCase();K.has(o)?K.set(o,Object.assign(Object.assign({},K.get(o)),e)):K.set(o,e),V||(V=e)}),Po()}function Po(){Eo=document.documentElement.dir||"ltr",So=document.documentElement.lang||navigator.language,[...ce.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var _r=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ce.add(this.host)}hostDisconnected(){ce.delete(this.host)}dir(){return`${this.host.dir||Eo}`.toLowerCase()}lang(){return`${this.host.lang||So}`.toLowerCase()}getTranslationData(t){var e,o;const r=new Intl.Locale(t),i=r?.language.toLowerCase(),s=(o=(e=r?.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",n=K.get(`${i}-${s}`),u=K.get(i);return{locale:r,language:i,region:s,primary:n,secondary:u}}exists(t,e){var o;const{primary:r,secondary:i}=this.getTranslationData((o=e.lang)!==null&&o!==void 0?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(r&&r[t]||i&&i[t]||e.includeFallback&&V&&V[t])}term(t,...e){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(r&&r[t])i=r[t];else if(V&&V[t])i=V[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}},Ft=class extends _r{},$r={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};yr($r);function D(t,e){const o=z({waitUntilFirstUpdate:!1},e);return(r,i)=>{const{update:s}=r,n=Array.isArray(t)?t:[t];r.update=function(u){n.forEach(l=>{const c=l;if(u.has(c)){const p=u.get(c),h=this[c];p!==h&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[i](p,h)}}),s.call(this,u)}}}var m=class extends S{constructor(){super(...arguments),this.formControlController=new ko(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Vt(this,"[default]","prefix","suffix"),this.localize=new Ft(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:we}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleHostClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopImmediatePropagation())}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Rt`a`:Rt`button`;return Pt`
      <${e}
        part="base"
        class=${I({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${g(t?void 0:this.disabled)}
        type=${g(t?void 0:this.type)}
        title=${this.title}
        name=${g(t?void 0:this.name)}
        value=${g(t?void 0:this.value)}
        href=${g(t?this.href:void 0)}
        target=${g(t?this.target:void 0)}
        download=${g(t?this.download:void 0)}
        rel=${g(t?this.rel:void 0)}
        role=${g(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Pt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Pt`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};m.styles=fr;a([st(".button")],m.prototype,"button",2);a([it()],m.prototype,"hasFocus",2);a([it()],m.prototype,"invalid",2);a([d()],m.prototype,"title",2);a([d({reflect:!0})],m.prototype,"variant",2);a([d({reflect:!0})],m.prototype,"size",2);a([d({type:Boolean,reflect:!0})],m.prototype,"caret",2);a([d({type:Boolean,reflect:!0})],m.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],m.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],m.prototype,"outline",2);a([d({type:Boolean,reflect:!0})],m.prototype,"pill",2);a([d({type:Boolean,reflect:!0})],m.prototype,"circle",2);a([d()],m.prototype,"type",2);a([d()],m.prototype,"name",2);a([d()],m.prototype,"value",2);a([d()],m.prototype,"href",2);a([d()],m.prototype,"target",2);a([d()],m.prototype,"rel",2);a([d()],m.prototype,"download",2);a([d()],m.prototype,"form",2);a([d({attribute:"formaction"})],m.prototype,"formAction",2);a([d({attribute:"formenctype"})],m.prototype,"formEnctype",2);a([d({attribute:"formmethod"})],m.prototype,"formMethod",2);a([d({attribute:"formnovalidate",type:Boolean})],m.prototype,"formNoValidate",2);a([d({attribute:"formtarget"})],m.prototype,"formTarget",2);a([D("disabled",{waitUntilFirstUpdate:!0})],m.prototype,"handleDisabledChange",1);m=a([O("sl-button")],m);var wr=E`
  ${L}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,ue=class extends S{constructor(){super(...arguments),this.localize=new Ft(this)}render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ue.styles=wr;ue=a([O("sl-spinner")],ue);var he="";function Ye(t){he=t}function xr(t=""){if(!he){const e=[...document.getElementsByTagName("script")],o=e.find(r=>r.hasAttribute("data-shoelace"));if(o)Ye(o.getAttribute("data-shoelace"));else{const r=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let i="";r&&(i=r.getAttribute("src")),Ye(i.split("/").slice(0,-1).join("/"))}}return he.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Ar={name:"default",resolver:t=>xr(`assets/icons/${t}.svg`)},kr=Ar,to={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Cr={name:"system",resolver:t=>t in to?`data:image/svg+xml,${encodeURIComponent(to[t])}`:""},Er=Cr,Sr=[kr,Er],pe=[];function Pr(t){pe.push(t)}function Ur(t){pe=pe.filter(e=>e!==t)}function eo(t){return Sr.find(e=>e.name===t)}var Lr=E`
  ${L}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,ct=Symbol(),kt=Symbol(),ie,se=new Map,C=class extends S{constructor(){super(...arguments),this.svg=null,this.label="",this.library="default"}static async resolveIcon(t){var e;let o;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?ct:kt}catch{return kt}try{const r=document.createElement("div");r.innerHTML=await o.text();const i=r.firstElementChild;if(((e=i?.tagName)==null?void 0:e.toLowerCase())!=="svg")return ct;ie||(ie=new DOMParser);const n=ie.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):ct}catch{return ct}}connectedCallback(){super.connectedCallback(),Pr(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ur(this)}getUrl(){const t=eo(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=eo(this.library),o=this.getUrl();if(!o){this.svg=null;return}let r=se.get(o);r||(r=C.resolveIcon(o),se.set(o,r));const i=await r;if(i===kt&&se.delete(o),o===this.getUrl())switch(i){case kt:case ct:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(t=e?.mutator)==null||t.call(e,this.svg),this.emit("sl-load")}}render(){return this.svg}};C.styles=Lr;a([it()],C.prototype,"svg",2);a([d({reflect:!0})],C.prototype,"name",2);a([d()],C.prototype,"src",2);a([d()],C.prototype,"label",2);a([d({reflect:!0})],C.prototype,"library",2);a([D("label")],C.prototype,"handleLabelChange",1);a([D(["name","src","library"])],C.prototype,"setIcon",1);C=a([O("sl-icon")],C);function oo(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function zr(t){var e,o;const r=[];function i(u){u instanceof HTMLElement&&(r.push(u),u.shadowRoot!==null&&u.shadowRoot.mode==="open"&&i(u.shadowRoot)),[...u.children].forEach(l=>i(l))}i(t);const s=(e=r.find(u=>oo(u)))!=null?e:null,n=(o=r.reverse().find(u=>oo(u)))!=null?o:null;return{start:s,end:n}}var ut=[],Or=class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){ut.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ut=ut.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ut[ut.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=zr(this.element),o=this.tabDirection==="forward"?t:e;typeof o?.focus=="function"&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}},ve=new Set;function Tr(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ro(t){if(ve.add(t),!document.body.classList.contains("sl-scroll-lock")){const e=Tr();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function io(t){ve.delete(t),ve.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}var Rr=E`
  ${L}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Uo=new Map,Nr=new WeakMap;function Ir(t){return t??{keyframes:[],options:{duration:0}}}function so(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function wt(t,e){Uo.set(t,Ir(e))}function ht(t,e,o){const r=Nr.get(t);if(r?.[e])return so(r[e],o.dir);const i=Uo.get(e);return i?so(i,o.dir):{keyframes:[],options:{duration:0}}}function no(t,e){return new Promise(o=>{function r(i){i.target===t&&(t.removeEventListener(e,r),o())}t.addEventListener(e,r)})}function pt(t,e,o){return new Promise(r=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=t.animate(e,rt(z({},o),{duration:Dr()?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function Dr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ct(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{const r=requestAnimationFrame(o);e.addEventListener("cancel",()=>r,{once:!0}),e.addEventListener("finish",()=>r,{once:!0}),e.cancel()})))}var P=class extends S{constructor(){super(...arguments),this.hasSlotController=new Vt(this,"footer"),this.localize=new Ft(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Or(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ro(this))}disconnectedCallback(){super.disconnectedCallback(),io(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=ht(this,"dialog.denyClose",{dir:this.localize.dir()});pt(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(t){this.open&&t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ro(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ct(this.dialog),Ct(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=ht(this,"dialog.show",{dir:this.localize.dir()}),o=ht(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([pt(this.panel,e.keyframes,e.options),pt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ct(this.dialog),Ct(this.overlay)]);const t=ht(this,"dialog.hide",{dir:this.localize.dir()}),e=ht(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([pt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),pt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,io(this);const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,no(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,no(this,"sl-after-hide")}render(){return w`
      <div
        part="base"
        class=${I({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${g(this.noHeader?this.label:void 0)}
          aria-labelledby=${g(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":w`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};P.styles=Rr;a([st(".dialog")],P.prototype,"dialog",2);a([st(".dialog__panel")],P.prototype,"panel",2);a([st(".dialog__overlay")],P.prototype,"overlay",2);a([d({type:Boolean,reflect:!0})],P.prototype,"open",2);a([d({reflect:!0})],P.prototype,"label",2);a([d({attribute:"no-header",type:Boolean,reflect:!0})],P.prototype,"noHeader",2);a([D("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);P=a([O("sl-dialog")],P);wt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});wt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});wt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});wt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});wt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Br=E`
  ${L}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,x=class extends S{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Rt`a`:Rt`button`;return Pt`
      <${e}
        part="base"
        class=${I({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${g(t?void 0:this.disabled)}
        type=${g(t?void 0:"button")}
        href=${g(t?this.href:void 0)}
        target=${g(t?this.target:void 0)}
        download=${g(t?this.download:void 0)}
        rel=${g(t&&this.target?"noreferrer noopener":void 0)}
        role=${g(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${g(this.name)}
          library=${g(this.library)}
          src=${g(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};x.styles=Br;a([st(".icon-button")],x.prototype,"button",2);a([it()],x.prototype,"hasFocus",2);a([d()],x.prototype,"name",2);a([d()],x.prototype,"library",2);a([d()],x.prototype,"src",2);a([d()],x.prototype,"href",2);a([d()],x.prototype,"target",2);a([d()],x.prototype,"download",2);a([d()],x.prototype,"label",2);a([d({type:Boolean,reflect:!0})],x.prototype,"disabled",2);x=a([O("sl-icon-button")],x);var Mr=E`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Hr=E`
  ${L}
  ${Mr}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Vr=t=>t.strings===void 0,Fr={},jr=(t,e=Fr)=>t._$AH=e,qr=wo(class extends xo{constructor(t){if(super(t),t.type!==H.PROPERTY&&t.type!==H.ATTRIBUTE&&t.type!==H.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Vr(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===k||e===_)return e;const o=t.element,r=t.name;if(t.type===H.PROPERTY){if(e===o[r])return k}else if(t.type===H.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(r))return k}else if(t.type===H.ATTRIBUTE&&o.getAttribute(r)===e+"")return k;return jr(t),e}});/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Kr=(t="value")=>(e,o)=>{const r=e.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,n,u){var l;const c=r.getPropertyOptions(t),p=typeof c.attribute=="string"?c.attribute:t;if(s===p){const h=c.converter||gt,y=(typeof h=="function"?h:(l=h?.fromAttribute)!=null?l:gt.fromAttribute)(u,c.type);this[t]!==y&&(this[o]=y)}i.call(this,s,n,u)}},v=class extends S{constructor(){super(...arguments),this.formControlController=new ko(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Vt(this,"help-text","label"),this.localize=new Ft(this),this.hasFocus=!1,this.title="",this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){const t=document.createElement("input");return t.type="date",t.value=this.value,t.valueAsDate}set valueAsDate(t){const e=document.createElement("input");e.type="date",e.valueAsDate=t,this.value=e.value}get valueAsNumber(){const t=document.createElement("input");return t.type="number",t.value=this.value,t.valueAsNumber}set valueAsNumber(t){const e=document.createElement("input");e.type="number",e.valueAsNumber=t,this.value=e.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,r=this.helpText?!0:!!e,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return w`
      <div
        part="form-control"
        class=${I({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${I({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${g(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${g(this.placeholder)}
              minlength=${g(this.minlength)}
              maxlength=${g(this.maxlength)}
              min=${g(this.min)}
              max=${g(this.max)}
              step=${g(this.step)}
              .value=${qr(this.value)}
              autocapitalize=${g(this.autocapitalize)}
              autocomplete=${g(this.autocomplete)}
              autocorrect=${g(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${g(this.pattern)}
              enterkeyhint=${g(this.enterkeyhint)}
              inputmode=${g(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?w`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?w`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?w`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:w`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};v.styles=Hr;a([st(".input__control")],v.prototype,"input",2);a([it()],v.prototype,"hasFocus",2);a([d()],v.prototype,"title",2);a([d({reflect:!0})],v.prototype,"type",2);a([d()],v.prototype,"name",2);a([d()],v.prototype,"value",2);a([Kr()],v.prototype,"defaultValue",2);a([d({reflect:!0})],v.prototype,"size",2);a([d({type:Boolean,reflect:!0})],v.prototype,"filled",2);a([d({type:Boolean,reflect:!0})],v.prototype,"pill",2);a([d()],v.prototype,"label",2);a([d({attribute:"help-text"})],v.prototype,"helpText",2);a([d({type:Boolean})],v.prototype,"clearable",2);a([d({type:Boolean,reflect:!0})],v.prototype,"disabled",2);a([d()],v.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],v.prototype,"readonly",2);a([d({attribute:"password-toggle",type:Boolean})],v.prototype,"passwordToggle",2);a([d({attribute:"password-visible",type:Boolean})],v.prototype,"passwordVisible",2);a([d({attribute:"no-spin-buttons",type:Boolean})],v.prototype,"noSpinButtons",2);a([d({reflect:!0})],v.prototype,"form",2);a([d({type:Boolean,reflect:!0})],v.prototype,"required",2);a([d()],v.prototype,"pattern",2);a([d({type:Number})],v.prototype,"minlength",2);a([d({type:Number})],v.prototype,"maxlength",2);a([d()],v.prototype,"min",2);a([d()],v.prototype,"max",2);a([d()],v.prototype,"step",2);a([d()],v.prototype,"autocapitalize",2);a([d()],v.prototype,"autocorrect",2);a([d()],v.prototype,"autocomplete",2);a([d({type:Boolean})],v.prototype,"autofocus",2);a([d()],v.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],v.prototype,"spellcheck",2);a([d()],v.prototype,"inputmode",2);a([D("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1);a([D("step",{waitUntilFirstUpdate:!0})],v.prototype,"handleStepChange",1);a([D("value",{waitUntilFirstUpdate:!0})],v.prototype,"handleValueChange",1);v=a([O("sl-input")],v);var Wr=E`
  ${L}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,U=class extends S{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const t=w`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let e=w``;return this.initials?e=w`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=w`
        <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
          <sl-icon name="person-fill" library="system"></sl-icon>
        </slot>
      `,w`
      <div
        part="base"
        class=${I({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};U.styles=Wr;a([it()],U.prototype,"hasError",2);a([d()],U.prototype,"image",2);a([d()],U.prototype,"label",2);a([d()],U.prototype,"initials",2);a([d()],U.prototype,"loading",2);a([d({reflect:!0})],U.prototype,"shape",2);a([D("image")],U.prototype,"handleImageChange",1);U=a([O("sl-avatar")],U);var Jr=E`
  ${L}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,ot=class extends S{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return w`
      <slot
        part="base"
        class=${I({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};ot.styles=Jr;a([d({reflect:!0})],ot.prototype,"variant",2);a([d({type:Boolean,reflect:!0})],ot.prototype,"pill",2);a([d({type:Boolean,reflect:!0})],ot.prototype,"pulse",2);ot=a([O("sl-badge")],ot);const Gr=It`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var Qr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,xe=(t,e,o,r)=>{for(var i=r>1?void 0:r?Xr(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(r?n(e,o,i):n(i))||i);return r&&i&&Qr(e,o,i),i};let _t=class extends F{constructor(){super(),this.dialog=null,this.infos=[],this.message="Welcome!",this.socketState="",this.UNIQUE_ID="id"+Math.random().toString(16).slice(2);var t=null;try{t=JSON.parse(localStorage.machines)}catch{t=[]}t.forEach(e=>this.infos.push({id:e.serverId,status:"offline",occupied:!1,sensorConnected:!1,loggedIn:!1,presentationMode:!1,personDistance:""})),setInterval(()=>{this.checkSocketState(),this.checkDeviceStates()},1e3),window.home=this}checkSocketState(){this.socketState=window.socketState}checkDeviceStates(){var t=window?.ws;window?.socketState==="online"&&t&&this.infos.forEach(e=>{try{var o=JSON.stringify({client_id:this.UNIQUE_ID,receiver_id:e.id,message:"Status"});t.send(o)}catch{e.status="offline"}})}updateClient(t){var e=this.infos.filter(o=>o.id===t?.client_id)[0];e&&(t?.message==="Status offline"?e.status="offline":t?.message==="Status"&&t?.loggedIn||t?.message==="Status"&&!t?.loggedIn?e.status="online":e.status="offline",e.loggedIn=t?.loggedIn||!1,e.occupied=t?.occupied||!1,e.sensorConnected=t?.sensorConnected||!1,e.presentationMode=t?.presentationMode||!1,e.personDistance=t?.personDistance||!1,console.log(e.status),this.requestUpdate())}async firstUpdated(){console.log("Initialized")}share(t){var e=this.getId(t.target);navigator.share&&navigator.share({title:"SelfLock.online",text:"Share a remote screenlock device!",url:"https://selflock.online/?id="+encodeURIComponent(e)})}getId(t){return t.closest(".infoCard").id}deleteMachine(t){const e=this.getId(t.target);var o=this.infos.findIndex(i=>i.id===e);o!==-1&&(this.infos.splice(o,1),this.requestUpdate());try{var r=JSON.parse(localStorage.machines)}catch{r=[]}o=r.findIndex(i=>i.serverId===e),o!==-1&&(r.splice(o,1),this.requestUpdate()),localStorage.machines=JSON.stringify(r)}addMachine(){const t=this.shadowRoot?.querySelector("sl-dialog"),e=this.shadowRoot?.querySelector("#textGuid");e?.setCustomValidity(""),e.value="",e?.reportValidity(),t?.show()}isValidGuid(t){return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(t)}addMachineClose(){const t=this.shadowRoot?.querySelector("#textGuid");if(t?.value&&this.isValidGuid(t.value)){var e=t?.value,o;try{var o=JSON.parse(localStorage.machines)}catch{o=[]}var r=o.some(i=>i.serverId===e);r?(t?.setCustomValidity("machine already added!"),t.reportValidity()):(o.push({serverId:e}),localStorage.machines=JSON.stringify(o),this.infos.push({id:e,status:"offline",occupied:!1,sensorConnected:!1,loggedIn:!1,presentationMode:!1,personDistance:""}),this.shadowRoot?.querySelector("sl-dialog")?.hide())}else t?.setCustomValidity("Must be a valid guid"),t.reportValidity();this.requestUpdate()}lockDevice(t){const e=this.getId(t.target);var o=JSON.stringify({client_id:this.UNIQUE_ID,receiver_id:e,message:"Lock screen"});window.ws.send(o)}render(){return b`
    <app-header></app-header>
    <main>
      <sl-dialog label="Dialog" class="dialog-focus">
        <sl-input id="textGuid" autofocus placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" clearable></sl-input>
        <sl-button slot="footer" variant="primary" @click="${this.addMachineClose}">Add</sl-button>
      </sl-dialog>
      <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
        ${this.socketState==="online"?b`<sl-badge variant="success">Connected to Service</sl-badge>`:b`<sl-badge variant="danger">Service or device is offline</sl-badge>`}   
            </div>
            <p>
              To add new devices, simply scan the QR code using your device camera <br>
              or click the Add button and enter your ID from the system tray program.<br>
            </p>
          </sl-card>
        ${this.renderInfoCards()} <!-- Hier rufen wir die Methode f�r die Infocards auf -->
        <sl-button variant="default" @click="${this.addMachine}">Add machine</sl-button>
      </div>
    </main>
  `}getSensorAvatar(t){return t.status&&t.status!=="offline"?t.sensorConnected?t.presentationMode?b`<sl-avatar>
                                <sl-icon slot="icon" title="Sensor in presentation mode (inactive)" status="sensorinactive" name="shield-shaded"></sl-icon>
                            </sl-avatar>`:b`<sl-avatar>
                                <sl-icon slot="icon" title="Sensor is active" status="sensoractive" name="shield-shaded"></sl-icon>
                            </sl-avatar>`:b`<sl-avatar>
                                <sl-icon slot="icon" title="No Sensor connected" status="nosensor" name="shield-shaded"></sl-icon>
                            </sl-avatar>`:b``}getOccupancyAvatar(t){return t.status&&t.sensorConnected&&t.occupied?b`<sl-avatar>
                                <sl-icon slot="icon" title="Person detected" status="user" name="person-exclamation"></sl-icon>
                            </sl-avatar>`:b``}getOnlineAvatar(t){return t.status&&t.status!=="offline"?b`<sl-avatar>
                <sl-icon slot="icon" title="Desktop app is online" status="online" name="globe"></sl-icon>
            </sl-avatar>`:b`<sl-avatar>
                       <sl-icon slot="icon" title="Desktop app is offline" status="offline" name="globe"></sl-icon>
                    </sl-avatar>`}getLogonAvatar(t){return t.status&&t.status!=="offline"?t.loggedIn?b`<sl-avatar>
                                <sl-icon slot="icon" title="Desktop screen is unlocked" status="unlock" name="unlock"></sl-icon>
                            </sl-avatar>`:b`<sl-avatar>
                                <sl-icon slot="icon" title="Desktop screen is locked" status="lock" name="lock"></sl-icon>
                            </sl-avatar>`:b``}getAvatars(t){return b`
        <div class="avatar-group">
            ${this.getOnlineAvatar(t)}
            ${this.getLogonAvatar(t)}
            ${this.getSensorAvatar(t)}
            ${this.getOccupancyAvatar(t)}
        </div>
        `}getDescription(t){return t.status&&t.status!=="offline"?b`
                Computer is online.
                ${t.loggedIn?b`<br>Screen is currently unlocked.`:b`<br>Screen is currently locked`}
                ${t.sensorConnected?b`<br>Sensor connected.`:b`<br>Sensor disconnected.`}
                ${t.presentationMode?b`<br>App is in presentation mode.`:b`<br>App autolock is active.`}
                ${t.occupied?b`<br>Person in range at ${t.personDistance} distance.`:b`<br>No person in range.`}
            `:b`Computer is offline.`}renderInfoCards(){return this.infos&&this.infos.length>0?this.infos.map(t=>b`
      <sl-card class="infoCard" id="${t.id}">
        <div slot="header">
          ${this.getAvatars(t)}
        </div>
        <p>${this.getDescription(t)}</p>
        <!-- Weitere Inhalte der Infocard hier einf�gen -->
        ${t.loggedIn?b`<sl-button slot="footer" variant="danger" @click="${this.lockDevice}">Lock Device</sl-button>`:null}
        <div slot="footer" style="width:100%;height:1px"></div>
        ${"share"in navigator?b`<sl-button slot="footer" variant="default" @click="${this.share}">Share</sl-button>`:null}
        <sl-button slot="footer" variant="default" @click="${this.deleteMachine}">Delete</sl-button>
      </sl-card>
    `):b`<p>Add a new device first</p>`}};_t.styles=[Gr,It`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-bottom: 0px;
    }

    #welcomeCard,
    .infoCard {
      padding: 5px;
      padding-top: 0px;
      width:95%;
      text-align:center;
    }

    sl-avatar::(base) {
        background-color: transparent;
    }

    sl-avatar {
        background-color:transparent !important;
    }

    sl-icon[status="user"] {
      color: var(--sl-color-primary-400);
    }

    sl-icon[status="online"] {
      color: var(--sl-color-success-400);
    }

    sl-icon[status="offline"] {
      color: var(--sl-color-danger-600);
    }

    sl-icon[status="unlock"] {
      color: var(--sl-color-success-400);
    }

    sl-icon[status="lock"] {
      color: var(--sl-color-danger-600);
    }

    sl-icon[status="nosensor"] {
      color: var(--sl-color-danger-600);
    }

    sl-icon[status="sensoractive"] {
      color: var(--sl-color-success-400);
    }

    sl-icon[status="sensorinactive"] {
      color: var(--sl-color-neutral-700);
    }

    sl-card::part(footer) {
      display: flex;
    }

    sl-button {
      margin: 2px;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }

    .avatar-group sl-avatar:not(:first-of-type) {
      margin-left: -1rem;
    }

    .avatar-group sl-avatar::part(base) {
      border: solid 2px var(--sl-color-neutral-50);
      background-color: var(--sl-color-gray-300);
    }

    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];xe([Bt()],_t.prototype,"message",2);xe([Bt()],_t.prototype,"socketState",2);_t=xe([ye("app-home")],_t);const Zr="modulepreload",Yr=function(t){return"/"+t},ao={},Lo=function(e,o,r){if(!o||o.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(o.map(s=>{if(s=Yr(s),s in ao)return;ao[s]=!0;const n=s.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const h=i[p];if(h.href===s&&(!n||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${u}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":Zr,n||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),n)return new Promise((p,h)=>{c.addEventListener("load",p),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Ae=Symbol.for("app-tools::log::1.x");globalThis[Ae]={setDebug:ti,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function ti(t){globalThis[Ae].debug=!!t}function ei(t,e){globalThis[Ae].debug&&(console.groupCollapsed(`[app-tools] ${t}`),e&&console.log(e),console.groupEnd())}function oi(t){return(e,o)=>{ei(`${t}: ${e}`,o)}}const T=oi("router");class ri extends Event{constructor(e){super("route-changed"),this.context=e}}class ii extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(e){super(),this.config=e,this.routes=e.routes.map(o=>({...o,urlPattern:new URLPattern({pathname:o.path,baseURL:window.location.href,search:"*",hash:"*"})})),T("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href))}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return T(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(e){for(const o of this.routes){const r=o.urlPattern.exec(e);if(r){const{title:i}=o,s=Object.fromEntries(new URLSearchParams(e.search)),n=r?.pathname?.groups??{};return this.context={url:e,title:typeof i=="function"?i({params:n,query:s,url:e}):i,params:n,query:s},o}}return T(`No route matched for ${e.pathname}${e.search}${e.hash}`,e),null}_notifyUrlChanged(){this.dispatchEvent(new ri(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey)return;const o=e.composedPath().find(s=>s.tagName==="A");if(!o||!o.href)return;const r=new URL(o.href);if(this.url.href===r.href||r.host!==window.location.host||o.hasAttribute("download")||o.href.includes("mailto:"))return;const i=o.getAttribute("target");i&&i!==""&&i!=="_self"||(e.preventDefault(),this.navigate(r))};_collectPlugins(e){return[...this.config?.plugins??[],...e?.plugins??[]]}async navigate(e,o={}){typeof e=="string"&&(e=new URL(e,this.baseUrl));let r=this._matchRoute(e)||this._matchRoute(this.fallback);T(`Navigating to ${e.pathname}${e.search}${e.hash}`,{context:this.context,route:this.route});let i=this._collectPlugins(r);for(const s of i)try{const n=await s?.shouldNavigate?.(this.context);n&&(await n.condition()||(e=new URL(n.redirect,this.baseUrl),r=this._matchRoute(e)||this._matchRoute(this.fallback),i=this._collectPlugins(r),T("Redirecting",{context:this.context,route:this.route})))}catch(n){throw T(`Plugin "${s.name}" error on shouldNavigate hook`,n),n}if(this.route=r,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${e}`);for(const s of i)try{await s?.beforeNavigation?.(this.context)}catch(n){throw T(`Plugin "${s.name}" error on beforeNavigation hook`,n),n}o.backNav||window.history.pushState(null,"",`${e.pathname}${e.search}${e.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const s of i)try{await s?.afterNavigation?.(this.context)}catch(n){throw T(`Plugin "${s.name}" error on afterNavigation hook`,n),n}}}function si(t){return{name:"lazy",beforeNavigation:()=>{t()}}}globalThis.URLPattern||await Lo(()=>import("./index-d961e0b8.js"),[]);const ni="/",lo=new ii({routes:[{path:Nt(),title:"SelfLock (Home)",render:()=>b`<app-home></app-home>`},{path:Nt("about"),title:"SelfLock (About)",plugins:[si(()=>Lo(()=>import("./app-about-0b0c935d.js"),[]))],render:()=>b`<app-about></app-about>`}]});function Nt(t){var e=ni;return t&&(e=e+t),e}const ai="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAE1UlEQVR4nO1ZXUhjRxQ+MYmbqqA+iNnSgmDFPyyrUqwFaRUVBGtF8EmhsOpG0a5/LyoWbNX6Uvw3aYpoXBEp2IqgIvjg76J1rRvXCK4o+KC0tlJ1tf7ERHvO7LV0Wcg6N/c2FPzg407CPefMN3Nn7plzVfA/h8rVHXAWtwJcjVsBroasAqqrqxV1dXUKbF7KFUNOAZ9i52uEGF8hf5IjiKQCvL29vQ4PDz/DZiEyNjk5GVQqFYyOjv6Iv58gO5CDyBdSxZRCgAfyQ2Q6dj4dr++mpKRAZWUlxMXFsRvGx8ehtbX1g5GREdPV1dU3+NcwcgA5jzxyJjiXgJCQEPXa2poWm+8h7yE/Ejr/TlBQEGRmZkJeXh4EBATA+vo6FBYWQk1NDSQlJTGurKxAf3//24ODgw/QzwO0+xX5M/Ix8qm7u/uG1Wr9DdvnsgjAoN/ihQJr/Pz8ICIiAhITEyEtLQ3Cw8PZPWNjY1BUVAQ42uw3CbgG3U+sra2FhYUFmpm709PT6RaLJX13dxew89TxH5CfyyIA4R8aGqrp7e2FyMhIcHNzA5vNBlNTU9DW1gbDw8Ows7Pzz80+Pj6gUChec6JUKiE2NpaRgI8ebG5uQk5Ozh2z2XyHp0O8Av709fWF6Oho0Ov19DjA8vIyHB059RjT4oeoqCjw8vKin6c8trwCTk9OTliDZmF+fp7T3DEE3wc8NrwCrKenLwdIq9Vymr4Zgm8bjw2vgCNcaKzh4eHBaeoYtJbOz9nmc8hjxz0DQhDJBVxcXFwLsPLY8Qp4IdcMkN//YgZsFAjfpuDp6clp6hjUeWFwZJ2BAwpC1Gg0nKaOQQKEGZB1F7LRs0oChD1bMlDnyTfigseOV8C+3W6Hg4MD8Pf35zR1DHobX16yY8M+jx2vAEq07FtbW8rg4GBOU8fY3t6mix25y2PHK4Ci/LG0tKSlrFOtVl9Pu9NYXV2ly+/InTfc+gq4UwmkBZM3bXFxMaXXLEWWAkJaYgGZcyHC9MzMTCI1UlNTJRFwfHwMc3Nz1JzitRUjYGRvb+/r2dlZSn+hoaFBhItXMTk5CeiTmqO8tmIELCGfNTc3vz8wMMByemH0RKOrq4suZuRTXluxZ+LvhoaG9HSKqq+vh4SEBJFuADY2NthBCPG9GHuxAh5h9vhlRUXF3e7uboiPj4eJiQlRjuh4iTsZnY0fibEXK+AvZL3JZGovLy+Hnp4eCAwM5N5SFxcX2cGIfAk+ueFMWcWAzM3Ozr6H51gwGAyQm5t7Y2N6o9O7BBNDs+BLFJwRcKlSqe7jmfhJSUmJEhc1Ox/T4f4mKCsrAxROb9774ETp0anCFq4D2jWKW1pa2sPCwqh4xQ74+Gg5tDMajexeRCmI2Hn+DSkqc1QuDNHpdEWUodKipspFU1MTnJ2dvVZW6evrg/z8fGq2I282XQ4gVW30C6Q6KytLt7+/D42NjazQVVVVxURco6OjgxW9ECbBxmlIWdylYT3BDpZSYkZ1o4yMDDYblOvTbkUC4OWoP5QqqNTl9TLkc9yRmjDVeKuzs5PtNgUFBbTA6ahIz7xeyoByfB8wIucwyWuNiYn5WPhvBnesUlz0v0gdTK4PHM+QnyB1SDekgeo+ckDub2RGmf3ffuRzOW4FuBq3AlyNvwEQIfUF/XvmFgAAAABJRU5ErkJggg==";var li=Object.defineProperty,di=Object.getOwnPropertyDescriptor,ke=(t,e,o,r)=>{for(var i=r>1?void 0:r?di(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(r?n(e,o,i):n(i))||i);return r&&i&&li(e,o,i),i};let $t=class extends F{constructor(){super(...arguments),this.title="SelfLock",this.enableBack=!1}render(){return b`
      <header>
        <div id="back-button-block">
          <img src="${ai}" alt="SelfLock Logo" />
          <h1 id="title">${this.title}</h1>
          ${this.enableBack?b`<sl-button href="${Nt()}">Back</sl-button>`:null}
          ${this.enableBack?null:b`<sl-button href="${Nt("about")}">About</sl-button>`}
        </div>
      </header>
    `}};$t.styles=It`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      background-color: #181818;
      color: white;
      height: 4em;
      padding-top: 12px;
      margin-right: 16px;
      padding-bottom: 12px;
      z-index: 200;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 50px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 20px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 97%;
    }

    #title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 97%;
      text-align: center;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
  `;ke([Bt({type:String})],$t.prototype,"title",2);ke([Bt({type:Boolean})],$t.prototype,"enableBack",2);$t=ke([ye("app-header")],$t);var ci=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,hi=(t,e,o,r)=>{for(var i=r>1?void 0:r?ui(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(r?n(e,o,i):n(i))||i);return r&&i&&ci(e,o,i),i};let fe=class extends F{firstUpdated(){lo.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return lo.render()}};fe.styles=It`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;fe=hi([ye("app-index")],fe);export{Gr as a,ye as e,It as i,F as s,b as x};
//# sourceMappingURL=index-46fa46a4.js.map
