apos.define('ec-gallery-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
      self.play = function($widget, data, options) {
        console.log(data);
        var instance = data._id;

      $widget.find("[data-ec-gallery-"+data._id+"] [data-ec-gallery-thumbs]").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '[data-ec-gallery-'+data._id+'] .slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
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