/*$(document).ready(function(){
    $('.nube').mouseenter(function(){
        $(this).fadeTo('fast','0.25');
        });
    /*$('.nube').mouseleave(function(){
        $(this).fadeTo('fast', '1');
      });
});*/





	function openNav() {
	    document.getElementById("mySidenav").style.width = "250px";
	}

	function closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	}


$(window).scroll(function() {

    if ($(this).scrollTop()>100)
     {
        $('.olas').fadeOut();
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

 	/*$(document).scroll(function(){

 		$('.olas').hide();

 		var scrollTop = $(this).scrollTop();

 	});*/
 });



 