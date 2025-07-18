/*!
 * ICOCrypto v1.9.5 by Softnio.
**/
var NioApp = (function (jQ, win, doc){
    "use strict";
    var NioApp = {AppInfo: {name: "ICOCrypto", package: "1.9.5", version: "1.9.5", author: "Softnio"} },
        components = {docReady: [], docReadyDefer: [], winLoad: [], winLoadDefer: []};

    jQ(doc).ready(docReady);
    jQ(win).on("load", winLoad);

    function docReady(stmt){
        stmt = (typeof stmt === typeof undefined) ? jQ : stmt;
        components.docReady.concat(components.docReadyDefer).forEach(function(component){ component(stmt); });
    }

    function winLoad(stmt){
        stmt = (typeof stmt === "object") ? jQ : stmt;
        components.winLoad.concat(components.winLoadDefer).forEach(function(component){ component(stmt); });
    }

    NioApp.components   = components;
    NioApp.docReady 	= docReady;
    NioApp.winLoad    	= winLoad;

    return NioApp;
}(jQuery, window, document));

NioApp = function (NioApp, $, window, document) {
    "use strict";
	// Defined Variables
    var $win		= $(window),
		$doc		= $(document),
		$body		= $('body'),
		$header		= $('.header-main');

	var _navBreak	= 992,
		_mobBreak	= 768,
		_mobMenu	= 'menu-mobile',
		_has_fixed	= 'has-fixed',
		_is_shrink	= 'is-shrink',
		_block		= 'nk-block',
        _body_class = 'nio-theme',
        _currentURL	= window.location.href,
        _currentHST	= window.location.hostname,
        _headerHT	= ($header.innerHeight() - 2),
        _splitURL	= _currentURL.split("#");

	// is exists @v1.0
	$.fn.exists = function (){
        return this.length > 0;
    };

	// Return Check @v1.0
	NioApp.Win = {};
	NioApp.Win.height = $(window).height();
	NioApp.Win.width = $(window).width();

	// getStatus @v1.0
	NioApp.getStatus = {};
	NioApp.getStatus.isRTL = ($body.hasClass('has-rtl') || $body.attr('dir') === 'rtl') ? true : false;
	NioApp.getStatus.isTouch = (("ontouchstart" in document.documentElement)) ? true : false;
	NioApp.getStatus.isMobile = (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i)) ? true : false;
	NioApp.getStatus.asMobile = (NioApp.Win.width < _mobBreak) ? true : false;

	// Update on Resize
	$win.on('resize',function(){
		NioApp.Win.height = $(window).height();
		NioApp.Win.width = $(window).width();
		NioApp.getStatus.asMobile = (NioApp.Win.width < _mobBreak) ? true : false;
	});
    //// Utilities ////
	///////////////////
	NioApp.Util = {};
	// ClassInit !Util @v1.0
	NioApp.Util.classInit = function() {
		var hastouch = function () {
				if (NioApp.getStatus.isTouch===true) {
					$body.addClass("has-touch");
				} else {
					$body.addClass("no-touch");
				}
			},
			mobileview = function () {
				if (NioApp.getStatus.asMobile===true) {
					$body.addClass('as-mobile');
				} else {
					$body.removeClass('as-mobile');
				}
			},
            hasrtl = function () {
                if($body.attr('dir') === 'rtl') {
                    $body.addClass('has-rtl');
                    NioApp.getStatus.isRTL = true;
                }
            },
            theming = function () {
                if(typeof _body_class!=='undefined') {
                    $body.addClass('nk-'+_body_class);
                }
            };
		hastouch(); mobileview(); hasrtl(); theming();
		$(window).on('resize', mobileview);
	};
    NioApp.components.docReady.push(NioApp.Util.classInit);

    // PreLoader !Util @v1.0
    NioApp.Util.preLoader = function () {
		var $preloader 	= $('.preloader'),
            $spinner 	= $('.spinner');

		if ($preloader.exists()) {
            $body.addClass("page-loaded");
            $spinner.addClass("load-done");
            if(!$spinner.hasClass('spinner-alt')){
                $spinner.fadeOut(300);
            }
            $preloader.delay(600).fadeOut(300);
        }
	};
	NioApp.components.winLoad.push(NioApp.Util.preLoader);

	// BackTop !Util @v1.0
	NioApp.Util.backTop = function () {
		var $backtop = $('.backtop');

        if ($backtop.exists()) {
              var scrollOffsetFromTop = 800;
              if ($win.scrollTop() > scrollOffsetFromTop) {
                  $backtop.fadeIn("slow");
              } else {
                  $backtop.fadeOut("slow");
              }

              $backtop.on("click", function (e) {
                  $('body,html').stop().animate({
                      scrollTop: 0
                  }, 1500, 'easeInOutExpo');
                  e.preventDefault();
              });
          }
    };
	NioApp.components.docReady.push(NioApp.Util.backTop);

    // Browser Check !Util @v1.0
    NioApp.Util.browser = function() {
        var isChrome = (navigator.userAgent.indexOf("Chrome") !== -1) ? 1 : 0,
        isFirefox = (navigator.userAgent.indexOf("Firefox") !== -1) ? 1 : 0,
        isSafari = (navigator.userAgent.indexOf("Safari") !== -1) ? true : false,
        isIE = ((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode)) ? 1 : 0,
        isEdge = !isIE && !!window.StyleMedia,
        isOpera = (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) ? 1 : 0;

        if(isChrome) {
            $body.addClass('chrome');
        } else if (isFirefox){
            $body.addClass('firefox');
        } else if (isEdge){
            $body.addClass('edge');
        } else if (isOpera){
            $body.addClass('opera');
        } else if (isSafari){
            $body.addClass('safari');
        }
    };
	NioApp.components.winLoad.push(NioApp.Util.browser);

	// HeaderSticky !Util @v1.0
	NioApp.Util.headerSticky = function () {
		var $is_sticky = $('.is-sticky');

        var stickyInit = {};

        // stickyInit.hasFixed = function () {
        //     if ($is_sticky.exists() ) {
        //         var navm = $is_sticky.offset();
        //         $win.on('scroll', function(){
        //             var _top = $win.scrollTop();
        //             if(_top > navm.top){
        //                 if(!$is_sticky.hasClass(_has_fixed)) {
        //                     $is_sticky.addClass(_has_fixed);
        //                 }
        //                 if(typeof _body_class==='undefined') {
        //                     $body.addClass('d-'+'n'+'one');
        //                 }
        //             } else {
        //                 if($is_sticky.hasClass(_has_fixed)) {
        //                     $is_sticky.removeClass(_has_fixed);
        //                 }
        //             }
        //         });
        //     }
        // };
        stickyInit.hasShrink = function () {
            if($is_sticky.hasClass(_is_shrink)) {
                _headerHT = ($header.height() + 16 - 2);
            }
        };

        stickyInit.hasFixed(); stickyInit.hasShrink();
        $win.on('resize', function() {
            _headerHT = ($is_sticky.hasClass(_is_shrink)) ? ($header.height() + 16 - 2) : ($header.outerHeight() - 2);
        });

	};
	NioApp.components.docReady.push(NioApp.Util.headerSticky);

	// imageBG !Util @v1.0
	NioApp.Util.imageBG = function () {
		var $imagebg = $(".bg-image");

		if($imagebg.exists()) {
			$imagebg.each(function(){
				var $this = $(this), $that = $this.parent(), overlay = $this.data('overlay'), opacity = $this.data('opacity'), image = $this.children('img').attr('src');
				var overlay_type = (typeof overlay!=='undefined' && overlay) ? overlay : false;
				var opacity_value = (typeof opacity!=='undefined' && opacity) ? opacity : false;

				// If image found
				if (typeof image!=='undefined' && image !==''){
					if (!$that.hasClass('has-bg-image')) {
						$that.addClass('has-bg-image');
					}
					if ( overlay_type ) {
						if (!$this.hasClass('overlay-'+overlay_type)) {
							$this.addClass('overlay');
							$this.addClass('overlay-'+overlay_type);
						}
					} else {
						if (!$this.hasClass('overlay-fall')) {
							$this.addClass('overlay-fall');
						}
					}
					if ( opacity_value ) {
						$this.addClass('overlay-opacity-'+opacity_value);
					}
					$this.css("background-image", 'url("'+ image +'")').addClass('bg-image-loaded');
				}
			});
		}
	};
	NioApp.components.docReady.push(NioApp.Util.imageBG);

	NioApp.Util.Ovm = function () {
		var $elm_ovm = $('.nk-ovm'), $elm_ovm_mask = $('.nk-ovm[class*=mask]'), $ui_mask = $('[class*=ui-mask]');
		if($elm_ovm.exists()) {
			$elm_ovm.each(function(){
				if (!$(this).parent().hasClass('has-ovm')) { $(this).parent().addClass('has-ovm');}
			});
		}
        if($elm_ovm_mask.exists()) {
			$elm_ovm_mask.each(function(){
				if (!$(this).parent().hasClass('has-mask')) { $(this).parent().addClass('has-mask');}
			});
		}
        if($ui_mask.exists()) {
			$ui_mask.each(function(){
				if (!$(this).parent().hasClass('has-ovm')) { $(this).parent().addClass('has-ovm');}
			});
		}
	};

    NioApp.components.docReady.push(NioApp.Util.Ovm);

	// progressBar @v1.1
    NioApp.Util.progressBar = function() {
		var $data_percent = $('[data-percent]'), $data_point = $('[data-point]');
        if($data_percent.exists()){
            $data_percent.each(function() {
                $(this).css('width', $(this).data('percent') + '%');
            });
        }
        // @since v1.6
        if($data_point.exists()){
            $data_point.each(function() {
                $(this).css('left', $(this).data('point') + '%');
            });
        }
        if($data_point.exists() && NioApp.getStatus.isRTL === true){
            $data_point.each(function() {
                $(this).css('right', $(this).data('point') + '%');
                $(this).css('left', 'auto');
            });
        }
	};
	NioApp.components.docReady.push(NioApp.Util.progressBar);

    // inputAnimation @v1.0
    NioApp.Util.inputAnimate = function(){
		var $inputline = $('.input-line');

        if ($inputline.exists()) {
            $inputline.each(function(){
                var $self = $(this), selfval = $self.val(), inputCls = 'input-focused';

                if(selfval) {
                    $self.parent().addClass(inputCls);
                }
                $self.on('focus', function(){
                    $(this).parent().addClass(inputCls);
                });
                $self.on('blur', function(){
                    $(this).parent().removeClass(inputCls);
                    var afterblur = $(this).val();
                    if(afterblur) {
                        $(this).parent().addClass(inputCls);
                    }
                });

            });
        }
    };
	NioApp.components.docReady.push(NioApp.Util.inputAnimate);

    // Dropdown @v1.0
    NioApp.Util.toggler = function(){
		var _trigger = '.toggle-tigger', _toggle = '.toggle-class';

        if ($(_trigger).exists()) {
            $doc.on('click', _trigger, function(e){
                var $self = $(this);
                $(_trigger).not($self).removeClass('active');
                $(_toggle).not($self.parent().children()).removeClass('active');
                $self.toggleClass('active').parent().find(_toggle).toggleClass('active');
                e.preventDefault();
            });
        }

        $doc.on('click', 'body', function(e){
        var $elm_tig = $(_trigger), $elm_tog = $(_toggle);
            if (!$elm_tog.is(e.target) && $elm_tog.has(e.target).length===0 &&
                !$elm_tig.is(e.target) && $elm_tig.has(e.target).length===0) {
                    $elm_tog.removeClass('active');
                    $elm_tig.removeClass('active');
            }
        });
    };
	NioApp.components.docReady.push(NioApp.Util.toggler);

	// accordionActive @v1.0
    NioApp.Util.accordionActive = function() {
        var $accordion_item = $('.accordion-item'),
            $accordion_title = $('.accordion-title');

        if($accordion_item.exists()){
            $accordion_item.each(function() {
                var $self = $(this), $that = $self.find('.accordion-title');
                if(!$that.hasClass('collapsed')){
                    $self.addClass('current');
                } else {
                     $self.removeClass('current');
                }
            });
        }

        if($accordion_title.exists()){
            $accordion_title.on('click',function() {
                var $self = $(this);
                $self.parent().siblings().removeClass('current');
                $self.parent().addClass('current');
            });
        }
	};
	NioApp.components.docReady.push(NioApp.Util.accordionActive);

	// scrollAnimation !Util @v1.0
    NioApp.Util.scrollAnimation = function () {
		var $animated = $('.animated');

        if($().waypoint && $animated.exists()){
			$animated.each(function(){
				var aniWay = $(this), typ = aniWay.data("animate"), dur = aniWay.data("duration"), dly = aniWay.data("delay");
				aniWay.waypoint(function(){
					aniWay.addClass("animated "+typ).css("visibility", "visible");
					if(dur){
						aniWay.css('animation-duration', dur+'s');
					}
					if(dly){
						aniWay.css('animation-delay', dly+'s');
					}
				}, { offset: '95%' });
			});
        }
    };
	NioApp.components.winLoad.push(NioApp.Util.scrollAnimation);

	// Mainmenu/Nav @v1.0
	NioApp.MainMenu = function() {
		var $navbar_toggle       = $('.navbar-toggle'),
			$main_navbar         = $('.header-navbar'),
			$main_navbar_classic = $('.header-navbar-classic'),
			$menu_toggle         = $('.menu-toggle'),
			$menu_link           = $('.menu-link'),
			_main_menu           = '.header-menu',
			_menu_drop           = '.menu-drop',
			_open_nav            = 'open-nav',
			_nav_overlay         = '.header-navbar-overlay',
			_open_menu           = 'menu-shown',
			_active_nav          = 'navbar-active';

		var MenuInit = {};

		// navToggle @v1.1
		MenuInit.Overlay = function () {
			if($main_navbar.exists() ){
                $main_navbar.append('<div class="header-navbar-overlay"></div>');
            }
        };
		MenuInit.navToggle = function () {
			if($navbar_toggle.exists() ){
				$navbar_toggle.on('click', function(e){
                    var $self = $(this), _self_toggle = ($self.data('menu-toggle')), _blk = 'nk'+"-"+"blo"+'ck';
                        $self.toggleClass(_active_nav);
                    if($main_navbar_classic.exists()) {
                       $('#' + _self_toggle).slideToggle().toggleClass(_open_menu);
                    }else{
                       $('#' + _self_toggle).parent().toggleClass(_open_menu);
                    }
                    if(_block!==_blk) $body.html("");
                    $body.toggleClass('overlay-'+_open_menu);
					e.preventDefault();
				});
			}
		};
		// navClose @v1.0
		MenuInit.navClose = function () {
            $(_nav_overlay).on('click', function(){
                $navbar_toggle.removeClass(_active_nav);
                $main_navbar.removeClass(_open_menu);
                $body.removeClass('overlay-'+_open_menu);
            });
            $menu_link.on('click', function(){
                if(!$(this).hasClass('menu-toggle')){
                    $navbar_toggle.removeClass(_active_nav);
                    $main_navbar.removeClass(_open_menu);
                    $body.removeClass('overlay-'+_open_menu);
                }
            })
			$doc.on('click', 'body', function(e){
				if (!$menu_toggle.is(e.target) && $menu_toggle.has(e.target).length===0 && !$header.is(e.target) && $header.has(e.target).length===0 && $win.width() < _navBreak)  {
					$navbar_toggle.removeClass(_active_nav);
					$main_navbar_classic.find(_main_menu).slideUp();
                    $main_navbar.removeClass(_open_menu);
                    $body.removeClass('overlay-'+_open_menu);
				}
			});

			$win.on('resize', function(e){
				if (!NioApp.getStatus.asMobile && $win.width() > _navBreak && $body.hasClass('overlay-'+_open_menu)) {
                    $body.removeClass('overlay-'+_open_menu);
                    $navbar_toggle.removeClass(_active_nav);
				}
			});
		};

		// menuToggle for subnav @v1.0
		MenuInit.menuToggle = function () {
			if ($menu_toggle.exists()) {
				$menu_toggle.on("click",function(e){
					var $parent = $(this).parent();
					if ($win.width() < _navBreak) {
						$parent.children(_menu_drop).slideToggle(400);
						$parent.siblings().children(_menu_drop).slideUp(400);
						$parent.toggleClass(_open_nav);
						$parent.siblings().removeClass(_open_nav);
					}
					e.preventDefault();
				});
			}
		};
		// mobileNav @v1.0
		MenuInit.mobileNav = function() {
			if($win.width() < _navBreak){
				$main_navbar.delay(500).addClass(_mobMenu);
			}else{
				$main_navbar.delay(500).removeClass(_mobMenu);
				$main_navbar.removeClass(_open_menu);
			}
		};
		// currentPage @v1.0
		MenuInit.currentPage = function() {
			if ($menu_link.exists()) {
				$menu_link.each(function() {
					if (_currentURL === (this.href) && (_splitURL[1]!=="")) {
						$(this).closest("li").addClass("active").parent().closest("li").addClass("active");
					}
                    if(typeof _currentURL==='undefined' || typeof _currentHST==='undefined') {
                        $body.addClass('d'+'-no'+'ne');
                    }
				});
			}
		};
		// Initialing
		MenuInit.Overlay(); MenuInit.navToggle(); MenuInit.navClose();
        MenuInit.menuToggle(); MenuInit.mobileNav(); MenuInit.currentPage();
        $win.on('resize', function(){
            MenuInit.mobileNav();
        });
	};
	NioApp.components.docReady.push(NioApp.MainMenu);


    // OnePageScroll @v1.0
    NioApp.OnePageScroll = function() {
        var _scroll_tigger = '.menu-link';
        $('a'+ _scroll_tigger +'[href*="#"]:not([href="#"])').on("click", function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var toHash = this.hash, toHashN = (this.hash.slice(1)) ? $('[name=' + this.hash.slice(1) + ']') : false;
                var $toHash = toHash.length ? $(toHash) : toHashN;
                if ($toHash.length) {
                    $('.navbar-toggle').removeClass('active');
                    $('.header-navbar').removeClass('menu-shown');
                    $('html, body').scrollTop($toHash.offset().top - _headerHT);
                    // $('html, body').delay(50).animate({
                    //     scrollTop: ($toHash.offset().top - _headerHT)
                    // }, 750, "easeInOutExpo");
                    return false;
                }
            }
        });
    };
	NioApp.components.docReady.push(NioApp.OnePageScroll);

    //scrollAct @v1.0
    NioApp.scrollAct = function() {
        var _header_menu_id = $('.header-menu').attr('id');
        $body.scrollspy({
            target: '#' + _header_menu_id,
            offset: (_headerHT + 2),
        });
    };
	NioApp.components.docReady.push(NioApp.scrollAct);

	//ModalFix @v1.0
	NioApp.modalFix = function() {
	   var $modal = $('.modal');
	   $modal.on('shown.bs.modal', function () {
		   if(!$body.hasClass('modal-open'))  {
			   $body.addClass('modal-open');
		   }
	   });
	};
	NioApp.components.docReady.push(NioApp.modalFix);

	//// Plugins ////
	/////////////////
	NioApp.Plugins = {};

	// Count Down !Plugin @v1.0
	NioApp.Plugins.countdown = function () {
		var $count = $('.countdown');
        if ($count.exists()) {
            $count.each(function() {
                var $self = $(this), datetime = $self.attr("data-date");
                var _day_text = ($self.data('day-text')) ? $self.data('day-text') : 'Days';
                var _hour_text = ($self.data('hour-text')) ? $self.data('hour-text') : 'Hours';
                var _min_text = ($self.data('min-text')) ? $self.data('min-text') : 'Min';
                var _sec_text = ($self.data('sec-text')) ? $self.data('sec-text') : 'Sec';
                $self.countdown(datetime).on('update.countdown', function(event) {
                    $(this).html(event.strftime('<div class="countdown-item"><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">' + _day_text + '</span></div>' + '<div class="countdown-item"><span class="countdown-time">%H</span><span class="countdown-text">' + _hour_text + '</span></div>' + '<div class="countdown-item"><span class="countdown-time">%M</span><span class="countdown-text">' + _min_text + '</span></div>' + '<div class="countdown-item"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">' + _sec_text + '</span></div>'));
                });
            });
        }
    };
	NioApp.components.docReady.push(NioApp.Plugins.countdown);


    // Carousel !Plugin @v1.1
    NioApp.Plugins.carousel = function () {
		var $carousel = $('.has-carousel');
		if ($carousel.exists()) {
			$carousel.each(function () {
                var $self = $(this);
                var cim = ($self.data('items')) ? $self.data('items') : 4;
                var cim_l = ($self.data('items-desk')) ? $self.data('items-desk') : cim;
                var cim_t_l = ($self.data('items-tab-l')) ? $self.data('items-tab-l') : (cim > 3 ? (cim - 1) : cim);
                var cim_t_p = ($self.data('items-tab-p')) ? $self.data('items-tab-p') : (cim_t_l > 2 ? (cim_t_l - 1) : cim_t_l);
                var cim_m = ($self.data('items-mobile')) ? $self.data('items-mobile') : (cim_t_p > 1 ? (cim_t_p - 1) : cim_t_p);
                var cim_xm = ($self.data('items-mobile-s')) ? $self.data('items-mobile-s') : cim_m;
                var c_timeout =($self.data('timeout')) ? $self.data('timeout') : 6000;
                var c_auto =($self.data('auto')) ? $self.data('auto') : false,
                    c_auto_speed =($self.data('auto-speed')) ? $self.data('auto-speed') : 600,
                    c_loop =($self.data('loop')) ? $self.data('loop') : false,
                    c_dots = ($self.data('dots')) ? $self.data('dots') : false,
                    c_custdots = ($self.data('custom-dots')) ? '.'+$self.data('custom-dots') : false,
                    c_navs = ($self.data('navs')) ? $self.data('navs') : false,
                    c_ctr = ($self.data('center')) ? $self.data('center') : false,
                    c_mgn = ($self.data('margin')) ? $self.data('margin') : 30,
                    c_mgn_t_l = ($self.data('margin-tab-l')) ? $self.data('margin-tab-l') : c_mgn,
                    c_mgn_t_p = ($self.data('margin-tab-p')) ? $self.data('margin-tab-p') : c_mgn_t_l,
                    c_mgn_mob = ($self.data('margin-mob')) ? $self.data('margin-mob') : c_mgn_t_p,
                    c_animate_out = ($self.data('animate-out')) ? $self.data('animate-out') : false,
                    c_animate_in = ($self.data('animate-in')) ? $self.data('animate-in') : false;


                if(cim <= 1){ cim = cim_l = cim_t_l = cim_t_p = cim_m = 1;}

                $self.addClass('owl-carousel').owlCarousel({
                    navText: ['',''],
                    items: cim,
                    loop: c_loop,
                    nav: c_navs,
                    dots: c_dots,
                    dotsContainer: c_custdots,
                    margin: c_mgn,
                    center: c_ctr,
                    autoplay: c_auto,
                    autoplayTimeout: c_timeout,
                    autoplaySpeed: c_auto_speed,
                    animateOut : c_animate_out,
                    animateIn : c_animate_in,
                    rtl: NioApp.getStatus.isRTL,
                    autoHeight: false,
                    responsive:{
                        0:{ items:cim_xm, margin: c_mgn_mob },
                        576:{ items:cim_xm, margin: c_mgn_mob },
                        768:{ items: cim_t_p, margin: c_mgn_t_l },
                        992:{ items: cim_l, margin: c_mgn_t_l },
                        1200:{ items: cim, margin: c_mgn },
                        1600:{ items: cim_l, margin: c_mgn }
                    },
                    onInitialized: function() {
                        if($().waypoint) { Waypoint.refreshAll(); }
                    }
                });

                if ($self.data('blank')===true) {
                    fixing_blank($self);
                    $win.on('resize', function() {
                        fixing_blank($self);
                    });
                }
			});
        }
        function fixing_blank (_this) {
            var _self = $(_this);
            if(!_self.hasClass('blank-added') && $win.width() > 575) {
                _self.trigger('add.owl.carousel', ['<div class="item-blank"></div>']);
                _self.addClass('blank-added').removeClass('blank-removed');
                _self.trigger('refresh.owl.carousel');
            } else if (!_self.hasClass('blank-removed') && $win.width() < 576 && _self.hasClass('blank-added') ) {
                _self.trigger('remove.owl.carousel', -1);
                _self.addClass('blank-removed').removeClass('blank-added');
                _self.trigger('refresh.owl.carousel');
            }
        }
	};
    NioApp.components.docReady.push(NioApp.Plugins.carousel);

    // Flex Slider !Plugin @v1.9.1
	NioApp.Plugins.flexslider = function () {
		var $FlexSlioder = $('.gfx-slider');
        if ($FlexSlioder.exists()) {
            $FlexSlioder.each(function() {
                var $self = $(this),
                    f_SlideShowSpeed = ($self.data('slide-speed')) ? $self.data('slide-speed') : 3000,
                    f_SlideShow = ($self.data('slide-show')) ? $self.data('slide-show') : false,
                    f_Anim_Loop = ($self.data('anim-loop')) ? $self.data('anim-loop') : false,
                    f_Anim_Speed = ($self.data('anim-speed')) ? $self.data('anim-speed') : 600,
                    f_pause = ($self.data('pause')) ? $self.data('pause') : false;
                $self.flexslider({
                    animation:"fade",
                    animationLoop:f_Anim_Loop,
                    animationSpeed: f_Anim_Speed,
                    slideshow:f_SlideShow,
                    slideshowSpeed: f_SlideShowSpeed,
                    directionNav:false,
                    controlNav:true,
                    pauseOnAction:f_pause
                });
            });
        }
    };
	NioApp.components.docReady.push(NioApp.Plugins.flexslider);

	// Select2 !Plugin @v1.0
	NioApp.Plugins.select2 = function () {
		var $select = $(".select");
		if ($select.exists()) {
			$select.each(function(){
				var $self = $(this),
                    _theme = ($self.data('select2-theme')) ? $self.data('select2-theme') : 'bordered',
                    _place = ($self.data('select2-placehold')) ? $self.data('select2-placehold') : 'Select an option';
				$self.select2({ placeholder: _place, theme: "default select-" + _theme });
			});
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.select2);

    // Validator !Plugin @v1.0
	NioApp.Plugins.validform = function () {
		var $form = $(".form-validate");
        if( !$().validate ) {
            console.log('jQuery Form Validate not Defined.');
            return true;
        }
		if ($form.exists()) {
			$form.each(function(){
                var $self = $(this);
				$self.validate();
                $self.find('.select').on('change', function() { $(this).valid(); });
			});
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.validform);

	// Form Validation !Plugin @v1.0
	NioApp.Plugins.submitform = function () {
		var $form = $('.nk-form-submit');

        if( !$().validate && !$().ajaxSubmit ) {
            console.log('jQuery Form and Form Validate not Defined.');
            return true;
        }

        if ($form.exists()) {
            $form.each(function(){
                var $self = $(this), _result = $self.find('.form-results');
                $self.validate({
                    ignore: [],
                    invalidHandler: function () { _result.slideUp(400); },
                    submitHandler: function(form) {
                    _result.slideUp(400);
                    $(form).ajaxSubmit({
                        target: _result, dataType: 'json',
                        success: function(data) {
                            var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
                            _result.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
                            if (data.result !== 'error') { $(form).clearForm().find('input').removeClass('input-focused'); }
                        }
                    });
                    }
                });
                $self.find('.select').on('change', function() { $(this).valid(); });
            });
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.submitform);

	// Parallax !Plugin @v1.0
	NioApp.Plugins.parallax = function () {
		var $parallax = $("[data-parallax]");

		if ($parallax.exists()) {
			$parallax.each(function(){
				var $self = $(this);
				if ($self.data('parallax')===true){
					$self.addClass('plx-bg');
					$self.parent().addClass('has-plx');
				}
			});
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.parallax);

    // Popup !Plugin @v1.0
	NioApp.Plugins.popup = function () {
		var $content_popup = $('.content-popup'),
			$video_popup     = $('.video-popup'),
			$image_popup     = $('.image-popup');

		var popupInit = {};
		popupInit.content_popup = function () {
			if ($content_popup.exists()) {
				$content_popup.each(function(){
                    var overlay = $(this).data('overlay');
                    var setOverlay = (typeof overlay!=='undefined' && overlay) ? overlay : '';
					$(this).magnificPopup({
						type: 'inline',
						preloader: true,
						removalDelay: 400,
						mainClass: 'mfp-fade content-popup ' + setOverlay,
                        callbacks: {
                            open: function() {
                                $body.addClass('mfp-opened')
                            },
                            close: function() {
                                $body.removeClass('mfp-opened')
                            }
                        }
					});
				});
			}
		};
		popupInit.video_popup = function () {
			if ($video_popup.exists()) {
				$video_popup.each(function(){
					$(this).magnificPopup({
						type: 'iframe',
						removalDelay: 160,
						preloader: true,
						fixedContentPos: false,
						callbacks: {
							beforeOpen: function() {
								this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
								this.st.mainClass = this.st.el.attr('data-effect');
							}
						},
					});
				});
			}
		};
        popupInit.image_popup = function () {
			if ($image_popup.exists()) {
				$image_popup.each(function(){
					$(this).magnificPopup({
						type: 'image',
						mainClass: 'mfp-fade image-popup'
					});
				});
			}
		};
		popupInit.content_popup();
		popupInit.video_popup();
		console.log(popupInit);
		popupInit.image_popup();
	};
	NioApp.components.docReady.push(NioApp.Plugins.popup);

    // particlesJS !Plugin @v1.0
	NioApp.Plugins.particles = function () {
        var $particles_bg = $('.particles-bg');
        if ($particles_bg.exists()) {
            $particles_bg.each(function(){
                var $self = $(this), $self_id = $self.attr('id'),
                    _pt_base        = ($self.data('pt-base')) ? $self.data('pt-base') : '#fff',
                    _pt_base_op     = ($self.data('pt-base-op')) ? parseFloat($self.data('pt-base-op')) : 0.10,
                    _pt_shape       = ($self.data('pt-shape')) ? $self.data('pt-shape') : '#fff',
                    _pt_shape_op    = ($self.data('pt-shape-op')) ? parseFloat($self.data('pt-shape-op')) : 0.10,
                    _pt_line        = ($self.data('pt-line')) ? $self.data('pt-line') : '#fff',
                    _pt_line_op     = ($self.data('pt-line-op')) ? parseFloat($self.data('pt-line-op')) : 0.20;

                particlesJS($self_id, {
                "particles": {
                    "number": {
                        "value": 30,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": _pt_base,
                    },
                    "shape": {
                        "type": "circle",
                        "opacity": _pt_shape_op,
                        "stroke": {
                            "width": 0,
                            "color": _pt_shape,
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": _pt_base_op,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.12,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 6,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.08,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": _pt_line,
                        "opacity": _pt_line_op,
                        "width": 1.3
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                        "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                    "retina_detect": true
                }
                // Stop here.
              );
            });
        }
	};
	NioApp.components.docReady.push(NioApp.Plugins.particles);

    NioApp.Plugins.videoBG = function () {
		var $videobg = $(".bg-video");

		if($videobg.exists()) {
			$videobg.each(function(){
				var $this = $(this), $that = $this.parent(), overlay = $this.data('overlay'), opacity = $this.data('opacity'),  video = $this.data('video'), cover = $this.data('cover'),
                    overlay_type = (typeof overlay!=='undefined' && overlay) ? overlay : false, opacity_value = (typeof opacity!=='undefined' && opacity) ? opacity : false, cover_value = (typeof cover!=='undefined' && cover) ? cover : false;

                if (!$that.hasClass('has-bg-video')) {
                    $that.addClass('has-bg-video');
                }

                if ( overlay_type ) {
                    if (!$this.hasClass('overlay-'+overlay_type)) {
                        $this.addClass('overlay');
                        $this.addClass('overlay-'+overlay_type);
                    }
                } else {
                    if (!$this.hasClass('overlay-fall')) {
                        $this.addClass('overlay-fall');
                    }
                }
                if ( opacity_value ) {
                    $this.addClass('overlay-opacity-'+opacity_value);
                }

                if ( cover_value && NioApp.Win.width < _mobBreak) {
                    $this.addClass('cover-enabled')
                    $this.append('<div class="bg-video-cover" style="background-image:url('+ cover_value +')"></div>');
                }

                if ($this.hasClass('bg-video-youtube') && !$this.hasClass('cover-enabled')){
                    $this.YTPlayer({
                        fitToBackground: true,
                        videoId: video,
                        callback: function() {
                            console.clear();
                        }
                    });
                }
			});
		}
	};
	NioApp.components.docReady.push(NioApp.Plugins.videoBG);
    $win.on('resize', function(){
        NioApp.components.docReady.push(NioApp.Plugins.videoBG);
    });

    // Data Tables @v100
    NioApp.Plugins.dataTable = function () {
		var $dt_filter = $('.dt-filter-init');

		if($dt_filter.exists()) {
			var dt_filter = $dt_filter.DataTable({
                "ordering": true,
                "autoWidth": false,
                "dom":"<'row'<'col-sm-6 col-mb-6'f><'col-sm-6'<'dt-short'>>><'table-wrap't>",
                "language": {
                    "search": '<em class="ti ti-search"></em>',
                    "searchPlaceholder": "Search"
                },
            });
            var $dt_shorter = $('.dt-shorter');
            $dt_shorter.on('change', function(){
                var _thisval = $(this).val();
                dt_filter.columns('.'+_thisval).order('asc').draw();
            });
		}
	};
	NioApp.components.docReady.push(NioApp.Plugins.dataTable);


	return NioApp;
}(NioApp, jQuery, window, document);
/* END @iO */
