(()=>{"use strict";var e,s={980:(e,s,n)=>{n(439)},439:(e,s,n)=>{const t=window.wp.i18n,l=window.wp.element,o=window.wc.wcSettings,a=window.wc.blocksComponents,r=window.wp.plugins,c=window.wc.blocksCheckout;var i=n(848);const d=({system:e})=>{const s=()=>null==e.values||e.values.used<=0?"":e.values.used,[n,o]=(0,l.useState)(s);(0,l.useEffect)((()=>{if(n.length)try{let e=n.replace(/\s/,"").match(/\d*/);o(null==e?"":e[0])}catch(e){o("")}}),[n]);const[r,d]=(0,l.useState)(!1);(0,l.useEffect)((()=>{r||o(s())}),[r]);const[u,w]=(0,l.useState)(!0),p=e=>{e.preventDefault(),w(!u)};let m="XX";return null!=e.values&&(m=e.values.amount_formated),(0,i.jsx)(i.Fragment,{children:u?(0,i.jsxs)("a",{role:"button",className:"lws-wr-blocks pointsoncart-component_unfold","aria-label":(0,t.__)("Use your points","woorewards-lite"),onClick:p,children:[(0,i.jsxs)("span",{className:"wr-label",children:[(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:e.labels.field}})," ",e.labels.show?(0,i.jsx)("b",{title:(0,t.__)("balance","woorewards-lite"),dangerouslySetInnerHTML:{__html:m}}):""]}),(0,i.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","aria-hidden":"true",className:"wr-unfold-icon",focusable:"false",children:(0,i.jsx)("path",{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})})]}):(0,i.jsxs)("div",{className:"lws-wr-blocks pointsoncart-component"+(r?" is_loading":""),children:[(0,i.jsxs)("label",{role:"button",className:"pointsoncart-component_fold","aria-label":(0,t.__)("Use your points","woorewards-lite"),onClick:p,children:[(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:e.labels.title}})," ",(0,i.jsx)("b",{dangerouslySetInnerHTML:{__html:m}})]}),(0,i.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","aria-hidden":"true",className:"wr-unfold-icon",focusable:"false",children:(0,i.jsx)("path",{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})})]}),void 0===e.values||e.values.max>0?(0,i.jsxs)("form",{className:"pointsoncart-component_form",id:"lws-wr-blocks_pointsoncart-component_form",children:[(0,i.jsx)(a.ValidatedTextInput,{id:"lws-wr-blocks_pointsoncart-component_input",errorId:"wr-pointsoncart-value",className:"pointsoncart-component_input",label:e.labels.input,value:n,onChange:e=>{o(e)},focusOnMount:!0,validateOnMount:!1,showError:!1}),(0,i.jsx)("button",{className:"wc-block-components-button wp-element-button",id:"lws-wr-blocks_pointsoncart-component_apply",type:"submit",disabled:r||void 0===e.values||n==e.values.used,onClick:s=>{s.preventDefault(),null!=e.values&&(d(!0),(0,c.extensionCartUpdate)({namespace:"lws_woorewards",data:{action:"use_points",system:e.values.name,value:n}}).then((()=>{d(!1)})))},children:r?(0,i.jsxs)("span",{className:"loading-dots",children:[(0,i.jsx)("span",{className:"dot1",children:"."})," ",(0,i.jsx)("span",{className:"dot2",children:"."})," ",(0,i.jsx)("span",{className:"dot3",children:"."})]}):e.labels.apply})]}):"",Object.entries(e.labels.details).map((([e,s])=>(0,i.jsx)("label",{className:"points-on-cart-details details-"+e,dangerouslySetInnerHTML:{__html:s}})))]})})},u=({cart:e,extensions:s,context:n})=>{const t=(0,o.getSetting)("lws-wr-blocks_data");return t.enable&&t["logged-user"]?(0,i.jsx)(i.Fragment,{children:Object.entries(t.systems).map((([l,o])=>(0,i.jsx)(d,{cart:e,context:n,system:{enable:t.enable,logged:t["logged-user"],labels:o,values:null!=s.lws_woorewards&&(null!=s.lws_woorewards.systems[l]?s.lws_woorewards.systems[l]:void 0)}},l)))}):""};(0,r.registerPlugin)("lws-wr-blocks",{render:function(){return(0,i.jsx)(c.ExperimentalDiscountsMeta,{children:(0,i.jsx)(u,{})},"lwspointsoncart")},scope:"woocommerce-checkout"})},20:(e,s,n)=>{var t=n(609),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,n){var t,o={},i=null,d=null;for(t in void 0!==n&&(i=""+n),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(d=s.ref),s)a.call(s,t)&&!c.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:l,type:e,key:i,ref:d,props:o,_owner:r.current}}s.Fragment=o,s.jsx=i,s.jsxs=i},848:(e,s,n)=>{e.exports=n(20)},609:e=>{e.exports=window.React}},n={};function t(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return s[e](o,o.exports,t),o.exports}t.m=s,e=[],t.O=(s,n,l,o)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,l,o]=e[d],r=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(t.O).every((e=>t.O[e](n[c])))?n.splice(c--,1):(r=!1,o<a&&(a=o));if(r){e.splice(d--,1);var i=l();void 0!==i&&(s=i)}}return s}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,l,o]},t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={57:0,59:0,350:0};t.O.j=s=>0===e[s];var s=(s,n)=>{var l,o,[a,r,c]=n,i=0;if(a.some((s=>0!==e[s]))){for(l in r)t.o(r,l)&&(t.m[l]=r[l]);if(c)var d=c(t)}for(s&&s(n);i<a.length;i++)o=a[i],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},n=globalThis.webpackChunklws_wr_blocks=globalThis.webpackChunklws_wr_blocks||[];n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))})();var l=t.O(void 0,[350],(()=>t(980)));l=t.O(l)})()