$(document).ready(function () {
    
	/* 레이어 팝업 */
	$(".layer_popup").hide();
	$(".btn_layer").click(function(){
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		var el = $(this);
		$(".layer_overlay").show();
		$(".layer_popup").removeClass("mini_popup")
		var pop_name = $(this).data('pop_name')
		$("."+ pop_name +"").show();
		$(".layer_wrap").attr("tabindex", "0").focus().css('outline','0');
		el.attr('data-focus','on');
		var pop_height = $("."+ pop_name +" .layer_wrap").outerHeight();
		var pop_width = $("."+ pop_name +" .layer_wrap").outerWidth();
		$("."+ pop_name +" .layer_wrap").css('margin-top','-'+ pop_height/2 +'px').css('margin-left','-'+pop_width/2+'px');
		return false;
	});
	
	$(".layer_popup .btn_pop_close").click(function(){
		$('html, body').css({'overflow': 'auto', 'height': 'auto'});
		$(".layer_popup").removeClass("mini_popup");
		$(".layer_overlay").hide();
		$(".layer_popup").hide();
		$("a[data-focus~=on]").focus();
		$("button[data-focus~=on]").focus();
		window.setTimeout(function(){
			$("a[data-focus~=on]").removeAttr("data-focus");
			$("button[data-focus~=on]").removeAttr("data-focus");
		},500);
		return false;
	});
	
	

	$(".popup_title .btn_pop_close").keydown(function(e){
		if(e.shiftKey && e.keyCode == 9){
			$('html, body').css({'overflow': 'auto', 'height': 'auto'});
			$(".layer_popup").removeClass("mini_popup");
			$(".layer_overlay").hide();
			$(".layer_popup").hide();
			$("a[data-focus~=on]").focus();
			$("button[data-focus~=on]").focus();
			window.setTimeout(function(){
				$("a[data-focus~=on]").removeAttr("data-focus");
				$("button[data-focus~=on]").removeAttr("data-focus");
			},500);
			return false;
		}
	});
	

	$(".btn_popup button:last-child, .btn_popup a:last-child").keydown(function(e){
		if(e.shiftKey && e.keyCode == 9){

		}else if(e.keyCode == 9){
			$('html, body').css({'overflow': 'auto', 'height': 'auto'});
			$(".layer_popup").removeClass("mini_popup");
			$(".layer_overlay").hide();
			$(".layer_popup").hide();
			$("a[data-focus~=on]").focus();
			$("button[data-focus~=on]").focus();
			window.setTimeout(function(){
				$("a[data-focus~=on]").removeAttr("data-focus");
				$("button[data-focus~=on]").removeAttr("data-focus");
			},500);
			return false;
		}
	});


	$(".btn_layer.btn_mini_popup").click(function(){
		$(".layer_popup").addClass("mini_popup");
		return false;
	});	

});

