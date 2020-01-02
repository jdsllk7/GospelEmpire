
jQuery(document).ready(function(){/*Wait until page is loaded*/
	
	/*Fade In and Out topslide*/
	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) { //where 60 is the height of your header
			$('#topslide').fadeOut('fast');	/*$('.topslide1').height()*/
		} else if ($(window).scrollTop() < 1000){
			$('#topslide').fadeIn('slow');
		}
	});
	
	
	
	
	/*Create fixed Nav Bar*/
	$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
		if ($(window).width()<730 && $(window).scrollTop() > 357) {
		  $('.center101').addClass('topSearchFixed');
		  $('.dropdownmenus').addClass('navbar-fixed');
		  
		}
		if ($(window).width()<730 && $(window).scrollTop() < 359) {
		  $('.center101').removeClass('topSearchFixed');
		  $('.dropdownmenus').removeClass('navbar-fixed');
		}
		
		if($(window).width()>730 && $(window).scrollTop() > 330){
		  $('.center101').addClass('topSearchFixed');
		  $('.dropdownmenus').addClass('navbar-fixed');
			
		}
		if($(window).width()>730 && $(window).scrollTop() < 330){
			$('.center101').removeClass('topSearchFixed');
		    $('.dropdownmenus').removeClass('navbar-fixed');
			
		}
		
  });
  
	  /* if ($(window).width() > 50%){
				$('.dropdownmenus').addClass('navbar-NOTfixed');
				
			} */
  
  
  /*Create Fixed header*/
  /* $(window).scroll(function () {  
      console.log($(window).scrollTop())
		if ($(window).scrollTop() > 0) {
		  $('#topheader').addClass('header-fixed');
		}
		if ($(window).scrollTop() < 1) {
		  $('#topheader').removeClass('header-fixed');
		}
  }); */
  
  
  

 
});


/* function profileMe(){
	document.getElementById('profileID').href="../artistProfile/artistProfile.html";
}

function profileMez(){
	document.getElementById('profileID').href="../artistProfile/artistProfile.html";
	
} */





	
