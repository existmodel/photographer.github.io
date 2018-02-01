      var navMain = document.querySelector(".main-nav");
      var navToggle = document.querySelector(".main-nav__toggle");

      navMain.classList.remove("main-nav--nojs");

      if (navMain.classList.contains("main-nav--opened")) {
        navMain.classList.remove("main-nav--opened");
        navMain.classList.add("main-nav--closed");
      };

      navToggle.addEventListener("click", function() {
        if (navMain.classList.contains("main-nav--closed")) {
          navMain.classList.remove("main-nav--closed");
          navMain.classList.add("main-nav--opened");
        } else {
          navMain.classList.add("main-nav--closed");
          navMain.classList.remove("main-nav--opened");
        }
      });

      $(document).ready(function() {
        $(".portfolio__popup").magnificPopup({type:"image"});
      });


      $(function(){
  //scroll to top
      $('.button-up').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
      });
    });

// function slowScroll(id) {
//       var offset = 0;
//       $("html, body").animate ({
//         scrollTop: $(id).offset ().top - offset
//       }, 1000);
//       return false;
// }



// $(document).ready(function(){
//       // Фикмированная шапка при скролле
//       $("#header").removeClass("default");
//       $(window).scroll(function(){
//         if ($(this).scrollTop() > 20) {
//           $("#header").addClass("default").fadeIn('fast');
//         } else {
//           $("#header").removeClass("default").fadeIn('fast');
//         };
//       });
//     });