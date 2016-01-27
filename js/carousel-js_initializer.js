
+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
	var el = document.createElement('bootstrap')

	var transEndEventNames = {
	  WebkitTransition : 'webkitTransitionEnd',
	  MozTransition    : 'transitionend',
	  OTransition      : 'oTransitionEnd otransitionend',
	  transition       : 'transitionend'
	}

	for (var name in transEndEventNames) {
	  if (el.style[name] !== undefined) {
		return { end: transEndEventNames[name] }
	  }
	}

	return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
	var called = false
	var $el = this
	$(this).one('bsTransitionEnd', function () { called = true })
	var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	setTimeout(callback, duration)
	return this
  }

  $(function () {
	$.support.transition = transitionEnd()

	if (!$.support.transition) return

	$.event.special.bsTransitionEnd = {
	  bindType: $.support.transition.end,
	  delegateType: $.support.transition.end,
	  handle: function (e) {
		if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	  }
	}
  })

  
	$(function(){
		
		function eventFire(el, etype){
			if (el.fireEvent) {
				el.fireEvent('on' + etype);
			} else {
				var evObj = document.createEvent('Events');
				evObj.initEvent(etype, true, false);
				el.dispatchEvent(evObj);
			}
		}
		
		var addSwipeHandler = function(){
			$(".carousel .item").on("swipe",function( event ){
				console.log( "swipe " );
				if( event.swipestop.coords[0] > event.swipestart.coords[0] )
				{
					console.log( "swipe right" );
					
					$(event.target).parents(".carousel").carousel("prev");
					
					var button = $( ".left.carousel-control", $(event.target).parents(".carousel") )[0];
					button.focus();
					eventFire( button, "click" );
					
					//event.stopPropagation();
				}
				else
				{
					console.log( "swipe left" );
					
					$(event.target).parents(".carousel").carousel("next");
					
					//event.stopPropagation();
				}
			});
		};
		addSwipeHandler();
	});
  
}(jQuery);

