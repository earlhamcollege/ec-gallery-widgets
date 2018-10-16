apos.define('ec-gallery-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
      console.log(self);
      self.play = function($widget, data, options) {
        console.log(data, options, $widget);
        var instance = data._id;

        // Get configuration from ec-gallery

        var showdots = data.showDots || false;
        var fullWidth = data.fullWidth || false;

        // Get configuration from configuations passed to ec-gallery

        if (options.dots != null){
          showdots = options.dots;
          options.dots.contextual = true;
                       
        }
        if (options.fullWidth != null){
          fullWidth = options.fullWidth;
        }

      $widget.find("[data-ec-gallery-"+data._id+"] [data-ec-gallery-thumbs]").slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '[data-ec-gallery-'+data._id+'] .slider-for',
        dots: showdots,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
      ]
      });
      $widget.find("[data-ec-gallery-"+data._id+"] [data-ec-gallery-main]").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '[data-ec-gallery-'+data._id+'] .slider-nav'
      });

      // pause all youtube videos
      $widget.find("[data-ec-gallery-"+data._id+"] [data-ec-gallery-thumbs]").delegate( ".slick-slide", "click", function() {

            $.each($widget.find("[data-ec-gallery-"+data._id+"] iframe.apostrophe-video"), function( key, value ) {
              this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            });

      });
    };
  }
});