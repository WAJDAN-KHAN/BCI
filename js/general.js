jQuery(document).ready(function($) {

//	function stickyHeader() {
//		if ($(window).scrollTop() > 0) {
//			$('.header-wrapper').addClass('sticky');
//		} else {
//			$('.header-wrapper').removeClass('sticky');
//		}
//	}
//
//	stickyHeader();
//	$(window).scroll(function(){
//		stickyHeader();
//	});

	$('.navbar-nav').doubleTapToGo();

	$(document).on('click', '.search-form-trigger', function(){
		$(this).find('.fas').toggleClass('fa-search').toggleClass('fa-times');
		$('.search-form').slideToggle(300);
	});
	
	$(".piechart").each(function(){
		var color = $(this).data('color');
		var percent = $(this).data('percent');
		var title = $(this).data('title');
		
//		$(this).piechart([
//			[title, percent, color],
//		]);
		$(this).circliful({
			animationStep: 5,
			foregroundBorderWidth: 35,
			backgroundBorderWidth: 45,
			percent: percent,
			foregroundColor: color,
			fontColor: color,
			backgroundColor: '#d7dde4',
			animateInView: true,
			text: title,
			pointSize: 32.5,
			percentageX: 105,
            percentageY: 120,
			textY: 90,
            textX: 105,
	   });
	});
	
	function scaleToFill() {
		$('video.video-background').each(function(index, videoTag) {
		   var $video = $(videoTag),
			   videoRatio = videoTag.videoWidth / videoTag.videoHeight,
			   tagRatio = $video.width() / $video.height(),
			   val;

		   if (videoRatio < tagRatio) {
			   val = tagRatio / videoRatio * 1.02;
		   } else if (tagRatio < videoRatio) {
			   val = videoRatio / tagRatio * 1.02;
		   }

		   $video.css('transform','scale(' + val  + ',' + val + ')');

		});    
	}
	
	scaleToFill();
    
    $('.video-background').on('loadeddata', scaleToFill);
    
    $(window).resize(function() {
        scaleToFill();
    });
	
	$(document).on('click', '.hero-arrow', function(){
		if ($(this).parents('.page-hero-section-video').next().length) {
			$('body, html').animate({scrollTop : $(this).parents('.page-hero-section-video').next('div').offset().top - $('.header-wrapper').outerHeight()}, 300);
		}
	});
	
	$('[data-toggle="tooltip"]').tooltip();

});
