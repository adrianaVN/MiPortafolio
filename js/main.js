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

    if ($(this).scrollTop() >250)
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

 	/*$(document).scroll(function(){

 		$('.olas').hide();

 		var scrollTop = $(this).scrollTop();

 	});*/
 });
/*$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.olas').addClass('sticky');
    } else {
        $('.olas').removeClass('sticky');
    }
});

*/

 