



//nav bar 

$(document).ready(function() {

  $('html, body').animate({
          scrollTop: 0
  }, 1);

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.test1').css({'background-color': 'gray', 'transform': 'translate(0px,125px)'});
    else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'background-color': 'gray', 'transform': 'translate(60px,105px)'});
    else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'background-color': 'gray', 'transform': 'translate(105px,60px)'});
    else $(this).find('.test3').css({'background-color': 'silver', 'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'background-color': 'gray', 'transform': 'translate(125px,0px)'});
    else $(this).find('.test4').css({'background-color': 'silver', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;

    });
    
    var altoOlas = $('.olas').height();
    var conOlas = true;

    $(window).scroll(function() {

      if ($(this).scrollTop() >90) {
        $('.olas').hide();
        conOlas = false; 
      } else {
        $('.olas').fadeIn();
        conOlas = true;
      }
    });

    $(".btnMenu").click(function(e){

      var el = $(e.target).closest("div");

      if (!el) {
       return;
      }

      var dataSection = el.data("section");
      var name = "." + dataSection;
      name = name.trim();
      var div = $(name);
      var altura = $(name).offset().top;
 
      if (conOlas) {   
        var margin = $(".rosa").css("margin-top")
        margin = margin.replace("px","")
        margin = Number(margin);
        altura = $("#primera").height() + margin;
      }

      $('html, body').animate({
          scrollTop: altura
      }, 1000);
      
    });

    /*

  $('a[href*="#"]:not([href="#"])').click(function() {
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log("Target: ", target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      console.log(target);
      
      if (target.length) {
        //var offset = target.offset().top;
        console.log(target);
        var offset = target.postion().top;
        if (!conOlas) {
            console.log("Quitando ", altoOlas);
           // offset = offset - altoOlas;
        }
        console.log(offset);
        $('html, body').animate({
          scrollTop: offset
        }, 1000);
        return false;
      }
    }

  });

  */

});


