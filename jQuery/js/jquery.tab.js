;(function($){
	$.fn.extend({
		tab:function(options){
			var defaults = {
				activeClass:'active',
				btnSelector:'.btn>li',
				contentSelector:'.content>li',
				eventType:'click'
			}
			
			options = $.extend(defaults,options);

			this.each(function(){
				var $tab = $(this);
				var $btns = $tab.find(options.btnSelector);
				$btns.on(options.eventType,function(){
					$(this).addClass(options.activeClass).siblings().removeClass(options.activeClass);
					var index = $(this).index();
					$tab.find(options.contentSelector).eq(index).show().siblings().hide();
				});

			})
		}
	});
})(jQuery);