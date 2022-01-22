(function ($) {
  $(document).ready(function () {
    "use strict";


    // SPLITTING
    if (data.enable_text_split_effect == true) {
      Splitting();
    }


    // BG CHANGER
    $('.change-background').on('mouseover', '.interactive-text', function () {
      var background = "url('" + $(this).attr('data-background') + "')";
      $('.change-background').css('background-image', background)
    });


    // TESTIMONIALS
    new Swiper('.testimonials-slider', {
      slidesPerView: '1',
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


    // SLIDER
    var carouselslider = new Swiper('.carousel-slider', {
      spaceBetween: 0,
      slidesPerView: 3,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      loop: true,
      breakpoints: {
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 1
        },
        320: {
          slidesPerView: 1
        }
      }
    });


    // FOOTER HEIGHT CALCULATION	
    if ($("body").hasClass("footer-fixed")) {
      $('main').css({
        'margin-bottom': $('.footer').innerHeight()
      });
    }


    // ICON CONTENT BLOCK
    $('.wpb_wrapper .icon-content-block').mouseenter(function () {
      $('.selected').removeClass('selected').addClass('icon-content-block');
      $(this).removeClass('.wpb_wrapper icon-content-block').addClass('selected');
    });

    // HAMBURGER MENU
    $('.hamburger').on('click', function (e) {
      if ($(".site-navigation").hasClass("active")) {
        $("body").toggleClass("overflow");
        $(".site-navigation").removeClass("active");
        $(".site-navigation").css("transition-delay", "0.7s");
        $(".site-navigation .layer").css("transition-delay", "0.3s");
        $(".site-navigation .inner").css("transition-delay", "0s");
      } else {
        $(".site-navigation").addClass('active');
        $("body").toggleClass("overflow");
        $(".site-navigation.active").css("transition-delay", "0s");
        $(".site-navigation.active .layer").css("transition-delay", "0.4s");
        $(".site-navigation.active .inner").css("transition-delay", "0.7s");
      }
      $(this).toggleClass("is-opened-navi");
    });


    // ALL CASES
    $('.all-cases-link b').on('click', function (e) {
      if ($(".all-cases").hasClass("active")) {
        $("body").toggleClass("overflow");
        $(".all-cases").removeClass("active");
        $(".all-cases").css("transition-delay", "0.7s");
        $(".all-cases .layer").css("transition-delay", "0.3s");
        $(".all-cases .inner").css("transition-delay", "0s");
      } else {
        $(".all-cases").addClass('active');
        $("body").toggleClass("overflow");
        $(".all-cases.active").css("transition-delay", "0s");
        $(".all-cases.active .layer").css("transition-delay", "0.4s");
        $(".all-cases.active .inner").css("transition-delay", "0.7s");
      }
      $(".all-cases-link b").toggleClass("closed");
    });


    // HAMBURGER MENU
    $('.menu-container li.dropdown i').on('click', function (e) {
      $(this).parent().children('.menu-container li ul').toggle();
      return true;
    });


    // CONTENT SLIDER
    var swiper = new Swiper('.content-slider', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: '.content-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }
    });


    // SLIDER
    var mainslider = new Swiper('.gallery-top', {
      spaceBetween: 0,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      loop: true,
      loopedSlides: 3,
      thumbs: {
        swiper: sliderthumbs
      }
    });
    $('.slider .slide-progress span.total-slides').text(swiper.activeIndex);


    // SLIDER THUMBS
    var sliderthumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 3,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 3,
      breakpoints: {
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 1
        },
        320: {
          slidesPerView: 1
        }
      }
    });

    if ($(".gallery-top")[0]) {
      mainslider.controller.control = sliderthumbs;
      sliderthumbs.controller.control = mainslider;
    } else {

    }


    // SCROLL DOWN
    $(".scrolldown a").on('click', function (e) {
      $('html, body').animate({
        scrollTop: $(".content-section").offset().top
      }, 500);
    });


    // PARALLAX
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 0,
      responsive: true
    });


    // PAGE TRANSITION
    $('body a').on('click', function (e) {
      if ($('body').hasClass('no-preloader')) {

      } else {
        var target = $(this).attr('target');
        var fancybox = $(this).data('fancybox');
        var url = this.getAttribute("href");
        if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


          e.preventDefault();
          var url = this.getAttribute("href");
          if (url.indexOf('#') != -1) {
            var hash = url.substring(url.indexOf('#'));


            if ($('body ' + hash).length != 0) {
              $('.page-transition').removeClass("active");


            }
          } else {
            $('.page-transition').toggleClass("active");
            setTimeout(function () {
              window.location = url;
            }, 1300);

          }
        }
      }
    });


    // DATA BACKGROUND IMAGE
    var pageSection = $("*");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
    });


    /* MAGNET CURSOR*/
    var cerchio = document.querySelectorAll('.magnet-link');
    cerchio.forEach(function (elem) {
      $(document).on('mousemove touch', function (e) {
        magnetize(elem, e);
      });
    })

    function magnetize(el, e) {
      var mX = e.pageX,
        mY = e.pageY;
      const item = $(el);

      const customDist = item.data('dist') * 20 || 80;
      const centerX = item.offset().left + (item.width() / 2);
      const centerY = item.offset().top + (item.height() / 2);

      var deltaX = Math.floor((centerX - mX)) * -0.35;
      var deltaY = Math.floor((centerY - mY)) * -0.35;

      var distance = calculateDistance(item, mX, mY);

      if (distance < customDist) {
        TweenMax.to(item, 0.5, {
          y: deltaY,
          x: deltaX,
          scale: 1
        });
        item.addClass('magnet');
      } else {
        TweenMax.to(item, 0.6, {
          y: 0,
          x: 0,
          scale: 1
        });
        item.removeClass('magnet');
      }
    }

    function calculateDistance(elem, mouseX, mouseY) {
      return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
    }

    function lerp(a, b, n) {
      return (1 - n) * a + n * b
    }

    // Inizio Cursor
    class Cursor {
      constructor() {
        this.bind()
        //seleziono la classe del cursore
        this.cursor = document.querySelector('.js-cursor')

        this.mouseCurrent = {
          x: 0,
          y: 0
        }

        this.mouseLast = {
          x: this.mouseCurrent.x,
          y: this.mouseCurrent.y
        }

        this.rAF = undefined
      }

      bind() {
        ['getMousePosition', 'run'].forEach((fn) => this[fn] = this[fn].bind(this))
      }

      getMousePosition(e) {
        this.mouseCurrent = {
          x: e.clientX,
          y: e.clientY
        }
      }

      run() {
        this.mouseLast.x = lerp(this.mouseLast.x, this.mouseCurrent.x, 0.2)
        this.mouseLast.y = lerp(this.mouseLast.y, this.mouseCurrent.y, 0.2)

        this.mouseLast.x = Math.floor(this.mouseLast.x * 100) / 100
        this.mouseLast.y = Math.floor(this.mouseLast.y * 100) / 100

        this.cursor.style.transform = `translate3d(${this.mouseLast.x}px, ${this.mouseLast.y}px, 0)`

        this.rAF = requestAnimationFrame(this.run)
      }

      requestAnimationFrame() {
        this.rAF = requestAnimationFrame(this.run)
      }

      addEvents() {
        window.addEventListener('mousemove', this.getMousePosition, false)
      }

      on() {
        this.addEvents()

        this.requestAnimationFrame()
      }

      init() {
        this.on()
      }
    }

    if ($('.js-cursor').length > 0) {
      const cursor = new Cursor()

      cursor.init();


      $('a, .sandwich, .equalizer, .swiper-pagination-bullet, .swiper-button-prev, .swiper-button-next, .main-nav').hover(function () {
        $('.cursor').toggleClass('light');
      });

    }


  });
  // END JQUERY	


  // MASONRY
  function masonry_init() {
    $('.masonry').masonry({
      itemSelector: '.masonry-grid',
      columnWidth: '.masonry-grid',
      percentPosition: true
    });
  }

  window.onload = masonry_init;


  // EQUALIZER TOGGLE
  if (data.enable_sound_bar == true) {
    var source = data.audio_source;
    var audio = new Audio(); // use the constructor in JavaScript, just easier that way
    audio.addEventListener("load", function () {
      audio.play();
    }, true);
    audio.src = source;
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.2;

    $('.equalizer').click();
    var playing = true;
    $('.equalizer').on('click', function (e) {
      if (playing == false) {
        audio.play();
        playing = true;

      } else {
        audio.pause();
        playing = false;
      }
    });
  }


  // EQUALIZER
  function randomBetween(range) {
    var min = range[0],
      max = range[1];
    if (min < 0) {
      return min + Math.random() * (Math.abs(min) + max);
    } else {
      return min + Math.random() * max;
    }
  }

  $.fn.equalizerAnimation = function (speed, barsHeight) {
    var $equalizer = $(this);
    setInterval(function () {
      $equalizer.find('span').each(function (i) {
        $(this).css({
          height: randomBetween(barsHeight[i]) + 'px'
        });
      });
    }, speed);
    $equalizer.on('click', function () {
      $equalizer.toggleClass('paused');

    });
  }

  var barsHeight = [
    [2, 13],
    [5, 22],
    [17, 8],
    [4, 18],
    [11, 3]
  ];
  $('.equalizer').equalizerAnimation(180, barsHeight);

  // COUNTER
  $(document).scroll(function () {
    $('.odometer').each(function () {
      var parent_section_postion = $(this).closest('section').position();
      var parent_section_top = parent_section_postion.top;
      if ($(document).scrollTop() > parent_section_top - 300) {
        if ($(this).data('status') == 'yes') {
          $(this).html($(this).data('count'));
          $(this).data('status', 'no')
        }
      }
    });
  });


  // WOW ANIMATION 
  wow = new WOW({
    animateClass: 'animated',
    offset: 50
  });
  wow.init();


  // PRELOADER
  $(window).load(function () {
    if ($('body').hasClass('no-preloader')) {

    } else {
      $("body").addClass("page-loaded");
    }
  });

})(jQuery);
