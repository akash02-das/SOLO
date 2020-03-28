// ############## Preloader ################

$(window).on("load", function () {
  //make sure that whole site is loaded
  $("#status").fadeOut();
  $("#preloader")
    .delay(350)
    .fadeOut("slow");
});

// ############## Team ################

$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-angle-left fa-3x"</i>',
      '<i class="fas fa-angle-right fa-3x"</i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      }
    }
  });
});

// ############## Progress Bars ################

$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
          },
          2000
        );
      });
      this.destroy();
    }, {
      offset: "bottom-in-view"
    }
  );
});

// ############## Responsive Tabs ################

$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide"
  });
});

// ############## Portfolio ################

$(window).on("load", function () {
  // initialize isotope
  $("#isotope-container").isotope({});
  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    // get filter value
    var filterValue = $(this).attr("data-filter");
    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });
    // active button
    $("#isotope-filters")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });
});

// ############## Magnifier ################

$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
  });
});

// ############## Testimonial ################

$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-angle-left fa-2x"</i>',
      '<i class="fas fa-angle-right fa-2x"</i>'
    ]
  });
});

// ############## Stats ################
$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});

// ############## Clients ################

$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-angle-left fa-2x"</i>',
      '<i class="fas fa-angle-right fa-2x"</i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 480 up
      480: {
        items: 3
      },
      // breakpoint from 768 up
      768: {
        items: 6
      }
    }
  });
});

// ############## Google Map ################

$(window).on("load", function () {
  // Map Variables
  var addressString = "230 Broadway, NY, New York 10007, USA";
  var myLatlng = {
    lat: 40.712685,
    lng: -74.00592
  };

  // 1. Render Map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatlng
  });

  // 2. Add Marker
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click To See Address"
  });

  // 3. Add Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });

  // 4. show info window when user clicks marker
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });

  // 5. Resize Google Map
  google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
});

// ############## Navigation ################
// Show & Hide White Navigation
$(function () {
  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function () {
    // show/hide nav on window scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // show white nav
      $("nav").addClass("white-nav-top");

      // show dark logo
      $(".navbar-brand img").attr("src", "Images/logo/logo-dark.png");

      // show back to top button
      $("#back-to-top").fadeIn();
    } else {
      // hide white nav
      $("nav").removeClass("white-nav-top");

      // show logo
      $(".navbar-brand img").attr("src", "Images/logo/logo.png");

      // hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});

// smooth scrolling
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    // get section id like #about,#services,#work,#team and etc.
    var section_id = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section_id).offset().top - 64
      },
      1250,
      "easeInOutExpo"
    );
  });
});

// ############## Mobile Menu ################
$(function () {
  // show mobile nav
  $("#mobile-nav-open-btn").click(function () {
    $("#mobile-nav").css("height", "100%");
  })
  // hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
    $("#mobile-nav").css("height", "0%");
  })
});

// ############## Animation ################

// Animate on scroll
$(function () {
  new WOW().init();
});

// Home Animation on page load
$(window).on("load", function () {
  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down .icon").addClass("animated fadeInDown infinite");
})