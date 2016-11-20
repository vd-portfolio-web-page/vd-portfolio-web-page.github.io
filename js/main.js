  	  	$('.button_for_menu')[0].addEventListener('click', function(){

          if ($('.mobile-bar')[0].style.display=='none' || $('.mobile-bar')[0].style.display=='') {
            $('.mobile-bar')[0].style.display = 'block'
          } else {
            $('.mobile-bar')[0].style.display='none'
          }
        });

        window.addEventListener('resize', function(){
          if (window.matchMedia("screen and (min-width: 730px)").matches==true) {
            $('.mobile-bar')[0].style.display='none'
          }
        });

        $(".scrollto").click(function() {
         var elementClick = $(this).attr("href")
         var destination = $(elementClick).offset().top;
         jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 300);
         return false;
       });


        var navigationArray = [
        "#header_label",
        "#content-content",
        "#about-me",
        "#my-background",
        '#middle-of-background',
        "#my-contacts",
        '#footer-menu'
        ]

        window.onscroll = function() {

         if ($(".content-view-portfolio").visible(true)==false) {
          $('.arrows')[0].style.display = "block"
        } else {
          $('.arrows')[0].style.display = "none"
        }

        if ($(navigationArray[navigationArray.length-1]).visible(true)==true) {
          $('#arrow-bottom')[0].style.display = "none"
        } else {
          $('#arrow-bottom')[0].style.display = "block"
        }

        for (var i=0; i<navigationArray.length; i++) {
          if ($(navigationArray[i]).visible(true)==true) {
           $('#to-up')[0].href=navigationArray[i-1];
           $('#to-down')[0].href=navigationArray[i+1];
           if ($(navigationArray[i]).visible(true)==true && $(navigationArray[i-1]).visible(true)==true) {
            $('#to-up')[0].href=navigationArray[i-2]
          }
        }
      }
    }

  	  	// window.onscroll =  function(){


  	  	// 	if ( $('#my-contacts').visible(true)==true) {
  	  	// 		$('#arrow-bottom')[0].style.display = "none"
  	  	// 	} else if ($('#my-contacts').visible(true)==false) {
  	  	// 		$('#arrow-bottom')[0].style.display = "block"
  	  	// 	}

  	  	// 	if ($('#content-content').visible(true) == true) {

  	  	// 		(function() {
  	  	// 			$('#to-up')[0].href="#footer_label";
  	  	// 			$('#to-down')[0].href="#about-me";
  	  	// 		})()

  	  	// 	}
  	  	// 	if ($('#about-me').visible(true) == true) {
  	  	// 		(function() {
  	  	// 			$('#to-up')[0].href="#content-content";
  	  	// 			$('#to-down')[0].href="#my-background";
  	  	// 		})()

  	  	// 	}
  	  	// 	if ($('#my-background').visible(true) == true) {

  	  	// 		(function() {
  	  	// 			$('#to-up')[0].href="#about-me";
  	  	// 			$('#to-down')[0].href="#middle-of-background";
  	  	// 		})()

  	  	// 	}
  	  	// 	if ($('#middle-of-background').visible(true) == true) {
  	  	// 		(function(){
  	  	// 			$('#to-up')[0].href="#my-background";
  	  	// 			$('#to-down')[0].href="#my-contacts";
  	  	// 		})()

  	  	// 	}
  	  	// 	if ($('#my-contacts').visible(true) == true) {
  	  	// 		(function() {
  	  	// 			$('#to-up')[0].href='#middle-of-background';
  	  	// 			$('#to-down')[0].href="#my-contacts";
  	  	// 		})()

  	  	// 	}
  	  	// }





