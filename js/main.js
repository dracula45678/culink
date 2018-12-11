;(function () {

    'use strict';

    var owlCarousel = function(){

        $('#slider1').owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });

        $('#slider2').owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('#slider3').owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

    };


    var videos = function() {


        $(document).ready(function () {
            $('#play-video').on('click', function (ev) {
                $(".fh5co_hide").fadeOut();
                $("#video")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });


        $(document).ready(function () {
            $('#play-video_2').on('click', function (ev) {
                $(".fh5co_hide_2").fadeOut();
                $("#video_2")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });

        $(document).ready(function () {
            $('#play-video_3').on('click', function (ev) {
                $(".fh5co_hide_3").fadeOut();
                $("#video_3")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });


        $(document).ready(function () {
            $('#play-video_4').on('click', function (ev) {
                $(".fh5co_hide_4").fadeOut();
                $("#video_4")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });
    };

    var googleTranslateFormStyling = function() {
        $(window).on('load', function () {
            $('.goog-te-combo').addClass('form-control');
        });
    };


    var contentWayPoint = function() {
        var i = 0;

        $('.animate-box').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' );
                    });

                }, 100);

            }

        } , { offset: '85%' } );
        // }, { offset: '90%'} );
    };


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'swing');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	
	$(function(){
        var tmp_hmenu = 
        '<div class="container padding_786">'+
            '<nav class="navbar navbar-toggleable-md navbar-light">'+
                '<button class="navbar-toggler navbar-toggler-right mt-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="fa fa-bars"></span></button>'+
                '<a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="img" class="mobile_logo_width" /></a>'+
                '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
                    '<ul class="navbar-nav mr-auto">'+
                        '<li class="nav-item active">'+
                            '<a class="nav-link" href="index.html">首頁 <span class="sr-only">(current)</span></a>'+
                        '</li>'+
                        '<li class="nav-item dropdown">'+
                            '<a class="nav-link dropdown-toggle" href="#" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">品牌 <span class="sr-only">(current)</span></a>'+
                            '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink_1">'+
                                '<a class="dropdown-item" href="detail01.html">After 5</a>'+
                                '<a class="dropdown-item" href="detail02.html">Simple Life</a>'+
                            '</div>'+
                        '</li>'+
                        /*'<li class="nav-item dropdown">'+
                            '<a class="nav-link dropdown-toggle" href="#" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">產品 <span class="sr-only">(current)</span></a>'+
                            '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink_1">'+
                                '<a class="dropdown-item" href="product_list.html?prod=1">碗盤</a>'+
                                '<a class="dropdown-item" href="product_list.html?prod=2">相框</a>'+
                                '<a class="dropdown-item" href="product_list.html?prod=3">收納盒</a>'+
                            '</div>'+
                        '</li>'+*/
                        '<li class="nav-item dropdown">'+
                            '<a class="nav-link dropdown-toggle" href="#" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">在地材料 <span class="sr-only">(current)</span></a>'+
                            '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink_1">'+
                                '<a class="dropdown-item" href="material_list.html?prod=1">天然植物</a>'+
                                '<a class="dropdown-item" href="material_list.html?prod=2">蘭陽黏土</a>'+
                                '<a class="dropdown-item" href="material_list.html?prod=3">在地木頭</a>'+
                            '</div>'+
                        '</li>'+
                        '<li class="nav-item ">'+
                            '<a class="nav-link" href="Contact_us.html">關於我們 <span class="sr-only">(current)</span></a>'+
                        '</li>'+
                    '</ul>'+
                '</div>'+
            '</nav>'+
        '</div>';
        $('#header_menu').append(tmp_hmenu);

        var tmp_footer =         
        '<div class="container">'+
            '<div class="row  ">'+
                '<div class="col-12 col-md-8 py-4 Reserved"> 本網站目前僅為demo呈現，網站所有的圖片與文字內容皆屬於原作者，請勿任意複製使用。 </div>'+
                '<div class="col-12 col-md-4 spdp_right py-4 pr-5">'+
                    '<a href="index.html" class="footer_last_part_menu">Culink</a>'+
                    '<a href="Contact_us.html" class="footer_last_part_menu">關於我們</a>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="gototop js-top">'+
            '<a href="#" class="js-gotop"><i class="fa fa-arrow-up"></i></a>'+
        '</div>';
        $('#footer_id').append(tmp_footer);


		owlCarousel();
		videos();
        contentWayPoint();
		goToTop();
        googleTranslateFormStyling();

        //slide to product
        if (location.href.toLowerCase().match('product') != null) {
            jQuery('html, body').animate({ scrollTop: ($('.prod_div').offset().top) + 10 }, 800);
        }

        //set menu position
        $('#navbarSupportedContent li').removeClass('active');

        if (location.href.toLowerCase().match('contact_us')) {
           $('#navbarSupportedContent li:eq(3)').addClass('active');
        }
        else if(location.href.toLowerCase().match('material_list')){
           $('#navbarSupportedContent li:eq(2)').addClass('active');
        }
        else if(location.href.toLowerCase().match('detail')){
            $('#navbarSupportedContent li:eq(1)').addClass('active');
        }
        else{
            $('#navbarSupportedContent li:eq(0)').addClass('active');
        }
        

        //stop copy
        $('body').bind("contextmenu", function(event){ 
            alert('本網站目前僅為demo呈現，網站所有的圖片與文字內容皆屬於原作者，請勿任意複製使用。');
            return false; 
        });
        //$('img').bind("contextmenu", function(e){ return false; });
	});

}());
/*function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}*/

/*
jQuery Url Plugin
demo: use $.url.param("abc") get value
*/
(function ($) {
	$.url = {};
	$.extend($.url, {
		_params: {},
		init: function () {
			var paramsRaw = "";
			try {
				paramsRaw =
					(document.location.href.split("?", 2)[1] || "").split("#")[0].split("&") || [];
				for (var i = 0; i < paramsRaw.length; i++) {
					var single = paramsRaw[i].split("=");
					if (single[0])
						this._params[single[0]] = unescape(single[1]);
				}
			}
			catch (event) {
				alert(event);
			}
		},
		param: function (name) {
			return this._params[name] || "";
		},
		paramAll: function () {
			return this._params;
		}
	});
	$.url.init();
})(jQuery);