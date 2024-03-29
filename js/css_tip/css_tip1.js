/** 
 * @author (二�)�쒖떊�뺣낫湲곗닠 �쇰툝由ъ뀛�� 沅뚯젙��
 * @since 2018-09-28
 * @version 1.0.0
 */
try {
	//$ 以묒꺽 諛⑹�
	(function($) {
		'use strict';

		//�쒖씠荑쇰━媛� �덈뒗吏� �뺤씤
		if(typeof $ === 'function') {
			$.tag.wdw.on('load.main', function(event) {
				//�ㅽ겕濡� �ㅽ뙆��			
				$.tag.section = $.tag.container.children('.section');
				$.tag.quick = $.tag.container.children('.quick');
				$.tag.quickItem = $.tag.quick.find('li');
				$.tag.quickAnchor = $.tag.quickItem.children('a');
				$.tag.quickOpen = $.tag.quick.children('.quick_open');
				$.tag.quickOpenButton = $.tag.quickOpen.children('button');
				$.tag.quickClose = $.tag.quick.find('.quick_close');
				$.tag.quickCloseButton = $.tag.quickClose.children('button');

				//�쒖꽦�붾맂 �뱀뀡 媛��몄삤湲�
				function getActivedSectionIndex() {
					return $.tag.quickItem.index($.tag.quickItem.filter('.active'));
				}

				$.tag.quickAnchor.off('click.layout').on('click.main', function(event) {
					var $this = $(this),
						index = $.tag.quickAnchor.index(this),
						activedIndex = getActivedSectionIndex(),
						$hash = $(this.hash),
						offset = $hash.offset(),
						counter = 0;
					
					//�댁돩 �붿냼媛� �덇퀬 �좊땲硫붿씠�섏씠 �앸궗�꾨븣
					if($hash.length && !$.tag.htmlAndBody.is(':animated')) {
						//�쒖꽦�� �섏뼱�덈뒗怨녠낵 嫄몃┛怨녹쓽 �몃뜳�ㅺ� �ㅻ���
						if(index !== activedIndex) {
							$.tag.quick.addClass('clicked');
						}

						$.tag.htmlAndBody.animate({
							scrollTop : offset.top - $.tag.header.outerHeight()
						}, {
							duration : 500,
							easing : 'easeInOutSine',
							complete : function() {
								//1�댁긽�쇰븣
								if(!counter) {
									$.tag.quick.removeClass('clicked');
									counter++;
								}
							}
						});
					}

					event.preventDefault();
				});

				$.tag.wdw.on('scroll.main', function(event) {
					var $this = $(this),
						scrollTop = $this.scrollTop(),
						activedIndex = getActivedSectionIndex(),
						index = [];

					for(var i = 0, sectionLength = $.tag.section.length; i < sectionLength; i++) {
						var $section = $.tag.section.eq(i);
						
						//�붿냼�� �믪씠�� �덈컲�� �ㅽ겕濡ㅼ씠 �섏뿀�꾨븣
						if(($section.offset().top - (($section.outerHeight(true) || 0) / 2)) <= scrollTop) {
							index.push(i);
						}
					}

					index = index[index.length - 1];

					//�쒖꽦�� �섏뼱�덈뒗怨녠낵 嫄몃┛怨녹쓽 �몃뜳�ㅺ� �ㅻ���
					if(index !== activedIndex) {
						$.tag.quick.removeClass('quick_on' + (activedIndex + 1)).addClass('quick_on' + (index + 1));
						$.tag.quickItem.eq(activedIndex).removeClass('active');
						$.tag.quickItem.eq(index).addClass('active');
					}
				}).on('responsive:allResized.main', function(event) {
					$.tag.wdw.triggerHandler('scroll.main');
				});

				//�뚯떇 > 鍮꾩＜��
				$.tag.visual = $.tag.container.find('.visual');
				$.tag.visualList = $.tag.visual.children('.visual_list');
				$.tag.visualList.slick({
					draggable : false,
					swipe : false,
					touchMove : false,
					cssEase : 'cubic-bezier(1, 0, 0, 1)',
					speed : 250,
					//accessibility : false,
					pauseOnArrowClick : true,
					pauseOnDirectionKeyPush : true,
					pauseOnSwipe : true,
					pauseOnDotsClick : true,
					pauseOnDotsHover : true,
					playText : '�ъ깮',
					autoplay : true,
					pauseText : '�뺤�',
					dots : true,
					appendDots : $.tag.visual.find('.visual_control'),
					dotsClass : 'visual_dot',
					prevArrow : $.tag.visual.find('.visual_prev'),
					nextArrow : $.tag.visual.find('.visual_next'),
					autoArrow : $.tag.visual.find('.visual_auto'),
					responsive : [{
						breakpoint : 1001,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true,
							autoplay : false
						}
					}]
				});
				
				// �뚯떇 > �μ쿇�뚯떇
				$.tag.news = $.tag.container.find('.news');
				$.tag.newsList = $.tag.news.children('.news_list');
				$.tag.newsList.slick({
					draggable : false,
					swipe : false,
					touchMove : false,
					cssEase : 'cubic-bezier(1, 0, 0, 1)',
					speed : 250,
					//accessibility : false,
					pauseOnArrowClick : true,
					pauseOnDirectionKeyPush : true,
					pauseOnSwipe : true,
					playText : '�ъ깮',
					autoplay : true,
					pauseText : '�뺤�',
					prevArrow : $.tag.news.find('.news_prev'),
					nextArrow : $.tag.news.find('.news_next'),
					autoArrow : $.tag.news.find('.news_auto'),
					responsive : [{
						breakpoint : 1001,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true
						}
					}, {
						breakpoint : 641,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true,
							adaptiveHeight : true
						}
					}]
				});

				//�뚯떇 > �앹뾽議�
				$.tag.popup = $.tag.container.find('.popup');
				$.tag.popupList = $.tag.popup.children('.popup_list');
				$.tag.popupList.slick({
					draggable : false,
					swipe : false,
					touchMove : false,
					speed : 250,
					//accessibility : false,
					cssEase : 'cubic-bezier(1, 0, 0, 1)',
					pauseOnArrowClick : true,
					pauseOnDirectionKeyPush : true,
					pauseOnSwipe : true,
					playText : '�ъ깮',
					autoplay : true,
					pauseText : '�뺤�',
					prevArrow : $.tag.popup.find('.popup_prev'),
					nextArrow : $.tag.popup.find('.popup_next'),
					autoArrow : $.tag.popup.find('.popup_auto'),
					responsive : [{
						breakpoint : 1001,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true
						}
					}, {
						breakpoint : 641,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true,
							adaptiveHeight : true
						}
					}]
				});
				
				//誘쇱썝 > 留곹겕
				$.tag.complaint = $('#complaint');
				$.tag.complaintLink = $.tag.complaint.find('.link');
				$.tag.complaintLinkList = $.tag.complaintLink.children('.link_list');
				$.tag.complaintLinkList.slick({
					draggable : false,
					swipe : false,
					touchMove : false,
					cssEase : 'cubic-bezier(1, 0, 0, 1)',
					speed : 250,
					//accessibility : false,
					prevArrow : $.tag.complaintLink.find('.link_prev'),
					nextArrow : $.tag.complaintLink.find('.link_next'),
					slidesPerRow : 5,
					rows : 2,
					responsive : [{
						breakpoint : 1001,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true,
							slidesPerRow : 1,
							rows : 1,
							slidesToShow : 5
						}
					}, {
						breakpoint : 641,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true,
							slidesPerRow : 1,
							rows : 1,
							slidesToShow : 3
						}
					}]
				});
					
				//誘쇱썝 > 遺꾩빞蹂꾩젙蹂�
				$.tag.field = $.tag.container.find('.field');
				$.tag.fieldList = $.tag.field.children('.field_list');
				$.tag.fieldList.slick({
					draggable : false,
					swipe : false,
					touchMove : false,
					cssEase : 'cubic-bezier(1, 0, 0, 1)',
					speed : 250,
					//accessibility : false,
					prevArrow : $.tag.field.find('.field_prev'),
					nextArrow : $.tag.field.find('.field_next'),
					slidesToShow : 8,
					responsive : [{
						breakpoint : 1001,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true,
							slidesToShow : 5
						}
					}, {
						breakpoint : 641,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true,
							slidesToShow : 4
						}
					}]
				});

				//誘쇱썝 > �μ쿇 援곕�, �ъ뾽��, 愿�愿묎컼
				$.tag.people = $.tag.container.find('.people');
				$.tag.peopleButton = $.tag.people.find('.people_button');
				$.tag.peopleButton.on('click.main', function(event) {
					var $this = $(this),
						$peopleContent = $this.next('.people_content'),
						$Myparent = $this.parent('li'),
						$OtherParents = $Myparent.siblings('li'),
						$OtherLayer = $OtherParents.children('.people_content'),
						$OtherBtn = $OtherParents.children('.people_button'),
						IsActive = $Myparent.is('.active');
					
					if(!IsActive){
						//�좊땲硫붿씠�섏씠 �앸궗�꾨븣
						if(!$peopleContent.is(':animated')) {
							$OtherParents.removeClass('active');
							$OtherBtn.attr('title', '�닿린');
							$OtherLayer.slideUp(250, 'easeInOutExpo');
							$Myparent.addClass('active');
							$this.attr('title', '�リ린');
							$peopleContent.slideDown(250, 'easeInOutExpo');
						}
					} else{
						$Myparent.removeClass('active');
						$this.attr('title', '�닿린');
						$peopleContent.slideUp(250, 'easeInOutExpo');
					};
				});

				//�뚰넻 > SNS
				$.tag.sns = $.tag.container.find('.sns');
				$.tag.snsTabButton = $.tag.sns.find('.tab_button');
				$.tag.snsList = $.tag.sns.find('.sns_list');

				$.tag.snsList.each(function(index, element) {
					var $element = $(element),
						$snsControl = $element.prev('.sns_control');

					$element.slick({
						draggable : false,
						swipe : false,
						touchMove : false,
						cssEase : 'cubic-bezier(1, 0, 0, 1)',
						//accessibility : false,
						speed : 250,
						prevArrow : $snsControl.children('.sns_prev'),
						nextArrow : $snsControl.children('.sns_next'),
						slidesToShow : 4,
						responsive : [{
							breakpoint : 1241,
							settings : {
								slidesToShow : 3
							}
						}, {
							breakpoint : 1001,
							settings : {
								draggable : true,
								swipe : true,
								touchMove : true,
								slidesToShow : 2
							}
						}, {
							breakpoint : 641,
							settings : {
								draggable : true,
								swipe : true,
								touchMove : true,
								slidesToShow : 1,
								adaptiveHeight : true
							}
						}]
					});
				});

				$.tag.wdw.on('responsive:all.main', function(event) {
					$.tag.snsTabButton.filter(function(index, element) {
						return ($(element).parent('li.active').length) ? true : false;
					}).triggerHandler('click.main');
				});

				$.tag.snsTabButton.on('click.main', function(event) {
					var $this = $(this);

					$.tag.snsList.filter(function(index, element) {
						return ($(element).parents('li.active').length) ? true : false;
					}).slick('setPosition');
					
					$this.triggerHandler('click.layout');
				});

				$.tag.wdw.triggerHandler('responsive:all.main');

				//�뚰넻 > �μ쿇�띾낫愿�
				$.tag.promotion = $.tag.container.find('.promotion');
				$.tag.promotionList = $.tag.promotion.children('.promotion_list');
				$.tag.promotionList.slick({
					draggable : false,
					swipe : false,
					touchMove : false,
					cssEase : 'cubic-bezier(1, 0, 0, 1)',
					speed : 250,
					//accessibility : false,
					prevArrow : $.tag.promotion.find('.promotion_prev'),
					nextArrow : $.tag.promotion.find('.promotion_next'),
					autoArrow : $.tag.promotion.find('.promotion_auto'),
					pauseOnArrowClick : true,
					pauseOnDirectionKeyPush : true,
					pauseOnSwipe : true,
					fade : true,
					autoplay : true,
					playText : '�ъ깮',
					pauseText : '�뺤�',
					responsive : [{
						breakpoint : 1001,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true
						}
					}, {
						breakpoint : 641,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true,
							fade : false,
							adaptiveHeight : true
						}
					}]
				});

				//愿�愿� > 異붿쿇紐낆냼
				$.tag.sights = $.tag.container.find('.sights');
				$.tag.sightsList = $.tag.sights.children('.sights_list');
				$.tag.sightsList.slick({
					draggable : false,
					swipe : false,
					touchMove : false,
					cssEase : 'cubic-bezier(1, 0, 0, 1)',
					speed : 250,
					//accessibility : false,
					prevArrow : $.tag.sights.find('.sights_prev'),
					nextArrow : $.tag.sights.find('.sights_next'),
					total : $.tag.sights.find('.sights_total'),
					current : $.tag.sights.find('.sights_current'),
					responsive : [{
						breakpoint : 1001,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true,
							adaptiveHeight : true
						}
					}]
				});

				//愿�愿� > 異뺤젣
				$.tag.festival = $.tag.container.find('.festival');
				$.tag.festivalList = $.tag.festival.children('.festival_list');
				$.tag.festivalList.slick({
					draggable : false,
					swipe : false,
					touchMove : false,
					cssEase : 'cubic-bezier(1, 0, 0, 1)',
					speed : 250,
					//accessibility : false,
					dots : true,
					dotsClass : 'festival_dot',
					appendDots : $.tag.festival.find('.festival_control'),
					prevArrow : $.tag.festival.find('.festival_prev'),
					nextArrow : $.tag.festival.find('.festival_next'),
					responsive : [{
						breakpoint : 1001,
						settings : {
							draggable : true,
							swipe : true,
							touchMove : true
						}
					}]
				});
			});
		}else{
			throw '�쒖씠荑쇰━媛� �놁뒿�덈떎.';
		}
	})(window.jQuery);
}catch(e) {
	console.error(e);
}