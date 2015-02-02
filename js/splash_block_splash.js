splashBlockSplash = (function($) {
  var
  method = {},
  $overlay,
  $modal,
  $content,
  $close;

  // Generate the HTML and add it to the document.
  $overlay = $('<div id="splash-block-overlay"></div>');
  $modal = $('<div id="splash-block-modal"></div>');
  $content = $('<div id="splash-block-splash"></div>');
  $close = $('<a id="splash-block-close" href="#">close</a>');

  // Center the modal in the viewport.
  method.center = function () {
    var top, left;

    top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
    left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

    $modal.css({
      top: top + $(window).scrollTop(),
      left: left + $(window).scrollLeft()
    });
  };

  // Open the modal.
  method.open = function(settings) {
    $('body').append($overlay, $modal);
    $modal.append($content, $close);

    $content.empty().append(settings.content).html();

    $modal.css({
      width: settings.width || 'auto',
      height: settings.height || 'auto'
    });

    method.center();
    $(window).bind('resize.splashBlock', method.center);
    $modal.show();
    $overlay.show();
  };

  // Close the modal.
  method.close = function() {
    $modal.hide();
    $overlay.hide();
    $content.empty();
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
