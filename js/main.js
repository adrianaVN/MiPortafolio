
	function openNav() {
	    document.getElementById("mySidenav").style.width = "250px";
	}

	function closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	}


$(window).scroll(function() {

    if ($(this).scrollTop() >90)
     {
        $('.olas').hide();
     }
    else
     {
      $('.olas').fadeIn();
     }
 });

 $(document).ready(function(){ 
 	$('.skillbar').each(function(){ 
 		jQuery(this).find('.skillbar-bar').animate({ width:jQuery(this).attr('data-percent') },6000);
 		 }); 

 });
 

 