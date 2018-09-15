//go to albums mobile
$('#go-to-albums-mobile').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 1700                       // Scroll to top of body
    }, 500);
});

//go to story mobile

$('#go-to-story-mobile').click(function() {      // button click
    $('body,html').animate({
        scrollTop : 950                       // Scroll to story
    }, 500);
});

//go to albums full screen

 $('#go-to-albums').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 1550                       // Scroll to top of body
    }, 500);
});

//go to story full screen 

$('#go-to-story').click(function() {      // button click
    $('body,html').animate({
        scrollTop : 840                       // Scroll to story
    }, 500);
});


//actual return to top jquery
    $('#return-to-top').click(function() {      // button click
        $('body,html').animate({
            scrollTop : 0                       // Scroll to albums
        }, 500);
    });
   
    $(function() {
        $('body').scrollTop(0);
     });

   
//floating scroll to top botton 
//this automatically hides on document load
     $(document).ready(function() {
        $('.fixed-action-btn').hide();
        $('.fixed-action-btn-down').hide();
     });

     //once you've scrolled 600px, the div will fade in, if you scroll less than 600px it will fade again
     $(window).scroll(function() {
         if ($(this).scrollTop() < 600)
            {
                $('.fixed-action-btn').fadeOut();
            } else {
                $('.fixed-action-btn').fadeIn();
            }
     });

  