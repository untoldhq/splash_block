splashBlockBanner = (function($) {
  var
  method = {},
  $banner,
  $close;

  $banner = $('.splash-block-banner');
  $close = $('.splash-block-banner-close');

  // Insert the banner
  method.insert = function(settings) {
    var position = settings.bannerPosition;
    var $el = $(settings.bannerSelector);
    if (position == 'before') {
      $el.before($banner);
    } else if (position == 'after') {
      $el.after($banner);
    }
  };

  // Close the modal.
  method.close = function() {
    $banner.hide();
    $('body').removeClass('splash-banner');
  };

  $close.click(function(e) {
    e.preventDefault();
    method.close();
  });

  return method;
}(jQuery));
