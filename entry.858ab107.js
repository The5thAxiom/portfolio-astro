import{r as p}from"./chunks/chunk.ae3ab2bf.js";var u={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=p.exports,a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,d=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,s){var r,o={},f=null,t=null;s!==void 0&&(f=""+s),e.key!==void 0&&(f=""+e.key),e.ref!==void 0&&(t=e.ref);for(r in e)x.call(e,r)&&!m.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:a,type:n,key:f,ref:t,props:o,_owner:d.current}}l.Fragment=i;l.jsx=c;l.jsxs=c;u.exports=l;function y({array:n,delay:e=1e3}){const[s,r]=p.exports.useState(0);let o=0;n.forEach(t=>{t.length>o&&(o=t.length)});const f=n.map(t=>t+"\xA0".repeat(o-t.length));return p.exports.useEffect(()=>{const t=setInterval(()=>r((s+1)%n.length),e);return()=>clearInterval(t)},[s]),u.exports.jsx("b",{children:f[s]})}export{y as default};
