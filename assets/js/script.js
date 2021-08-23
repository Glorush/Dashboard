$(document).ready(function(){
	  $('.nav-button').click(function(){
		$('body').toggleClass('nav-open');
	  });
	  
	$('.nav-button').click(function(){
		$('.deshboard_menu_area').slideToggle(500);

		return false;
	});


	// progress-bar
	$(function(){
  	$('.cirelechart').circlechart();

	});

	// Account ID of Recepient input
	$('.digit-group').find('input').each(function() {
	$(this).attr('maxlength', 1);
	$(this).on('keyup', function(e) {
		var parent = $($(this).parent());
		
		if(e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.find('input#' + $(this).data('previous'));
			
			if(prev.length) {
				$(prev).select();
			}
		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = parent.find('input#' + $(this).data('next'));
			
			if(next.length) {
				$(next).select();
			} else {
				if(parent.data('autosubmit')) {
					parent.submit();
				}
			}
		}
	});
});

	
});



