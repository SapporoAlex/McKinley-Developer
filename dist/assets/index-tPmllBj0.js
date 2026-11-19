function Hx(s,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in s)){const o=Object.getOwnPropertyDescriptor(i,a);o&&Object.defineProperty(s,a,o.get?o:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function tv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mf={exports:{}},to={},Ef={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Gx(){if(ag)return yt;ag=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function _(I,Q,be){this.props=I,this.context=Q,this.refs=R,this.updater=be||y}_.prototype.isReactComponent={},_.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},_.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function S(){}S.prototype=_.prototype;function w(I,Q,be){this.props=I,this.context=Q,this.refs=R,this.updater=be||y}var L=w.prototype=new S;L.constructor=w,E(L,_.prototype),L.isPureReactComponent=!0;var C=Array.isArray,D=Object.prototype.hasOwnProperty,N={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function P(I,Q,be){var te,Se={},Ae=null,Be=null;if(Q!=null)for(te in Q.ref!==void 0&&(Be=Q.ref),Q.key!==void 0&&(Ae=""+Q.key),Q)D.call(Q,te)&&!M.hasOwnProperty(te)&&(Se[te]=Q[te]);var ye=arguments.length-2;if(ye===1)Se.children=be;else if(1<ye){for(var Ve=Array(ye),vt=0;vt<ye;vt++)Ve[vt]=arguments[vt+2];Se.children=Ve}if(I&&I.defaultProps)for(te in ye=I.defaultProps,ye)Se[te]===void 0&&(Se[te]=ye[te]);return{$$typeof:s,type:I,key:Ae,ref:Be,props:Se,_owner:N.current}}function z(I,Q){return{$$typeof:s,type:I.type,key:Q,ref:I.ref,props:I.props,_owner:I._owner}}function F(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function G(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(be){return Q[be]})}var K=/\/+/g;function ie(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?G(""+I.key):Q.toString(36)}function B(I,Q,be,te,Se){var Ae=typeof I;(Ae==="undefined"||Ae==="boolean")&&(I=null);var Be=!1;if(I===null)Be=!0;else switch(Ae){case"string":case"number":Be=!0;break;case"object":switch(I.$$typeof){case s:case e:Be=!0}}if(Be)return Be=I,Se=Se(Be),I=te===""?"."+ie(Be,0):te,C(Se)?(be="",I!=null&&(be=I.replace(K,"$&/")+"/"),B(Se,Q,be,"",function(vt){return vt})):Se!=null&&(F(Se)&&(Se=z(Se,be+(!Se.key||Be&&Be.key===Se.key?"":(""+Se.key).replace(K,"$&/")+"/")+I)),Q.push(Se)),1;if(Be=0,te=te===""?".":te+":",C(I))for(var ye=0;ye<I.length;ye++){Ae=I[ye];var Ve=te+ie(Ae,ye);Be+=B(Ae,Q,be,Ve,Se)}else if(Ve=x(I),typeof Ve=="function")for(I=Ve.call(I),ye=0;!(Ae=I.next()).done;)Ae=Ae.value,Ve=te+ie(Ae,ye++),Be+=B(Ae,Q,be,Ve,Se);else if(Ae==="object")throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Be}function re(I,Q,be){if(I==null)return I;var te=[],Se=0;return B(I,te,"","",function(Ae){return Q.call(be,Ae,Se++)}),te}function le(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(be){(I._status===0||I._status===-1)&&(I._status=1,I._result=be)},function(be){(I._status===0||I._status===-1)&&(I._status=2,I._result=be)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var W={current:null},Z={transition:null},q={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Z,ReactCurrentOwner:N};function j(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:re,forEach:function(I,Q,be){re(I,function(){Q.apply(this,arguments)},be)},count:function(I){var Q=0;return re(I,function(){Q++}),Q},toArray:function(I){return re(I,function(Q){return Q})||[]},only:function(I){if(!F(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},yt.Component=_,yt.Fragment=t,yt.Profiler=a,yt.PureComponent=w,yt.StrictMode=i,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,yt.act=j,yt.cloneElement=function(I,Q,be){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var te=E({},I.props),Se=I.key,Ae=I.ref,Be=I._owner;if(Q!=null){if(Q.ref!==void 0&&(Ae=Q.ref,Be=N.current),Q.key!==void 0&&(Se=""+Q.key),I.type&&I.type.defaultProps)var ye=I.type.defaultProps;for(Ve in Q)D.call(Q,Ve)&&!M.hasOwnProperty(Ve)&&(te[Ve]=Q[Ve]===void 0&&ye!==void 0?ye[Ve]:Q[Ve])}var Ve=arguments.length-2;if(Ve===1)te.children=be;else if(1<Ve){ye=Array(Ve);for(var vt=0;vt<Ve;vt++)ye[vt]=arguments[vt+2];te.children=ye}return{$$typeof:s,type:I.type,key:Se,ref:Ae,props:te,_owner:Be}},yt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:o,_context:I},I.Consumer=I},yt.createElement=P,yt.createFactory=function(I){var Q=P.bind(null,I);return Q.type=I,Q},yt.createRef=function(){return{current:null}},yt.forwardRef=function(I){return{$$typeof:f,render:I}},yt.isValidElement=F,yt.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:le}},yt.memo=function(I,Q){return{$$typeof:h,type:I,compare:Q===void 0?null:Q}},yt.startTransition=function(I){var Q=Z.transition;Z.transition={};try{I()}finally{Z.transition=Q}},yt.unstable_act=j,yt.useCallback=function(I,Q){return W.current.useCallback(I,Q)},yt.useContext=function(I){return W.current.useContext(I)},yt.useDebugValue=function(){},yt.useDeferredValue=function(I){return W.current.useDeferredValue(I)},yt.useEffect=function(I,Q){return W.current.useEffect(I,Q)},yt.useId=function(){return W.current.useId()},yt.useImperativeHandle=function(I,Q,be){return W.current.useImperativeHandle(I,Q,be)},yt.useInsertionEffect=function(I,Q){return W.current.useInsertionEffect(I,Q)},yt.useLayoutEffect=function(I,Q){return W.current.useLayoutEffect(I,Q)},yt.useMemo=function(I,Q){return W.current.useMemo(I,Q)},yt.useReducer=function(I,Q,be){return W.current.useReducer(I,Q,be)},yt.useRef=function(I){return W.current.useRef(I)},yt.useState=function(I){return W.current.useState(I)},yt.useSyncExternalStore=function(I,Q,be){return W.current.useSyncExternalStore(I,Q,be)},yt.useTransition=function(){return W.current.useTransition()},yt.version="18.3.1",yt}var og;function lh(){return og||(og=1,Ef.exports=Gx()),Ef.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Vx(){if(lg)return to;lg=1;var s=lh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var m,v={},x=null,y=null;h!==void 0&&(x=""+h),d.key!==void 0&&(x=""+d.key),d.ref!==void 0&&(y=d.ref);for(m in d)i.call(d,m)&&!o.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:x,ref:y,props:v,_owner:a.current}}return to.Fragment=t,to.jsx=u,to.jsxs=u,to}var ug;function Wx(){return ug||(ug=1,Mf.exports=Vx()),Mf.exports}var ve=Wx(),Ge=lh();const nv=tv(Ge),Xx=Hx({__proto__:null,default:nv},[Ge]);var Nl={},wf={exports:{}},ii={},Tf={exports:{}},Af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function $x(){return cg||(cg=1,(function(s){function e(Z,q){var j=Z.length;Z.push(q);e:for(;0<j;){var I=j-1>>>1,Q=Z[I];if(0<a(Q,q))Z[I]=q,Z[j]=Q,j=I;else break e}}function t(Z){return Z.length===0?null:Z[0]}function i(Z){if(Z.length===0)return null;var q=Z[0],j=Z.pop();if(j!==q){Z[0]=j;e:for(var I=0,Q=Z.length,be=Q>>>1;I<be;){var te=2*(I+1)-1,Se=Z[te],Ae=te+1,Be=Z[Ae];if(0>a(Se,j))Ae<Q&&0>a(Be,Se)?(Z[I]=Be,Z[Ae]=j,I=Ae):(Z[I]=Se,Z[te]=j,I=te);else if(Ae<Q&&0>a(Be,j))Z[I]=Be,Z[Ae]=j,I=Ae;else break e}}return q}function a(Z,q){var j=Z.sortIndex-q.sortIndex;return j!==0?j:Z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;s.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,v=null,x=3,y=!1,E=!1,R=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(Z){for(var q=t(h);q!==null;){if(q.callback===null)i(h);else if(q.startTime<=Z)i(h),q.sortIndex=q.expirationTime,e(d,q);else break;q=t(h)}}function C(Z){if(R=!1,L(Z),!E)if(t(d)!==null)E=!0,le(D);else{var q=t(h);q!==null&&W(C,q.startTime-Z)}}function D(Z,q){E=!1,R&&(R=!1,S(P),P=-1),y=!0;var j=x;try{for(L(q),v=t(d);v!==null&&(!(v.expirationTime>q)||Z&&!G());){var I=v.callback;if(typeof I=="function"){v.callback=null,x=v.priorityLevel;var Q=I(v.expirationTime<=q);q=s.unstable_now(),typeof Q=="function"?v.callback=Q:v===t(d)&&i(d),L(q)}else i(d);v=t(d)}if(v!==null)var be=!0;else{var te=t(h);te!==null&&W(C,te.startTime-q),be=!1}return be}finally{v=null,x=j,y=!1}}var N=!1,M=null,P=-1,z=5,F=-1;function G(){return!(s.unstable_now()-F<z)}function K(){if(M!==null){var Z=s.unstable_now();F=Z;var q=!0;try{q=M(!0,Z)}finally{q?ie():(N=!1,M=null)}}else N=!1}var ie;if(typeof w=="function")ie=function(){w(K)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,re=B.port2;B.port1.onmessage=K,ie=function(){re.postMessage(null)}}else ie=function(){_(K,0)};function le(Z){M=Z,N||(N=!0,ie())}function W(Z,q){P=_(function(){Z(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,le(D))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var j=x;x=q;try{return Z()}finally{x=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,q){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var j=x;x=Z;try{return q()}finally{x=j}},s.unstable_scheduleCallback=function(Z,q,j){var I=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?I+j:I):j=I,Z){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=j+Q,Z={id:m++,callback:q,priorityLevel:Z,startTime:j,expirationTime:Q,sortIndex:-1},j>I?(Z.sortIndex=j,e(h,Z),t(d)===null&&Z===t(h)&&(R?(S(P),P=-1):R=!0,W(C,j-I))):(Z.sortIndex=Q,e(d,Z),E||y||(E=!0,le(D))),Z},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(Z){var q=x;return function(){var j=x;x=q;try{return Z.apply(this,arguments)}finally{x=j}}}})(Af)),Af}var fg;function qx(){return fg||(fg=1,Tf.exports=$x()),Tf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function Yx(){if(dg)return ii;dg=1;var s=lh(),e=qx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(a[n]=r,n=0;n<r.length;n++)i.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function x(n){return d.call(v,n)?!0:d.call(m,n)?!1:h.test(n)?v[n]=!0:(m[n]=!0,!1)}function y(n,r,l,c){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,c){if(r===null||typeof r>"u"||y(n,r,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function R(n,r,l,c,p,g,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=T}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new R(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function w(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,w);_[r]=new R(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,w);_[r]=new R(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,w);_[r]=new R(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,c){var p=_.hasOwnProperty(r)?_[r]:null;(p!==null?p.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,p,c)&&(l=null),c||p===null?x(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,c=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?n.setAttributeNS(c,r,l):n.setAttribute(r,l))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),N=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),G=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Z=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,I;function Q(n){if(I===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var be=!1;function te(n,r){if(!n||be)return"";be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ue){var c=ue}Reflect.construct(n,[],r)}else{try{r.call()}catch(ue){c=ue}n.call(r.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var p=ue.stack.split(`
`),g=c.stack.split(`
`),T=p.length-1,O=g.length-1;1<=T&&0<=O&&p[T]!==g[O];)O--;for(;1<=T&&0<=O;T--,O--)if(p[T]!==g[O]){if(T!==1||O!==1)do if(T--,O--,0>O||p[T]!==g[O]){var V=`
`+p[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=O);break}}}finally{be=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?Q(n):""}function Se(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function Ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case N:return"Portal";case z:return"Profiler";case P:return"StrictMode";case ie:return"Suspense";case B:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case F:return(n._context.displayName||"Context")+".Provider";case K:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return r=n.displayName||null,r!==null?r:Ae(n.type)||"Memo";case le:r=n._payload,n=n._init;try{return Ae(n(r))}catch{}}return null}function Be(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(r);case 8:return r===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ve(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function vt(n){var r=Ve(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,g=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function it(n){n._valueTracker||(n._valueTracker=vt(n))}function At(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),c="";return n&&(c=Ve(n)?n.checked?"true":"false":n.value),n=c,n!==l?(r.setValue(n),!0):!1}function Mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pt(n,r){var l=r.checked;return j({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Xt(n,r){var l=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;l=ye(r.value!=null?r.value:l),n._wrapperState={initialChecked:c,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Yt(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function fn(n,r){Yt(n,r);var l=ye(r.value),c=r.type;if(l!=null)c==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Nn(n,r.type,l):r.hasOwnProperty("defaultValue")&&Nn(n,r.type,ye(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ft(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Nn(n,r,l){(r!=="number"||Mt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ht=Array.isArray;function $t(n,r,l,c){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&c&&(n[l].defaultSelected=!0)}else{for(l=""+ye(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function nn(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ln(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Ht(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:ye(l)}}function X(n,r){var l=ye(r.value),c=ye(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),c!=null&&(n.defaultValue=""+c)}function En(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function It(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?It(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Fe,Qt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,c,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,c,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ze(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U=["Webkit","ms","Moz","O"];Object.keys(rt).forEach(function(n){U.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),rt[r]=rt[n]})});function A(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||rt.hasOwnProperty(n)&&rt[n]?(""+r).trim():r+"px"}function ee(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=A(l,r[l],c);l==="float"&&(l="cssFloat"),c?n.setProperty(l,p):n[l]=p}}var Ee=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(n,r){if(r){if(Ee[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function De(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function fe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pe=null,Le=null,k=null;function me(n){if(n=za(n)){if(typeof pe!="function")throw Error(t(280));var r=n.stateNode;r&&(r=qo(r),pe(n.stateNode,n.type,r))}}function ce(n){Le?k?k.push(n):k=[n]:Le=n}function Ne(){if(Le){var n=Le,r=k;if(k=Le=null,me(n),r)for(n=0;n<r.length;n++)me(r[n])}}function xe(n,r){return n(r)}function Ce(){}var qe=!1;function dt(n,r,l){if(qe)return n(r,l);qe=!0;try{return xe(n,r,l)}finally{qe=!1,(Le!==null||k!==null)&&(Ce(),Ne())}}function we(n,r){var l=n.stateNode;if(l===null)return null;var c=qo(l);if(c===null)return null;l=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var de=!1;if(f)try{var _e={};Object.defineProperty(_e,"passive",{get:function(){de=!0}}),window.addEventListener("test",_e,_e),window.removeEventListener("test",_e,_e)}catch{de=!1}function he(n,r,l,c,p,g,T,O,V){var ue=Array.prototype.slice.call(arguments,3);try{r.apply(l,ue)}catch(Te){this.onError(Te)}}var Pe=!1,Qe=null,Et=!1,wn=null,kn={onError:function(n){Pe=!0,Qe=n}};function Kt(n,r,l,c,p,g,T,O,V){Pe=!1,Qe=null,he.apply(kn,arguments)}function Bt(n,r,l,c,p,g,T,O,V){if(Kt.apply(this,arguments),Pe){if(Pe){var ue=Qe;Pe=!1,Qe=null}else throw Error(t(198));Et||(Et=!0,wn=ue)}}function rn(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Gt(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _t(n){if(rn(n)!==n)throw Error(t(188))}function Dn(n){var r=n.alternate;if(!r){if(r=rn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,c=r;;){var p=l.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===l)return _t(p),n;if(g===c)return _t(p),r;g=g.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=g;else{for(var T=!1,O=p.child;O;){if(O===l){T=!0,l=p,c=g;break}if(O===c){T=!0,c=p,l=g;break}O=O.sibling}if(!T){for(O=g.child;O;){if(O===l){T=!0,l=g,c=p;break}if(O===c){T=!0,c=g,l=p;break}O=O.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function qn(n){return n=Dn(n),n!==null?ir(n):null}function ir(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ir(n);if(r!==null)return r;n=n.sibling}return null}var Ri=e.unstable_scheduleCallback,Ci=e.unstable_cancelCallback,jr=e.unstable_shouldYield,$u=e.unstable_requestPaint,Jt=e.unstable_now,Po=e.unstable_getCurrentPriorityLevel,wa=e.unstable_ImmediatePriority,Lo=e.unstable_UserBlockingPriority,ws=e.unstable_NormalPriority,No=e.unstable_LowPriority,b=e.unstable_IdlePriority,H=null,ae=null;function ne(n){if(ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(H,n,void 0,(n.current.flags&128)===128)}catch{}}var J=Math.clz32?Math.clz32:Oe,ke=Math.log,Xe=Math.LN2;function Oe(n){return n>>>=0,n===0?32:31-(ke(n)/Xe|0)|0}var ze=64,Ye=4194304;function lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gt(n,r){var l=n.pendingLanes;if(l===0)return 0;var c=0,p=n.suspendedLanes,g=n.pingedLanes,T=l&268435455;if(T!==0){var O=T&~p;O!==0?c=lt(O):(g&=T,g!==0&&(c=lt(g)))}else T=l&~p,T!==0?c=lt(T):g!==0&&(c=lt(g));if(c===0)return 0;if(r!==0&&r!==c&&(r&p)===0&&(p=c&-c,g=r&-r,p>=g||p===16&&(g&4194240)!==0))return r;if((c&4)!==0&&(c|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)l=31-J(r),p=1<<l,c|=n[l],r&=~p;return c}function Ke(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function St(n,r){for(var l=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-J(g),O=1<<T,V=p[T];V===-1?((O&l)===0||(O&c)!==0)&&(p[T]=Ke(O,r)):V<=r&&(n.expiredLanes|=O),g&=~O}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ot(){var n=ze;return ze<<=1,(ze&4194240)===0&&(ze=64),n}function Dt(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function un(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-J(r),n[r]=l}function je(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-J(l),g=1<<p;r[p]=0,c[p]=-1,n[p]=-1,l&=~g}}function gn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var c=31-J(l),p=1<<c;p&r|n[c]&r&&(n[c]|=r),l&=~p}}var tt=0;function Vi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vn,yr,bi,Wi,wt,dn=!1,Bn=[],bt=null,Vt=null,Tn=null,Mr=new Map,Ta=new Map,Er=[],u_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(n,r){switch(n){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Mr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(r.pointerId)}}function Aa(n,r,l,c,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},r!==null&&(r=za(r),r!==null&&yr(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function c_(n,r,l,c,p){switch(r){case"focusin":return bt=Aa(bt,n,r,l,c,p),!0;case"dragenter":return Vt=Aa(Vt,n,r,l,c,p),!0;case"mouseover":return Tn=Aa(Tn,n,r,l,c,p),!0;case"pointerover":var g=p.pointerId;return Mr.set(g,Aa(Mr.get(g)||null,n,r,l,c,p)),!0;case"gotpointercapture":return g=p.pointerId,Ta.set(g,Aa(Ta.get(g)||null,n,r,l,c,p)),!0}return!1}function Wh(n){var r=Zr(n.target);if(r!==null){var l=rn(r);if(l!==null){if(r=l.tag,r===13){if(r=Gt(l),r!==null){n.blockedOn=r,wt(n.priority,function(){bi(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Do(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Yu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var c=new l.constructor(l.type,l);Ue=c,l.target.dispatchEvent(c),Ue=null}else return r=za(l),r!==null&&yr(r),n.blockedOn=l,!1;r.shift()}return!0}function Xh(n,r,l){Do(n)&&l.delete(r)}function f_(){dn=!1,bt!==null&&Do(bt)&&(bt=null),Vt!==null&&Do(Vt)&&(Vt=null),Tn!==null&&Do(Tn)&&(Tn=null),Mr.forEach(Xh),Ta.forEach(Xh)}function Ra(n,r){n.blockedOn===r&&(n.blockedOn=null,dn||(dn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,f_)))}function Ca(n){function r(p){return Ra(p,n)}if(0<Bn.length){Ra(Bn[0],n);for(var l=1;l<Bn.length;l++){var c=Bn[l];c.blockedOn===n&&(c.blockedOn=null)}}for(bt!==null&&Ra(bt,n),Vt!==null&&Ra(Vt,n),Tn!==null&&Ra(Tn,n),Mr.forEach(r),Ta.forEach(r),l=0;l<Er.length;l++)c=Er[l],c.blockedOn===n&&(c.blockedOn=null);for(;0<Er.length&&(l=Er[0],l.blockedOn===null);)Wh(l),l.blockedOn===null&&Er.shift()}var Ts=C.ReactCurrentBatchConfig,Io=!0;function d_(n,r,l,c){var p=tt,g=Ts.transition;Ts.transition=null;try{tt=1,qu(n,r,l,c)}finally{tt=p,Ts.transition=g}}function h_(n,r,l,c){var p=tt,g=Ts.transition;Ts.transition=null;try{tt=4,qu(n,r,l,c)}finally{tt=p,Ts.transition=g}}function qu(n,r,l,c){if(Io){var p=Yu(n,r,l,c);if(p===null)fc(n,r,c,Uo,l),Vh(n,c);else if(c_(p,n,r,l,c))c.stopPropagation();else if(Vh(n,c),r&4&&-1<u_.indexOf(n)){for(;p!==null;){var g=za(p);if(g!==null&&vn(g),g=Yu(n,r,l,c),g===null&&fc(n,r,c,Uo,l),g===p)break;p=g}p!==null&&c.stopPropagation()}else fc(n,r,c,null,l)}}var Uo=null;function Yu(n,r,l,c){if(Uo=null,n=fe(c),n=Zr(n),n!==null)if(r=rn(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Gt(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Uo=n,null}function $h(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Po()){case wa:return 1;case Lo:return 4;case ws:case No:return 16;case b:return 536870912;default:return 16}default:return 16}}var wr=null,Ku=null,Fo=null;function qh(){if(Fo)return Fo;var n,r=Ku,l=r.length,c,p="value"in wr?wr.value:wr.textContent,g=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(c=1;c<=T&&r[l-c]===p[g-c];c++);return Fo=p.slice(n,1<c?1-c:void 0)}function Oo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ko(){return!0}function Yh(){return!1}function li(n){function r(l,c,p,g,T){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(l=n[O],this[O]=l?l(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ko:Yh,this.isPropagationStopped=Yh,this}return j(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),r}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ju=li(As),ba=j({},As,{view:0,detail:0}),p_=li(ba),Zu,Qu,Pa,Bo=j({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Pa&&(Pa&&n.type==="mousemove"?(Zu=n.screenX-Pa.screenX,Qu=n.screenY-Pa.screenY):Qu=Zu=0,Pa=n),Zu)},movementY:function(n){return"movementY"in n?n.movementY:Qu}}),Kh=li(Bo),m_=j({},Bo,{dataTransfer:0}),g_=li(m_),v_=j({},ba,{relatedTarget:0}),Ju=li(v_),__=j({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),x_=li(__),S_=j({},As,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),y_=li(S_),M_=j({},As,{data:0}),jh=li(M_),E_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=T_[n])?!!r[n]:!1}function ec(){return A_}var R_=j({},ba,{key:function(n){if(n.key){var r=E_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Oo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?w_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(n){return n.type==="keypress"?Oo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Oo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),C_=li(R_),b_=j({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=li(b_),P_=j({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),L_=li(P_),N_=j({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),D_=li(N_),I_=j({},Bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),U_=li(I_),F_=[9,13,27,32],tc=f&&"CompositionEvent"in window,La=null;f&&"documentMode"in document&&(La=document.documentMode);var O_=f&&"TextEvent"in window&&!La,Qh=f&&(!tc||La&&8<La&&11>=La),Jh=" ",ep=!1;function tp(n,r){switch(n){case"keyup":return F_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function k_(n,r){switch(n){case"compositionend":return np(r);case"keypress":return r.which!==32?null:(ep=!0,Jh);case"textInput":return n=r.data,n===Jh&&ep?null:n;default:return null}}function B_(n,r){if(Rs)return n==="compositionend"||!tc&&tp(n,r)?(n=qh(),Fo=Ku=wr=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Qh&&r.locale!=="ko"?null:r.data;default:return null}}var z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!z_[n.type]:r==="textarea"}function rp(n,r,l,c){ce(c),r=Wo(r,"onChange"),0<r.length&&(l=new ju("onChange","change",null,l,c),n.push({event:l,listeners:r}))}var Na=null,Da=null;function H_(n){Mp(n,0)}function zo(n){var r=Ns(n);if(At(r))return n}function G_(n,r){if(n==="change")return r}var sp=!1;if(f){var nc;if(f){var ic="oninput"in document;if(!ic){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),ic=typeof ap.oninput=="function"}nc=ic}else nc=!1;sp=nc&&(!document.documentMode||9<document.documentMode)}function op(){Na&&(Na.detachEvent("onpropertychange",lp),Da=Na=null)}function lp(n){if(n.propertyName==="value"&&zo(Da)){var r=[];rp(r,Da,n,fe(n)),dt(H_,r)}}function V_(n,r,l){n==="focusin"?(op(),Na=r,Da=l,Na.attachEvent("onpropertychange",lp)):n==="focusout"&&op()}function W_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zo(Da)}function X_(n,r){if(n==="click")return zo(r)}function $_(n,r){if(n==="input"||n==="change")return zo(r)}function q_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pi=typeof Object.is=="function"?Object.is:q_;function Ia(n,r){if(Pi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),c=Object.keys(r);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!d.call(r,p)||!Pi(n[p],r[p]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cp(n,r){var l=up(n);n=0;for(var c;l;){if(l.nodeType===3){if(c=n+l.textContent.length,n<=r&&c>=r)return{node:l,offset:r-n};n=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=up(l)}}function fp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?fp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function dp(){for(var n=window,r=Mt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Mt(n.document)}return r}function rc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Y_(n){var r=dp(),l=n.focusedElem,c=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&fp(l.ownerDocument.documentElement,l)){if(c!==null&&rc(l)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,g=Math.min(c.start,p);c=c.end===void 0?g:Math.min(c.end,p),!n.extend&&g>c&&(p=c,c=g,g=p),p=cp(l,g);var T=cp(l,c);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),g>c?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var K_=f&&"documentMode"in document&&11>=document.documentMode,Cs=null,sc=null,Ua=null,ac=!1;function hp(n,r,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ac||Cs==null||Cs!==Mt(c)||(c=Cs,"selectionStart"in c&&rc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ua&&Ia(Ua,c)||(Ua=c,c=Wo(sc,"onSelect"),0<c.length&&(r=new ju("onSelect","select",null,r,l),n.push({event:r,listeners:c}),r.target=Cs)))}function Ho(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var bs={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},oc={},pp={};f&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Go(n){if(oc[n])return oc[n];if(!bs[n])return n;var r=bs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in pp)return oc[n]=r[l];return n}var mp=Go("animationend"),gp=Go("animationiteration"),vp=Go("animationstart"),_p=Go("transitionend"),xp=new Map,Sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(n,r){xp.set(n,r),o(r,[n])}for(var lc=0;lc<Sp.length;lc++){var uc=Sp[lc],j_=uc.toLowerCase(),Z_=uc[0].toUpperCase()+uc.slice(1);Tr(j_,"on"+Z_)}Tr(mp,"onAnimationEnd"),Tr(gp,"onAnimationIteration"),Tr(vp,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(_p,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function yp(n,r,l){var c=n.type||"unknown-event";n.currentTarget=l,Bt(c,r,void 0,n),n.currentTarget=null}function Mp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var c=n[l],p=c.event;c=c.listeners;e:{var g=void 0;if(r)for(var T=c.length-1;0<=T;T--){var O=c[T],V=O.instance,ue=O.currentTarget;if(O=O.listener,V!==g&&p.isPropagationStopped())break e;yp(p,O,ue),g=V}else for(T=0;T<c.length;T++){if(O=c[T],V=O.instance,ue=O.currentTarget,O=O.listener,V!==g&&p.isPropagationStopped())break e;yp(p,O,ue),g=V}}}if(Et)throw n=wn,Et=!1,wn=null,n}function jt(n,r){var l=r[vc];l===void 0&&(l=r[vc]=new Set);var c=n+"__bubble";l.has(c)||(Ep(r,n,2,!1),l.add(c))}function cc(n,r,l){var c=0;r&&(c|=4),Ep(l,n,c,r)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Oa(n){if(!n[Vo]){n[Vo]=!0,i.forEach(function(l){l!=="selectionchange"&&(Q_.has(l)||cc(l,!1,n),cc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Vo]||(r[Vo]=!0,cc("selectionchange",!1,r))}}function Ep(n,r,l,c){switch($h(r)){case 1:var p=d_;break;case 4:p=h_;break;default:p=qu}l=p.bind(null,r,l,n),p=void 0,!de||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function fc(n,r,l,c,p){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var O=c.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(T===4)for(T=c.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;T=T.return}for(;O!==null;){if(T=Zr(O),T===null)return;if(V=T.tag,V===5||V===6){c=g=T;continue e}O=O.parentNode}}c=c.return}dt(function(){var ue=g,Te=fe(l),Re=[];e:{var Me=xp.get(n);if(Me!==void 0){var We=ju,Je=n;switch(n){case"keypress":if(Oo(l)===0)break e;case"keydown":case"keyup":We=C_;break;case"focusin":Je="focus",We=Ju;break;case"focusout":Je="blur",We=Ju;break;case"beforeblur":case"afterblur":We=Ju;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=g_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=L_;break;case mp:case gp:case vp:We=x_;break;case _p:We=D_;break;case"scroll":We=p_;break;case"wheel":We=U_;break;case"copy":case"cut":case"paste":We=y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Zh}var et=(r&4)!==0,hn=!et&&n==="scroll",se=et?Me!==null?Me+"Capture":null:Me;et=[];for(var $=ue,oe;$!==null;){oe=$;var Ie=oe.stateNode;if(oe.tag===5&&Ie!==null&&(oe=Ie,se!==null&&(Ie=we($,se),Ie!=null&&et.push(ka($,Ie,oe)))),hn)break;$=$.return}0<et.length&&(Me=new We(Me,Je,null,l,Te),Re.push({event:Me,listeners:et}))}}if((r&7)===0){e:{if(Me=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",Me&&l!==Ue&&(Je=l.relatedTarget||l.fromElement)&&(Zr(Je)||Je[rr]))break e;if((We||Me)&&(Me=Te.window===Te?Te:(Me=Te.ownerDocument)?Me.defaultView||Me.parentWindow:window,We?(Je=l.relatedTarget||l.toElement,We=ue,Je=Je?Zr(Je):null,Je!==null&&(hn=rn(Je),Je!==hn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(We=null,Je=ue),We!==Je)){if(et=Kh,Ie="onMouseLeave",se="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(et=Zh,Ie="onPointerLeave",se="onPointerEnter",$="pointer"),hn=We==null?Me:Ns(We),oe=Je==null?Me:Ns(Je),Me=new et(Ie,$+"leave",We,l,Te),Me.target=hn,Me.relatedTarget=oe,Ie=null,Zr(Te)===ue&&(et=new et(se,$+"enter",Je,l,Te),et.target=oe,et.relatedTarget=hn,Ie=et),hn=Ie,We&&Je)t:{for(et=We,se=Je,$=0,oe=et;oe;oe=Ps(oe))$++;for(oe=0,Ie=se;Ie;Ie=Ps(Ie))oe++;for(;0<$-oe;)et=Ps(et),$--;for(;0<oe-$;)se=Ps(se),oe--;for(;$--;){if(et===se||se!==null&&et===se.alternate)break t;et=Ps(et),se=Ps(se)}et=null}else et=null;We!==null&&wp(Re,Me,We,et,!1),Je!==null&&hn!==null&&wp(Re,hn,Je,et,!0)}}e:{if(Me=ue?Ns(ue):window,We=Me.nodeName&&Me.nodeName.toLowerCase(),We==="select"||We==="input"&&Me.type==="file")var nt=G_;else if(ip(Me))if(sp)nt=$_;else{nt=W_;var st=V_}else(We=Me.nodeName)&&We.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(nt=X_);if(nt&&(nt=nt(n,ue))){rp(Re,nt,l,Te);break e}st&&st(n,Me,ue),n==="focusout"&&(st=Me._wrapperState)&&st.controlled&&Me.type==="number"&&Nn(Me,"number",Me.value)}switch(st=ue?Ns(ue):window,n){case"focusin":(ip(st)||st.contentEditable==="true")&&(Cs=st,sc=ue,Ua=null);break;case"focusout":Ua=sc=Cs=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,hp(Re,l,Te);break;case"selectionchange":if(K_)break;case"keydown":case"keyup":hp(Re,l,Te)}var at;if(tc)e:{switch(n){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Rs?tp(n,l)&&(ft="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ft="onCompositionStart");ft&&(Qh&&l.locale!=="ko"&&(Rs||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Rs&&(at=qh()):(wr=Te,Ku="value"in wr?wr.value:wr.textContent,Rs=!0)),st=Wo(ue,ft),0<st.length&&(ft=new jh(ft,n,null,l,Te),Re.push({event:ft,listeners:st}),at?ft.data=at:(at=np(l),at!==null&&(ft.data=at)))),(at=O_?k_(n,l):B_(n,l))&&(ue=Wo(ue,"onBeforeInput"),0<ue.length&&(Te=new jh("onBeforeInput","beforeinput",null,l,Te),Re.push({event:Te,listeners:ue}),Te.data=at))}Mp(Re,r)})}function ka(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Wo(n,r){for(var l=r+"Capture",c=[];n!==null;){var p=n,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=we(n,l),g!=null&&c.unshift(ka(n,g,p)),g=we(n,r),g!=null&&c.push(ka(n,g,p))),n=n.return}return c}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wp(n,r,l,c,p){for(var g=r._reactName,T=[];l!==null&&l!==c;){var O=l,V=O.alternate,ue=O.stateNode;if(V!==null&&V===c)break;O.tag===5&&ue!==null&&(O=ue,p?(V=we(l,g),V!=null&&T.unshift(ka(l,V,O))):p||(V=we(l,g),V!=null&&T.push(ka(l,V,O)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var J_=/\r\n?/g,ex=/\u0000|\uFFFD/g;function Tp(n){return(typeof n=="string"?n:""+n).replace(J_,`
`).replace(ex,"")}function Xo(n,r,l){if(r=Tp(r),Tp(n)!==r&&l)throw Error(t(425))}function $o(){}var dc=null,hc=null;function pc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,tx=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,nx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(n){return Ap.resolve(null).then(n).catch(ix)}:mc;function ix(n){setTimeout(function(){throw n})}function gc(n,r){var l=r,c=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){n.removeChild(p),Ca(r);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);Ca(r)}function Ar(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Rp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Xi="__reactFiber$"+Ls,Ba="__reactProps$"+Ls,rr="__reactContainer$"+Ls,vc="__reactEvents$"+Ls,rx="__reactListeners$"+Ls,sx="__reactHandles$"+Ls;function Zr(n){var r=n[Xi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[rr]||l[Xi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Rp(n);n!==null;){if(l=n[Xi])return l;n=Rp(n)}return r}n=l,l=n.parentNode}return null}function za(n){return n=n[Xi]||n[rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qo(n){return n[Ba]||null}var _c=[],Ds=-1;function Rr(n){return{current:n}}function Zt(n){0>Ds||(n.current=_c[Ds],_c[Ds]=null,Ds--)}function qt(n,r){Ds++,_c[Ds]=n.current,n.current=r}var Cr={},zn=Rr(Cr),Qn=Rr(!1),Qr=Cr;function Is(n,r){var l=n.type.contextTypes;if(!l)return Cr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in l)p[g]=r[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Jn(n){return n=n.childContextTypes,n!=null}function Yo(){Zt(Qn),Zt(zn)}function Cp(n,r,l){if(zn.current!==Cr)throw Error(t(168));qt(zn,r),qt(Qn,l)}function bp(n,r,l){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in r))throw Error(t(108,Be(n)||"Unknown",p));return j({},l,c)}function Ko(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,Qr=zn.current,qt(zn,n),qt(Qn,Qn.current),!0}function Pp(n,r,l){var c=n.stateNode;if(!c)throw Error(t(169));l?(n=bp(n,r,Qr),c.__reactInternalMemoizedMergedChildContext=n,Zt(Qn),Zt(zn),qt(zn,n)):Zt(Qn),qt(Qn,l)}var sr=null,jo=!1,xc=!1;function Lp(n){sr===null?sr=[n]:sr.push(n)}function ax(n){jo=!0,Lp(n)}function br(){if(!xc&&sr!==null){xc=!0;var n=0,r=tt;try{var l=sr;for(tt=1;n<l.length;n++){var c=l[n];do c=c(!0);while(c!==null)}sr=null,jo=!1}catch(p){throw sr!==null&&(sr=sr.slice(n+1)),Ri(wa,br),p}finally{tt=r,xc=!1}}return null}var Us=[],Fs=0,Zo=null,Qo=0,_i=[],xi=0,Jr=null,ar=1,or="";function es(n,r){Us[Fs++]=Qo,Us[Fs++]=Zo,Zo=n,Qo=r}function Np(n,r,l){_i[xi++]=ar,_i[xi++]=or,_i[xi++]=Jr,Jr=n;var c=ar;n=or;var p=32-J(c)-1;c&=~(1<<p),l+=1;var g=32-J(r)+p;if(30<g){var T=p-p%5;g=(c&(1<<T)-1).toString(32),c>>=T,p-=T,ar=1<<32-J(r)+p|l<<p|c,or=g+n}else ar=1<<g|l<<p|c,or=n}function Sc(n){n.return!==null&&(es(n,1),Np(n,1,0))}function yc(n){for(;n===Zo;)Zo=Us[--Fs],Us[Fs]=null,Qo=Us[--Fs],Us[Fs]=null;for(;n===Jr;)Jr=_i[--xi],_i[xi]=null,or=_i[--xi],_i[xi]=null,ar=_i[--xi],_i[xi]=null}var ui=null,ci=null,tn=!1,Li=null;function Dp(n,r){var l=Ei(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Ip(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ui=n,ci=Ar(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ui=n,ci=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Jr!==null?{id:ar,overflow:or}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Ei(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ui=n,ci=null,!0):!1;default:return!1}}function Mc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ec(n){if(tn){var r=ci;if(r){var l=r;if(!Ip(n,r)){if(Mc(n))throw Error(t(418));r=Ar(l.nextSibling);var c=ui;r&&Ip(n,r)?Dp(c,l):(n.flags=n.flags&-4097|2,tn=!1,ui=n)}}else{if(Mc(n))throw Error(t(418));n.flags=n.flags&-4097|2,tn=!1,ui=n}}}function Up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ui=n}function Jo(n){if(n!==ui)return!1;if(!tn)return Up(n),tn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!pc(n.type,n.memoizedProps)),r&&(r=ci)){if(Mc(n))throw Fp(),Error(t(418));for(;r;)Dp(n,r),r=Ar(r.nextSibling)}if(Up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ci=Ar(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ci=null}}else ci=ui?Ar(n.stateNode.nextSibling):null;return!0}function Fp(){for(var n=ci;n;)n=Ar(n.nextSibling)}function Os(){ci=ui=null,tn=!1}function wc(n){Li===null?Li=[n]:Li.push(n)}var ox=C.ReactCurrentBatchConfig;function Ha(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,n));var p=c,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(T){var O=p.refs;T===null?delete O[g]:O[g]=T},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function el(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Op(n){var r=n._init;return r(n._payload)}function kp(n){function r(se,$){if(n){var oe=se.deletions;oe===null?(se.deletions=[$],se.flags|=16):oe.push($)}}function l(se,$){if(!n)return null;for(;$!==null;)r(se,$),$=$.sibling;return null}function c(se,$){for(se=new Map;$!==null;)$.key!==null?se.set($.key,$):se.set($.index,$),$=$.sibling;return se}function p(se,$){return se=Or(se,$),se.index=0,se.sibling=null,se}function g(se,$,oe){return se.index=oe,n?(oe=se.alternate,oe!==null?(oe=oe.index,oe<$?(se.flags|=2,$):oe):(se.flags|=2,$)):(se.flags|=1048576,$)}function T(se){return n&&se.alternate===null&&(se.flags|=2),se}function O(se,$,oe,Ie){return $===null||$.tag!==6?($=gf(oe,se.mode,Ie),$.return=se,$):($=p($,oe),$.return=se,$)}function V(se,$,oe,Ie){var nt=oe.type;return nt===M?Te(se,$,oe.props.children,Ie,oe.key):$!==null&&($.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===le&&Op(nt)===$.type)?(Ie=p($,oe.props),Ie.ref=Ha(se,$,oe),Ie.return=se,Ie):(Ie=wl(oe.type,oe.key,oe.props,null,se.mode,Ie),Ie.ref=Ha(se,$,oe),Ie.return=se,Ie)}function ue(se,$,oe,Ie){return $===null||$.tag!==4||$.stateNode.containerInfo!==oe.containerInfo||$.stateNode.implementation!==oe.implementation?($=vf(oe,se.mode,Ie),$.return=se,$):($=p($,oe.children||[]),$.return=se,$)}function Te(se,$,oe,Ie,nt){return $===null||$.tag!==7?($=ls(oe,se.mode,Ie,nt),$.return=se,$):($=p($,oe),$.return=se,$)}function Re(se,$,oe){if(typeof $=="string"&&$!==""||typeof $=="number")return $=gf(""+$,se.mode,oe),$.return=se,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return oe=wl($.type,$.key,$.props,null,se.mode,oe),oe.ref=Ha(se,null,$),oe.return=se,oe;case N:return $=vf($,se.mode,oe),$.return=se,$;case le:var Ie=$._init;return Re(se,Ie($._payload),oe)}if(Ht($)||q($))return $=ls($,se.mode,oe,null),$.return=se,$;el(se,$)}return null}function Me(se,$,oe,Ie){var nt=$!==null?$.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return nt!==null?null:O(se,$,""+oe,Ie);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case D:return oe.key===nt?V(se,$,oe,Ie):null;case N:return oe.key===nt?ue(se,$,oe,Ie):null;case le:return nt=oe._init,Me(se,$,nt(oe._payload),Ie)}if(Ht(oe)||q(oe))return nt!==null?null:Te(se,$,oe,Ie,null);el(se,oe)}return null}function We(se,$,oe,Ie,nt){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return se=se.get(oe)||null,O($,se,""+Ie,nt);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case D:return se=se.get(Ie.key===null?oe:Ie.key)||null,V($,se,Ie,nt);case N:return se=se.get(Ie.key===null?oe:Ie.key)||null,ue($,se,Ie,nt);case le:var st=Ie._init;return We(se,$,oe,st(Ie._payload),nt)}if(Ht(Ie)||q(Ie))return se=se.get(oe)||null,Te($,se,Ie,nt,null);el($,Ie)}return null}function Je(se,$,oe,Ie){for(var nt=null,st=null,at=$,ft=$=0,Cn=null;at!==null&&ft<oe.length;ft++){at.index>ft?(Cn=at,at=null):Cn=at.sibling;var Pt=Me(se,at,oe[ft],Ie);if(Pt===null){at===null&&(at=Cn);break}n&&at&&Pt.alternate===null&&r(se,at),$=g(Pt,$,ft),st===null?nt=Pt:st.sibling=Pt,st=Pt,at=Cn}if(ft===oe.length)return l(se,at),tn&&es(se,ft),nt;if(at===null){for(;ft<oe.length;ft++)at=Re(se,oe[ft],Ie),at!==null&&($=g(at,$,ft),st===null?nt=at:st.sibling=at,st=at);return tn&&es(se,ft),nt}for(at=c(se,at);ft<oe.length;ft++)Cn=We(at,se,ft,oe[ft],Ie),Cn!==null&&(n&&Cn.alternate!==null&&at.delete(Cn.key===null?ft:Cn.key),$=g(Cn,$,ft),st===null?nt=Cn:st.sibling=Cn,st=Cn);return n&&at.forEach(function(kr){return r(se,kr)}),tn&&es(se,ft),nt}function et(se,$,oe,Ie){var nt=q(oe);if(typeof nt!="function")throw Error(t(150));if(oe=nt.call(oe),oe==null)throw Error(t(151));for(var st=nt=null,at=$,ft=$=0,Cn=null,Pt=oe.next();at!==null&&!Pt.done;ft++,Pt=oe.next()){at.index>ft?(Cn=at,at=null):Cn=at.sibling;var kr=Me(se,at,Pt.value,Ie);if(kr===null){at===null&&(at=Cn);break}n&&at&&kr.alternate===null&&r(se,at),$=g(kr,$,ft),st===null?nt=kr:st.sibling=kr,st=kr,at=Cn}if(Pt.done)return l(se,at),tn&&es(se,ft),nt;if(at===null){for(;!Pt.done;ft++,Pt=oe.next())Pt=Re(se,Pt.value,Ie),Pt!==null&&($=g(Pt,$,ft),st===null?nt=Pt:st.sibling=Pt,st=Pt);return tn&&es(se,ft),nt}for(at=c(se,at);!Pt.done;ft++,Pt=oe.next())Pt=We(at,se,ft,Pt.value,Ie),Pt!==null&&(n&&Pt.alternate!==null&&at.delete(Pt.key===null?ft:Pt.key),$=g(Pt,$,ft),st===null?nt=Pt:st.sibling=Pt,st=Pt);return n&&at.forEach(function(zx){return r(se,zx)}),tn&&es(se,ft),nt}function hn(se,$,oe,Ie){if(typeof oe=="object"&&oe!==null&&oe.type===M&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case D:e:{for(var nt=oe.key,st=$;st!==null;){if(st.key===nt){if(nt=oe.type,nt===M){if(st.tag===7){l(se,st.sibling),$=p(st,oe.props.children),$.return=se,se=$;break e}}else if(st.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===le&&Op(nt)===st.type){l(se,st.sibling),$=p(st,oe.props),$.ref=Ha(se,st,oe),$.return=se,se=$;break e}l(se,st);break}else r(se,st);st=st.sibling}oe.type===M?($=ls(oe.props.children,se.mode,Ie,oe.key),$.return=se,se=$):(Ie=wl(oe.type,oe.key,oe.props,null,se.mode,Ie),Ie.ref=Ha(se,$,oe),Ie.return=se,se=Ie)}return T(se);case N:e:{for(st=oe.key;$!==null;){if($.key===st)if($.tag===4&&$.stateNode.containerInfo===oe.containerInfo&&$.stateNode.implementation===oe.implementation){l(se,$.sibling),$=p($,oe.children||[]),$.return=se,se=$;break e}else{l(se,$);break}else r(se,$);$=$.sibling}$=vf(oe,se.mode,Ie),$.return=se,se=$}return T(se);case le:return st=oe._init,hn(se,$,st(oe._payload),Ie)}if(Ht(oe))return Je(se,$,oe,Ie);if(q(oe))return et(se,$,oe,Ie);el(se,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,$!==null&&$.tag===6?(l(se,$.sibling),$=p($,oe),$.return=se,se=$):(l(se,$),$=gf(oe,se.mode,Ie),$.return=se,se=$),T(se)):l(se,$)}return hn}var ks=kp(!0),Bp=kp(!1),tl=Rr(null),nl=null,Bs=null,Tc=null;function Ac(){Tc=Bs=nl=null}function Rc(n){var r=tl.current;Zt(tl),n._currentValue=r}function Cc(n,r,l){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===l)break;n=n.return}}function zs(n,r){nl=n,Tc=Bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(ei=!0),n.firstContext=null)}function Si(n){var r=n._currentValue;if(Tc!==n)if(n={context:n,memoizedValue:r,next:null},Bs===null){if(nl===null)throw Error(t(308));Bs=n,nl.dependencies={lanes:0,firstContext:n}}else Bs=Bs.next=n;return r}var ts=null;function bc(n){ts===null?ts=[n]:ts.push(n)}function zp(n,r,l,c){var p=r.interleaved;return p===null?(l.next=l,bc(r)):(l.next=p.next,p.next=l),r.interleaved=l,lr(n,c)}function lr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Pr=!1;function Pc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ur(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Lr(n,r,l){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ct&2)!==0){var p=c.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),c.pending=r,lr(n,l)}return p=c.interleaved,p===null?(r.next=r,bc(c)):(r.next=p.next,p.next=r),c.interleaved=r,lr(n,l)}function il(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,l|=c,r.lanes=l,gn(n,l)}}function Gp(n,r){var l=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?p=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?p=g=r:g=g.next=r}else p=g=r;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function rl(n,r,l,c){var p=n.updateQueue;Pr=!1;var g=p.firstBaseUpdate,T=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var V=O,ue=V.next;V.next=null,T===null?g=ue:T.next=ue,T=V;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,O=Te.lastBaseUpdate,O!==T&&(O===null?Te.firstBaseUpdate=ue:O.next=ue,Te.lastBaseUpdate=V))}if(g!==null){var Re=p.baseState;T=0,Te=ue=V=null,O=g;do{var Me=O.lane,We=O.eventTime;if((c&Me)===Me){Te!==null&&(Te=Te.next={eventTime:We,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Je=n,et=O;switch(Me=r,We=l,et.tag){case 1:if(Je=et.payload,typeof Je=="function"){Re=Je.call(We,Re,Me);break e}Re=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=et.payload,Me=typeof Je=="function"?Je.call(We,Re,Me):Je,Me==null)break e;Re=j({},Re,Me);break e;case 2:Pr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Me=p.effects,Me===null?p.effects=[O]:Me.push(O))}else We={eventTime:We,lane:Me,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Te===null?(ue=Te=We,V=Re):Te=Te.next=We,T|=Me;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;Me=O,O=Me.next,Me.next=null,p.lastBaseUpdate=Me,p.shared.pending=null}}while(!0);if(Te===null&&(V=Re),p.baseState=V,p.firstBaseUpdate=ue,p.lastBaseUpdate=Te,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else g===null&&(p.shared.lanes=0);rs|=T,n.lanes=T,n.memoizedState=Re}}function Vp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Ga={},$i=Rr(Ga),Va=Rr(Ga),Wa=Rr(Ga);function ns(n){if(n===Ga)throw Error(t(174));return n}function Lc(n,r){switch(qt(Wa,r),qt(Va,n),qt($i,Ga),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Nt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Nt(r,n)}Zt($i),qt($i,r)}function Hs(){Zt($i),Zt(Va),Zt(Wa)}function Wp(n){ns(Wa.current);var r=ns($i.current),l=Nt(r,n.type);r!==l&&(qt(Va,n),qt($i,l))}function Nc(n){Va.current===n&&(Zt($i),Zt(Va))}var sn=Rr(0);function sl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Dc=[];function Ic(){for(var n=0;n<Dc.length;n++)Dc[n]._workInProgressVersionPrimary=null;Dc.length=0}var al=C.ReactCurrentDispatcher,Uc=C.ReactCurrentBatchConfig,is=0,an=null,_n=null,An=null,ol=!1,Xa=!1,$a=0,lx=0;function Hn(){throw Error(t(321))}function Fc(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Pi(n[l],r[l]))return!1;return!0}function Oc(n,r,l,c,p,g){if(is=g,an=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,al.current=n===null||n.memoizedState===null?dx:hx,n=l(c,p),Xa){g=0;do{if(Xa=!1,$a=0,25<=g)throw Error(t(301));g+=1,An=_n=null,r.updateQueue=null,al.current=px,n=l(c,p)}while(Xa)}if(al.current=cl,r=_n!==null&&_n.next!==null,is=0,An=_n=an=null,ol=!1,r)throw Error(t(300));return n}function kc(){var n=$a!==0;return $a=0,n}function qi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?an.memoizedState=An=n:An=An.next=n,An}function yi(){if(_n===null){var n=an.alternate;n=n!==null?n.memoizedState:null}else n=_n.next;var r=An===null?an.memoizedState:An.next;if(r!==null)An=r,_n=n;else{if(n===null)throw Error(t(310));_n=n,n={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},An===null?an.memoizedState=An=n:An=An.next=n}return An}function qa(n,r){return typeof r=="function"?r(n):r}function Bc(n){var r=yi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=_n,p=c.baseQueue,g=l.pending;if(g!==null){if(p!==null){var T=p.next;p.next=g.next,g.next=T}c.baseQueue=p=g,l.pending=null}if(p!==null){g=p.next,c=c.baseState;var O=T=null,V=null,ue=g;do{var Te=ue.lane;if((is&Te)===Te)V!==null&&(V=V.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var Re={lane:Te,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};V===null?(O=V=Re,T=c):V=V.next=Re,an.lanes|=Te,rs|=Te}ue=ue.next}while(ue!==null&&ue!==g);V===null?T=c:V.next=O,Pi(c,r.memoizedState)||(ei=!0),r.memoizedState=c,r.baseState=T,r.baseQueue=V,l.lastRenderedState=c}if(n=l.interleaved,n!==null){p=n;do g=p.lane,an.lanes|=g,rs|=g,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function zc(n){var r=yi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=l.dispatch,p=l.pending,g=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do g=n(g,T.action),T=T.next;while(T!==p);Pi(g,r.memoizedState)||(ei=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),l.lastRenderedState=g}return[g,c]}function Xp(){}function $p(n,r){var l=an,c=yi(),p=r(),g=!Pi(c.memoizedState,p);if(g&&(c.memoizedState=p,ei=!0),c=c.queue,Hc(Kp.bind(null,l,c,n),[n]),c.getSnapshot!==r||g||An!==null&&An.memoizedState.tag&1){if(l.flags|=2048,Ya(9,Yp.bind(null,l,c,p,r),void 0,null),Rn===null)throw Error(t(349));(is&30)!==0||qp(l,r,p)}return p}function qp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=an.updateQueue,r===null?(r={lastEffect:null,stores:null},an.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Yp(n,r,l,c){r.value=l,r.getSnapshot=c,jp(r)&&Zp(n)}function Kp(n,r,l){return l(function(){jp(r)&&Zp(n)})}function jp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Pi(n,l)}catch{return!0}}function Zp(n){var r=lr(n,1);r!==null&&Ui(r,n,1,-1)}function Qp(n){var r=qi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},r.queue=n,n=n.dispatch=fx.bind(null,an,n),[r.memoizedState,n]}function Ya(n,r,l,c){return n={tag:n,create:r,destroy:l,deps:c,next:null},r=an.updateQueue,r===null?(r={lastEffect:null,stores:null},an.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(c=l.next,l.next=n,n.next=c,r.lastEffect=n)),n}function Jp(){return yi().memoizedState}function ll(n,r,l,c){var p=qi();an.flags|=n,p.memoizedState=Ya(1|r,l,void 0,c===void 0?null:c)}function ul(n,r,l,c){var p=yi();c=c===void 0?null:c;var g=void 0;if(_n!==null){var T=_n.memoizedState;if(g=T.destroy,c!==null&&Fc(c,T.deps)){p.memoizedState=Ya(r,l,g,c);return}}an.flags|=n,p.memoizedState=Ya(1|r,l,g,c)}function em(n,r){return ll(8390656,8,n,r)}function Hc(n,r){return ul(2048,8,n,r)}function tm(n,r){return ul(4,2,n,r)}function nm(n,r){return ul(4,4,n,r)}function im(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function rm(n,r,l){return l=l!=null?l.concat([n]):null,ul(4,4,im.bind(null,r,n),l)}function Gc(){}function sm(n,r){var l=yi();r=r===void 0?null:r;var c=l.memoizedState;return c!==null&&r!==null&&Fc(r,c[1])?c[0]:(l.memoizedState=[n,r],n)}function am(n,r){var l=yi();r=r===void 0?null:r;var c=l.memoizedState;return c!==null&&r!==null&&Fc(r,c[1])?c[0]:(n=n(),l.memoizedState=[n,r],n)}function om(n,r,l){return(is&21)===0?(n.baseState&&(n.baseState=!1,ei=!0),n.memoizedState=l):(Pi(l,r)||(l=Ot(),an.lanes|=l,rs|=l,n.baseState=!0),r)}function ux(n,r){var l=tt;tt=l!==0&&4>l?l:4,n(!0);var c=Uc.transition;Uc.transition={};try{n(!1),r()}finally{tt=l,Uc.transition=c}}function lm(){return yi().memoizedState}function cx(n,r,l){var c=Ur(n);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},um(n))cm(r,l);else if(l=zp(n,r,l,c),l!==null){var p=Kn();Ui(l,n,c,p),fm(l,r,c)}}function fx(n,r,l){var c=Ur(n),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(um(n))cm(r,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var T=r.lastRenderedState,O=g(T,l);if(p.hasEagerState=!0,p.eagerState=O,Pi(O,T)){var V=r.interleaved;V===null?(p.next=p,bc(r)):(p.next=V.next,V.next=p),r.interleaved=p;return}}catch{}finally{}l=zp(n,r,p,c),l!==null&&(p=Kn(),Ui(l,n,c,p),fm(l,r,c))}}function um(n){var r=n.alternate;return n===an||r!==null&&r===an}function cm(n,r){Xa=ol=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function fm(n,r,l){if((l&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,l|=c,r.lanes=l,gn(n,l)}}var cl={readContext:Si,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},dx={readContext:Si,useCallback:function(n,r){return qi().memoizedState=[n,r===void 0?null:r],n},useContext:Si,useEffect:em,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,ll(4194308,4,im.bind(null,r,n),l)},useLayoutEffect:function(n,r){return ll(4194308,4,n,r)},useInsertionEffect:function(n,r){return ll(4,2,n,r)},useMemo:function(n,r){var l=qi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var c=qi();return r=l!==void 0?l(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=cx.bind(null,an,n),[c.memoizedState,n]},useRef:function(n){var r=qi();return n={current:n},r.memoizedState=n},useState:Qp,useDebugValue:Gc,useDeferredValue:function(n){return qi().memoizedState=n},useTransition:function(){var n=Qp(!1),r=n[0];return n=ux.bind(null,n[1]),qi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var c=an,p=qi();if(tn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Rn===null)throw Error(t(349));(is&30)!==0||qp(c,r,l)}p.memoizedState=l;var g={value:l,getSnapshot:r};return p.queue=g,em(Kp.bind(null,c,g,n),[n]),c.flags|=2048,Ya(9,Yp.bind(null,c,g,l,r),void 0,null),l},useId:function(){var n=qi(),r=Rn.identifierPrefix;if(tn){var l=or,c=ar;l=(c&~(1<<32-J(c)-1)).toString(32)+l,r=":"+r+"R"+l,l=$a++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=lx++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},hx={readContext:Si,useCallback:sm,useContext:Si,useEffect:Hc,useImperativeHandle:rm,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:am,useReducer:Bc,useRef:Jp,useState:function(){return Bc(qa)},useDebugValue:Gc,useDeferredValue:function(n){var r=yi();return om(r,_n.memoizedState,n)},useTransition:function(){var n=Bc(qa)[0],r=yi().memoizedState;return[n,r]},useMutableSource:Xp,useSyncExternalStore:$p,useId:lm,unstable_isNewReconciler:!1},px={readContext:Si,useCallback:sm,useContext:Si,useEffect:Hc,useImperativeHandle:rm,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:am,useReducer:zc,useRef:Jp,useState:function(){return zc(qa)},useDebugValue:Gc,useDeferredValue:function(n){var r=yi();return _n===null?r.memoizedState=n:om(r,_n.memoizedState,n)},useTransition:function(){var n=zc(qa)[0],r=yi().memoizedState;return[n,r]},useMutableSource:Xp,useSyncExternalStore:$p,useId:lm,unstable_isNewReconciler:!1};function Ni(n,r){if(n&&n.defaultProps){r=j({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Vc(n,r,l,c){r=n.memoizedState,l=l(c,r),l=l==null?r:j({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var fl={isMounted:function(n){return(n=n._reactInternals)?rn(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var c=Kn(),p=Ur(n),g=ur(c,p);g.payload=r,l!=null&&(g.callback=l),r=Lr(n,g,p),r!==null&&(Ui(r,n,p,c),il(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var c=Kn(),p=Ur(n),g=ur(c,p);g.tag=1,g.payload=r,l!=null&&(g.callback=l),r=Lr(n,g,p),r!==null&&(Ui(r,n,p,c),il(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Kn(),c=Ur(n),p=ur(l,c);p.tag=2,r!=null&&(p.callback=r),r=Lr(n,p,c),r!==null&&(Ui(r,n,c,l),il(r,n,c))}};function dm(n,r,l,c,p,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):r.prototype&&r.prototype.isPureReactComponent?!Ia(l,c)||!Ia(p,g):!0}function hm(n,r,l){var c=!1,p=Cr,g=r.contextType;return typeof g=="object"&&g!==null?g=Si(g):(p=Jn(r)?Qr:zn.current,c=r.contextTypes,g=(c=c!=null)?Is(n,p):Cr),r=new r(l,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=fl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=g),r}function pm(n,r,l,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,c),r.state!==n&&fl.enqueueReplaceState(r,r.state,null)}function Wc(n,r,l,c){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Pc(n);var g=r.contextType;typeof g=="object"&&g!==null?p.context=Si(g):(g=Jn(r)?Qr:zn.current,p.context=Is(n,g)),p.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Vc(n,r,g,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&fl.enqueueReplaceState(p,p.state,null),rl(n,l,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,r){try{var l="",c=r;do l+=Se(c),c=c.return;while(c);var p=l}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:p,digest:null}}function Xc(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function $c(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var mx=typeof WeakMap=="function"?WeakMap:Map;function mm(n,r,l){l=ur(-1,l),l.tag=3,l.payload={element:null};var c=r.value;return l.callback=function(){_l||(_l=!0,lf=c),$c(n,r)},l}function gm(n,r,l){l=ur(-1,l),l.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=r.value;l.payload=function(){return c(p)},l.callback=function(){$c(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){$c(n,r),typeof c!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function vm(n,r,l){var c=n.pingCache;if(c===null){c=n.pingCache=new mx;var p=new Set;c.set(r,p)}else p=c.get(r),p===void 0&&(p=new Set,c.set(r,p));p.has(l)||(p.add(l),n=bx.bind(null,n,r,l),r.then(n,n))}function _m(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function xm(n,r,l,c,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=ur(-1,1),r.tag=2,Lr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var gx=C.ReactCurrentOwner,ei=!1;function Yn(n,r,l,c){r.child=n===null?Bp(r,null,l,c):ks(r,n.child,l,c)}function Sm(n,r,l,c,p){l=l.render;var g=r.ref;return zs(r,p),c=Oc(n,r,l,c,g,p),l=kc(),n!==null&&!ei?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,cr(n,r,p)):(tn&&l&&Sc(r),r.flags|=1,Yn(n,r,c,p),r.child)}function ym(n,r,l,c,p){if(n===null){var g=l.type;return typeof g=="function"&&!mf(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=g,Mm(n,r,g,c,p)):(n=wl(l.type,null,c,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&p)===0){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:Ia,l(T,c)&&n.ref===r.ref)return cr(n,r,p)}return r.flags|=1,n=Or(g,c),n.ref=r.ref,n.return=r,r.child=n}function Mm(n,r,l,c,p){if(n!==null){var g=n.memoizedProps;if(Ia(g,c)&&n.ref===r.ref)if(ei=!1,r.pendingProps=c=g,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ei=!0);else return r.lanes=n.lanes,cr(n,r,p)}return qc(n,r,l,c,p)}function Em(n,r,l){var c=r.pendingProps,p=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(Ws,fi),fi|=l;else{if((l&1073741824)===0)return n=g!==null?g.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qt(Ws,fi),fi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:l,qt(Ws,fi),fi|=c}else g!==null?(c=g.baseLanes|l,r.memoizedState=null):c=l,qt(Ws,fi),fi|=c;return Yn(n,r,p,l),r.child}function wm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function qc(n,r,l,c,p){var g=Jn(l)?Qr:zn.current;return g=Is(r,g),zs(r,p),l=Oc(n,r,l,c,g,p),c=kc(),n!==null&&!ei?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,cr(n,r,p)):(tn&&c&&Sc(r),r.flags|=1,Yn(n,r,l,p),r.child)}function Tm(n,r,l,c,p){if(Jn(l)){var g=!0;Ko(r)}else g=!1;if(zs(r,p),r.stateNode===null)hl(n,r),hm(r,l,c),Wc(r,l,c,p),c=!0;else if(n===null){var T=r.stateNode,O=r.memoizedProps;T.props=O;var V=T.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=Si(ue):(ue=Jn(l)?Qr:zn.current,ue=Is(r,ue));var Te=l.getDerivedStateFromProps,Re=typeof Te=="function"||typeof T.getSnapshotBeforeUpdate=="function";Re||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==c||V!==ue)&&pm(r,T,c,ue),Pr=!1;var Me=r.memoizedState;T.state=Me,rl(r,c,T,p),V=r.memoizedState,O!==c||Me!==V||Qn.current||Pr?(typeof Te=="function"&&(Vc(r,l,Te,c),V=r.memoizedState),(O=Pr||dm(r,l,O,c,Me,V,ue))?(Re||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=V),T.props=c,T.state=V,T.context=ue,c=O):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{T=r.stateNode,Hp(n,r),O=r.memoizedProps,ue=r.type===r.elementType?O:Ni(r.type,O),T.props=ue,Re=r.pendingProps,Me=T.context,V=l.contextType,typeof V=="object"&&V!==null?V=Si(V):(V=Jn(l)?Qr:zn.current,V=Is(r,V));var We=l.getDerivedStateFromProps;(Te=typeof We=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==Re||Me!==V)&&pm(r,T,c,V),Pr=!1,Me=r.memoizedState,T.state=Me,rl(r,c,T,p);var Je=r.memoizedState;O!==Re||Me!==Je||Qn.current||Pr?(typeof We=="function"&&(Vc(r,l,We,c),Je=r.memoizedState),(ue=Pr||dm(r,l,ue,c,Me,Je,V)||!1)?(Te||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Je,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Je,V)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Me===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Je),T.props=c,T.state=Je,T.context=V,c=ue):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Me===n.memoizedState||(r.flags|=1024),c=!1)}return Yc(n,r,l,c,g,p)}function Yc(n,r,l,c,p,g){wm(n,r);var T=(r.flags&128)!==0;if(!c&&!T)return p&&Pp(r,l,!1),cr(n,r,g);c=r.stateNode,gx.current=r;var O=T&&typeof l.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&T?(r.child=ks(r,n.child,null,g),r.child=ks(r,null,O,g)):Yn(n,r,O,g),r.memoizedState=c.state,p&&Pp(r,l,!0),r.child}function Am(n){var r=n.stateNode;r.pendingContext?Cp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Cp(n,r.context,!1),Lc(n,r.containerInfo)}function Rm(n,r,l,c,p){return Os(),wc(p),r.flags|=256,Yn(n,r,l,c),r.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function jc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cm(n,r,l){var c=r.pendingProps,p=sn.current,g=!1,T=(r.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(p&2)!==0),O?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),qt(sn,p&1),n===null)return Ec(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=c.children,n=c.fallback,g?(c=r.mode,g=r.child,T={mode:"hidden",children:T},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=Tl(T,c,0,null),n=ls(n,c,l,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=jc(l),r.memoizedState=Kc,n):Zc(r,T));if(p=n.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return vx(n,r,T,c,O,p,l);if(g){g=c.fallback,T=r.mode,p=n.child,O=p.sibling;var V={mode:"hidden",children:c.children};return(T&1)===0&&r.child!==p?(c=r.child,c.childLanes=0,c.pendingProps=V,r.deletions=null):(c=Or(p,V),c.subtreeFlags=p.subtreeFlags&14680064),O!==null?g=Or(O,g):(g=ls(g,T,l,null),g.flags|=2),g.return=r,c.return=r,c.sibling=g,r.child=c,c=g,g=r.child,T=n.child.memoizedState,T=T===null?jc(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~l,r.memoizedState=Kc,c}return g=n.child,n=g.sibling,c=Or(g,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=l),c.return=r,c.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=c,r.memoizedState=null,c}function Zc(n,r){return r=Tl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function dl(n,r,l,c){return c!==null&&wc(c),ks(r,n.child,null,l),n=Zc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function vx(n,r,l,c,p,g,T){if(l)return r.flags&256?(r.flags&=-257,c=Xc(Error(t(422))),dl(n,r,T,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=c.fallback,p=r.mode,c=Tl({mode:"visible",children:c.children},p,0,null),g=ls(g,p,T,null),g.flags|=2,c.return=r,g.return=r,c.sibling=g,r.child=c,(r.mode&1)!==0&&ks(r,n.child,null,T),r.child.memoizedState=jc(T),r.memoizedState=Kc,g);if((r.mode&1)===0)return dl(n,r,T,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var O=c.dgst;return c=O,g=Error(t(419)),c=Xc(g,c,void 0),dl(n,r,T,c)}if(O=(T&n.childLanes)!==0,ei||O){if(c=Rn,c!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|T))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,lr(n,p),Ui(c,n,p,-1))}return pf(),c=Xc(Error(t(421))),dl(n,r,T,c)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Px.bind(null,n),p._reactRetry=r,null):(n=g.treeContext,ci=Ar(p.nextSibling),ui=r,tn=!0,Li=null,n!==null&&(_i[xi++]=ar,_i[xi++]=or,_i[xi++]=Jr,ar=n.id,or=n.overflow,Jr=r),r=Zc(r,c.children),r.flags|=4096,r)}function bm(n,r,l){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Cc(n.return,r,l)}function Qc(n,r,l,c,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=p)}function Pm(n,r,l){var c=r.pendingProps,p=c.revealOrder,g=c.tail;if(Yn(n,r,c.children,l),c=sn.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bm(n,l,r);else if(n.tag===19)bm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qt(sn,c),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&sl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Qc(r,!1,p,l,g);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&sl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Qc(r,!0,l,null,g);break;case"together":Qc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function cr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),rs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Or(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Or(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function _x(n,r,l){switch(r.tag){case 3:Am(r),Os();break;case 5:Wp(r);break;case 1:Jn(r.type)&&Ko(r);break;case 4:Lc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,p=r.memoizedProps.value;qt(tl,c._currentValue),c._currentValue=p;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qt(sn,sn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Cm(n,r,l):(qt(sn,sn.current&1),n=cr(n,r,l),n!==null?n.sibling:null);qt(sn,sn.current&1);break;case 19:if(c=(l&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Pm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),qt(sn,sn.current),c)break;return null;case 22:case 23:return r.lanes=0,Em(n,r,l)}return cr(n,r,l)}var Lm,Jc,Nm,Dm;Lm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Jc=function(){},Nm=function(n,r,l,c){var p=n.memoizedProps;if(p!==c){n=r.stateNode,ns($i.current);var g=null;switch(l){case"input":p=pt(n,p),c=pt(n,c),g=[];break;case"select":p=j({},p,{value:void 0}),c=j({},c,{value:void 0}),g=[];break;case"textarea":p=nn(n,p),c=nn(n,c),g=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=$o)}ge(l,c);var T;l=null;for(ue in p)if(!c.hasOwnProperty(ue)&&p.hasOwnProperty(ue)&&p[ue]!=null)if(ue==="style"){var O=p[ue];for(T in O)O.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?g||(g=[]):(g=g||[]).push(ue,null));for(ue in c){var V=c[ue];if(O=p?.[ue],c.hasOwnProperty(ue)&&V!==O&&(V!=null||O!=null))if(ue==="style")if(O){for(T in O)!O.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in V)V.hasOwnProperty(T)&&O[T]!==V[T]&&(l||(l={}),l[T]=V[T])}else l||(g||(g=[]),g.push(ue,l)),l=V;else ue==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(g=g||[]).push(ue,V)):ue==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(ue,""+V):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(V!=null&&ue==="onScroll"&&jt("scroll",n),g||O===V||(g=[])):(g=g||[]).push(ue,V))}l&&(g=g||[]).push("style",l);var ue=g;(r.updateQueue=ue)&&(r.flags|=4)}},Dm=function(n,r,l,c){l!==c&&(r.flags|=4)};function Ka(n,r){if(!tn)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Gn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,c=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=l,r}function xx(n,r,l){var c=r.pendingProps;switch(yc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gn(r),null;case 1:return Jn(r.type)&&Yo(),Gn(r),null;case 3:return c=r.stateNode,Hs(),Zt(Qn),Zt(zn),Ic(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Jo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Li!==null&&(ff(Li),Li=null))),Jc(n,r),Gn(r),null;case 5:Nc(r);var p=ns(Wa.current);if(l=r.type,n!==null&&r.stateNode!=null)Nm(n,r,l,c,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Gn(r),null}if(n=ns($i.current),Jo(r)){c=r.stateNode,l=r.type;var g=r.memoizedProps;switch(c[Xi]=r,c[Ba]=g,n=(r.mode&1)!==0,l){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(p=0;p<Fa.length;p++)jt(Fa[p],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":Xt(c,g),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},jt("invalid",c);break;case"textarea":ln(c,g),jt("invalid",c)}ge(l,g),p=null;for(var T in g)if(g.hasOwnProperty(T)){var O=g[T];T==="children"?typeof O=="string"?c.textContent!==O&&(g.suppressHydrationWarning!==!0&&Xo(c.textContent,O,n),p=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&Xo(c.textContent,O,n),p=["children",""+O]):a.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&jt("scroll",c)}switch(l){case"input":it(c),Ft(c,g,!0);break;case"textarea":it(c),En(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=$o)}c=p,r.updateQueue=c,c!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=It(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(l,{is:c.is}):(n=T.createElement(l),l==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,l),n[Xi]=r,n[Ba]=c,Lm(n,r,!1,!1),r.stateNode=n;e:{switch(T=De(l,c),l){case"dialog":jt("cancel",n),jt("close",n),p=c;break;case"iframe":case"object":case"embed":jt("load",n),p=c;break;case"video":case"audio":for(p=0;p<Fa.length;p++)jt(Fa[p],n);p=c;break;case"source":jt("error",n),p=c;break;case"img":case"image":case"link":jt("error",n),jt("load",n),p=c;break;case"details":jt("toggle",n),p=c;break;case"input":Xt(n,c),p=pt(n,c),jt("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=j({},c,{value:void 0}),jt("invalid",n);break;case"textarea":ln(n,c),p=nn(n,c),jt("invalid",n);break;default:p=c}ge(l,p),O=p;for(g in O)if(O.hasOwnProperty(g)){var V=O[g];g==="style"?ee(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Qt(n,V)):g==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&Ze(n,V):typeof V=="number"&&Ze(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?V!=null&&g==="onScroll"&&jt("scroll",n):V!=null&&L(n,g,V,T))}switch(l){case"input":it(n),Ft(n,c,!1);break;case"textarea":it(n),En(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?$t(n,!!c.multiple,g,!1):c.defaultValue!=null&&$t(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=$o)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Gn(r),null;case 6:if(n&&r.stateNode!=null)Dm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(l=ns(Wa.current),ns($i.current),Jo(r)){if(c=r.stateNode,l=r.memoizedProps,c[Xi]=r,(g=c.nodeValue!==l)&&(n=ui,n!==null))switch(n.tag){case 3:Xo(c.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xo(c.nodeValue,l,(n.mode&1)!==0)}g&&(r.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[Xi]=r,r.stateNode=c}return Gn(r),null;case 13:if(Zt(sn),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tn&&ci!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Fp(),Os(),r.flags|=98560,g=!1;else if(g=Jo(r),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Xi]=r}else Os(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Gn(r),g=!1}else Li!==null&&(ff(Li),Li=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(sn.current&1)!==0?xn===0&&(xn=3):pf())),r.updateQueue!==null&&(r.flags|=4),Gn(r),null);case 4:return Hs(),Jc(n,r),n===null&&Oa(r.stateNode.containerInfo),Gn(r),null;case 10:return Rc(r.type._context),Gn(r),null;case 17:return Jn(r.type)&&Yo(),Gn(r),null;case 19:if(Zt(sn),g=r.memoizedState,g===null)return Gn(r),null;if(c=(r.flags&128)!==0,T=g.rendering,T===null)if(c)Ka(g,!1);else{if(xn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=sl(n),T!==null){for(r.flags|=128,Ka(g,!1),c=T.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=l,l=r.child;l!==null;)g=l,n=c,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return qt(sn,sn.current&1|2),r.child}n=n.sibling}g.tail!==null&&Jt()>Xs&&(r.flags|=128,c=!0,Ka(g,!1),r.lanes=4194304)}else{if(!c)if(n=sl(T),n!==null){if(r.flags|=128,c=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Ka(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!tn)return Gn(r),null}else 2*Jt()-g.renderingStartTime>Xs&&l!==1073741824&&(r.flags|=128,c=!0,Ka(g,!1),r.lanes=4194304);g.isBackwards?(T.sibling=r.child,r.child=T):(l=g.last,l!==null?l.sibling=T:r.child=T,g.last=T)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Jt(),r.sibling=null,l=sn.current,qt(sn,c?l&1|2:l&1),r):(Gn(r),null);case 22:case 23:return hf(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(fi&1073741824)!==0&&(Gn(r),r.subtreeFlags&6&&(r.flags|=8192)):Gn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Sx(n,r){switch(yc(r),r.tag){case 1:return Jn(r.type)&&Yo(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Hs(),Zt(Qn),Zt(zn),Ic(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Nc(r),null;case 13:if(Zt(sn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Os()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Zt(sn),null;case 4:return Hs(),null;case 10:return Rc(r.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var pl=!1,Vn=!1,yx=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Vs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){cn(n,r,c)}else l.current=null}function ef(n,r,l){try{l()}catch(c){cn(n,r,c)}}var Im=!1;function Mx(n,r){if(dc=Io,n=dp(),rc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,O=-1,V=-1,ue=0,Te=0,Re=n,Me=null;t:for(;;){for(var We;Re!==l||p!==0&&Re.nodeType!==3||(O=T+p),Re!==g||c!==0&&Re.nodeType!==3||(V=T+c),Re.nodeType===3&&(T+=Re.nodeValue.length),(We=Re.firstChild)!==null;)Me=Re,Re=We;for(;;){if(Re===n)break t;if(Me===l&&++ue===p&&(O=T),Me===g&&++Te===c&&(V=T),(We=Re.nextSibling)!==null)break;Re=Me,Me=Re.parentNode}Re=We}l=O===-1||V===-1?null:{start:O,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(hc={focusedElem:n,selectionRange:l},Io=!1,$e=r;$e!==null;)if(r=$e,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,$e=n;else for(;$e!==null;){r=$e;try{var Je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var et=Je.memoizedProps,hn=Je.memoizedState,se=r.stateNode,$=se.getSnapshotBeforeUpdate(r.elementType===r.type?et:Ni(r.type,et),hn);se.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var oe=r.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){cn(r,r.return,Ie)}if(n=r.sibling,n!==null){n.return=r.return,$e=n;break}$e=r.return}return Je=Im,Im=!1,Je}function ja(n,r,l){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var g=p.destroy;p.destroy=void 0,g!==void 0&&ef(r,l,g)}p=p.next}while(p!==c)}}function ml(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var c=l.create;l.destroy=c()}l=l.next}while(l!==r)}}function tf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Um(n){var r=n.alternate;r!==null&&(n.alternate=null,Um(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Xi],delete r[Ba],delete r[vc],delete r[rx],delete r[sx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fm(n){return n.tag===5||n.tag===3||n.tag===4}function Om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nf(n,r,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=$o));else if(c!==4&&(n=n.child,n!==null))for(nf(n,r,l),n=n.sibling;n!==null;)nf(n,r,l),n=n.sibling}function rf(n,r,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(rf(n,r,l),n=n.sibling;n!==null;)rf(n,r,l),n=n.sibling}var In=null,Di=!1;function Nr(n,r,l){for(l=l.child;l!==null;)km(n,r,l),l=l.sibling}function km(n,r,l){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(H,l)}catch{}switch(l.tag){case 5:Vn||Vs(l,r);case 6:var c=In,p=Di;In=null,Nr(n,r,l),In=c,Di=p,In!==null&&(Di?(n=In,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):In.removeChild(l.stateNode));break;case 18:In!==null&&(Di?(n=In,l=l.stateNode,n.nodeType===8?gc(n.parentNode,l):n.nodeType===1&&gc(n,l),Ca(n)):gc(In,l.stateNode));break;case 4:c=In,p=Di,In=l.stateNode.containerInfo,Di=!0,Nr(n,r,l),In=c,Di=p;break;case 0:case 11:case 14:case 15:if(!Vn&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var g=p,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&ef(l,r,T),p=p.next}while(p!==c)}Nr(n,r,l);break;case 1:if(!Vn&&(Vs(l,r),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(O){cn(l,r,O)}Nr(n,r,l);break;case 21:Nr(n,r,l);break;case 22:l.mode&1?(Vn=(c=Vn)||l.memoizedState!==null,Nr(n,r,l),Vn=c):Nr(n,r,l);break;default:Nr(n,r,l)}}function Bm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new yx),r.forEach(function(c){var p=Lx.bind(null,n,c);l.has(c)||(l.add(c),c.then(p,p))})}}function Ii(n,r){var l=r.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var g=n,T=r,O=T;e:for(;O!==null;){switch(O.tag){case 5:In=O.stateNode,Di=!1;break e;case 3:In=O.stateNode.containerInfo,Di=!0;break e;case 4:In=O.stateNode.containerInfo,Di=!0;break e}O=O.return}if(In===null)throw Error(t(160));km(g,T,p),In=null,Di=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(ue){cn(p,r,ue)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)zm(r,n),r=r.sibling}function zm(n,r){var l=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ii(r,n),Yi(n),c&4){try{ja(3,n,n.return),ml(3,n)}catch(et){cn(n,n.return,et)}try{ja(5,n,n.return)}catch(et){cn(n,n.return,et)}}break;case 1:Ii(r,n),Yi(n),c&512&&l!==null&&Vs(l,l.return);break;case 5:if(Ii(r,n),Yi(n),c&512&&l!==null&&Vs(l,l.return),n.flags&32){var p=n.stateNode;try{Ze(p,"")}catch(et){cn(n,n.return,et)}}if(c&4&&(p=n.stateNode,p!=null)){var g=n.memoizedProps,T=l!==null?l.memoizedProps:g,O=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&Yt(p,g),De(O,T);var ue=De(O,g);for(T=0;T<V.length;T+=2){var Te=V[T],Re=V[T+1];Te==="style"?ee(p,Re):Te==="dangerouslySetInnerHTML"?Qt(p,Re):Te==="children"?Ze(p,Re):L(p,Te,Re,ue)}switch(O){case"input":fn(p,g);break;case"textarea":X(p,g);break;case"select":var Me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var We=g.value;We!=null?$t(p,!!g.multiple,We,!1):Me!==!!g.multiple&&(g.defaultValue!=null?$t(p,!!g.multiple,g.defaultValue,!0):$t(p,!!g.multiple,g.multiple?[]:"",!1))}p[Ba]=g}catch(et){cn(n,n.return,et)}}break;case 6:if(Ii(r,n),Yi(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,g=n.memoizedProps;try{p.nodeValue=g}catch(et){cn(n,n.return,et)}}break;case 3:if(Ii(r,n),Yi(n),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Ca(r.containerInfo)}catch(et){cn(n,n.return,et)}break;case 4:Ii(r,n),Yi(n);break;case 13:Ii(r,n),Yi(n),p=n.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(of=Jt())),c&4&&Bm(n);break;case 22:if(Te=l!==null&&l.memoizedState!==null,n.mode&1?(Vn=(ue=Vn)||Te,Ii(r,n),Vn=ue):Ii(r,n),Yi(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!Te&&(n.mode&1)!==0)for($e=n,Te=n.child;Te!==null;){for(Re=$e=Te;$e!==null;){switch(Me=$e,We=Me.child,Me.tag){case 0:case 11:case 14:case 15:ja(4,Me,Me.return);break;case 1:Vs(Me,Me.return);var Je=Me.stateNode;if(typeof Je.componentWillUnmount=="function"){c=Me,l=Me.return;try{r=c,Je.props=r.memoizedProps,Je.state=r.memoizedState,Je.componentWillUnmount()}catch(et){cn(c,l,et)}}break;case 5:Vs(Me,Me.return);break;case 22:if(Me.memoizedState!==null){Vm(Re);continue}}We!==null?(We.return=Me,$e=We):Vm(Re)}Te=Te.sibling}e:for(Te=null,Re=n;;){if(Re.tag===5){if(Te===null){Te=Re;try{p=Re.stateNode,ue?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=Re.stateNode,V=Re.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=A("display",T))}catch(et){cn(n,n.return,et)}}}else if(Re.tag===6){if(Te===null)try{Re.stateNode.nodeValue=ue?"":Re.memoizedProps}catch(et){cn(n,n.return,et)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;Te===Re&&(Te=null),Re=Re.return}Te===Re&&(Te=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Ii(r,n),Yi(n),c&4&&Bm(n);break;case 21:break;default:Ii(r,n),Yi(n)}}function Yi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Fm(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(Ze(p,""),c.flags&=-33);var g=Om(n);rf(n,g,p);break;case 3:case 4:var T=c.stateNode.containerInfo,O=Om(n);nf(n,O,T);break;default:throw Error(t(161))}}catch(V){cn(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Ex(n,r,l){$e=n,Hm(n)}function Hm(n,r,l){for(var c=(n.mode&1)!==0;$e!==null;){var p=$e,g=p.child;if(p.tag===22&&c){var T=p.memoizedState!==null||pl;if(!T){var O=p.alternate,V=O!==null&&O.memoizedState!==null||Vn;O=pl;var ue=Vn;if(pl=T,(Vn=V)&&!ue)for($e=p;$e!==null;)T=$e,V=T.child,T.tag===22&&T.memoizedState!==null?Wm(p):V!==null?(V.return=T,$e=V):Wm(p);for(;g!==null;)$e=g,Hm(g),g=g.sibling;$e=p,pl=O,Vn=ue}Gm(n)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,$e=g):Gm(n)}}function Gm(n){for(;$e!==null;){var r=$e;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Vn||ml(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Vn)if(l===null)c.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Ni(r.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Vp(r,g,c);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Vp(r,T,l)}break;case 5:var O=r.stateNode;if(l===null&&r.flags&4){l=O;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ue=r.alternate;if(ue!==null){var Te=ue.memoizedState;if(Te!==null){var Re=Te.dehydrated;Re!==null&&Ca(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vn||r.flags&512&&tf(r)}catch(Me){cn(r,r.return,Me)}}if(r===n){$e=null;break}if(l=r.sibling,l!==null){l.return=r.return,$e=l;break}$e=r.return}}function Vm(n){for(;$e!==null;){var r=$e;if(r===n){$e=null;break}var l=r.sibling;if(l!==null){l.return=r.return,$e=l;break}$e=r.return}}function Wm(n){for(;$e!==null;){var r=$e;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{ml(4,r)}catch(V){cn(r,l,V)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var p=r.return;try{c.componentDidMount()}catch(V){cn(r,p,V)}}var g=r.return;try{tf(r)}catch(V){cn(r,g,V)}break;case 5:var T=r.return;try{tf(r)}catch(V){cn(r,T,V)}}}catch(V){cn(r,r.return,V)}if(r===n){$e=null;break}var O=r.sibling;if(O!==null){O.return=r.return,$e=O;break}$e=r.return}}var wx=Math.ceil,gl=C.ReactCurrentDispatcher,sf=C.ReactCurrentOwner,Mi=C.ReactCurrentBatchConfig,Ct=0,Rn=null,pn=null,Un=0,fi=0,Ws=Rr(0),xn=0,Za=null,rs=0,vl=0,af=0,Qa=null,ti=null,of=0,Xs=1/0,fr=null,_l=!1,lf=null,Dr=null,xl=!1,Ir=null,Sl=0,Ja=0,uf=null,yl=-1,Ml=0;function Kn(){return(Ct&6)!==0?Jt():yl!==-1?yl:yl=Jt()}function Ur(n){return(n.mode&1)===0?1:(Ct&2)!==0&&Un!==0?Un&-Un:ox.transition!==null?(Ml===0&&(Ml=Ot()),Ml):(n=tt,n!==0||(n=window.event,n=n===void 0?16:$h(n.type)),n)}function Ui(n,r,l,c){if(50<Ja)throw Ja=0,uf=null,Error(t(185));un(n,l,c),((Ct&2)===0||n!==Rn)&&(n===Rn&&((Ct&2)===0&&(vl|=l),xn===4&&Fr(n,Un)),ni(n,c),l===1&&Ct===0&&(r.mode&1)===0&&(Xs=Jt()+500,jo&&br()))}function ni(n,r){var l=n.callbackNode;St(n,r);var c=gt(n,n===Rn?Un:0);if(c===0)l!==null&&Ci(l),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(l!=null&&Ci(l),r===1)n.tag===0?ax($m.bind(null,n)):Lp($m.bind(null,n)),nx(function(){(Ct&6)===0&&br()}),l=null;else{switch(Vi(c)){case 1:l=wa;break;case 4:l=Lo;break;case 16:l=ws;break;case 536870912:l=b;break;default:l=ws}l=eg(l,Xm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Xm(n,r){if(yl=-1,Ml=0,(Ct&6)!==0)throw Error(t(327));var l=n.callbackNode;if($s()&&n.callbackNode!==l)return null;var c=gt(n,n===Rn?Un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=El(n,c);else{r=c;var p=Ct;Ct|=2;var g=Ym();(Rn!==n||Un!==r)&&(fr=null,Xs=Jt()+500,as(n,r));do try{Rx();break}catch(O){qm(n,O)}while(!0);Ac(),gl.current=g,Ct=p,pn!==null?r=0:(Rn=null,Un=0,r=xn)}if(r!==0){if(r===2&&(p=en(n),p!==0&&(c=p,r=cf(n,p))),r===1)throw l=Za,as(n,0),Fr(n,c),ni(n,Jt()),l;if(r===6)Fr(n,c);else{if(p=n.current.alternate,(c&30)===0&&!Tx(p)&&(r=El(n,c),r===2&&(g=en(n),g!==0&&(c=g,r=cf(n,g))),r===1))throw l=Za,as(n,0),Fr(n,c),ni(n,Jt()),l;switch(n.finishedWork=p,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:os(n,ti,fr);break;case 3:if(Fr(n,c),(c&130023424)===c&&(r=of+500-Jt(),10<r)){if(gt(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){Kn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=mc(os.bind(null,n,ti,fr),r);break}os(n,ti,fr);break;case 4:if(Fr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,p=-1;0<c;){var T=31-J(c);g=1<<T,T=r[T],T>p&&(p=T),c&=~g}if(c=p,c=Jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*wx(c/1960))-c,10<c){n.timeoutHandle=mc(os.bind(null,n,ti,fr),c);break}os(n,ti,fr);break;case 5:os(n,ti,fr);break;default:throw Error(t(329))}}}return ni(n,Jt()),n.callbackNode===l?Xm.bind(null,n):null}function cf(n,r){var l=Qa;return n.current.memoizedState.isDehydrated&&(as(n,r).flags|=256),n=El(n,r),n!==2&&(r=ti,ti=l,r!==null&&ff(r)),n}function ff(n){ti===null?ti=n:ti.push.apply(ti,n)}function Tx(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],g=p.getSnapshot;p=p.value;try{if(!Pi(g(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Fr(n,r){for(r&=~af,r&=~vl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-J(r),c=1<<l;n[l]=-1,r&=~c}}function $m(n){if((Ct&6)!==0)throw Error(t(327));$s();var r=gt(n,0);if((r&1)===0)return ni(n,Jt()),null;var l=El(n,r);if(n.tag!==0&&l===2){var c=en(n);c!==0&&(r=c,l=cf(n,c))}if(l===1)throw l=Za,as(n,0),Fr(n,r),ni(n,Jt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,os(n,ti,fr),ni(n,Jt()),null}function df(n,r){var l=Ct;Ct|=1;try{return n(r)}finally{Ct=l,Ct===0&&(Xs=Jt()+500,jo&&br())}}function ss(n){Ir!==null&&Ir.tag===0&&(Ct&6)===0&&$s();var r=Ct;Ct|=1;var l=Mi.transition,c=tt;try{if(Mi.transition=null,tt=1,n)return n()}finally{tt=c,Mi.transition=l,Ct=r,(Ct&6)===0&&br()}}function hf(){fi=Ws.current,Zt(Ws)}function as(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,tx(l)),pn!==null)for(l=pn.return;l!==null;){var c=l;switch(yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Yo();break;case 3:Hs(),Zt(Qn),Zt(zn),Ic();break;case 5:Nc(c);break;case 4:Hs();break;case 13:Zt(sn);break;case 19:Zt(sn);break;case 10:Rc(c.type._context);break;case 22:case 23:hf()}l=l.return}if(Rn=n,pn=n=Or(n.current,null),Un=fi=r,xn=0,Za=null,af=vl=rs=0,ti=Qa=null,ts!==null){for(r=0;r<ts.length;r++)if(l=ts[r],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,g=l.pending;if(g!==null){var T=g.next;g.next=p,c.next=T}l.pending=c}ts=null}return n}function qm(n,r){do{var l=pn;try{if(Ac(),al.current=cl,ol){for(var c=an.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}ol=!1}if(is=0,An=_n=an=null,Xa=!1,$a=0,sf.current=null,l===null||l.return===null){xn=1,Za=r,pn=null;break}e:{var g=n,T=l.return,O=l,V=r;if(r=Un,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ue=V,Te=O,Re=Te.tag;if((Te.mode&1)===0&&(Re===0||Re===11||Re===15)){var Me=Te.alternate;Me?(Te.updateQueue=Me.updateQueue,Te.memoizedState=Me.memoizedState,Te.lanes=Me.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var We=_m(T);if(We!==null){We.flags&=-257,xm(We,T,O,g,r),We.mode&1&&vm(g,ue,r),r=We,V=ue;var Je=r.updateQueue;if(Je===null){var et=new Set;et.add(V),r.updateQueue=et}else Je.add(V);break e}else{if((r&1)===0){vm(g,ue,r),pf();break e}V=Error(t(426))}}else if(tn&&O.mode&1){var hn=_m(T);if(hn!==null){(hn.flags&65536)===0&&(hn.flags|=256),xm(hn,T,O,g,r),wc(Gs(V,O));break e}}g=V=Gs(V,O),xn!==4&&(xn=2),Qa===null?Qa=[g]:Qa.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var se=mm(g,V,r);Gp(g,se);break e;case 1:O=V;var $=g.type,oe=g.stateNode;if((g.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(Dr===null||!Dr.has(oe)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ie=gm(g,O,r);Gp(g,Ie);break e}}g=g.return}while(g!==null)}jm(l)}catch(nt){r=nt,pn===l&&l!==null&&(pn=l=l.return);continue}break}while(!0)}function Ym(){var n=gl.current;return gl.current=cl,n===null?cl:n}function pf(){(xn===0||xn===3||xn===2)&&(xn=4),Rn===null||(rs&268435455)===0&&(vl&268435455)===0||Fr(Rn,Un)}function El(n,r){var l=Ct;Ct|=2;var c=Ym();(Rn!==n||Un!==r)&&(fr=null,as(n,r));do try{Ax();break}catch(p){qm(n,p)}while(!0);if(Ac(),Ct=l,gl.current=c,pn!==null)throw Error(t(261));return Rn=null,Un=0,xn}function Ax(){for(;pn!==null;)Km(pn)}function Rx(){for(;pn!==null&&!jr();)Km(pn)}function Km(n){var r=Jm(n.alternate,n,fi);n.memoizedProps=n.pendingProps,r===null?jm(n):pn=r,sf.current=null}function jm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=xx(l,r,fi),l!==null){pn=l;return}}else{if(l=Sx(l,r),l!==null){l.flags&=32767,pn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{xn=6,pn=null;return}}if(r=r.sibling,r!==null){pn=r;return}pn=r=n}while(r!==null);xn===0&&(xn=5)}function os(n,r,l){var c=tt,p=Mi.transition;try{Mi.transition=null,tt=1,Cx(n,r,l,c)}finally{Mi.transition=p,tt=c}return null}function Cx(n,r,l,c){do $s();while(Ir!==null);if((Ct&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=l.lanes|l.childLanes;if(je(n,g),n===Rn&&(pn=Rn=null,Un=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||xl||(xl=!0,eg(ws,function(){return $s(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Mi.transition,Mi.transition=null;var T=tt;tt=1;var O=Ct;Ct|=4,sf.current=null,Mx(n,l),zm(l,n),Y_(hc),Io=!!dc,hc=dc=null,n.current=l,Ex(l),$u(),Ct=O,tt=T,Mi.transition=g}else n.current=l;if(xl&&(xl=!1,Ir=n,Sl=p),g=n.pendingLanes,g===0&&(Dr=null),ne(l.stateNode),ni(n,Jt()),r!==null)for(c=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(_l)throw _l=!1,n=lf,lf=null,n;return(Sl&1)!==0&&n.tag!==0&&$s(),g=n.pendingLanes,(g&1)!==0?n===uf?Ja++:(Ja=0,uf=n):Ja=0,br(),null}function $s(){if(Ir!==null){var n=Vi(Sl),r=Mi.transition,l=tt;try{if(Mi.transition=null,tt=16>n?16:n,Ir===null)var c=!1;else{if(n=Ir,Ir=null,Sl=0,(Ct&6)!==0)throw Error(t(331));var p=Ct;for(Ct|=4,$e=n.current;$e!==null;){var g=$e,T=g.child;if(($e.flags&16)!==0){var O=g.deletions;if(O!==null){for(var V=0;V<O.length;V++){var ue=O[V];for($e=ue;$e!==null;){var Te=$e;switch(Te.tag){case 0:case 11:case 15:ja(8,Te,g)}var Re=Te.child;if(Re!==null)Re.return=Te,$e=Re;else for(;$e!==null;){Te=$e;var Me=Te.sibling,We=Te.return;if(Um(Te),Te===ue){$e=null;break}if(Me!==null){Me.return=We,$e=Me;break}$e=We}}}var Je=g.alternate;if(Je!==null){var et=Je.child;if(et!==null){Je.child=null;do{var hn=et.sibling;et.sibling=null,et=hn}while(et!==null)}}$e=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,$e=T;else e:for(;$e!==null;){if(g=$e,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ja(9,g,g.return)}var se=g.sibling;if(se!==null){se.return=g.return,$e=se;break e}$e=g.return}}var $=n.current;for($e=$;$e!==null;){T=$e;var oe=T.child;if((T.subtreeFlags&2064)!==0&&oe!==null)oe.return=T,$e=oe;else e:for(T=$;$e!==null;){if(O=$e,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:ml(9,O)}}catch(nt){cn(O,O.return,nt)}if(O===T){$e=null;break e}var Ie=O.sibling;if(Ie!==null){Ie.return=O.return,$e=Ie;break e}$e=O.return}}if(Ct=p,br(),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(H,n)}catch{}c=!0}return c}finally{tt=l,Mi.transition=r}}return!1}function Zm(n,r,l){r=Gs(l,r),r=mm(n,r,1),n=Lr(n,r,1),r=Kn(),n!==null&&(un(n,1,r),ni(n,r))}function cn(n,r,l){if(n.tag===3)Zm(n,n,l);else for(;r!==null;){if(r.tag===3){Zm(r,n,l);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Dr===null||!Dr.has(c))){n=Gs(l,n),n=gm(r,n,1),r=Lr(r,n,1),n=Kn(),r!==null&&(un(r,1,n),ni(r,n));break}}r=r.return}}function bx(n,r,l){var c=n.pingCache;c!==null&&c.delete(r),r=Kn(),n.pingedLanes|=n.suspendedLanes&l,Rn===n&&(Un&l)===l&&(xn===4||xn===3&&(Un&130023424)===Un&&500>Jt()-of?as(n,0):af|=l),ni(n,r)}function Qm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ye,Ye<<=1,(Ye&130023424)===0&&(Ye=4194304)));var l=Kn();n=lr(n,r),n!==null&&(un(n,r,l),ni(n,l))}function Px(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Qm(n,l)}function Lx(n,r){var l=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Qm(n,l)}var Jm;Jm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Qn.current)ei=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return ei=!1,_x(n,r,l);ei=(n.flags&131072)!==0}else ei=!1,tn&&(r.flags&1048576)!==0&&Np(r,Qo,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;hl(n,r),n=r.pendingProps;var p=Is(r,zn.current);zs(r,l),p=Oc(null,r,c,n,p,l);var g=kc();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Jn(c)?(g=!0,Ko(r)):g=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Pc(r),p.updater=fl,r.stateNode=p,p._reactInternals=r,Wc(r,c,n,l),r=Yc(null,r,c,!0,g,l)):(r.tag=0,tn&&g&&Sc(r),Yn(null,r,p,l),r=r.child),r;case 16:c=r.elementType;e:{switch(hl(n,r),n=r.pendingProps,p=c._init,c=p(c._payload),r.type=c,p=r.tag=Dx(c),n=Ni(c,n),p){case 0:r=qc(null,r,c,n,l);break e;case 1:r=Tm(null,r,c,n,l);break e;case 11:r=Sm(null,r,c,n,l);break e;case 14:r=ym(null,r,c,Ni(c.type,n),l);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:Ni(c,p),qc(n,r,c,p,l);case 1:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:Ni(c,p),Tm(n,r,c,p,l);case 3:e:{if(Am(r),n===null)throw Error(t(387));c=r.pendingProps,g=r.memoizedState,p=g.element,Hp(n,r),rl(r,c,null,l);var T=r.memoizedState;if(c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){p=Gs(Error(t(423)),r),r=Rm(n,r,c,l,p);break e}else if(c!==p){p=Gs(Error(t(424)),r),r=Rm(n,r,c,l,p);break e}else for(ci=Ar(r.stateNode.containerInfo.firstChild),ui=r,tn=!0,Li=null,l=Bp(r,null,c,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Os(),c===p){r=cr(n,r,l);break e}Yn(n,r,c,l)}r=r.child}return r;case 5:return Wp(r),n===null&&Ec(r),c=r.type,p=r.pendingProps,g=n!==null?n.memoizedProps:null,T=p.children,pc(c,p)?T=null:g!==null&&pc(c,g)&&(r.flags|=32),wm(n,r),Yn(n,r,T,l),r.child;case 6:return n===null&&Ec(r),null;case 13:return Cm(n,r,l);case 4:return Lc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=ks(r,null,c,l):Yn(n,r,c,l),r.child;case 11:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:Ni(c,p),Sm(n,r,c,p,l);case 7:return Yn(n,r,r.pendingProps,l),r.child;case 8:return Yn(n,r,r.pendingProps.children,l),r.child;case 12:return Yn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(c=r.type._context,p=r.pendingProps,g=r.memoizedProps,T=p.value,qt(tl,c._currentValue),c._currentValue=T,g!==null)if(Pi(g.value,T)){if(g.children===p.children&&!Qn.current){r=cr(n,r,l);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var O=g.dependencies;if(O!==null){T=g.child;for(var V=O.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=ur(-1,l&-l),V.tag=2;var ue=g.updateQueue;if(ue!==null){ue=ue.shared;var Te=ue.pending;Te===null?V.next=V:(V.next=Te.next,Te.next=V),ue.pending=V}}g.lanes|=l,V=g.alternate,V!==null&&(V.lanes|=l),Cc(g.return,l,r),O.lanes|=l;break}V=V.next}}else if(g.tag===10)T=g.type===r.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=l,O=T.alternate,O!==null&&(O.lanes|=l),Cc(T,l,r),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===r){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Yn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,c=r.pendingProps.children,zs(r,l),p=Si(p),c=c(p),r.flags|=1,Yn(n,r,c,l),r.child;case 14:return c=r.type,p=Ni(c,r.pendingProps),p=Ni(c.type,p),ym(n,r,c,p,l);case 15:return Mm(n,r,r.type,r.pendingProps,l);case 17:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:Ni(c,p),hl(n,r),r.tag=1,Jn(c)?(n=!0,Ko(r)):n=!1,zs(r,l),hm(r,c,p),Wc(r,c,p,l),Yc(null,r,c,!0,n,l);case 19:return Pm(n,r,l);case 22:return Em(n,r,l)}throw Error(t(156,r.tag))};function eg(n,r){return Ri(n,r)}function Nx(n,r,l,c){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(n,r,l,c){return new Nx(n,r,l,c)}function mf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Dx(n){if(typeof n=="function")return mf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===K)return 11;if(n===re)return 14}return 2}function Or(n,r){var l=n.alternate;return l===null?(l=Ei(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function wl(n,r,l,c,p,g){var T=2;if(c=n,typeof n=="function")mf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case M:return ls(l.children,p,g,r);case P:T=8,p|=8;break;case z:return n=Ei(12,l,r,p|2),n.elementType=z,n.lanes=g,n;case ie:return n=Ei(13,l,r,p),n.elementType=ie,n.lanes=g,n;case B:return n=Ei(19,l,r,p),n.elementType=B,n.lanes=g,n;case W:return Tl(l,p,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case F:T=10;break e;case G:T=9;break e;case K:T=11;break e;case re:T=14;break e;case le:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Ei(T,l,r,p),r.elementType=n,r.type=c,r.lanes=g,r}function ls(n,r,l,c){return n=Ei(7,n,c,r),n.lanes=l,n}function Tl(n,r,l,c){return n=Ei(22,n,c,r),n.elementType=W,n.lanes=l,n.stateNode={isHidden:!1},n}function gf(n,r,l){return n=Ei(6,n,null,r),n.lanes=l,n}function vf(n,r,l){return r=Ei(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Ix(n,r,l,c,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dt(0),this.expirationTimes=Dt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function _f(n,r,l,c,p,g,T,O,V){return n=new Ix(n,r,l,O,V),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Ei(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(g),n}function Ux(n,r,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:r,implementation:l}}function tg(n){if(!n)return Cr;n=n._reactInternals;e:{if(rn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Jn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Jn(l))return bp(n,l,r)}return r}function ng(n,r,l,c,p,g,T,O,V){return n=_f(l,c,!0,n,p,g,T,O,V),n.context=tg(null),l=n.current,c=Kn(),p=Ur(l),g=ur(c,p),g.callback=r??null,Lr(l,g,p),n.current.lanes=p,un(n,p,c),ni(n,c),n}function Al(n,r,l,c){var p=r.current,g=Kn(),T=Ur(p);return l=tg(l),r.context===null?r.context=l:r.pendingContext=l,r=ur(g,T),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Lr(p,r,T),n!==null&&(Ui(n,p,T,g),il(n,p,T)),T}function Rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ig(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function xf(n,r){ig(n,r),(n=n.alternate)&&ig(n,r)}function Fx(){return null}var rg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sf(n){this._internalRoot=n}Cl.prototype.render=Sf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Al(n,r,null,null)},Cl.prototype.unmount=Sf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ss(function(){Al(null,n,null,null)}),r[rr]=null}};function Cl(n){this._internalRoot=n}Cl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Wi();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Er.length&&r!==0&&r<Er[l].priority;l++);Er.splice(l,0,n),l===0&&Wh(n)}};function yf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sg(){}function Ox(n,r,l,c,p){if(p){if(typeof c=="function"){var g=c;c=function(){var ue=Rl(T);g.call(ue)}}var T=ng(r,c,n,0,null,!1,!1,"",sg);return n._reactRootContainer=T,n[rr]=T.current,Oa(n.nodeType===8?n.parentNode:n),ss(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var O=c;c=function(){var ue=Rl(V);O.call(ue)}}var V=_f(n,0,!1,null,null,!1,!1,"",sg);return n._reactRootContainer=V,n[rr]=V.current,Oa(n.nodeType===8?n.parentNode:n),ss(function(){Al(r,V,l,c)}),V}function Pl(n,r,l,c,p){var g=l._reactRootContainer;if(g){var T=g;if(typeof p=="function"){var O=p;p=function(){var V=Rl(T);O.call(V)}}Al(r,T,n,p)}else T=Ox(l,r,n,p,c);return Rl(T)}vn=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=lt(r.pendingLanes);l!==0&&(gn(r,l|1),ni(r,Jt()),(Ct&6)===0&&(Xs=Jt()+500,br()))}break;case 13:ss(function(){var c=lr(n,1);if(c!==null){var p=Kn();Ui(c,n,1,p)}}),xf(n,1)}},yr=function(n){if(n.tag===13){var r=lr(n,134217728);if(r!==null){var l=Kn();Ui(r,n,134217728,l)}xf(n,134217728)}},bi=function(n){if(n.tag===13){var r=Ur(n),l=lr(n,r);if(l!==null){var c=Kn();Ui(l,n,r,c)}xf(n,r)}},Wi=function(){return tt},wt=function(n,r){var l=tt;try{return tt=n,r()}finally{tt=l}},pe=function(n,r,l){switch(r){case"input":if(fn(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var c=l[r];if(c!==n&&c.form===n.form){var p=qo(c);if(!p)throw Error(t(90));At(c),fn(c,p)}}}break;case"textarea":X(n,l);break;case"select":r=l.value,r!=null&&$t(n,!!l.multiple,r,!1)}},xe=df,Ce=ss;var kx={usingClientEntryPoint:!1,Events:[za,Ns,qo,ce,Ne,df]},eo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bx={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qn(n),n===null?null:n.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||Fx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{H=Ll.inject(Bx),ae=Ll}catch{}}return ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx,ii.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(r))throw Error(t(200));return Ux(n,r,null,l)},ii.createRoot=function(n,r){if(!yf(n))throw Error(t(299));var l=!1,c="",p=rg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=_f(n,1,!1,null,null,l,!1,c,p),n[rr]=r.current,Oa(n.nodeType===8?n.parentNode:n),new Sf(r)},ii.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=qn(r),n=n===null?null:n.stateNode,n},ii.flushSync=function(n){return ss(n)},ii.hydrate=function(n,r,l){if(!bl(r))throw Error(t(200));return Pl(null,n,r,!0,l)},ii.hydrateRoot=function(n,r,l){if(!yf(n))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,g="",T=rg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=ng(r,null,n,1,l??null,p,!1,g,T),n[rr]=r.current,Oa(n),c)for(n=0;n<c.length;n++)l=c[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Cl(r)},ii.render=function(n,r,l){if(!bl(r))throw Error(t(200));return Pl(null,n,r,!1,l)},ii.unmountComponentAtNode=function(n){if(!bl(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){Pl(null,null,n,!1,function(){n._reactRootContainer=null,n[rr]=null})}),!0):!1},ii.unstable_batchedUpdates=df,ii.unstable_renderSubtreeIntoContainer=function(n,r,l,c){if(!bl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pl(n,r,l,!1,c)},ii.version="18.3.1-next-f1338f8080-20240426",ii}var hg;function iv(){if(hg)return wf.exports;hg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wf.exports=Yx(),wf.exports}var pg;function Kx(){if(pg)return Nl;pg=1;var s=iv();return Nl.createRoot=s.createRoot,Nl.hydrateRoot=s.hydrateRoot,Nl}var jx=Kx();const Zx=tv(jx),ht=s=>typeof s=="string",no=()=>{let s,e;const t=new Promise((i,a)=>{s=i,e=a});return t.resolve=s,t.reject=e,t},mg=s=>s==null?"":""+s,Qx=(s,e,t)=>{s.forEach(i=>{e[i]&&(t[i]=e[i])})},Jx=/###/g,gg=s=>s&&s.indexOf("###")>-1?s.replace(Jx,"."):s,vg=s=>!s||ht(s),po=(s,e,t)=>{const i=ht(e)?e.split("."):e;let a=0;for(;a<i.length-1;){if(vg(s))return{};const o=gg(i[a]);!s[o]&&t&&(s[o]=new t),Object.prototype.hasOwnProperty.call(s,o)?s=s[o]:s={},++a}return vg(s)?{}:{obj:s,k:gg(i[a])}},_g=(s,e,t)=>{const{obj:i,k:a}=po(s,e,Object);if(i!==void 0||e.length===1){i[a]=t;return}let o=e[e.length-1],u=e.slice(0,e.length-1),f=po(s,u,Object);for(;f.obj===void 0&&u.length;)o=`${u[u.length-1]}.${o}`,u=u.slice(0,u.length-1),f=po(s,u,Object),f?.obj&&typeof f.obj[`${f.k}.${o}`]<"u"&&(f.obj=void 0);f.obj[`${f.k}.${o}`]=t},eS=(s,e,t,i)=>{const{obj:a,k:o}=po(s,e,Object);a[o]=a[o]||[],a[o].push(t)},Eu=(s,e)=>{const{obj:t,k:i}=po(s,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},tS=(s,e,t)=>{const i=Eu(s,t);return i!==void 0?i:Eu(e,t)},rv=(s,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?ht(s[i])||s[i]instanceof String||ht(e[i])||e[i]instanceof String?t&&(s[i]=e[i]):rv(s[i],e[i],t):s[i]=e[i]);return s},qs=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var nS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const iS=s=>ht(s)?s.replace(/[&<>"'\/]/g,e=>nS[e]):s;class rS{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const sS=[" ",",","?","!",";"],aS=new rS(20),oS=(s,e,t)=>{e=e||"",t=t||"";const i=sS.filter(u=>e.indexOf(u)<0&&t.indexOf(u)<0);if(i.length===0)return!0;const a=aS.getRegExp(`(${i.map(u=>u==="?"?"\\?":u).join("|")})`);let o=!a.test(s);if(!o){const u=s.indexOf(t);u>0&&!a.test(s.substring(0,u))&&(o=!0)}return o},cd=(s,e,t=".")=>{if(!s)return;if(s[e])return Object.prototype.hasOwnProperty.call(s,e)?s[e]:void 0;const i=e.split(t);let a=s;for(let o=0;o<i.length;){if(!a||typeof a!="object")return;let u,f="";for(let d=o;d<i.length;++d)if(d!==o&&(f+=t),f+=i[d],u=a[f],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&d<i.length-1)continue;o+=d-o+1;break}a=u}return a},vo=s=>s?.replace("_","-"),lS={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){console?.[s]?.apply?.(console,e)}};class wu{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||lS,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,a){return a&&!this.debug?null:(ht(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new wu(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new wu(this.logger,e)}}var Ji=new wu;class ku{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const a=this.observers[i].get(t)||0;this.observers[i].set(t,a+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([a,o])=>{for(let u=0;u<o;u++)a(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([a,o])=>{for(let u=0;u<o;u++)a.apply(a,[e,...t])})}}class xg extends ku{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i,a={}){const o=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,u=a.ignoreJSONStructure!==void 0?a.ignoreJSONStructure:this.options.ignoreJSONStructure;let f;e.indexOf(".")>-1?f=e.split("."):(f=[e,t],i&&(Array.isArray(i)?f.push(...i):ht(i)&&o?f.push(...i.split(o)):f.push(i)));const d=Eu(this.data,f);return!d&&!t&&!i&&e.indexOf(".")>-1&&(e=f[0],t=f[1],i=f.slice(2).join(".")),d||!u||!ht(i)?d:cd(this.data?.[e]?.[t],i,o)}addResource(e,t,i,a,o={silent:!1}){const u=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let f=[e,t];i&&(f=f.concat(u?i.split(u):i)),e.indexOf(".")>-1&&(f=e.split("."),a=t,t=f[1]),this.addNamespaces(t),_g(this.data,f,a),o.silent||this.emit("added",e,t,i,a)}addResources(e,t,i,a={silent:!1}){for(const o in i)(ht(i[o])||Array.isArray(i[o]))&&this.addResource(e,t,o,i[o],{silent:!0});a.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,a,o,u={silent:!1,skipCopy:!1}){let f=[e,t];e.indexOf(".")>-1&&(f=e.split("."),a=i,i=t,t=f[1]),this.addNamespaces(t);let d=Eu(this.data,f)||{};u.skipCopy||(i=JSON.parse(JSON.stringify(i))),a?rv(d,i,o):d={...d,...i},_g(this.data,f,d),u.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(a=>t[a]&&Object.keys(t[a]).length>0)}toJSON(){return this.data}}var sv={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,a){return s.forEach(o=>{e=this.processors[o]?.process(e,t,i,a)??e}),e}};const av=Symbol("i18next/PATH_KEY");function uS(){const s=[],e=Object.create(null);let t;return e.get=(i,a)=>(t?.revoke?.(),a===av?s:(s.push(a),t=Proxy.revocable(i,e),t.proxy)),Proxy.revocable(Object.create(null),e).proxy}function fd(s,e){const{[av]:t}=s(uS());return t.join(e?.keySeparator??".")}const Sg={},Rf=s=>!ht(s)&&typeof s!="boolean"&&typeof s!="number";class Tu extends ku{constructor(e,t={}){super(),Qx(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ji.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const i={...t};if(e==null)return!1;const a=this.resolve(e,i);if(a?.res===void 0)return!1;const o=Rf(a.res);return!(i.returnObjects===!1&&o)}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const a=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let o=t.ns||this.options.defaultNS||[];const u=i&&e.indexOf(i)>-1,f=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!oS(e,i,a);if(u&&!f){const d=e.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:e,namespaces:ht(o)?[o]:o};const h=e.split(i);(i!==a||i===a&&this.options.ns.indexOf(h[0])>-1)&&(o=h.shift()),e=h.join(a)}return{key:e,namespaces:ht(o)?[o]:o}}translate(e,t,i){let a=typeof t=="object"?{...t}:t;if(typeof a!="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),typeof a=="object"&&(a={...a}),a||(a={}),e==null)return"";typeof e=="function"&&(e=fd(e,{...this.options,...a})),Array.isArray(e)||(e=[String(e)]);const o=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,{key:f,namespaces:d}=this.extractFromKey(e[e.length-1],a),h=d[d.length-1];let m=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;m===void 0&&(m=":");const v=a.lng||this.language,x=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(v?.toLowerCase()==="cimode")return x?o?{res:`${h}${m}${f}`,usedKey:f,exactUsedKey:f,usedLng:v,usedNS:h,usedParams:this.getUsedParamsDetails(a)}:`${h}${m}${f}`:o?{res:f,usedKey:f,exactUsedKey:f,usedLng:v,usedNS:h,usedParams:this.getUsedParamsDetails(a)}:f;const y=this.resolve(e,a);let E=y?.res;const R=y?.usedKey||f,_=y?.exactUsedKey||f,S=["[object Number]","[object Function]","[object RegExp]"],w=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,L=!this.i18nFormat||this.i18nFormat.handleAsObject,C=a.count!==void 0&&!ht(a.count),D=Tu.hasDefaultValue(a),N=C?this.pluralResolver.getSuffix(v,a.count,a):"",M=a.ordinal&&C?this.pluralResolver.getSuffix(v,a.count,{ordinal:!1}):"",P=C&&!a.ordinal&&a.count===0,z=P&&a[`defaultValue${this.options.pluralSeparator}zero`]||a[`defaultValue${N}`]||a[`defaultValue${M}`]||a.defaultValue;let F=E;L&&!E&&D&&(F=z);const G=Rf(F),K=Object.prototype.toString.apply(F);if(L&&F&&G&&S.indexOf(K)<0&&!(ht(w)&&Array.isArray(F))){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const ie=this.options.returnedObjectHandler?this.options.returnedObjectHandler(R,F,{...a,ns:d}):`key '${f} (${this.language})' returned an object instead of string.`;return o?(y.res=ie,y.usedParams=this.getUsedParamsDetails(a),y):ie}if(u){const ie=Array.isArray(F),B=ie?[]:{},re=ie?_:R;for(const le in F)if(Object.prototype.hasOwnProperty.call(F,le)){const W=`${re}${u}${le}`;D&&!E?B[le]=this.translate(W,{...a,defaultValue:Rf(z)?z[le]:void 0,joinArrays:!1,ns:d}):B[le]=this.translate(W,{...a,joinArrays:!1,ns:d}),B[le]===W&&(B[le]=F[le])}E=B}}else if(L&&ht(w)&&Array.isArray(E))E=E.join(w),E&&(E=this.extendTranslation(E,e,a,i));else{let ie=!1,B=!1;!this.isValidLookup(E)&&D&&(ie=!0,E=z),this.isValidLookup(E)||(B=!0,E=f);const le=(a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&B?void 0:E,W=D&&z!==E&&this.options.updateMissing;if(B||ie||W){if(this.logger.log(W?"updateKey":"missingKey",v,h,f,W?z:E),u){const I=this.resolve(f,{...a,keySeparator:!1});I&&I.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Z=[];const q=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&q&&q[0])for(let I=0;I<q.length;I++)Z.push(q[I]);else this.options.saveMissingTo==="all"?Z=this.languageUtils.toResolveHierarchy(a.lng||this.language):Z.push(a.lng||this.language);const j=(I,Q,be)=>{const te=D&&be!==E?be:le;this.options.missingKeyHandler?this.options.missingKeyHandler(I,h,Q,te,W,a):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(I,h,Q,te,W,a),this.emit("missingKey",I,h,Q,E)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?Z.forEach(I=>{const Q=this.pluralResolver.getSuffixes(I,a);P&&a[`defaultValue${this.options.pluralSeparator}zero`]&&Q.indexOf(`${this.options.pluralSeparator}zero`)<0&&Q.push(`${this.options.pluralSeparator}zero`),Q.forEach(be=>{j([I],f+be,a[`defaultValue${be}`]||z)})}):j(Z,f,z))}E=this.extendTranslation(E,e,a,y,i),B&&E===f&&this.options.appendNamespaceToMissingKey&&(E=`${h}${m}${f}`),(B||ie)&&this.options.parseMissingKeyHandler&&(E=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}${m}${f}`:f,ie?E:void 0,a))}return o?(y.res=E,y.usedParams=this.getUsedParamsDetails(a),y):E}extendTranslation(e,t,i,a,o){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||a.usedLng,a.usedNS,a.usedKey,{resolved:a});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=ht(e)&&(i?.interpolation?.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(d){const v=e.match(this.interpolator.nestingRegexp);h=v&&v.length}let m=i.replace&&!ht(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(m={...this.options.interpolation.defaultVariables,...m}),e=this.interpolator.interpolate(e,m,i.lng||this.language||a.usedLng,i),d){const v=e.match(this.interpolator.nestingRegexp),x=v&&v.length;h<x&&(i.nest=!1)}!i.lng&&a&&a.res&&(i.lng=this.language||a.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,(...v)=>o?.[0]===v[0]&&!i.context?(this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${t[0]}`),null):this.translate(...v,t),i)),i.interpolation&&this.interpolator.reset()}const u=i.postProcess||this.options.postProcess,f=ht(u)?[u]:u;return e!=null&&f?.length&&i.applyPostProcessor!==!1&&(e=sv.handle(f,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...a,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e,t={}){let i,a,o,u,f;return ht(e)&&(e=[e]),e.forEach(d=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(d,t),m=h.key;a=m;let v=h.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const x=t.count!==void 0&&!ht(t.count),y=x&&!t.ordinal&&t.count===0,E=t.context!==void 0&&(ht(t.context)||typeof t.context=="number")&&t.context!=="",R=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);v.forEach(_=>{this.isValidLookup(i)||(f=_,!Sg[`${R[0]}-${_}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(f)&&(Sg[`${R[0]}-${_}`]=!0,this.logger.warn(`key "${a}" for languages "${R.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),R.forEach(S=>{if(this.isValidLookup(i))return;u=S;const w=[m];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(w,m,S,_,t);else{let C;x&&(C=this.pluralResolver.getSuffix(S,t.count,t));const D=`${this.options.pluralSeparator}zero`,N=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(x&&(t.ordinal&&C.indexOf(N)===0&&w.push(m+C.replace(N,this.options.pluralSeparator)),w.push(m+C),y&&w.push(m+D)),E){const M=`${m}${this.options.contextSeparator||"_"}${t.context}`;w.push(M),x&&(t.ordinal&&C.indexOf(N)===0&&w.push(M+C.replace(N,this.options.pluralSeparator)),w.push(M+C),y&&w.push(M+D))}}let L;for(;L=w.pop();)this.isValidLookup(i)||(o=L,i=this.getResource(S,_,L,t))}))})}),{res:i,usedKey:a,exactUsedKey:o,usedLng:u,usedNS:f}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i,a={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,i,a):this.resourceStore.getResource(e,t,i,a)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!ht(e.replace);let a=i?e.replace:e;if(i&&typeof e.count<"u"&&(a.count=e.count),this.options.interpolation.defaultVariables&&(a={...this.options.interpolation.defaultVariables,...a}),!i){a={...a};for(const o of t)delete a[o]}return a}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class yg{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ji.create("languageUtils")}getScriptPartFromCode(e){if(e=vo(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=vo(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(ht(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const a=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(a))&&(t=a)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const a=this.getScriptPartFromCode(i);if(this.isSupportedCode(a))return t=a;const o=this.getLanguagePartFromCode(i);if(this.isSupportedCode(o))return t=o;t=this.options.supportedLngs.find(u=>{if(u===o)return u;if(!(u.indexOf("-")<0&&o.indexOf("-")<0)&&(u.indexOf("-")>0&&o.indexOf("-")<0&&u.substring(0,u.indexOf("-"))===o||u.indexOf(o)===0&&o.length>1))return u})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),ht(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),a=[],o=u=>{u&&(this.isSupportedCode(u)?a.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return ht(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):ht(e)&&o(this.formatLanguageCode(e)),i.forEach(u=>{a.indexOf(u)<0&&o(this.formatLanguageCode(u))}),a}}const Mg={zero:0,one:1,two:2,few:3,many:4,other:5},Eg={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class cS{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=Ji.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const i=vo(e==="dev"?"en":e),a=t.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:i,type:a});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let u;try{u=new Intl.PluralRules(i,{type:a})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Eg;if(!e.match(/-|_/))return Eg;const d=this.languageUtils.getLanguagePartFromCode(e);u=this.getRule(d,t)}return this.pluralRulesCache[o]=u,u}needsPlural(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,i={}){return this.getSuffixes(e,i).map(a=>`${t}${a}`)}getSuffixes(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((a,o)=>Mg[a]-Mg[o]).map(a=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${a}`):[]}getSuffix(e,t,i={}){const a=this.getRule(e,i);return a?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${a.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const wg=(s,e,t,i=".",a=!0)=>{let o=tS(s,e,t);return!o&&a&&ht(t)&&(o=cd(s,t,i),o===void 0&&(o=cd(e,t,i))),o},Cf=s=>s.replace(/\$/g,"$$$$");class fS{constructor(e={}){this.logger=Ji.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(t=>t),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:a,prefix:o,prefixEscaped:u,suffix:f,suffixEscaped:d,formatSeparator:h,unescapeSuffix:m,unescapePrefix:v,nestingPrefix:x,nestingPrefixEscaped:y,nestingSuffix:E,nestingSuffixEscaped:R,nestingOptionsSeparator:_,maxReplaces:S,alwaysFormat:w}=e.interpolation;this.escape=t!==void 0?t:iS,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=a!==void 0?a:!1,this.prefix=o?qs(o):u||"{{",this.suffix=f?qs(f):d||"}}",this.formatSeparator=h||",",this.unescapePrefix=m?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":m||"",this.nestingPrefix=x?qs(x):y||qs("$t("),this.nestingSuffix=E?qs(E):R||qs(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=S||1e3,this.alwaysFormat=w!==void 0?w:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>t?.source===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,a){let o,u,f;const d=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=y=>{if(y.indexOf(this.formatSeparator)<0){const S=wg(t,d,y,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(S,void 0,i,{...a,...t,interpolationkey:y}):S}const E=y.split(this.formatSeparator),R=E.shift().trim(),_=E.join(this.formatSeparator).trim();return this.format(wg(t,d,R,this.options.keySeparator,this.options.ignoreJSONStructure),_,i,{...a,...t,interpolationkey:R})};this.resetRegExp();const m=a?.missingInterpolationHandler||this.options.missingInterpolationHandler,v=a?.interpolation?.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:y=>Cf(y)},{regex:this.regexp,safeValue:y=>this.escapeValue?Cf(this.escape(y)):Cf(y)}].forEach(y=>{for(f=0;o=y.regex.exec(e);){const E=o[1].trim();if(u=h(E),u===void 0)if(typeof m=="function"){const _=m(e,o,a);u=ht(_)?_:""}else if(a&&Object.prototype.hasOwnProperty.call(a,E))u="";else if(v){u=o[0];continue}else this.logger.warn(`missed to pass in variable ${E} for interpolating ${e}`),u="";else!ht(u)&&!this.useRawValueToEscape&&(u=mg(u));const R=y.safeValue(u);if(e=e.replace(o[0],R),v?(y.regex.lastIndex+=u.length,y.regex.lastIndex-=o[0].length):y.regex.lastIndex=0,f++,f>=this.maxReplaces)break}}),e}nest(e,t,i={}){let a,o,u;const f=(d,h)=>{const m=this.nestingOptionsSeparator;if(d.indexOf(m)<0)return d;const v=d.split(new RegExp(`${m}[ ]*{`));let x=`{${v[1]}`;d=v[0],x=this.interpolate(x,u);const y=x.match(/'/g),E=x.match(/"/g);((y?.length??0)%2===0&&!E||E.length%2!==0)&&(x=x.replace(/'/g,'"'));try{u=JSON.parse(x),h&&(u={...h,...u})}catch(R){return this.logger.warn(`failed parsing options string in nesting for key ${d}`,R),`${d}${m}${x}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,d};for(;a=this.nestingRegexp.exec(e);){let d=[];u={...i},u=u.replace&&!ht(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;const h=/{.*}/.test(a[1])?a[1].lastIndexOf("}")+1:a[1].indexOf(this.formatSeparator);if(h!==-1&&(d=a[1].slice(h).split(this.formatSeparator).map(m=>m.trim()).filter(Boolean),a[1]=a[1].slice(0,h)),o=t(f.call(this,a[1].trim(),u),u),o&&a[0]===e&&!ht(o))return o;ht(o)||(o=mg(o)),o||(this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`),o=""),d.length&&(o=d.reduce((m,v)=>this.format(m,v,i.lng,{...i,interpolationkey:a[1].trim()}),o.trim())),e=e.replace(a[0],o),this.regexp.lastIndex=0}return e}}const dS=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const a=i[1].substring(0,i[1].length-1);e==="currency"&&a.indexOf(":")<0?t.currency||(t.currency=a.trim()):e==="relativetime"&&a.indexOf(":")<0?t.range||(t.range=a.trim()):a.split(";").forEach(u=>{if(u){const[f,...d]=u.split(":"),h=d.join(":").trim().replace(/^'+|'+$/g,""),m=f.trim();t[m]||(t[m]=h),h==="false"&&(t[m]=!1),h==="true"&&(t[m]=!0),isNaN(h)||(t[m]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},Tg=s=>{const e={};return(t,i,a)=>{let o=a;a&&a.interpolationkey&&a.formatParams&&a.formatParams[a.interpolationkey]&&a[a.interpolationkey]&&(o={...o,[a.interpolationkey]:void 0});const u=i+JSON.stringify(o);let f=e[u];return f||(f=s(vo(i),a),e[u]=f),f(t)}},hS=s=>(e,t,i)=>s(vo(t),i)(e);class pS{constructor(e={}){this.logger=Ji.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?Tg:hS;this.formats={number:i((a,o)=>{const u=new Intl.NumberFormat(a,{...o});return f=>u.format(f)}),currency:i((a,o)=>{const u=new Intl.NumberFormat(a,{...o,style:"currency"});return f=>u.format(f)}),datetime:i((a,o)=>{const u=new Intl.DateTimeFormat(a,{...o});return f=>u.format(f)}),relativetime:i((a,o)=>{const u=new Intl.RelativeTimeFormat(a,{...o});return f=>u.format(f,o.range||"day")}),list:i((a,o)=>{const u=new Intl.ListFormat(a,{...o});return f=>u.format(f)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Tg(t)}format(e,t,i,a={}){const o=t.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(f=>f.indexOf(")")>-1)){const f=o.findIndex(d=>d.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,f)].join(this.formatSeparator)}return o.reduce((f,d)=>{const{formatName:h,formatOptions:m}=dS(d);if(this.formats[h]){let v=f;try{const x=a?.formatParams?.[a.interpolationkey]||{},y=x.locale||x.lng||a.locale||a.lng||i;v=this.formats[h](f,y,{...m,...a,...x})}catch(x){this.logger.warn(x)}return v}else this.logger.warn(`there was no format function for ${h}`);return f},e)}}const mS=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class gS extends ku{constructor(e,t,i,a={}){super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=a,this.logger=Ji.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=a.maxParallelReads||10,this.readingCalls=0,this.maxRetries=a.maxRetries>=0?a.maxRetries:5,this.retryTimeout=a.retryTimeout>=1?a.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(i,a.backend,a)}queueLoad(e,t,i,a){const o={},u={},f={},d={};return e.forEach(h=>{let m=!0;t.forEach(v=>{const x=`${h}|${v}`;!i.reload&&this.store.hasResourceBundle(h,v)?this.state[x]=2:this.state[x]<0||(this.state[x]===1?u[x]===void 0&&(u[x]=!0):(this.state[x]=1,m=!1,u[x]===void 0&&(u[x]=!0),o[x]===void 0&&(o[x]=!0),d[v]===void 0&&(d[v]=!0)))}),m||(f[h]=!0)}),(Object.keys(o).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:a}),{toLoad:Object.keys(o),pending:Object.keys(u),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(d)}}loaded(e,t,i){const a=e.split("|"),o=a[0],u=a[1];t&&this.emit("failedLoading",o,u,t),!t&&i&&this.store.addResourceBundle(o,u,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const f={};this.queue.forEach(d=>{eS(d.loaded,[o],u),mS(d,e),t&&d.errors.push(t),d.pendingCount===0&&!d.done&&(Object.keys(d.loaded).forEach(h=>{f[h]||(f[h]={});const m=d.loaded[h];m.length&&m.forEach(v=>{f[h][v]===void 0&&(f[h][v]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",f),this.queue=this.queue.filter(d=>!d.done)}read(e,t,i,a=0,o=this.retryTimeout,u){if(!e.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:a,wait:o,callback:u});return}this.readingCalls++;const f=(h,m)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(h&&m&&a<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,a+1,o*2,u)},o);return}u(h,m)},d=this.backend[i].bind(this.backend);if(d.length===2){try{const h=d(e,t);h&&typeof h.then=="function"?h.then(m=>f(null,m)).catch(f):f(null,h)}catch(h){f(h)}return}return d(e,t,f)}prepareLoading(e,t,i={},a){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),a&&a();ht(e)&&(e=this.languageUtils.toResolveHierarchy(e)),ht(t)&&(t=[t]);const o=this.queueLoad(e,t,i,a);if(!o.toLoad.length)return o.pending.length||a(),null;o.toLoad.forEach(u=>{this.loadOne(u)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e,t=""){const i=e.split("|"),a=i[0],o=i[1];this.read(a,o,"read",void 0,void 0,(u,f)=>{u&&this.logger.warn(`${t}loading namespace ${o} for language ${a} failed`,u),!u&&f&&this.logger.log(`${t}loaded namespace ${o} for language ${a}`,f),this.loaded(e,u,f)})}saveMissing(e,t,i,a,o,u={},f=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend?.create){const d={...u,isUpdate:o},h=this.backend.create.bind(this.backend);if(h.length<6)try{let m;h.length===5?m=h(e,t,i,a,d):m=h(e,t,i,a),m&&typeof m.then=="function"?m.then(v=>f(null,v)).catch(f):f(null,m)}catch(m){f(m)}else h(e,t,i,a,f,d)}!e||!e[0]||this.store.addResource(e[0],t,i,a)}}}const Ag=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),ht(s[1])&&(e.defaultValue=s[1]),ht(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Rg=s=>(ht(s.ns)&&(s.ns=[s.ns]),ht(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),ht(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs?.indexOf?.("cimode")<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),typeof s.initImmediate=="boolean"&&(s.initAsync=s.initImmediate),s),Dl=()=>{},vS=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class _o extends ku{constructor(e={},t){if(super(),this.options=Rg(e),this.services={},this.logger=Ji,this.modules={external:[]},vS(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(ht(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const i=Ag();this.options={...i,...this.options,...Rg(e)},this.options.interpolation={...i.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator);const a=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?Ji.init(a(this.modules.logger),this.options):Ji.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:h=pS;const m=new yg(this.options);this.store=new xg(this.options.resources,this.options);const v=this.services;v.logger=Ji,v.resourceStore=this.store,v.languageUtils=m,v.pluralResolver=new cS(m,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),h&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(v.formatter=a(h),v.formatter.init&&v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new fS(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new gS(a(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",(y,...E)=>{this.emit(y,...E)}),this.modules.languageDetector&&(v.languageDetector=a(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=a(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Tu(this.services,this.options),this.translator.on("*",(y,...E)=>{this.emit(y,...E)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,t||(t=Dl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=(...m)=>this.store[h](...m)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=(...m)=>(this.store[h](...m),this)});const f=no(),d=()=>{const h=(m,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(v),t(m,v)};if(this.languages&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initAsync?d():setTimeout(d,0),f}loadResources(e,t=Dl){let i=t;const a=ht(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(a?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],u=f=>{if(!f||f==="cimode")return;this.services.languageUtils.toResolveHierarchy(f).forEach(h=>{h!=="cimode"&&o.indexOf(h)<0&&o.push(h)})};a?u(a):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(d=>u(d)),this.options.preload?.forEach?.(f=>u(f)),this.services.backendConnector.load(o,this.options.ns,f=>{!f&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(f)})}else i(null)}reloadResources(e,t,i){const a=no();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Dl),this.services.backendConnector.reload(e,t,o=>{a.resolve(),i(o)}),a}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&sv.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const i=no();this.emit("languageChanging",e);const a=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},o=(f,d)=>{d?this.isLanguageChangingTo===e&&(a(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,i.resolve((...h)=>this.t(...h)),t&&t(f,(...h)=>this.t(...h))},u=f=>{!e&&!f&&this.services.languageDetector&&(f=[]);const d=ht(f)?f:f&&f[0],h=this.store.hasLanguageSomeTranslations(d)?d:this.services.languageUtils.getBestMatchFromCodes(ht(f)?[f]:f);h&&(this.language||a(h),this.translator.language||this.translator.changeLanguage(h),this.services.languageDetector?.cacheUserLanguage?.(h)),this.loadResources(h,m=>{o(m,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?u(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(u):this.services.languageDetector.detect(u):u(e),i}getFixedT(e,t,i){const a=(o,u,...f)=>{let d;typeof u!="object"?d=this.options.overloadTranslationOptionHandler([o,u].concat(f)):d={...u},d.lng=d.lng||a.lng,d.lngs=d.lngs||a.lngs,d.ns=d.ns||a.ns,d.keyPrefix!==""&&(d.keyPrefix=d.keyPrefix||i||a.keyPrefix);const h=this.options.keySeparator||".";let m;return d.keyPrefix&&Array.isArray(o)?m=o.map(v=>(typeof v=="function"&&(v=fd(v,{...this.options,...u})),`${d.keyPrefix}${h}${v}`)):(typeof o=="function"&&(o=fd(o,{...this.options,...u})),m=d.keyPrefix?`${d.keyPrefix}${h}${o}`:o),this.t(m,d)};return ht(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=i,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],a=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const u=(f,d)=>{const h=this.services.backendConnector.state[`${f}|${d}`];return h===-1||h===0||h===2};if(t.precheck){const f=t.precheck(this,u);if(f!==void 0)return f}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(i,e)&&(!a||u(o,e)))}loadNamespaces(e,t){const i=no();return this.options.ns?(ht(e)&&(e=[e]),e.forEach(a=>{this.options.ns.indexOf(a)<0&&this.options.ns.push(a)}),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=no();ht(e)&&(e=[e]);const a=this.options.preload||[],o=e.filter(u=>a.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return o.length?(this.options.preload=a.concat(o),this.loadResources(u=>{i.resolve(),t&&t(u)}),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const a=new Intl.Locale(e);if(a&&a.getTextInfo){const o=a.getTextInfo();if(o&&o.direction)return o.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services?.languageUtils||new yg(Ag());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){return new _o(e,t)}cloneInstance(e={},t=Dl){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const a={...this.options,...e,isClone:!0},o=new _o(a);if((e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(f=>{o[f]=this[f]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},i){const f=Object.keys(this.store.data).reduce((d,h)=>(d[h]={...this.store.data[h]},d[h]=Object.keys(d[h]).reduce((m,v)=>(m[v]={...d[h][v]},m),d[h]),d),{});o.store=new xg(f,a),o.services.resourceStore=o.store}return o.translator=new Tu(o.services,a),o.translator.on("*",(f,...d)=>{o.emit(f,...d)}),o.init(a,t),o.translator.options=a,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const $n=_o.createInstance();$n.createInstance=_o.createInstance;$n.createInstance;$n.dir;$n.init;$n.loadResources;$n.reloadResources;$n.use;$n.changeLanguage;$n.getFixedT;$n.t;$n.exists;$n.setDefaultNamespace;$n.hasLoadedNamespace;$n.loadNamespaces;$n.loadLanguages;const _S=(s,e,t,i)=>{const a=[t,{code:e,...i||{}}];if(s?.services?.logger?.forward)return s.services.logger.forward(a,"warn","react-i18next::",!0);gs(a[0])&&(a[0]=`react-i18next:: ${a[0]}`),s?.services?.logger?.warn?s.services.logger.warn(...a):console?.warn&&console.warn(...a)},Cg={},dd=(s,e,t,i)=>{gs(t)&&Cg[t]||(gs(t)&&(Cg[t]=new Date),_S(s,e,t,i))},ov=(s,e)=>()=>{if(s.isInitialized)e();else{const t=()=>{setTimeout(()=>{s.off("initialized",t)},0),e()};s.on("initialized",t)}},hd=(s,e,t)=>{s.loadNamespaces(e,ov(s,t))},bg=(s,e,t,i)=>{if(gs(t)&&(t=[t]),s.options.preload&&s.options.preload.indexOf(e)>-1)return hd(s,t,i);t.forEach(a=>{s.options.ns.indexOf(a)<0&&s.options.ns.push(a)}),s.loadLanguages(e,ov(s,i))},xS=(s,e,t={})=>!e.languages||!e.languages.length?(dd(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(s,{lng:t.lng,precheck:(i,a)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!a(i.isLanguageChangingTo,s))return!1}}),gs=s=>typeof s=="string",SS=s=>typeof s=="object"&&s!==null,yS=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,MS={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ES=s=>MS[s],wS=s=>s.replace(yS,ES);let pd={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:wS};const TS=(s={})=>{pd={...pd,...s}},AS=()=>pd;let lv;const RS=s=>{lv=s},CS=()=>lv,bS={type:"3rdParty",init(s){TS(s.options.react),RS(s)}},PS=Ge.createContext();class LS{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const NS=(s,e)=>{const t=Ge.useRef();return Ge.useEffect(()=>{t.current=s},[s,e]),t.current},uv=(s,e,t,i)=>s.getFixedT(e,t,i),DS=(s,e,t,i)=>Ge.useCallback(uv(s,e,t,i),[s,e,t,i]),uh=(s,e={})=>{const{i18n:t}=e,{i18n:i,defaultNS:a}=Ge.useContext(PS)||{},o=t||i||CS();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new LS),!o){dd(o,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const C=(N,M)=>gs(M)?M:SS(M)&&gs(M.defaultValue)?M.defaultValue:Array.isArray(N)?N[N.length-1]:N,D=[C,{},!1];return D.t=C,D.i18n={},D.ready=!1,D}o.options.react?.wait&&dd(o,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...AS(),...o.options.react,...e},{useSuspense:f,keyPrefix:d}=u;let h=a||o.options?.defaultNS;h=gs(h)?[h]:h||["translation"],o.reportNamespaces.addUsedNamespaces?.(h);const m=(o.isInitialized||o.initializedStoreOnce)&&h.every(C=>xS(C,o,u)),v=DS(o,e.lng||null,u.nsMode==="fallback"?h:h[0],d),x=()=>v,y=()=>uv(o,e.lng||null,u.nsMode==="fallback"?h:h[0],d),[E,R]=Ge.useState(x);let _=h.join();e.lng&&(_=`${e.lng}${_}`);const S=NS(_),w=Ge.useRef(!0);Ge.useEffect(()=>{const{bindI18n:C,bindI18nStore:D}=u;w.current=!0,!m&&!f&&(e.lng?bg(o,e.lng,h,()=>{w.current&&R(y)}):hd(o,h,()=>{w.current&&R(y)})),m&&S&&S!==_&&w.current&&R(y);const N=()=>{w.current&&R(y)};return C&&o?.on(C,N),D&&o?.store.on(D,N),()=>{w.current=!1,o&&C&&C?.split(" ").forEach(M=>o.off(M,N)),D&&o&&D.split(" ").forEach(M=>o.store.off(M,N))}},[o,_]),Ge.useEffect(()=>{w.current&&m&&R(x)},[o,d,m]);const L=[E,o,m];if(L.t=E,L.i18n=o,L.ready=m,m||!m&&!f)return L;throw new Promise(C=>{e.lng?bg(o,e.lng,h,()=>C()):hd(o,h,()=>C())})},IS=()=>{const{i18n:s}=uh(),e=t=>{s.changeLanguage(t)};return Ge.useEffect(()=>{document.documentElement.lang=s.language},[s.language]),ve.jsxs("div",{className:"lang-switch",children:[ve.jsx("button",{className:s.language==="ja"?"active":"",onClick:()=>e("ja"),lang:"ja",children:"日本語"}),ve.jsx("span",{children:"|"}),ve.jsx("button",{className:s.language==="en"?"active":"",onClick:()=>e("en"),lang:"en",children:"EN"})]})},US=()=>{const{t:s}=uh(),[e,t]=Ge.useState(!1),i=Ge.useRef(null),a=Ge.useRef(null);return Ge.useEffect(()=>{const o=u=>{const f=u.target;i.current&&!i.current.contains(f)&&a.current&&!a.current.contains(f)&&t(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]),ve.jsx("div",{className:"navbar-container",children:ve.jsxs("header",{className:"navbar",children:[ve.jsxs("div",{className:"header-inner",children:[ve.jsx("div",{className:"nav-left",children:ve.jsx("img",{className:"nav-logo",src:"/McKinley-Developer/logo.svg",alt:"AM logo"})}),ve.jsxs("div",{className:"nav-right",children:[ve.jsxs("nav",{className:"nav-links",children:[ve.jsx("a",{href:"#top",children:s("header.top")}),ve.jsx("a",{href:"#work-history",children:s("header.workHistory")}),ve.jsx("a",{href:"#tools",children:s("header.tools")}),ve.jsx("a",{href:"#works",children:s("header.works")}),ve.jsx("a",{href:"#contact",children:s("header.contact")})]}),ve.jsx(IS,{}),ve.jsxs("div",{ref:a,className:"hamburger",onClick:()=>{t(!e)},children:[ve.jsx("span",{className:`bar ${e?"open":""}`}),ve.jsx("span",{className:`bar ${e?"open":""}`}),ve.jsx("span",{className:`bar ${e?"open":""}`})]})]})]}),ve.jsxs("div",{ref:i,className:`mobile-menu ${e?"s-right-in":""}`,children:[ve.jsx("a",{href:"#top",onClick:()=>t(!1),children:s("header.top")}),ve.jsx("a",{href:"#work-history",onClick:()=>t(!1),children:s("header.workHistory")}),ve.jsx("a",{href:"#tools",onClick:()=>t(!1),children:s("header.tools")}),ve.jsx("a",{href:"#works",onClick:()=>t(!1),children:s("header.works")}),ve.jsx("a",{href:"#contact",onClick:()=>t(!1),children:s("header.contact")})]})]})})};iv();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},xo.apply(this,arguments)}var ms;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(ms||(ms={}));const Pg="popstate";function FS(s){s===void 0&&(s={});function e(i,a){let{pathname:o,search:u,hash:f}=i.location;return md("",{pathname:o,search:u,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:Au(a)}return kS(e,t,null,s)}function Gi(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function OS(){return Math.random().toString(36).substr(2,8)}function Lg(s,e){return{usr:s.state,key:s.key,idx:e}}function md(s,e,t,i){return t===void 0&&(t=null),xo({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?Bu(e):e,{state:t,key:e&&e.key||i||OS()})}function Au(s){let{pathname:e="/",search:t="",hash:i=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Bu(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let i=s.indexOf("?");i>=0&&(e.search=s.substr(i),s=s.substr(0,i)),s&&(e.pathname=s)}return e}function kS(s,e,t,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:o=!1}=i,u=a.history,f=ms.Pop,d=null,h=m();h==null&&(h=0,u.replaceState(xo({},u.state,{idx:h}),""));function m(){return(u.state||{idx:null}).idx}function v(){f=ms.Pop;let _=m(),S=_==null?null:_-h;h=_,d&&d({action:f,location:R.location,delta:S})}function x(_,S){f=ms.Push;let w=md(R.location,_,S);h=m()+1;let L=Lg(w,h),C=R.createHref(w);try{u.pushState(L,"",C)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;a.location.assign(C)}o&&d&&d({action:f,location:R.location,delta:1})}function y(_,S){f=ms.Replace;let w=md(R.location,_,S);h=m();let L=Lg(w,h),C=R.createHref(w);u.replaceState(L,"",C),o&&d&&d({action:f,location:R.location,delta:0})}function E(_){let S=a.location.origin!=="null"?a.location.origin:a.location.href,w=typeof _=="string"?_:Au(_);return w=w.replace(/ $/,"%20"),Gi(S,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,S)}let R={get action(){return f},get location(){return s(a,u)},listen(_){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Pg,v),d=_,()=>{a.removeEventListener(Pg,v),d=null}},createHref(_){return e(a,_)},createURL:E,encodeLocation(_){let S=E(_);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:x,replace:y,go(_){return u.go(_)}};return R}var Ng;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Ng||(Ng={}));function cv(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=s.charAt(t);return i&&i!=="/"?null:s.slice(t)||"/"}function BS(s,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:a=""}=typeof s=="string"?Bu(s):s;return{pathname:t?t.startsWith("/")?t:zS(t,e):e,search:GS(i),hash:VS(a)}}function zS(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function bf(s,e,t,i){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function HS(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function fv(s,e){let t=HS(s);return e?t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function dv(s,e,t,i){i===void 0&&(i=!1);let a;typeof s=="string"?a=Bu(s):(a=xo({},s),Gi(!a.pathname||!a.pathname.includes("?"),bf("?","pathname","search",a)),Gi(!a.pathname||!a.pathname.includes("#"),bf("#","pathname","hash",a)),Gi(!a.search||!a.search.includes("#"),bf("#","search","hash",a)));let o=s===""||a.pathname==="",u=o?"/":a.pathname,f;if(u==null)f=t;else{let v=e.length-1;if(!i&&u.startsWith("..")){let x=u.split("/");for(;x[0]==="..";)x.shift(),v-=1;a.pathname=x.join("/")}f=v>=0?e[v]:"/"}let d=BS(a,f),h=u&&u!=="/"&&u.endsWith("/"),m=(o||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||m)&&(d.pathname+="/"),d}const hv=s=>s.join("/").replace(/\/\/+/g,"/"),GS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,VS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,pv=["post","put","patch","delete"];new Set(pv);const WS=["get",...pv];new Set(WS);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},Ru.apply(this,arguments)}const mv=Ge.createContext(null),xa=Ge.createContext(null),ch=Ge.createContext(null),zu=Ge.createContext({outlet:null,matches:[],isDataRoute:!1});function XS(s,e){let{relative:t}=e===void 0?{}:e;Hu()||Gi(!1);let{basename:i,navigator:a}=Ge.useContext(xa),{hash:o,pathname:u,search:f}=vv(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:hv([i,u])),a.createHref({pathname:d,search:f,hash:o})}function Hu(){return Ge.useContext(ch)!=null}function fh(){return Hu()||Gi(!1),Ge.useContext(ch).location}function gv(s){Ge.useContext(xa).static||Ge.useLayoutEffect(s)}function $S(){let{isDataRoute:s}=Ge.useContext(zu);return s?ZS():qS()}function qS(){Hu()||Gi(!1);let s=Ge.useContext(mv),{basename:e,future:t,navigator:i}=Ge.useContext(xa),{matches:a}=Ge.useContext(zu),{pathname:o}=fh(),u=JSON.stringify(fv(a,t.v7_relativeSplatPath)),f=Ge.useRef(!1);return gv(()=>{f.current=!0}),Ge.useCallback(function(h,m){if(m===void 0&&(m={}),!f.current)return;if(typeof h=="number"){i.go(h);return}let v=dv(h,JSON.parse(u),o,m.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:hv([e,v.pathname])),(m.replace?i.replace:i.push)(v,m.state,m)},[e,i,u,o,s])}function vv(s,e){let{relative:t}=e===void 0?{}:e,{future:i}=Ge.useContext(xa),{matches:a}=Ge.useContext(zu),{pathname:o}=fh(),u=JSON.stringify(fv(a,i.v7_relativeSplatPath));return Ge.useMemo(()=>dv(s,JSON.parse(u),o,t==="path"),[s,u,o,t])}var _v=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(_v||{}),xv=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(xv||{});function YS(s){let e=Ge.useContext(mv);return e||Gi(!1),e}function KS(s){let e=Ge.useContext(zu);return e||Gi(!1),e}function jS(s){let e=KS(),t=e.matches[e.matches.length-1];return t.route.id||Gi(!1),t.route.id}function ZS(){let{router:s}=YS(_v.UseNavigateStable),e=jS(xv.UseNavigateStable),t=Ge.useRef(!1);return gv(()=>{t.current=!0}),Ge.useCallback(function(a,o){o===void 0&&(o={}),t.current&&(typeof a=="number"?s.navigate(a):s.navigate(a,Ru({fromRouteId:e},o)))},[s,e])}function QS(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function JS(s){let{basename:e="/",children:t=null,location:i,navigationType:a=ms.Pop,navigator:o,static:u=!1,future:f}=s;Hu()&&Gi(!1);let d=e.replace(/^\/*/,"/"),h=Ge.useMemo(()=>({basename:d,navigator:o,static:u,future:Ru({v7_relativeSplatPath:!1},f)}),[d,f,o,u]);typeof i=="string"&&(i=Bu(i));let{pathname:m="/",search:v="",hash:x="",state:y=null,key:E="default"}=i,R=Ge.useMemo(()=>{let _=cv(m,d);return _==null?null:{location:{pathname:_,search:v,hash:x,state:y,key:E},navigationType:a}},[d,m,v,x,y,E,a]);return R==null?null:Ge.createElement(xa.Provider,{value:h},Ge.createElement(ch.Provider,{children:t,value:R}))}new Promise(()=>{});/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gd(){return gd=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},gd.apply(this,arguments)}function ey(s,e){if(s==null)return{};var t={},i=Object.keys(s),a,o;for(o=0;o<i.length;o++)a=i[o],!(e.indexOf(a)>=0)&&(t[a]=s[a]);return t}function ty(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ny(s,e){return s.button===0&&(!e||e==="_self")&&!ty(s)}const iy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ry="6";try{window.__reactRouterVersion=ry}catch{}const sy="startTransition",Dg=Xx[sy];function ay(s){let{basename:e,children:t,future:i,window:a}=s,o=Ge.useRef();o.current==null&&(o.current=FS({window:a,v5Compat:!0}));let u=o.current,[f,d]=Ge.useState({action:u.action,location:u.location}),{v7_startTransition:h}=i||{},m=Ge.useCallback(v=>{h&&Dg?Dg(()=>d(v)):d(v)},[d,h]);return Ge.useLayoutEffect(()=>u.listen(m),[u,m]),Ge.useEffect(()=>QS(i),[i]),Ge.createElement(JS,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:u,future:i})}const oy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ly=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uy=Ge.forwardRef(function(e,t){let{onClick:i,relative:a,reloadDocument:o,replace:u,state:f,target:d,to:h,preventScrollReset:m,viewTransition:v}=e,x=ey(e,iy),{basename:y}=Ge.useContext(xa),E,R=!1;if(typeof h=="string"&&ly.test(h)&&(E=h,oy))try{let L=new URL(window.location.href),C=h.startsWith("//")?new URL(L.protocol+h):new URL(h),D=cv(C.pathname,y);C.origin===L.origin&&D!=null?h=D+C.search+C.hash:R=!0}catch{}let _=XS(h,{relative:a}),S=cy(h,{replace:u,state:f,target:d,preventScrollReset:m,relative:a,viewTransition:v});function w(L){i&&i(L),L.defaultPrevented||S(L)}return Ge.createElement("a",gd({},x,{href:E||_,onClick:R||o?i:w,ref:t,target:d}))});var Ig;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Ig||(Ig={}));var Ug;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Ug||(Ug={}));function cy(s,e){let{target:t,replace:i,state:a,preventScrollReset:o,relative:u,viewTransition:f}=e===void 0?{}:e,d=$S(),h=fh(),m=vv(s,{relative:u});return Ge.useCallback(v=>{if(ny(v,t)){v.preventDefault();let x=i!==void 0?i:Au(h)===Au(m);d(s,{replace:x,state:a,preventScrollReset:o,relative:u,viewTransition:f})}},[h,d,m,i,a,t,s,o,u,f])}const fy=({text:s,buttonLink:e,external:t=!1})=>{const i=Ge.useRef(null),[a,o]=Ge.useState(!1);Ge.useEffect(()=>{const f=new IntersectionObserver(([d])=>{d.isIntersecting&&(o(!0),f.disconnect())},{threshold:.3});return i.current&&f.observe(i.current),()=>f.disconnect()},[]);const u=`btn ${a?"is-visible":""}`;return e.startsWith("#")?ve.jsx("a",{ref:i,href:e,className:u,children:s}):t?ve.jsx("a",{ref:i,href:e,target:"_blank",rel:"noopener noreferrer",className:u,children:s}):ve.jsx(uy,{to:e,ref:i,className:u,children:s})},Fg=({text:s,variant:e="tool"})=>ve.jsx(ve.Fragment,{children:ve.jsx("div",{className:`tag tag--${e}`,children:ve.jsx("p",{className:"tag-text",children:s})})}),Il=[{id:"1",poster:"works/seishinkai.webp",i18nKey:"works.seishinkaiKarate",date:"2026.6",roles:["Director","Designer","Developer"],tools:["Astro","TypeScript"],link:"https://seishinkan.ne.jp/"},{id:"2",poster:"works/private-company.webp",i18nKey:"works.marugame",date:"2026.6",roles:["Developer"],tools:["Gulp","CMS"]},{id:"3",poster:"works/private-company.webp",i18nKey:"works.gyoren",date:"2026.3",roles:["Lead Developer"],tools:["Astro","SCSS"]},{id:"4",poster:"works/private-company.webp",i18nKey:"works.mebs",date:"2026.1",roles:["Director","Developer"],tools:["Vue","Tailwind"]},{id:"5",poster:"works/gamerblog.webp",i18nKey:"works.gamerblog",date:"2025.8",roles:["Director","Developer","Designer"],tools:["HTML5","CSS","JavaScript","EJS"],link:"https://sapporoalex.github.io/MM-blog-site/index.html"},{id:"6",poster:"works/oztools.webp",i18nKey:"works.OzTools",date:"2025.7",roles:["Developer","Designer"],tools:["React","TypeScript","Node.JS","Python"],link:"https://oztoolsreactfrontend.onrender.com/"},{id:"7",poster:"works/artist.webp",i18nKey:"works.artistPortfolio",date:"2025.5",roles:["Director","Developer","Designer"],tools:["React","CSS","TypeScript","Python"],link:"https://sapporoalex.github.io/Dagny-Portfolio/"},{id:"8",poster:"works/hgames.webp",i18nKey:"works.gamingSite",date:"2024.6",roles:["Developer","Designer"],tools:["Django","HTML5","CSS","JavaScript","TypeScript","SQLite"],link:"https://hamster-games.onrender.com/"}],dy=[{year:"2026.9",key:"entry1"},{year:"2025.4",key:"entry2"},{year:"2024.7",key:"entry3"},{year:"2023.7",key:"entry4"}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dh="187",hy=0,Og=1,py=2,hu=1,my=2,fo=3,_s=0,Zn=1,Qi=2,vs=0,mo=1,mi=2,kg=3,Bg=4,gy=5,fa=100,vy=101,_y=102,xy=103,Sy=104,yy=200,My=201,Ey=202,wy=203,Sv=204,yv=205,Ty=206,Ay=207,Ry=208,Cy=209,by=210,Py=211,Ly=212,Ny=213,Dy=214,vd=0,_d=1,xd=2,So=3,Sd=4,yd=5,Md=6,Ed=7,Mv=0,Iy=1,Uy=2,_r=0,hh=1,ph=2,mh=3,gh=4,vh=5,_h=6,xh=7,Ev=300,pa=301,yo=302,Pf=303,Lf=304,wd=1e3,vr=1001,Td=1002,Fn=1003,Fy=1004,Ul=1005,ri=1006,Nf=1007,qr=1008,vi=1009,wv=1010,Tv=1011,Mo=1012,Sh=1013,nr=1014,zi=1015,ai=1016,yh=1017,Mh=1018,ma=1020,Av=35902,Rv=35899,Cv=1021,bv=1022,er=1023,Kr=1026,Yr=1027,Eh=1028,wh=1029,xs=1030,Th=1031,Ah=1033,pu=33776,mu=33777,gu=33778,vu=33779,Ad=35840,Rd=35841,Cd=35842,bd=35843,Pd=36196,Ld=37492,Nd=37496,Dd=37488,Id=37489,Cu=37490,Ud=37491,Fd=37808,Od=37809,kd=37810,Bd=37811,zd=37812,Hd=37813,Gd=37814,Vd=37815,Wd=37816,Xd=37817,$d=37818,qd=37819,Yd=37820,Kd=37821,jd=36492,Zd=36494,Qd=36495,Jd=36283,eh=36284,bu=36285,th=36286,Oy=3200,nh=0,ky=1,$r="",gi="srgb",Pu="srgb-linear",Lu="linear",Ut="srgb",Df=7680,By=519,zy=512,Hy=513,Gy=514,Pv=515,Vy=516,Wy=517,Lv=518,Nv=519,Xy=35044,zg="300 es",Hi=2e3,Eo=2001;function $y(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qy(){const s=wo("canvas");return s.style.display="block",s}const Hg={};function Gg(...s){const e="THREE."+s.shift();console.log(e,...s)}function Dv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=Dv(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Lt(...s){s=Dv(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function _u(...s){const e=s.join(" ");e in Hg||(Hg[e]=!0,ct(...s))}function Yy(s,e,t){return new Promise(function(i,a){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const Ky={[vd]:vd,[xd]:Md,[Sd]:Sd,[So]:yd,[_d]:_d,[Md]:xd,[Ed]:Ed,[yd]:So};class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=Math.PI/180,ih=180/Math.PI;function Ro(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function jy(s,e){return(s%e+e)%e}function If(s,e,t){return(1-t)*s+t*e}function Zy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rh(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qy(s,e){if(e.constructor===Float32Array)return s;const t=Rh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Jy(s,e){if(e.constructor===Float32Array)return s;const t=Rh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Bh=class Bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*a+e.x,this.y=o*a+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bh.prototype.isVector2=!0;let ut=Bh;class Sa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,u,f){let d=i[a+0],h=i[a+1],m=i[a+2],v=i[a+3],x=o[u+0],y=o[u+1],E=o[u+2],R=o[u+3];if(v!==R||d!==x||h!==y||m!==E){let _=d*x+h*y+m*E+v*R;_<0&&(x=-x,y=-y,E=-E,R=-R,_=-_);let S=1-f;if(_<.9995){const w=Math.acos(_),L=Math.sin(w);S=Math.sin(S*w)/L,f=Math.sin(f*w)/L,d=d*S+x*f,h=h*S+y*f,m=m*S+E*f,v=v*S+R*f}else{d=d*S+x*f,h=h*S+y*f,m=m*S+E*f,v=v*S+R*f;const w=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=w,h*=w,m*=w,v*=w}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,a,o,u){const f=i[a],d=i[a+1],h=i[a+2],m=i[a+3],v=o[u],x=o[u+1],y=o[u+2],E=o[u+3];return e[t]=f*E+m*v+d*y-h*x,e[t+1]=d*E+m*x+h*v-f*y,e[t+2]=h*E+m*y+f*x-d*v,e[t+3]=m*E-f*v-d*x-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(i/2),m=f(a/2),v=f(o/2),x=d(i/2),y=d(a/2),E=d(o/2);switch(u){case"XYZ":this._x=x*m*v+h*y*E,this._y=h*y*v-x*m*E,this._z=h*m*E+x*y*v,this._w=h*m*v-x*y*E;break;case"YXZ":this._x=x*m*v+h*y*E,this._y=h*y*v-x*m*E,this._z=h*m*E-x*y*v,this._w=h*m*v+x*y*E;break;case"ZXY":this._x=x*m*v-h*y*E,this._y=h*y*v+x*m*E,this._z=h*m*E+x*y*v,this._w=h*m*v-x*y*E;break;case"ZYX":this._x=x*m*v-h*y*E,this._y=h*y*v+x*m*E,this._z=h*m*E-x*y*v,this._w=h*m*v+x*y*E;break;case"YZX":this._x=x*m*v+h*y*E,this._y=h*y*v+x*m*E,this._z=h*m*E-x*y*v,this._w=h*m*v-x*y*E;break;case"XZY":this._x=x*m*v-h*y*E,this._y=h*y*v-x*m*E,this._z=h*m*E+x*y*v,this._w=h*m*v+x*y*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],v=t[10],x=i+f+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(m-d)*y,this._y=(o-h)*y,this._z=(u-a)*y}else if(i>f&&i>v){const y=2*Math.sqrt(1+i-f-v);this._w=(m-d)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(o+h)/y}else if(f>v){const y=2*Math.sqrt(1+f-i-v);this._w=(o-h)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+v-i-f);this._w=(u-a)/y,this._x=(o+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=i*m+u*f+a*h-o*d,this._y=a*m+u*d+o*f-i*h,this._z=o*m+u*h+i*d-a*f,this._w=u*m-i*f-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,u=e._w,f=this.dot(e);f<0&&(i=-i,a=-a,o=-o,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zh=class zh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*a-f*i),m=2*(f*t-o*a),v=2*(o*i-u*t);return this.x=t+d*h+u*v-f*m,this.y=i+d*m+f*h-o*v,this.z=a+d*v+o*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,u=t.x,f=t.y,d=t.z;return this.x=a*d-o*f,this.y=o*u-i*d,this.z=i*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uf.copy(this).projectOnVector(e),this.sub(Uf)}reflect(e){return this.sub(Uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;let Y=zh;const Uf=new Y,Vg=new Sa,Hh=class Hh{constructor(e,t,i,a,o,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,f,d,h)}set(e,t,i,a,o,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=o,m[5]=d,m[6]=i,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],f=i[3],d=i[6],h=i[1],m=i[4],v=i[7],x=i[2],y=i[5],E=i[8],R=a[0],_=a[3],S=a[6],w=a[1],L=a[4],C=a[7],D=a[2],N=a[5],M=a[8];return o[0]=u*R+f*w+d*D,o[3]=u*_+f*L+d*N,o[6]=u*S+f*C+d*M,o[1]=h*R+m*w+v*D,o[4]=h*_+m*L+v*N,o[7]=h*S+m*C+v*M,o[2]=x*R+y*w+E*D,o[5]=x*_+y*L+E*N,o[8]=x*S+y*C+E*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-i*o*m+i*f*d+a*o*h-a*u*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=m*u-f*h,x=f*d-m*o,y=h*o-u*d,E=t*v+i*x+a*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=v*R,e[1]=(a*h-m*i)*R,e[2]=(f*i-a*u)*R,e[3]=x*R,e[4]=(m*t-a*d)*R,e[5]=(a*o-f*t)*R,e[6]=y*R,e[7]=(i*d-h*t)*R,e[8]=(u*t-i*o)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,u,f){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*u+h*f)+u+e,-a*h,a*d,-a*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return _u("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ff.makeScale(e,t)),this}rotate(e){return _u("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ff.makeRotation(-e)),this}translate(e,t){return _u("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hh.prototype.isMatrix3=!0;let mt=Hh;const Ff=new mt,Wg=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eM(){const s={enabled:!0,workingColorSpace:Pu,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Ut&&(a.r=xr(a.r),a.g=xr(a.g),a.b=xr(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(a.r=ha(a.r),a.g=ha(a.g),a.b=ha(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===$r?Lu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[u].fromXYZ).multiply(this.spaces[o].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Pu]:{primaries:e,whitePoint:i,transfer:Lu,toXYZ:Wg,fromXYZ:Xg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:Wg,fromXYZ:Xg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const Tt=eM();function xr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ys;class tM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=wo("canvas")),Ys.width=e.width,Ys.height=e.height;const a=Ys.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=xr(o[u]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nM=0;class Ch{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?o.push(Of(a[u].image)):o.push(Of(a[u]))}else o=Of(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Of(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let iM=0;const kf=new Y;class On extends Ss{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,i=vr,a=vr,o=ri,u=qr,f=er,d=vi,h=On.DEFAULT_ANISOTROPY,m=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Ro(),this.name="",this.source=new Ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kf).x}get height(){return this.source.getSize(kf).y}get depth(){return this.source.getSize(kf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Ev;On.DEFAULT_ANISOTROPY=1;const Gh=class Gh{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const d=e.elements,h=d[0],m=d[4],v=d[8],x=d[1],y=d[5],E=d[9],R=d[2],_=d[6],S=d[10];if(Math.abs(m-x)<.01&&Math.abs(v-R)<.01&&Math.abs(E-_)<.01){if(Math.abs(m+x)<.1&&Math.abs(v+R)<.1&&Math.abs(E+_)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,C=(y+1)/2,D=(S+1)/2,N=(m+x)/4,M=(v+R)/4,P=(E+_)/4;return L>C&&L>D?L<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(L),a=N/i,o=M/i):C>D?C<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(C),i=N/a,o=P/a):D<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(D),i=M/o,a=P/o),this.set(i,a,o,t),this}let w=Math.sqrt((_-E)*(_-E)+(v-R)*(v-R)+(x-m)*(x-m));return Math.abs(w)<.001&&(w=1),this.x=(_-E)/w,this.y=(v-R)/w,this.z=(x-m)/w,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;let on=Gh;class rM extends Ss{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=new On({width:e,height:t,depth:i.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Ch(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends rM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Iv extends On{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends On{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ou=class Ou{constructor(e,t,i,a,o,u,f,d,h,m,v,x,y,E,R,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,f,d,h,m,v,x,y,E,R,_)}set(e,t,i,a,o,u,f,d,h,m,v,x,y,E,R,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=a,S[1]=o,S[5]=u,S[9]=f,S[13]=d,S[2]=h,S[6]=m,S[10]=v,S[14]=x,S[3]=y,S[7]=E,S[11]=R,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ou().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/Ks.setFromMatrixColumn(e,0).length(),o=1/Ks.setFromMatrixColumn(e,1).length(),u=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,u=Math.cos(i),f=Math.sin(i),d=Math.cos(a),h=Math.sin(a),m=Math.cos(o),v=Math.sin(o);if(e.order==="XYZ"){const x=u*m,y=u*v,E=f*m,R=f*v;t[0]=d*m,t[4]=-d*v,t[8]=h,t[1]=y+E*h,t[5]=x-R*h,t[9]=-f*d,t[2]=R-x*h,t[6]=E+y*h,t[10]=u*d}else if(e.order==="YXZ"){const x=d*m,y=d*v,E=h*m,R=h*v;t[0]=x+R*f,t[4]=E*f-y,t[8]=u*h,t[1]=u*v,t[5]=u*m,t[9]=-f,t[2]=y*f-E,t[6]=R+x*f,t[10]=u*d}else if(e.order==="ZXY"){const x=d*m,y=d*v,E=h*m,R=h*v;t[0]=x-R*f,t[4]=-u*v,t[8]=E+y*f,t[1]=y+E*f,t[5]=u*m,t[9]=R-x*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const x=u*m,y=u*v,E=f*m,R=f*v;t[0]=d*m,t[4]=E*h-y,t[8]=x*h+R,t[1]=d*v,t[5]=R*h+x,t[9]=y*h-E,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const x=u*d,y=u*h,E=f*d,R=f*h;t[0]=d*m,t[4]=R-x*v,t[8]=E*v+y,t[1]=v,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=y*v+E,t[10]=x-R*v}else if(e.order==="XZY"){const x=u*d,y=u*h,E=f*d,R=f*h;t[0]=d*m,t[4]=-v,t[8]=h*m,t[1]=x*v+R,t[5]=u*m,t[9]=y*v-E,t[2]=E*v-y,t[6]=f*m,t[10]=R*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,oM)}lookAt(e,t,i){const a=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Br.crossVectors(i,di),Br.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Br.crossVectors(i,di)),Br.normalize(),Fl.crossVectors(di,Br),a[0]=Br.x,a[4]=Fl.x,a[8]=di.x,a[1]=Br.y,a[5]=Fl.y,a[9]=di.y,a[2]=Br.z,a[6]=Fl.z,a[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],f=i[4],d=i[8],h=i[12],m=i[1],v=i[5],x=i[9],y=i[13],E=i[2],R=i[6],_=i[10],S=i[14],w=i[3],L=i[7],C=i[11],D=i[15],N=a[0],M=a[4],P=a[8],z=a[12],F=a[1],G=a[5],K=a[9],ie=a[13],B=a[2],re=a[6],le=a[10],W=a[14],Z=a[3],q=a[7],j=a[11],I=a[15];return o[0]=u*N+f*F+d*B+h*Z,o[4]=u*M+f*G+d*re+h*q,o[8]=u*P+f*K+d*le+h*j,o[12]=u*z+f*ie+d*W+h*I,o[1]=m*N+v*F+x*B+y*Z,o[5]=m*M+v*G+x*re+y*q,o[9]=m*P+v*K+x*le+y*j,o[13]=m*z+v*ie+x*W+y*I,o[2]=E*N+R*F+_*B+S*Z,o[6]=E*M+R*G+_*re+S*q,o[10]=E*P+R*K+_*le+S*j,o[14]=E*z+R*ie+_*W+S*I,o[3]=w*N+L*F+C*B+D*Z,o[7]=w*M+L*G+C*re+D*q,o[11]=w*P+L*K+C*le+D*j,o[15]=w*z+L*ie+C*W+D*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],v=e[6],x=e[10],y=e[14],E=e[3],R=e[7],_=e[11],S=e[15],w=d*y-h*x,L=f*y-h*v,C=f*x-d*v,D=u*y-h*m,N=u*x-d*m,M=u*v-f*m;return t*(R*w-_*L+S*C)-i*(E*w-_*D+S*N)+a*(E*L-R*D+S*M)-o*(E*C-R*N+_*M)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[1],u=e[5],f=e[9],d=e[2],h=e[6],m=e[10];return t*(u*m-f*h)-i*(o*m-f*d)+a*(o*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=e[9],x=e[10],y=e[11],E=e[12],R=e[13],_=e[14],S=e[15],w=t*f-i*u,L=t*d-a*u,C=t*h-o*u,D=i*d-a*f,N=i*h-o*f,M=a*h-o*d,P=m*R-v*E,z=m*_-x*E,F=m*S-y*E,G=v*_-x*R,K=v*S-y*R,ie=x*S-y*_,B=w*ie-L*K+C*G+D*F-N*z+M*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/B;return e[0]=(f*ie-d*K+h*G)*re,e[1]=(a*K-i*ie-o*G)*re,e[2]=(R*M-_*N+S*D)*re,e[3]=(x*N-v*M-y*D)*re,e[4]=(d*F-u*ie-h*z)*re,e[5]=(t*ie-a*F+o*z)*re,e[6]=(_*C-E*M-S*L)*re,e[7]=(m*M-x*C+y*L)*re,e[8]=(u*K-f*F+h*P)*re,e[9]=(i*F-t*K-o*P)*re,e[10]=(E*N-R*C+S*w)*re,e[11]=(v*C-m*N-y*w)*re,e[12]=(f*z-u*G-d*P)*re,e[13]=(t*G-i*z+a*P)*re,e[14]=(R*L-E*D-_*w)*re,e[15]=(m*D-v*L+x*w)*re,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,u=e.x,f=e.y,d=e.z,h=o*u,m=o*f;return this.set(h*u+i,h*f-a*d,h*d+a*f,0,h*f+a*d,m*f+i,m*d-a*u,0,h*d-a*f,m*d+a*u,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,u){return this.set(1,i,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,u=t._y,f=t._z,d=t._w,h=o+o,m=u+u,v=f+f,x=o*h,y=o*m,E=o*v,R=u*m,_=u*v,S=f*v,w=d*h,L=d*m,C=d*v,D=i.x,N=i.y,M=i.z;return a[0]=(1-(R+S))*D,a[1]=(y+C)*D,a[2]=(E-L)*D,a[3]=0,a[4]=(y-C)*N,a[5]=(1-(x+S))*N,a[6]=(_+w)*N,a[7]=0,a[8]=(E+L)*M,a[9]=(_-w)*M,a[10]=(1-(x+R))*M,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let u=Ks.set(a[0],a[1],a[2]).length();const f=Ks.set(a[4],a[5],a[6]).length(),d=Ks.set(a[8],a[9],a[10]).length();o<0&&(u=-u),Fi.copy(this);const h=1/u,m=1/f,v=1/d;return Fi.elements[0]*=h,Fi.elements[1]*=h,Fi.elements[2]*=h,Fi.elements[4]*=m,Fi.elements[5]*=m,Fi.elements[6]*=m,Fi.elements[8]*=v,Fi.elements[9]*=v,Fi.elements[10]*=v,t.setFromRotationMatrix(Fi),i.x=u,i.y=f,i.z=d,this}makePerspective(e,t,i,a,o,u,f=Hi,d=!1){const h=this.elements,m=2*o/(t-e),v=2*o/(i-a),x=(t+e)/(t-e),y=(i+a)/(i-a);let E,R;if(d)E=o/(u-o),R=u*o/(u-o);else if(f===Hi)E=-(u+o)/(u-o),R=-2*u*o/(u-o);else if(f===Eo)E=-u/(u-o),R=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,o,u,f=Hi,d=!1){const h=this.elements,m=2/(t-e),v=2/(i-a),x=-(t+e)/(t-e),y=-(i+a)/(i-a);let E,R;if(d)E=1/(u-o),R=u/(u-o);else if(f===Hi)E=-2/(u-o),R=-(u+o)/(u-o);else if(f===Eo)E=-1/(u-o),R=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ou.prototype.isMatrix4=!0;let kt=Ou;const Ks=new Y,Fi=new kt,aM=new Y(0,0,0),oM=new Y(1,1,1),Br=new Y,Fl=new Y,di=new Y,$g=new kt,qg=new Sa;class Sr{constructor(e=0,t=0,i=0,a=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],u=a[4],f=a[8],d=a[1],h=a[5],m=a[9],v=a[2],x=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-m,y),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $g.makeRotationFromQuaternion(e),this.setFromRotationMatrix($g,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qg.setFromEuler(this),this.setFromQuaternion(qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lM=0;const Yg=new Y,js=new Sa,dr=new kt,Ol=new Y,io=new Y,uM=new Y,cM=new Sa,Kg=new Y(1,0,0),jg=new Y(0,1,0),Zg=new Y(0,0,1),Qg={type:"added"},fM={type:"removed"},Zs={type:"childadded",child:null},Bf={type:"childremoved",child:null};class Pn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new Y,t=new Sr,i=new Sa,a=new Y(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new kt},normalMatrix:{value:new mt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Kg,e)}rotateY(e){return this.rotateOnAxis(jg,e)}rotateZ(e){return this.rotateOnAxis(Zg,e)}translateOnAxis(e,t){return Yg.copy(e).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kg,e)}translateY(e){return this.translateOnAxis(jg,e)}translateZ(e){return this.translateOnAxis(Zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ol.copy(e):Ol.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(io,Ol,this.up):dr.lookAt(Ol,io,this.up),this.quaternion.setFromRotationMatrix(dr),a&&(dr.extractRotation(a.matrixWorld),js.setFromRotationMatrix(dr),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qg),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fM),Bf.child=e,this.dispatchEvent(Bf),Bf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qg),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,uM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,cM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];o(e.shapes,v)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(o(e.materials,this.material[d]));a.material=f}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(o(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),v=u(e.shapes),x=u(e.skeletons),y=u(e.animations),E=u(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),x.length>0&&(i.skeletons=x),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=a,i;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pn.DEFAULT_UP=new Y(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class da extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dM={type:"move"};class zf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const R of e.hand.values()){const _=t.getJointPose(R,i),S=this._getHandJoint(h,R);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],x=m.position.distanceTo(v.position),y=.02,E=.005;h.inputState.pinching&&x>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new da;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Hf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Tt.workingColorSpace){if(e=jy(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=Hf(u,o,e+1/3),this.g=Hf(u,o,e),this.b=Hf(u,o,e-1/3)}return Tt.colorSpaceToWorking(this,a),this}setStyle(e,t=gi){function i(o){o!==void 0&&parseFloat(o)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return i(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,t);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){const i=Uv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Tt.workingToColorSpace(Xn.copy(this),e),Math.round(Rt(Xn.r*255,0,255))*65536+Math.round(Rt(Xn.g*255,0,255))*256+Math.round(Rt(Xn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Xn.copy(this),t);const i=Xn.r,a=Xn.g,o=Xn.b,u=Math.max(i,a,o),f=Math.min(i,a,o);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=m<=.5?v/(u+f):v/(2-u-f),u){case i:d=(a-o)/v+(a<o?6:0);break;case a:d=(o-i)/v+2;break;case o:d=(i-a)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=gi){Tt.workingToColorSpace(Xn.copy(this),e);const t=Xn.r,i=Xn.g,a=Xn.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(kl);const i=If(zr.h,kl.h,t),a=If(zr.s,kl.s,t),o=If(zr.l,kl.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new ot;ot.NAMES=Uv;class Ph{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new Ph(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hM extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new Y,hr=new Y,Gf=new Y,pr=new Y,Qs=new Y,Js=new Y,Jg=new Y,Vf=new Y,Wf=new Y,Xf=new Y,$f=new on,qf=new on,Yf=new on;class Ai{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Oi.subVectors(e,t),a.cross(Oi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){Oi.subVectors(a,t),hr.subVectors(i,t),Gf.subVectors(e,t);const u=Oi.dot(Oi),f=Oi.dot(hr),d=Oi.dot(Gf),h=hr.dot(hr),m=hr.dot(Gf),v=u*h-f*f;if(v===0)return o.set(0,0,0),null;const x=1/v,y=(h*d-f*m)*x,E=(u*m-f*d)*x;return o.set(1-y-E,E,y)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,i,a,o,u,f,d){return this.getBarycoord(e,t,i,a,pr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,pr.x),d.addScaledVector(u,pr.y),d.addScaledVector(f,pr.z),d)}static getInterpolatedAttribute(e,t,i,a,o,u){return $f.setScalar(0),qf.setScalar(0),Yf.setScalar(0),$f.fromBufferAttribute(e,t),qf.fromBufferAttribute(e,i),Yf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector($f,o.x),u.addScaledVector(qf,o.y),u.addScaledVector(Yf,o.z),u}static isFrontFacing(e,t,i,a){return Oi.subVectors(i,t),hr.subVectors(e,t),Oi.cross(hr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Oi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return Ai.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let u,f;Qs.subVectors(a,i),Js.subVectors(o,i),Vf.subVectors(e,i);const d=Qs.dot(Vf),h=Js.dot(Vf);if(d<=0&&h<=0)return t.copy(i);Wf.subVectors(e,a);const m=Qs.dot(Wf),v=Js.dot(Wf);if(m>=0&&v<=m)return t.copy(a);const x=d*v-m*h;if(x<=0&&d>=0&&m<=0&&d-m>0)return u=d/(d-m),t.copy(i).addScaledVector(Qs,u);Xf.subVectors(e,o);const y=Qs.dot(Xf),E=Js.dot(Xf);if(E>=0&&y<=E)return t.copy(o);const R=y*h-d*E;if(R<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(i).addScaledVector(Js,f);const _=m*E-y*v;if(_<=0&&v-m>=0&&y-E>=0)return Jg.subVectors(o,a),f=(v-m)/(v-m+(y-E)),t.copy(a).addScaledVector(Jg,f);const S=1/(_+R+x);return u=R*S,f=x*S,t.copy(i).addScaledVector(Qs,u).addScaledVector(Js,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ys{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,f=o.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ki):ki.fromBufferAttribute(o,u),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bl.copy(i.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),zl.subVectors(this.max,ro),ea.subVectors(e.a,ro),ta.subVectors(e.b,ro),na.subVectors(e.c,ro),Hr.subVectors(ta,ea),Gr.subVectors(na,ta),us.subVectors(ea,na);let t=[0,-Hr.z,Hr.y,0,-Gr.z,Gr.y,0,-us.z,us.y,Hr.z,0,-Hr.x,Gr.z,0,-Gr.x,us.z,0,-us.x,-Hr.y,Hr.x,0,-Gr.y,Gr.x,0,-us.y,us.x,0];return!Kf(t,ea,ta,na,zl)||(t=[1,0,0,0,1,0,0,0,1],!Kf(t,ea,ta,na,zl))?!1:(Hl.crossVectors(Hr,Gr),t=[Hl.x,Hl.y,Hl.z],Kf(t,ea,ta,na,zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ki=new Y,Bl=new ys,ea=new Y,ta=new Y,na=new Y,Hr=new Y,Gr=new Y,us=new Y,ro=new Y,zl=new Y,Hl=new Y,cs=new Y;function Kf(s,e,t,i,a){for(let o=0,u=s.length-3;o<=u;o+=3){cs.fromArray(s,o);const f=a.x*Math.abs(cs.x)+a.y*Math.abs(cs.y)+a.z*Math.abs(cs.z),d=e.dot(cs),h=t.dot(cs),m=i.dot(cs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const mn=new Y,Gl=new ut;let pM=0;class tr extends Ss{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xy,this.updateRanges=[],this.gpuType=zi,this.version=0,this._normalizationScale=e!==void 0?Rh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qy(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jy(e,this.array)}}class Fv extends tr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ov extends tr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends tr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const mM=new ys,so=new Y,jf=new Y;class Ms{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mM.setFromPoints(e).getCenter(i);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const t=so.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(so,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(jf)),this.expandByPoint(so.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gM=0;const wi=new kt,Zf=new Pn,ia=new Y,hi=new ys,ao=new ys,bn=new Y;class Ln extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($y(e)?Ov:Fv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new mt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,i){return wi.makeTranslation(e,t,i),this.applyMatrix4(wi),this}scale(e,t,i){return wi.makeScale(e,t,i),this.applyMatrix4(wi),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];hi.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const f=t[o];ao.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(hi.min,ao.min),hi.expandByPoint(bn),bn.addVectors(hi.max,ao.max),hi.expandByPoint(bn)):(hi.expandByPoint(ao.min),hi.expandByPoint(ao.max))}hi.getCenter(i);let a=0;for(let o=0,u=e.count;o<u;o++)bn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(bn));if(t)for(let o=0,u=t.length;o<u;o++){const f=t[o],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)bn.fromBufferAttribute(f,h),d&&(ia.fromBufferAttribute(e,h),bn.add(ia)),a=Math.max(a,i.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==i.count)&&(u=new tr(new Float32Array(4*i.count),4),this.setAttribute("tangent",u));const f=[],d=[],h=new Uint8Array(i.count);for(let z=0;z<i.count;z++)f[z]=new Y,d[z]=new Y;const m=new Y,v=new Y,x=new Y,y=new ut,E=new ut,R=new ut,_=new Y,S=new Y;function w(z,F,G){h[z]=h[F]=h[G]=1,m.fromBufferAttribute(i,z),v.fromBufferAttribute(i,F),x.fromBufferAttribute(i,G),y.fromBufferAttribute(o,z),E.fromBufferAttribute(o,F),R.fromBufferAttribute(o,G),v.sub(m),x.sub(m),E.sub(y),R.sub(y);const K=1/(E.x*R.y-R.x*E.y);isFinite(K)&&(_.copy(v).multiplyScalar(R.y).addScaledVector(x,-E.y).multiplyScalar(K),S.copy(x).multiplyScalar(E.x).addScaledVector(v,-R.x).multiplyScalar(K),f[z].add(_),f[F].add(_),f[G].add(_),d[z].add(S),d[F].add(S),d[G].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let z=0,F=L.length;z<F;++z){const G=L[z],K=G.start,ie=G.count;for(let B=K,re=K+ie;B<re;B+=3)w(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const C=new Y,D=new Y,N=new Y,M=new Y;function P(z){N.fromBufferAttribute(a,z),M.copy(N);const F=f[z];C.copy(F),C.sub(N.multiplyScalar(N.dot(F))).normalize(),D.crossVectors(M,F);const K=D.dot(d[z])<0?-1:1;u.setXYZW(z,C.x,C.y,C.z,K)}for(let z=0,F=i.count;z<F;++z)h[z]&&P(z);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new tr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let x=0,y=i.count;x<y;x++)i.setXYZ(x,0,0,0);const a=new Y,o=new Y,u=new Y,f=new Y,d=new Y,h=new Y,m=new Y,v=new Y;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),R=e.getX(x+1),_=e.getX(x+2);a.fromBufferAttribute(t,E),o.fromBufferAttribute(t,R),u.fromBufferAttribute(t,_),m.subVectors(u,o),v.subVectors(a,o),m.cross(v),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,R),h.fromBufferAttribute(i,_),f.add(m),d.add(m),h.add(m),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(R,d.x,d.y,d.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let x=0,y=t.count;x<y;x+=3)a.fromBufferAttribute(t,x+0),o.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),m.subVectors(u,o),v.subVectors(a,o),m.cross(v),i.setXYZ(x+0,m.x,m.y,m.z),i.setXYZ(x+1,m.x,m.y,m.z),i.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,v=f.normalized,x=new h.constructor(d.length*m);let y=0,E=0;for(let R=0,_=d.length;R<_;R++){f.isInterleavedBufferAttribute?y=d[R]*f.data.stride+f.offset:y=d[R]*m;for(let S=0;S<m;S++)x[E++]=h[y++]}return new tr(x,m,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,i=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=e(d,i);t.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const d=[],h=o[f];for(let m=0,v=h.length;m<v;m++){const x=h[m],y=e(x,i);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,x=h.length;v<x;v++){const y=h[v];m.push(y.toJSON(e.data))}m.length>0&&(a[d]=m,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const o=e.morphAttributes;for(const h in o){const m=[],v=o[h];for(let x=0,y=v.length;x<y;x++)m.push(v[x].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qf=new Y,vM=new Y,_M=new mt;class Xr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Qf.subVectors(i,t).cross(vM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Qf),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_M.getNormalMatrix(e),a=this.coplanarPoint(Qf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xM=0;class Es extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=mo,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sv,this.blendDst=yv,this.blendEquation=fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=By,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Df,this.stencilZFail=Df,this.stencilZPass=Df,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const u=[];for(const f in o){const d=o[f];delete d.metadata,u.push(d)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ut().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gr=new Y,Jf=new Y,Vl=new Y,Wl=new Y;class Gu{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Jf.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Wl.copy(this.origin).sub(Jf);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Vl),f=Wl.dot(this.direction),d=-Wl.dot(Vl),h=Wl.lengthSq(),m=Math.abs(1-u*u);let v,x,y,E;if(m>0)if(v=u*d-f,x=u*f-d,E=o*m,v>=0)if(x>=-E)if(x<=E){const R=1/m;v*=R,x*=R,y=v*(v+u*x+2*f)+x*(u*v+x+2*d)+h}else x=o,v=Math.max(0,-(u*x+f)),y=-v*v+x*(x+2*d)+h;else x=-o,v=Math.max(0,-(u*x+f)),y=-v*v+x*(x+2*d)+h;else x<=-E?(v=Math.max(0,-(-u*o+f)),x=v>0?-o:Math.min(Math.max(-o,-d),o),y=-v*v+x*(x+2*d)+h):x<=E?(v=0,x=Math.min(Math.max(-o,-d),o),y=x*(x+2*d)+h):(v=Math.max(0,-(u*o+f)),x=v>0?o:Math.min(Math.max(-o,-d),o),y=-v*v+x*(x+2*d)+h);else x=u>0?-o:o,v=Math.max(0,-(u*x+f)),y=-v*v+x*(x+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Jf).addScaledVector(Vl,x),y}intersectSphere(e,t){if(e.radius<0)return null;gr.subVectors(e.center,this.origin);const i=gr.dot(this.direction),a=gr.dot(gr)-i*i,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),f=i-u,d=i+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,x=this.origin;return h>=0?(i=(e.min.x-x.x)*h,a=(e.max.x-x.x)*h):(i=(e.max.x-x.x)*h,a=(e.min.x-x.x)*h),m>=0?(o=(e.min.y-x.y)*m,u=(e.max.y-x.y)*m):(o=(e.max.y-x.y)*m,u=(e.min.y-x.y)*m),i>u||o>a||((o>i||isNaN(i))&&(i=o),(u<a||isNaN(a))&&(a=u),v>=0?(f=(e.min.z-x.z)*v,d=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,d=(e.min.z-x.z)*v),i>d||f>a)||((f>i||i!==i)&&(i=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,i,a,o){const u=this.origin,f=this.direction,d=f.x,h=f.y,m=f.z,v=e.x-u.x,x=e.y-u.y,y=e.z-u.z,E=t.x-u.x,R=t.y-u.y,_=t.z-u.z,S=i.x-u.x,w=i.y-u.y,L=i.z-u.z,C=Math.abs(d),D=Math.abs(h),N=Math.abs(m);let M,P,z,F,G,K,ie,B,re,le,W,Z;if(C>=D&&C>=N?(z=d,K=v,re=E,Z=S,d>=0?(M=h,P=m,F=x,G=y,ie=R,B=_,le=w,W=L):(M=m,P=h,F=y,G=x,ie=_,B=R,le=L,W=w)):D>=N?(z=h,K=x,re=R,Z=w,h>=0?(M=m,P=d,F=y,G=v,ie=_,B=E,le=L,W=S):(M=d,P=m,F=v,G=y,ie=E,B=_,le=S,W=L)):(z=m,K=y,re=_,Z=L,m>=0?(M=d,P=h,F=v,G=x,ie=E,B=R,le=S,W=w):(M=h,P=d,F=x,G=v,ie=R,B=E,le=w,W=S)),z===0)return null;const q=M/z,j=P/z,I=1/z,Q=F-q*K,be=G-j*K,te=ie-q*re,Se=B-j*re,Ae=le-q*Z,Be=W-j*Z,ye=Ae*Se-Be*te,Ve=Q*Be-be*Ae,vt=te*be-Se*Q;if(a){if(ye<0||Ve<0||vt<0)return null}else if((ye<0||Ve<0||vt<0)&&(ye>0||Ve>0||vt>0))return null;const it=ye+Ve+vt;if(it===0)return null;const At=I*(ye*K+Ve*re+vt*Z);return(it>0?At<0:At>0)?null:this.at(At/it,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hs extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const e0=new kt,fs=new Gu,Xl=new Ms,t0=new Y,$l=new Y,ql=new Y,Yl=new Y,ed=new Y,Kl=new Y,n0=new Y,jl=new Y;class Sn extends Pn{constructor(e=new Ln,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(o&&f){Kl.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const m=f[d],v=o[d];m!==0&&(ed.fromBufferAttribute(v,e),u?Kl.addScaledVector(ed,m):Kl.addScaledVector(ed.sub(t),m))}t.add(Kl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(o),fs.copy(e.ray).recast(e.near),!(Xl.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Xl,t0)===null||fs.origin.distanceToSquared(t0)>(e.far-e.near)**2))&&(e0.copy(o).invert(),fs.copy(e.ray).applyMatrix4(e0),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,i){let a;const o=this.geometry,u=this.material,f=o.index,d=o.attributes.position,h=o.attributes.uv,m=o.attributes.uv1,v=o.attributes.normal,x=o.groups,y=o.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,R=x.length;E<R;E++){const _=x[E],S=u[_.materialIndex],w=Math.max(_.start,y.start),L=Math.min(f.count,Math.min(_.start+_.count,y.start+y.count));for(let C=w,D=L;C<D;C+=3){const N=f.getX(C),M=f.getX(C+1),P=f.getX(C+2);a=Zl(this,S,e,i,h,m,v,N,M,P),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const E=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let _=E,S=R;_<S;_+=3){const w=f.getX(_),L=f.getX(_+1),C=f.getX(_+2);a=Zl(this,u,e,i,h,m,v,w,L,C),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,R=x.length;E<R;E++){const _=x[E],S=u[_.materialIndex],w=Math.max(_.start,y.start),L=Math.min(d.count,Math.min(_.start+_.count,y.start+y.count));for(let C=w,D=L;C<D;C+=3){const N=C,M=C+1,P=C+2;a=Zl(this,S,e,i,h,m,v,N,M,P),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const E=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let _=E,S=R;_<S;_+=3){const w=_,L=_+1,C=_+2;a=Zl(this,u,e,i,h,m,v,w,L,C),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function SM(s,e,t,i,a,o,u,f){let d;if(e.side===Zn?d=i.intersectTriangle(u,o,a,!0,f):d=i.intersectTriangle(a,o,u,e.side===_s,f),d===null)return null;jl.copy(f),jl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(jl);return h<t.near||h>t.far?null:{distance:h,point:jl.clone(),object:s}}function Zl(s,e,t,i,a,o,u,f,d,h){s.getVertexPosition(f,$l),s.getVertexPosition(d,ql),s.getVertexPosition(h,Yl);const m=SM(s,e,t,i,$l,ql,Yl,n0);if(m){const v=new Y;Ai.getBarycoord(n0,$l,ql,Yl,v),a&&(m.uv=Ai.getInterpolatedAttribute(a,f,d,h,v,new ut)),o&&(m.uv1=Ai.getInterpolatedAttribute(o,f,d,h,v,new ut)),u&&(m.normal=Ai.getInterpolatedAttribute(u,f,d,h,v,new Y),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const x={a:f,b:d,c:h,normal:new Y,materialIndex:0};Ai.getNormal($l,ql,Yl,x.normal),m.face=x,m.barycoord=v}return m}class kv extends On{constructor(e=null,t=1,i=1,a,o,u,f,d,h=Fn,m=Fn,v,x){super(null,u,f,d,h,m,a,o,v,x),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i0 extends tr{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ra=new kt,r0=new kt,Ql=[],s0=new ys,yM=new kt,oo=new Sn,lo=new Ms;class a0 extends Sn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new i0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,yM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ys),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ra),s0.copy(e.boundingBox).applyMatrix4(ra),this.boundingBox.union(s0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ms),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ra),lo.copy(e.boundingSphere).applyMatrix4(ra),this.boundingSphere.union(lo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,o=i.length+1,u=e*o+1;for(let f=0;f<i.length;f++)i[f]=a[u+f]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(i),e.ray.intersectsSphere(lo)!==!1))for(let o=0;o<a;o++){this.getMatrixAt(o,ra),r0.multiplyMatrices(i,ra),oo.matrixWorld=r0,oo.raycast(e,Ql);for(let u=0,f=Ql.length;u<f;u++){const d=Ql[u];d.instanceId=o,d.object=this,t.push(d)}Ql.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new i0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new kv(new Float32Array(a*this.count),a,this.count,Eh,zi));const o=this.morphTexture.source.data.data;let u=0;for(let h=0;h<i.length;h++)u+=i[h];const f=this.geometry.morphTargetsRelative?1:1-u,d=a*e;return o[d]=f,o.set(i,d+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ds=new Ms,MM=new ut(.5,.5),Jl=new Y;class To{constructor(e=new Xr,t=new Xr,i=new Xr,a=new Xr,o=new Xr,u=new Xr){this.planes=[e,t,i,a,o,u]}set(e,t,i,a,o,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(a),f[4].copy(o),f[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi,i=!1){const a=this.planes,o=e.elements,u=o[0],f=o[1],d=o[2],h=o[3],m=o[4],v=o[5],x=o[6],y=o[7],E=o[8],R=o[9],_=o[10],S=o[11],w=o[12],L=o[13],C=o[14],D=o[15];if(a[0].setComponents(h-u,y-m,S-E,D-w).normalize(),a[1].setComponents(h+u,y+m,S+E,D+w).normalize(),a[2].setComponents(h+f,y+v,S+R,D+L).normalize(),a[3].setComponents(h-f,y-v,S-R,D-L).normalize(),i)a[4].setComponents(d,x,_,C).normalize(),a[5].setComponents(h-d,y-x,S-_,D-C).normalize();else if(a[4].setComponents(h-d,y-x,S-_,D-C).normalize(),t===Hi)a[5].setComponents(h+d,y+x,S+_,D+C).normalize();else if(t===Eo)a[5].setComponents(d,x,_,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=MM.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Jl.x=a.normal.x>0?e.max.x:e.min.x,Jl.y=a.normal.y>0?e.max.y:e.min.y,Jl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const o0=new kt;class Lh{constructor(){this.coordinateSystem=Hi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let a=0;a<t.length;a++){const o=t[a];o0.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),i[a]===void 0&&(i[a]=new To),i[a].setFromProjectionMatrix(o0,o.coordinateSystem,o.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new To),t[a].copy(i[a]);return this._count=e._count,this}clone(){return new Lh().copy(this)}}class Su extends Es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nu=new Y,Du=new Y,l0=new kt,uo=new Gu,eu=new Ms,td=new Y,u0=new Y;class Bv extends Pn{constructor(e=new Ln,t=new Su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)Nu.fromBufferAttribute(t,a-1),Du.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Nu.distanceTo(Du);e.setAttribute("lineDistance",new Wt(i,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eu.copy(i.boundingSphere),eu.applyMatrix4(a),eu.radius+=o,e.ray.intersectsSphere(eu)===!1)return;l0.copy(a).invert(),uo.copy(e.ray).applyMatrix4(l0);const f=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=i.index,x=i.attributes.position;if(m!==null){const y=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let R=y,_=E-1;R<_;R+=h){const S=m.getX(R),w=m.getX(R+1),L=tu(this,e,uo,d,S,w,R);L&&t.push(L)}if(this.isLineLoop){const R=m.getX(E-1),_=m.getX(y),S=tu(this,e,uo,d,R,_,E-1);S&&t.push(S)}}else{const y=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let R=y,_=E-1;R<_;R+=h){const S=tu(this,e,uo,d,R,R+1,R);S&&t.push(S)}if(this.isLineLoop){const R=tu(this,e,uo,d,E-1,y,E-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}}function tu(s,e,t,i,a,o,u){const f=s.geometry.attributes.position;if(Nu.fromBufferAttribute(f,a),Du.fromBufferAttribute(f,o),t.distanceSqToSegment(Nu,Du,td,u0)>i)return;td.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(td);if(!(h<e.near||h>e.far))return{distance:h,point:u0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const c0=new Y,f0=new Y;class d0 extends Bv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,o=t.count;a<o;a+=2)c0.fromBufferAttribute(t,a),f0.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+c0.distanceTo(f0);e.setAttribute("lineDistance",new Wt(i,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zv extends Es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const h0=new kt,rh=new Gu,nu=new Ms,iu=new Y;class EM extends Pn{constructor(e=new Ln,t=new zv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nu.copy(i.boundingSphere),nu.applyMatrix4(a),nu.radius+=o,e.ray.intersectsSphere(nu)===!1)return;h0.copy(a).invert(),rh.copy(e.ray).applyMatrix4(h0);const f=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=i.index,v=i.attributes.position;if(h!==null){const x=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let E=x,R=y;E<R;E++){const _=h.getX(E);iu.fromBufferAttribute(v,_),p0(iu,_,d,a,e,t,this)}}else{const x=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let E=x,R=y;E<R;E++)iu.fromBufferAttribute(v,E),p0(iu,E,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}}function p0(s,e,t,i,a,o,u){const f=rh.distanceSqToPoint(s);if(f<t){const d=new Y;rh.closestPointToPoint(s,d),d.applyMatrix4(i);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;o.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Hv extends On{constructor(e=[],t=pa,i,a,o,u,f,d,h,m){super(e,t,i,a,o,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wM extends On{constructor(e,t,i,a,o,u,f,d,h){super(e,t,i,a,o,u,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ga extends On{constructor(e,t,i=nr,a,o,u,f=Fn,d=Fn,h,m=Kr,v=1){if(m!==Kr&&m!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:v};super(x,a,o,u,f,d,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Gv extends ga{constructor(e,t=nr,i=pa,a,o,u=Fn,f=Fn,d,h=Kr){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,i,a,o,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vv extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ya extends Ln{constructor(e=1,t=1,i=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:u};const f=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],m=[],v=[];let x=0,y=0;E("z","y","x",-1,-1,i,t,e,u,o,0),E("z","y","x",1,-1,i,t,-e,u,o,1),E("x","z","y",1,1,e,i,t,a,u,2),E("x","z","y",1,-1,e,i,-t,a,u,3),E("x","y","z",1,-1,e,t,i,a,o,4),E("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(d),this.setAttribute("position",new Wt(h,3)),this.setAttribute("normal",new Wt(m,3)),this.setAttribute("uv",new Wt(v,2));function E(R,_,S,w,L,C,D,N,M,P,z){const F=C/M,G=D/P,K=C/2,ie=D/2,B=N/2,re=M+1,le=P+1;let W=0,Z=0;const q=new Y;for(let j=0;j<le;j++){const I=j*G-ie;for(let Q=0;Q<re;Q++){const be=Q*F-K;q[R]=be*w,q[_]=I*L,q[S]=B,h.push(q.x,q.y,q.z),q[R]=0,q[_]=0,q[S]=N>0?1:-1,m.push(q.x,q.y,q.z),v.push(Q/M),v.push(1-j/P),W+=1}}for(let j=0;j<P;j++)for(let I=0;I<M;I++){const Q=x+I+re*j,be=x+I+re*(j+1),te=x+(I+1)+re*(j+1),Se=x+(I+1)+re*j;d.push(Q,be,Se),d.push(be,te,Se),Z+=6}f.addGroup(y,Z,z),y+=Z,x+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nh extends Ln{constructor(e=1,t=1,i=1,a=32,o=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:o,openEnded:u,thetaStart:f,thetaLength:d};const h=this;a=Math.floor(a),o=Math.floor(o);const m=[],v=[],x=[],y=[];let E=0;const R=[],_=i/2;let S=0;w(),u===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(m),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(y,2));function w(){const C=new Y,D=new Y;let N=0;const M=(t-e)/i;for(let P=0;P<=o;P++){const z=[],F=P/o,G=F*(t-e)+e;for(let K=0;K<=a;K++){const ie=K/a,B=ie*d+f,re=Math.sin(B),le=Math.cos(B);D.x=G*re,D.y=-F*i+_,D.z=G*le,v.push(D.x,D.y,D.z),C.set(re,M,le).normalize(),x.push(C.x,C.y,C.z),y.push(ie,1-F),z.push(E++)}R.push(z)}for(let P=0;P<a;P++)for(let z=0;z<o;z++){const F=R[z][P],G=R[z+1][P],K=R[z+1][P+1],ie=R[z][P+1];(e>0||z!==0)&&(m.push(F,G,ie),N+=3),(t>0||z!==o-1)&&(m.push(G,K,ie),N+=3)}h.addGroup(S,N,0),S+=N}function L(C){const D=E,N=new ut,M=new Y;let P=0;const z=C===!0?e:t,F=C===!0?1:-1;for(let K=1;K<=a;K++)v.push(0,_*F,0),x.push(0,F,0),y.push(.5,.5),E++;const G=E;for(let K=0;K<=a;K++){const B=K/a*d+f,re=Math.cos(B),le=Math.sin(B);M.x=z*le,M.y=_*F,M.z=z*re,v.push(M.x,M.y,M.z),x.push(0,F,0),N.x=re*.5+.5,N.y=le*.5*F+.5,y.push(N.x,N.y),E++}for(let K=0;K<a;K++){const ie=D+K,B=G+K;C===!0?m.push(B,B+1,ie):m.push(B+1,B,ie),P+=3}h.addGroup(S,P,C===!0?1:2),S+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Co extends Ln{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],u=[];f(a),h(i),m(),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(o.slice(),3)),this.setAttribute("uv",new Wt(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(w){const L=new Y,C=new Y,D=new Y;for(let N=0;N<t.length;N+=3)y(t[N+0],L),y(t[N+1],C),y(t[N+2],D),d(L,C,D,w)}function d(w,L,C,D){const N=D+1,M=[];for(let P=0;P<=N;P++){M[P]=[];const z=w.clone().lerp(C,P/N),F=L.clone().lerp(C,P/N),G=N-P;for(let K=0;K<=G;K++)K===0&&P===N?M[P][K]=z:M[P][K]=z.clone().lerp(F,K/G)}for(let P=0;P<N;P++)for(let z=0;z<2*(N-P)-1;z++){const F=Math.floor(z/2);z%2===0?(x(M[P][F+1]),x(M[P+1][F]),x(M[P][F])):(x(M[P][F+1]),x(M[P+1][F+1]),x(M[P+1][F]))}}function h(w){const L=new Y;for(let C=0;C<o.length;C+=3)L.x=o[C+0],L.y=o[C+1],L.z=o[C+2],L.normalize().multiplyScalar(w),o[C+0]=L.x,o[C+1]=L.y,o[C+2]=L.z}function m(){const w=new Y;for(let L=0;L<o.length;L+=3){w.x=o[L+0],w.y=o[L+1],w.z=o[L+2];const C=_(w)/2/Math.PI+.5,D=S(w)/Math.PI+.5;u.push(C,1-D)}E(),v()}function v(){for(let w=0;w<u.length;w+=6){const L=u[w+0],C=u[w+2],D=u[w+4],N=Math.max(L,C,D),M=Math.min(L,C,D);N>.9&&M<.1&&(L<.2&&(u[w+0]+=1),C<.2&&(u[w+2]+=1),D<.2&&(u[w+4]+=1))}}function x(w){o.push(w.x,w.y,w.z)}function y(w,L){const C=w*3;L.x=e[C+0],L.y=e[C+1],L.z=e[C+2]}function E(){const w=new Y,L=new Y,C=new Y,D=new Y,N=new ut,M=new ut,P=new ut;for(let z=0,F=0;z<o.length;z+=9,F+=6){w.set(o[z+0],o[z+1],o[z+2]),L.set(o[z+3],o[z+4],o[z+5]),C.set(o[z+6],o[z+7],o[z+8]),N.set(u[F+0],u[F+1]),M.set(u[F+2],u[F+3]),P.set(u[F+4],u[F+5]),D.copy(w).add(L).add(C).divideScalar(3);const G=_(D);R(N,F+0,w,G),R(M,F+2,L,G),R(P,F+4,C,G)}}function R(w,L,C,D){D<0&&w.x===1&&(u[L]=w.x-1),C.x===0&&C.z===0&&(u[L]=D/2/Math.PI+.5)}function _(w){return Math.atan2(w.z,-w.x)}function S(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.vertices,e.indices,e.radius,e.detail)}}const ru=new Y,su=new Y,nd=new Y,au=new Ai;class TM extends Ln{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),o=Math.cos(xu*t),u=e.getIndex(),f=e.getAttribute("position"),d=u?u.count:f.count,h=[0,0,0],m=["a","b","c"],v=new Array(3),x=new Map,y=[];for(let E=0;E<d;E+=3){u?(h[0]=u.getX(E),h[1]=u.getX(E+1),h[2]=u.getX(E+2)):(h[0]=E,h[1]=E+1,h[2]=E+2);const{a:R,b:_,c:S}=au;if(R.fromBufferAttribute(f,h[0]),_.fromBufferAttribute(f,h[1]),S.fromBufferAttribute(f,h[2]),au.getNormal(nd),v[0]=`${Math.round(R.x*a)},${Math.round(R.y*a)},${Math.round(R.z*a)}`,v[1]=`${Math.round(_.x*a)},${Math.round(_.y*a)},${Math.round(_.z*a)}`,v[2]=`${Math.round(S.x*a)},${Math.round(S.y*a)},${Math.round(S.z*a)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let w=0;w<3;w++){const L=(w+1)%3,C=v[w],D=v[L],N=au[m[w]],M=au[m[L]],P=`${C}_${D}`,z=`${D}_${C}`,F=x.get(z);F?(nd.dot(F.normal)<=o&&(y.push(N.x,N.y,N.z),y.push(M.x,M.y,M.z)),x.set(z,null)):x.has(P)||x.set(P,{index0:h[w],index1:h[L],normal:nd.clone()})}}for(const E of x.values())if(E){const{index0:R,index1:_}=E;ru.fromBufferAttribute(f,R),su.fromBufferAttribute(f,_),y.push(ru.x,ru.y,ru.z),y.push(su.x,su.y,su.z)}this.setAttribute("position",new Wt(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ps extends Co{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ps(e.radius,e.detail)}}class Dh extends Co{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dh(e.radius,e.detail)}}class Vu extends Ln{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,u=t/2,f=Math.floor(i),d=Math.floor(a),h=f+1,m=d+1,v=e/f,x=t/d,y=[],E=[],R=[],_=[];for(let S=0;S<m;S++){const w=S*x-u;for(let L=0;L<h;L++){const C=L*v-o;E.push(C,-w,0),R.push(0,0,1),_.push(L/f),_.push(1-S/d)}}for(let S=0;S<d;S++)for(let w=0;w<f;w++){const L=w+h*S,C=w+h*(S+1),D=w+1+h*(S+1),N=w+1+h*S;y.push(L,C,N),y.push(C,D,N)}this.setIndex(y),this.setAttribute("position",new Wt(E,3)),this.setAttribute("normal",new Wt(R,3)),this.setAttribute("uv",new Wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ih extends Ln{constructor(e=1,t=32,i=16,a=0,o=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:o,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(u+f,Math.PI);let h=0;const m=[],v=new Y,x=new Y,y=[],E=[],R=[],_=[];for(let S=0;S<=i;S++){const w=[],L=S/i,C=u+L*f,D=e*Math.cos(C),N=Math.sqrt(e*e-D*D);let M=0;S===0&&u===0?M=.5/t:S===i&&d===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const z=P/t,F=a+z*o;v.x=-N*Math.cos(F),v.y=D,v.z=N*Math.sin(F),E.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),_.push(z+M,1-L),w.push(h++)}m.push(w)}for(let S=0;S<i;S++)for(let w=0;w<t;w++){const L=m[S][w+1],C=m[S][w],D=m[S+1][w],N=m[S+1][w+1];(S!==0||u>0)&&y.push(L,C,N),(S!==i-1||d<Math.PI)&&y.push(C,D,N)}this.setIndex(y),this.setAttribute("position",new Wt(E,3)),this.setAttribute("normal",new Wt(R,3)),this.setAttribute("uv",new Wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ih(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uh extends Co{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,a,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uh(e.radius,e.detail)}}class Iu extends Ln{constructor(e=1,t=.4,i=12,a=48,o=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:o,thetaStart:u,thetaLength:f},i=Math.floor(i),a=Math.floor(a);const d=[],h=[],m=[],v=[],x=new Y,y=new Y,E=new Y;for(let R=0;R<=i;R++){const _=u+R/i*f;for(let S=0;S<=a;S++){const w=S/a*o;y.x=(e+t*Math.cos(_))*Math.cos(w),y.y=(e+t*Math.cos(_))*Math.sin(w),y.z=t*Math.sin(_),h.push(y.x,y.y,y.z),x.x=e*Math.cos(w),x.y=e*Math.sin(w),E.subVectors(y,x).normalize(),m.push(E.x,E.y,E.z),v.push(S/a),v.push(R/i)}}for(let R=1;R<=i;R++)for(let _=1;_<=a;_++){const S=(a+1)*R+_-1,w=(a+1)*(R-1)+_-1,L=(a+1)*(R-1)+_,C=(a+1)*R+_;d.push(S,w,C),d.push(w,L,C)}this.setIndex(d),this.setAttribute("position",new Wt(h,3)),this.setAttribute("normal",new Wt(m,3)),this.setAttribute("uv",new Wt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function va(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];if(m0(a))a.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(m0(a[0])){const o=[];for(let u=0,f=a.length;u<f;u++)o[u]=a[u].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function jn(s){const e={};for(let t=0;t<s.length;t++){const i=va(s[t]);for(const a in i)e[a]=i[a]}return e}function m0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function AM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Ao={clone:va,merge:jn};var RM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RM,this.fragmentShader=CM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=va(e.uniforms),this.uniformsGroups=AM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(a.value);break;case"v2":this.uniforms[i].value=new ut().fromArray(a.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(a.value);break;case"v4":this.uniforms[i].value=new on().fromArray(a.value);break;case"m3":this.uniforms[i].value=new mt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new kt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Xv extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ou extends Es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bM extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PM extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const id={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(g0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!g0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function g0(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class LM{constructor(e,t,i){const a=this;let o=!1,u=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(m){f++,o===!1&&a.onStart!==void 0&&a.onStart(m,u,f),o=!0},this.itemEnd=function(m){u++,a.onProgress!==void 0&&a.onProgress(m,u,f),u===f&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return h.push(m,v),this},this.removeHandler=function(m){const v=h.indexOf(m);return v!==-1&&h.splice(v,2),this},this.getHandler=function(m){for(let v=0,x=h.length;v<x;v+=2){const y=h[v],E=h[v+1];if(y.global&&(y.lastIndex=0),y.test(m))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const NM=new LM;class Fh{constructor(e){this.manager=e!==void 0?e:NM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";const sa=new WeakMap;class DM extends Fh{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=id.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0);else{let v=sa.get(u);v===void 0&&(v=[],sa.set(u,v)),v.push({onLoad:t,onError:a})}return u}const f=wo("img");function d(){m(),t&&t(this);const v=sa.get(this)||[];for(let x=0;x<v.length;x++){const y=v[x];y.onLoad&&y.onLoad(this)}sa.delete(this),o.manager.itemEnd(e)}function h(v){m(),a&&a(v),id.remove(`image:${e}`);const x=sa.get(this)||[];for(let y=0;y<x.length;y++){const E=x[y];E.onError&&E.onError(v)}sa.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),id.add(`image:${e}`,f),o.manager.itemStart(e),f.fetchPriority=this.priority,f.src=e,f}}class IM extends Fh{constructor(e){super(e)}load(e,t,i,a){const o=new On,u=new DM(this.manager);return u.setPriority(this.priority),u.setCache(this.cache),u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){o.image=f,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class $v extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class UM extends $v{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const rd=new kt,v0=new Y,_0=new Y;class FM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;v0.setFromMatrixPosition(e.matrixWorld),t.position.copy(v0),_0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){rd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(rd,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,u=a?a.z/o.x:1,f=a?a.w/o.y:1,d=a?a.x/o.x:0,h=a?a.y/o.y:0;e.coordinateSystem===Eo||e.reversedDepth?t.set(.5*u,0,0,.5*u+d,0,.5*f,0,.5*f+h,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+d,0,.5*f,0,.5*f+h,0,0,.5,.5,0,0,0,1),t.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lu=new Y,uu=new Sa,Ki=new Y;class qv extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lu,uu,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,uu,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(lu,uu,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,uu,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new Y,x0=new ut,S0=new ut;class Ti extends qv{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ih*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ih*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,x0,S0),t.subVectors(S0,x0)}setViewOffset(e,t,i,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xu*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*a/d,t-=u.offsetY*i/h,a*=u.width/d,i*=u.height/h}const f=this.filmOffset;f!==0&&(o+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class OM extends FM{constructor(){super(new Ti(90,1,.5,500)),this.isPointLightShadow=!0}}class y0 extends $v{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new OM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Yv extends qv{constructor(e=-1,t=1,i=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,u=i+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(o,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const aa=-90,oa=1;class sh extends Pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ti(aa,oa,e,t);a.layers=this.layers,this.add(a);const o=new Ti(aa,oa,e,t);o.layers=this.layers,this.add(o);const u=new Ti(aa,oa,e,t);u.layers=this.layers,this.add(u);const f=new Ti(aa,oa,e,t);f.layers=this.layers,this.add(f);const d=new Ti(aa,oa,e,t);d.layers=this.layers,this.add(d);const h=new Ti(aa,oa,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,u,f,d]=t;for(const h of t)this.remove(h);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,f,d,h,m]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,2,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.mipmapsAutoUpdate=R,e.setRenderTarget(i,5,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,x,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class kM extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class BM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=zM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function zM(){this._document.hidden===!1&&this.reset()}const M0=new kt;class HM{constructor(e,t,i=0,a=1/0){this.ray=new Gu(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new bh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return M0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(M0),this}intersectObject(e,t=!0,i=[]){return ah(e,this,i,t),i.sort(E0),i}intersectObjects(e,t=!0,i=[]){for(let a=0,o=e.length;a<o;a++)ah(e[a],this,i,t);return i.sort(E0),i}}function E0(s,e){return s.distance-e.distance}function ah(s,e,t,i){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const o=s.children;for(let u=0,f=o.length;u<f;u++)ah(o[u],e,t,!0)}}function w0(s,e,t,i){const a=GM(i);switch(t){case Cv:return s*e;case Eh:return s*e/a.components*a.byteLength;case wh:return s*e/a.components*a.byteLength;case xs:return s*e*2/a.components*a.byteLength;case Th:return s*e*2/a.components*a.byteLength;case bv:return s*e*3/a.components*a.byteLength;case er:return s*e*4/a.components*a.byteLength;case Ah:return s*e*4/a.components*a.byteLength;case pu:case mu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gu:case vu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:case bd:return Math.max(s,16)*Math.max(e,8)/4;case Ad:case Cd:return Math.max(s,8)*Math.max(e,8)/2;case Pd:case Ld:case Dd:case Id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nd:case Cu:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jd:case Zd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jd:case eh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bu:case th:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function GM(s){switch(s){case vi:case wv:return{byteLength:1,components:1};case Mo:case Tv:case ai:return{byteLength:2,components:1};case yh:case Mh:return{byteLength:2,components:4};case nr:case Sh:case zi:return{byteLength:4,components:1};case Av:case Rv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kv(){let s=null,e=!1,t=null,i=null;function a(o,u){i=s.requestAnimationFrame(a),t(o,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function VM(s){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,v=h.byteLength,x=s.createBuffer();s.bindBuffer(d,x),s.bufferData(d,h,m),f.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function i(f,d,h){const m=d.array,v=d.updateRanges;if(s.bindBuffer(h,f),v.length===0)s.bufferSubData(h,0,m);else{v.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<v.length;y++){const E=v[x],R=v[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++x,v[x]=R)}v.length=x+1;for(let y=0,E=v.length;y<E;y++){const R=v[y];s.bufferSubData(h,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:a,remove:o,update:u}}var WM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,JM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xE="gl_FragColor = linearToOutputTexel( gl_FragColor );",SE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,UE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,FE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XE=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ew=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iw=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ww=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ow=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ww=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$w=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:WM,alphahash_pars_fragment:XM,alphamap_fragment:$M,alphamap_pars_fragment:qM,alphatest_fragment:YM,alphatest_pars_fragment:KM,aomap_fragment:jM,aomap_pars_fragment:ZM,batching_pars_vertex:QM,batching_vertex:JM,begin_vertex:eE,beginnormal_vertex:tE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:rE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:aE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:lE,color_fragment:uE,color_pars_fragment:cE,color_pars_vertex:fE,color_vertex:dE,common:hE,defaultnormal_vertex:pE,displacementmap_pars_vertex:mE,displacementmap_vertex:gE,emissivemap_fragment:vE,emissivemap_pars_fragment:_E,colorspace_fragment:xE,colorspace_pars_fragment:SE,envmap_fragment:yE,envmap_common_pars_fragment:ME,envmap_pars_fragment:EE,envmap_pars_vertex:wE,envmap_physical_pars_fragment:UE,envmap_vertex:TE,fog_vertex:AE,fog_pars_vertex:RE,fog_fragment:CE,fog_pars_fragment:bE,gradientmap_pars_fragment:PE,lightmap_pars_fragment:LE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:DE,lights_pars_begin:IE,lights_toon_fragment:FE,lights_toon_pars_fragment:OE,lights_phong_fragment:kE,lights_phong_pars_fragment:BE,lights_physical_fragment:zE,lights_physical_pars_fragment:HE,lights_fragment_begin:GE,lights_fragment_maps:VE,lights_fragment_end:WE,lightprobes_pars_fragment:XE,logdepthbuf_fragment:$E,logdepthbuf_pars_fragment:qE,logdepthbuf_pars_vertex:YE,logdepthbuf_vertex:KE,map_fragment:jE,map_pars_fragment:ZE,map_particle_fragment:QE,map_particle_pars_fragment:JE,metalnessmap_fragment:ew,metalnessmap_pars_fragment:tw,morphinstance_vertex:nw,morphcolor_vertex:iw,morphnormal_vertex:rw,morphtarget_pars_vertex:sw,morphtarget_vertex:aw,normal_fragment_begin:ow,normal_fragment_maps:lw,normal_pars_fragment:uw,normal_pars_vertex:cw,normal_vertex:fw,normalmap_pars_fragment:dw,clearcoat_normal_fragment_begin:hw,clearcoat_normal_fragment_maps:pw,clearcoat_pars_fragment:mw,iridescence_pars_fragment:gw,opaque_fragment:vw,packing:_w,premultiplied_alpha_fragment:xw,project_vertex:Sw,dithering_fragment:yw,dithering_pars_fragment:Mw,roughnessmap_fragment:Ew,roughnessmap_pars_fragment:ww,shadowmap_pars_fragment:Tw,shadowmap_pars_vertex:Aw,shadowmap_vertex:Rw,shadowmask_pars_fragment:Cw,skinbase_vertex:bw,skinning_pars_vertex:Pw,skinning_vertex:Lw,skinnormal_vertex:Nw,specularmap_fragment:Dw,specularmap_pars_fragment:Iw,tonemapping_fragment:Uw,tonemapping_pars_fragment:Fw,transmission_fragment:Ow,transmission_pars_fragment:kw,uv_pars_fragment:Bw,uv_pars_vertex:zw,uv_vertex:Hw,worldpos_vertex:Gw,background_vert:Vw,background_frag:Ww,backgroundCube_vert:Xw,backgroundCube_frag:$w,cube_vert:qw,cube_frag:Yw,depth_vert:Kw,depth_frag:jw,distance_vert:Zw,distance_frag:Qw,equirect_vert:Jw,equirect_frag:eT,linedashed_vert:tT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:rT,meshlambert_vert:sT,meshlambert_frag:aT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:uT,meshnormal_frag:cT,meshphong_vert:fT,meshphong_frag:dT,meshphysical_vert:hT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:vT,points_frag:_T,shadow_vert:xT,shadow_frag:ST,sprite_vert:yT,sprite_frag:MT},He={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Zi={basic:{uniforms:jn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:jn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:jn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:jn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:jn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new ot(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:jn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:jn([He.points,He.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:jn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:jn([He.common,He.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:jn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:jn([He.sprite,He.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:jn([He.common,He.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:jn([He.lights,He.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Zi.physical={uniforms:jn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const cu={r:0,b:0,g:0},ET=new kt,jv=new mt;jv.set(-1,0,0,0,1,0,0,0,1);function wT(s,e,t,i,a,o){const u=new ot(0);let f=a===!0?0:1,d,h,m=null,v=0,x=null;function y(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){const C=w.backgroundBlurriness>0;L=e.get(L,C)}return L}function E(w){let L=!1;const C=y(w);C===null?_(u,f):C&&C.isColor&&(_(C,1),L=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(w,L){const C=y(L);C&&C.isCubeTexture?(h===void 0&&(h=new Sn(new ya(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:va(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(L.backgroundRotation)).transpose(),C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(jv),h.material.toneMapped=Tt.getTransfer(C.colorSpace)!==Ut,(m!==C||v!==C.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,m=C,v=C.version,x=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new Sn(new Vu(2,2),new si({name:"BackgroundMaterial",uniforms:va(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=Tt.getTransfer(C.colorSpace)!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||v!==C.version||x!==s.toneMapping)&&(d.material.needsUpdate=!0,m=C,v=C.version,x=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function _(w,L){w.getRGB(cu,Wv(s)),t.buffers.color.setClear(cu.r,cu.g,cu.b,L,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,L=1){u.set(w),f=L,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,_(u,f)},render:E,addToRenderList:R,dispose:S}}function TT(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=x(null);let o=a,u=!1;function f(G,K,ie,B,re){let le=!1;const W=v(G,B,ie,K);o!==W&&(o=W,h(o.object)),le=y(G,B,ie,re),le&&E(G,B,ie,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,C(G,K,ie,B),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function d(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function m(G){return s.deleteVertexArray(G)}function v(G,K,ie,B){const re=B.wireframe===!0;let le=i[K.id];le===void 0&&(le={},i[K.id]=le);const W=G.isInstancedMesh===!0?G.id:0;let Z=le[W];Z===void 0&&(Z={},le[W]=Z);let q=Z[ie.id];q===void 0&&(q={},Z[ie.id]=q);let j=q[re];return j===void 0&&(j=x(d()),q[re]=j),j}function x(G){const K=[],ie=[],B=[];for(let re=0;re<t;re++)K[re]=0,ie[re]=0,B[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ie,attributeDivisors:B,object:G,attributes:{},index:null}}function y(G,K,ie,B){const re=o.attributes,le=K.attributes;let W=0;const Z=ie.getAttributes();for(const q in Z)if(Z[q].location>=0){const I=re[q];let Q=le[q];if(Q===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;W++}return o.attributesNum!==W||o.index!==B}function E(G,K,ie,B){const re={},le=K.attributes;let W=0;const Z=ie.getAttributes();for(const q in Z)if(Z[q].location>=0){let I=le[q];I===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),re[q]=Q,W++}o.attributes=re,o.attributesNum=W,o.index=B}function R(){const G=o.newAttributes;for(let K=0,ie=G.length;K<ie;K++)G[K]=0}function _(G){S(G,0)}function S(G,K){const ie=o.newAttributes,B=o.enabledAttributes,re=o.attributeDivisors;ie[G]=1,B[G]===0&&(s.enableVertexAttribArray(G),B[G]=1),re[G]!==K&&(s.vertexAttribDivisor(G,K),re[G]=K)}function w(){const G=o.newAttributes,K=o.enabledAttributes;for(let ie=0,B=K.length;ie<B;ie++)K[ie]!==G[ie]&&(s.disableVertexAttribArray(ie),K[ie]=0)}function L(G,K,ie,B,re,le,W){W===!0?s.vertexAttribIPointer(G,K,ie,re,le):s.vertexAttribPointer(G,K,ie,B,re,le)}function C(G,K,ie,B){R();const re=B.attributes,le=ie.getAttributes(),W=K.defaultAttributeValues;for(const Z in le){const q=le[Z];if(q.location>=0){let j=re[Z];if(j===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),j!==void 0){const I=j.normalized,Q=j.itemSize,be=e.get(j);if(be===void 0)continue;const te=be.buffer,Se=be.type,Ae=be.bytesPerElement,Be=Se===s.INT||Se===s.UNSIGNED_INT||j.gpuType===Sh;if(j.isInterleavedBufferAttribute){const ye=j.data,Ve=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,vt=j.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let it=0;it<q.locationSize;it++)S(q.location+it,ye.meshPerAttribute);G.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let it=0;it<q.locationSize;it++)_(q.location+it);s.bindBuffer(s.ARRAY_BUFFER,te);for(let it=0;it<q.locationSize;it++)L(q.location+it,Q/q.locationSize,Se,I,Ve*Ae,(vt+Q/q.locationSize*it)*Ae,Be)}else{if(j.isInstancedBufferAttribute){for(let ye=0;ye<q.locationSize;ye++)S(q.location+ye,j.meshPerAttribute);G.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ye=0;ye<q.locationSize;ye++)_(q.location+ye);s.bindBuffer(s.ARRAY_BUFFER,te);for(let ye=0;ye<q.locationSize;ye++)L(q.location+ye,Q/q.locationSize,Se,I,Q*Ae,Q/q.locationSize*ye*Ae,Be)}}else if(W!==void 0){const I=W[Z];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(q.location,I);break;case 3:s.vertexAttrib3fv(q.location,I);break;case 4:s.vertexAttrib4fv(q.location,I);break;default:s.vertexAttrib1fv(q.location,I)}}}}w()}function D(){z();for(const G in i){const K=i[G];for(const ie in K){const B=K[ie];for(const re in B){const le=B[re];for(const W in le)m(le[W].object),delete le[W];delete B[re]}}delete i[G]}}function N(G){if(i[G.id]===void 0)return;const K=i[G.id];for(const ie in K){const B=K[ie];for(const re in B){const le=B[re];for(const W in le)m(le[W].object),delete le[W];delete B[re]}}delete i[G.id]}function M(G){for(const K in i){const ie=i[K];for(const B in ie){const re=ie[B];if(re[G.id]===void 0)continue;const le=re[G.id];for(const W in le)m(le[W].object),delete le[W];delete re[G.id]}}}function P(G){for(const K in i){const ie=i[K],B=G.isInstancedMesh===!0?G.id:0,re=ie[B];if(re!==void 0){for(const le in re){const W=re[le];for(const Z in W)m(W[Z].object),delete W[Z];delete re[le]}delete ie[B],Object.keys(ie).length===0&&delete i[K]}}}function z(){F(),u=!0,o!==a&&(o=a,h(o.object))}function F(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:z,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfObject:P,releaseStatesOfProgram:M,initAttributes:R,enableAttribute:_,disableUnusedAttributes:w}}function AT(s,e,t){let i;function a(d){i=d}function o(d,h){s.drawArrays(i,d,h),t.update(h,i,1)}function u(d,h,m){m!==0&&(s.drawArraysInstanced(i,d,h,m),t.update(h,i,m))}function f(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,m);let x=0;for(let y=0;y<m;y++)x+=h[y];t.update(x,i,1)}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=f}function RT(s,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(M){return!(M!==er&&i.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){const P=M===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==vi&&M!==zi&&!P&&i.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function d(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(ct("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=t.logarithmicDepthBuffer===!0&&v===!1;t.reversedDepthBuffer===!0&&v===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&v===!0&&ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:C,maxSamples:D,samples:N}}function CT(s){const e=this;let t=null,i=0,a=!1,o=!1;const u=new Xr,f=new mt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||i!==0||a;return a=x,i=v.length,y},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,x){t=m(v,x,0)},this.setState=function(v,x,y){const E=v.clippingPlanes,R=v.clipIntersection,_=v.clipShadows,S=s.get(v);if(!a||E===null||E.length===0||o&&!_)o?m(null):h();else{const w=o?0:i,L=w*4;let C=S.clippingState||null;d.value=C,C=m(E,x,L,y);for(let D=0;D!==L;++D)C[D]=t[D];S.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(v,x,y,E){const R=v!==null?v.length:0;let _=null;if(R!==0){if(_=d.value,E!==!0||_===null){const S=y+R*4,w=x.matrixWorldInverse;f.getNormalMatrix(w),(_===null||_.length<S)&&(_=new Float32Array(S));for(let L=0,C=y;L!==R;++L,C+=4)u.copy(v[L]).applyMatrix4(w,f),u.normal.toArray(_,C),_[C+3]=u.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,_}}class Oh extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Hv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ya(5,5,5),o=new si({name:"CubemapFromEquirect",uniforms:va(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:vs});o.uniforms.tEquirect.value=t;const u=new Sn(a,o),f=t.minFilter;return t.minFilter===qr&&(t.minFilter=ri),new sh(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,a);e.setRenderTarget(o)}}const T0=256,bT=3,PT=20,Zv=256,Qv=16,LT=3,NT=new Y,DT=new ot;class Uu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new sh(1,10,null),this._boxMesh=new Sn(new ya(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:u=256,position:f=NT}=o,d=this._renderer;this._setSize(u);const h=this._allocateTarget(),m=this._getSourceTarget(!0);t>0&&(m.texture.mipmapsAutoUpdate=!1);const v=d.autoClear,x=d.autoClearColor,y=d.autoClearDepth,E=d.autoClearStencil,R=e.background;d.autoClear=!0,d.autoClearColor=!0,d.autoClearDepth=!0,d.autoClearStencil=!0,R===null&&(e.background=d.getClearColor(DT));const _=new sh(i,a,m);return _.position.copy(f),_.update(d,e),d.autoClear=v,d.autoClearColor=x,d.autoClearDepth=y,d.autoClearStencil=E,e.background=R,t>0&&(m.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(T0,Zy(e))}_fromTexture(e,t){e.mapping===pa||e.mapping===yo?this._setSize(e.image.length===0?T0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=A0(e,!1,!1),i=Math.log2(e)-bT;for(let a=0;a<=i;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=A0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const a=this._boxMesh,o=this._cubeCamera;a.material=i,o.renderTarget=e,o.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),o.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===pa||e.mapping===yo?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=R0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=IT(),this._integrationMaterial=UT());const t=this._cubeSize,i=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(t/Qv);for(let u=0;u<=i;u++){const f=Uu.lodToRoughness(u,i);if(u>i-LT)o.roughness.value=f,this._renderCube(e,u,this._integrationMaterial);else{const d=f>0?Math.log2(t)+.5*Math.log2(6/(Zv*Math.pow(f,4)))+.5:0;a.roughness.value=f,a.lodBias.value=d,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=FT());const i=this._blurMaterial,a=i.uniforms,o=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=o.texture,this._renderCube(e,0,i),a.envMap.value=e.texture,this._renderCube(o,0,i)}}function A0(s,e,t){return new Oh(s,{minFilter:qr,generateMipmaps:e,type:ai,colorSpace:Pu,depthBuffer:t})}function bo(s,e,t){return new si({name:s,uniforms:e,vertexShader:xt.cube_vert,fragmentShader:t,side:Zn,blending:vs,depthTest:!1,depthWrite:!1})}function IT(){return bo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zv}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function UT(){return bo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qv}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function FT(){return bo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${PT}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function R0(){return bo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function C0(){return bo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function OT(s){let e=new WeakMap,t=new WeakMap,i=null;function a(x,y=!1){return x==null?null:y?u(x):o(x)}function o(x){if(x&&x.isTexture){const y=x.mapping;if(y===Pf||y===Lf)if(e.has(x)){const E=e.get(x).texture;return f(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const R=new Oh(E.height);return R.fromEquirectangularTexture(s,x),e.set(x,R),x.addEventListener("dispose",h),f(R.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture&&x.isPMREMTexture!==!0){const y=x.mapping,E=y===Pf||y===Lf,R=y===pa||y===yo;if(E||R){let _=t.get(x);const S=_!==void 0?_.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==S)return i===null&&(i=new Uu(s)),_=E?i.fromEquirectangular(x,_):i.fromCubemap(x,_),_.texture.pmremVersion=x.pmremVersion,t.set(x,_),_.texture;if(_!==void 0)return _.texture;{const w=x.image;return E&&w&&w.height>0||R&&w&&d(w)?(i===null&&(i=new Uu(s)),_=E?i.fromEquirectangular(x):i.fromCubemap(x),_.texture.pmremVersion=x.pmremVersion,t.set(x,_),x.addEventListener("dispose",m),_.texture):null}}}return x}function f(x,y){return y===Pf?x.mapping=pa:y===Lf&&(x.mapping=yo),x}function d(x){let y=0;const E=6;for(let R=0;R<E;R++)x[R]!==void 0&&y++;return y===E}function h(x){const y=x.target;y.removeEventListener("dispose",h);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function m(x){const y=x.target;y.removeEventListener("dispose",m);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:v}}function kT(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=s.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&_u("WebGLRenderer: "+i+" extension not supported."),a}}}function BT(s,e,t,i){const a={},o=new WeakMap,u=new FinalizationRegistry(E=>delete a[E]);function f(E){d(E.target)}function d(E){E.index!==null&&e.remove(E.index);for(const _ in E.attributes)e.remove(E.attributes[_]);E.removeEventListener("dispose",f),delete a[E.id],u.unregister(E);const R=o.get(E);R&&(e.remove(R),o.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function h(E,R){return a[R.id]!==void 0||(R.addEventListener("dispose",f),a[R.id]=new WeakRef(R),u.register(R,R.id,R),t.memory.geometries++),R}function m(E){const R=E.attributes;for(const _ in R)e.update(R[_],s.ARRAY_BUFFER)}function v(E){const R=E.index,_=E.attributes.position;let S=0;if(_===void 0)return;const w=R!==null?R.array.length:_.array.length/3-1,L=_.count>=65535?Ov:Fv,C=new L(Math.ceil(w/3)*6,1),D=C.array;if(R!==null){const M=R.array;S=R.version;for(let P=0,z=0;P<w;P+=3){const F=M[P+0],G=M[P+1],K=M[P+2];D[z++]=F,D[z++]=G,D[z++]=G,D[z++]=K,D[z++]=K,D[z++]=F}}else{S=_.version;for(let M=0,P=0;M<w;M+=3){const z=M+0,F=M+1,G=M+2;D[P++]=z,D[P++]=F,D[P++]=F,D[P++]=G,D[P++]=G,D[P++]=z}}C.version=S;const N=o.get(E);N&&e.remove(N),o.set(E,C)}function x(E){const R=o.get(E);if(R){const _=E.index;_!==null&&R.version<_.version&&v(E)}else v(E);return o.get(E)}function y(){for(const E in a){const R=a[E].deref();R!==void 0&&d(R)}}return{get:h,update:m,getWireframeAttribute:x,dispose:y}}function zT(s,e,t){let i;function a(v){i=v}let o,u;function f(v){o=v.type,u=v.bytesPerElement}function d(v,x){s.drawElements(i,x,o,v*u),t.update(x,i,1)}function h(v,x,y){y!==0&&(s.drawElementsInstanced(i,x,o,v*u,y),t.update(x,i,y))}function m(v,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,v,0,y);let R=0;for(let _=0;_<y;_++)R+=x[_];t.update(R,i,1)}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function HT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(o/3);break;case s.LINES:t.lines+=f*(o/2);break;case s.LINE_STRIP:t.lines+=f*(o-1);break;case s.LINE_LOOP:t.lines+=f*o;break;case s.POINTS:t.points+=f*o;break;default:Lt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function GT(s,e,t){const i=new WeakMap,a=new on;function o(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let x=i.get(f);if(x===void 0||x.count!==v){let F=function(){P.dispose(),i.delete(f),f.removeEventListener("dispose",F)};var y=F;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let C=0;E===!0&&(C=1),R===!0&&(C=2),_===!0&&(C=3);let D=f.attributes.position.count*C,N=1;D>e.maxTextureSize&&(N=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const M=new Float32Array(D*N*4*v),P=new Iv(M,D,N,v);P.type=zi,P.needsUpdate=!0;const z=C*4;for(let G=0;G<v;G++){const K=S[G],ie=w[G],B=L[G],re=D*N*4*G;for(let le=0;le<K.count;le++){const W=le*z;E===!0&&(a.fromBufferAttribute(K,le),M[re+W+0]=a.x,M[re+W+1]=a.y,M[re+W+2]=a.z,M[re+W+3]=0),R===!0&&(a.fromBufferAttribute(ie,le),M[re+W+4]=a.x,M[re+W+5]=a.y,M[re+W+6]=a.z,M[re+W+7]=0),_===!0&&(a.fromBufferAttribute(B,le),M[re+W+8]=a.x,M[re+W+9]=a.y,M[re+W+10]=a.z,M[re+W+11]=B.itemSize===4?a.w:1)}}x={count:v,texture:P,size:new ut(D,N)},i.set(f,x),f.addEventListener("dispose",F)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let _=0;_<h.length;_++)E+=h[_];const R=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",R),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:o}}function VT(s,e,t,i,a){let o=new WeakMap;function u(h){const m=a.render.frame,v=h.geometry,x=e.get(h,v);if(o.get(x)!==m&&(e.update(x),o.set(x,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return x}function f(){o=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:u,dispose:f}}const WT={[hh]:"LINEAR_TONE_MAPPING",[ph]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[gh]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[vh]:"CUSTOM_TONE_MAPPING"};function XT(s,e,t,i,a,o){const u=new oi(e,t,{type:s,depthBuffer:a,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,d=null,h=null;const m=new Ln;m.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const v=new Xv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Sn(m,v),y=new Yv(-1,1,1,-1,0,1);let E=null,R=null,_=!1,S,w=null,L=[],C=!1;this.setSize=function(D,N){u.setSize(D,N),f!==null&&f.setSize(D,N),d!==null&&d.setSize(D,N);for(let M=0;M<L.length;M++){const P=L[M];P.setSize&&P.setSize(D,N)}},this.setEffects=function(D){L=D,C=L.length>0&&L[0].isRenderPass===!0;const N=u.width,M=u.height;L.length>0&&f===null&&(f=new oi(N,M,{type:ai,depthBuffer:!1,stencilBuffer:!1}),d=new oi(N,M,{type:ai,depthBuffer:!1,stencilBuffer:!1}));const P=a===!0&&L.some(z=>z.needsDepthTexture===!0);P!==(u.depthTexture!==null)&&(P===!0&&h===null&&(h=new ga(N,M),o===!0&&(h.format=Yr,h.type=ma)),u.dispose(),u.depthTexture=P?h:null,u.resolveDepthBuffer=P,u.storeMultisampledDepthBuffer=P);for(let z=0;z<L.length;z++){const F=L[z];F.setSize&&F.setSize(N,M),P&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(h)}},this.begin=function(D,N){if(_||D.toneMapping===_r&&L.length===0)return!1;if(w=N,N!==null){const M=N.width,P=N.height;(u.width!==M||u.height!==P)&&this.setSize(M,P)}return C===!1&&D.setRenderTarget(u),S=D.toneMapping,D.toneMapping=_r,!0},this.hasRenderPass=function(){return C},this.end=function(D,N){D.toneMapping=S,_=!0;let M=u,P=f;for(let z=0;z<L.length;z++){const F=L[z];F.enabled!==!1&&(F.render(D,P,M,N),F.needsSwap!==!1&&(M=P,P=P===f?d:f))}if(E!==D.outputColorSpace||R!==D.toneMapping){E=D.outputColorSpace,R=D.toneMapping,v.defines={},Tt.getTransfer(E)===Ut&&(v.defines.SRGB_TRANSFER="");const z=WT[R];z&&(v.defines[z]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=M.texture,D.setRenderTarget(w),D.render(x,y),w=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),d!==null&&d.dispose(),m.dispose(),v.dispose()}}const Jv=new On,e_=new ga(1,1),t_=new Gv(1),n_=new Iv,i_=new sM,r_=new Hv,b0=[],P0=[],L0=new Float32Array(16),N0=new Float32Array(9),D0=new Float32Array(4);function Ma(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let o=b0[a];if(o===void 0&&(o=new Float32Array(a),b0[a]=o),e!==0){i.toArray(o,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(o,f)}return o}function yn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Mn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Wu(s,e){let t=P0[e];t===void 0&&(t=new Int32Array(e),P0[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function $T(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2fv(this.addr,e),Mn(t,e)}}function YT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;s.uniform3fv(this.addr,e),Mn(t,e)}}function KT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4fv(this.addr,e),Mn(t,e)}}function jT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,i))return;D0.set(i),s.uniformMatrix2fv(this.addr,!1,D0),Mn(t,i)}}function ZT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,i))return;N0.set(i),s.uniformMatrix3fv(this.addr,!1,N0),Mn(t,i)}}function QT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,i))return;L0.set(i),s.uniformMatrix4fv(this.addr,!1,L0),Mn(t,i)}}function JT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function e1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2iv(this.addr,e),Mn(t,e)}}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3iv(this.addr,e),Mn(t,e)}}function n1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4iv(this.addr,e),Mn(t,e)}}function i1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function r1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2uiv(this.addr,e),Mn(t,e)}}function s1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3uiv(this.addr,e),Mn(t,e)}}function a1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4uiv(this.addr,e),Mn(t,e)}}function Xu(s){return s.version===0&&(s.compareFunction=Nv,s.needsUpdate=!0),s}function o1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let o;this.type===s.SAMPLER_2D_SHADOW?o=Xu(e_):o=Jv,t.setTexture2D(e||o,a)}function l1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||i_,a)}function u1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Xu(t_):o=r_,t.setTextureCube(e||o,a)}function c1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||n_,a)}function f1(s){switch(s){case 5126:return $T;case 35664:return qT;case 35665:return YT;case 35666:return KT;case 35674:return jT;case 35675:return ZT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return e1;case 35668:case 35672:return t1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return r1;case 36295:return s1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return c1}}function d1(s,e){s.uniform1fv(this.addr,e)}function h1(s,e){const t=Ma(e,this.size,2);s.uniform2fv(this.addr,t)}function p1(s,e){const t=Ma(e,this.size,3);s.uniform3fv(this.addr,t)}function m1(s,e){const t=Ma(e,this.size,4);s.uniform4fv(this.addr,t)}function g1(s,e){const t=Ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function v1(s,e){const t=Ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _1(s,e){const t=Ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function x1(s,e){s.uniform1iv(this.addr,e)}function S1(s,e){s.uniform2iv(this.addr,e)}function y1(s,e){s.uniform3iv(this.addr,e)}function M1(s,e){s.uniform4iv(this.addr,e)}function E1(s,e){s.uniform1uiv(this.addr,e)}function w1(s,e){s.uniform2uiv(this.addr,e)}function T1(s,e){s.uniform3uiv(this.addr,e)}function A1(s,e){s.uniform4uiv(this.addr,e)}function R1(s,e,t){const i=this.cache,a=e.length,o=Wu(t,a);yn(i,o)||(s.uniform1iv(this.addr,o),Mn(i,o));let u;this.type===s.SAMPLER_2D_SHADOW?u=Xu(e_):u=Jv;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,o[f])}function C1(s,e,t){const i=this.cache,a=e.length,o=Wu(t,a);yn(i,o)||(s.uniform1iv(this.addr,o),Mn(i,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||i_,o[u])}function b1(s,e,t){const i=this.cache,a=e.length,o=Wu(t,a);yn(i,o)||(s.uniform1iv(this.addr,o),Mn(i,o));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=Xu(t_):u=r_;for(let f=0;f!==a;++f)t.setTextureCube(e[f]||u,o[f])}function P1(s,e,t){const i=this.cache,a=e.length,o=Wu(t,a);yn(i,o)||(s.uniform1iv(this.addr,o),Mn(i,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||n_,o[u])}function L1(s){switch(s){case 5126:return d1;case 35664:return h1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return v1;case 35676:return _1;case 5124:case 35670:return x1;case 35667:case 35671:return S1;case 35668:case 35672:return y1;case 35669:case 35673:return M1;case 5125:return E1;case 36294:return w1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return P1}}class N1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=f1(t.type)}}class D1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L1(t.type)}}class I1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const f=a[o];f.setValue(e,t[f.id],i)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function I0(s,e){s.seq.push(e),s.map[e.id]=e}function U1(s,e,t){const i=s.name,a=i.length;for(sd.lastIndex=0;;){const o=sd.exec(i),u=sd.lastIndex;let f=o[1];const d=o[2]==="]",h=o[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===a){I0(t,h===void 0?new N1(f,s,e):new D1(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new I1(f),I0(t,v)),t=v}}}class yu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);U1(f,d,this)}const a=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):o.push(u);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,u=t.length;o!==u;++o){const f=t[o],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&i.push(u)}return i}}function U0(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const F1=37297;let O1=0;function k1(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const f=u+1;i.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return i.join(`
`)}const F0=new mt;function B1(s){Tt._getMatrix(F0,Tt.workingColorSpace,s);const e=`mat3( ${F0.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Lu:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function O0(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=(s.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+k1(s.getShaderSource(e),f)}else return o}function z1(s,e){const t=B1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const H1={[hh]:"Linear",[ph]:"Reinhard",[mh]:"Cineon",[gh]:"ACESFilmic",[_h]:"AgX",[xh]:"Neutral",[vh]:"Custom"};function G1(s,e){const t=H1[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fu=new Y;function V1(){Tt.getLuminanceCoefficients(fu);const s=fu.x.toFixed(4),e=fu.y.toFixed(4),t=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function X1(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $1(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(e,a),u=o.name;let f=1;o.type===s.FLOAT_MAT2&&(f=2),o.type===s.FLOAT_MAT3&&(f=3),o.type===s.FLOAT_MAT4&&(f=4),t[u]={type:o.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ho(s){return s!==""}function k0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function B0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(s){return s.replace(q1,Y1)}function Y1(s,e){const t=xt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return oh(t)}const K1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z0(s){return s.replace(K1,j1)}function j1(s,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function H0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Z1={[hu]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function Q1(s){return Z1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const J1={[yo]:"ENVMAP_MODE_REFRACTION"};function eA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":J1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tA={[Mv]:"ENVMAP_BLENDING_MULTIPLY",[Iy]:"ENVMAP_BLENDING_MIX",[Uy]:"ENVMAP_BLENDING_ADD"};function nA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":tA[s.combine]||"ENVMAP_BLENDING_NONE"}function iA(s,e,t,i){const a=s.getContext(),o=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=Q1(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",m=eA(t),v=nA(t),x=W1(t),y=X1(o),E=a.createProgram();let R,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ho).join(`
`),R.length>0&&(R+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ho).join(`
`),_.length>0&&(_+=`
`)):(R=[H0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),_=[H0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?xt.tonemapping_pars_fragment:"",t.toneMapping!==_r?G1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,z1("linearToOutputTexel",t.outputColorSpace),V1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),u=oh(u),u=k0(u,t),u=B0(u,t),f=oh(f),f=k0(f,t),f=B0(f,t),u=z0(u),f=z0(f),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,R=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,_=["#define varying in",t.glslVersion===zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=S+R+u,L=S+_+f,C=U0(a,a.VERTEX_SHADER,w),D=U0(a,a.FRAGMENT_SHADER,L);a.attachShader(E,C),a.attachShader(E,D),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function N(F){if(s.debug.checkShaderErrors){const G=a.getProgramInfoLog(E)||"",K=a.getShaderInfoLog(C)||"",ie=a.getShaderInfoLog(D)||"",B=G.trim(),re=K.trim(),le=ie.trim();let W=!0,Z=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,C,D);else{const q=O0(a,C,"vertex"),j=O0(a,D,"fragment");Lt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+q+`
`+j)}else B!==""?ct("WebGLProgram: Program Info Log:",B):(re===""||le==="")&&(Z=!1);Z&&(F.diagnostics={runnable:W,programLog:B,vertexShader:{log:re,prefix:R},fragmentShader:{log:le,prefix:_}})}a.deleteShader(C),a.deleteShader(D),M=new yu(a,E),P=$1(a,E)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(E,F1)),z},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=D,this}let rA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new aA(e),t.set(e,i)),i}}class aA{constructor(e){this.id=rA++,this.code=e,this.usedTimes=0}}function oA(s){return s===xs||s===Cu||s===bu}function lA(s,e,t,i,a,o){const u=new bh,f=new sA,d=new Set,h=[],m=new Map,v=i.logarithmicDepthBuffer,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return d.add(M),M===0?"uv":`uv${M}`}function E(M,P,z,F,G,K){const ie=F.fog,B=G.geometry,re=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,le=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,W=e.get(M.envMap||re,le),Z=x[M.type];let q=i.precision;M.precision!==null&&(q=i.getMaxPrecision(M.precision),q!==M.precision&&ct("WebGLProgram.getParameters:",M.precision,"not supported, using",q,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,I=j!==void 0?j.length:0;let Q=0;B.morphAttributes.position!==void 0&&(Q=1),B.morphAttributes.normal!==void 0&&(Q=2),B.morphAttributes.color!==void 0&&(Q=3);let be,te,Se,Ae;if(Z){const he=Zi[Z];be=he.vertexShader,te=he.fragmentShader}else{be=M.vertexShader,te=M.fragmentShader;const he=f.getVertexShaderStage(M),Pe=f.getFragmentShaderStage(M);f.update(M,he,Pe),Se=he.id,Ae=Pe.id}const Be=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ve=G.isInstancedMesh===!0,vt=G.isBatchedMesh===!0,it=!!M.map,At=!!M.matcap,Mt=!!W,pt=Mt&&W.isPMREMTexture===!0,Xt=!!M.aoMap,Yt=!!M.lightMap,fn=!!M.bumpMap&&M.wireframe===!1,Ft=!!M.normalMap,Nn=!!M.displacementMap,Ht=!!M.emissiveMap,$t=!!M.metalnessMap,nn=!!M.roughnessMap,ln=M.anisotropy>0,X=M.clearcoat>0,En=M.diffuseRoughness>0,It=M.dispersion>0,Nt=M.retroreflectivity>0,Fe=M.iridescence>0,Qt=M.sheen>0,Ze=M.transmission>0,rt=ln&&!!M.anisotropyMap,U=X&&!!M.clearcoatMap,A=X&&!!M.clearcoatNormalMap,ee=X&&!!M.clearcoatRoughnessMap,Ee=En&&!!M.diffuseRoughnessMap,ge=Fe&&!!M.iridescenceMap,De=Fe&&!!M.iridescenceThicknessMap,Ue=Qt&&!!M.sheenColorMap,fe=Qt&&!!M.sheenRoughnessMap,pe=!!M.specularMap,Le=!!M.specularColorMap,k=!!M.specularIntensityMap,me=Ze&&!!M.transmissionMap,ce=Ze&&!!M.thicknessMap,Ne=!!M.gradientMap,xe=!!M.alphaMap,Ce=M.alphaTest>0,qe=!!M.alphaHash,dt=!!M.extensions;let we=_r;M.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(we=s.toneMapping);const de=pt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,_e={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:be,fragmentShader:te,defines:M.defines,customVertexShaderID:Se,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:q,batching:vt,batchingColor:vt&&G._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&G.instanceColor!==null,instancingMorph:Ve&&G.morphTexture!==null,outputColorSpace:Be===null?s.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:it,matcap:At,envMap:Mt,envMapMode:Mt&&W.mapping,envMapPMREM:pt,envMapMaxLod:pt?de.length-1:null,envMapSize:pt?de[0].width:null,aoMap:Xt,lightMap:Yt,bumpMap:fn,normalMap:Ft,displacementMap:Nn,emissiveMap:Ht,normalMapObjectSpace:Ft&&M.normalMapType===ky,normalMapTangentSpace:Ft&&M.normalMapType===nh,packedNormalMap:Ft&&M.normalMapType===nh&&oA(M.normalMap.format),metalnessMap:$t,roughnessMap:nn,anisotropy:ln,anisotropyMap:rt,clearcoat:X,clearcoatMap:U,clearcoatNormalMap:A,clearcoatRoughnessMap:ee,diffuseRoughness:En,diffuseRoughnessMap:Ee,dispersion:It,retroreflection:Nt,iridescence:Fe,iridescenceMap:ge,iridescenceThicknessMap:De,sheen:Qt,sheenColorMap:Ue,sheenRoughnessMap:fe,specularMap:pe,specularColorMap:Le,specularIntensityMap:k,transmission:Ze,transmissionMap:me,thicknessMap:ce,gradientMap:Ne,opaque:M.transparent===!1&&M.blending===mo&&M.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ce,alphaHash:qe,combine:M.combine,mapUv:it&&y(M.map.channel),aoMapUv:Xt&&y(M.aoMap.channel),lightMapUv:Yt&&y(M.lightMap.channel),bumpMapUv:fn&&y(M.bumpMap.channel),normalMapUv:Ft&&y(M.normalMap.channel),displacementMapUv:Nn&&y(M.displacementMap.channel),emissiveMapUv:Ht&&y(M.emissiveMap.channel),metalnessMapUv:$t&&y(M.metalnessMap.channel),roughnessMapUv:nn&&y(M.roughnessMap.channel),anisotropyMapUv:rt&&y(M.anisotropyMap.channel),clearcoatMapUv:U&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:A&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&y(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&y(M.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:De&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&y(M.sheenRoughnessMap.channel),specularMapUv:pe&&y(M.specularMap.channel),specularColorMapUv:Le&&y(M.specularColorMap.channel),specularIntensityMapUv:k&&y(M.specularIntensityMap.channel),transmissionMapUv:me&&y(M.transmissionMap.channel),thicknessMapUv:ce&&y(M.thicknessMap.channel),alphaMapUv:xe&&y(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ft||ln),vertexNormals:!!B.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(it||xe),fog:!!ie,useFog:M.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||B.attributes.normal===void 0&&Ft===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ye,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:Q,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:K.filter(he=>he.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:it&&M.map.isVideoTexture===!0&&Tt.getTransfer(M.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ht&&M.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(M.emissiveMap.colorSpace)===Ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qi,flipSided:M.side===Zn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:dt&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&M.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return _e.vertexUv1s=d.has(1),_e.vertexUv2s=d.has(2),_e.vertexUv3s=d.has(3),d.clear(),_e}function R(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)P.push(z),P.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(_(P,M),S(P,M),P.push(s.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function _(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapPMREM),M.push(P.envMapMaxLod),M.push(P.envMapSize),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.diffuseRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.numLightProbeGrids),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function S(M,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.diffuseRoughness&&u.enable(25),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function w(M){const P=x[M.type];let z;if(P){const F=Zi[P];z=Ao.clone(F.uniforms)}else z=M.uniforms;return z}function L(M,P){let z=m.get(P);return z!==void 0?++z.usedTimes:(z=new iA(s,P,M,a),h.push(z),m.set(P,z)),z}function C(M){if(--M.usedTimes===0){const P=h.indexOf(M);h[P]=h[h.length-1],h.pop(),m.delete(M.cacheKey),M.destroy()}}function D(M){f.remove(M)}function N(){f.dispose()}return{getParameters:E,getProgramCacheKey:R,getUniforms:w,acquireProgram:L,releaseProgram:C,releaseShaderCache:D,programs:h,dispose:N}}function uA(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function i(u){s.delete(u)}function a(u,f,d){s.get(u)[f]=d}function o(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function cA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function G0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function V0(){const s=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function u(x){let y=0;return x.isInstancedMesh&&(y+=2),x.isSkinnedMesh&&(y+=1),y}function f(x,y,E,R,_,S){let w=s[e];return w===void 0?(w={id:x.id,object:x,geometry:y,material:E,materialVariant:u(x),groupOrder:R,renderOrder:x.renderOrder,z:_,group:S},s[e]=w):(w.id=x.id,w.object=x,w.geometry=y,w.material=E,w.materialVariant=u(x),w.groupOrder=R,w.renderOrder=x.renderOrder,w.z=_,w.group=S),e++,w}function d(x,y,E,R,_,S,w){w.reversedDepth===!0&&(_=-_);const L=f(x,y,E,R,_,S);E.transmission>0?i.push(L):E.transparent===!0?a.push(L):t.push(L)}function h(x,y,E,R,_,S){const w=f(x,y,E,R,_,S);E.transmission>0?i.unshift(w):E.transparent===!0?a.unshift(w):t.unshift(w)}function m(x,y){t.length>1&&t.sort(x||cA),i.length>1&&i.sort(y||G0),a.length>1&&a.sort(y||G0)}function v(){for(let x=e,y=s.length;x<y;x++){const E=s[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:d,unshift:h,finish:v,sort:m}}function fA(){let s=new WeakMap;function e(i,a){const o=s.get(i);let u;return o===void 0?(u=new V0,s.set(i,[u])):a>=o.length?(u=new V0,o.push(u)):u=o[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function dA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new ot};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function hA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pA=0;function mA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gA(s){const e=new dA,t=hA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const a=new Y,o=new kt,u=new kt;function f(h){let m=0,v=0,x=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let y=0,E=0,R=0,_=0,S=0,w=0,L=0,C=0,D=0,N=0,M=0,P=0,z=0,F=0;h.sort(mA);for(let K=0,ie=h.length;K<ie;K++){const B=h[K],re=B.color,le=B.intensity,W=B.distance;let Z=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===xs?Z=B.shadow.map.texture:Z=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)m+=re.r*le,v+=re.g*le,x+=re.b*le;else if(B.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(B.sh.coefficients[q],le);F++}else if(B.isSunLight){const q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,I=t.get(B);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[E]=I,i.sunShadowMap[E]=Z;const Q=j.getViewportCount();for(let be=0;be<Q;be++)i.sunShadowMatrix[R+be]=j.getMatrix(be),i.sunShadowCascade[R+be]=j._cascadeData[be];R+=Q,E++}i.sun[y]=q,y++}else if(B.isDirectionalLight){const q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,I=t.get(B);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,i.directionalShadow[_]=I,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=B.shadow.matrix,D++}i.directional[_]=q,_++}else if(B.isSpotLight){const q=e.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(re).multiplyScalar(le),q.distance=W,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,i.spot[w]=q;const j=B.shadow;if(B.map&&(i.spotLightMap[P]=B.map,P++,j.updateMatrices(B),B.castShadow&&z++),i.spotLightMatrix[w]=j.matrix,B.castShadow){const I=t.get(B);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,i.spotShadow[w]=I,i.spotShadowMap[w]=Z,M++}w++}else if(B.isRectAreaLight){const q=e.get(B);q.color.copy(re).multiplyScalar(le),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),i.rectArea[L]=q,L++}else if(B.isPointLight){const q=e.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),q.distance=B.distance,q.decay=B.decay,B.castShadow){const j=B.shadow,I=t.get(B);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,i.pointShadow[S]=I,i.pointShadowMap[S]=Z,i.pointShadowMatrix[S]=B.shadow.matrix,N++}i.point[S]=q,S++}else if(B.isHemisphereLight){const q=e.get(B);q.skyColor.copy(B.color).multiplyScalar(le),q.groundColor.copy(B.groundColor).multiplyScalar(le),i.hemi[C]=q,C++}}L>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=v,i.ambient[2]=x;const G=i.hash;(G.sunLength!==y||G.directionalLength!==_||G.pointLength!==S||G.spotLength!==w||G.rectAreaLength!==L||G.hemiLength!==C||G.numSunShadows!==E||G.numDirectionalShadows!==D||G.numPointShadows!==N||G.numSpotShadows!==M||G.numSpotMaps!==P||G.numLightProbes!==F)&&(i.sun.length=y,i.directional.length=_,i.spot.length=w,i.rectArea.length=L,i.point.length=S,i.hemi.length=C,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=R,i.sunShadowCascade.length=R,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.directionalShadowMatrix.length=D,i.pointShadow.length=N,i.pointShadowMap.length=N,i.pointShadowMatrix.length=N,i.spotShadow.length=M,i.spotShadowMap.length=M,i.spotLightMatrix.length=M+P-z,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=F,G.sunLength=y,G.directionalLength=_,G.pointLength=S,G.spotLength=w,G.rectAreaLength=L,G.hemiLength=C,G.numSunShadows=E,G.numDirectionalShadows=D,G.numPointShadows=N,G.numSpotShadows=M,G.numSpotMaps=P,G.numLightProbes=F,i.version=pA++)}function d(h,m){let v=0,x=0,y=0,E=0,R=0,_=0;const S=m.matrixWorldInverse;for(let w=0,L=h.length;w<L;w++){const C=h[w];if(C.isSunLight){const D=i.sun[v];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(S),v++}else if(C.isDirectionalLight){const D=i.directional[x];D.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(S),x++}else if(C.isSpotLight){const D=i.spot[E];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(S),E++}else if(C.isRectAreaLight){const D=i.rectArea[R];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),u.identity(),o.copy(C.matrixWorld),o.premultiply(S),u.extractRotation(o),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),R++}else if(C.isPointLight){const D=i.point[y];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),y++}else if(C.isHemisphereLight){const D=i.hemi[_];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(S),_++}}}return{setup:f,setupView:d,state:i}}function W0(s){const e=new gA(s),t=[],i=[],a=[];function o(v){m.camera=v,t.length=0,i.length=0,a.length=0}function u(v){v.isLightProbeGrid?a.push(v):t.push(v)}function f(v){i.push(v)}function d(){e.setup(t),a.sort((v,x)=>v.priority-x.priority||v.id-x.id)}function h(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:m,setupLights:d,setupLightsView:h,pushLight:u,pushShadow:f}}function vA(s){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let f;return u===void 0?(f=new W0(s),e.set(a,[f])):o>=u.length?(f=new W0(s),u.push(f)):f=u[o],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SA=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],yA=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],X0=new kt,co=new Y,ad=new Y;function MA(s,e,t){let i=new To;const a=new ut,o=new ut,u=new on,f=new bM,d=new PM,h={},m=t.maxTextureSize,v={[_s]:Zn,[Zn]:_s,[Qi]:Qi},x=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:_A,fragmentShader:xA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ln;E.setAttribute("position",new tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Sn(E,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let S=this.type;this.render=function(N,M,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;this.type===my&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hu);const z=s.getRenderTarget(),F=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),K=s.state;K.setBlending(vs),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ie=S!==this.type;ie&&M.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(re=>re.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,re=N.length;B<re;B++){const le=N[B],W=le.shadow;if(W===void 0){ct("WebGLShadowMap:",le,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const Z=W.getFrameExtents();a.multiply(Z),o.copy(W.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(o.x=Math.floor(m/Z.x),a.x=o.x*Z.x,W.mapSize.x=o.x),a.y>m&&(o.y=Math.floor(m/Z.y),a.y=o.y*Z.y,W.mapSize.y=o.y));const q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||ie===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===fo){if(le.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new oi(a.x,a.y,{format:xs,type:ai,minFilter:ri,magFilter:ri,generateMipmaps:!1}),W.map.texture.name=le.name+".shadowMap",W.map.depthTexture=new ga(a.x,a.y,zi),W.map.depthTexture.name=le.name+".shadowMapDepth",W.map.depthTexture.format=Kr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Fn,W.map.depthTexture.magFilter=Fn}else le.isPointLight?(W.map=new Oh(a.x),W.map.depthTexture=new Gv(a.x,nr)):(W.map=new oi(a.x,a.y),W.map.depthTexture=new ga(a.x,a.y,nr)),W.map.depthTexture.name=le.name+".shadowMap",W.map.depthTexture.format=Kr,this.type===hu?(W.map.depthTexture.compareFunction=q?Lv:Pv,W.map.depthTexture.minFilter=ri,W.map.depthTexture.magFilter=ri):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Fn,W.map.depthTexture.magFilter=Fn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==a.x||W.map.height!==a.y)&&W.map.setSize(a.x,a.y);const j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();le.isPointLight!==!0&&W.updateMatrices(le,P);const I=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:P.layers;for(let Q=0;Q<j;Q++){const be=W.getCamera(Q);if(le.isPointLight){const te=W.camera,Se=W.matrix,Ae=le.distance||te.far;Ae!==te.far&&(te.far=Ae,te.updateProjectionMatrix()),co.setFromMatrixPosition(le.matrixWorld),te.position.copy(co),ad.copy(te.position),ad.add(SA[Q]),te.up.copy(yA[Q]),te.lookAt(ad),te.updateMatrixWorld(),Se.makeTranslation(-co.x,-co.y,-co.z),X0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),W._frustum.setFromProjectionMatrix(X0,te.coordinateSystem,te.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(W.map),s.clear());const te=W.getViewport(Q);u.set(o.x*te.x,o.y*te.y,o.x*te.z,o.y*te.w),K.viewport(u)}i=W.getFrustum(Q),C(M,P,be,le,I,this.type)}W.isPointLightShadow!==!0&&this.type===fo&&w(W,P),W.needsUpdate=!1}S=this.type,_.needsUpdate=!1,s.setRenderTarget(z,F,G)};function w(N,M){const P=e.update(R);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null?N.mapPass=new oi(a.x,a.y,{format:xs,type:ai}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),x.uniforms.shadow_pass.value=N.map.depthTexture,x.uniforms.resolution.value.set(N.map.width,N.map.height),x.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(M,null,P,x,R,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value.set(N.map.width,N.map.height),y.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(M,null,P,y,R,null)}function L(N,M,P,z){let F=null;const G=P.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)F=G;else if(F=P.isPointLight===!0?d:f,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const K=F.uuid,ie=M.uuid;let B=h[K];B===void 0&&(B={},h[K]=B);let re=B[ie];re===void 0&&(re=F.clone(),B[ie]=re,M.addEventListener("dispose",D)),F=re}if(F.visible=M.visible,F.wireframe=M.wireframe,z===fo?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:v[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const K=s.properties.get(F);K.light=P}return F}function C(N,M,P,z,F,G){if(N.visible===!1)return;if(N.layers.test(F)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&G===fo)&&(!N.frustumCulled||N.intersectsFrustum(i))){N.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,N.matrixWorld);const B=e.update(N),re=N.material;if(Array.isArray(re)){const le=B.groups;for(let W=0,Z=le.length;W<Z;W++){const q=le[W],j=re[q.materialIndex];if(j&&j.visible){const I=L(N,j,z,G);N.onBeforeShadow(s,N,M,P,B,I,q),s.renderBufferDirect(P,null,B,I,N,q),N.onAfterShadow(s,N,M,P,B,I,q)}}}else if(re.visible){const le=L(N,re,z,G);N.onBeforeShadow(s,N,M,P,B,le,null),s.renderBufferDirect(P,null,B,le,N,null),N.onAfterShadow(s,N,M,P,B,le,null)}}const ie=N.children;for(let B=0,re=ie.length;B<re;B++)C(ie[B],M,P,z,F,G)}function D(N){N.target.removeEventListener("dispose",D);for(const P in h){const z=h[P],F=N.target.uuid;F in z&&(z[F].dispose(),delete z[F])}}}function EA(s,e){function t(){let k=!1;const me=new on;let ce=null;const Ne=new on(0,0,0,0);return{setMask:function(xe){ce!==xe&&!k&&(s.colorMask(xe,xe,xe,xe),ce=xe)},setLocked:function(xe){k=xe},setClear:function(xe,Ce,qe,dt,we){we===!0&&(xe*=dt,Ce*=dt,qe*=dt),me.set(xe,Ce,qe,dt),Ne.equals(me)===!1&&(s.clearColor(xe,Ce,qe,dt),Ne.copy(me))},reset:function(){k=!1,ce=null,Ne.set(-1,0,0,0)}}}function i(){let k=!1,me=!1,ce=null,Ne=null,xe=null;return{setReversed:function(Ce){if(me!==Ce){const qe=e.get("EXT_clip_control");Ce?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),me=Ce;const dt=xe;xe=null,this.setClear(dt)}},getReversed:function(){return me},setTest:function(Ce){Ce?ye(s.DEPTH_TEST):Ve(s.DEPTH_TEST)},setMask:function(Ce){ce!==Ce&&!k&&(s.depthMask(Ce),ce=Ce)},setFunc:function(Ce){if(me&&(Ce=Ky[Ce]),Ne!==Ce){switch(Ce){case vd:s.depthFunc(s.NEVER);break;case _d:s.depthFunc(s.ALWAYS);break;case xd:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case Sd:s.depthFunc(s.EQUAL);break;case yd:s.depthFunc(s.GEQUAL);break;case Md:s.depthFunc(s.GREATER);break;case Ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=Ce}},setLocked:function(Ce){k=Ce},setClear:function(Ce){xe!==Ce&&(xe=Ce,me&&(Ce=1-Ce),s.clearDepth(Ce))},reset:function(){k=!1,ce=null,Ne=null,xe=null,me=!1}}}function a(){let k=!1,me=null,ce=null,Ne=null,xe=null,Ce=null,qe=null,dt=null,we=null;return{setTest:function(de){k||(de?ye(s.STENCIL_TEST):Ve(s.STENCIL_TEST))},setMask:function(de){me!==de&&!k&&(s.stencilMask(de),me=de)},setFunc:function(de,_e,he){(ce!==de||Ne!==_e||xe!==he)&&(s.stencilFunc(de,_e,he),ce=de,Ne=_e,xe=he)},setOp:function(de,_e,he){(Ce!==de||qe!==_e||dt!==he)&&(s.stencilOp(de,_e,he),Ce=de,qe=_e,dt=he)},setLocked:function(de){k=de},setClear:function(de){we!==de&&(s.clearStencil(de),we=de)},reset:function(){k=!1,me=null,ce=null,Ne=null,xe=null,Ce=null,qe=null,dt=null,we=null}}}const o=new t,u=new i,f=new a;let d={};const h=new WeakMap;let m={},v={},x={},y=new WeakMap,E=[],R=null,_=!1,S=null,w=null,L=null,C=null,D=null,N=null,M=null,P=new ot(0,0,0),z=0,F=!1,G=null,K=null,ie=null,B=null,re=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=Z>=2);let j=null,I={};const Q=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),te=new on().fromArray(Q),Se=new on().fromArray(be);function Ae(k,me,ce,Ne){const xe=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(k,Ce),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<ce;qe++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(me,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(me+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return Ce}const Be={};Be[s.TEXTURE_2D]=Ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Be[s.TEXTURE_CUBE_MAP]=Ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[s.TEXTURE_2D_ARRAY]=Ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Be[s.TEXTURE_3D]=Ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ye(s.DEPTH_TEST),u.setFunc(So),fn(!1),Ft(Og),ye(s.CULL_FACE),Xt(vs);function ye(k){m[k]!==!0&&(s.enable(k),m[k]=!0)}function Ve(k){m[k]!==!1&&(s.disable(k),m[k]=!1)}function vt(k,me){return x[k]!==me?(s.bindFramebuffer(k,me),x[k]=me,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=me),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=me),!0):!1}function it(k,me){let ce=E,Ne=!1;if(k){ce=y.get(me),ce===void 0&&(ce=[],y.set(me,ce));const xe=k.textures;if(ce.length!==xe.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,qe=xe.length;Ce<qe;Ce++)ce[Ce]=s.COLOR_ATTACHMENT0+Ce;ce.length=xe.length,Ne=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(ce)}function At(k){return R!==k?(s.useProgram(k),R=k,!0):!1}const Mt={[fa]:s.FUNC_ADD,[vy]:s.FUNC_SUBTRACT,[_y]:s.FUNC_REVERSE_SUBTRACT};Mt[xy]=s.MIN,Mt[Sy]=s.MAX;const pt={[yy]:s.ZERO,[My]:s.ONE,[Ey]:s.SRC_COLOR,[Sv]:s.SRC_ALPHA,[by]:s.SRC_ALPHA_SATURATE,[Ry]:s.DST_COLOR,[Ty]:s.DST_ALPHA,[wy]:s.ONE_MINUS_SRC_COLOR,[yv]:s.ONE_MINUS_SRC_ALPHA,[Cy]:s.ONE_MINUS_DST_COLOR,[Ay]:s.ONE_MINUS_DST_ALPHA,[Py]:s.CONSTANT_COLOR,[Ly]:s.ONE_MINUS_CONSTANT_COLOR,[Ny]:s.CONSTANT_ALPHA,[Dy]:s.ONE_MINUS_CONSTANT_ALPHA};function Xt(k,me,ce,Ne,xe,Ce,qe,dt,we,de){if(k===vs){_===!0&&(Ve(s.BLEND),_=!1);return}if(_===!1&&(ye(s.BLEND),_=!0),k!==gy){if(k!==S||de!==F){if((w!==fa||D!==fa)&&(s.blendEquation(s.FUNC_ADD),w=fa,D=fa),de)switch(k){case mo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mi:s.blendFunc(s.ONE,s.ONE);break;case kg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Lt("WebGLState: Invalid blending: ",k);break}else switch(k){case mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kg:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bg:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",k);break}L=null,C=null,N=null,M=null,P.set(0,0,0),z=0,S=k,F=de}return}xe=xe||me,Ce=Ce||ce,qe=qe||Ne,(me!==w||xe!==D)&&(s.blendEquationSeparate(Mt[me],Mt[xe]),w=me,D=xe),(ce!==L||Ne!==C||Ce!==N||qe!==M)&&(s.blendFuncSeparate(pt[ce],pt[Ne],pt[Ce],pt[qe]),L=ce,C=Ne,N=Ce,M=qe),(dt.equals(P)===!1||we!==z)&&(s.blendColor(dt.r,dt.g,dt.b,we),P.copy(dt),z=we),S=k,F=!1}function Yt(k,me){k.side===Qi?Ve(s.CULL_FACE):ye(s.CULL_FACE);let ce=k.side===Zn;me&&(ce=!ce),fn(ce),k.blending===mo&&k.transparent===!1?Xt(vs):Xt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),o.setMask(k.colorWrite);const Ne=k.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(k.stencilWriteMask),f.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),f.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ht(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function fn(k){G!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),G=k)}function Ft(k){k!==hy?(ye(s.CULL_FACE),k!==K&&(k===Og?s.cullFace(s.BACK):k===py?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ve(s.CULL_FACE),K=k}function Nn(k){k!==ie&&(W&&s.lineWidth(k),ie=k)}function Ht(k,me,ce){k?(ye(s.POLYGON_OFFSET_FILL),(B!==me||re!==ce)&&(B=me,re=ce,u.getReversed()&&(me=-me,ce=-ce),s.polygonOffset(me,ce))):Ve(s.POLYGON_OFFSET_FILL)}function $t(k){k?ye(s.SCISSOR_TEST):Ve(s.SCISSOR_TEST)}function nn(k){k===void 0&&(k=s.TEXTURE0+le-1),j!==k&&(s.activeTexture(k),j=k)}function ln(k,me,ce){ce===void 0&&(j===null?ce=s.TEXTURE0+le-1:ce=j);let Ne=I[ce];Ne===void 0&&(Ne={type:void 0,texture:void 0},I[ce]=Ne),(Ne.type!==k||Ne.texture!==me)&&(j!==ce&&(s.activeTexture(ce),j=ce),s.bindTexture(k,me||Be[k]),Ne.type=k,Ne.texture=me)}function X(){const k=I[j];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function En(){try{s.compressedTexImage2D(...arguments)}catch(k){Lt("WebGLState:",k)}}function It(){try{s.compressedTexImage3D(...arguments)}catch(k){Lt("WebGLState:",k)}}function Nt(){try{s.texSubImage2D(...arguments)}catch(k){Lt("WebGLState:",k)}}function Fe(){try{s.texSubImage3D(...arguments)}catch(k){Lt("WebGLState:",k)}}function Qt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Lt("WebGLState:",k)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Lt("WebGLState:",k)}}function rt(){try{s.texStorage2D(...arguments)}catch(k){Lt("WebGLState:",k)}}function U(){try{s.texStorage3D(...arguments)}catch(k){Lt("WebGLState:",k)}}function A(){try{s.texImage2D(...arguments)}catch(k){Lt("WebGLState:",k)}}function ee(){try{s.texImage3D(...arguments)}catch(k){Lt("WebGLState:",k)}}function Ee(k){return v[k]!==void 0?v[k]:s.getParameter(k)}function ge(k,me){v[k]!==me&&(s.pixelStorei(k,me),v[k]=me)}function De(k){te.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),te.copy(k))}function Ue(k){Se.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Se.copy(k))}function fe(k,me){let ce=h.get(me);ce===void 0&&(ce=new WeakMap,h.set(me,ce));let Ne=ce.get(k);Ne===void 0&&(Ne=s.getUniformBlockIndex(me,k.name),s.uniformBlockBinding(me,Ne,Ne),ce.set(k,Ne))}function pe(k,me,ce){const xe=h.get(me).get(k);d[xe]!==ce&&(s.bindBufferBase(s.UNIFORM_BUFFER,xe,ce),d[xe]=ce)}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),m={},v={},j=null,I={},x={},d={},y=new WeakMap,E=[],R=null,_=!1,S=null,w=null,L=null,C=null,D=null,N=null,M=null,P=new ot(0,0,0),z=0,F=!1,G=null,K=null,ie=null,B=null,re=null,te.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),o.reset(),u.reset(),f.reset()}return{buffers:{color:o,depth:u,stencil:f},enable:ye,disable:Ve,bindFramebuffer:vt,drawBuffers:it,useProgram:At,setBlending:Xt,setMaterial:Yt,setFlipSided:fn,setCullFace:Ft,setLineWidth:Nn,setPolygonOffset:Ht,setScissorTest:$t,activeTexture:nn,bindTexture:ln,unbindTexture:X,compressedTexImage2D:En,compressedTexImage3D:It,texImage2D:A,texImage3D:ee,pixelStorei:ge,getParameter:Ee,updateUBOMapping:fe,uniformBlockBinding:pe,texStorage2D:rt,texStorage3D:U,texSubImage2D:Nt,texSubImage3D:Fe,compressedTexSubImage2D:Qt,compressedTexSubImage3D:Ze,scissor:De,viewport:Ue,reset:Le}}function wA(s,e,t,i,a,o,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ut,m=new WeakMap,v=new Set;let x;const y=new WeakMap,E=new Set,R=new FinalizationRegistry(U=>E.delete(U));let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,A){return _?new OffscreenCanvas(U,A):wo("canvas")}function w(U,A,ee){let Ee=1;const ge=rt(U);if((ge.width>ee||ge.height>ee)&&(Ee=ee/Math.max(ge.width,ge.height)),Ee<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const De=Math.floor(Ee*ge.width),Ue=Math.floor(Ee*ge.height);x===void 0&&(x=S(De,Ue));const fe=A?S(De,Ue):x;return fe.width=De,fe.height=Ue,fe.getContext("2d").drawImage(U,0,0,De,Ue),ct("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+De+"x"+Ue+")."),fe}else return"data"in U&&ct("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),U;return U}function L(U){return U.generateMipmaps}function C(U){s.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,A,ee,Ee,ge,De=!1){if(U!==null){if(s[U]!==void 0)return s[U];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ue;Ee&&(Ue=e.get("EXT_texture_norm16"),Ue||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=A;if(A===s.RED&&(ee===s.FLOAT&&(fe=s.R32F),ee===s.HALF_FLOAT&&(fe=s.R16F),ee===s.UNSIGNED_BYTE&&(fe=s.R8),ee===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.R16_EXT),ee===s.SHORT&&Ue&&(fe=Ue.R16_SNORM_EXT)),A===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.R8UI),ee===s.UNSIGNED_SHORT&&(fe=s.R16UI),ee===s.UNSIGNED_INT&&(fe=s.R32UI),ee===s.BYTE&&(fe=s.R8I),ee===s.SHORT&&(fe=s.R16I),ee===s.INT&&(fe=s.R32I)),A===s.RG&&(ee===s.FLOAT&&(fe=s.RG32F),ee===s.HALF_FLOAT&&(fe=s.RG16F),ee===s.UNSIGNED_BYTE&&(fe=s.RG8),ee===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.RG16_EXT),ee===s.SHORT&&Ue&&(fe=Ue.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ee===s.UNSIGNED_INT&&(fe=s.RG32UI),ee===s.BYTE&&(fe=s.RG8I),ee===s.SHORT&&(fe=s.RG16I),ee===s.INT&&(fe=s.RG32I)),A===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ee===s.UNSIGNED_INT&&(fe=s.RGB32UI),ee===s.BYTE&&(fe=s.RGB8I),ee===s.SHORT&&(fe=s.RGB16I),ee===s.INT&&(fe=s.RGB32I)),A===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ee===s.BYTE&&(fe=s.RGBA8I),ee===s.SHORT&&(fe=s.RGBA16I),ee===s.INT&&(fe=s.RGBA32I)),A===s.RGB&&(ee===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.RGB16_EXT),ee===s.SHORT&&Ue&&(fe=Ue.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),A===s.RGBA){const pe=De?Lu:Tt.getTransfer(ge);ee===s.FLOAT&&(fe=s.RGBA32F),ee===s.HALF_FLOAT&&(fe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(fe=pe===Ut?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.RGBA16_EXT),ee===s.SHORT&&Ue&&(fe=Ue.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function M(U,A){let ee;return U?A===null||A===nr||A===ma?ee=s.DEPTH24_STENCIL8:A===zi?ee=s.DEPTH32F_STENCIL8:A===Mo&&(ee=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===nr||A===ma?ee=s.DEPTH_COMPONENT24:A===zi?ee=s.DEPTH_COMPONENT32F:A===Mo&&(ee=s.DEPTH_COMPONENT16),ee}function P(U,A){return L(U)===!0||U.isFramebufferTexture&&U.minFilter!==Fn&&U.minFilter!==ri?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function z(U){const A=new WeakRef(U);i.get(U).__ref=A,E.add(A),R.register(U,A,A)}function F(U){const A=i.get(U).__ref;A!==void 0&&(E.delete(A),R.unregister(A))}function G(U){ie(U.target)}function K(U){B(U.target)}function ie(U){U.removeEventListener("dispose",G),F(U),le(U),U.isVideoTexture&&m.delete(U),U.isHTMLTexture&&v.delete(U)}function B(U){U.removeEventListener("dispose",K),F(U),Z(U)}function re(){for(const U of E){const A=U.deref();A!==void 0&&(A.isRenderTarget===!0?B(A):ie(A))}E.clear(),v.clear()}function le(U){const A=i.get(U);if(A.__webglInit===void 0)return;const ee=U.source,Ee=y.get(ee);if(Ee){const ge=Ee[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&W(U),Object.keys(Ee).length===0&&y.delete(ee)}i.remove(U)}function W(U){const A=i.get(U);s.deleteTexture(A.__webglTexture);const ee=U.source,Ee=y.get(ee);delete Ee[A.__cacheKey],u.memory.textures--}function Z(U){const A=i.get(U);A.__depthDisposeCallback&&A.__depthDisposeCallback();const ee=U.depthTexture;if(ee&&ee.renderTarget===U&&ie(ee),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let De=0;De<A.__webglFramebuffer[ge].length;De++)s.deleteFramebuffer(A.__webglFramebuffer[ge][De]);else s.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)s.deleteFramebuffer(A.__webglFramebuffer[ge]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Ee=U.textures;for(let ge=0,De=Ee.length;ge<De;ge++){const Ue=i.get(Ee[ge]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),u.memory.textures--),i.remove(Ee[ge])}i.remove(U)}let q=0;function j(){q=0}function I(){return q}function Q(U){q=U}function be(){const U=q;return U>=a.maxTextures&&ct("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+a.maxTextures),q+=1,U}function te(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.mipmapsAutoUpdate),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function Se(U,A){const ee=i.get(U);if(U.isVideoTexture&&Qt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ee.__version!==U.version){const Ee=U.image;if(Ee===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(ee,U,A);return}}else U.isExternalTexture&&(ee.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+A)}function Ae(U,A){const ee=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){Yt(ee,U,A);return}else U.isExternalTexture&&(ee.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+A)}function Be(U,A){const ee=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){Yt(ee,U,A);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+A)}function ye(U,A){const ee=i.get(U);if(U.version>0&&ee.__version!==U.version){fn(ee,U,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+A)}const Ve={[wd]:s.REPEAT,[vr]:s.CLAMP_TO_EDGE,[Td]:s.MIRRORED_REPEAT},vt={[Fn]:s.NEAREST,[Fy]:s.NEAREST_MIPMAP_NEAREST,[Ul]:s.NEAREST_MIPMAP_LINEAR,[ri]:s.LINEAR,[Nf]:s.LINEAR_MIPMAP_NEAREST,[qr]:s.LINEAR_MIPMAP_LINEAR},it={[zy]:s.NEVER,[Nv]:s.ALWAYS,[Hy]:s.LESS,[Pv]:s.LEQUAL,[Gy]:s.EQUAL,[Lv]:s.GEQUAL,[Vy]:s.GREATER,[Wy]:s.NOTEQUAL};function At(U,A){if(A.type===zi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ri||A.magFilter===Nf||A.magFilter===Ul||A.magFilter===qr||A.minFilter===ri||A.minFilter===Nf||A.minFilter===Ul||A.minFilter===qr)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,Ve[A.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,Ve[A.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,Ve[A.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,vt[A.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,vt[A.minFilter]),A.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,it[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Fn||A.minFilter!==Ul&&A.minFilter!==qr||A.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Mt(U,A){let ee=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",G),z(A));const Ee=A.source;let ge=y.get(Ee);ge===void 0&&(ge={},y.set(Ee,ge));const De=te(A);if(De!==U.__cacheKey){ge[De]===void 0&&(ge[De]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ge[De].usedTimes++;const Ue=ge[U.__cacheKey];Ue!==void 0&&(ge[U.__cacheKey].usedTimes--,Ue.usedTimes===0&&W(A)),U.__cacheKey=De,U.__webglTexture=ge[De].texture}return ee}function pt(U,A,ee){return Math.floor(Math.floor(U/ee)/A)}function Xt(U,A,ee,Ee){const De=U.updateRanges;if(De.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ee,Ee,A.data);else{De.sort((k,me)=>k.start-me.start);let Ue=0;for(let k=1;k<De.length;k++){const me=De[Ue],ce=De[k],Ne=me.start+me.count,xe=pt(ce.start,A.width,4),Ce=pt(me.start,A.width,4);ce.start<=Ne+1&&xe===Ce&&pt(ce.start+ce.count-1,A.width,4)===xe?me.count=Math.max(me.count,ce.start+ce.count-me.start):(++Ue,De[Ue]=ce)}De.length=Ue+1;const fe=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),Le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let k=0,me=De.length;k<me;k++){const ce=De[k],Ne=Math.floor(ce.start/4),xe=Math.ceil(ce.count/4),Ce=Ne%A.width,qe=Math.floor(Ne/A.width),dt=xe,we=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,qe),t.texSubImage2D(s.TEXTURE_2D,0,Ce,qe,dt,we,ee,Ee,A.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function Yt(U,A,ee){let Ee=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Ee=s.TEXTURE_3D);const ge=Mt(U,A),De=A.source;t.bindTexture(Ee,U.__webglTexture,s.TEXTURE0+ee);const Ue=i.get(De);if(De.version!==Ue.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+ee),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const we=Tt.getPrimaries(Tt.workingColorSpace),de=A.colorSpace===$r?null:Tt.getPrimaries(A.colorSpace),_e=A.colorSpace===$r||we===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let pe=w(A.image,!1,a.maxTextureSize);pe=Ze(A,pe);const Le=o.convert(A.format,A.colorSpace),k=o.convert(A.type);let me=N(A.internalFormat,Le,k,A.normalized,A.colorSpace,A.isVideoTexture);At(Ee,A);let ce;const Ne=A.mipmaps,xe=A.isVideoTexture!==!0,Ce=Ue.__version===void 0||ge===!0,qe=De.dataReady,dt=P(A,pe);if(A.isDepthTexture)me=M(A.format===Yr,A.type),Ce&&(xe?t.texStorage2D(s.TEXTURE_2D,1,me,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,me,pe.width,pe.height,0,Le,k,null));else if(A.isDataTexture)if(Ne.length>0){xe&&Ce&&t.texStorage2D(s.TEXTURE_2D,dt,me,Ne[0].width,Ne[0].height);for(let we=0,de=Ne.length;we<de;we++)ce=Ne[we],xe?qe&&t.texSubImage2D(s.TEXTURE_2D,we,0,0,ce.width,ce.height,Le,k,ce.data):t.texImage2D(s.TEXTURE_2D,we,me,ce.width,ce.height,0,Le,k,ce.data);A.generateMipmaps=!1}else xe?(Ce&&t.texStorage2D(s.TEXTURE_2D,dt,me,pe.width,pe.height),qe&&Xt(A,pe,Le,k)):t.texImage2D(s.TEXTURE_2D,0,me,pe.width,pe.height,0,Le,k,pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){xe&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,dt,me,Ne[0].width,Ne[0].height,pe.depth);for(let we=0,de=Ne.length;we<de;we++)if(ce=Ne[we],A.format!==er)if(Le!==null)if(xe){if(qe)if(A.layerUpdates.size>0){const _e=w0(ce.width,ce.height,A.format,A.type);for(const he of A.layerUpdates){const Pe=ce.data.subarray(he*_e/ce.data.BYTES_PER_ELEMENT,(he+1)*_e/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,he,ce.width,ce.height,1,Le,Pe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,ce.width,ce.height,pe.depth,Le,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,me,ce.width,ce.height,pe.depth,0,ce.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?qe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,ce.width,ce.height,pe.depth,Le,k,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,we,me,ce.width,ce.height,pe.depth,0,Le,k,ce.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{xe&&Ce&&t.texStorage2D(s.TEXTURE_2D,dt,me,Ne[0].width,Ne[0].height);for(let we=0,de=Ne.length;we<de;we++)ce=Ne[we],A.format!==er?Le!==null?xe?qe&&t.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,ce.width,ce.height,Le,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,we,me,ce.width,ce.height,0,ce.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?qe&&t.texSubImage2D(s.TEXTURE_2D,we,0,0,ce.width,ce.height,Le,k,ce.data):t.texImage2D(s.TEXTURE_2D,we,me,ce.width,ce.height,0,Le,k,ce.data)}else if(A.isDataArrayTexture)if(xe){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,dt,me,pe.width,pe.height,pe.depth),qe)if(A.layerUpdates.size>0){const we=w0(pe.width,pe.height,A.format,A.type);for(const de of A.layerUpdates){const _e=pe.data.subarray(de*we/pe.data.BYTES_PER_ELEMENT,(de+1)*we/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,pe.width,pe.height,1,Le,k,_e)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Le,k,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,me,pe.width,pe.height,pe.depth,0,Le,k,pe.data);else if(A.isData3DTexture)xe?(Ce&&t.texStorage3D(s.TEXTURE_3D,dt,me,pe.width,pe.height,pe.depth),qe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Le,k,pe.data)):t.texImage3D(s.TEXTURE_3D,0,me,pe.width,pe.height,pe.depth,0,Le,k,pe.data);else if(A.isFramebufferTexture){if(Ce)if(xe)t.texStorage2D(s.TEXTURE_2D,dt,me,pe.width,pe.height);else{let we=pe.width,de=pe.height;for(let _e=0;_e<dt;_e++)t.texImage2D(s.TEXTURE_2D,_e,me,we,de,0,Le,k,null),we>>=1,de>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const we=s.canvas;if(we.hasAttribute("layoutsubtree")||we.setAttribute("layoutsubtree","true"),pe.parentNode!==we){we.appendChild(pe),v.add(A),we.onpaint=de=>{const _e=de.changedElements;for(const he of v)_e.includes(he.image)&&(he.needsUpdate=!0)},we.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,pe);else{const _e=s.RGBA,he=s.RGBA,Pe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_e,he,Pe,pe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(xe&&Ce){const we=rt(Ne[0]);t.texStorage2D(s.TEXTURE_2D,dt,me,we.width,we.height)}for(let we=0,de=Ne.length;we<de;we++)ce=Ne[we],xe?qe&&t.texSubImage2D(s.TEXTURE_2D,we,0,0,Le,k,ce):t.texImage2D(s.TEXTURE_2D,we,me,Le,k,ce);A.generateMipmaps=!1}else if(xe){if(Ce){const we=rt(pe);t.texStorage2D(s.TEXTURE_2D,dt,me,we.width,we.height)}qe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,k,pe)}else t.texImage2D(s.TEXTURE_2D,0,me,Le,k,pe);L(A)&&A.mipmapsAutoUpdate===!0&&C(Ee),Ue.__version=De.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function fn(U,A,ee){if(A.image.length!==6)return;const Ee=Mt(U,A),ge=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ee);const De=i.get(ge);if(ge.version!==De.__version||Ee===!0){t.activeTexture(s.TEXTURE0+ee);const Ue=Tt.getPrimaries(Tt.workingColorSpace),fe=A.colorSpace===$r?null:Tt.getPrimaries(A.colorSpace),pe=A.colorSpace===$r||Ue===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Le=A.isCompressedTexture||A.image[0].isCompressedTexture,k=A.image[0]&&A.image[0].isDataTexture,me=[];for(let he=0;he<6;he++)!Le&&!k?me[he]=w(A.image[he],!0,a.maxCubemapSize):me[he]=k?A.image[he].image:A.image[he],me[he]=Ze(A,me[he]);const ce=me[0],Ne=o.convert(A.format,A.colorSpace),xe=o.convert(A.type);let Ce=N(A.internalFormat,Ne,xe,A.normalized,A.colorSpace);const qe=A.isVideoTexture!==!0,dt=De.__version===void 0||Ee===!0,we=ge.dataReady;let de=P(A,ce);At(s.TEXTURE_CUBE_MAP,A);let _e;if(A.isDepthTexture){if(Ce=M(A.format===Yr,A.type),dt)if(qe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ce,ce.width,ce.height);else for(let he=0;he<6;he++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ce,ce.width,ce.height,0,Ne,xe,null)}else if(Le){qe&&dt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Ce,ce.width,ce.height);for(let he=0;he<6;he++){_e=me[he].mipmaps;for(let Pe=0;Pe<_e.length;Pe++){const Qe=_e[Pe];A.format!==er?Ne!==null?qe?we&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Qe.width,Qe.height,Ne,Qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,Ce,Qe.width,Qe.height,0,Qe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Qe.width,Qe.height,Ne,xe,Qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,Ce,Qe.width,Qe.height,0,Ne,xe,Qe.data)}}}else{if(_e=A.mipmaps,qe&&dt){_e.length>0&&de++;const he=rt(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Ce,he.width,he.height)}for(let he=0;he<6;he++)if(k){qe?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,me[he].width,me[he].height,Ne,xe,me[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ce,me[he].width,me[he].height,0,Ne,xe,me[he].data);for(let Pe=0;Pe<_e.length;Pe++){const Et=_e[Pe].image[he].image;qe?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,Et.width,Et.height,Ne,xe,Et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,Ce,Et.width,Et.height,0,Ne,xe,Et.data)}}else{qe?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne,xe,me[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ce,Ne,xe,me[he]);for(let Pe=0;Pe<_e.length;Pe++){const Qe=_e[Pe];qe?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,Ne,xe,Qe.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,Ce,Ne,xe,Qe.image[he])}}}L(A)&&A.mipmapsAutoUpdate===!0&&C(s.TEXTURE_CUBE_MAP),De.__version=ge.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Ft(U,A,ee,Ee,ge,De){const Ue=o.convert(ee.format,ee.colorSpace),fe=o.convert(ee.type),pe=N(ee.internalFormat,Ue,fe,ee.normalized,ee.colorSpace),Le=i.get(A),k=i.get(ee);if(k.__renderTarget=A,!Le.__hasExternalTextures){const me=Math.max(1,A.width>>De),ce=Math.max(1,A.height>>De);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,De,pe,me,ce,A.depth,0,Ue,fe,null):t.texImage2D(ge,De,pe,me,ce,0,Ue,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Fe(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,ge,k.__webglTexture,0,Nt(A)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,ge,k.__webglTexture,De),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Nn(U,A,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,U),A.depthBuffer){const Ee=A.depthTexture,ge=Ee&&Ee.isDepthTexture?Ee.type:null,De=M(A.stencilBuffer,ge),Ue=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Fe(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(A),De,A.width,A.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(A),De,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,De,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,U)}else{const Ee=A.textures;for(let ge=0;ge<Ee.length;ge++){const De=Ee[ge],Ue=o.convert(De.format,De.colorSpace),fe=o.convert(De.type),pe=N(De.internalFormat,Ue,fe,De.normalized,De.colorSpace);Fe(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(A),pe,A.width,A.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(A),pe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,pe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ht(U,A,ee){const Ee=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=i.get(A.depthTexture);ge.__renderTarget=A;const De=Ee?A.depthTexture.image[0]:A.depthTexture.image;(!ge.__webglTexture||De.width!==A.width||De.height!==A.height)&&(De.width=A.width,De.height=A.height,A.depthTexture.needsUpdate=!0),Ee?ye(A.depthTexture,0):Se(A.depthTexture,0);const Ue=ge.__webglTexture,fe=Nt(A),pe=Ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,Le=A.depthTexture.format===Yr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Kr)Fe(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,pe,Ue,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,Le,pe,Ue,0);else if(A.depthTexture.format===Yr)Fe(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,pe,Ue,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,Le,pe,Ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(U){const A=i.get(U),ee=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const Ee=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Ee){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Ee.removeEventListener("dispose",ge)};Ee.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=Ee}if(U.depthTexture&&!A.__autoAllocateDepthBuffer)if(ee)for(let Ee=0;Ee<6;Ee++)Ht(A.__webglFramebuffer[Ee],U,Ee);else U.texture.mipmaps.length>0?Ht(A.__webglFramebuffer[0],U,0):Ht(A.__webglFramebuffer,U,0);else if(ee){A.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Ee]),A.__webglDepthbuffer[Ee]===void 0)A.__webglDepthbuffer[Ee]=s.createRenderbuffer(),Nn(A.__webglDepthbuffer[Ee],U,!1);else{const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=A.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,De)}}else if(U.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Nn(A.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,De)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function nn(U,A,ee){const Ee=i.get(U);A!==void 0&&Ft(Ee.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&$t(U)}function ln(U){const A=U.texture,ee=i.get(U),Ee=i.get(A);U.addEventListener("dispose",K),z(U);const ge=U.textures,De=U.isWebGLCubeRenderTarget===!0,Ue=ge.length>1;if(Ue||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=A.version,u.memory.textures++),De){ee.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps.length>0){ee.__webglFramebuffer[fe]=[];for(let pe=0;pe<A.mipmaps.length;pe++)ee.__webglFramebuffer[fe][pe]=s.createFramebuffer()}else ee.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)ee.__webglFramebuffer[fe]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let fe=0,pe=ge.length;fe<pe;fe++){const Le=i.get(ge[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Fe(U)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const pe=ge[fe];ee.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[fe]);const Le=o.convert(pe.format,pe.colorSpace),k=o.convert(pe.type),me=N(pe.internalFormat,Le,k,pe.normalized,pe.colorSpace,U.isXRRenderTarget===!0),ce=Nt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,me,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,ee.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Nn(ee.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(De){t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),At(s.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)Ft(ee.__webglFramebuffer[fe][pe],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else Ft(ee.__webglFramebuffer[fe],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);L(A)?C(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Ue){for(let fe=0,pe=ge.length;fe<pe;fe++){const Le=ge[fe],k=i.get(Le);let me=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(me=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,k.__webglTexture),At(me,Le),Ft(ee.__webglFramebuffer,U,Le,s.COLOR_ATTACHMENT0+fe,me,0),L(Le)&&C(me)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Ee.__webglTexture),At(fe,A),A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)Ft(ee.__webglFramebuffer[pe],U,A,s.COLOR_ATTACHMENT0,fe,pe);else Ft(ee.__webglFramebuffer,U,A,s.COLOR_ATTACHMENT0,fe,0);L(A)?C(fe):A.mipmaps.length>0&&s.texParameteri(fe,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}U.depthBuffer&&$t(U)}function X(U){const A=U.textures;for(let ee=0,Ee=A.length;ee<Ee;ee++){const ge=A[ee];if(L(ge)&&ge.mipmapsAutoUpdate===!0){const De=D(U),Ue=i.get(ge).__webglTexture;t.bindTexture(De,Ue),C(De),t.unbindTexture()}}}const En=[];function It(U){if(U.samples>0){if(Fe(U)===!1){const A=U.textures,ee=U.width,Ee=U.height;let ge=s.COLOR_BUFFER_BIT;const De=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=i.get(U),fe=A.length>1;if(fe)for(let Le=0;Le<A.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Le=0;Le<A.length;Le++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const k=i.get(A[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,ee,Ee,0,0,ee,Ee,ge,s.NEAREST),d===!0&&(En.length=0,En.push(s.COLOR_ATTACHMENT0+Le),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&En.push(De),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,En))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<A.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const k=i.get(A[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&d){const A=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Nt(U){return Math.min(a.maxSamples,U.samples)}function Fe(U){const A=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Qt(U){const A=u.render.frame;m.get(U)!==A&&(m.set(U,A),U.update())}function Ze(U,A){const ee=U.colorSpace,Ee=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ee!==Pu&&ee!==$r&&(Tt.getTransfer(ee)===Ut?(Ee!==er||ge!==vi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",ee)),A}function rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=be,this.resetTextureUnits=j,this.getTextureUnits=I,this.setTextureUnits=Q,this.setTexture2D=Se,this.setTexture2DArray=Ae,this.setTexture3D=Be,this.setTextureCube=ye,this.rebindTextures=nn,this.setupRenderTarget=ln,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Fe,this.dispose=re}function TA(s,e){function t(i,a=$r){let o;const u=Tt.getTransfer(a);if(i===vi)return s.UNSIGNED_BYTE;if(i===yh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Mh)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Av)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Rv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===wv)return s.BYTE;if(i===Tv)return s.SHORT;if(i===Mo)return s.UNSIGNED_SHORT;if(i===Sh)return s.INT;if(i===nr)return s.UNSIGNED_INT;if(i===zi)return s.FLOAT;if(i===ai)return s.HALF_FLOAT;if(i===Cv)return s.ALPHA;if(i===bv)return s.RGB;if(i===er)return s.RGBA;if(i===Kr)return s.DEPTH_COMPONENT;if(i===Yr)return s.DEPTH_STENCIL;if(i===Eh)return s.RED;if(i===wh)return s.RED_INTEGER;if(i===xs)return s.RG;if(i===Th)return s.RG_INTEGER;if(i===Ah)return s.RGBA_INTEGER;if(i===pu||i===mu||i===gu||i===vu)if(u===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===pu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===pu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ad||i===Rd||i===Cd||i===bd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ad)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pd||i===Ld||i===Nd||i===Dd||i===Id||i===Cu||i===Ud)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Pd||i===Ld)return u===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Nd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Dd)return o.COMPRESSED_R11_EAC;if(i===Id)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Cu)return o.COMPRESSED_RG11_EAC;if(i===Ud)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Hd||i===Gd||i===Vd||i===Wd||i===Xd||i===$d||i===qd||i===Yd||i===Kd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Fd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Od)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$d)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kd)return u===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jd||i===Zd||i===Qd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===jd)return u===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===eh||i===bu||i===th)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Jd)return o.COMPRESSED_RED_RGTC1_EXT;if(i===eh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===th)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const AA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new si({vertexShader:AA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Vu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bA extends Ss{constructor(e,t){super();const i=this;let a=null,o=1,u=null,f="local-floor",d=1,h=null,m=null,v=null,x=null,y=null,E=null;const R=typeof XRWebGLBinding<"u",_=new CA,S={},w=t.getContextAttributes();let L=null,C=null;const D=[],N=[],M=new ut;let P=null,z=null;const F=new Ti;F.viewport=new on;const G=new Ti;G.viewport=new on;const K=[F,G],ie=new kM;let B=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Se=D[te];return Se===void 0&&(Se=new zf,D[te]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(te){let Se=D[te];return Se===void 0&&(Se=new zf,D[te]=Se),Se.getGripSpace()},this.getHand=function(te){let Se=D[te];return Se===void 0&&(Se=new zf,D[te]=Se),Se.getHandSpace()};function le(te){const Se=N.indexOf(te.inputSource);if(Se===-1)return;const Ae=D[Se];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,h||u),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){a.removeEventListener("select",le),a.removeEventListener("selectstart",le),a.removeEventListener("selectend",le),a.removeEventListener("squeeze",le),a.removeEventListener("squeezestart",le),a.removeEventListener("squeezeend",le),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",Z);for(let te=0;te<D.length;te++){const Se=N[te];Se!==null&&(N[te]=null,D[te].disconnect(Se))}B=null,re=null,_.reset();for(const te in S)delete S[te];if(e.setRenderTarget(L),y=null,x=null,v=null,a=null,C=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),z!==null){const te=z.camera;te.fov=z.fov,te.zoom=z.zoom,te.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,i.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,i.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",le),a.addEventListener("selectstart",le),a.addEventListener("selectend",le),a.addEventListener("squeeze",le),a.addEventListener("squeezestart",le),a.addEventListener("squeezeend",le),a.addEventListener("end",W),a.addEventListener("inputsourceschange",Z),w.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Be=null,ye=null;w.depth&&(ye=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=w.stencil?Yr:Kr,Be=w.stencil?ma:nr);const Ve={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:o};v=this.getBinding(),x=v.createProjectionLayer(Ve),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),C=new oi(x.textureWidth,x.textureHeight,{format:er,type:vi,depthTexture:new ga(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Ae={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(a,t,Ae),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new oi(y.framebufferWidth,y.framebufferHeight,{format:er,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await a.requestReferenceSpace(f),be.setContext(a),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(te){for(let Se=0;Se<te.removed.length;Se++){const Ae=te.removed[Se],Be=N.indexOf(Ae);Be>=0&&(N[Be]=null,D[Be].disconnect(Ae))}for(let Se=0;Se<te.added.length;Se++){const Ae=te.added[Se];let Be=N.indexOf(Ae);if(Be===-1){for(let Ve=0;Ve<D.length;Ve++)if(Ve>=N.length){N.push(Ae),Be=Ve;break}else if(N[Ve]===null){N[Ve]=Ae,Be=Ve;break}if(Be===-1)break}const ye=D[Be];ye&&ye.connect(Ae)}}function q(te,Se){Se===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Se.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let Se=te.near,Ae=te.far;_.texture!==null&&(_.depthNear>0&&(Se=_.depthNear),_.depthFar>0&&(Ae=_.depthFar)),ie.near=G.near=F.near=Se,ie.far=G.far=F.far=Ae,(B!==ie.near||re!==ie.far)&&(a.updateRenderState({depthNear:ie.near,depthFar:ie.far}),B=ie.near,re=ie.far),ie.layers.mask=te.layers.mask|6,F.layers.mask=ie.layers.mask&-5,G.layers.mask=ie.layers.mask&-3;const Be=te.parent,ye=ie.cameras;q(ie,Be);for(let Ve=0;Ve<ye.length;Ve++)q(ye[Ve],Be);ie.projectionMatrix.copy(F.projectionMatrix),ie.projectionMatrixInverse.copy(F.projectionMatrixInverse),z===null&&te.isPerspectiveCamera&&(z={camera:te,fov:te.fov,zoom:te.zoom}),j(te,ie,Be)};function j(te,Se,Ae){Ae===null?te.matrix.copy(Se.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(Se.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Se.projectionMatrix),te.projectionMatrixInverse.copy(Se.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ih*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(x===null&&y===null))return d},this.setFoveation=function(te){d=te,x!==null&&(x.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ie)},this.getCameraTexture=function(te){return S[te]};let I=null;function Q(te,Se){if(m=Se.getViewerPose(h||u),E=Se,m!==null){const Ae=m.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Be=!1;Ae.length!==ie.cameras.length&&(ie.cameras.length=0,Be=!0);for(let it=0;it<Ae.length;it++){const At=Ae[it];let Mt=null;if(y!==null)Mt=y.getViewport(At);else{const Xt=v.getViewSubImage(x,At);Mt=Xt.viewport,it===0&&(e.setRenderTargetTextures(C,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(C))}let pt=K[it];pt===void 0&&(pt=new Ti,pt.layers.enable(it),pt.viewport=new on,K[it]=pt),pt.matrix.fromArray(At.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(At.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),it===0&&(ie.matrix.copy(pt.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Be===!0&&ie.cameras.push(pt)}const ye=a.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){v=i.getBinding();const it=v.getDepthInformation(Ae[0]);it&&it.isValid&&it.texture&&_.init(it,a.renderState)}if(ye&&ye.includes("camera-access")&&R){e.state.unbindTexture(),v=i.getBinding();for(let it=0;it<Ae.length;it++){const At=Ae[it].camera;if(At){let Mt=S[At];Mt||(Mt=new Vv,S[At]=Mt);const pt=v.getCameraImage(At);Mt.sourceTexture=pt}}}}for(let Ae=0;Ae<D.length;Ae++){const Be=N[Ae],ye=D[Ae];Be!==null&&ye!==void 0&&ye.update(Be,Se,h||u)}I&&I(te,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),E=null}const be=new Kv;be.setAnimationLoop(Q),this.setAnimationLoop=function(te){I=te},this.dispose=function(){}}}const PA=new kt,s_=new mt;s_.set(-1,0,0,0,1,0,0,0,1);function LA(s,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function i(_,S){S.color.getRGB(_.fogColor.value,Wv(s)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function a(_,S,w,L,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(_,S):S.isMeshLambertMaterial?(o(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(_,S),v(_,S)):S.isMeshPhongMaterial?(o(_,S),m(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(_,S),x(_,S),S.isMeshPhysicalMaterial&&y(_,S,C)):S.isMeshMatcapMaterial?(o(_,S),E(_,S)):S.isMeshDepthMaterial?o(_,S):S.isMeshDistanceMaterial?(o(_,S),R(_,S)):S.isMeshNormalMaterial?o(_,S):S.isLineBasicMaterial?(u(_,S),S.isLineDashedMaterial&&f(_,S)):S.isPointsMaterial?d(_,S,w,L):S.isSpriteMaterial?h(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===Zn&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===Zn&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const w=e.get(S),L=w.envMap,C=w.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(PA.makeRotationFromEuler(C)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(s_),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function u(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function f(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function d(_,S,w,L){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*w,_.scale.value=L*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function h(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function m(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function v(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function x(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,w){_.ior.value=S.ior,S.diffuseRoughness>0&&(_.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.retroreflectivity>0&&(_.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,S){S.matcap&&(_.matcap.value=S.matcap)}function R(_,S){const w=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function NA(s,e,t,i){let a={},o={};function u(w,L){const C=L.program;i.uniformBlockBinding(w,C,a[w.id])}function f(w,L){let C=a[w.id];C===void 0&&(E(w),C=d(w),a[w.id]=C,w.addEventListener("dispose",_));const D=L.program;i.updateUBOMapping(w,D);const N=e.render.frame;o[w.id]!==N&&(h(w),o[w.id]=N)}function d(w){const L=s.createBuffer(),C=w.__size,D=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,C,D),s.bindBuffer(s.UNIFORM_BUFFER,null),L}function h(w){const L=a[w.id],C=w.uniforms,D=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let N=0,M=C.length;N<M;N++){const P=C[N];if(Array.isArray(P))for(let z=0,F=P.length;z<F;z++)m(P[z],N,z,D);else m(P,N,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(w,L,C,D){if(x(w,L,C,D)===!0){const N=w.__offset,M=w.value;if(Array.isArray(M)){let P=0;for(let z=0;z<M.length;z++){const F=M[z],G=R(F,!0);v(F,w.__data,P),P+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else v(M,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,N,w.__data)}}function v(w,L,C){typeof w=="number"||typeof w=="boolean"?L[C]=w:w.isMatrix3?(L[C]=w.elements[0],L[C+1]=w.elements[1],L[C+2]=w.elements[2],L[C+3]=0,L[C+4]=w.elements[3],L[C+5]=w.elements[4],L[C+6]=w.elements[5],L[C+7]=0,L[C+8]=w.elements[6],L[C+9]=w.elements[7],L[C+10]=w.elements[8],L[C+11]=0):ArrayBuffer.isView(w)?L.set(w.subarray(0,L.length-C),C):w.toArray(L,C)}function x(w,L,C,D){const N=w.value,M=L+"_"+C;if(Array.isArray(N)){D[M]===void 0&&(D[M]=[]);const P=D[M];let z=!1;for(let F=0;F<N.length;F++)y(N[F],P,F)===!0&&(z=!0);return z}return y(N,D,M)}function y(w,L,C){if(L[C]===void 0)return typeof w=="number"||typeof w=="boolean"?L[C]=w:ArrayBuffer.isView(w)?L[C]=w.slice():L[C]=w.clone(),!0;{const D=L[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return L[C]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(D.equals(w)===!1)return D.copy(w),!0}}return!1}function E(w){const L=w.uniforms;let C=0;const D=16;for(let M=0,P=L.length;M<P;M++){const z=Array.isArray(L[M])?L[M]:[L[M]];for(let F=0,G=z.length;F<G;F++){const K=z[F],ie=Array.isArray(K.value)?K.value:[K.value],B=Array.isArray(L[M])||Array.isArray(K.value);let re=C;for(let W=0,Z=ie.length;W<Z;W++){const q=ie[W],j=R(q,B),I=C%D,Q=I%j.boundary,be=I+Q;C+=Q,be!==0&&D-be<j.storage&&(C+=D-be),W===0&&(re=C),C+=j.storage}const le=K.type==="int"?Int32Array:K.type==="uint"?Uint32Array:Float32Array;K.__data=new le((C-re)/Float32Array.BYTES_PER_ELEMENT),K.__offset=re}}const N=C%D;return N>0&&(C+=D-N),w.__size=C,w.__cache={},this}function R(w,L){const C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=16,C.storage=48):w.isMatrix4?(C.boundary=16,C.storage=64):w.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(C.boundary=16,C.storage=w.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",w),L===!0&&(C.boundary=16,C.storage=Math.ceil(C.storage/16)*16),C}function _(w){const L=w.target;L.removeEventListener("dispose",_),s.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function S(){for(const w in a)s.deleteBuffer(a[w]);a={},o={}}return{bind:u,update:f,dispose:S}}const DA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function IA(){return ji===null&&(ji=new kv(DA,16,16,xs,ai),ji.name="DFG_LUT",ji.minFilter=ri,ji.magFilter=ri,ji.wrapS=vr,ji.wrapT=vr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class UA{constructor(e={}){const{canvas:t=qy(),context:i=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:y=vi}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=u;const R=y,_=new Set([Ah,Th,wh]),S=new Set([vi,nr,Mo,ma,yh,Mh]),w=new Uint32Array(4),L=new Int32Array(4),C={textures:[],min:[],max:[],resolution:[]};let D=null,N=null;const M=[],P=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let G=!1,K=null,ie=null,B=null,re=null;this._outputColorSpace=gi;let le=0,W=0,Z=null,q=-1,j=null;const I=new on,Q=new on;let be=null;const te=new ot(0);let Se=0,Ae=t.width,Be=t.height,ye=1,Ve=null,vt=null;const it=new on(0,0,Ae,Be),At=new on(0,0,Ae,Be);let Mt=!1;const pt=new To,Xt=new Lh;let Yt=!1,fn=!1;const Ft=new kt,Nn=new Y,Ht=new on,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nn=!1;function ln(){return Z===null?ye:1}let X=i;function En(b,H){return t.getContext(b,H)}let It,Nt,Fe,Qt,Ze,rt,U,A,ee,Ee,ge,De,Ue,fe,pe,Le,k,me,ce,Ne,xe,Ce,qe;try{const b={alpha:!0,depth:a,stencil:o,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dh}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",he,!1),X===null){const H="webgl2";if(X=En(H,b),X===null)throw En(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(b){throw t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Lt("WebGLRenderer: "+b.message),b}function dt(){It=new kT(X),It.init(),xe=new TA(X,It),Nt=new RT(X,It,e,xe),Fe=new EA(X,It),Nt.reversedDepthBuffer&&x&&Fe.buffers.depth.setReversed(!0),ie=X.createFramebuffer(),B=X.createFramebuffer(),re=X.createFramebuffer(),Qt=new HT(X),Ze=new uA,rt=new wA(X,It,Fe,Ze,Nt,xe,Qt),U=new OT(F),A=new VM(X),Ce=new TT(X,A),ee=new BT(X,A,Qt,Ce),Ee=new VT(X,ee,A,Ce,Qt),me=new GT(X,Nt,rt),pe=new CT(Ze),ge=new lA(F,U,It,Nt,Ce,pe),De=new LA(F,Ze),Ue=new fA,fe=new vA(It),k=new wT(F,U,Fe,Ee,E,d),Le=new MA(F,Ee,Nt),qe=new NA(X,Qt,Nt,Fe),ce=new AT(X,It,Qt),Ne=new zT(X,It,Qt),Qt.programs=ge.programs,F.capabilities=Nt,F.extensions=It,F.properties=Ze,F.renderLists=Ue,F.shadowMap=Le,F.state=Fe,F.info=Qt}R!==vi&&(z=new XT(R,t.width,t.height,f,a,o));const we=new bA(F,X);this.xr=we,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=It.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=It.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(b){b!==void 0&&(ye=b,this.setSize(Ae,Be,!1))},this.getSize=function(b){return b.set(Ae,Be)},this.setSize=function(b,H,ae=!0){if(we.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=b,Be=H,t.width=Math.floor(b*ye),t.height=Math.floor(H*ye),ae===!0&&(t.style.width=b+"px",t.style.height=H+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(Ae*ye,Be*ye).floor()},this.setDrawingBufferSize=function(b,H,ae){Ae=b,Be=H,ye=ae,t.width=Math.floor(b*ae),t.height=Math.floor(H*ae),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(R===vi){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(it)},this.setViewport=function(b,H,ae,ne){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,H,ae,ne),Fe.viewport(I.copy(it).multiplyScalar(ln()).round())},this.getScissor=function(b){return b.copy(At)},this.setScissor=function(b,H,ae,ne){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,H,ae,ne),Fe.scissor(Q.copy(At).multiplyScalar(ln()).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(b){Fe.setScissorTest(Mt=b)},this.setOpaqueSort=function(b){Ve=b},this.setTransparentSort=function(b){vt=b},this.getClearColor=function(b){return b.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,ae=!0){let ne=0;if(b){let J=!1;if(Z!==null){const ke=Z.texture.format;J=_.has(ke)}if(J){const ke=Z.texture.type,Xe=S.has(ke),Oe=k.getClearColor(),ze=k.getClearAlpha(),Ye=Oe.r,lt=Oe.g,gt=Oe.b;Xe?(w[0]=Ye,w[1]=lt,w[2]=gt,w[3]=ze,X.clearBufferuiv(X.COLOR,0,w)):(L[0]=Ye,L[1]=lt,L[2]=gt,L[3]=ze,X.clearBufferiv(X.COLOR,0,L))}else ne|=X.COLOR_BUFFER_BIT}H&&(ne|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),K=b},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",he,!1),k.dispose(),Ue.dispose(),fe.dispose(),rt.dispose(),Ze.dispose(),U.dispose(),Ee.dispose(),ee.dispose(),Ce.dispose(),qe.dispose(),ge.dispose(),we.dispose(),we.removeEventListener("sessionstart",Bt),we.removeEventListener("sessionend",rn),Gt.stop()};function de(b){b.preventDefault(),Gg("WebGLRenderer: Context Lost."),G=!0}function _e(){Gg("WebGLRenderer: Context Restored."),G=!1;const b=Qt.autoReset,H=Le.enabled,ae=Le.autoUpdate,ne=Le.needsUpdate,J=Le.type;dt(),Qt.autoReset=b,Le.enabled=H,Le.autoUpdate=ae,Le.needsUpdate=ne,Le.type=J}function he(b){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pe(b){const H=b.target;H.removeEventListener("dispose",Pe),Qe(H)}function Qe(b){Et(b),Ze.remove(b)}function Et(b){const H=Ze.get(b).programs;H!==void 0&&(H.forEach(function(ae){ge.releaseProgram(ae)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,ae,ne,J,ke){H===null&&(H=$t);const Xe=J.isMesh&&J.matrixWorld.determinantAffine()<0,Oe=wa(b,H,ae,ne,J);Fe.setMaterial(ne,Xe);let ze=ae.index,Ye=1;if(ne.wireframe===!0){if(ze=ee.getWireframeAttribute(ae),ze===void 0)return;Ye=2}const lt=ae.drawRange,gt=ae.attributes.position;let Ke=lt.start*Ye,St=(lt.start+lt.count)*Ye;ke!==null&&(Ke=Math.max(Ke,ke.start*Ye),St=Math.min(St,(ke.start+ke.count)*Ye)),ze!==null?(Ke=Math.max(Ke,0),St=Math.min(St,ze.count)):gt!=null&&(Ke=Math.max(Ke,0),St=Math.min(St,gt.count));const en=St-Ke;if(en<0||en===1/0)return;Ce.setup(J,ne,Oe,ae,ze);let Ot,Dt=ce;if(ze!==null&&(Ot=A.get(ze),Dt=Ne,Dt.setIndex(Ot)),J.isMesh)ne.wireframe===!0?(Fe.setLineWidth(ne.wireframeLinewidth*ln()),Dt.setMode(X.LINES)):Dt.setMode(X.TRIANGLES);else if(J.isLine){let un=ne.linewidth;un===void 0&&(un=1),Fe.setLineWidth(un*ln()),J.isLineSegments?Dt.setMode(X.LINES):J.isLineLoop?Dt.setMode(X.LINE_LOOP):Dt.setMode(X.LINE_STRIP)}else J.isPoints?Dt.setMode(X.POINTS):J.isSprite&&Dt.setMode(X.TRIANGLES);if(J.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const un=J._multiDrawStarts,je=J._multiDrawCounts,gn=J._multiDrawCount,tt=ze?A.get(ze).bytesPerElement:1,Vi=Ze.get(ne).currentProgram.getUniforms();for(let vn=0;vn<gn;vn++)Vi.setValue(X,"_gl_DrawID",vn),Dt.render(un[vn]/tt,je[vn])}else if(J.isInstancedMesh)Dt.renderInstances(Ke,en,J.count);else if(ae.isInstancedBufferGeometry){const un=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,je=Math.min(ae.instanceCount,un);Dt.renderInstances(Ke,en,je)}else Dt.render(Ke,en)};function wn(b,H,ae,ne){K!==null&&b.isNodeMaterial&&K.setObject(ne,b),Yt===!0&&pe.setState(b,ae,!1),b.transparent===!0&&b.side===Qi&&b.forceSinglePass===!1?(b.side=Zn,b.needsUpdate=!0,jr(b,H,ne),b.side=_s,b.needsUpdate=!0,jr(b,H,ne),b.side=Qi):jr(b,H,ne)}this.compile=function(b,H,ae=null){ae===null&&(ae=b),K!==null&&K.renderStart(b,H,ae),N=fe.get(ae),N.init(H),P.push(N),ae.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(N.pushLight(J),J.castShadow&&N.pushShadow(J))}),b!==ae&&b.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(N.pushLight(J),J.castShadow&&N.pushShadow(J))}),N.setupLights(),K!==null&&K.updateLights(N.state.lightsArray),fn=this.localClippingEnabled,Yt=pe.init(this.clippingPlanes,fn),Yt===!0&&pe.setGlobalState(this.clippingPlanes,H),K!==null&&Le.render(N.state.shadowsArray,ae,H);const ne=new Set;return b.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const ke=J.material;if(ke)if(Array.isArray(ke))for(let Xe=0;Xe<ke.length;Xe++){const Oe=ke[Xe];wn(Oe,ae,H,J),ne.add(Oe)}else wn(ke,ae,H,J),ne.add(ke)}),N=P.pop(),K!==null&&K.renderEnd(),ne},this.compileAsync=function(b,H,ae=null){const ne=this.compile(b,H,ae);return new Promise(J=>{function ke(){if(ne.forEach(function(Xe){const ze=Ze.get(Xe).currentProgram;(ze===void 0||ze.isReady())&&ne.delete(Xe)}),ne.size===0){J(b);return}setTimeout(ke,10)}It.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let kn=null;function Kt(b){kn&&kn(b)}function Bt(){Gt.stop()}function rn(){Gt.start()}const Gt=new Kv;Gt.setAnimationLoop(Kt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(b){kn=b,we.setAnimationLoop(b),b===null?Gt.stop():Gt.start()},we.addEventListener("sessionstart",Bt),we.addEventListener("sessionend",rn),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;K!==null&&K.renderStart(b,H);const ae=we.enabled===!0&&we.isPresenting===!0,ne=z!==null&&(Z===null||ae)&&z.begin(F,Z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(H),H=we.getCamera()),b.isScene===!0&&b.onBeforeRender(F,b,H,Z),N=fe.get(b,P.length),N.init(H),N.state.textureUnits=rt.getTextureUnits(),P.push(N),Ft.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?Xt.setFromArrayCamera(H):pt.setFromProjectionMatrix(Ft,Hi,H.reversedDepth),fn=this.localClippingEnabled,Yt=pe.init(this.clippingPlanes,fn),D=Ue.get(b,M.length),D.init(),M.push(D),this.info.render.frame++,we.enabled===!0&&we.isPresenting===!0){const Xe=F.xr.getDepthSensingMesh();Xe!==null&&_t(Xe,H,-1/0,F.sortObjects)}_t(b,H,0,F.sortObjects),D.finish(),K!==null&&K.updateLights(N.state.lightsArray),F.sortObjects===!0&&D.sort(Ve,vt),nn=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,nn&&k.addToRenderList(D,b),this.info.autoReset===!0&&this.info.reset(),Yt===!0&&pe.beginShadows();const J=N.state.shadowsArray;if(Le.render(J,b,H),Yt===!0&&pe.endShadows(),(ne&&z.hasRenderPass())===!1){const Xe=D.opaque,Oe=D.transmissive;if(N.setupLights(),H.isArrayCamera){const ze=H.cameras;if(Oe.length>0)for(let Ye=0,lt=ze.length;Ye<lt;Ye++){const gt=ze[Ye];qn(Xe,Oe,b,gt)}nn&&k.render(b);for(let Ye=0,lt=ze.length;Ye<lt;Ye++){const gt=ze[Ye];Dn(D,b,gt,gt.viewport)}}else Oe.length>0&&qn(Xe,Oe,b,H),nn&&k.render(b),Dn(D,b,H)}Z!==null&&W===0&&(rt.updateMultisampleRenderTarget(Z),rt.updateRenderTargetMipmap(Z)),ne&&z.end(F),b.isScene===!0&&b.onAfterRender(F,b,H),Ce.resetDefaultState(),q=-1,j=null,P.pop(),P.length>0?(N=P[P.length-1],rt.setTextureUnits(N.state.textureUnits),Yt===!0&&pe.setGlobalState(F.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?D=M[M.length-1]:D=null,K!==null&&K.renderEnd()};function _t(b,H,ae,ne){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)N.pushLight(b),b.castShadow&&N.pushShadow(b);else if(b.isSprite){const Xe=H.isArrayCamera?Xt:pt;if(!b.frustumCulled||b.intersectsFrustum(Xe)){ne&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ft);const Oe=Ee.update(b),ze=b.material;ze.visible&&D.push(b,Oe,ze,ae,Ht.z,null,H)}}else if(b.isMesh||b.isLine||b.isPoints){const Xe=H.isArrayCamera?Xt:pt;if(!b.frustumCulled||b.intersectsFrustum(Xe)){const Oe=Ee.update(b),ze=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ht.copy(Oe.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(Ft)),Array.isArray(ze)){const Ye=Oe.groups;for(let lt=0,gt=Ye.length;lt<gt;lt++){const Ke=Ye[lt],St=ze[Ke.materialIndex];St&&St.visible&&D.push(b,Oe,St,ae,Ht.z,Ke,H)}}else ze.visible&&D.push(b,Oe,ze,ae,Ht.z,null,H)}}}const ke=b.children;for(let Xe=0,Oe=ke.length;Xe<Oe;Xe++)_t(ke[Xe],H,ae,ne)}function Dn(b,H,ae,ne){const{opaque:J,transmissive:ke,transparent:Xe}=b;N.setupLightsView(ae),Yt===!0&&pe.setGlobalState(F.clippingPlanes,ae),ne&&Fe.viewport(I.copy(ne)),J.length>0&&ir(J,H,ae),ke.length>0&&ir(ke,H,ae),Xe.length>0&&ir(Xe,H,ae),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function qn(b,H,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ne.id]===void 0){const Ke=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ne.id]=new oi(1,1,{generateMipmaps:!0,type:Ke?ai:vi,minFilter:qr,samples:Math.max(4,Nt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const ke=N.state.transmissionRenderTarget[ne.id],Xe=ne.viewport||I;ke.setSize(Xe.z*F.transmissionResolutionScale,Xe.w*F.transmissionResolutionScale);const Oe=F.getRenderTarget(),ze=F.getActiveCubeFace(),Ye=F.getActiveMipmapLevel();F.setRenderTarget(ke),F.getClearColor(te),Se=F.getClearAlpha(),Se<1&&F.setClearColor(16777215,.5),F.clear(),nn&&k.render(ae);const lt=F.toneMapping;F.toneMapping=_r;const gt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),N.setupLightsView(ne),Yt===!0&&pe.setGlobalState(F.clippingPlanes,ne),ir(b,ae,ne),rt.updateMultisampleRenderTarget(ke),rt.updateRenderTargetMipmap(ke),It.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let St=0,en=H.length;St<en;St++){const Ot=H[St],{object:Dt,geometry:un,material:je,group:gn}=Ot;if(je.side===Qi&&Dt.layers.test(ne.layers)){const tt=je.side;je.side=Zn,je.needsUpdate=!0,Ri(Dt,ae,ne,un,je,gn),je.side=tt,je.needsUpdate=!0,Ke=!0}}Ke===!0&&(rt.updateMultisampleRenderTarget(ke),rt.updateRenderTargetMipmap(ke))}F.setRenderTarget(Oe,ze,Ye),F.setClearColor(te,Se),gt!==void 0&&(ne.viewport=gt),F.toneMapping=lt}function ir(b,H,ae){const ne=H.isScene===!0?H.overrideMaterial:null;for(let J=0,ke=b.length;J<ke;J++){const Xe=b[J],{object:Oe,geometry:ze,group:Ye}=Xe;let lt=Xe.material;lt.allowOverride===!0&&ne!==null&&(lt=ne),Oe.layers.test(ae.layers)&&Ri(Oe,H,ae,ze,lt,Ye)}}function Ri(b,H,ae,ne,J,ke){K!==null&&J.isNodeMaterial&&K.setObject(b,J),b.onBeforeRender(F,H,ae,ne,J,ke),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(F,H,ae,ne,b,ke),J.transparent===!0&&J.side===Qi&&J.forceSinglePass===!1?(J.side=Zn,J.needsUpdate=!0,F.renderBufferDirect(ae,H,ne,J,b,ke),J.side=_s,J.needsUpdate=!0,F.renderBufferDirect(ae,H,ne,J,b,ke),J.side=Qi):F.renderBufferDirect(ae,H,ne,J,b,ke),b.onAfterRender(F,H,ae,ne,J,ke)}function Ci(b){let H=0;for(const ae of b)ae.texture!==null&&H++;return H}function jr(b,H,ae){H.isScene!==!0&&(H=$t);const ne=Ze.get(b),J=N.state.lights,ke=N.state.shadowsArray,Xe=J.state.version,Oe=ge.getParameters(b,J.state,ke,H,ae,N.state.lightProbeGridArray),ze=ge.getProgramCacheKey(Oe);let Ye=ne.programs;ne.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,ne.fog=H.fog;const lt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ne.envMap=U.get(b.envMap||ne.environment,lt),ne.envMapRotation=ne.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",Pe),Ye=new Map,ne.programs=Ye,ne.programVariants=new Map);let gt=Ye.get(ze);if(gt!==void 0){if(ne.currentProgram===gt&&ne.lightsStateVersion===Xe)return Po(b,Oe),gt}else Oe.uniforms=ge.getUniforms(b),K!==null&&b.isNodeMaterial&&K.build(b,ae,Oe),b.onBeforeCompile(Oe,F),gt=ge.acquireProgram(Oe,ze),Ye.set(ze,gt),ne.uniforms=Oe.uniforms;const Ke=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=pe.uniform),Po(b,Oe),ne.needsLights=ws(b),ne.lightsStateVersion=Xe,ne.needsLights&&(Ke.ambientLightColor.value=J.state.ambient,Ke.lightProbe.value=J.state.probe,Ke.sunLights.value=J.state.sun,Ke.sunLightShadows.value=J.state.sunShadow,Ke.directionalLights.value=J.state.directional,Ke.directionalLightShadows.value=J.state.directionalShadow,Ke.spotLights.value=J.state.spot,Ke.spotLightShadows.value=J.state.spotShadow,Ke.rectAreaLights.value=J.state.rectArea,Ke.ltc_1.value=J.state.rectAreaLTC1,Ke.ltc_2.value=J.state.rectAreaLTC2,Ke.pointLights.value=J.state.point,Ke.pointLightShadows.value=J.state.pointShadow,Ke.hemisphereLights.value=J.state.hemi,Ke.sunShadowMatrix.value=J.state.sunShadowMatrix,Ke.sunShadowCascade.value=J.state.sunShadowCascade,Ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ke.spotLightMatrix.value=J.state.spotLightMatrix,Ke.spotLightMap.value=J.state.spotLightMap,Ke.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.numLightProbeGrids=Ci(N.state.lightProbeGridArray),ne.currentProgram=gt,ne.uniformsList=null,gt}function $u(b,H,ae,ne,J){const ke=Ze.get(b),Xe=ke.currentProgram.id+","+ne+","+J;let Oe=ke.programVariants.get(Xe);return Oe===void 0?(Oe=jr(b,H,ae),ke.programVariants.set(Xe,Oe)):(ke.currentProgram=Oe,ke.uniformsList=null,ke.outputColorSpace=ne,ke.toneMapping=J),Oe}function Jt(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=yu.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Po(b,H){const ae=Ze.get(b);ae.outputColorSpace=H.outputColorSpace,ae.batching=H.batching,ae.batchingColor=H.batchingColor,ae.instancing=H.instancing,ae.instancingColor=H.instancingColor,ae.instancingMorph=H.instancingMorph,ae.skinning=H.skinning,ae.morphTargets=H.morphTargets,ae.morphNormals=H.morphNormals,ae.morphColors=H.morphColors,ae.morphTargetsCount=H.morphTargetsCount,ae.numClippingPlanes=H.numClippingPlanes,ae.numIntersection=H.numClipIntersection,ae.vertexAlphas=H.vertexAlphas,ae.vertexTangents=H.vertexTangents,ae.toneMapping=H.toneMapping}function wa(b,H,ae,ne,J){H.isScene!==!0&&(H=$t),rt.resetTextureUnits();const ke=H.fog,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?H.environment:null,Oe=Z===null?F.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Tt.workingColorSpace,ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ye=U.get(ne.envMap||Xe,ze),lt=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,gt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!ae.morphAttributes.position,St=!!ae.morphAttributes.normal,en=!!ae.morphAttributes.color;let Ot=_r;ne.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ot=F.toneMapping);const Dt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,un=Dt!==void 0?Dt.length:0,je=Ze.get(ne),gn=N.state.lights;if(Yt===!0&&(fn===!0||b!==j)){const bt=b===j&&ne.id===q;pe.setState(ne,b,bt)}let tt=!1,Vi=!1;ne.version===je.__version?je.needsLights&&je.lightsStateVersion!==gn.state.version||J.isBatchedMesh&&je.batching===!1||!J.isBatchedMesh&&je.batching===!0||J.isBatchedMesh&&je.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&je.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&je.instancing===!1||!J.isInstancedMesh&&je.instancing===!0||J.isSkinnedMesh&&je.skinning===!1||!J.isSkinnedMesh&&je.skinning===!0||J.isInstancedMesh&&je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&je.instancingMorph===!1&&J.morphTexture!==null||je.envMap!==Ye||ne.fog===!0&&je.fog!==ke||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==pe.numPlanes||je.numIntersection!==pe.numIntersection)||je.vertexAlphas!==lt||je.vertexTangents!==gt||je.morphTargets!==Ke||je.morphNormals!==St||je.morphColors!==en||je.morphTargetsCount!==un||je.numLightProbeGrids!==Ci(N.state.lightProbeGridArray)?tt=!0:(je.outputColorSpace!==Oe||je.toneMapping!==Ot)&&(Vi=!0):(tt=!0,je.__version=ne.version);let vn=je.currentProgram;(tt===!0||Vi===!0)&&(vn=Vi===!0?$u(ne,H,J,Oe,Ot):jr(ne,H,J),K&&ne.isNodeMaterial&&K.onUpdateProgram(ne,vn,je));let yr=!1,bi=!1,Wi=!1;const wt=vn.getUniforms(),dn=je.uniforms;if(Fe.useProgram(vn.program)&&(yr=!0,bi=!0,Wi=!0),ne.id!==q&&(q=ne.id,bi=!0),yr||j!==b){Fe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),wt.setValue(X,"projectionMatrix",b.projectionMatrix),wt.setValue(X,"viewMatrix",b.matrixWorldInverse);const Vt=wt.map.cameraPosition;Vt!==void 0&&Vt.setValue(X,Nn.setFromMatrixPosition(b.matrixWorld)),Nt.logarithmicDepthBuffer&&wt.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&wt.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,bi=!0,Wi=!0)}if(je.needsLights&&(gn.state.sunShadowMap.length>0&&wt.setValue(X,"sunShadowMap",gn.state.sunShadowMap,rt),gn.state.directionalShadowMap.length>0&&wt.setValue(X,"directionalShadowMap",gn.state.directionalShadowMap,rt),gn.state.spotShadowMap.length>0&&wt.setValue(X,"spotShadowMap",gn.state.spotShadowMap,rt),gn.state.pointShadowMap.length>0&&wt.setValue(X,"pointShadowMap",gn.state.pointShadowMap,rt)),J.isSkinnedMesh){wt.setOptional(X,J,"bindMatrix"),wt.setOptional(X,J,"bindMatrixInverse");const bt=J.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),wt.setValue(X,"boneTexture",bt.boneTexture,rt))}J.isBatchedMesh&&(wt.setOptional(X,J,"batchingTexture"),wt.setValue(X,"batchingTexture",J._matricesTexture,rt),wt.setOptional(X,J,"batchingIdTexture"),wt.setValue(X,"batchingIdTexture",J._indirectTexture,rt),wt.setOptional(X,J,"batchingColorTexture"),J._colorsTexture!==null&&wt.setValue(X,"batchingColorTexture",J._colorsTexture,rt));const Bn=ae.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&me.update(J,ae,vn),(bi||je.receiveShadow!==J.receiveShadow)&&(je.receiveShadow=J.receiveShadow,wt.setValue(X,"receiveShadow",J.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&H.environment!==null&&(dn.envMapIntensity.value=H.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=IA()),bi){if(wt.setValue(X,"toneMappingExposure",F.toneMappingExposure),je.needsLights&&Lo(dn,Wi),ke&&ne.fog===!0&&De.refreshFogUniforms(dn,ke),De.refreshMaterialUniforms(dn,ne,ye,Be,N.state.transmissionRenderTarget[b.id]),je.needsLights&&je.numLightProbeGrids>0){const bt=C;let Vt=0;for(const Tn of N.state.lightProbeGridArray)Tn.texture!==null&&(bt.textures[Vt]=Tn.texture,bt.min[Vt]=Tn.boundingBox.min,bt.max[Vt]=Tn.boundingBox.max,bt.resolution[Vt]=Tn.resolution,Vt++);for(const Tn in bt)bt[Tn].length=Vt;dn.probesSH.value=bt.textures,dn.probesMin.value=bt.min,dn.probesMax.value=bt.max,dn.probesResolution.value=bt.resolution}yu.upload(X,Jt(je),dn,rt)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(yu.upload(X,Jt(je),dn,rt),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&wt.setValue(X,"center",J.center),wt.setValue(X,"modelViewMatrix",J.modelViewMatrix),wt.setValue(X,"normalMatrix",J.normalMatrix),wt.setValue(X,"modelMatrix",J.matrixWorld),ne.uniformsGroups!==void 0){const bt=ne.uniformsGroups;for(let Vt=0,Tn=bt.length;Vt<Tn;Vt++){const Mr=bt[Vt];qe.update(Mr,vn),qe.bind(Mr,vn)}}return vn}function Lo(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.sunLights.needsUpdate=H,b.sunLightShadows.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function ws(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,H,ae){const ne=Ze.get(b);ne.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Ze.get(b.texture).__webglTexture=H,Ze.get(b.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const ae=Ze.get(b);ae.__webglFramebuffer=H,ae.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,ae=0){Z=b,le=H,W=ae;let ne=null,J=!1,ke=!1;if(b){const Oe=Ze.get(b);if(Oe.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(X.FRAMEBUFFER,Oe.__webglFramebuffer),I.copy(b.viewport),Q.copy(b.scissor),be=b.scissorTest,Fe.viewport(I),Fe.scissor(Q),Fe.setScissorTest(be),q=-1;return}else if(Oe.__webglFramebuffer===void 0)rt.setupRenderTarget(b);else if(Oe.__hasExternalTextures)rt.rebindTextures(b,Ze.get(b.texture).__webglTexture,Ze.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const lt=b.depthTexture;if(Oe.__boundDepthTexture!==lt){if(lt!==null&&Ze.has(lt)&&(b.width!==lt.image.width||b.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(b)}}const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ke=!0);const Ye=Ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[H])?ne=Ye[H][ae]:ne=Ye[H],J=!0):b.samples>0&&rt.useMultisampledRTT(b)===!1?ne=Ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?ne=Ye[ae]:ne=Ye,I.copy(b.viewport),Q.copy(b.scissor),be=b.scissorTest}else I.copy(it).multiplyScalar(ye).floor(),Q.copy(At).multiplyScalar(ye).floor(),be=Mt;if(ae!==0&&(ne=ie),Fe.bindFramebuffer(X.FRAMEBUFFER,ne)&&Fe.drawBuffers(b,ne),Fe.viewport(I),Fe.scissor(Q),Fe.setScissorTest(be),J){const Oe=Ze.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe.__webglTexture,ae)}else if(ke){const Oe=H;for(let ze=0;ze<b.textures.length;ze++){const Ye=Ze.get(b.textures[ze]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ze,Ye.__webglTexture,ae,Oe)}}else if(b!==null&&ae!==0){const Oe=Ze.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oe.__webglTexture,ae)}q=-1};function No(b){const H=Ze.get(b);return(H.__readFormat!==b.format||H.__readType!==b.type)&&(H.__readFormat=b.format,H.__readType=b.type,H.__formatReadable=Nt.textureFormatReadable(b.format),H.__typeReadable=Nt.textureTypeReadable(b.type)),H}this.readRenderTargetPixels=function(b,H,ae,ne,J,ke,Xe,Oe=0){if(!(b&&b.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xe!==void 0&&(ze=ze[Xe],Array.isArray(ze)&&(ze=ze[0])),ze){Fe.bindFramebuffer(X.FRAMEBUFFER,ze);try{const Ye=b.textures[Oe],lt=Ye.format,gt=Ye.type;b.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe);const Ke=No(Ye);if(Ke.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-ne&&ae>=0&&ae<=b.height-J&&X.readPixels(H,ae,ne,J,xe.convert(lt),xe.convert(gt),ke)}finally{const Ye=Z!==null?Ze.get(Z).__webglFramebuffer:null;Fe.bindFramebuffer(X.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(b,H,ae,ne,J,ke,Xe,Oe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xe!==void 0&&(ze=ze[Xe],Array.isArray(ze)&&(ze=ze[0])),ze)if(H>=0&&H<=b.width-ne&&ae>=0&&ae<=b.height-J){Fe.bindFramebuffer(X.FRAMEBUFFER,ze);const Ye=b.textures[Oe],lt=Ye.format,gt=Ye.type;b.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe);const Ke=No(Ye);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,St),X.bufferData(X.PIXEL_PACK_BUFFER,ke.byteLength,X.STREAM_READ),X.readPixels(H,ae,ne,J,xe.convert(lt),xe.convert(gt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const en=Z!==null?Ze.get(Z).__webglFramebuffer:null;Fe.bindFramebuffer(X.FRAMEBUFFER,en);const Ot=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Yy(X,Ot,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,St),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ke),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(St),X.deleteSync(Ot),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,ae=0){const ne=Math.pow(2,-ae),J=Math.floor(b.image.width*ne),ke=Math.floor(b.image.height*ne),Xe=H!==null?H.x:0,Oe=H!==null?H.y:0;rt.setTexture2D(b,0),X.copyTexSubImage2D(X.TEXTURE_2D,ae,0,0,Xe,Oe,J,ke),Fe.unbindTexture()},this.copyTextureToTexture=function(b,H,ae=null,ne=null,J=0,ke=0){let Xe,Oe,ze,Ye,lt,gt,Ke,St,en;const Ot=b.isCompressedTexture?b.mipmaps[ke]:b.image;if(ae!==null)Xe=ae.max.x-ae.min.x,Oe=ae.max.y-ae.min.y,ze=ae.isBox3?ae.max.z-ae.min.z:1,Ye=ae.min.x,lt=ae.min.y,gt=ae.isBox3?ae.min.z:0;else{const wt=Math.pow(2,-J);Xe=Math.floor(Ot.width*wt),Oe=Math.floor(Ot.height*wt),b.isDataArrayTexture?ze=Ot.depth:b.isData3DTexture?ze=Math.floor(Ot.depth*wt):ze=1,Ye=0,lt=0,gt=0}ne!==null?(Ke=ne.x,St=ne.y,en=ne.z):(Ke=0,St=0,en=0);const Dt=xe.convert(H.format),un=xe.convert(H.type);let je;H.isData3DTexture?(rt.setTexture3D(H,0),je=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(rt.setTexture2DArray(H,0),je=X.TEXTURE_2D_ARRAY):(rt.setTexture2D(H,0),je=X.TEXTURE_2D),Fe.activeTexture(X.TEXTURE0),Fe.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),Fe.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Fe.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);const gn=Fe.getParameter(X.UNPACK_ROW_LENGTH),tt=Fe.getParameter(X.UNPACK_IMAGE_HEIGHT),Vi=Fe.getParameter(X.UNPACK_SKIP_PIXELS),vn=Fe.getParameter(X.UNPACK_SKIP_ROWS),yr=Fe.getParameter(X.UNPACK_SKIP_IMAGES);Fe.pixelStorei(X.UNPACK_ROW_LENGTH,Ot.width),Fe.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ot.height),Fe.pixelStorei(X.UNPACK_SKIP_PIXELS,Ye),Fe.pixelStorei(X.UNPACK_SKIP_ROWS,lt),Fe.pixelStorei(X.UNPACK_SKIP_IMAGES,gt);const bi=b.isDataArrayTexture||b.isData3DTexture,Wi=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const wt=Ze.get(b),dn=Ze.get(H),Bn=Ze.get(wt.__renderTarget),bt=Ze.get(dn.__renderTarget);Fe.bindFramebuffer(X.READ_FRAMEBUFFER,Bn.__webglFramebuffer),Fe.bindFramebuffer(X.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Vt=0;Vt<ze;Vt++)bi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ze.get(b).__webglTexture,J,gt+Vt),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ze.get(H).__webglTexture,ke,en+Vt)),X.blitFramebuffer(Ye,lt,Ye+Xe,lt+Oe,Ke,St,Ke+Xe,St+Oe,X.DEPTH_BUFFER_BIT,X.NEAREST);Fe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(J!==0||b.isRenderTargetTexture||Ze.has(b)){const wt=Ze.get(b),dn=Ze.get(H);Fe.bindFramebuffer(X.READ_FRAMEBUFFER,B),Fe.bindFramebuffer(X.DRAW_FRAMEBUFFER,re);for(let Bn=0;Bn<ze;Bn++)bi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,wt.__webglTexture,J,gt+Bn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,wt.__webglTexture,J),Wi?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dn.__webglTexture,ke,en+Bn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dn.__webglTexture,ke),J!==0?X.blitFramebuffer(Ye,lt,Ye+Xe,lt+Oe,Ke,St,Ke+Xe,St+Oe,X.COLOR_BUFFER_BIT,X.NEAREST):Wi?X.copyTexSubImage3D(je,ke,Ke,St,en+Bn,Ye,lt,Xe,Oe):X.copyTexSubImage2D(je,ke,Ke,St,Ye,lt,Xe,Oe);Fe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Wi?b.isDataTexture||b.isData3DTexture?X.texSubImage3D(je,ke,Ke,St,en,Xe,Oe,ze,Dt,un,Ot.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D(je,ke,Ke,St,en,Xe,Oe,ze,Dt,Ot.data):X.texSubImage3D(je,ke,Ke,St,en,Xe,Oe,ze,Dt,un,Ot):b.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ke,Ke,St,Xe,Oe,Dt,un,Ot.data):b.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ke,Ke,St,Ot.width,Ot.height,Dt,Ot.data):X.texSubImage2D(X.TEXTURE_2D,ke,Ke,St,Xe,Oe,Dt,un,Ot);Fe.pixelStorei(X.UNPACK_ROW_LENGTH,gn),Fe.pixelStorei(X.UNPACK_IMAGE_HEIGHT,tt),Fe.pixelStorei(X.UNPACK_SKIP_PIXELS,Vi),Fe.pixelStorei(X.UNPACK_SKIP_ROWS,vn),Fe.pixelStorei(X.UNPACK_SKIP_IMAGES,yr),ke===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&X.generateMipmap(je),Fe.unbindTexture()},this.initRenderTarget=function(b){Ze.get(b).__webglFramebuffer===void 0&&rt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?rt.setTextureCube(b,0):b.isData3DTexture?rt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?rt.setTexture2DArray(b,0):rt.setTexture2D(b,0),Fe.unbindTexture()},this.resetState=function(){le=0,W=0,Z=null,Fe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const Mu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ea{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FA=new Yv(-1,1,1,-1,0,1);class OA extends Ln{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}}const kA=new OA;class kh{constructor(e){this._mesh=new Sn(kA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,FA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class BA extends Ea{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof si?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ao.clone(e.uniforms),this.material=new si({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new kh(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class $0 extends Ea{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,u,4294967295),o.buffers.stencil.setClear(f),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}}class zA extends Ea{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class HA{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ut);this._width=i.width,this._height=i.height,t=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new BA(Mu),this.copyPass.material.blending=vs,this.timer=new BM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let a=0,o=this.passes.length;a<o;a++){const u=this.passes[a];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),u.needsSwap){if(i){const f=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}$0!==void 0&&(u instanceof $0?i=!0:u instanceof zA&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class GA extends Ea{constructor(e,t,i=null,a=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ot}render(e,t,i){const a=e.autoClear;e.autoClear=!1;let o,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=a}}const VA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class _a extends Ea{constructor(e,t=1,i,a){super(),this.strength=t,this.radius=i,this.threshold=a,this.resolution=e!==void 0?new ut(e.x,e.y):new ut(256,256),this.clearColor=new ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new oi(o,u,{type:ai,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const v=new oi(o,u,{type:ai,depthBuffer:!1});v.texture.name="UnrealBloomPass.h"+m,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const x=new oi(o,u,{type:ai,depthBuffer:!1});x.texture.name="UnrealBloomPass.v"+m,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),o=Math.round(o/2),u=Math.round(u/2)}const f=VA;this.highPassUniforms=Ao.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new si({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const d=[6,10,14,18,22];o=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new ut(1/o,1/u),o=Math.round(o/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ao.clone(Mu.uniforms),this.blendMaterial=new si({uniforms:this.copyUniforms,vertexShader:Mu.vertexShader,fragmentShader:Mu.fragmentShader,premultipliedAlpha:!0,blending:mi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ot,this._oldClearAlpha=1,this._basic=new hs,this._fsQuad=new kh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(i,a);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,a),this.renderTargetsVertical[o].setSize(i,a),this.separableBlurMaterials[o].uniforms.invSize.value=new ut(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2)}render(e,t,i,a,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let f=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[d].uniforms.direction.value=_a.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=_a.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this._fsQuad.render(e),f=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let u=0;u<e;u++)t.push(.39894*Math.exp(-.5*u*u/(i*i))/i);const a=[],o=[];for(let u=1;u<e;u+=2){const f=t[u],d=u+1<e?t[u+1]:0,h=f+d;a.push((u*f+(u+1)*d)/h),o.push(h)}return new si({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:a},gaussianWeights:{value:o}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new si({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}_a.BlurDirectionX=new ut(1,0);_a.BlurDirectionY=new ut(0,1);const du={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class WA extends Ea{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ao.clone(du.uniforms),this.material=new Xv({name:du.name,uniforms:this.uniforms,vertexShader:du.vertexShader,fragmentShader:du.fragmentShader}),this._fsQuad=new kh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Tt.getTransfer(this._outputColorSpace)===Ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_h?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const q0=34,la=11,Bi=10,go=16,Wr=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),Y0=s=>s*s*(3-2*s),zt=(s,e)=>s+Math.random()*(e-s),XA=`
  varying vec3 vPos;
  void main() {
    vPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
  }
`,$A=`
  precision highp float;
  uniform float uTime;
  uniform float uCamZ;
  uniform float uSpeed;
  uniform vec3 uColor;
  uniform float uGateZ[${go}];
  uniform float uGateGlow[${go}];
  varying vec3 vPos;

  float h11(float n) { return fract(sin(n * 127.1) * 43758.5453); }
  float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

  void main() {
    const float COLS = 84.0;
    const float CELL = 0.5;

    float ang = atan(vPos.y, vPos.x) / 6.2831853 + 0.5;
    float cx = ang * COLS;
    float col = floor(cx);
    float fx = fract(cx);

    float colSpeed = 0.5 + h11(col) * 1.6;
    float on = step(0.3, h11(col + 9.1));

    // glyph grid that scrolls along the tunnel
    float zc = -vPos.z / CELL + uTime * colSpeed * 1.4;
    float row = floor(zc);
    float fy = fract(zc);
    vec2 gp = floor(vec2(fx, fy) * vec2(4.0, 5.0));
    float bit = step(0.5, h21(gp + vec2(row, col) * 1.37));
    float margin = step(0.16, fx) * step(fx, 0.84) * step(0.12, fy) * step(fy, 0.88);
    float glyph = bit * margin;

    // bright "heads" streaming down each column
    float trail = fract(-vPos.z * 0.028 + uTime * colSpeed * 0.22 + h11(col) * 7.0);
    float head = pow(trail, 6.0);
    float flick = 0.55 + 0.45 * h21(vec2(row, col + floor(uTime * 3.0)));

    float inten = glyph * on * (0.07 + 1.5 * head) * flick;

    // thin electric seams between columns
    float seam = pow(1.0 - abs(fract(cx * 0.5) - 0.5) * 2.0, 14.0);
    inten += seam * 0.05 * on;

    // pulses travelling forward through the walls
    float pulse = 0.0;
    for (int k = 0; k < 3; k++) {
      float fk = float(k);
      float pz = uCamZ - 8.0 - mod(uTime * (22.0 + fk * 9.0) + fk * 47.0, 130.0);
      float band = exp(-pow((vPos.z - pz) / 2.2, 2.0));
      float forks = 0.35 + 0.65 * step(0.55, h21(vec2(col, fk + floor(uTime * 6.0))));
      pulse += band * (0.25 + seam * 6.0 + glyph * 1.4) * forks;
    }
    inten += pulse;

    // glow around each gate
    float gate = 0.0;
    for (int i = 0; i < ${go}; i++) {
      float d = vPos.z - uGateZ[i];
      gate += exp(-d * d / 14.0) * uGateGlow[i] * (0.35 + glyph * 1.6 + seam * 4.0);
    }
    inten += gate;

    // speed streaks
    inten += uSpeed * seam * 1.2 * on;

    float dist = abs(vPos.z - uCamZ);
    float fade = exp(-dist * 0.024) * smoothstep(8.0, -12.0, vPos.z);

    vec3 c = mix(uColor, vec3(1.0), clamp(head * 0.7 + pulse * 0.25 + gate * 0.2, 0.0, 1.0));
    float a = inten * fade;
    gl_FragColor = vec4(c * a, a);
  }
`;function qA(s,e){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=window.innerWidth<800,a=new UA({canvas:s,antialias:!1,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio,i?1.5:2));const o=778,u=new hM;u.background=new ot(o),u.fog=new Ph(o,.016);const f=new Ti(65,1,.1,400);let d=e.getStopScrolls();const h=Math.max(d.length,2),m=de=>la-de*q0,v=m(h-1);u.add(new UM(2937068,2068,.55));const x=new y0(6284287,180,0,2);u.add(x);const y=new y0(12448767,0,40,2);u.add(y);const E=20,R=v-80,_=E-R,S=[];for(let de=1;de<h;de++)S.push(la-(de-.5)*q0);const w=Array.from({length:go},(de,_e)=>_e<S.length?S[_e]:1e5),L=new Array(go).fill(0),C=new si({vertexShader:XA,fragmentShader:$A,side:Zn,transparent:!0,depthWrite:!1,blending:mi,uniforms:{uTime:{value:0},uCamZ:{value:la},uSpeed:{value:0},uColor:{value:new ot(.17,.82,.93)},uGateZ:{value:w},uGateGlow:{value:L}}}),D=new Nh(Bi,Bi,_,128,1,!0);D.rotateX(Math.PI/2);const N=new Sn(D,C);N.position.z=(E+R)/2,N.frustumCulled=!1,u.add(N);const M=[],P=new Iu(Bi*.93,.07,8,160),z=new Iu(Bi*.74,.035,6,144),F=[];for(let de=0;de<36;de++){const _e=de/36*Math.PI*2;F.push(Math.cos(_e)*Bi*.74,Math.sin(_e)*Bi*.74,0),F.push(Math.cos(_e)*Bi*.93,Math.sin(_e)*Bi*.93,0)}const G=new Ln;G.setAttribute("position",new Wt(F,3));const K=()=>new hs({color:new ot(.3,1.1,1.5),transparent:!0,opacity:.3,blending:mi,depthWrite:!1,fog:!1});S.forEach(de=>{const _e=new Sn(P,K()),he=new Sn(z,K()),Pe=new d0(G,new Su({color:new ot(.3,1.1,1.5),transparent:!0,opacity:.2,blending:mi,depthWrite:!1,fog:!1}));[_e,he,Pe].forEach(Qe=>{Qe.position.z=de,u.add(Qe)}),M.push({outer:_e,inner:he,spokes:Pe,z:de})});const ie=new ou({color:661030,metalness:.85,roughness:.32,flatShading:!0,emissive:69660}),B=new hs({color:new ot(.25,.95,1.25),wireframe:!0,transparent:!0,opacity:.55,blending:mi,depthWrite:!1}),re=[],le=(de,_e)=>{const he=new a0(de,ie,_e),Pe=new a0(de,B,_e);he.frustumCulled=!1,Pe.frustumCulled=!1;const Qe=[];for(let wn=0;wn<_e;wn++){const kn=Math.random()*Math.PI*2,Kt=2.4+Math.pow(Math.random(),1.4)*6.6;let Bt=.2+Math.pow(Math.random(),4)*3.4;Bt=Math.min(Bt,Kt*.55,(9.4-Kt)*.7+.3),Qe.push({pos:new Y(Math.cos(kn)*Kt,Math.sin(kn)*Kt,zt(v-70,14)),rot:new Sr(zt(0,6.28),zt(0,6.28),zt(0,6.28)),spin:new Y(zt(-.4,.4),zt(-.4,.4),zt(-.4,.4)),scale:new Y(Bt*zt(.6,1.5),Bt*zt(.5,1.7),Bt*zt(.6,1.5))})}u.add(he,Pe);const Et={solid:he,wire:Pe,data:Qe};return re.push(Et),Et};le(new Dh(1,0),i?110:190),le(new Uh(1,0),i?90:150),le(new ps(1,0),i?30:60);const W=new Pn,Z=(de,_e)=>{for(const he of re){for(let Pe=0;Pe<he.data.length;Pe++){const Qe=he.data[Pe];Math.abs(Qe.pos.z-_e)>110||(Qe.rot.x+=Qe.spin.x*de,Qe.rot.y+=Qe.spin.y*de,Qe.rot.z+=Qe.spin.z*de,W.position.copy(Qe.pos),W.rotation.copy(Qe.rot),W.scale.copy(Qe.scale),W.updateMatrix(),he.solid.setMatrixAt(Pe,W.matrix),he.wire.setMatrixAt(Pe,W.matrix))}he.solid.instanceMatrix.needsUpdate=!0,he.wire.instanceMatrix.needsUpdate=!0}},q=i?900:2400,j=new Float32Array(q*3);for(let de=0;de<q;de++){const _e=Math.random()*Math.PI*2,he=.9+Math.sqrt(Math.random())*8.6;j[de*3]=Math.cos(_e)*he,j[de*3+1]=Math.sin(_e)*he,j[de*3+2]=zt(v-70,18)}const I=new Ln;I.setAttribute("position",new tr(j,3));const Q=new EM(I,new zv({color:new ot(.4,1.2,1.6),size:.09,transparent:!0,opacity:.75,blending:mi,depthWrite:!1,sizeAttenuation:!0}));Q.frustumCulled=!1,u.add(Q);const be=26,te=[],Se=new Su({color:new ot(.9,1.9,2.4),transparent:!0,blending:mi,depthWrite:!1,fog:!1});for(let de=0;de<(i?8:16);de++){const _e=new Ln;_e.setAttribute("position",new tr(new Float32Array((be+1)*3),3));const he=new Bv(_e,Se);he.frustumCulled=!1,he.visible=!1,u.add(he),te.push({line:he,timer:zt(0,1),on:!1,refresh:0})}const Ae=new Y,Be=new Y,ye=new Y,Ve=(de,_e)=>{const he=Math.random()*Math.PI*2,Pe=_e-zt(6,55);Ae.set(Math.cos(he)*Bi*.97,Math.sin(he)*Bi*.97,Pe);const Qe=Math.random()<.5,Et=he+zt(-1.3,1.3),wn=Qe?Bi*.97:zt(2.5,9);Be.set(Math.cos(Et)*wn,Math.sin(Et)*wn,Pe-zt(2,16));const kn=Ae.distanceTo(Be),Kt=de.line.geometry.getAttribute("position");for(let Bt=0;Bt<=be;Bt++){const rn=Bt/be,Gt=Math.sin(Math.PI*rn)*kn*.09;ye.lerpVectors(Ae,Be,rn),Kt.setXYZ(Bt,ye.x+zt(-Gt,Gt),ye.y+zt(-Gt,Gt),ye.z+zt(-Gt,Gt))}Kt.needsUpdate=!0},vt=new da,it=new Sn(new ps(3.2,2),new ou({color:397340,metalness:.95,roughness:.22,flatShading:!0,side:Qi})),At=new Sn(new ps(3.23,2),new hs({color:new ot(.2,.9,1.2),wireframe:!0,transparent:!0,opacity:.55,blending:mi,depthWrite:!1})),Mt=new Sn(new ps(4.7,1),new hs({color:new ot(.15,.7,1),wireframe:!0,transparent:!0,opacity:.22,blending:mi,depthWrite:!1})),pt=new Sn(new ps(1.15,2),new hs({color:new ot(.35,1.1,1.5),transparent:!0,opacity:.8,blending:mi}));vt.add(it,At,Mt,pt),u.add(vt);const Xt=[],Yt=[],fn=[],Ft=[];let Nn=e.canvasVersion?.()??0;{const de=m(e.toolStop??2),_e=new ya(2.3,2.3,.4),he=new TM(_e),Pe=new Ih(1.8,8,8),Qe=new IM,Et=new ou({color:463647,metalness:.9,roughness:.3,emissive:270382}),wn=new Su({color:new ot(.3,1.1,1.5),transparent:!0,opacity:.9,blending:mi,depthWrite:!1}),kn=(Kt,Bt,rn,Gt)=>{Kt.colorSpace=gi,Kt.anisotropy=4,fn.push(Kt);const _t=new ou({map:Kt,emissiveMap:Kt,emissive:16777215,emissiveIntensity:Gt,color:13627391,metalness:.2,roughness:.5}),Dn=new da;Dn.add(new Sn(_e,[Et,Et,Et,Et,_t,_t])),Dn.add(new d0(he,wn));const qn=new Sn(Pe);qn.visible=!1,qn.userData.tool=Xt.length,Dn.add(qn),Yt.push(qn),Dn.scale.setScalar(rn),Dn.position.copy(Bt),Dn.rotation.set(zt(0,6),zt(0,6),zt(0,6)),u.add(Dn),Xt.push({group:Dn,anchor:Bt,vel:new Y,spin:new Y,face:_t,hover:0,phase:zt(0,6.28),base:Gt})};(e.toolImages??[]).forEach((Kt,Bt)=>{const rn=Bt*2.1+.6,Gt=3.3+Bt%2*.9;kn(Qe.load(Kt),new Y(Math.cos(rn)*Gt*1.1+1.2,Math.sin(rn)*Gt*.6,de-8-Bt*3.4),1,.3)}),(e.floaties??[]).forEach((Kt,Bt)=>{const rn=new wM(Kt.canvas);Ft.push(rn);const Gt=Bt%2===0?-1:1;kn(rn,new Y(Gt*3.9,(Bt%3-1)*.9,m(Kt.stop)-1.5),2,.55)})}const Ht=new HM,$t=new ut(9,9);let nn=0,ln=0,X=!1;const En=new Y,It=new Y,Nt=new Y,Fe=(de,_e,he,Pe)=>{f.updateMatrixWorld(),En.setFromMatrixColumn(f.matrixWorld,0),It.setFromMatrixColumn(f.matrixWorld,1),Nt.setFromMatrixColumn(f.matrixWorld,2).negate();const Qe=En.multiplyScalar(_e*45).add(It.multiplyScalar(he*45)).add(Nt.multiplyScalar(Pe));Qe.length()>9&&Qe.setLength(9),de.vel.add(Qe),de.spin.x+=-he*22+zt(-1,1),de.spin.y+=_e*22+zt(-1,1),de.spin.z+=zt(-2,2),de.spin.clampLength(0,14),de.hover=1},Qt=(de,_e)=>{const he=e.canvasVersion?.()??0;he!==Nn&&(Nn=he,Ft.forEach(Pe=>Pe.needsUpdate=!0));for(const Pe of Xt){const Qe=Math.abs(Pe.group.position.z-_e)<70;if(Pe.group.visible=Qe,!Qe)continue;const Et=Pe.anchor.x,wn=Pe.anchor.y+Math.sin(ce*1.1+Pe.phase)*.28;Pe.vel.x+=(Et-Pe.group.position.x)*3*de,Pe.vel.y+=(wn-Pe.group.position.y)*3*de,Pe.vel.z+=(Pe.anchor.z-Pe.group.position.z)*3*de,Pe.vel.multiplyScalar(Math.exp(-de*1.8)),Pe.group.position.addScaledVector(Pe.vel,de),Pe.spin.multiplyScalar(Math.exp(-de*1.2)),Pe.group.rotation.y+=(.7+Pe.spin.y)*de,Pe.group.rotation.x+=(.18*Math.sin(ce*.6+Pe.phase)+Pe.spin.x)*de,Pe.group.rotation.z+=Pe.spin.z*de,Pe.hover*=Math.exp(-de*2.5),Pe.face.emissiveIntensity=Pe.base+Pe.hover*.9}if(Xt.length&&(nn!==0||ln!==0||X)){Ht.setFromCamera($t,f);const Pe=Ht.intersectObjects(Yt,!1).find(Qe=>Qe.distance<45);if(Pe){const Qe=Xt[Pe.object.userData.tool],Et=Math.hypot(nn,ln);X?Fe(Qe,nn,ln,7):Et>.002&&Fe(Qe,nn,ln,Math.min(Et*40,3)),Qe.hover=1}nn=0,ln=0,X=!1}},Ze=new HA(a);Ze.addPass(new GA(u,f));const rt=new _a(new ut(1,1),.85,.65,.12);Ze.addPass(rt),Ze.addPass(new WA);const U=()=>{const de=window.innerWidth,_e=window.innerHeight;a.setSize(de,_e,!1),Ze.setSize(de,_e),f.aspect=de/_e,f.updateProjectionMatrix()};U(),window.addEventListener("resize",U);const A=()=>{d=e.getStopScrolls()},ee=new ResizeObserver(A);ee.observe(document.body);let Ee=0,ge=0,De=0,Ue=0;const fe=de=>{De=(de.clientX/window.innerWidth-.5)*2,Ue=(de.clientY/window.innerHeight-.5)*2;const _e=de.clientX/window.innerWidth*2-1,he=-(de.clientY/window.innerHeight)*2+1;$t.x<5&&(nn+=_e-$t.x,ln+=he-$t.y),$t.set(_e,he)},pe=de=>{$t.set(de.clientX/window.innerWidth*2-1,-(de.clientY/window.innerHeight)*2+1),X=!0};window.addEventListener("pointermove",fe,{passive:!0}),window.addEventListener("pointerdown",pe,{passive:!0});const Le=de=>{const _e=Math.min(d.length,h);if(_e<2)return la;if(de<=d[0])return m(0);if(de>=d[_e-1])return m(_e-1);let he=0;for(;he<_e-2&&de>d[he+1];)he++;const Pe=Math.max(1,d[he+1]-d[he]),Qe=Wr((de-d[he])/Pe),Et=Qe*.3+Y0(Qe)*.7;return m(he)+(m(he+1)-m(he))*Et};let k=0,me=performance.now(),ce=0,Ne=window.scrollY,xe=Le(Ne),Ce=0;const qe=new Array(S.length).fill(0);let dt=!1;const we=de=>{if(dt)return;k=requestAnimationFrame(we);const _e=Math.min((de-me)/1e3,.05);me=de,ce+=_e*(t?.25:1),Ne+=(window.scrollY-Ne)*(1-Math.exp(-_e*7));const he=xe;xe=Le(Ne);const Pe=_e>0?Math.abs(xe-he)/_e:0;Ce+=(Wr(Pe/70)-Ce)*(1-Math.exp(-_e*6));let Qe=0,Et=1e9;for(let _t=0;_t<S.length;_t++){const Dn=S[_t],qn=Math.abs(xe-Dn);qn<Et&&(Et=qn,Qe=_t),(he-Dn)*(xe-Dn)<0&&(qe[_t]=1.6),qe[_t]*=Math.exp(-_e*2.6);const ir=Math.exp(-(qn*qn)/160);L[_t]=Math.min(2.2,ir*.9+qe[_t]);const Ri=M[_t],Ci=L[_t];Ri.outer.material.opacity=Wr(.12+Ci*.7,0,1),Ri.inner.material.opacity=Wr(.1+Ci*.5,0,1),Ri.spokes.material.opacity=Wr(.05+Ci*.6,0,1),Ri.inner.rotation.z+=_e*(.4+Ci*2.5),Ri.spokes.rotation.z-=_e*(.2+Ci*1.2)}S.length&&(y.position.set(0,0,S[Qe]),y.intensity=L[Qe]*260),Ee+=(De-Ee)*(1-Math.exp(-_e*3)),ge+=(Ue-ge)*(1-Math.exp(-_e*3));const wn=Wr((la-xe)/7),kn=window.innerWidth/window.innerHeight>1.1?-3.2*(1-Y0(wn)):0,Kt=Math.sin(xe*.052+1)*.55+Ee*.45,Bt=Math.cos(xe*.038)*.4-ge*.3;if(f.position.set(kn+Kt,Bt,xe),f.lookAt(kn+Kt*.4,Bt*.4,xe-10),f.rotation.z+=Math.sin(ce*.25)*.004+Ee*.012,f.fov=65+Ce*20,f.updateProjectionMatrix(),x.position.set(f.position.x,f.position.y+.5,xe-1.5),C.uniforms.uTime.value=ce,C.uniforms.uCamZ.value=xe,C.uniforms.uSpeed.value=Ce,rt.strength=.62+Ce*.45+(Et<5?.25:0),vt.visible=xe>-12,vt.visible){const _t=1+Math.sin(ce*2.6)*.025;vt.scale.setScalar(_t),it.rotation.y+=_e*.12,At.rotation.y+=_e*.12,Mt.rotation.y-=_e*.08,Mt.rotation.x+=_e*.05,pt.rotation.y+=_e*.6,pt.scale.setScalar(1+Math.sin(ce*5)*.12),pt.material.opacity=.15+.65*Wr(Math.abs(xe)/9)}Q.position.z=0,Z(_e,xe),Qt(_e,xe);const rn=.35+Ce*1.6+(Et<8?1:0);for(const _t of te)_t.timer-=_e,_t.timer<=0?_t.on?(_t.on=!1,_t.line.visible=!1,_t.timer=zt(.05,.9)/rn):(Ve(_t,xe),_t.on=!0,_t.line.visible=!0,_t.timer=zt(.08,.28),_t.refresh=0):_t.on&&(_t.refresh-=_e,_t.refresh<=0&&(Ve(_t,xe),_t.refresh=.045));Se.opacity=.65+Math.random()*.35,Ze.render();const Gt=Math.max(1,d[d.length-1]-d[0]);e.onFrame?.({progress:Wr((Ne-d[0])/Gt),depth:Math.max(0,la-xe),speed:Ce})};return k=requestAnimationFrame(we),()=>{dt=!0,cancelAnimationFrame(k),window.removeEventListener("resize",U),window.removeEventListener("pointermove",fe),window.removeEventListener("pointerdown",pe),fn.forEach(de=>de.dispose()),ee.disconnect(),u.traverse(de=>{const _e=de;_e.geometry&&_e.geometry.dispose();const he=_e.material;Array.isArray(he)?he.forEach(Pe=>Pe.dispose()):he&&he.dispose()}),Ze.dispose(),a.dispose()}}const Fu="#7ff0ff",pi=(s,e,t,i)=>{s.beginPath(),s.arc(e,t,i,0,Math.PI*2)},K0={"works.seishinkaiKarate":s=>{pi(s,256,175,128),s.stroke(),pi(s,256,175,110),s.lineWidth=3,s.stroke(),s.lineWidth=9,s.font="700 170px 'Hiragino Mincho ProN','Yu Mincho',serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=Fu,s.fillText("清",256,182)},"works.marugame":s=>{s.beginPath(),s.moveTo(110,185),s.lineTo(402,185),s.arc(256,185,146,0,Math.PI,!1),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(210,345),s.lineTo(302,345),s.stroke(),s.lineWidth=5;for(let e=0;e<3;e++){s.beginPath();for(let t=140;t<=372;t+=6){const i=215+e*26+Math.sin(t/14+e)*7;t===140?s.moveTo(t,i):s.lineTo(t,i)}s.stroke()}s.lineWidth=7;for(const e of[200,256,312]){s.beginPath();for(let t=160;t>=70;t-=4){const i=e+Math.sin(t/11+e)*9;t===160?s.moveTo(i,t):s.lineTo(i,t)}s.stroke()}s.lineWidth=8,s.beginPath(),s.moveTo(320,150),s.lineTo(430,40),s.moveTo(345,165),s.lineTo(455,55),s.stroke()},"works.gyoren":s=>{s.beginPath(),s.moveTo(90,215),s.lineTo(422,215),s.lineTo(366,280),s.lineTo(150,280),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(250,215),s.lineTo(250,60),s.stroke(),s.beginPath(),s.moveTo(250,70),s.lineTo(360,200),s.lineTo(250,200),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(250,62),s.lineTo(205,78),s.lineTo(250,94),s.stroke(),s.lineWidth=6;for(const e of[310,334]){s.beginPath();for(let t=70;t<=442;t+=6){const i=e+Math.sin(t/18+e)*6;t===70?s.moveTo(t,i):s.lineTo(t,i)}s.stroke()}},"works.mebs":s=>{s.beginPath(),s.roundRect(96,50,240,280,14),s.stroke(),s.beginPath(),s.moveTo(216,50),s.lineTo(216,330),s.stroke(),s.lineWidth=6,s.beginPath(),s.roundRect(150,70,132,28,6),s.stroke(),s.lineWidth=9,s.beginPath(),s.moveTo(406,100),s.lineTo(372,160),s.lineTo(440,160),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(406,270),s.lineTo(372,210),s.lineTo(440,210),s.closePath(),s.stroke()},"works.gamerblog":s=>{s.beginPath(),s.roundRect(76,110,360,170,80),s.stroke(),s.lineWidth=12,s.beginPath(),s.moveTo(166,162),s.lineTo(166,228),s.moveTo(133,195),s.lineTo(199,195),s.stroke(),s.lineWidth=8,pi(s,336,170,16),s.stroke(),pi(s,380,205,16),s.stroke(),s.beginPath(),s.moveTo(230,215),s.lineTo(282,215),s.stroke()},"works.OzTools":s=>{s.beginPath();const i=10;for(let a=0;a<i*2;a++){const o=a/(i*2)*Math.PI*2,u=a%2===0?140:108,f=o+Math.PI/i*.55;s.lineTo(256+Math.cos(o)*u,185+Math.sin(o)*u),s.lineTo(256+Math.cos(f)*u,185+Math.sin(f)*u)}s.closePath(),s.stroke(),pi(s,256,185,48),s.stroke()},"works.artistPortfolio":s=>{s.beginPath(),s.ellipse(256,180,160,125,-.1,0,Math.PI*2),s.stroke(),pi(s,330,235,24),s.stroke();for(const[e,t]of[[185,150],[240,112],[305,125],[345,175]])pi(s,e,t,18),s.stroke();s.beginPath(),s.moveTo(150,250),s.lineTo(110,330),s.stroke()},"works.gamingSite":s=>{pi(s,256,195,112),s.stroke(),pi(s,172,100,36),s.stroke(),pi(s,340,100,36),s.stroke(),s.fillStyle=Fu,pi(s,216,180,11),s.fill(),pi(s,296,180,11),s.fill(),pi(s,256,212,10),s.fill(),s.lineWidth=6,s.beginPath(),s.arc(236,228,20,0,Math.PI*.9),s.stroke(),s.beginPath(),s.arc(276,228,20,Math.PI*.1,Math.PI),s.stroke()}},YA=(s,e,t)=>{const i=/\s/.test(e)?e.split(" ").map((u,f,d)=>f<d.length-1?u+" ":u):Array.from(e),a=[];let o="";for(const u of i)s.measureText(o+u).width>t&&o?(a.push(o.trim()),o=u):o+=u;return o&&a.push(o.trim()),a};function KA(s,e,t){s.width=512,s.height=512;const a=s.getContext("2d");if(!a)return;a.clearRect(0,0,512,512);const o=a.createLinearGradient(0,0,0,512);o.addColorStop(0,"#05182a"),o.addColorStop(1,"#020a14"),a.fillStyle=o,a.fillRect(0,0,512,512),a.strokeStyle="rgba(127,240,255,0.35)",a.lineWidth=3,a.strokeRect(14,14,484,484),a.save(),a.strokeStyle=Fu,a.fillStyle=Fu,a.lineWidth=9,a.lineCap="round",a.lineJoin="round",a.shadowColor="#2cd0ec",a.shadowBlur=18,(K0[e]??K0["works.OzTools"])(a),a.restore(),a.fillStyle="#ffffff",a.textAlign="center",a.textBaseline="alphabetic",a.shadowColor="#2cd0ec",a.shadowBlur=10;let u=38,f=[];for(;u>=24&&(a.font=`700 ${u}px system-ui, -apple-system, 'Hiragino Sans', 'Yu Gothic', sans-serif`,f=YA(a,t,432),!(f.length<=3));u-=3);const d=u*1.22,h=392+(3-Math.min(f.length,3))*(d/2);f.slice(0,3).forEach((m,v)=>a.fillText(m,512/2,h+v*d))}const od="alexanderfromaustralia@gmail.com",ld="/McKinley-Developer/",j0=[{img:"html.png",alt:"HTML5"},{img:"css.png",alt:"CSS3"},{img:"ts.png",alt:"TypeScript"},{img:"react.png",alt:"React"},{img:"vue.png",alt:"Vue"},{img:"astro.png",alt:"Astro"}],jA=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),ZA=(s,e,t)=>{const i=jA((t-s)/(e-s));return i*i*(3-2*i)},ud=({label:s,children:e})=>ve.jsxs("div",{className:"stop-heading",children:[s&&ve.jsx("span",{className:"stop-heading__label",children:s}),ve.jsx("h2",{className:"stop-heading__title",children:e}),ve.jsx("span",{className:"stop-heading__bar","aria-hidden":"true"})]}),QA=()=>{const{t:s,i18n:e}=uh(),t=Ge.useRef([]),i=Ge.useRef(0),a=Ge.useRef(null),o=Ge.useRef(null),u=Ge.useRef(null),f=Ge.useRef(null),d=Ge.useRef(null),[h,m]=Ge.useState(!1),[v,x]=Ge.useState(!0),y=Ge.useCallback(()=>{const _=a.current;if(!_)return[];const S=window.innerHeight;return Array.from(_.querySelectorAll(".stop")).map(w=>{const L=w.getBoundingClientRect();return L.top+window.scrollY+(L.height-S)/2})},[]),E=Ge.useCallback(()=>{Il.forEach((_,S)=>{t.current[S]||(t.current[S]=document.createElement("canvas")),KA(t.current[S],_.i18nKey,s(`${_.i18nKey}.title`))}),i.current+=1},[s]);Ge.useEffect(()=>{E(),document.fonts?.ready.then(E)},[E,e.language]),Ge.useEffect(()=>{const _=o.current;if(!_)return;let S;try{S=qA(_,{getStopScrolls:y,toolImages:j0.map(w=>`${ld}${w.img}`),toolStop:2,floaties:Il.map((w,L)=>({canvas:t.current[L],stop:3+L})),canvasVersion:()=>i.current,onFrame:({progress:w,depth:L,speed:C})=>{u.current&&u.current.style.setProperty("--p",String(w)),f.current&&(f.current.textContent=String(Math.round(L*12)).padStart(4,"0")),d.current&&d.current.style.setProperty("--speed",C.toFixed(3))}})}catch(w){console.warn("WebGL unavailable, falling back to flat background",w),x(!1)}return()=>S?.()},[y]),Ge.useEffect(()=>{const _=a.current;if(!_)return;const S=Array.from(_.querySelectorAll(".stop")),w=S.map(P=>P.querySelector(".stop__content"));let L=[];const C=()=>{L=S.map(P=>{const z=P.getBoundingClientRect();return{center:z.top+window.scrollY+z.height/2,half:z.height/2}})};C();const D=new ResizeObserver(C);D.observe(document.body);let N=0;const M=()=>{N=requestAnimationFrame(M);const P=window.scrollY+window.innerHeight/2;for(let z=0;z<S.length;z++){const F=L[z],G=w[z];if(!F||!G)continue;const K=(F.center-P)/F.half,ie=Math.abs(K),B=ZA(.4,.95,ie),re=1-B;let le=1,W=0;K>0?le=1-.4*B:(le=1+.9*B,W=B*10),G.style.opacity=re.toFixed(3),G.style.transform=`scale(${le.toFixed(4)})`,G.style.filter=W>.2?`blur(${W.toFixed(2)}px)`:"",G.style.visibility=re<.01?"hidden":"visible",G.style.pointerEvents=re<.5?"none":"auto",S[z].classList.toggle("is-active",ie<.55)}};return N=requestAnimationFrame(M),()=>{cancelAnimationFrame(N),D.disconnect()}},[]);const R=()=>{const _=()=>{m(!0),window.setTimeout(()=>m(!1),2e3)};navigator.clipboard?navigator.clipboard.writeText(od).then(_).catch(_):_()};return ve.jsxs("div",{className:"immersive",ref:a,children:[ve.jsx("canvas",{ref:o,className:"immersive__canvas","aria-hidden":"true"}),!v&&ve.jsx("div",{className:"immersive__fallback","aria-hidden":"true"}),ve.jsx("div",{className:"immersive__fx",ref:d,"aria-hidden":"true"}),ve.jsxs("div",{className:"immersive__hud",ref:u,"aria-hidden":"true",children:[ve.jsx("span",{className:"immersive__hud-label",children:"DEPTH"}),ve.jsxs("div",{className:"immersive__hud-rail",children:[ve.jsx("div",{className:"immersive__hud-fill"}),ve.jsx("div",{className:"immersive__hud-spark"})]}),ve.jsx("span",{className:"immersive__hud-value",ref:f,children:"0000"})]}),ve.jsxs("main",{className:"immersive__main",children:[ve.jsx("section",{id:"top",className:"stop stop--hero",children:ve.jsx("div",{className:"stop__sticky",children:ve.jsxs("div",{className:"stop__content",children:[ve.jsx("p",{className:"mono-tag",children:"// SYSTEM ONLINE"}),ve.jsxs("h1",{className:"hero-title",children:[s("top.title"),ve.jsx("span",{lang:"en",children:s("top.title-position")})]}),ve.jsx("p",{className:"hero-text",children:s("top.text")}),ve.jsx("div",{className:"hero-cta",children:ve.jsx(fy,{buttonLink:"#works",text:s("top.button")})}),ve.jsxs("div",{className:"scroll-hint","aria-hidden":"true",children:[ve.jsx("span",{children:"SCROLL TO DESCEND"}),ve.jsx("i",{})]})]})})}),ve.jsx("section",{id:"work-history",className:"stop",children:ve.jsx("div",{className:"stop__sticky",children:ve.jsxs("div",{className:"stop__content stop__content--wide",children:[ve.jsx(ud,{label:"// 01 · LOG",children:s("workHistory.title")}),ve.jsx("ol",{className:"history",children:dy.map(_=>ve.jsxs("li",{className:"history__item",children:[ve.jsx("span",{className:"history__year",lang:"en",children:_.year}),ve.jsx("span",{className:"history__text",children:s(`workHistory.entries.${_.key}`)})]},_.key))})]})})}),ve.jsx("section",{id:"tools",className:"stop",children:ve.jsx("div",{className:"stop__sticky",children:ve.jsxs("div",{className:"stop__content stop__content--wide",children:[ve.jsx(ud,{label:"// 02 · STACK",children:s("tools.title")}),ve.jsx("p",{className:"tools-text",children:s("tools.text")}),ve.jsx("p",{className:"tools-list",lang:"en",children:j0.map(_=>_.alt).join(" · ")})]})})}),Il.map((_,S)=>{const w=s(`${_.i18nKey}.title`),L=!_.poster.includes("private-company");return ve.jsx("section",{id:S===0?"works":void 0,className:"stop",children:ve.jsx("div",{className:"stop__sticky",children:ve.jsxs("div",{className:"stop__content stop__content--wide",children:[ve.jsx("span",{className:"mono-tag",lang:"en",children:`// ${s("header.works").toUpperCase()} · ${String(S+1).padStart(2,"0")}/${String(Il.length).padStart(2,"0")}`}),ve.jsxs("article",{className:`work${L?"":" work--text-only"}`,children:[L&&ve.jsxs("div",{className:"work__frame",children:[ve.jsx("i",{className:"work__corner work__corner--tl"}),ve.jsx("i",{className:"work__corner work__corner--br"}),ve.jsx("img",{src:`${ld}${_.poster}`,alt:w,loading:"lazy"}),ve.jsx("span",{className:"work__scan","aria-hidden":"true"})]}),ve.jsxs("div",{className:"work__body",children:[ve.jsx("h2",{className:"work__title",children:w}),_.date&&ve.jsx("span",{className:"work__date",lang:"en",children:_.date}),ve.jsx("p",{className:"work__desc",children:s(`${_.i18nKey}.desc`)}),ve.jsxs("div",{className:"work__tags",children:[_.roles.map(C=>ve.jsx(Fg,{text:C,variant:"role"},C)),_.tools.map(C=>ve.jsx(Fg,{text:C,variant:"tool"},C))]}),"link"in _&&_.link&&ve.jsxs("a",{className:"work__link",href:_.link,target:"_blank",rel:"noopener noreferrer",children:[s("common.liveSite")," ↗"]})]})]})]})})},_.id)}),ve.jsx("section",{id:"contact",className:"stop",children:ve.jsx("div",{className:"stop__sticky",children:ve.jsxs("div",{className:"stop__content stop__content--wide",children:[ve.jsx(ud,{label:"// 03 · SIGNAL",children:s("contact.title")}),ve.jsxs("div",{className:"contact",children:[ve.jsxs("div",{className:"contact__card",children:[ve.jsx("p",{children:s("contact.text")}),ve.jsxs("div",{className:"contact__actions",children:[ve.jsx("a",{href:`mailto:${od}`,className:"btn is-visible",children:s("contact.emailButton")}),ve.jsx("button",{type:"button",className:"contact__copy",onClick:R,"aria-label":s("contact.copy"),children:h?s("contact.copied"):od})]})]}),ve.jsx("div",{className:"contact__portrait",children:ve.jsx("img",{src:`${ld}profile_2.webp`,alt:"profile"})})]}),ve.jsx("p",{className:"contact__foot",lang:"en",children:"© 2026 Alex McKinley"})]})})})]})]})},JA=375,eR=1500,tR=({onDone:s})=>{const[e,t]=Ge.useState(0),[i,a]=Ge.useState(!1);Ge.useEffect(()=>{const u=document.body.style.overflow,f=document.body.style.paddingRight,d=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",d>0&&(document.body.style.paddingRight=`${d}px`);const h=setInterval(()=>{t(v=>(v+1)%4)},JA),m=setTimeout(()=>{a(!0)},eR);return()=>{document.body.style.overflow=u,document.body.style.paddingRight=f,clearInterval(h),clearTimeout(m)}},[]);const o=u=>{u.target===u.currentTarget&&i&&s()};return ve.jsxs("div",{className:`loading-screen ${i?"loading-screen--closing":""}`,onTransitionEnd:o,children:[ve.jsx("div",{className:"loading-screen__brand",children:"Alex McKinley FE"}),ve.jsx("div",{className:"loading-screen__spinner","aria-hidden":"true"}),ve.jsxs("p",{className:"loading-screen__text",children:["Booting up",ve.jsx("span",{className:"loading-screen__dots",children:".".repeat(e)})]})]})},nR=()=>{const[s,e]=Ge.useState(!0);return ve.jsxs("div",{className:"App",children:[s&&ve.jsx(tR,{onDone:()=>e(!1)}),ve.jsx(US,{}),ve.jsx(QA,{})]})},{slice:iR,forEach:rR}=[];function sR(s){return rR.call(iR.call(arguments,1),e=>{if(e)for(const t in e)s[t]===void 0&&(s[t]=e[t])}),s}function aR(s){return typeof s!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(s))}const Z0=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,oR=function(s,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},a=encodeURIComponent(e);let o=`${s}=${a}`;if(i.maxAge>0){const u=i.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");o+=`; Max-Age=${Math.floor(u)}`}if(i.domain){if(!Z0.test(i.domain))throw new TypeError("option domain is invalid");o+=`; Domain=${i.domain}`}if(i.path){if(!Z0.test(i.path))throw new TypeError("option path is invalid");o+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(o+="; HttpOnly"),i.secure&&(o+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(o+="; Partitioned"),o},Q0={create(s,e,t,i){let a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(a.expires=new Date,a.expires.setTime(a.expires.getTime()+t*60*1e3)),i&&(a.domain=i),document.cookie=oR(s,e,a)},read(s){const e=`${s}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let a=t[i];for(;a.charAt(0)===" ";)a=a.substring(1,a.length);if(a.indexOf(e)===0)return a.substring(e.length,a.length)}return null},remove(s,e){this.create(s,"",-1,e)}};var lR={name:"cookie",lookup(s){let{lookupCookie:e}=s;if(e&&typeof document<"u")return Q0.read(e)||void 0},cacheUserLanguage(s,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:a,cookieOptions:o}=e;t&&typeof document<"u"&&Q0.create(t,s,i,a,o)}},uR={name:"querystring",lookup(s){let{lookupQuerystring:e}=s,t;if(typeof window<"u"){let{search:i}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(i=window.location.hash.substring(window.location.hash.indexOf("?")));const o=i.substring(1).split("&");for(let u=0;u<o.length;u++){const f=o[u].indexOf("=");f>0&&o[u].substring(0,f)===e&&(t=o[u].substring(f+1))}}return t}},cR={name:"hash",lookup(s){let{lookupHash:e,lookupFromHashIndex:t}=s,i;if(typeof window<"u"){const{hash:a}=window.location;if(a&&a.length>2){const o=a.substring(1);if(e){const u=o.split("&");for(let f=0;f<u.length;f++){const d=u[f].indexOf("=");d>0&&u[f].substring(0,d)===e&&(i=u[f].substring(d+1))}}if(i)return i;if(!i&&t>-1){const u=a.match(/\/([a-zA-Z-]*)/g);return Array.isArray(u)?u[typeof t=="number"?t:0]?.replace("/",""):void 0}}}return i}};let ua=null;const J0=()=>{if(ua!==null)return ua;try{if(ua=typeof window<"u"&&window.localStorage!==null,!ua)return!1;const s="i18next.translate.boo";window.localStorage.setItem(s,"foo"),window.localStorage.removeItem(s)}catch{ua=!1}return ua};var fR={name:"localStorage",lookup(s){let{lookupLocalStorage:e}=s;if(e&&J0())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupLocalStorage:t}=e;t&&J0()&&window.localStorage.setItem(t,s)}};let ca=null;const ev=()=>{if(ca!==null)return ca;try{if(ca=typeof window<"u"&&window.sessionStorage!==null,!ca)return!1;const s="i18next.translate.boo";window.sessionStorage.setItem(s,"foo"),window.sessionStorage.removeItem(s)}catch{ca=!1}return ca};var dR={name:"sessionStorage",lookup(s){let{lookupSessionStorage:e}=s;if(e&&ev())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupSessionStorage:t}=e;t&&ev()&&window.sessionStorage.setItem(t,s)}},hR={name:"navigator",lookup(s){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:a}=navigator;if(t)for(let o=0;o<t.length;o++)e.push(t[o]);i&&e.push(i),a&&e.push(a)}return e.length>0?e:void 0}},pR={name:"htmlTag",lookup(s){let{htmlTag:e}=s,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},mR={name:"path",lookup(s){let{lookupFromPathIndex:e}=s;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?t[typeof e=="number"?e:0]?.replace("/",""):void 0}},gR={name:"subdomain",lookup(s){let{lookupFromSubdomainIndex:e}=s;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(i)return i[t]}};let a_=!1;try{document.cookie,a_=!0}catch{}const o_=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];a_||o_.splice(1,1);const vR=()=>({order:o_,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:s=>s});class l_{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=sR(t,this.options||{},vR()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=a=>a.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(lR),this.addDetector(uR),this.addDetector(fR),this.addDetector(dR),this.addDetector(hR),this.addDetector(pR),this.addDetector(mR),this.addDetector(gR),this.addDetector(cR)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let a=this.detectors[i].lookup(this.options);a&&typeof a=="string"&&(a=[a]),a&&(t=t.concat(a))}}),t=t.filter(i=>i!=null&&!aR(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}l_.type="languageDetector";const _R={top:"Top",workHistory:"History",tools:"Toolbox",works:"Works",contact:"Contact"},xR={title:"Alex McKinley, ","title-position":"Engineer",text:"I build and maintain websites for businesses and individuals.",button:"See Works"},SR={title:"Toolbox",text:"I use a variety of frontend libraries, frameworks and languages."},yR={title:"Work History",entries:{entry1:"Oz Creative, Sapporo Hokkaido: Promoted from Ravi, full-time developer, project director",entry2:"Ravi (owned by Oz Creative), Sapporo Hokkaido: Full-time frontend developer, project director",entry3:"Freelance: Frontend developer, building and maintaining websites",entry4:"Freelance: Automation specialist, and data engineer performing webscraping, data cleaning and visualisation"}},MR={title:"Contact",text:"Reach out to me by my email for collaboration, consultation or general inquiries.",emailButton:"Send an Email",copy:"Copy email",copied:"Copied!"},ER={liveSite:"Live Site",close:"Close"},wR={seishinkaiKarate:{title:"Seishinkai Karate",desc:"Their 30-year-old website was holding them back on SEO and customer join-up rate. As a solo project, I handled the full lifecycle myself — proposal, client communication, design, development, deployment, and maintenance — to redesign and rebuild the site from the ground up. The result was a major lift in SEO, join-up rate, and overall UX, and the owner was satisfied enough to keep me on for all future updates.",alt:"Seishinkai"},gamerblog:{title:"Gamer Blog Site",desc:"The client, a Twitch streamer and YouTuber, felt his old site no longer reflected who he was as a creator. I designed and built a replacement blog site around his gamer identity, which improved both UX and SEO in the process.",alt:"gamer blog website preview"},artistPortfolio:{title:"Artist Portfolio",desc:"The client, a visual artist, needed a way for new contacts to grasp the range of her work at a glance from nothing more than a business card. I built a landing page reachable via QR code, curating hand-picked pieces from her most recent exhibitions. This low-tech solution has made it easier for her to engage with future clients.",alt:"visual artist portfolio landing page"},gamingSite:{title:"Gaming Site",desc:"I wanted a public showcase for the browser games I build in my free time. I designed and developed the platform myself as a personal project, and now maintain a growing library of in-browser playable games — currently over a dozen.",alt:"gaming site"},OzTools:{title:"Dev Tools Site",desc:"My coworkers needed quick access to a handful of small dev and design utilities scattered across different tools. I built a single utility site to consolidate them, and keep adding new custom-built tools as needs come up — currently 11 and counting.",alt:"developer tools site"},gyoren:{title:"Fisheries Federation Digital Encyclopedia",desc:"This client, a fisheries federation in Hokkaido, wanted an engaging way to share bite-sized stories about local seafood with the public. As head developer, I made the key functionality and tech stack decisions behind an interactive digital fish encyclopedia, giving visitors an approachable way to explore the region's catch.",alt:"Fisheries federation fish encyclopedia preview"},mebs:{title:"Private Client Kids Tablet App",desc:"This client needed a way to teach kids how elevators and escalators work through a tablet-first educational experience. I co-directed and developed the project, bridging the Japanese design/client side with a Malaysian development team to bring it to life.",alt:"Private client kids elevator and escalator exploration app preview"},marugame:{title:"Private Client Summer Campaign",desc:"This client, an udon restaurant chain, needed a landing page to support their summer campaign. I built the page as developer, working with Gulp against their existing CMS to get it live.",alt:"Private client summer campaign landing page preview"}},TR={header:_R,top:xR,tools:SR,workHistory:yR,contact:MR,common:ER,works:wR},AR={top:"Top",workHistory:"History",tools:"Toolbox",works:"Works",contact:"Contact"},RR={title:"アレックス・マッキンリー","title-position":"FE",text:"企業・個人向けのWebサイトの構築および保守を行っています。",button:"See Works"},CR={title:"Toolbox",text:"さまざまなフロントエンドのライブラリ、フレームワーク、言語を使用しています。"},bR={title:"History",entries:{entry1:"Oz Creative（札幌、北海道）: Raviから昇格し、正社員デベロッパー兼プロジェクトディレクターに就任",entry2:"Ravi（Oz Creative運営）（札幌、北海道）: 正社員フロントエンドデベロッパー兼プロジェクトディレクター",entry3:"フリーランス: ウェブサイトの構築・保守を行うフロントエンドデベロッパー",entry4:"フリーランス: ウェブスクレイピング、データクレンジング、データ可視化を行うオートメーションスペシャリスト兼データサイエンティスト"}},PR={title:"Contact",text:"コラボレーション、コンサルティング、または一般的なお問い合わせはメールにてご連絡ください。",emailButton:"メールを送る",copy:"メールアドレスをコピー",copied:"コピーしました！"},LR={liveSite:"サイトを見る",close:"閉じる"},NR={seishinkaiKarate:{title:"清心会空手",desc:"30年間使われてきたウェブサイトが、SEOや入会率の面で伸び悩んでいました。提案、クライアントとのやり取り、デザイン、開発、デプロイ、保守まで全て一人で担当し、サイトを全面的にリニューアル。結果としてSEO、入会率、UXを大幅に改善し、オーナー様にも大変満足していただいたことで、今後の更新作業も引き続き任せていただくことになりました。",alt:"清心会"},gamerblog:{title:"ゲーマーブログサイト",desc:"Twitchストリーマー／YouTuberであるクライアントから、ゲーマーとしての自分自身をうまく表現できていない旧サイトを刷新したいというご相談をいただきました。ゲーマーとしてのCIをより的確に反映した新しいブログサイトをデザイン・開発し、UXとSEOの両方を向上させました。",alt:"ゲーマーブログサイトのプレビュー"},artistPortfolio:{title:"アーティストポートフォリオ",desc:"アーティストとして手がけた作品の幅広さを、名刺一枚からでも一目で伝えたいというご相談をいただきました。名刺のQRコードからアクセスできるLPを制作し、直近の展示会から厳選した作品を掲載。このローテクな解決策が、今後のクライアントとのエンゲージメント向上に役立っています。",alt:"アーティストポートフォリオのトップページ"},gamingSite:{title:"ゲームサイト",desc:"空き時間に開発しているブラウザゲームを公開できる場が欲しく、個人プロジェクトとして本サイトを制作しました。デザインから開発まで自分自身で手がけ、現在12本以上のゲームを継続的に追加・公開しています。",alt:"ゲームサイト"},OzTools:{title:"開発者向けツールサイト",desc:"同僚たちが使う細々とした開発・デザインツールが、あちこちに散らばっている状況でした。それらを一つにまとめたユーティリティサイトを構築し、必要に応じて新しいカスタムツールを追加し続けています。現在11種類を搭載。",alt:"開発者向けツールサイト"},gyoren:{title:"水産関連団体向け おさかな図鑑",desc:"北海道の水産関連団体であるクライアントから、地元の海産物にまつわる小話を分かりやすく伝えたいというご相談をいただきました。開発リーダーとして機能設計と技術選定を担当し、インタラクティブな「おさかな図鑑」として実現。訪れた方が気軽に地元の魚介について学べる場になっています。",alt:"おさかな図鑑のプレビュー"},mebs:{title:"こども向け タブレット教材",desc:"非公開のクライアントから、エレベーター・エスカレーターの仕組みを子供向けに分かりやすく伝えたいというご相談をいただきました。ディレクター兼開発者として、日本のデザイナー・クライアントとマレーシアの開発チームをつなぎながら、タブレット向けの教育アプリを制作しました。",alt:"こども向けタブレット教材アプリのプレビュー"},marugame:{title:"飲食チェーン 夏季キャンペーンLP",desc:"うどん専門店であるクライアントから、夏季キャンペーンに向けたランディングページ制作のご依頼をいただきました。開発者として、GulpとクライアントのCMSを用いてページを構築し、公開に至りました。",alt:"飲食チェーン夏季キャンペーンランディングページのプレビュー"}},DR={header:AR,top:RR,tools:CR,workHistory:bR,contact:PR,common:LR,works:NR};$n.use(l_).use(bS).init({resources:{en:{translation:TR},ja:{translation:DR}},fallbackLng:"en",supportedLngs:["en","ja"],load:"languageOnly",interpolation:{escapeValue:!1}});Zx.createRoot(document.getElementById("root")).render(ve.jsx(nv.StrictMode,{children:ve.jsx(ay,{basename:"/McKinley-Developer/",children:ve.jsx(nR,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/McKinley-Developer/sw.js")});
