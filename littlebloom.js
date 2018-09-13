//our little button friends after the banner 
const toAlbums = () => {
    window.scrollTo({
        top: 1550,
        behavior: "smooth"
    });
}

const toStory = () => {
    window.scrollTo({
        top: 700,
        behavior: "smooth"
    });
}

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

 // scroll to the next part 
    //  $(window).scroll(function() {
    //     if ($(this).scrollTop() > 1550)
    //        {
    //            $('.fixed-action-btn-down').fadeOut();
    //        } else {
    //            $('.fixed-action-btn-down').fadeIn();
    //        }
    // });

    // const skipToAlbums = () => {
    //     window.scrollTo({
    //         top: 1550,
    //         behavior: "smooth"
    //     });
    // }
    //  $("#go-to-albums").click(function() {
    //    scrollTo(window, ".albums");
    //     });

  