$(document).ready(function(){
	//console.log("Hola Softtek ;)");
	
	$('.slide').first().addClass('active');
	$('.slide').hide();    
	$('.active').show();

	$('#next').click(function(){

		$('.active').removeClass('active').addClass('oldActive');    
		if ( $('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		}
		else{
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut();
		$('.active').fadeIn();

	});

	$('#back').click(function(){
		$('.active').removeClass('active').addClass('oldActive');    
		if ( $('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		}
		else{
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut();
		$('.active').fadeIn();
	});

	function auto(){
		interval = setInterval(function(){
			$('#next').click();
		},3000);
	}
	auto();

	$(".nav-menu").click(function(){
		$(".nav-mobile ul").slideDown();
	});
});

