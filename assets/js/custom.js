jQuery.noConflict()(function($) {
    "use strict";
    var $container = $('.oi_port_container');

    if ($container.length) {
        $container.waitForImages(function() {

            // initialize isotope
            $container.isotope({
                itemSelector: '.oi_strange_portfolio_item',
                layoutMode: 'masonry'
            });

            $('#filters a:first-child').addClass('filter_current');
            // filter items when filter link is clicked
            $("a", "#filters").on("click", function(e) {
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector
                });
                $(this).removeClass('filter_button').addClass('filter_button filter_current').siblings().removeClass('filter_button filter_current').addClass('filter_button');

                return false;
            });

        }, null, true);
    }

    $('.f_slider').flexslider({
        prevText: "", //String: Set the text for the "previous" directionNav item
        nextText: "",
        animation: "fade",
        useCSS: false,
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 3000,
        pauseOnHover: true,
        start: function(slider) {
            slider.removeClass('oi_flex_loading');
        }
    });



    $('.oi_strange_portfolio_item_holder').css('opacity', 0);
    $(function() {
        $('.oi_strange_portfolio_item_holder').each(function(index) {
            setTimeout(function(el) {
                el.css('opacity', 1);
            }, index * 200, $(this));
        });
    });
    
	$('.row-fluid').css('opacity', 0);
    $(function() {
        $('.row-fluid').each(function(index) {
            setTimeout(function(el) {
                el.css('opacity', 1);
            }, index * 400, $(this));
        });
    });



    if ($('body').width() > 640) {
        $(window).load(function() {
            if (($("body").height() - $(window).height()) > 300) {
                var stickyNavTop = $('.oi_head_holder').offset().top + $(".oi_head_holder .row").outerHeight();
                $(window).scroll(function() {
                    if ($(this).scrollTop() > stickyNavTop) {
                        $('.oi_st_menu_holder').fadeIn('fast');
                    } else {
                        $('.oi_st_menu_holder').fadeOut('fast');
                    }
                });
            };
        });
    };

	$(".oi_xs_menu", ".io_xs").on("click", function(e) {
        $('.oi_header_menu').toggleClass('oi_v_menu');
    });

    $('.oi_blog_item_main_content a').addClass('colored');
    $('.alignnone img').addClass('img-responsive');
    /***************************************************
                        Flickr
    ***************************************************/
    $(document).ready(function() {
        $('#cbox').jflickrfeed({
            limit: 10,
            qstrings: {
                id: "52617155@N08"
            },
            itemTemplate: '<div class="oi_flickr_item">' +
                '<a data-lightbox="roadtrip" href="{{image_b}}" title="{{title}}">' +
                '<img src="{{image_s}}"/>' +
                '</a>' +
                '</div>'
        });
    });
});
