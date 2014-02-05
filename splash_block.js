var modal = (function(){
	var 
	method = {},
	$overlay,
	$modal,
	$content,
	$close;

	
	// Generate the HTML and add it to the document
	$overlay = jQuery('<div id="custom_splash-overlay"></div>');
	$modal = jQuery('<div id="custom_splash-modal"></div>');
	$content = jQuery('<div id="custom_splash-splash"></div>');
	$close = jQuery('<a id="custom_splash-close" href="#">close</a>');
	
	// Center the modal in the viewport
	method.center = function () {
		var top, left;

		top = Math.max(jQuery(window).height() - $modal.outerHeight(), 0) / 2;
		left = Math.max(jQuery(window).width() - $modal.outerWidth(), 0) / 2;

		$modal.css({
			top:top + jQuery(window).scrollTop(), 
			left:left + jQuery(window).scrollLeft()
		});
	};

	// Open the modal
	method.open = function (settings) {
		$content.empty().append(settings.content).html();

		$modal.css({
			width: settings.width || 'auto', 
			height: settings.height || 'auto'
		});

		method.center();
		jQuery(window).bind('resize.modal', method.center);
		$modal.show();
		$overlay.show();
	};

	// Close the modal
	method.close = function () {
		$modal.hide();
		$overlay.hide();
		$content.empty();
		jQuery(window).unbind('resize.modal');
	};


	jQuery(document).ready(function(){
		jQuery('body').append($overlay, $modal);
		jQuery('#custom_splash-modal').hide();
		jQuery('#custom_splash-overlay').hide();
		jQuery('#custom_splash-modal').append($content, $close);
	});

	$close.click(function(e){
		e.preventDefault();
		method.close();
	});

	return method;
}());