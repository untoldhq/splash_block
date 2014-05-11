(function ($) {
  Drupal.behaviors.splashBlock = {
    attach: function (context, settings) {
      var splashed = false;
      $.each(Drupal.settings.splashBlock, function() {
        if (!splashed) {
          var id = this.id;
          var value = $.jStorage.get(id);
          var ttl = $.jStorage.getTTL(id);

          if (!value || ttl == 0) {
            value = 1;

            var splash = $('#' + this.id).clone().wrap('<div>').parent().html();
            var time = this.time;
            var width = this.size + 'px';
            splashBlockSplash.open({content: splash, width: width});

            jQuery.jStorage.set(id,value);
            jQuery.jStorage.setTTL(id,time);

            splashed = true;
          }
        }
      });
      $("#splash-content").remove();
    }
  };
})(jQuery);
