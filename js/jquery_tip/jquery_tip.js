$(document).ready(function(){  
    
    /* 1 */
    $("#che1").click(function(){
        
        if($("#che1").prop("checked")){
            $("input[name=checkbox]").prop("checked",true);
        }else{
            $("input[name=checkbox]").prop("checked",false);
        }
    })
    
    /* 2 */
    $("#che2_1").click(function(){
        $(".ab").prop("checked",this.checked);
    })
    
    /* 3 */
    $(".menu_add > li").children("ul").parent().addClass("on");
    
    /* 4 */
    $("#che4").change(function(){
        if($(this).is(":checked")){
            $("body").addClass("on_checked");
        }else{
            $("body").removeClass("on_checked");
        }
    })

    /* 5 */
    $(".radio_cont2").hide();
    $(".radio_cont3").hide();
    
    $("input[name=radio]").click(function(){
        if($("#ra1").prop("checked")){
            $(".radio_cont1").css("display","block");
            $(".radio_cont2").css("display","none");
            $(".radio_cont3").css("display","none");
        }else if($("#ra2").prop("checked")){
            $(".radio_cont1").css("display","none");
            $(".radio_cont2").css("display","block");
            $(".radio_cont3").css("display","none");
        }else{
            $(".radio_cont1").css("display","none");
            $(".radio_cont2").css("display","none");
            $(".radio_cont3").css("display","block");
        }
    })
    
    /* 6 */
    function tree_menu() {
        // $('.depth_2');
        $('ul.depth_2 >li > a').click(function(e) {

            var temp_el = $(this).next('ul');
            var depth_3 = $('.depth_3');

            // 처음에 모두 슬라이드 업 시켜준다.
            depth_3.slideUp(300);
            // 클릭한 순간 모두 on(-)을 제거한다.// +가 나오도록
            depth_3.parent().find('em').removeClass('on');

            if (temp_el.is(':hidden')) {
                temp_el.slideDown(300);
                $(this).find('em').addClass('on').html('하위폴더 열림');
            } else {
                temp_el.slideUp(300);
                $(this).find('em').removeClass('on').html('하위폴더 닫힘');
            }

            return false;

        });
        
    }
    
    if ($('#tree_menu').is(':visible')) {
        tree_menu();
    }
    
    /* 7 */
    if(typeof ('.fishbone_wrap') !== "undifined"){
		var maxHeight = 0;
		for(i=0;i<$(".fishbone_wrap > ol> li > p").length;i++){
			if($(".fishbone_wrap > ol> li > p").eq(i)){
				var currentHeight = $(".fishbone_wrap > ol> li > p").eq(i).height();
				if(currentHeight>=maxHeight){
					maxHeight = currentHeight;
				}
			}
			else{
			 break;
			}
		}
		$(".fishbone_wrap > ol> li > p").height(maxHeight);
	}
    
    /* 8 */
    $('.btn_evalu_text button').click(function(e){
		$(this).next().toggle();
	});
    
    /* 9 */
    
    /* 생선뼈 원인선택 */
	$(".cause_btn > button").on("click", function(){
		$('.cause_list').show(300);
	});
	$(".cause_list button").on("click", function(){
		$('.cause_list').hide(300);
	});
	/* 생선뼈 원인명 선택 및 노출 */
	$(".cause_list > ul > li > a").on("click", function(){
		var cause_text = $(this).text();
		$('.cause_subject').text(cause_text);
		$('.cause_list').hide(300);
		return false;
	});
    
    /* 10 */
    $(".scroll_box").mCustomScrollbar();
    
    /* 11 */
    $(".btn_scroll_top button").click(function(){
       $("html, body").animate({"scrollTop":0},500); 
    });
});

