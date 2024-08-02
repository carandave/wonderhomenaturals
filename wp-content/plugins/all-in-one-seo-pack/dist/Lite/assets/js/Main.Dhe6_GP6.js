import{a as w,g as C,f as L,D as c}from"./links.Byq_3x2e.js";import{l as g}from"./license.Cml-S8vw.js";import{G as B}from"./GoogleSearchConsole.59ciZKmk.js";import{C as M}from"./Caret.Ke5gylGO.js";import{_ as h}from"./_plugin-vue_export-helper.BN1snXvA.js";import{v as o,o as r,k as l,l as n,a as y,t as d,b as u,c as _,B as p,q as S,C as D}from"./runtime-dom.esm-bundler.tPRhSV4q.js";import{B as T}from"./DatePicker.BPgTva2i.js";import{C as A}from"./Blur.CvHKqkVq.js";import{C as O}from"./Index.CuRl1TjC.js";import R from"./ContentRankings.Dbty8E93.js";import{C as J}from"./Index.Cf5ujj4F.js";import G from"./Dashboard.H5M4E-AR.js";import N from"./KeywordRankings.BeDtxmvj.js";import P from"./SeoStatistics.CbKQD6HZ.js";import"./default-i18n.DXRQgkn2.js";import"./helpers.CXsRrhc8.js";import"./upperFirst.yVnsg4QL.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.zLSwYOtv.js";import"./pick.E0dwuk96.js";import"./_baseSet.rYV3oc6X.js";import"./_getTag.BWQxgJie.js";import"./debounce.CMPzYXJX.js";import"./toNumber.BAPajc32.js";import"./_baseTrim.BYZhh0MR.js";import"./isEqual.DkU1ezAe.js";import"./_baseIsEqual.MNbeg0L2.js";import"./allowed.DT5C8zBi.js";/* empty css             */import"./params.B3T1WKlC.js";import"./Ellipse.CMQFf36o.js";import"./Header.D3SHoKY-.js";import"./addons.LwNCCWfH.js";import"./ScrollAndHighlight.Bq2wseLx.js";import"./LogoGear.BbumEdXr.js";import"./AnimatedNumber.DeYVxHDv.js";import"./numbers.BT5e8rgb.js";import"./Logo.bX-u9KVJ.js";import"./index.Dbgw3oZ8.js";import"./Support.DcbjlfoT.js";import"./Tabs.BKGFcDsj.js";import"./TruSeoScore.DmC22Awy.js";import"./Information.Bv8uKEyF.js";import"./Slide.fjAuzpC8.js";import"./Url.Cq-E_nhh.js";import"./Date.B1K6W9Mx.js";import"./constants.CPpKID74.js";import"./Exclamation.DGJubTNT.js";import"./Gear.DwDaVskn.js";import"./Row.DRnp1mVs.js";import"./PostsTable.CJYFuaCG.js";import"./WpTable.D1U8FGR2.js";import"./ScoreButton.BV7psxHV.js";import"./Table.JF4U36kH.js";import"./Tooltip.DhkkBQWW.js";import"./LicenseConditions.CQ3VE-ge.js";import"./_baseClone.Cq_cqRLS.js";import"./_arrayEach.Fgt6pfHj.js";import"./IndexStatus.BtgAJWWo.js";import"./PostTypes.Cef6XkQ_.js";import"./RequiredPlans.BaQ2NBS5.js";import"./Card.D52fee8h.js";import"./Overview.DegHeG-7.js";import"./DonutChartWithLegend.B20yT2Df.js";import"./KeywordsGraph.CzV099hp.js";import"./SeoStatisticsOverview.BrvzUVk5.js";import"./List.BD2nBGnT.js";import"./Statistics.CLG-MarI.js";const V={setup(){return{optionsStore:w(),searchStatisticsStore:C()}},components:{CoreAlert:M},data(){return{error:this.$t.__("Your connection with Google Search Console has expired or is invalid. Please check that your site is verified in Google Search Console and try to reconnect. If the problem persists, please contact our support team.",this.$td)}},computed:{invalidAuthentication(){var t,e;return this.searchStatisticsStore.unverifiedSite||typeof((e=(t=this.optionsStore.internalOptions.internal)==null?void 0:t.searchStatistics)==null?void 0:e.profile)!="object"}}};function F(t,e,i,f,a,s){const m=o("core-alert");return s.invalidAuthentication?(r(),l(m,{key:0,class:"aioseo-input-error aioseo-search-statistics-authentication-alert",type:"red"},{default:n(()=>[y("strong",null,d(a.error),1)]),_:1})):u("",!0)}const I=h(V,[["render",F]]),U={};function q(t,e){return r(),_("div")}const z=h(U,[["render",q]]),E={};function H(t,e){return r(),_("div")}const j=h(E,[["render",H]]),K={setup(){return{licenseStore:L(),searchStatisticsStore:C()}},emits:["rolling"],components:{AuthenticationAlert:I,BaseDatePicker:T,CoreBlur:A,CoreMain:O,ContentRankings:R,Cta:J,Dashboard:G,KeywordRankings:N,PostDetail:z,Settings:j,SeoStatistics:P},mixins:[B],data(){return{maxDate:null,minDate:null,strings:{pageName:this.$t.__("Search Statistics",this.$td),ctaHeaderText:this.$t.__("Connect your website to Google Search Console",this.$td),ctaDescription:this.$t.__("Connect your site to Google Search Console to receive insights on how content is being discovered. Identify areas for improvement and drive traffic to your website.",this.$td),ctaButtonText:this.$t.__("Connect to Google Search Console",this.$td),feature1:this.$t.__("Search traffic insights",this.$td),feature2:this.$t.__("Improved visibility",this.$td),feature3:this.$t.__("Track page and keyword rankings",this.$td),feature4:this.$t.__("Speed tests for individual pages/posts",this.$td)}}},computed:{defaultRange(){const t=new Date(`${this.searchStatisticsStore.range.start} 00:00:00`),e=new Date(`${this.searchStatisticsStore.range.end} 00:00:00`);return[t,e]},excludeTabs(){const t=["post-detail"];return(this.licenseStore.isUnlicensed||!g.hasCoreFeature("search-statistics"))&&t.push("settings"),t},isSettings(){return this.$route.name==="settings"},showConnectCta(){return(g.hasCoreFeature("search-statistics")&&!this.searchStatisticsStore.isConnected||this.searchStatisticsStore.unverifiedSite)&&!this.isSettings},showDatePicker(){const t=this.searchStatisticsStore.isConnected&&!this.searchStatisticsStore.unverifiedSite,e=this.searchStatisticsStore.range.start&&this.searchStatisticsStore.range.end;return!["settings","content-rankings"].includes(this.$route.name)&&t&&e},containerClasses(){const t=[];return this.searchStatisticsStore.fetching&&t.push("aioseo-blur"),t},getOriginalMaxDate(){return this.searchStatisticsStore.latestAvailableDate?c.fromFormat(this.searchStatisticsStore.latestAvailableDate,"yyyy-MM-dd").setZone(c.zone)||c.local().plus({days:-2}):c.local().plus({days:-2})},datepickerShortcuts(){return[{text:this.$t.__("Last 7 Days",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last7Days"),[this.getOriginalMaxDate.plus({days:-6}).toJSDate(),this.getOriginalMaxDate.toJSDate()])},{text:this.$t.__("Last 28 Days",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last28Days"),[this.getOriginalMaxDate.plus({days:-27}).toJSDate(),this.getOriginalMaxDate.toJSDate()])},{text:this.$t.__("Last 3 Months",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last3Months"),[this.getOriginalMaxDate.plus({days:-89}).toJSDate(),this.getOriginalMaxDate.toJSDate()])}]}},methods:{isDisabledDate(t){return this.minDate===null?!0:t.getTime()<this.minDate.getTime()||t.getTime()>this.maxDate.getTime()},onDateChange(t,e){this.searchStatisticsStore.setDateRange({dateRange:t,rolling:e})},highlightShortcut(t){if(!t)return;document.querySelectorAll(".el-picker-panel__shortcut").forEach(i=>{switch(i.innerText){case this.$t.__("Last 7 Days",this.$td):t==="last7Days"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 28 Days",this.$td):t==="last28Days"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 3 Months",this.$td):t==="last3Months"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 6 Months",this.$td):t==="last6Months"?i.classList.add("active"):i.classList.remove("active");break;default:i.classList.remove("active")}})}},mounted(){this.minDate=c.now().plus({months:-16}).toJSDate(),this.maxDate=this.getOriginalMaxDate.toJSDate()}},Y={key:0,class:"connect-cta"};function Z(t,e,i,f,a,s){const m=o("base-date-picker"),v=o("authentication-alert"),x=o("core-blur"),$=o("cta"),k=o("core-main");return r(),l(k,{"page-name":a.strings.pageName,"exclude-tabs":s.excludeTabs,showTabs:!s.excludeTabs.includes(t.$route.name),containerClasses:s.containerClasses},{extra:n(()=>[s.showDatePicker?(r(),l(m,{key:0,onChange:s.onDateChange,onUpdated:e[0]||(e[0]=b=>s.highlightShortcut(b)),clearable:!1,defaultValue:s.defaultRange,defaultRolling:f.searchStatisticsStore.rolling,isDisabledDate:s.isDisabledDate,shortcuts:s.datepickerShortcuts,size:"small"},null,8,["onChange","defaultValue","defaultRolling","isDisabledDate","shortcuts"])):u("",!0)]),default:n(()=>[y("div",null,[p(v),s.showConnectCta?(r(),_("div",Y,[p(x,null,{default:n(()=>[(r(),l(S(t.$route.name)))]),_:1}),p($,{"cta-button-action":"",onCtaButtonClick:t.connect,"cta-button-loading":t.loading,"show-link":!1,"button-text":a.strings.ctaButtonText,alignTop:!0,hideBonus:!0,"feature-list":[a.strings.feature1,a.strings.feature2,a.strings.feature3,a.strings.feature4]},{"header-text":n(()=>[D(d(a.strings.ctaHeaderText),1)]),description:n(()=>[D(d(a.strings.ctaDescription),1)]),_:1},8,["onCtaButtonClick","cta-button-loading","button-text","feature-list"])])):u("",!0),s.showConnectCta?u("",!0):(r(),l(S(t.$route.name),{key:1}))])]),_:1},8,["page-name","exclude-tabs","showTabs","containerClasses"])}const he=h(K,[["render",Z]]);export{he as default};
