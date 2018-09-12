//actual return to top jquery
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
   
    $(function() {
        $('body').scrollTop(0);
     });

   
//floating scroll to top botton 
//this automatically hides on document load
     $(document).ready(function() {
        $('.fixed-action-btn').hide();
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

    //  $("#go-to-albums").click(function() {
    //    scrollTo(window, ".albums");
    //     });

    const toAlbums = () => {
        window.scrollTo({
            top: 730,
            behavior: "smooth"
        });
    }