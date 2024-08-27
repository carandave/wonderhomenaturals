(function($){$.widget("lws.lws_popup",{options:{remove:!1,decorated:undefined,mode:'all',title:!1,cancelButton:!1,okButton:!1,loadingAtStart:!1,closeOnClicOut:!0},_create:function(){if(undefined===this.options.decorated){this.options.decorated=(this.element.hasClass('lws-popup')&&(this.element.find('.lws-popup-close').length||this.element.find('.lws-popup-button.cancel').length))}
if(!this.options.decorated){this.container=this._createStructure()}else{this.container=this.element}
this.container.on('click','.lws-popup-close',this._bind(this._closePopup,this));this.container.on('click','.lws-popup-button.cancel',this._bind(this._closePopup,this));if(this.options.closeOnClicOut)
this.container.on('click',this._bind(this._clickOut,this));const layouts=["all","grid","onebyone","threebythree"];this.options.mode=this.container.data('layout');if(!layouts.includes(this.options.mode))
this.options.mode='all';this._prepareListScroll();if(this.options.loadingAtStart)
this.addLoading();},_createStructure:function(){this.container=$("<div>",{'class':'lws_popup lws-popup lws-shadow','data-layout':this.options.mode});let window=$("<div>",{'class':'lws-window'}).append($("<div>",{'class':'lws-popup-close lws-icon-cross'})).appendTo(this.container);$("<div>",{'class':'lws-popup-title'}).html(this._getLabel('','title',this.options.title)).appendTo(window);$("<div>",{'class':'lws-popup-content '+this.options.mode}).append(this.element).appendTo(window);if(this.options.cancelButton!==!1||this.options.okButton!==!1){let btns=$("<div>",{'class':'lws-popup-buttons'}).appendTo(window);if(this.options.cancelButton!==!1){$("<div>",{'class':'lws-popup-button cancel'}).html(this._getLabel('Cancel','cancel',this.options.cancelButton)).appendTo(btns)}
if(this.options.okButton!==!1){$("<div>",{'class':'lws-popup-button apply'}).html(this._getLabel('Apply','ok',this.options.cancelButton)).appendTo(btns).on('click',this._bind(this._applyPopup,this))}}
return this.container.appendTo(document.body)},_getLabel:function(label,data,option){if(['[object Number]','[object String]'].includes(Object.prototype.toString.call(option)))
return option;let attr=this.element.data(data);if(undefined!==attr)
label=attr;if(['[object Number]','[object String]'].includes(Object.prototype.toString.call(label)))
return label;else return''},_prepareListScroll:function(){this.next=this.container.find(".content-down");this.previous=this.container.find(".content-up");this.itemsContainer=this.container.find(".lws-popup-items");if(this.options.mode=='onebyone'||this.options.mode=='threebythree'){this.rows=this.container.data('rows');if(undefined==this.rows)
this.rows=(this.options.mode=='threebythree'?3:1);if(this.next.length){this.next.on('click',this._bind(this._nextPage,this));this.next.removeClass('hidden')}
if(this.previous.length){this.previous.on('click',this._bind(this._previousPage,this));this.previous.removeClass('hidden')}
this._updateDisplay()}},_bind:function(fn,me){return function(){return fn.apply(me,arguments)}},_clickOut:function(event){if($(event.target).hasClass('lws-shadow')&&event.target==event.currentTarget){this._closePopup();return!1}},_closePopup:function(){this.container.trigger('popup_closed');if(this.options.remove==!0){this.container.remove()}else{this.container.hide()}},_applyPopup:function(){this.container.trigger('popup_ok',[this.element.find('.lws-popup-current')]);if(this.options.remove==!0){this.container.remove()}else{this.container.hide()}},_updateDisplay:function(){var items=this.itemsContainer.find(".lws-popup-item");if(!items.length)
return;var current=items.filter(".lws-popup-current");if(!current.length)
current=items.first().addClass("lws-popup-current");if(this.previous.length){this.previous.toggleClass("disabled",!current.prev(".lws-popup-item").length)}
items.hide();current.show();if("threebythree"==this.options.mode){for(var i=1;i<this.rows;i++){current=current.next(".lws-popup-item");if(current.length)
current.show();else break}}
if(this.next.length){this.next.toggleClass("disabled",!(current.length&&current.next(".lws-popup-item").length))}},_previousPage:function(){var current=this.itemsContainer.find(".lws-popup-item.lws-popup-current");if(current.length){current.removeClass("lws-popup-current");current.prev(".lws-popup-item").addClass("lws-popup-current")}
this._updateDisplay()},_nextPage:function(){var current=this.itemsContainer.find(".lws-popup-item.lws-popup-current");if(current.length){let next=current;for(var i=1;(i<this.rows&&next.next(".lws-popup-item").length);i++){next=next.next(".lws-popup-item")}
if(next.next(".lws-popup-item").length){current.removeClass("lws-popup-current");current.next(".lws-popup-item").addClass("lws-popup-current")}}
this._updateDisplay()},addLoading:function(){let window=this.container.find('.lws-popup-content');if(!window.length)
window=this.container.find('.lws-window');window.append($("<div>",{'class':'loader',}).append($("<div>",{'class':'animation',})))},removeLoading:function(){this.container.find('.loader').remove()}})})(jQuery)
jQuery(function($){$(".lws_popup").lws_popup()})