$(document).ready(function () {
    
    /* 1 */
    $(".accordion1 > ul > li > a").click(function(){
        $(".accordion1 > ul > li").removeClass("on");
        $(this).parent().addClass("on");
        return false;
    });
    
    /* 1-2 */
	$('.tab_cont').hide();
	$('.tab_cont:eq(0)').show();
	$(".tab_view").on("click", "button", function(){
		$(this).parents('.tab_view').find('button').removeClass('on');
		$(this).addClass('on');

		var tab_type = $(this).parents('.tab_view').find('li').length; //ul 타입인지 확인 
		if ($(tab_type).length > 0 ){ // ul 타입일때 
			var tab_num = $(this).parent().index() + 1;
			$('.tab_cont').hide();
			$('.tab_cont'+ tab_num ).show();
		} else { // inline 타입일때 
			var tab_num = $(this).index()+1;
			$('.tab_cont').hide();
			$('.tab_cont'+ tab_num ).show();
		}
		return false;
	});
    
    /* 2 */
    $(".accordion2 > ul > li > a").click(function(){
        var menu_open = $(this).parent().hasClass("on");

        if(menu_open == true){
            $(".accordion2 > ul > li").removeClass("on");
        }else{
            $(".accordion2 > ul > li").removeClass("on");
            $(this).parent().addClass("on");
        }
        return false;
    });
    
    /* 3  */
    $(".accordion3 > ul > li > a").click(function(){       
       $(this).parent().children("ul").stop().slideToggle();
       $(".accordion3 > ul > li > a").not(this).parent().children("ul").stop().slideUp("fast");
       //$(this).parent().addClass("on");
       //$(".accordion2 > ul > li > a").not(this).parent().removeClass("on");
       return false;
   });
   
    
    /*  4 */
    $(".accordion4 ul ul").hide();
    $(".accordion4 > ul > li > a" ).click(function() {
        
        var menu_open = $(this).parent().hasClass("test");

        if(menu_open == true){
            $(".accordion4 > ul > li").removeClass("test");		
            $(".accordion4 ul ul").stop().slideUp();
        }else{
            $(".accordion4 > ul > li").removeClass("test");
            $(".accordion4 ul ul").stop().slideUp();
            $(this).parent().addClass("test");
            $(this).next().stop().slideDown();
        }
         
        return false;
        
    });
    
    
    
    
    
    
});
