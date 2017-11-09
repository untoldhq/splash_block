splashBlockSplash = (function($) {
  var
  method = {},
  $overlay,
  $modal,
  $content,
  $close;

  // Generate the HTML and add it to the document.
  $overlay = $('.splash-block-overlay');
  $modal = $('.splash-block-modal');
  $content = $('.splash-block-splash');
  $close = $('.splash-block-close');

  // Center the modal in the viewport.
  method.center = function($el) {
    var top, left;

    top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
    left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

    $el.css({
      top:top + $(window).scrollTop(),
      left:left + $(window).scrollLeft()
    });
  };

  // Open the modal.
  method.open = function(settings) {
    $modal.css({
      width: settings.width || 'auto',
      height: settings.height || 'auto'
    });

    method.center($modal);
    $(window).bind('resize.splashBlock', method.center($modal));
    $modal.show();
    $overlay.show();
  };

  // Close the modal.
  method.close = function() {
    $modal.hide();
    $overlay.hide();
    $content.empty();
    $('body').removeClass('splash-custom');
    $(window).unbind('resize.splashBlock');
  };

  $close.click(function(e) {
    e.preventDefault();
    method.close();
  });

  $overlay.click(function() {
    method.close();
  });

  return method;
}(jQuery));
