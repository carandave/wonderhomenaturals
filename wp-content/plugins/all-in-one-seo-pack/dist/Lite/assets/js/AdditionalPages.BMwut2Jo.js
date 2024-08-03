import{D as I,a as M,u as F,e as N}from"./links.Byq_3x2e.js";import{W as E}from"./WpTable.D1U8FGR2.js";import{D as x}from"./Date.B1K6W9Mx.js";import{_ as $}from"./default-i18n.DXRQgkn2.js";import{p as C,h as z,o as T}from"./helpers.CXsRrhc8.js";import{B}from"./DatePicker.BPgTva2i.js";import{C as Y,c as W,e as J}from"./Caret.Ke5gylGO.js";import{C as O}from"./Index.CXKd2N9v.js";import{S as j}from"./Exclamation.DGJubTNT.js";import{v as u,o as h,c as v,a,t as l,b as m,B as d,l as r,F as H,k as f,G as R,C as p,E as w}from"./runtime-dom.esm-bundler.tPRhSV4q.js";import{_ as q}from"./_plugin-vue_export-helper.BN1snXvA.js";import{C as K}from"./Table.JF4U36kH.js";import{C as Q}from"./Card.D52fee8h.js";import{C as G}from"./Tooltip.DhkkBQWW.js";import{S as X}from"./index.Dbgw3oZ8.js";import"./constants.CPpKID74.js";import"./pick.E0dwuk96.js";import"./_baseSet.rYV3oc6X.js";import"./toString.zLSwYOtv.js";import"./_getTag.BWQxgJie.js";import"./debounce.CMPzYXJX.js";import"./toNumber.BAPajc32.js";import"./_baseTrim.BYZhh0MR.js";import"./isEqual.DkU1ezAe.js";import"./_baseIsEqual.MNbeg0L2.js";import"./numbers.BT5e8rgb.js";import"./Slide.fjAuzpC8.js";const Z=""+window.__aioseoDynamicImportPreload__("images/import-from-csv.OyzQxKAE.png"),D={page:{url:null,priority:{label:"0.7",value:"0.7"},frequency:{label:$("weekly","all-in-one-seo-pack"),value:"weekly"},lastModified:I.now().toFormat("MM/dd/yyyy")}},ee={setup(){return{optionsStore:M(),rootStore:F()}},emits:["cancel","process-page-add-and-update","process-page-edit"],mixins:[x],components:{BaseDatePicker:B,CoreAlert:Y,CoreModal:O,SvgCircleCheck:W,SvgCircleClose:J,SvgCircleExclamation:j},data(){return{csvFileImage:Z,priorityOptionsValues:[],frequencyOptionsValues:[],filename:"",file:"",loading:!1,showImportModal:!1,page:C(D.page),errors:{url:{invalid:null,exists:null},upload:!1},isLoading:!1,strings:{placeholder:this.$t.sprintf(this.$t.__("Enter a page URL, e.g. %1$s",this.$td),`${this.rootStore.aioseo.urls.home}/new-page`),pageUrl:this.$t.__("Page URL",this.$td),priority:this.$t.__("Priority",this.$td),frequency:this.$t.__("Frequency",this.$td),lastModified:this.$t.__("Last Modified",this.$td),addPage:this.$t.__("Add Page",this.$td),importFromCSV:this.$t.__("Import from CSV",this.$td),saveChanges:this.$t.__("Update Page",this.$td),cancel:this.$t.__("Cancel",this.$td),importAdditionalPages:this.$t.__("Import Additional Pages",this.$td),modalDescription:this.$t.sprintf(this.$t.__("You can import additional page URL's to your sitemap using a CSV file. The following 4 columns are required: %1$sPage URL, Priority, Frequency, Date Modified.%2$s",this.$td),"<strong>","</strong>"),downloadSampleFile:this.$t.__("Download Sample CSV File",this.$td),imgAltText:this.$t.__("CSV example file",this.$td),fileUploadPlaceholder:this.$t.__("Import from CSV file...",this.$td),chooseAFile:this.$t.__("Choose a File",this.$td),import:this.$t.__("Import",this.$td),csvFileTypeRequired:this.$t.__("The file that you've currently selected is not a CSV file.",this.$td),invalidCSV:this.$t.__("Unable to read CSV file. Please check if the file is valid and try again.",this.$td),errors:{url:{invalid:this.$t.__("Please enter a valid URL.",this.$td),exists:this.$t.__("URL already exists.",this.$td)}}},sampleCSVData:`Page URL,Priority,Frequency,Date Modified\r
https://aioseo.com/pricing/,0.0,weekly,01/30/2022`}},methods:{getAssetUrl:z,updateAdditionalPages(e){this.optionsStore.options.sitemap.general.additionalPages.pages=e},addPage(){const e=this.optionsStore.options.sitemap.general.additionalPages.pages;e.unshift(JSON.stringify(this.page)),this.updateAdditionalPages(e),this.page=C(D.page),this.errors.url.invalid=null,this.$emit("process-page-add-and-update")},editPage(e,s){if(this.page[e]=s,!T(this.page.url)&&this.page.url){this.errors.url.invalid=!0;return}if(this.pageExists(this.page.url)&&!this.inTable){this.errors.url.invalid=!1,this.errors.url.exists=!0;return}this.errors.url.invalid=!1,this.errors.url.exists=!1,this.inTable&&this.$emit("process-page-edit",this.page)},updateUrl(e){this.page.url="",this.page.url=this.decodeUrl(e)},decodeUrl(e){try{return decodeURIComponent(e)}catch{return e}},updatePage(e){const s=this.optionsStore.options.sitemap.general.additionalPages.pages;s[this.getPaginatedIndex(e)]=JSON.stringify(this.page),this.updateAdditionalPages(s),this.$emit("process-page-add-and-update"),this.$emit("cancel",!0)},pageExists(e){return this.getParsedPages().some(({url:s})=>s===e)},reset(){this.errors.upload=!1,this.filename="",this.file=""},triggerFileUpload(){this.reset(),this.$refs.file.$el.querySelector("input").focus(),this.$refs.file.$el.querySelector("input").click()},async submitFile(){this.loading=!0;try{const e=await this.parseFile(),s=this.optionsStore.options.sitemap.general.additionalPages.pages;e.forEach(o=>{const c=this.prepareAdditionalPage(o);c&&s.unshift(JSON.stringify(c))}),this.updateAdditionalPages(s)}catch{this.errors.upload=this.strings.invalidCSV}this.reset(),this.page=C(D.page),this.showImportModal=!1,this.loading=!1},prepareAdditionalPage(e){const s=C(D.page);return e.forEach(o=>{try{if(T(o)){const c=this.decodeUrl(o);if(!this.pageExists(c)){s.url=c;return}}if(this.priorityOptionsValues.includes(o)){s.priority.label=s.priority.value=o;return}if(this.frequencyOptionsValues.includes(o.toLowerCase())){s.frequency.label=s.frequency.value=o.toLowerCase();return}isNaN(x.parse(o))||(s.lastModified=o)}catch{}}),s.url!==null?s:!1},parseFile(){const e=new FileReader;return e.readAsText(this.file),new Promise((s,o)=>{e.onerror=()=>{e.abort(),o(new DOMException)},e.onload=()=>{const t=e.result.split(/[\r\n]/).map(i=>i.split(","));s(t)}})},handleFileUpload(){this.file=this.$refs.file.$el.querySelector("input").files[0],this.file&&(this.filename=this.file.name,this.file.type!=="text/csv"&&(this.errors.upload=this.strings.csvFileTypeRequired))},closeImportModal(){this.reset(),this.showImportModal=!1},isDisabledDate(e){return e>I.now()},downloadSampleCSV(){this.showDownloadSample=!1;const e=new Blob([this.sampleCSVData],{type:"text/csv"}),s=URL.createObjectURL(e),o=document.createElement("a");o.href=s,o.download="aioseo-additional-pages-sample.csv",o.click()}},computed:{importValidated(){return this.file.type==="text/csv"}},props:{inTable:Boolean,row:Object,index:Number,getPaginatedIndex:Function,getParsedPages:Function,rowPage:{type:Object,default(){return{}}},editedPage:{type:Object,default(){return{}}}},mounted(){this.priorityOptionsValues=this.$constants.PRIORITY_OPTIONS.map(e=>e.value),this.frequencyOptionsValues=this.$constants.FREQUENCY_OPTIONS.map(e=>e.value),this.inTable&&(this.page=this.rowPage!==this.editedPage?this.rowPage:this.editedPage)}},te={key:0,class:"page-input-header"},se={class:"page-url"},ie={class:"page-priority"},oe={class:"page-frequency"},ae={class:"page-last-modified"},le={class:"page-row"},re={class:"page-url"},ne={class:"append-icon"},de={class:"page-priority"},ue={class:"page-frequency"},pe={class:"page-last-modified"},ge={class:"page-input-footer"},ce={key:0},he={key:1},me={class:"aioseo-modal-body import-additional-pages"},_e={class:"alert"},fe=["innerHTML"],Pe=["src","alt"],ye={class:"file-upload"};function be(e,s,o,c,t,i){const S=u("svg-circle-close"),k=u("svg-circle-check"),U=u("svg-circle-exclamation"),P=u("base-input"),y=u("core-alert"),b=u("base-select"),A=u("base-date-picker"),_=u("base-button"),g=u("core-modal");return h(),v("div",{class:R(["additional-pages-input",{"in-table":o.inTable}])},[o.inTable?m("",!0):(h(),v("div",te,[a("div",se,l(t.strings.pageUrl),1),a("div",ie,l(t.strings.priority),1),a("div",oe,l(t.strings.frequency),1),a("div",ae,l(t.strings.lastModified),1)])),a("div",le,[a("div",re,[d(P,{modelValue:t.page.url,onKeyup:s[0]||(s[0]=n=>i.editPage("url",n.target.value)),onInput:s[1]||(s[1]=n=>i.updateUrl(n.target.value)),size:"medium",placeholder:t.strings.placeholder,class:R(this.errors.url.invalid&&"aioseo-error"||this.page.url&&this.errors.url.exists&&"aioseo-warning"||this.page.url&&"aioseo-active")},{"append-icon":r(()=>[a("div",ne,[t.isLoading?m("",!0):(h(),v(H,{key:0},[t.errors.url.invalid?(h(),f(S,{key:0})):m("",!0),!t.errors.url.invalid&&!t.errors.url.exists&&t.page.url?(h(),f(k,{key:1})):m("",!0),t.errors.url.exists&&t.page.url?(h(),f(U,{key:2})):m("",!0)],64))])]),_:1},8,["modelValue","placeholder","class"]),this.errors.url.invalid?(h(),f(y,{key:0,type:"red",size:"small"},{default:r(()=>[p(l(t.strings.errors.url.invalid),1)]),_:1})):m("",!0),this.errors.url.exists?(h(),f(y,{key:1,type:"yellow",size:"small"},{default:r(()=>[p(l(t.strings.errors.url.exists),1)]),_:1})):m("",!0)]),a("div",de,[d(b,{size:"medium",modelValue:t.page.priority,"onUpdate:modelValue":s[2]||(s[2]=n=>i.editPage("priority",n)),options:e.$constants.PRIORITY_OPTIONS},null,8,["modelValue","options"])]),a("div",ue,[d(b,{size:"medium",modelValue:t.page.frequency,"onUpdate:modelValue":s[3]||(s[3]=n=>i.editPage("frequency",n)),options:e.$constants.FREQUENCY_OPTIONS},null,8,["modelValue","options"])]),a("div",pe,[d(A,{type:"datetime",size:"large",dateFormat:"m/d/Y H:i:s",defaultValue:e.dateStringToLocalJs(t.page.lastModified),onChange:s[4]||(s[4]=n=>i.editPage("lastModified",e.dateJsToLocal(n,"MM/dd/yyyy HH:mm:ss"))),isDisabledDate:i.isDisabledDate},null,8,["defaultValue","isDisabledDate"])])]),a("div",ge,[o.inTable?(h(),v("div",ce,[d(_,{type:"blue",size:"medium",onClick:s[5]||(s[5]=n=>i.updatePage(o.index)),disabled:t.errors.url.invalid||t.errors.url.exists||!t.page.url},{default:r(()=>[p(l(t.strings.saveChanges),1)]),_:1},8,["disabled"]),d(_,{type:"gray",size:"medium",onClick:s[6]||(s[6]=n=>e.$emit("cancel",!0))},{default:r(()=>[p(l(t.strings.cancel),1)]),_:1})])):m("",!0),o.inTable?m("",!0):(h(),v("div",he,[d(_,{type:"blue",size:"small-table",onClick:i.addPage,disabled:t.errors.url.invalid||t.errors.url.exists||!t.page.url},{default:r(()=>[p(l(t.strings.addPage),1)]),_:1},8,["onClick","disabled"]),d(_,{type:"black",size:"small-table",onClick:s[7]||(s[7]=n=>t.showImportModal=!0)},{default:r(()=>[p(l(t.strings.importFromCSV),1)]),_:1})]))]),d(g,{show:t.showImportModal,onClose:i.closeImportModal,classes:["aioseo-add-additional-pages-modal"]},{headerTitle:r(()=>[p(l(t.strings.importAdditionalPages),1)]),body:r(()=>[a("div",me,[a("div",_e,[a("p",{innerHTML:t.strings.modalDescription},null,8,fe),a("a",{onClick:s[8]||(s[8]=w((...n)=>i.downloadSampleCSV&&i.downloadSampleCSV(...n),["stop"]))},l(t.strings.downloadSampleFile),1)]),a("img",{src:i.getAssetUrl(t.csvFileImage),alt:t.strings.imgAltText},null,8,Pe),t.errors.upload?(h(),f(y,{key:0,type:"red",class:"import-error"},{default:r(()=>[d(S),p(" "+l(t.errors.upload),1)]),_:1})):m("",!0),a("div",ye,[d(P,{modelValue:t.filename,"onUpdate:modelValue":s[9]||(s[9]=n=>t.filename=n),size:"medium",onFocus:i.triggerFileUpload,placeholder:t.strings.fileUploadPlaceholder,class:R({"aioseo-error":t.errors.upload})},null,8,["modelValue","onFocus","placeholder","class"]),d(_,{type:"black",size:"medium",onClick:i.triggerFileUpload},{default:r(()=>[p(l(t.strings.chooseAFile),1)]),_:1},8,["onClick"])]),d(P,{type:"file",value:t.file,"onUpdate:modelValue":i.handleFileUpload,ref:"file"},null,8,["value","onUpdate:modelValue"]),d(_,{type:"blue",size:"medium",class:"import",onClick:i.submitFile,disabled:!t.file||!i.importValidated,loading:t.loading},{default:r(()=>[p(l(t.strings.import),1)]),_:1},8,["onClick","disabled","loading"])])]),_:1},8,["show","onClose"])],2)}const ve=q(ee,[["render",be]]),we={setup(){return{optionsStore:M(),rootStore:F(),settingsStore:N()}},mixins:[E],components:{AddAdditionalPage:ve,CoreWpTable:K,CoreCard:Q,CoreTooltip:G,CoreModal:O,SvgTrash:X},data(){return{tableId:"sitemap-additional-pages",changeItemsPerPageSlug:"sitemapAdditionalPages",page:{},editedPage:{},resultsPerPage:10,searchResults:null,deletingRow:!1,activeRow:-1,showDeleteModal:!1,shouldDeleteURL:null,selectedRows:null,bulkOptions:[{label:this.$t.__("Delete",this.$td),value:"delete"}],strings:{searchUrls:this.$t.__("Search URLs",this.$td),edit:this.$t.__("Edit",this.$td),delete:this.$t.__("Delete",this.$td),additionalPages:this.$t.__("Additional Pages",this.$td),additionalPagesTooltip:this.$t.__("You can use this section to add any URLs to your sitemap which aren't a part of your WordPress installation. For example, if you have a contact form that you would like to be included on your sitemap you can enter the information manually.",this.$td),areYouSureDeleteLink:this.$t.__("Are you sure you want to delete this page?",this.$td),areYouSureDeleteLinks:this.$t.__("Are you sure you want to delete these pages?",this.$td),thisWillRemoveLink:this.$t.__("This will permanently remove this page from the additional pages sitemap.",this.$td),thisWillRemoveLinks:this.$t.__("This will permanently remove the selected pages from the additional pages sitemap.",this.$td),yesDeleteLink:this.$t.__("Delete Page",this.$td),yesDeleteLinks:this.$t.__("Delete Selected Pages",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td)}}},computed:{currentPages(){return this.searchResults||this.getParsedPages()},rows(){const e=this.currentPages.map(o=>({url:o.url,priority:o.priority&&o.priority.label?o.priority.label:"",frequency:o.frequency&&o.frequency.label?o.frequency.label:"",lastModified:o.lastModified})),s=this.pageNumber===1?0:(this.pageNumber-1)*this.resultsPerPage;return e.slice(s,s+this.resultsPerPage)},totals(){return{page:1,pages:Math.ceil(this.currentPages.length/this.resultsPerPage),total:this.currentPages.length}},columns(){return[{slug:"url",label:this.$t.__("Page URL",this.$td)},{slug:"priority",label:this.$t.__("Priority",this.$td),width:"90px"},{slug:"frequency",label:this.$t.__("Frequency",this.$td),width:"90px"},{slug:"lastModified",label:this.$t.__("Last Modified",this.$td),width:"180px"},{slug:"page-actions",label:"",width:"40px"}]},areYouSureDeleteLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.areYouSureDeleteLinks:this.strings.areYouSureDeleteLink},yesDeleteLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.yesDeleteLinks:this.strings.yesDeleteLink},thisWillRemoveLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.thisWillRemoveLinks:this.strings.thisWillRemoveLink}},methods:{fetchData(){return Promise.resolve()},processSearch(e){if(this.$refs.table.editRow(null),this.pageNumber=1,e===""){this.searchResults=null,this.searchTerm=null;return}e||(e=this.searchTerm),this.wpTableLoading=!0,this.searchResults=this.getParsedPages().filter(s=>s.url.includes(e)),this.searchTerm=e,this.wpTableLoading=!1},processBulkAction({action:e,selectedRows:s}){s.length&&e==="delete"&&(this.showDeleteModal=!0,this.shouldDeleteURL=s)},processPageDelete(){this.wpTableLoading=!0,Array.isArray(this.shouldDeleteURL)?this.shouldDeleteURL.forEach(e=>{this.deletePage(e)}):this.deletePage(this.shouldDeleteURL),this.showDeleteModal=!1,this.wpTableLoading=!1},deletePage(e){const s=[];this.getParsedPages().forEach(o=>{o.url!==e&&s.push(JSON.stringify(o))}),this.optionsStore.options.sitemap.general.additionalPages.pages=s,this.searchResults&&this.processSearch()},maybeProcessDelete(e){this.showDeleteModal=!0,this.shouldDeleteURL=e},processPageEdit(e){this.editedPage=e},processPageAddAndUpdate(){this.processSearch(this.searchTerm||"")},rowPage(e){return this.searchResults?this.searchResults[this.getPaginatedIndex(e)]:this.getParsedPages()[this.getPaginatedIndex(e)]},getPaginatedIndex(e){return(this.pageNumber-1)*this.resultsPerPage+e},getParsedPages(){return this.optionsStore.options.sitemap.general.additionalPages.pages.map(e=>JSON.parse(e))}}},Se={class:"aioseo-additional-pages"},ke=["onClick"],Ce={class:"row-actions"},De=["onClick"],Ue=["onClick"],Ae={class:"page-actions"},Le={class:"aioseo-modal-body delete"},Re={class:"reset-description"};function Ve(e,s,o,c,t,i){const S=u("base-toggle"),k=u("add-additional-page"),U=u("svg-trash"),P=u("core-tooltip"),y=u("core-wp-table"),b=u("base-button"),A=u("core-modal"),_=u("core-card");return c.optionsStore.options.sitemap.general.enable?(h(),f(_,{key:0,slug:"additionalPages",toggles:c.optionsStore.options.sitemap.general.additionalPages.enable},{header:r(()=>[d(S,{modelValue:c.optionsStore.options.sitemap.general.additionalPages.enable,"onUpdate:modelValue":s[0]||(s[0]=g=>c.optionsStore.options.sitemap.general.additionalPages.enable=g)},null,8,["modelValue"]),a("span",null,l(t.strings.additionalPages),1)]),tooltip:r(()=>[p(l(t.strings.additionalPagesTooltip),1)]),default:r(()=>[a("div",Se,[d(k,{getPaginatedIndex:i.getPaginatedIndex,getParsedPages:i.getParsedPages,onProcessPageAddAndUpdate:i.processPageAddAndUpdate},null,8,["getPaginatedIndex","getParsedPages","onProcessPageAddAndUpdate"]),(h(),f(y,{ref:"table",class:"additional-pages-table",id:t.tableId,"bulk-options":t.bulkOptions,columns:i.columns,"initial-items-per-page":c.settingsStore.settings.tablePagination.sitemapAdditionalPages,"initial-page-number":e.pageNumber,key:e.wpTableKey,loading:e.wpTableLoading,rows:i.rows,"search-label":t.strings.searchUrls,"show-search":!0,totals:i.totals,"show-items-per-page":"",onPaginate:e.processPagination,onProcessBulkAction:i.processBulkAction,onProcessChangeItemsPerPage:e.processChangeItemsPerPage,onSearch:i.processSearch,onSortColumn:e.processSort},{url:r(({row:g,index:n,editRow:L})=>[a("a",{class:"post-title",href:"#",onClick:w(V=>L(n),["prevent","stop"])},l(g.url),9,ke),a("div",Ce,[a("span",null,[a("a",{class:"edit",href:"#",onClick:w(V=>L(n),["prevent","stop"])},[a("span",null,l(t.strings.edit),1)],8,De),p(" | ")]),a("span",null,[a("a",{class:"delete",href:"#",onClick:w(V=>i.maybeProcessDelete(g.url),["prevent","stop"])},[a("span",null,l(t.strings.delete),1)],8,Ue)])])]),"edit-row":r(({index:g,editRow:n})=>[d(k,{index:g,rowPage:i.rowPage(g),editedPage:t.editedPage,getPaginatedIndex:i.getPaginatedIndex,getParsedPages:i.getParsedPages,inTable:"",onCancel:L=>n(null),onProcessPageAddAndUpdate:i.processPageAddAndUpdate,onProcessPageEdit:i.processPageEdit},null,8,["index","rowPage","editedPage","getPaginatedIndex","getParsedPages","onCancel","onProcessPageAddAndUpdate","onProcessPageEdit"])]),"page-actions":r(({row:g})=>[a("div",Ae,[d(P,{type:"action"},{tooltip:r(()=>[p(l(t.strings.delete),1)]),default:r(()=>[d(U,{onClick:n=>i.maybeProcessDelete(g.url)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["id","bulk-options","columns","initial-items-per-page","initial-page-number","loading","rows","search-label","totals","onPaginate","onProcessBulkAction","onProcessChangeItemsPerPage","onSearch","onSortColumn"])),d(A,{show:t.showDeleteModal,"no-header":"",onClose:s[3]||(s[3]=g=>t.showDeleteModal=!1),classes:["aioseo-additional-pages-modal"]},{body:r(()=>[a("div",Le,[a("button",{class:"close",onClick:s[1]||(s[1]=w(g=>t.showDeleteModal=!1,["stop"]))}),a("h3",null,l(i.areYouSureDeleteLink),1),a("div",Re,l(t.strings.thisWillRemoveLink),1),d(b,{type:"blue",size:"medium",onClick:i.processPageDelete,loading:t.deletingRow},{default:r(()=>[p(l(i.yesDeleteLink),1)]),_:1},8,["onClick","loading"]),d(b,{type:"gray",size:"medium",onClick:s[2]||(s[2]=g=>t.showDeleteModal=!1)},{default:r(()=>[p(l(t.strings.noChangedMind),1)]),_:1})])]),_:1},8,["show"])])]),_:1},8,["toggles"])):m("",!0)}const at=q(we,[["render",Ve]]);export{at as default};
