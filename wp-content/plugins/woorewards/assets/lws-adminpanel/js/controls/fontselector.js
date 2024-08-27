(function($){$.fn.fontselector=function(options){var _fontDivUsed=null;var _fontDivLimited=null;var _fontDivFull=null;var _edited=null;var settings={ajax:lws_ajax.url,action:'lws_adminpanel_fontlist',api:'https://fonts.googleapis.com/css?family=',interval:500};var cssOptions=(options!=undefined)?options:"";var _bind=function(fn,me){return function(){return fn.apply(me,arguments)}};var FontSelector=(function(){function FontSelector(original,o,cssOptions){this.$original=$(original);this.options=o;this.cssOptions=cssOptions;this.setupHtml();this.loadFonts(this);this.bindEvents()}
FontSelector.prototype.setupHtml=function(){this.$family=this.$original.find(".lwss-fontselect-family").hide();this.$weight=this.$original.find(".lwss-fontselect-weight").hide();this.main=this.$original.find(".lwss-fontname-select");this.main.attr("tabindex","0");this.$select=$("<div>",{'class':'lwss-fontname-select-text'}).html(this.fontDescription());this.addFontLink(this.$family.val(),this.$weight.val());this.setFontStyle(this.$select,this.$family.val(),this.$weight.val());this.$arrow=$("<div>",{'class':'lwss-fontname-select-btn lws-icon lws-icon-small-down'+((this.cssOptions.cssColor!=undefined)?" "+this.cssOptions.cssColor:"")});this.$list=$("<div>",{'class':'lwss-font-list lwss-hide-on-clic-out','style':'display:none;'});var toggle=$("<div>",{'class':'lwss-font-list-toggle'}).appendTo(this.$list);this.$toggleMore=$("<div>",{'class':'lwss-font-list-toggle-more'}).appendTo(toggle).html(lws_adminpanel.fontToggleMore);this.$toggleLess=$("<div>",{'class':'lwss-font-list-toggle-less'}).appendTo(toggle).html(lws_adminpanel.fontToggleLess).hide();this.main.append(this.$select).append(this.$arrow);this.$original.remove(".lwss-font-list").append(this.$list)};FontSelector.prototype.fontDescription=function(){return(this.$family.val().length>0?(this.$family.val()+(this.$weight.val().length>0?(" : "+this.weightTr(this.$weight.val())):'')):lws_adminpanel.fontPlaceHolder)}
FontSelector.prototype.weightTr=function(weight){if(lws_adminpanel.fontWeightTr[weight.toLowerCase()]!=undefined)
return lws_adminpanel.fontWeightTr[weight.toLowerCase()];return weight}
FontSelector.prototype.toggleFontList=function(){if(this.$list.is(':visible')){if(this.$toggleMore.is(':visible')){this.$toggleMore.hide();this.$toggleLess.show();this.loadAllFonts(this)}else{this.$toggleLess.hide();this.$toggleMore.show();this.loadFonts(this)}}}
FontSelector.prototype.createFontList=function(fonts,separatorIndex){var content=$("<div>",{'class':'lwss-font-list-content'});for(var i=0;i<fonts.length;++i){var f=fonts[i];var line=$("<div>",{'class':'lwss-font-list-line'});if(separatorIndex!=undefined&&i<separatorIndex)
_fontDivUsed.append(line);else content.append(line);var df=$("<div>",{'class':'lwss-font-list-line-family lwss-font-list-item-to-style'}).html(f.family).attr('data-family',f.family).appendTo(line);var variants=[];for(var j=0;j<f.variants.length;++j)
if(f.variants[j].indexOf('italic')<0)
variants.push(f.variants[j]);if(variants.length>1){var btn=$("<div>",{'class':'lwss-font-list-line-btn lws-icon lws-icon-small-right '+((this.cssOptions.cssColor!=undefined)?" "+this.cssOptions.cssColor:""),'data-family':f.family,'data-variants':variants.join(',')}).appendTo(line);btn.on('click',_bind(this.showVariants,this))}
df.on('click',_bind(this.selectFamily,this))}
return content}
FontSelector.prototype.setFonts=function(fonts,separatorIndex){$('.lwss-font-list-variant').remove();this.$list.find(".lwss-font-list-content").detach();this.$list.find(".lwss-font-list-last-used").detach();if(separatorIndex==undefined){if(_fontDivFull==null)_fontDivFull=this.createFontList(fonts,separatorIndex);this.$list.prepend(_fontDivFull)}else{if(_fontDivUsed==null)_fontDivUsed=$("<div>",{'class':'lwss-font-list-last-used'});if(_fontDivLimited==null)_fontDivLimited=this.createFontList(fonts,separatorIndex);this.$list.prepend(_fontDivLimited);this.$list.prepend(_fontDivUsed);if(_fontDivUsed.children().length<=0)
_fontDivUsed.hide();}
this.scrollToSelection()};FontSelector.prototype.selectFamily=function(e){if(_edited!=null){var me=$(e.target).closest('div.lwss-font-list-line-family');this.$list.hide();_edited.applyFont.call(_edited,me.data('family'))}}
FontSelector.prototype.showVariants=function(e){var btn=$(e.target).closest('div[data-variants]');$('.lwss-font-list-variant').remove();var dv=$("<div>",{'class':'lwss-font-list-variant','style':'display:none;'}).appendTo(btn);dv.offset({left:(btn.offset().left+btn.outerWidth()),top:btn.offset().top});var variants=btn.data('variants').split(',');for(var j=0;j<variants.length;++j){var dl=$("<div>",{'class':'lwss-font-list-line lwss-font-list-item-to-style'}).appendTo(dv);$("<span>",{'class':'lwss-font-list-line-variant'}).appendTo(dl).html(this.weightTr(variants[j]));dl.data('family',btn.data('family')).data('weight',variants[j]);dl.on('click',_bind(this.selectVariant,this))}
dv.fadeIn()}
FontSelector.prototype.selectVariant=function(e){if(_edited!=null){var me=$(e.target).closest('div.lwss-font-list-line');this.$list.hide();_edited.applyFont.call(_edited,me.data('family'),me.data('weight'))}}
FontSelector.prototype.applyFont=function(family,weight){this.$family.val(family);if(weight==undefined)
weight='';this.$weight.val(weight);this.$family.trigger('change');this.$weight.trigger('change')}
FontSelector.prototype.upUsedFont=function(family){if(_fontDivUsed!=null){_fontDivUsed.show();var selector="div.lwss-font-list-line-family[data-family='"+family+"']";if(_fontDivFull==null){var font=_fontDivLimited.find(selector).parent().detach();if(font.length<=0)font=_fontDivUsed.find(selector).parent().detach();_fontDivUsed.prepend(font)}else{_fontDivLimited.find(selector).parent().remove();_fontDivUsed.find(selector).parent().remove();_fontDivUsed.prepend(_fontDivFull.find(selector).parent().clone(!0,!0))}}}
FontSelector.prototype.addFontLink=function(family,weight){var link=this.options.api+family;if(weight!=undefined&&weight.length>0)
link+=(":"+weight);if($("link[href='"+link+"']").length===0){$('link:last').after('<link href="'+link+'" rel="stylesheet" type="text/css">')}};FontSelector.prototype.setFontStyle=function(target,family,weight){var style="font-family:"+family;if(weight!=undefined&&weight.length>0)
style+=(";font-weight:"+weight);target.attr("style",style)}
FontSelector.prototype.loadFonts=(function(){var fonts=null;var lastUsedCount=0;var waiters=[];return function(me){if(fonts==null){waiters.push(me);if(waiters.length==1){$(".lwss-font-list-toggle").addClass("ui-autocomplete-loading");$.getJSON(lws_ajax.url,{action:'lws_adminpanel_fontlist'},function(response){if(null==response)console.log("Font ressource error.");else if(0==response)console.log("Ajax action not found.");else{fonts=response.items;lastUsedCount=response.lastUsedCount;waiters.forEach(function(elt){elt.setFonts.call(elt,fonts,lastUsedCount)});waiters=[];$(".lwss-font-list-toggle").removeClass("ui-autocomplete-loading")}}).fail(function(d,textStatus,error){console.log("Ajax failed with status "+textStatus+", error: "+error)})}}else{me.setFonts.call(me,fonts,lastUsedCount)}
return fonts}})();FontSelector.prototype.loadAllFonts=(function(){var fonts=null;var waiters=[];return function(me){if(fonts==null){waiters.push(me);if(waiters.length==1){$(".lwss-font-list-toggle").addClass("ui-autocomplete-loading");$.getJSON(lws_ajax.url,{action:'lws_adminpanel_fontlist',all:1},function(response){if(null==response)console.log("Font ressource error.");else if(0==response)console.log("Ajax action not found.");else{fonts=response.items;waiters.forEach(function(elt){elt.setFonts(fonts)});waiters=[];$(".lwss-font-list-toggle").removeClass("ui-autocomplete-loading")}}).fail(function(d,textStatus,error){console.log("Ajax failed with status "+textStatus+", error: "+error)})}}else{me.setFonts(fonts)}
return fonts}})();FontSelector.prototype._externalChange=function(){this.$select.html(this.fontDescription());this.addFontLink(this.$family.val(),this.$weight.val());this.setFontStyle(this.$select,this.$family.val(),this.$weight.val());this.upUsedFont(this.$family.val())};FontSelector.prototype.bindEvents=function(){this.$arrow.parent().on('click',_bind(this.dropDown,this));this.$toggleMore.on('click',_bind(this.toggleFontList,this));this.$toggleLess.on('click',_bind(this.toggleFontList,this));this.$family.on('change',_bind(this._externalChange,this));this.$weight.on('change',_bind(this._externalChange,this))};FontSelector.prototype.dropDown=function(){$(".lwss-hide-on-clic-out").fadeOut();$(".lwss-fold-on-clic-out").slideUp();_edited=this;this.loadFonts(this);this.$list.fadeIn();this.$toggleLess.hide();this.$toggleMore.show();this.$list.offset({left:this.$original.offset().left,top:(this.$original.offset().top+this.$select.outerHeight())});this.scrollToSelection();this.testVisibilityInterval=setInterval(_bind(this.styleVisibleFonts,this),this.options.interval);return!1};FontSelector.prototype.scrollToSelection=function(){var target=this.$list.find("[data-family='"+this.$family.val()+"']:first");if(target.length>0){var offset=target.closest(".lwss-font-list-line").position().top-this.$list.find(".lwss-font-list-line:first").position().top;this.$list.find(".lwss-font-list-content").scrollTop(offset)}}
FontSelector.prototype.dropUp=function(){this.$list.fadeOut();if(this.testVisibilityInterval!=undefined){clearInterval(this.testVisibilityInterval);this.testVisibilityInterval=undefined}};FontSelector.prototype.styleVisibleFonts=function(){if(this.$list.is(':hidden')){if(this.testVisibilityInterval!=undefined){clearInterval(this.testVisibilityInterval);this.testVisibilityInterval=undefined}}else{var p=this.$list.find(".lwss-font-list-content");var pt=p.scrollTop();var pb=pt+p.height();var me=this;this.$list.find(".lwss-font-list-item-to-style").each(function(){if(!this.hasAttribute("style")){var r=$(this).closest(".lwss-font-list-line");var ru=r.position().top+pt;var rb=ru+$(this).height();if((rb>=pt)&&(ru<=pb)){me.addFontLink($(this).data('family'),$(this).data('weight'));me.setFontStyle($(this),$(this).data('family'),$(this).data('weight'))}}})}}
return FontSelector})();return this.each(function(options){if(options)$.extend(settings,options);return new FontSelector(this,settings,cssOptions)})}})(jQuery)
jQuery(function($){$('.lwss-fontname-group').fontselector()})