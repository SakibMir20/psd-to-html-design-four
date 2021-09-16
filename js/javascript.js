// Start Smooth scrolling JS Code //

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate(
              {
                  scrollTop: $(hash).offset().top,
              },
              800,
              function () {
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
              }
          );
      } // End if
  });
});

// End Smooth scrolling JS Code //


// Sticky navbar
$(".show--sticky-navbar-from-here").waypoint(function (direction) {
  if (direction == "down") {
      $("header").addClass("sticky");
  } else {
      $("header").removeClass("sticky");
  }
});


/* Start ---For Mobile Nav Overly Open n Close */

function openNav() {
  document.getElementById("mobile-nav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-nav").style.width = "0";
}
/* End ---For Mobile Nav Overly Open n Close */

/* Start --- Mix it Up Pluggin */
var mixer = mixitup(".apply-mix-it-up-js");
/* End --- Mix it Up Pluggin */

/* Start --- Class Add or Remove for Filter Item Responsive */
$(document).ready(function () {
  $(".filter-buttons .btn-1").click(function () {
      $(".grid-container").removeClass("ad-for-free");
      $(".grid-container").removeClass("ad-for-pro");
  });
});

$(document).ready(function () {
  $(".filter-buttons .btn-2").click(function () {
      $(".grid-container").addClass("ad-for-pro");
      $(".grid-container").removeClass("ad-for-free");
  });
});

$(document).ready(function () {
  $(".filter-buttons .btn-3").click(function () {
      $(".grid-container").addClass("ad-for-free");
      $(".grid-container").removeClass("ad-for-pro");
  });
});
/* End ---- Class Add or Remove for Filter Item Responsive */
