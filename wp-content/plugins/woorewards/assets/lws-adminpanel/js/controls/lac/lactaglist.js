(function($){$.widget("lws.lac_taglist",{options:{classe:'',name:'',placeholder:'',shared:!1,addlabel:'Add',delay:300,minlength:1,minoptions:2,minsearch:1,comprehensiveSource:!1},_create:function(){this._setOptions();this._createStructure();this.initList=undefined;if(this.element.data('value')!=undefined&&this.element.data('value').trim()!='')
this.initList=lwsBase64.toObj(this.element.data('value'));this.valueList=[];this.name=this.element.prop("name");this.element.data('lw_name',this.name).prop('name','');this.resLoad={'target':this,'fn':this._ajaxLoading};this.resChange={'target':this,'fn':this._resultChanged};this._manageModel();this.currentIndex=-1;this.preventNext=!1;this.container.on('click','.tag-item .remove',this._bind(this._delTag,this));this.container.on('click','.addbutton',this._bind(this._addTags,this));this.container.on('focus','.lac-taglist-buffer',this._bind(this._getFocus,this));this.container.on('click','.lac-taglist-item',this._bind(this._selectItem,this));this.container.on('focusout','.top-line',this._bind(this._manageFocus,this));this.container.on('keydown',this._bind(this._manageKeys,this));this.element.on('change',this._bind(this._changeElement,this));var me=this;var timer;var keyData=[];this.container.on('keyup',function(event,data){keyData[0]=event.key;keyData[1]=event.keyCode;var sentData=[keyData];timer&&clearTimeout(timer);timer=setTimeout(me._bindD(me._manageSearch,me,sentData),me.options.delay)})},_bind:function(fn,me){return function(){return fn.apply(me,arguments)}},_bindD:function(fn,me,data){return function(){return fn.apply(me,data)}},_setOptions:function(){if(this.element.data('placeholder')!=undefined)
this.options.placeholder=this.element.data('placeholder');if(this.element.data('delay')!=undefined)
this.options.delay=this.element.data('delay');if(this.element.data('class')!=undefined)
this.options.classe=this.element.data('class');if(this.element.data('shared')!=undefined)
this.options.shared=this.element.data('shared');if(this.element.data('addlabel')!=undefined)
this.options.shared=this.element.data('addlabel');if(this.element.data('comprehensive')!=undefined)
this.options.comprehensiveSource=this.element.data('comprehensive');},_createStructure:function(){this.container=$("<div>",{'class':'lac-taglist-wrapper '+this.options.classe,}).append($("<div>",{'class':'top-line','tabIndex':'-1','data-uuid':this.uuid,}).append($("<div>",{'class':'lac-taglist-combo'}).append($("<div>",{'class':'lac-taglist-input','data-placeholder':this.options.placeholder,'contenteditable':'true','name':this.options.name,}).append($("<div>",{'class':'lac-loading',}))).append($("<div>",{'class':'addbutton','html':this.options.addlabel}))).append($("<div>",{'class':'lac-taglist-list','data-open':!1})).append($("<div>",{'class':'lac-taglist-error'})).append($("<input>",{'class':'lac-taglist-buffer'}))).append($("<div>",{'class':'values-list'}).append($("<div>",{'class':'lac-taglist-tags'}))).append($("<div>",{'class':'lac-taglist-values'})).insertAfter(this.element);if(this.element.css('display')=='none')
this.container.hide();this.element.hide();this.selectList=this.container.find('.lac-taglist-list');this.tagsList=this.container.find('.lac-taglist-tags');this.textInput=this.container.find('.lac-taglist-input')},_manageModel:function(){if(this.options.shared){if($('#sha-'+this.options.shared).length){this.model=$('#sha-'+this.options.shared)}else{this.model=$('<input>',{'id':'sha-'+this.options.shared,'type':'hidden'}).appendTo($('body'))}}else{this.model=this.element}
$(this.model).lac_model({'mode':'autocomplete','origin':this,});if(this.initList!=undefined){this._ajaxLoading();$(this.model).lac_model("returnLabels",this.initList,this)}},_manageFocus:function(event,data){if(!event.originalEvent)return;var target=$(event.originalEvent.relatedTarget).closest('.top-line');if(target.length>0&&target.data('uuid')==this.uuid)return;this._closeList()},_recursiveList:function(resList){var resultList=[];for(var key in resList){if(resList[key].group!=undefined){let retour=this._recursiveList(resList[key].group)
if(retour.length>0){if(retour[0][0].className!='lac-taglist-optgroup'){var item=$("<div>",{'class':'lac-taglist-optgroup','data-value':resList[key].value,'html':resList[key].label,});resultList.push(item)}
resultList=$.merge(resultList,retour)}}else{this.selectIndex+=1;var item=$("<div>",{'class':'lac-taglist-item lac-item-'+this.selectIndex,'data-value':resList[key].value,'data-label':resList[key].label,'data-index':this.selectIndex,'html':resList[key].label})
resultList.push(item)}}
return resultList},_setResList:function(resList){this.selectList.empty();this.currentIndex=-1;this.selectIndex=-1;var retour=this._recursiveList(resList);for(var i=0;i<retour.length;i++){retour[i].appendTo(this.selectList)}
this.container.find('.lac-taglist-item').removeClass("lac-highlighted")},_openList:function(){this.selectList.data('open',!0);this.selectList.show()},_closeList:function(){this.selectList.data('open',!1);this.selectList.hide()},_changeElement:function(event){this.valueList=[];if((this.element.data('value')!=undefined&&this.element.data('value').trim()!='')){this.initList=lwsBase64.toObj(this.element.data('value'))}else{this.initList=undefined}
$(this.model).lac_model("returnLabels",this.initList,this)},_selectItem:function(event,data){var itemValue=event.currentTarget.textContent;let searchElements=this._getSearchElements();this.posIndex=searchElements.currentIndex;let valArray=this.textInput.text().split(',').map(function(str){return str.trim()});valArray[this.posIndex]=itemValue;this.textInput.text(valArray.join(", "));this.textInput.text(this.textInput.text()+", ");this.textInput[0].setSelectionRange(this.textInput.text().length,this.textInput.text().length);this._closeList();this.currentIndex=$(event.currentTarget).data('index');this.textInput.trigger('focus')},_getFocus:function(event,data){if(this.preventNext){this.preventNext=!1;this.textInput.trigger('focus')}},_getSearchElements:function(){var searchElements={currentPos:this.textInput[0].selectionStart,currentEndPos:this.textInput[0].selectionEnd,currentIndex:0,posSep:[0]};let posIndex=0;var str=this.textInput.text();for(var i=0;i<str.length;i++){if(str[i]===","){posIndex+=1;searchElements.posSep[posIndex]=i}
if(i+1==searchElements.currentPos)
searchElements.currentIndex=posIndex}
return searchElements},_manageSearch:function(data){let searchElements=this._getSearchElements();this.posIndex=searchElements.currentIndex;let valArray=this.textInput.text().split(',').map(function(str){return str.trim()});if(/[a-zA-Z0-9-_ ]/.test(String.fromCharCode(data[1]))){$(this.model).lac_model("research",valArray[this.posIndex],this)}},_afterArrowKeys:function(){var item=this.container.find('.lac-item-'+this.currentIndex);item.addClass("lac-highlighted");var searchElements=this._getSearchElements();this.posIndex=searchElements.currentIndex;var valArray=this.textInput.text().split(',').map(function(str){return str.trim()});valArray[this.posIndex]=item.data('label');var curPos=searchElements.posSep[this.posIndex]+item.data('label').length+2;this.textInput.text(valArray.join(", "));this.textInput[0].setSelectionRange(curPos,curPos)
if(!this.selectList.data('open')){this.selectList.data('open',!0);this.selectList.show()}},_manageKeys:function(event,data){if(event.key=='ArrowDown'){if(jQuery.isEmptyObject(this.selectList))return;this.container.find('.lac-item-'+this.currentIndex).removeClass("lac-highlighted");this.currentIndex=(this.currentIndex+1>this.selectIndex)?0:this.currentIndex+1;this._afterArrowKeys()}
if(event.key=='ArrowUp'){if(jQuery.isEmptyObject(this.selectList))return;this.posIndex=this._getSearchElements();this.container.find('.lac-item-'+this.currentIndex).removeClass("lac-highlighted");this.currentIndex=(this.currentIndex-1<0)?this.selectIndex:this.currentIndex-1;this._afterArrowKeys()}
if(event.key=='Enter'){this.container.find(".addbutton").trigger("click");this.selectList.data('open',!1);this.selectList.hide()}
if(event.key=='Tab'){if(this.selectList.data('open')==!0){let searchElements=this._getSearchElements();if((searchElements.currentEndPos+2)<this.textInput.text().length){this.textInput[0].setSelectionRange(searchElements.currentEndPos+2,searchElements.currentEndPos+2)}else{this.textInput.text(this.textInput.text()+", ");this.textInput[0].setSelectionRange(this.textInput.text().length,this.textInput.text().length)}
this.selectList.data('open',!1);this.selectList.hide();this.preventNext=!0}else{this.container.find(".addbutton").trigger("click")}}
if(event.key=='Backspace'||event.key=="Delete"||event.key=="Suppr"||event.key==","){this.selectList.data('open',!1);this.selectList.hide()}},_inputSelectRange:function(){if(this.textInput[0].setSelectionRange){let valArray=this.textInput.text().split(',').map(function(str){return str.trim()});var item=this.container.find('.lac-item-'+this.currentIndex);var inputString="";var beginSelection=0;let start=0,end=0;for(var i=0;i<valArray.length;i++){if(i==this.posIndex){start=beginSelection+valArray[i].length;end=beginSelection+item.data('label').length;inputString+=item.data('label')+', '}else{inputString+=valArray[i]+', '
beginSelection+=valArray[i].length+2}}
this.textInput.trigger('focus');this.textInput.text(inputString.substring(0,inputString.length-2));this.textInput[0].setSelectionRange(start,end)}},_showError:function(msg){this.container.find(".lac-taglist-error").html(msg).show().delay(1000).fadeOut(500)},_ajaxLoading:function(){this.textInput.find(".lac-loading").append($("<div>",{'class':'animation'}))},_resultChanged:function(data){this.textInput.find(".lac-loading").find(".animation").remove();if(data[1]=='ok'){if(!jQuery.isEmptyObject(data[0])){this.resList=data[0];this._setResList(this.resList);this.currentIndex=0;this._inputSelectRange();this.container.find('.lac-item-'+this.currentIndex).addClass("lac-highlighted");this._openList()}}else if(data[1]=='init'){if(!jQuery.isEmptyObject(data[0])){var me=this;$.each(data[0],function(index,obj){me.valueList[obj.value]=obj.label})}
this._fillTagList();this._updateList()}else if(data[1]=='force'){}else{this.resList=data[0];this._setResList(this.resList);this._showError(data[1])}},_fillTagList:function(){this.tagsList.empty();for(var key in this.valueList){$("<div>",{'class':'tag-item','data-value':key}).append($("<div>",{'class':'text','html':this.valueList[key]})).append($("<a>",{'class':'remove lws-icon lws-icon-cross'})).appendTo(this.tagsList)}
if(this.valueList)$(this.model).lac_model('addToSource',this.valueList);},_delTag:function(event){var theTag=$(event.currentTarget).parent();delete this.valueList[theTag.data('value')];theTag.remove();this._updateList()},_addTags:function(){var inputs=this.textInput.text().split(',').map(function(str){return str.trim()}).filter(function(text){return text.length>0});var dictionary=$(this.model).lac_model("getValuesFromLabels",inputs,this.options.comprehensiveSource);var unknowns=$.grep(inputs,function(text){for(var i=0;i<dictionary.length;i++){if(text==dictionary[i].label)return!1}
return!0});for(var i=0;i<dictionary.length;i++)
this.valueList[dictionary[i].value]=dictionary[i].label;var value='';if(this.options.comprehensiveSource){value=unknowns.join(', ')}else{for(var i=0;i<unknowns.length;i++)
this.valueList[unknowns[i]]=unknowns[i]}
this.textInput.text(value);this._fillTagList();this._updateList();this._closeList();if(unknowns.length&&this.options.comprehensiveSource)
this._showError(lws_lac_taglist.value_unknown);},_updateList:function(){var valuesContainer=this.container.find('.lac-taglist-values');valuesContainer.empty();let keyTable=[]
for(var key in this.valueList){$("<input>",{'type':'hidden','name':this.name+'[]','value':key,'data-lw_dependant':this.name}).appendTo(valuesContainer);keyTable.push(key)}
this.element.data('value',lwsBase64.fromObj(keyTable))}})})(jQuery)
jQuery(function($){$(".lac_taglist").lac_taglist()})