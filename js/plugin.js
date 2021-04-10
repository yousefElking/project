$(document).ready(function(){
	
		$('.navbar-light .navbar-nav .nav-link').animate({
			position:'relative',
			bottom:'10px'
			
		});
		
		$('.section1 h2').animate({
			position:'relative',
			left:'0px'
			
		},1000);
		
		$('.section2 h2').animate({
			position:'relative',
			right:'0px'
			
		},1000);
		
		$('.features h2').animate({
			position:'relative',
			right:'0px'
			
		},1000);
		//load
		
		$(window).load(function(){
			
			$('.load').remove();
			
		});
	
});