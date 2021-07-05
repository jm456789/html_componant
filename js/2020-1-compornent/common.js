$(document).ready(function () {
    
    /*  데이터피커   */
     $( ".datepicker" ).datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        showMonthAfterYear: true,
        changeMonth: true,
        changeYear: true,
    });
    
    /*  전체체크    */
    $( ".check_all" ).click( function() {
        $( ".ab" ).prop( 'checked', this.checked );
    } );
    
    /*  아코디언    */
    $( ".faq_box button" ).click(function() {
        var menu_open = $(this).parent().hasClass("on");

        if(menu_open == true){
            $(".faq_box li").removeClass("on");		
            $(".faq_box .s_h").hide();
        }else{
            $(".faq_box li").removeClass("on");
            $(".faq_box .s_h").hide();
            $(this).parent().addClass("on");
            $(this).next().show();
        }
    });
    
    // 브레드 크럼
    (function(){        
        var $breadcrumbWrap = $('.nav > ul > li'),
            $breadcrumbList = $('.nav_view_list'),
            $breadcrumbAnchor = $('.nav_view'),
            breadcrumbBool  = false;
        function resetBreadcrumb(){
            $breadcrumbList.removeClass('active');
            $(document).off();
            breadcrumbBool = false;
        };
        function documentEvent(){
            $(document).on({
                'click' : function(e){
                    resetBreadcrumb();
                },
                'scroll' : function(e){
                    resetBreadcrumb();
                }
            });
        };
        $breadcrumbAnchor.on('click', function(e){
            var _this = $(this),
                $breadcrumbWrap = _this.closest('.nav > ul > li'),
                $breadcrumbList = _this.next('.nav_view_list');
            if($breadcrumbWrap.length !== 0){
                //있다
                $breadcrumbWrap.siblings().find('.nav_view_list').removeClass('active');
                breadcrumbBool = false;
            }else{
                //없다
                return;
            }
            if(!breadcrumbBool){
                if($breadcrumbList.hasClass('active')){
                    resetBreadcrumb();
                    documentEvent();
                }else{
                    e.stopPropagation();
                    $breadcrumbList.addClass('active');
                    breadcrumbBool = true;
                    documentEvent();
                }
            }else{
                resetBreadcrumb();
                documentEvent();
            }
            return false
        });
    })();
    
});
