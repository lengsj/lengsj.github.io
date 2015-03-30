(function() {
  $(document).ready(function() {
    var menuToggle;
    menuToggle = $("#js-mobile-menu").unbind();
    $("#js-navigation-menu").removeClass("show");
    menuToggle.on("click", function(e) {
      e.preventDefault();
      $("#js-navigation-menu").slideToggle(function() {
        if ($("#js-navigation-menu").is(":hidden")) {
          $("#js-navigation-menu").removeAttr("style");
        }
      });
    });
  });

  (function(jQuery) {
    jQuery.mark = {
      jump: function(options) {
        var defaults;
        defaults = {
          selector: 'a.scroll-on-page-link'
        };
        if (typeof options === 'string') {
          defaults.selector = options;
        }
        options = jQuery.extend(defaults, options);
        return jQuery(options.selector).click(function(e) {
          var jumpobj, offset, target, thespeed;
          jumpobj = jQuery(this);
          target = jumpobj.attr('href');
          thespeed = 1000;
          offset = jQuery(target).offset().top;
          jQuery('html,body').animate({
            scrollTop: offset
          }, thespeed, 'swing');
          e.preventDefault();
        });
      }
    };
  })(jQuery);

  jQuery(function() {
    jQuery.mark.jump();
  });

}).call(this);
