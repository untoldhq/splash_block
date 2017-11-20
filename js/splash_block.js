(function($) {
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
            var type = this.type;
            var bannerPosition = this.banner_position;
            var bannerSelector = this.banner_selector;

            setTimeout(function() {
              switch (type) {
                // Splash Block js
                case 'custom':
                  $('#splash-block-overlay').show();
                  splashBlockSplash.open({
                    width: width
                  });
                  break;
                // Bootstrap 2 or 3 js
                case 'bootstrap':
                  var $modal = $(".splash-content.modal");
                  if (typeof $modal.modal == 'function') {
                    $modal.modal();
                    // can click in the modal content
                    $('.modal-content').click(function(e){
                      e.stopPropagation();
                    });

                    // due to the vertical centering CSS, capture events to close the modal
                    $('.modal-dialog.vertical-align-center, .modal-content .close').click(function(){
                      $modal.modal('hide');
                      $('body').removeClass('splash-bootstrap');
                    });
                  } else {
                    console.log('Splash Block needs Bootstrap\'s modal script. The modal() function is not found.');
                  }
                  break;
                // Banner
                case 'banner':
                  splashBlockBanner.insert({
                    bannerPosition: bannerPosition,
                    bannerSelector: bannerSelector
                  });
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
