splashBlockSplash = (function(){
  var
  method = {},
  $overlay,
  $modal,
  $content,
  $close;

  // Create variables for divs created in block--splash.tpl.php
  $overlay = jQuery('#splash-block-overlay');
  $modal = jQuery('#splash-block-modal');
  $content = jQuery('#splash-block-splash');
  $close = jQuery('#splash-block-close');

  // Center the modal in the viewport.
  method.center = function ($el) {
    var top, left;
    top = Math.max(jQuery(window).height() - $el.outerHeight(), 0) / 2;
    left = Math.max(jQuery(window).width() - $el.outerWidth(), 0) / 2;

    $el.css({
      "top":top + jQuery(window).scrollTop(),
      "left":left + jQuery(window).scrollLeft()
    });
  };

  // Open the modal.
  method.open = function (settings) {
    $modal.css({
      "width": settings.width || 'auto',
      "height": settings.height || 'auto'
    });

    method.center($modal);
    jQuery(window).bind('resize.modal', method.center($modal));
    $modal.show();
    $overlay.show();
  };

  // Close the modal.
  method.close = function () {
    $modal.hide();
    $overlay.hide();
    $content.empty();
    jQuery(window).unbind('resize.modal');
  };

  $close.click(function(e){
    e.preventDefault();
    method.close();
  });

  $overlay.click(function(){
    method.close();
  });

  return method;
}());
