(function ($) {
  Drupal.behaviors.splashBlock = {
    attach: function (context, settings) {
      var splashed = false;
      $.each(Drupal.settings.splashBlock, function() {
        if (!splashed) {
          if (!this.id) return true;
          var id = this.id;
          var value = $.jStorage.get(id);
          var ttl = $.jStorage.getTTL(id);

          if (!value || ttl == 0) {
            value = 1;

            var time = this.time;
            var delay = this.delay;
            var width = this.size + 'px';

            setTimeout(function() {
              switch (Drupal.settings.splashBlock.splash_block_js) {
                // Splash Block js
                case '0':
                  $('#splash-block-overlay').show();
                  splashBlockSplash.open({
                    width: width
                  });
                  break;
                // Bootstrap 2 or 3 js
                case '1':
                  var $modal = $(".splash-content.modal");
                  $modal.modal();
                  splashBlockSplash.center($modal);
                  $(window).bind('resize.modal', splashBlockSplash.center($modal));
                  break;
              }

              $.jStorage.set(id,value);
              $.jStorage.setTTL(id,time);

              splashed = true;
            }, delay);
          } else {
            $('#splash-block-modal').hide();
          }
        }
      });
    }
  };
})(jQuery);
