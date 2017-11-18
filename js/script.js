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
        function slowScroll(id) {
          var offset = 0;
          $("html, body").animate ({
            scrollTop: $(id).offset ().top - offset
          }, 1000);
          return false;
        }
      });
