import{c as Be,b as dt}from"./@intlify-709a1feb.js";import{r as Ot}from"./vue-db3dd943.js";var M={},Ie={},vt={get exports(){return Ie},set exports(e){Ie=e}},T={};/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(T,"__esModule",{value:!0});const Tt=typeof window<"u";let Lt,Nt;const It=/\{([0-9a-zA-Z]+)\}/g;function Rt(e,...s){return s.length===1&&Ce(s[0])&&(s=s[0]),(!s||!s.hasOwnProperty)&&(s={}),e.replace(It,(a,r)=>s.hasOwnProperty(r)?s[r]:"")}const pt=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",yt=e=>pt?Symbol(e):e,Pt=(e,s,a)=>qe({l:e,k:s,s:a}),qe=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Ft=e=>typeof e=="number"&&isFinite(e),kt=e=>Z(e)==="[object Date]",ht=e=>Z(e)==="[object RegExp]",St=e=>we(e)&&Object.keys(e).length===0;function At(e,s){typeof console<"u"&&(console.warn("[intlify] "+e),s&&console.warn(s.stack))}const Mt=Object.assign;let He;const Ct=()=>He||(He=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof Be<"u"?Be:{});function Dt(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const wt=Object.prototype.hasOwnProperty;function Wt(e,s){return wt.call(e,s)}const Qe=Array.isArray,Re=e=>typeof e=="function",jt=e=>typeof e=="string",Ut=e=>typeof e=="boolean",Vt=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",Bt=e=>Ce(e)&&Re(e.then)&&Re(e.catch),De=Object.prototype.toString,Z=e=>De.call(e),we=e=>Z(e)==="[object Object]",Ht=e=>e==null?"":Qe(e)||we(e)&&e.toString===De?JSON.stringify(e,null,2):String(e),$e=2;function $t(e,s=0,a=e.length){const r=e.split(/\r?\n/);let n=0;const t=[];for(let c=0;c<r.length;c++)if(n+=r[c].length+1,n>=s){for(let o=c-$e;o<=c+$e||a>n;o++){if(o<0||o>=r.length)continue;const f=o+1;t.push(`${f}${" ".repeat(3-String(f).length)}|  ${r[o]}`);const _=r[o].length;if(o===c){const d=s-(n-_)+1,L=Math.max(1,a>n?_-d:a-s);t.push("   |  "+" ".repeat(d)+"^".repeat(L))}else if(o>c){if(a>n){const d=Math.max(Math.min(a-n,_),1);t.push("   |  "+"^".repeat(d))}n+=_+1}}break}return t.join(`
`)}function xt(){const e=new Map;return{events:e,on(a,r){const n=e.get(a);n&&n.push(r)||e.set(a,[r])},off(a,r){const n=e.get(a);n&&n.splice(n.indexOf(r)>>>0,1)},emit(a,r){(e.get(a)||[]).slice().map(n=>n(r)),(e.get("*")||[]).slice().map(n=>n(a,r))}}}T.assign=Mt;T.createEmitter=xt;T.escapeHtml=Dt;T.format=Rt;T.friendlyJSONstringify=qe;T.generateCodeFrame=$t;T.generateFormatCacheKey=Pt;T.getGlobalThis=Ct;T.hasOwn=Wt;T.inBrowser=Tt;T.isArray=Qe;T.isBoolean=Ut;T.isDate=kt;T.isEmptyObject=St;T.isFunction=Re;T.isNumber=Ft;T.isObject=Ce;T.isPlainObject=we;T.isPromise=Bt;T.isRegExp=ht;T.isString=jt;T.isSymbol=Vt;T.makeSymbol=yt;T.mark=Lt;T.measure=Nt;T.objectToString=De;T.toDisplayString=Ht;T.toTypeString=Z;T.warn=At;(function(e){e.exports=T})(vt);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(M,"__esModule",{value:!0});var l=Ie,b=dt,E=Ot;const Ze="9.2.2";let et=b.CoreWarnCodes.__EXTEND_POINT__;const x=()=>++et,y={FALLBACK_TO_ROOT:et,NOT_SUPPORTED_PRESERVE:x(),NOT_SUPPORTED_FORMATTER:x(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:x(),NOT_SUPPORTED_GET_CHOICE_INDEX:x(),COMPONENT_NAME_LEGACY_COMPATIBLE:x(),NOT_FOUND_PARENT_SCOPE:x()},Gt={[y.FALLBACK_TO_ROOT]:"Fall back to {type} '{key}' with root locale.",[y.NOT_SUPPORTED_PRESERVE]:"Not supported 'preserve'.",[y.NOT_SUPPORTED_FORMATTER]:"Not supported 'formatter'.",[y.NOT_SUPPORTED_PRESERVE_DIRECTIVE]:"Not supported 'preserveDirectiveContent'.",[y.NOT_SUPPORTED_GET_CHOICE_INDEX]:"Not supported 'getChoiceIndex'.",[y.COMPONENT_NAME_LEGACY_COMPATIBLE]:"Component name legacy compatible: '{name}' -> 'i18n'",[y.NOT_FOUND_PARENT_SCOPE]:"Not found parent scope. use the global scope."};function A(e,...s){return l.format(Gt[e],...s)}let tt=b.CompileErrorCodes.__EXTEND_POINT__;const S=()=>++tt,O={UNEXPECTED_RETURN_TYPE:tt,INVALID_ARGUMENT:S(),MUST_BE_CALL_SETUP_TOP:S(),NOT_INSLALLED:S(),NOT_AVAILABLE_IN_LEGACY_MODE:S(),REQUIRED_VALUE:S(),INVALID_VALUE:S(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:S(),NOT_INSLALLED_WITH_PROVIDE:S(),UNEXPECTED_ERROR:S(),NOT_COMPATIBLE_LEGACY_VUE_I18N:S(),BRIDGE_SUPPORT_VUE_2_ONLY:S(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:S(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:S(),__EXTEND_POINT__:S()};function p(e,...s){return b.createCompileError(e,null,{messages:Yt,args:s})}const Yt={[O.UNEXPECTED_RETURN_TYPE]:"Unexpected return type in composer",[O.INVALID_ARGUMENT]:"Invalid argument",[O.MUST_BE_CALL_SETUP_TOP]:"Must be called at the top of a `setup` function",[O.NOT_INSLALLED]:"Need to install with `app.use` function",[O.UNEXPECTED_ERROR]:"Unexpected error",[O.NOT_AVAILABLE_IN_LEGACY_MODE]:"Not available in legacy mode",[O.REQUIRED_VALUE]:"Required in value: {0}",[O.INVALID_VALUE]:"Invalid value",[O.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]:"Cannot setup vue-devtools plugin",[O.NOT_INSLALLED_WITH_PROVIDE]:"Need to install with `provide` function",[O.NOT_COMPATIBLE_LEGACY_VUE_I18N]:"Not compatible legacy VueI18n.",[O.BRIDGE_SUPPORT_VUE_2_ONLY]:"vue-i18n-bridge support Vue 2.x only",[O.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]:"Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",[O.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]:"Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"},pe=l.makeSymbol("__transrateVNode"),ye=l.makeSymbol("__datetimeParts"),Pe=l.makeSymbol("__numberParts"),Fe=l.makeSymbol("__enableEmitter"),ke=l.makeSymbol("__disableEmitter"),at=l.makeSymbol("__setPluralRules");l.makeSymbol("__intlifyMeta");const nt=l.makeSymbol("__injectWithOption"),Xt="__VUE_I18N_BRIDGE__";function he(e){if(!l.isObject(e))return e;for(const s in e)if(l.hasOwn(e,s))if(!s.includes("."))l.isObject(e[s])&&he(e[s]);else{const a=s.split("."),r=a.length-1;let n=e;for(let t=0;t<r;t++)a[t]in n||(n[a[t]]={}),n=n[a[t]];n[a[r]]=e[s],delete e[s],l.isObject(n[a[r]])&&he(n[a[r]])}return e}function ee(e,s){const{messages:a,__i18n:r,messageResolver:n,flatJson:t}=s,c=l.isPlainObject(a)?a:l.isArray(r)?{}:{[e]:{}};if(l.isArray(r)&&r.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:f,resource:_}=o;f?(c[f]=c[f]||{},X(_,c[f])):X(_,c)}else l.isString(o)&&X(JSON.parse(o),c)}),n==null&&t)for(const o in c)l.hasOwn(c,o)&&he(c[o]);return c}const q=e=>!l.isObject(e)||l.isArray(e);function X(e,s){if(q(e)||q(s))throw p(O.INVALID_VALUE);for(const a in e)l.hasOwn(e,a)&&(q(e[a])||q(s[a])?s[a]=e[a]:X(e[a],s[a]))}function lt(e){return e.type}function rt(e,s,a){let r=l.isObject(s.messages)?s.messages:{};"__i18nGlobal"in a&&(r=ee(e.locale.value,{messages:r,__i18n:a.__i18nGlobal}));const n=Object.keys(r);n.length&&n.forEach(t=>{e.mergeLocaleMessage(t,r[t])});{if(l.isObject(s.datetimeFormats)){const t=Object.keys(s.datetimeFormats);t.length&&t.forEach(c=>{e.mergeDateTimeFormat(c,s.datetimeFormats[c])})}if(l.isObject(s.numberFormats)){const t=Object.keys(s.numberFormats);t.length&&t.forEach(c=>{e.mergeNumberFormat(c,s.numberFormats[c])})}}}function xe(e){return E.createVNode(E.Text,null,e,0)}const Ge="__INTLIFY_META__";let Ye=0;function Xe(e){return(s,a,r,n)=>e(a,r,E.getCurrentInstance()||void 0,n)}const Kt=()=>{const e=E.getCurrentInstance();let s=null;return e&&(s=lt(e)[Ge])?{[Ge]:s}:null};function We(e={},s){const{__root:a}=e,r=a===void 0;let n=l.isBoolean(e.inheritLocale)?e.inheritLocale:!0;const t=E.ref(a&&n?a.locale.value:l.isString(e.locale)?e.locale:b.DEFAULT_LOCALE),c=E.ref(a&&n?a.fallbackLocale.value:l.isString(e.fallbackLocale)||l.isArray(e.fallbackLocale)||l.isPlainObject(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t.value),o=E.ref(ee(t.value,e)),f=E.ref(l.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[t.value]:{}}),_=E.ref(l.isPlainObject(e.numberFormats)?e.numberFormats:{[t.value]:{}});let d=a?a.missingWarn:l.isBoolean(e.missingWarn)||l.isRegExp(e.missingWarn)?e.missingWarn:!0,L=a?a.fallbackWarn:l.isBoolean(e.fallbackWarn)||l.isRegExp(e.fallbackWarn)?e.fallbackWarn:!0,v=a?a.fallbackRoot:l.isBoolean(e.fallbackRoot)?e.fallbackRoot:!0,N=!!e.fallbackFormat,k=l.isFunction(e.missing)?e.missing:null,P=l.isFunction(e.missing)?Xe(e.missing):null,C=l.isFunction(e.postTranslation)?e.postTranslation:null,U=a?a.warnHtmlMessage:l.isBoolean(e.warnHtmlMessage)?e.warnHtmlMessage:!0,D=!!e.escapeParameter;const V=a?a.modifiers:l.isPlainObject(e.modifiers)?e.modifiers:{};let w=e.pluralRules||a&&a.pluralRules,g;g=(()=>{r&&b.setFallbackContext(null);const i={version:Ze,locale:t.value,fallbackLocale:c.value,messages:o.value,modifiers:V,pluralRules:w,missing:P===null?void 0:P,missingWarn:d,fallbackWarn:L,fallbackFormat:N,unresolving:!0,postTranslation:C===null?void 0:C,warnHtmlMessage:U,escapeParameter:D,messageResolver:e.messageResolver,__meta:{framework:"vue"}};i.datetimeFormats=f.value,i.numberFormats=_.value,i.__datetimeFormatters=l.isPlainObject(g)?g.__datetimeFormatters:void 0,i.__numberFormatters=l.isPlainObject(g)?g.__numberFormatters:void 0,i.__v_emitter=l.isPlainObject(g)?g.__v_emitter:void 0;const u=b.createCoreContext(i);return r&&b.setFallbackContext(u),u})(),b.updateFallbackLocale(g,t.value,c.value);function B(){return[t.value,c.value,o.value,f.value,_.value]}const H=E.computed({get:()=>t.value,set:i=>{t.value=i,g.locale=t.value}}),G=E.computed({get:()=>c.value,set:i=>{c.value=i,g.fallbackLocale=c.value,b.updateFallbackLocale(g,t.value,i)}}),ne=E.computed(()=>o.value),le=E.computed(()=>f.value),re=E.computed(()=>_.value);function se(){return l.isFunction(C)?C:null}function ie(i){C=i,g.postTranslation=i}function ce(){return k}function W(i){i!==null&&(P=Xe(i)),k=i,g.missing=P}function oe(i,u){return i!=="translate"||!u.resolvedMessage}const j=(i,u,h,F,Ne,z)=>{B();let Y;try{b.setAdditionalMeta(Kt()),r||(g.fallbackContext=a?b.getFallbackContext():void 0),Y=i(g)}finally{b.setAdditionalMeta(null),r||(g.fallbackContext=void 0)}if(l.isNumber(Y)&&Y===b.NOT_REOSLVED){const[$,Et]=u();if(a&&l.isString($)&&oe(h,Et)){v&&(b.isTranslateFallbackWarn(L,$)||b.isTranslateMissingWarn(d,$))&&l.warn(A(y.FALLBACK_TO_ROOT,{key:$,type:h}));{const{__v_emitter:Ve}=g;Ve&&v&&Ve.emit("fallback",{type:h,key:$,to:"global",groupId:`${h}:${$}`})}}return a&&v?F(a):Ne($)}else{if(z(Y))return Y;throw p(O.UNEXPECTED_RETURN_TYPE)}};function K(...i){return j(u=>Reflect.apply(b.translate,null,[u,...i]),()=>b.parseTranslateArgs(...i),"translate",u=>Reflect.apply(u.t,u,[...i]),u=>u,u=>l.isString(u))}function ue(...i){const[u,h,F]=i;if(F&&!l.isObject(F))throw p(O.INVALID_ARGUMENT);return K(u,h,l.assign({resolvedMessage:!0},F||{}))}function me(...i){return j(u=>Reflect.apply(b.datetime,null,[u,...i]),()=>b.parseDateTimeArgs(...i),"datetime format",u=>Reflect.apply(u.d,u,[...i]),()=>b.MISSING_RESOLVE_VALUE,u=>l.isString(u))}function fe(...i){return j(u=>Reflect.apply(b.number,null,[u,...i]),()=>b.parseNumberArgs(...i),"number format",u=>Reflect.apply(u.n,u,[...i]),()=>b.MISSING_RESOLVE_VALUE,u=>l.isString(u))}function _e(i){return i.map(u=>l.isString(u)||l.isNumber(u)||l.isBoolean(u)?xe(String(u)):u)}const ge={normalize:_e,interpolate:i=>i,type:"vnode"};function be(...i){return j(u=>{let h;const F=u;try{F.processor=ge,h=Reflect.apply(b.translate,null,[F,...i])}finally{F.processor=null}return h},()=>b.parseTranslateArgs(...i),"translate",u=>u[pe](...i),u=>[xe(u)],u=>l.isArray(u))}function Ee(...i){return j(u=>Reflect.apply(b.number,null,[u,...i]),()=>b.parseNumberArgs(...i),"number format",u=>u[Pe](...i),()=>[],u=>l.isString(u)||l.isArray(u))}function de(...i){return j(u=>Reflect.apply(b.datetime,null,[u,...i]),()=>b.parseDateTimeArgs(...i),"datetime format",u=>u[ye](...i),()=>[],u=>l.isString(u)||l.isArray(u))}function Oe(i){w=i,g.pluralRules=w}function ve(i,u){const h=l.isString(u)?u:t.value,F=J(h);return g.messageResolver(F,i)!==null}function Te(i){let u=null;const h=b.fallbackWithLocaleChain(g,c.value,t.value);for(let F=0;F<h.length;F++){const Ne=o.value[h[F]]||{},z=g.messageResolver(Ne,i);if(z!=null){u=z;break}}return u}function Le(i){const u=Te(i);return u??(a?a.tm(i)||{}:{})}function J(i){return o.value[i]||{}}function m(i,u){o.value[i]=u,g.messages=o.value}function I(i,u){o.value[i]=o.value[i]||{},X(u,o.value[i]),g.messages=o.value}function ut(i){return f.value[i]||{}}function mt(i,u){f.value[i]=u,g.datetimeFormats=f.value,b.clearDateTimeFormat(g,i,u)}function ft(i,u){f.value[i]=l.assign(f.value[i]||{},u),g.datetimeFormats=f.value,b.clearDateTimeFormat(g,i,u)}function _t(i){return _.value[i]||{}}function gt(i,u){_.value[i]=u,g.numberFormats=_.value,b.clearNumberFormat(g,i,u)}function bt(i,u){_.value[i]=l.assign(_.value[i]||{},u),g.numberFormats=_.value,b.clearNumberFormat(g,i,u)}Ye++,a&&l.inBrowser&&(E.watch(a.locale,i=>{n&&(t.value=i,g.locale=i,b.updateFallbackLocale(g,t.value,c.value))}),E.watch(a.fallbackLocale,i=>{n&&(c.value=i,g.fallbackLocale=i,b.updateFallbackLocale(g,t.value,c.value))}));const R={id:Ye,locale:H,fallbackLocale:G,get inheritLocale(){return n},set inheritLocale(i){n=i,i&&a&&(t.value=a.locale.value,c.value=a.fallbackLocale.value,b.updateFallbackLocale(g,t.value,c.value))},get availableLocales(){return Object.keys(o.value).sort()},messages:ne,get modifiers(){return V},get pluralRules(){return w||{}},get isGlobal(){return r},get missingWarn(){return d},set missingWarn(i){d=i,g.missingWarn=d},get fallbackWarn(){return L},set fallbackWarn(i){L=i,g.fallbackWarn=L},get fallbackRoot(){return v},set fallbackRoot(i){v=i},get fallbackFormat(){return N},set fallbackFormat(i){N=i,g.fallbackFormat=N},get warnHtmlMessage(){return U},set warnHtmlMessage(i){U=i,g.warnHtmlMessage=i},get escapeParameter(){return D},set escapeParameter(i){D=i,g.escapeParameter=i},t:K,getLocaleMessage:J,setLocaleMessage:m,mergeLocaleMessage:I,getPostTranslationHandler:se,setPostTranslationHandler:ie,getMissingHandler:ce,setMissingHandler:W,[at]:Oe};return R.datetimeFormats=le,R.numberFormats=re,R.rt=ue,R.te=ve,R.tm=Le,R.d=me,R.n=fe,R.getDateTimeFormat=ut,R.setDateTimeFormat=mt,R.mergeDateTimeFormat=ft,R.getNumberFormat=_t,R.setNumberFormat=gt,R.mergeNumberFormat=bt,R[nt]=e.__injectWithOption,R[pe]=be,R[ye]=de,R[Pe]=Ee,R[Fe]=i=>{g.__v_emitter=i},R[ke]=()=>{g.__v_emitter=void 0},R}function Jt(e){const s=l.isString(e.locale)?e.locale:b.DEFAULT_LOCALE,a=l.isString(e.fallbackLocale)||l.isArray(e.fallbackLocale)||l.isPlainObject(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s,r=l.isFunction(e.missing)?e.missing:void 0,n=l.isBoolean(e.silentTranslationWarn)||l.isRegExp(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,t=l.isBoolean(e.silentFallbackWarn)||l.isRegExp(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,c=l.isBoolean(e.fallbackRoot)?e.fallbackRoot:!0,o=!!e.formatFallbackMessages,f=l.isPlainObject(e.modifiers)?e.modifiers:{},_=e.pluralizationRules,d=l.isFunction(e.postTranslation)?e.postTranslation:void 0,L=l.isString(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,v=!!e.escapeParameterHtml,N=l.isBoolean(e.sync)?e.sync:!0;e.formatter&&l.warn(A(y.NOT_SUPPORTED_FORMATTER)),e.preserveDirectiveContent&&l.warn(A(y.NOT_SUPPORTED_PRESERVE_DIRECTIVE));let k=e.messages;if(l.isPlainObject(e.sharedMessages)){const g=e.sharedMessages;k=Object.keys(g).reduce((B,H)=>{const G=B[H]||(B[H]={});return l.assign(G,g[H]),B},k||{})}const{__i18n:P,__root:C,__injectWithOption:U}=e,D=e.datetimeFormats,V=e.numberFormats,w=e.flatJson;return{locale:s,fallbackLocale:a,messages:k,flatJson:w,datetimeFormats:D,numberFormats:V,missing:r,missingWarn:n,fallbackWarn:t,fallbackRoot:c,fallbackFormat:o,modifiers:f,pluralRules:_,postTranslation:d,warnHtmlMessage:L,escapeParameter:v,messageResolver:e.messageResolver,inheritLocale:N,__i18n:P,__root:C,__injectWithOption:U}}function Se(e={},s){{const a=We(Jt(e)),r={id:a.id,get locale(){return a.locale.value},set locale(n){a.locale.value=n},get fallbackLocale(){return a.fallbackLocale.value},set fallbackLocale(n){a.fallbackLocale.value=n},get messages(){return a.messages.value},get datetimeFormats(){return a.datetimeFormats.value},get numberFormats(){return a.numberFormats.value},get availableLocales(){return a.availableLocales},get formatter(){return l.warn(A(y.NOT_SUPPORTED_FORMATTER)),{interpolate(){return[]}}},set formatter(n){l.warn(A(y.NOT_SUPPORTED_FORMATTER))},get missing(){return a.getMissingHandler()},set missing(n){a.setMissingHandler(n)},get silentTranslationWarn(){return l.isBoolean(a.missingWarn)?!a.missingWarn:a.missingWarn},set silentTranslationWarn(n){a.missingWarn=l.isBoolean(n)?!n:n},get silentFallbackWarn(){return l.isBoolean(a.fallbackWarn)?!a.fallbackWarn:a.fallbackWarn},set silentFallbackWarn(n){a.fallbackWarn=l.isBoolean(n)?!n:n},get modifiers(){return a.modifiers},get formatFallbackMessages(){return a.fallbackFormat},set formatFallbackMessages(n){a.fallbackFormat=n},get postTranslation(){return a.getPostTranslationHandler()},set postTranslation(n){a.setPostTranslationHandler(n)},get sync(){return a.inheritLocale},set sync(n){a.inheritLocale=n},get warnHtmlInMessage(){return a.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(n){a.warnHtmlMessage=n!=="off"},get escapeParameterHtml(){return a.escapeParameter},set escapeParameterHtml(n){a.escapeParameter=n},get preserveDirectiveContent(){return l.warn(A(y.NOT_SUPPORTED_PRESERVE_DIRECTIVE)),!0},set preserveDirectiveContent(n){l.warn(A(y.NOT_SUPPORTED_PRESERVE_DIRECTIVE))},get pluralizationRules(){return a.pluralRules||{}},__composer:a,t(...n){const[t,c,o]=n,f={};let _=null,d=null;if(!l.isString(t))throw p(O.INVALID_ARGUMENT);const L=t;return l.isString(c)?f.locale=c:l.isArray(c)?_=c:l.isPlainObject(c)&&(d=c),l.isArray(o)?_=o:l.isPlainObject(o)&&(d=o),Reflect.apply(a.t,a,[L,_||d||{},f])},rt(...n){return Reflect.apply(a.rt,a,[...n])},tc(...n){const[t,c,o]=n,f={plural:1};let _=null,d=null;if(!l.isString(t))throw p(O.INVALID_ARGUMENT);const L=t;return l.isString(c)?f.locale=c:l.isNumber(c)?f.plural=c:l.isArray(c)?_=c:l.isPlainObject(c)&&(d=c),l.isString(o)?f.locale=o:l.isArray(o)?_=o:l.isPlainObject(o)&&(d=o),Reflect.apply(a.t,a,[L,_||d||{},f])},te(n,t){return a.te(n,t)},tm(n){return a.tm(n)},getLocaleMessage(n){return a.getLocaleMessage(n)},setLocaleMessage(n,t){a.setLocaleMessage(n,t)},mergeLocaleMessage(n,t){a.mergeLocaleMessage(n,t)},d(...n){return Reflect.apply(a.d,a,[...n])},getDateTimeFormat(n){return a.getDateTimeFormat(n)},setDateTimeFormat(n,t){a.setDateTimeFormat(n,t)},mergeDateTimeFormat(n,t){a.mergeDateTimeFormat(n,t)},n(...n){return Reflect.apply(a.n,a,[...n])},getNumberFormat(n){return a.getNumberFormat(n)},setNumberFormat(n,t){a.setNumberFormat(n,t)},mergeNumberFormat(n,t){a.mergeNumberFormat(n,t)},getChoiceIndex(n,t){return l.warn(A(y.NOT_SUPPORTED_GET_CHOICE_INDEX)),-1},__onComponentInstanceCreated(n){const{componentInstanceCreatedListener:t}=e;t&&t(n,r)}};return r.__enableEmitter=n=>{const t=a;t[Fe]&&t[Fe](n)},r.__disableEmitter=()=>{const n=a;n[ke]&&n[ke]()},r}}const je={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function zt({slots:e},s){return s.length===1&&s[0]==="default"?(e.default?e.default():[]).reduce((r,n)=>r=[...r,...l.isArray(n.children)?n.children:[n]],[]):s.reduce((a,r)=>{const n=e[r];return n&&(a[r]=n()),a},{})}function st(e){return E.Fragment}const Q={name:"i18n-t",props:l.assign({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>l.isNumber(e)||!isNaN(e)}},je),setup(e,s){const{slots:a,attrs:r}=s,n=e.i18n||te({useScope:e.scope,__useComponent:!0});return()=>{const t=Object.keys(a).filter(L=>L!=="_"),c={};e.locale&&(c.locale=e.locale),e.plural!==void 0&&(c.plural=l.isString(e.plural)?+e.plural:e.plural);const o=zt(s,t),f=n[pe](e.keypath,o,c),_=l.assign({},r),d=l.isString(e.tag)||l.isObject(e.tag)?e.tag:st();return E.h(d,_,f)}}};function qt(e){return l.isArray(e)&&!l.isString(e[0])}function it(e,s,a,r){const{slots:n,attrs:t}=s;return()=>{const c={part:!0};let o={};e.locale&&(c.locale=e.locale),l.isString(e.format)?c.key=e.format:l.isObject(e.format)&&(l.isString(e.format.key)&&(c.key=e.format.key),o=Object.keys(e.format).reduce((v,N)=>a.includes(N)?l.assign({},v,{[N]:e.format[N]}):v,{}));const f=r(e.value,c,o);let _=[c.key];l.isArray(f)?_=f.map((v,N)=>{const k=n[v.type],P=k?k({[v.type]:v.value,index:N,parts:f}):[v.value];return qt(P)&&(P[0].key=`${v.type}-${N}`),P}):l.isString(f)&&(_=[f]);const d=l.assign({},t),L=l.isString(e.tag)||l.isObject(e.tag)?e.tag:st();return E.h(L,d,_)}}const Ae={name:"i18n-n",props:l.assign({value:{type:Number,required:!0},format:{type:[String,Object]}},je),setup(e,s){const a=e.i18n||te({useScope:"parent",__useComponent:!0});return it(e,s,b.NUMBER_FORMAT_OPTIONS_KEYS,(...r)=>a[Pe](...r))}},Me={name:"i18n-d",props:l.assign({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},je),setup(e,s){const a=e.i18n||te({useScope:"parent",__useComponent:!0});return it(e,s,b.DATETIME_FORMAT_OPTIONS_KEYS,(...r)=>a[ye](...r))}};function Qt(e,s){const a=e;if(e.mode==="composition")return a.__getInstance(s)||e.global;{const r=a.__getInstance(s);return r!=null?r.__composer:e.global.__composer}}function ct(e){const s=c=>{const{instance:o,modifiers:f,value:_}=c;if(!o||!o.$)throw p(O.UNEXPECTED_ERROR);const d=Qt(e,o.$);f.preserve&&l.warn(A(y.NOT_SUPPORTED_PRESERVE));const L=Ke(_);return[Reflect.apply(d.t,d,[...Je(L)]),d]};return{created:(c,o)=>{const[f,_]=s(o);l.inBrowser&&e.global===_&&(c.__i18nWatcher=E.watch(_.locale,()=>{o.instance&&o.instance.$forceUpdate()})),c.__composer=_,c.textContent=f},unmounted:c=>{l.inBrowser&&c.__i18nWatcher&&(c.__i18nWatcher(),c.__i18nWatcher=void 0,delete c.__i18nWatcher),c.__composer&&(c.__composer=void 0,delete c.__composer)},beforeUpdate:(c,{value:o})=>{if(c.__composer){const f=c.__composer,_=Ke(o);c.textContent=Reflect.apply(f.t,f,[...Je(_)])}},getSSRProps:c=>{const[o]=s(c);return{textContent:o}}}}function Ke(e){if(l.isString(e))return{path:e};if(l.isPlainObject(e)){if(!("path"in e))throw p(O.REQUIRED_VALUE,"path");return e}else throw p(O.INVALID_VALUE)}function Je(e){const{path:s,locale:a,args:r,choice:n,plural:t}=e,c={},o=r||{};return l.isString(a)&&(c.locale=a),l.isNumber(n)&&(c.plural=n),l.isNumber(t)&&(c.plural=t),[s,o,c]}function Zt(e,s,...a){const r=l.isPlainObject(a[0])?a[0]:{},n=!!r.useI18nComponentName,t=l.isBoolean(r.globalInstall)?r.globalInstall:!0;t&&n&&l.warn(A(y.COMPONENT_NAME_LEGACY_COMPATIBLE,{name:Q.name})),t&&(e.component(n?"i18n":Q.name,Q),e.component(Ae.name,Ae),e.component(Me.name,Me)),e.directive("t",ct(s))}function ea(e,s,a){return{beforeCreate(){const r=E.getCurrentInstance();if(!r)throw p(O.UNEXPECTED_ERROR);const n=this.$options;if(n.i18n){const t=n.i18n;n.__i18n&&(t.__i18n=n.__i18n),t.__root=s,this===this.$root?this.$i18n=ze(e,t):(t.__injectWithOption=!0,this.$i18n=Se(t))}else n.__i18n?this===this.$root?this.$i18n=ze(e,n):this.$i18n=Se({__i18n:n.__i18n,__injectWithOption:!0,__root:s}):this.$i18n=e;n.__i18nGlobal&&rt(s,n,n),e.__onComponentInstanceCreated(this.$i18n),a.__setInstance(r,this.$i18n),this.$t=(...t)=>this.$i18n.t(...t),this.$rt=(...t)=>this.$i18n.rt(...t),this.$tc=(...t)=>this.$i18n.tc(...t),this.$te=(t,c)=>this.$i18n.te(t,c),this.$d=(...t)=>this.$i18n.d(...t),this.$n=(...t)=>this.$i18n.n(...t),this.$tm=t=>this.$i18n.tm(t)},mounted(){},unmounted(){const r=E.getCurrentInstance();if(!r)throw p(O.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,a.__deleteInstance(r),delete this.$i18n}}}function ze(e,s){e.locale=s.locale||e.locale,e.fallbackLocale=s.fallbackLocale||e.fallbackLocale,e.missing=s.missing||e.missing,e.silentTranslationWarn=s.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=s.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=s.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=s.postTranslation||e.postTranslation,e.warnHtmlInMessage=s.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=s.escapeParameterHtml||e.escapeParameterHtml,e.sync=s.sync||e.sync,e.__composer[at](s.pluralizationRules||e.pluralizationRules);const a=ee(e.locale,{messages:s.messages,__i18n:s.__i18n});return Object.keys(a).forEach(r=>e.mergeLocaleMessage(r,a[r])),s.datetimeFormats&&Object.keys(s.datetimeFormats).forEach(r=>e.mergeDateTimeFormat(r,s.datetimeFormats[r])),s.numberFormats&&Object.keys(s.numberFormats).forEach(r=>e.mergeNumberFormat(r,s.numberFormats[r])),e}const ot=l.makeSymbol("global-vue-i18n");function ta(e={},s){const a=l.isBoolean(e.legacy)?e.legacy:!0,r=l.isBoolean(e.globalInjection)?e.globalInjection:!0,n=a?!!e.allowComposition:!0,t=new Map,[c,o]=na(e,a),f=l.makeSymbol("vue-i18n");function _(v){return t.get(v)||null}function d(v,N){t.set(v,N)}function L(v){t.delete(v)}{const v={get mode(){return a?"legacy":"composition"},get allowComposition(){return n},async install(N,...k){N.__VUE_I18N_SYMBOL__=f,N.provide(N.__VUE_I18N_SYMBOL__,v),!a&&r&&fa(N,v.global),Zt(N,v,...k),a&&N.mixin(ea(o,o.__composer,v));const P=N.unmount;N.unmount=()=>{v.dispose(),P()}},get global(){return o},dispose(){c.stop()},__instances:t,__getInstance:_,__setInstance:d,__deleteInstance:L};return v}}function te(e={}){const s=E.getCurrentInstance();if(s==null)throw p(O.MUST_BE_CALL_SETUP_TOP);if(!s.isCE&&s.appContext.app!=null&&!s.appContext.app.__VUE_I18N_SYMBOL__)throw p(O.NOT_INSLALLED);const a=la(s),r=sa(a),n=lt(s),t=ra(e,n);if(a.mode==="legacy"&&!e.__useComponent){if(!a.allowComposition)throw p(O.NOT_AVAILABLE_IN_LEGACY_MODE);return oa(s,t,r,e)}if(t==="global")return rt(r,e,n),r;if(t==="parent"){let f=ia(a,s,e.__useComponent);return f==null&&(l.warn(A(y.NOT_FOUND_PARENT_SCOPE)),f=r),f}const c=a;let o=c.__getInstance(s);if(o==null){const f=l.assign({},e);"__i18n"in n&&(f.__i18n=n.__i18n),r&&(f.__root=r),o=We(f),ca(c,s),c.__setInstance(s,o)}return o}const aa=e=>{if(!(Xt in e))throw p(O.NOT_COMPATIBLE_LEGACY_VUE_I18N);return e};function na(e,s,a){const r=E.effectScope();{const n=s?r.run(()=>Se(e)):r.run(()=>We(e));if(n==null)throw p(O.UNEXPECTED_ERROR);return[r,n]}}function la(e){{const s=E.inject(e.isCE?ot:e.appContext.app.__VUE_I18N_SYMBOL__);if(!s)throw p(e.isCE?O.NOT_INSLALLED_WITH_PROVIDE:O.UNEXPECTED_ERROR);return s}}function ra(e,s){return l.isEmptyObject(e)?"__i18n"in s?"local":"global":e.useScope?e.useScope:"local"}function sa(e){return e.mode==="composition"?e.global:e.global.__composer}function ia(e,s,a=!1){let r=null;const n=s.root;let t=s.parent;for(;t!=null;){const c=e;if(e.mode==="composition")r=c.__getInstance(t);else{const o=c.__getInstance(t);o!=null&&(r=o.__composer,a&&r&&!r[nt]&&(r=null))}if(r!=null||n===t)break;t=t.parent}return r}function ca(e,s,a){E.onMounted(()=>{},s),E.onUnmounted(()=>{e.__deleteInstance(s)},s)}function oa(e,s,a,r={}){const n=s==="local",t=E.shallowRef(null);if(n&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw p(O.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const c=l.isBoolean(r.inheritLocale)?r.inheritLocale:!0,o=E.ref(n&&c?a.locale.value:l.isString(r.locale)?r.locale:b.DEFAULT_LOCALE),f=E.ref(n&&c?a.fallbackLocale.value:l.isString(r.fallbackLocale)||l.isArray(r.fallbackLocale)||l.isPlainObject(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:o.value),_=E.ref(ee(o.value,r)),d=E.ref(l.isPlainObject(r.datetimeFormats)?r.datetimeFormats:{[o.value]:{}}),L=E.ref(l.isPlainObject(r.numberFormats)?r.numberFormats:{[o.value]:{}}),v=n?a.missingWarn:l.isBoolean(r.missingWarn)||l.isRegExp(r.missingWarn)?r.missingWarn:!0,N=n?a.fallbackWarn:l.isBoolean(r.fallbackWarn)||l.isRegExp(r.fallbackWarn)?r.fallbackWarn:!0,k=n?a.fallbackRoot:l.isBoolean(r.fallbackRoot)?r.fallbackRoot:!0,P=!!r.fallbackFormat,C=l.isFunction(r.missing)?r.missing:null,U=l.isFunction(r.postTranslation)?r.postTranslation:null,D=n?a.warnHtmlMessage:l.isBoolean(r.warnHtmlMessage)?r.warnHtmlMessage:!0,V=!!r.escapeParameter,w=n?a.modifiers:l.isPlainObject(r.modifiers)?r.modifiers:{},g=r.pluralRules||n&&a.pluralRules;function ae(){return[o.value,f.value,_.value,d.value,L.value]}const B=E.computed({get:()=>t.value?t.value.locale.value:o.value,set:m=>{t.value&&(t.value.locale.value=m),o.value=m}}),H=E.computed({get:()=>t.value?t.value.fallbackLocale.value:f.value,set:m=>{t.value&&(t.value.fallbackLocale.value=m),f.value=m}}),G=E.computed(()=>t.value?t.value.messages.value:_.value),ne=E.computed(()=>d.value),le=E.computed(()=>L.value);function re(){return t.value?t.value.getPostTranslationHandler():U}function se(m){t.value&&t.value.setPostTranslationHandler(m)}function ie(){return t.value?t.value.getMissingHandler():C}function ce(m){t.value&&t.value.setMissingHandler(m)}function W(m){return ae(),m()}function oe(...m){return t.value?W(()=>Reflect.apply(t.value.t,null,[...m])):W(()=>"")}function j(...m){return t.value?Reflect.apply(t.value.rt,null,[...m]):""}function K(...m){return t.value?W(()=>Reflect.apply(t.value.d,null,[...m])):W(()=>"")}function ue(...m){return t.value?W(()=>Reflect.apply(t.value.n,null,[...m])):W(()=>"")}function me(m){return t.value?t.value.tm(m):{}}function fe(m,I){return t.value?t.value.te(m,I):!1}function _e(m){return t.value?t.value.getLocaleMessage(m):{}}function Ue(m,I){t.value&&(t.value.setLocaleMessage(m,I),_.value[m]=I)}function ge(m,I){t.value&&t.value.mergeLocaleMessage(m,I)}function be(m){return t.value?t.value.getDateTimeFormat(m):{}}function Ee(m,I){t.value&&(t.value.setDateTimeFormat(m,I),d.value[m]=I)}function de(m,I){t.value&&t.value.mergeDateTimeFormat(m,I)}function Oe(m){return t.value?t.value.getNumberFormat(m):{}}function ve(m,I){t.value&&(t.value.setNumberFormat(m,I),L.value[m]=I)}function Te(m,I){t.value&&t.value.mergeNumberFormat(m,I)}const Le={get id(){return t.value?t.value.id:-1},locale:B,fallbackLocale:H,messages:G,datetimeFormats:ne,numberFormats:le,get inheritLocale(){return t.value?t.value.inheritLocale:c},set inheritLocale(m){t.value&&(t.value.inheritLocale=m)},get availableLocales(){return t.value?t.value.availableLocales:Object.keys(_.value)},get modifiers(){return t.value?t.value.modifiers:w},get pluralRules(){return t.value?t.value.pluralRules:g},get isGlobal(){return t.value?t.value.isGlobal:!1},get missingWarn(){return t.value?t.value.missingWarn:v},set missingWarn(m){t.value&&(t.value.missingWarn=m)},get fallbackWarn(){return t.value?t.value.fallbackWarn:N},set fallbackWarn(m){t.value&&(t.value.missingWarn=m)},get fallbackRoot(){return t.value?t.value.fallbackRoot:k},set fallbackRoot(m){t.value&&(t.value.fallbackRoot=m)},get fallbackFormat(){return t.value?t.value.fallbackFormat:P},set fallbackFormat(m){t.value&&(t.value.fallbackFormat=m)},get warnHtmlMessage(){return t.value?t.value.warnHtmlMessage:D},set warnHtmlMessage(m){t.value&&(t.value.warnHtmlMessage=m)},get escapeParameter(){return t.value?t.value.escapeParameter:V},set escapeParameter(m){t.value&&(t.value.escapeParameter=m)},t:oe,getPostTranslationHandler:re,setPostTranslationHandler:se,getMissingHandler:ie,setMissingHandler:ce,rt:j,d:K,n:ue,tm:me,te:fe,getLocaleMessage:_e,setLocaleMessage:Ue,mergeLocaleMessage:ge,getDateTimeFormat:be,setDateTimeFormat:Ee,mergeDateTimeFormat:de,getNumberFormat:Oe,setNumberFormat:ve,mergeNumberFormat:Te};function J(m){m.locale.value=o.value,m.fallbackLocale.value=f.value,Object.keys(_.value).forEach(I=>{m.mergeLocaleMessage(I,_.value[I])}),Object.keys(d.value).forEach(I=>{m.mergeDateTimeFormat(I,d.value[I])}),Object.keys(L.value).forEach(I=>{m.mergeNumberFormat(I,L.value[I])}),m.escapeParameter=V,m.fallbackFormat=P,m.fallbackRoot=k,m.fallbackWarn=N,m.missingWarn=v,m.warnHtmlMessage=D}return E.onBeforeMount(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw p(O.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const m=t.value=e.proxy.$i18n.__composer;s==="global"?(o.value=m.locale.value,f.value=m.fallbackLocale.value,_.value=m.messages.value,d.value=m.datetimeFormats.value,L.value=m.numberFormats.value):n&&J(m)}),Le}const ua=["locale","fallbackLocale","availableLocales"],ma=["t","rt","d","n","tm"];function fa(e,s){const a=Object.create(null);ua.forEach(r=>{const n=Object.getOwnPropertyDescriptor(s,r);if(!n)throw p(O.UNEXPECTED_ERROR);const t=E.isRef(n.value)?{get(){return n.value.value},set(c){n.value.value=c}}:{get(){return n.get&&n.get()}};Object.defineProperty(a,r,t)}),e.config.globalProperties.$i18n=a,ma.forEach(r=>{const n=Object.getOwnPropertyDescriptor(s,r);if(!n||!n.value)throw p(O.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${r}`,n)})}b.registerMessageCompiler(b.compileToFunction);b.registerMessageResolver(b.resolveValue);b.registerLocaleFallbacker(b.fallbackWithLocaleChain);{const e=l.getGlobalThis();e.__INTLIFY__=!0,b.setDevToolsHook(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}M.DatetimeFormat=Me;M.I18nInjectionKey=ot;M.NumberFormat=Ae;M.Translation=Q;M.VERSION=Ze;M.castToVueI18n=aa;var ba=M.createI18n=ta;M.useI18n=te;M.vTDirective=ct;export{ba as c};
