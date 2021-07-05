//로케이션 스크립트

$(document).ready(function () {
    
    /*   left_menu    */
    $(".accordion3 ul ul").hide();
   $(".left_menu > li > a").click(function(){ 
       $(this).parent().children("ul").slideToggle();
       $(".left_menu > li > a").not(this).parent().children("ul").slideUp();
       $(this).parent().addClass("show");
       $(".left_menu > li > a").not(this).parent().removeClass("show"); 
       $(this).addClass("on");
       $(".left_menu > li > a").not(this).removeClass("on");       
   });
    
    /*  left_menu 이미지 추가  */
    $(".left_menu > li").children("ul").parent().addClass("plus");    
    /* 하위메뉴 있을 시 클릭 금지 */
    $(".plus > a").click(function(){ 
        return false;
    });
    
    
    /*//navi 스크롤 기존에 있던거.. 식품안전정보원에서 쓰임. 박차장님이 쓰셨던거
        var	scrolling = false;
        var contentSections = $('.comp_cont'),
            verticalNavigation = $('.navi'),
            navigationItems = verticalNavigation.find('a'),
            navTrigger = $('.cd-nav-trigger'),
            scrollArrow = $('.cd-scroll-down');

        $(window).on('scroll', checkScroll);

        //smooth scroll to the selected section
        verticalNavigation.on('click', 'a', function(event){
            event.preventDefault();
            smoothScroll($(this.hash));
            verticalNavigation.removeClass('open');
        });

        //smooth scroll to the second section
        scrollArrow.on('click', function(event){
            event.preventDefault();
            smoothScroll($(this.hash));
        });

        // open navigation if user clicks the .cd-nav-trigger - small devices only
        navTrigger.on('click', function(event){
            event.preventDefault();
            verticalNavigation.toggleClass('open');
        });

        function checkScroll() {
            if( !scrolling ) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
            }
        }
        
        function updateSections() {
            var halfWindowHeight = $(window).height()/2,
                scrollTop = $(window).scrollTop();
            contentSections.each(function(){
                var section = $(this),
                    sectionId = section.attr('id'),
                    navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
                ( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
                    ? navigationItem.addClass('on')
                    : navigationItem.removeClass('on');
                    
            });
            scrolling = false;
        }

        function smoothScroll(target) {
            $('body,html').animate(
                {'scrollTop':target.offset().top},
                300
            );
        }*/
    
    
    //navi
    (function (global, $) {

        var $menu     = $('.navi li'),
            $contents = $('.comp_cont'),
            $doc      = $('html, body');
        $(function () {

            $menu.on('click','a', function(e){
                var $target = $(this).parent(),
                    idx     = $target.index(),
                    section = $contents.eq(idx),
                    offsetTop = section.offset().top;
                $doc.stop()
                        .animate({
                            scrollTop :offsetTop
                        }, 500);
                return false;
            });
        });

        $(window).scroll(function(){

            var scltop = $(window).scrollTop();

            $.each($contents, function(idx, item){
                var $target   = $contents.eq(idx),
                    i         = $target.index(),
                    targetTop = $target.offset().top;

                if (targetTop <= scltop) {
                    $menu.removeClass('on');
                    $menu.eq(idx).addClass('on');
                }
                /*if (!(200 <= scltop)) {
                    $menu.removeClass('on');
                }*/
            })

        });

        var btnTop = $('.btn-top');
        btnTop.on('click','a', function(e){
            e.preventDefault();
            $doc.stop()
                    .animate({
                        scrollTop : 0
                    },500)
        });

    }(window, window.jQuery));
        
});


