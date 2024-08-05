import{a as m,u}from"./links.Byq_3x2e.js";import{B as _}from"./Editor.CI-FZyFJ.js";import{C as h}from"./Caret.Ke5gylGO.js";import{C as f}from"./Card.D52fee8h.js";import{C as g}from"./SettingsRow.BwYvQArk.js";import{_ as y}from"./_plugin-vue_export-helper.BN1snXvA.js";import{v as t,c as w,B as s,l as r,o as a,a as v,k as b,C,t as S,b as k}from"./runtime-dom.esm-bundler.tPRhSV4q.js";import"./default-i18n.DXRQgkn2.js";import"./helpers.CXsRrhc8.js";import"./isEqual.DkU1ezAe.js";import"./_baseIsEqual.MNbeg0L2.js";import"./_getTag.BWQxgJie.js";import"./_baseClone.Cq_cqRLS.js";import"./_arrayEach.Fgt6pfHj.js";import"./index.Dbgw3oZ8.js";import"./Tooltip.DhkkBQWW.js";import"./Slide.fjAuzpC8.js";import"./Row.DRnp1mVs.js";const x={setup(){return{optionsStore:m(),rootStore:u()}},components:{BaseEditor:_,CoreAlert:h,CoreCard:f,CoreSettingsRow:g},data(){return{strings:{htaccessEditor:this.$t.__(".htaccess Editor",this.$td),editHtaccess:this.$t.__("Edit .htaccess",this.$td),description:this.$t.sprintf(this.$t.__("This allows you to edit the .htaccess file for your site. All WordPress sites on an Apache server have a .htaccess file and we have provided you with a convenient way of editing it. Care should always be taken when editing important files from within WordPress as an incorrect change could cause WordPress to become inaccessible. %1$sBe sure to make a backup before making changes and ensure that you have FTP access to your web server and know how to access and edit files via FTP.%2$s",this.$td),"<strong>","</strong>")}}}},E={class:"aioseo-tools-htaccess-editor"},B=["innerHTML"];function V(A,n,H,e,o,P){const i=t("core-alert"),c=t("base-editor"),l=t("core-settings-row"),d=t("core-card");return a(),w("div",E,[s(d,{slug:"htaccessEditor","header-text":o.strings.htaccessEditor},{default:r(()=>[v("div",{class:"aioseo-settings-row aioseo-section-description",innerHTML:o.strings.description},null,8,B),s(l,{name:o.strings.editHtaccess,align:""},{content:r(()=>[e.optionsStore.htaccessError?(a(),b(i,{key:0,type:"red"},{default:r(()=>[C(S(e.optionsStore.htaccessError),1)]),_:1})):k("",!0),s(c,{class:"htaccess-editor",disabled:!e.rootStore.aioseo.user.unfilteredHtml,modelValue:e.rootStore.aioseo.data.htaccess,"onUpdate:modelValue":n[0]||(n[0]=p=>e.rootStore.aioseo.data.htaccess=p),"line-numbers":"",monospace:"","preserve-whitespace":""},null,8,["disabled","modelValue"])]),_:1},8,["name"])]),_:1},8,["header-text"])])}const Q=y(x,[["render",V]]);export{Q as default};
