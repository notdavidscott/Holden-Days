//actual return to top jquery
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
   
    $(function() {
        $('body').scrollTop(0);
     });

   