$(document).ready(function(){        

    /* 1 */              
    var swiper = new Swiper('.basic', {
        navigation: {
            nextEl: '.btn_basic_next',
            prevEl: '.btn_basic_prev',
          },
          pagination: {
            el: '.basic_pagination',
            clickable: true,
          },
    });
    
    /* 2 */
    var swiper = new Swiper('.progress_slider', {
      pagination: {
        el: '.pro_pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.btn_pro_next',
        prevEl: '.btn_pro_prev',
      },
    });
    
    /* 3 */
    var swiper = new Swiper('.pageinfo', {
      pagination: {
        el: '.pageinfo_pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.btn_pageinfo_next',
        prevEl: '.btn_pageinfo_prev',
      },
    });
    
    /* 4 */
    var swiper = new Swiper('.custom_page', {
      pagination: {
        el: '.custom_page_pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
    
    /* 5 */
    var swiper = new Swiper('.scrollbar', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    });
    
    /* 6 */
    var swiper = new Swiper('.vertical', {
      direction: 'vertical',
      pagination: {
        el: '.vertical_pagination',
        clickable: true,
      },
    });
    
    /* 7 */
    var swiper = new Swiper('.space', {
      spaceBetween: 30,
      pagination: {
        el: '.space_pagination',
        clickable: true,
      },
    });
    
    /* 8 */
    var swiper = new Swiper('.multiple', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.multiple_pagination',
        clickable: true,
      },
    });
    
    /* 9 */
    var swiper = new Swiper('.width_auto', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.width_auto_pagination',
        clickable: true,
      },
    });
    
    /* 10 */
    var swiper = new Swiper('.centered', {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.centered_pagination',
        clickable: true,
      },
    });
    
    /* 11 */
    var swiper = new Swiper('.c_width_auto', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.c_width_auto_pagination',
        clickable: true,
      },
    });
    
    /* 12 */
    var swiper = new Swiper('.free', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.free_pagination',
        clickable: true,
      },
    });
    
    /* 13 */
    var swiper = new Swiper('.multi_row', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: '.multi_row_pagination',
        clickable: true,
      },
    });
    
    /* 14 */
    var swiperH = new Swiper('.swiper-container-h', {
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
      },
    });
    var swiperV = new Swiper('.swiper-container-v', {
      direction: 'vertical',
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
      },
    });
    
    /* 15 */
    var swiper = new Swiper('.infinite', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.infinite_pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.btn_infinite_next',
        prevEl: '.btn_infinite_prev',
      },
    });
    
    /* 16 */
    var swiper = new Swiper('.mul_slider_group', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.mul_slider_group_pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.btn_mul_slider_group_next',
        prevEl: '.btn_mul_slider_group_prev',
      },
    });
    
    /* 17 */
    var swiper = new Swiper('.fade', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.fade_pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.btn_fade_next',
        prevEl: '.btn_fade_prev',
      },
    });
    
    /* 18 */
    var swiper = new Swiper('.cube', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.cube_pagination',
      },
    });
    
    /* 19 */
    var swiper = new Swiper('.coverflow', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.coverflow_pagination',
      },
    });
    
    /* 20 */
    var swiper = new Swiper('.flip', {
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.flip_pagination',
      },
      navigation: {
        nextEl: '.btn_flip_next',
        prevEl: '.btn_flip_prev',
      },
    });
    
    /* 21 */
    var swiper = new Swiper('.keyboard', {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.keyboard_pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.btn_keyboard_next',
        prevEl: '.btn_keyboard_prev',
      },
    });
    
    /* 22 */
    var swiper = new Swiper('.auto', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.auto_pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.btn_auto_next',
        prevEl: '.btn_auto_prev',
      },
    });
    
    /* 23 */
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.btn_gallery_next',
        prevEl: '.btn_gallery_prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
    
    /* 24 */
    var swiper = new Swiper('.parallax', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.parallax_pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.btn_parallax_next',
        prevEl: '.btn_parallax_prev',
      },
    });
    
    /* 25 */
    var swiper = new Swiper('.responsive', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.responsive_pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }
    });
    
    /* 26 */
    var swiper = new Swiper('.auto_h', {
      autoHeight: true, //enable auto height
      spaceBetween: 20,
      pagination: {
        el: '.auto_h_pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.btn_auto_h_next',
        prevEl: '.btn_auto_h_prev',
      },
    });
    
    /* 27 */              
    var swiper = new Swiper('.test', {
        loop: true,
        navigation: {
            nextEl: '.btn_test_next',
            prevEl: '.btn_test_prev',
          },
          pagination: {
            el: '.test_pagination',
            clickable: true,
          },
    });
    var swiper = new Swiper('.test2', {
        loop: true,
        navigation: {
            nextEl: '.btn_test2_next',
            prevEl: '.btn_test2_prev',
          },
          pagination: {
            el: '.test2_pagination',
            clickable: true,
          },
    });
    var swiper = new Swiper('.test3', {
        loop: true,
        navigation: {
            nextEl: '.btn_test3_next',
            prevEl: '.btn_test3_prev',
          },
          pagination: {
            el: '.test3_pagination',
            clickable: true,
          },
    });
    
    $(".menu > li > div").hide();
    $(".menu > li:first-child > div").show();
    $(".menu > li > button").click(function(){
       $(".menu > li > div").hide();
       $(this).parent().find("div").show();
    });
    
    /* 28 */
    var swiper = new Swiper('.custom', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
    });
    
    /* 29 */
    var swiper = new Swiper('.custom2', {
      slidesPerView: 6,
      spaceBetween: 30,
    });
    
});