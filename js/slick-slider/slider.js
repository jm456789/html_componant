$(document).ready(function(){        

      /*    1    */ 
              
      $('.single-item').slick({
        dots: true, //아래 현재 페이지
        infinite: true, //무한대, 계속 넘기느냐
        //arrows: false, //양 옆 화살표 버튼 나타내지 않음, 없으면 기본으로 나타남        
      });
        
        
      /*    1-1   */
      $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true, //fade-in, fade-out
        cssEase: 'linear',
        arrows: false, //양 옆 화살표 버튼 나타내지 않음, 없으면 기본으로 나타남
      });
        
      /*    1-2    */
      $('.vertical').slick({
        dots: true, 
        infinite: true,
        vertical:true, //이미지 세로방향으로 넘기기
      });    
        
      /*    1-3    */          
        
      //총 페이지 중 현재 페이지 나타냄   
      var $status = $('.pagingInfo');
      var $slickElement = $('.dots_text'); //안에 클래스 슬라이드와 맞춰줘야 함!!!!!!!!
      $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + '/' + slick.slideCount);
      });
              
      $('.dots_text').slick({
        dots: true, //아래 현재 페이지
        infinite: true, //무한대, 계속 넘기느냐
        customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
        }, //아래랑 같이 dots를 title의 text로 나타냄
        dotsClass: 'slider-dots'  //위랑 같이 dots를 title의 text로 나타냄                
      });
    
      /*    2    */
      $('.multiple-items').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3, //화면에 3개씩 나타냄
        slidesToScroll: 3, //옆으로 넘기는 버튼 누르면 3개씩 넘어감
        responsive: [ 
            { /* 반응형웹*/ 
                breakpoint: 960, /* 기준화면사이즈 */ 
                settings: {slidesToShow:2 } /* 사이즈에 적용될 설정 */ 
            }, 
            { /* 반응형웹*/ 
                breakpoint: 768, /* 기준화면사이즈 */ 
                settings: {slidesToShow:1 } /* 사이즈에 적용될 설정 */ 
            } 
        ]
      });
        
      /*    2-1    */
      $('.multiple-items-4').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
      });
        
      /*    2-2    */
      $('.autoplay').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, //자동으로 넘어가는 슬라이드 (slidesToScroll:1로 줘서 하나씩)
        autoplaySpeed: 2000, //다음 이미지로 넘어갈 시간
        pauseOnHover:true, //마우스 호버 시 슬라이드 이동 멈춤
      });
      $('.pause').click(function() {
          $('.autoplay').slick('slickPause'); //클릭시 슬라이드 멈춤
      });
      $('.play').click(function() {
            $('.autoplay').slick('slickPlay'); //클릭시 슬라이드 재생
      });
        
      $('.buttons-2 .pause').click(function() {
          $('.autoplay').slick('slickPause'); //클릭시 슬라이드 멈춤
          $('.buttons-2 .pause').hide();
          $('.buttons-2 .play').show().focus();
      });
      $('.buttons-2 .play').click(function() {
          $('.autoplay').slick('slickPlay'); //클릭시 슬라이드 재생
          $('.buttons-2 .pause').show().focus();
          $('.buttons-2 .play').hide();
      });
        
      /*    3   */
      $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300, //다음 이미지로 넘겨질 때 걸리는 시간
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
      });
      
      /*    4, 4-1   */
      $('.center').slick({
          dots: true,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 3, 
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
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
        
      /*    5   */    
      $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          //dots: true,
          centerMode: true,
          focusOnSelect: true,
      });
        
        $('.slider-five').slick({
          dots:true,
          prevArrow: '<a class="slick-prev" href="#"><i data-icon="ei-arrow-left" data-size="m"></i></a>',
          nextArrow: '<a class="slick-next" href="#"><i data-icon="ei-arrow-right" data-size="m"></i></a>',
          customPaging: function(slick,index) {
                            var targetImage = slick.$slides.eq(index).find('img').attr('src');
                            return '<img src=" ' + targetImage + ' "/>';
                        }
        });
        
      /*    6   */    
      $(".slick-ani").slick({  
           infinite: true , 
           slidesToShow: 1, 
           slidesToScroll: 1,
           autoplay: true, 
           arrows:true,
           dots:true, 
           autoplaySpeed:5000,
           speed:1000 , 
           pauseOnHover:true,
      });
      $(".slick-ani").on('afterChange',function(){
            $(".pro-bar").addClass('pro-ani');
      });
      $(".slick-ani").on('beforeChange',function(){
            $(".pro-bar").removeClass('pro-ani');
      });
        
    /* 7 */
    var $bannerControl = $('.btn_control').children('.buttons-3'),
    $bannerControlNext = $bannerControl.children('.slick-next'),
    $bannerControlPrev = $bannerControl.children('.slick-prev'),
    $bannerControlPause = $bannerControl.children('.pause'),
    $bannerControlPlay = $bannerControl.children('.play');

    $('.separation-btn').slick({
        slidesToShow : 1,
        autoplay: true, //자동으로 넘어가는 슬라이드 (slidesToScroll:1로 줘서 하나씩)
        autoplaySpeed: 5000, //다음 이미지로 넘어갈 시간
        dots: true, //아래 현재 페이지
        infinite: true, //무한대, 계속 넘기느냐
        customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
        }, //아래랑 같이 dots를 title의 text로 나타냄
        dotsClass: 'slider-dots',  //위랑 같이 dots를 title의 text로 나타냄
        slidesToScroll: 1,                
        prevArrow : $bannerControlPrev,
        nextArrow : $bannerControlNext,
    });
    $('.buttons-3 .pause').click(function() {
        $('.separation-btn').slick('slickPause'); //클릭시 슬라이드 멈춤
        $('.buttons-3 .pause').hide();
        $('.buttons-3 .play').show().focus();
    });
    $('.buttons-3 .play').click(function() {
        $('.separation-btn').slick('slickPlay'); //클릭시 슬라이드 재생
        $('.buttons-3 .pause').show().focus();
        $('.buttons-3 .play').hide();
    });
    
    /* 8 */
   /* $('.mp-carousel') 
      .on('init', () => {
        $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
        $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
        $('.slick-slide[data-slick-index="1"]').addClass('gt1');
        $('.slick-slide[data-slick-index="2"]').addClass('gt2');
    })
      .slick({
      centerMode: true,
      centerPadding: 0,
      slidesToShow: 3,
      dots:true,
      focusOnSelect:true,
    }).on('beforeChange', (event, slick, current, next) => {
      $('.slick-slide.gt2').removeClass('gt2');
      $('.slick-slide.gt1').removeClass('gt1');
      $('.slick-slide.lt1').removeClass('lt1');
      $('.slick-slide.lt2').removeClass('lt2');

      const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
      const lt1 = (current < next && current > 0) ? current : next - 1;
      const gt1 = (current < next || next === 0) ? next + 1 : current;
      const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

      $(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
      $(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
      $(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
      $(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

      // Clone processing when moving from 5 to 0
      if (current === 5 && next === 0) {
        $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
        $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
        $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
        $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
      }

      // Clone processing when moving from 0 to 5
      if (current === 0 && next === 5) {
        $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
        $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
        $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
        $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
      }

      console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
    });*/
    
    var layerdSlider = $(".layerd-slider");

	layerdSlider.slick({
		//variableWidth: true,
		//centerPadding: '10%',
		centerPadding: '0',
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		focusOnSelect: true,
		infinite: true,
		speed: 300,
		responsive: [
			{
				breakpoint: 1140,
				settings: {
					centerPadding: '7%',
				}
			},
			{
		        breakpoint: 1025, 
		        settings: {
		          centerPadding: '0',
		          centerMode: true,
		          slidesToShow: 1,
		          arrows: false,
		          dots: true,
				  //dotsClass : 'slick-dots video-dots'
		        }
		    }
		]
	});
    
    
    /* 9 */
    var $bannerControl2 = $('.btn_control2').children('.buttons-4'),
    $bannerControlNext2 = $bannerControl2.children('.slick-next'),
    $bannerControlPrev2 = $bannerControl2.children('.slick-prev'),
    $bannerControlPause2 = $bannerControl2.children('.pause'),
    $bannerControlPlay2 = $bannerControl2.children('.play');

    $('.separation-btn2').slick({
        slidesToShow : 1,
        autoplay: true, //자동으로 넘어가는 슬라이드 (slidesToScroll:1로 줘서 하나씩)
        autoplaySpeed: 5000, //다음 이미지로 넘어갈 시간
        dots: true, //아래 현재 페이지
        infinite: true, //무한대, 계속 넘기느냐
        customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
        }, //아래랑 같이 dots를 title의 text로 나타냄
        dotsClass: 'slider-dots',  //위랑 같이 dots를 title의 text로 나타냄
        slidesToScroll: 1,                
        prevArrow : $bannerControlPrev2,
        nextArrow : $bannerControlNext2,
    });
    $('.buttons-4 .pause').click(function() {
        $('.separation-btn2').slick('slickPause'); //클릭시 슬라이드 멈춤
        $('.buttons-4 .pause').hide();
        $('.buttons-4 .play').show().focus();
    });
    $('.buttons-4 .play').click(function() {
        $('.separation-btn2').slick('slickPlay'); //클릭시 슬라이드 재생
        $('.buttons-4 .pause').show().focus();
        $('.buttons-4 .play').hide();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* 슬라이더 해제 - 해보진 않음... 혹시나 나중에 헤맬까봐 */
    //슬릭이 진행중인지 css로 체크
    if( $('.multiple-items').hasClass('slick-initialized') ){
      $('.multiple-items').slick('unslick');//슬릭해제
    }else{
      $('.multiple-items').slick(slickInfoObj);
    }

    
    
    
        
});


