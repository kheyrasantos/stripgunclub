function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
$(document).ready(function() {

    /*============================================================================
    Smooth Page Scrolling
    ==============================================================================*/
    $('a.page-scroll').bind('click touchstart',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:($($anchor.attr('href')).offset().top)},1250,'easeInOutExpo');event.preventDefault();});

    /*============================================================================
    Featured Carousel
    ==============================================================================*/
    $(".featured-carousel").slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      nextArrow: ".featured-arrows-container .next",
      prevArrow: ".featured-arrows-container .prev",
      adaptiveHeight: true,
    });

    
/*============================================================================
Home Video
==============================================================================*/

if (window.location.pathname === "/") {

  var play_state = false;
  var $reveal_video = $("#reveal-video");

  $(".home-play-button, .reveal-link").on("click tap", function() {
    $reveal_video[0].play();
    $reveal_video[0].muted = false;
    play_state = true;
  });

  $("body").on("click tap keyup", function(e) {

    if (e.type === "click" || e.type === "tap") {
      var $target = $(e.target);

      if (play_state && $target.hasClass("reveal-modal-bg") || $target.closest("button").hasClass("close-reveal-modal")) {
        $reveal_video[0].pause();
        play_state = false;
      }

    } else {

      if (e.keyCode === 27) {
        $reveal_video[0].pause();
        play_state = false;
      }
    }

  });

}


var observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

/*============================================================================
  Number of entries
 ==============================================================================*/
 var product_price;

 if ( $('#ProductPrice').length ) {
     /*
     product_price = $('#ProductPrice').attr('content');
     var number_of_entries_elem = $('#number_of_entries');
     var number_of_entries = product_price / 5;
     number_of_entries_elem.text(Math.ceil(number_of_entries));
     */
 } else if ( $('.saso-cart-original-total').length ) {
     product_price = parseInt($('.saso-cart-original-total').text().split('$')[1]);
     var number_of_entries_elem = $('#number_of_entries');
     var number_of_entries = product_price / 5;
     number_of_entries_elem.text(Math.ceil(number_of_entries));
 }


  /*============================================================================
    Quantity Product Box on Mobile
    ==============================================================================*/
  (function(i) {
    var e = /iPhone/i,
      n = /iPod/i,
      o = /iPad/i,
      t = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
      r = /Android/i,
      d = /BlackBerry/i,
      s = /Opera Mini/i,
      a = /IEMobile/i,
      b = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
      h = RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
      c = function(i, e) {
        return i.test(e);
      },
      l = function(i) {
        var l = i || navigator.userAgent;
        (this.apple = {
          phone: c(e, l),
          ipod: c(n, l),
          tablet: c(o, l),
          device: c(e, l) || c(n, l) || c(o, l)
        }),
          (this.android = {
            phone: c(t, l),
            tablet: !c(t, l) && c(r, l),
            device: c(t, l) || c(r, l)
          }),
          (this.other = {
            blackberry: c(d, l),
            opera: c(s, l),
            windows: c(a, l),
            firefox: c(b, l),
            device: c(d, l) || c(s, l) || c(a, l) || c(b, l)
          }),
          (this.seven_inch = c(h, l)),
          (this.any =
            this.apple.device ||
            this.android.device ||
            this.other.device ||
            this.seven_inch);
      },
      v = (i.isMobile = new l());
    v.Class = l;
  })(window);

  if (
    isMobile.android.phone ||
    isMobile.apple.phone ||
    isMobile.apple.ipod ||
    isMobile.other.opera ||
    isMobile.other.firefox ||
    isMobile.other.blackberry
  ) {
    //inside the mobile function
    $(".template-product .quantity-selector")
      .css("padding-top", "8px")
      .css("padding-bottom", "5px")
      .css("padding-left", "11px")
      .css("padding-right", "11px");
  }

  /*============================================================================
    See More Tags
    ==============================================================================*/
  $(".collection-see-more-tags").on("click tap", function() {
    $(this).hide();
    $(".collection-tag-sidebar")
      .css("height", "100%")
      .css("max-height", "100%");
  });

  /*============================================================================
    Product Page Tabs for Descriptions and Reviews
    ==============================================================================*/
  $("ul.tabs li").click(function() {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });

  /*============================================================================
     Nav fade in
    ==============================================================================*/
  window.setTimeout(function() {
    $(".template-index .nav-bar").css("opacity", "1");
  }, 100);

  /*============================================================================
    Hover Effect on 'From The Blog'
    ==============================================================================*/
  $(".blog-link-a").each(function() {
    $(this).hover(function() {
      $(this)
        .next()
        .toggleClass("hover-effect");
    });
  });

  /*============================================================================
    Hero Slick Carousel
    ==============================================================================*/
  $("#Hero").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    nextArrow: "#slideshow .arrows-container .right",
    prevArrow: "#slideshow .arrows-container .left",
    adaptiveHeight: true
  });

  /*============================================================================
    Testimonials Slick Carousel
    ==============================================================================*/
  $("#testimonial-hero").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    nextArrow: "#testimonials .arrows-container .right",
    prevArrow: "#testimonials .arrows-container .left"
  });

  /*============================================================================
    Home Page Collection Slick Carousel
    ==============================================================================*/
  // $('#collection-grid').slick({
  //     dots: false,
  //     infinite: true,
  //     slidesToShow: 4,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     nextArrow: '#shopify-section-1513811742073 .arrows-container .right',
  //     prevArrow: '#shopify-section-1513811742073 .arrows-container .left',
  //     responsive: [
  //     {
  //        breakpoint: 1100,
  //        settings: {
  //            slidesToShow: 4,
  //        }
  //     },
  //     {
  //        breakpoint: 1090,
  //        settings: {
  //            slidesToShow: 3,
  //        }
  //     },
  //     {
  //        breakpoint: 900,
  //        settings: {
  //            slidesToShow: 2,
  //        }
  //     },
  //    {
  //        breakpoint: 640,
  //        settings: {
  //            slidesToShow: 1,
  //        }
  //    }
  //  ]
  // });

  /*============================================================================
    Related Products Carousel
    ==============================================================================*/
  $(".related-products-carousel-container .container").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    nextArrow: ".fa-caret-right",
    prevArrow: ".fa-caret-left",
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  /*============================================================================
    Product carousel on mobile
    ==============================================================================*/
  $(".mobile-carousel").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    customPaging: function(slider, i) {
      return '<div class="pager__item" id=' + i + ">  </div>";
    },
    useTransform: true,
    cssEase: "ease-in-out",
    nextArrow: ".fa-caret-right",
    prevArrow: ".fa-caret-left"
  });

  /* ==========================================================================
    #Changing Selects for Radio Buttons for mobile
    ========================================================================== */
  if ($(window).width() < 1023) {
    if ($(".single-option-selector").length) {
      var $selectElem = $(".single-option-selector"),
        $radioContainer = $("#radio-options-wrapper"),
        radioOptionsItemHtml = "";

      // iterating over the select elements

      $selectElem.each(function(index) {
        var $self = $(this),
          selectTitle = $(this)
            .prev("label")
            .text()
            .trim(),
          elemNumber = index;

        radioOptionsItemHtml += "<div class='radio-options-item'>";
        radioOptionsItemHtml +=
          "<span class='radio-item-title'>" +
          selectTitle +
          "</span><div class='custom-variant-options'>";
        // iterating over the option elements
        $self.children("option").each(function(index, elem) {
          var isChecked = elem.selected ? "checked" : "",
            radioId = elemNumber + "-" + index;

          radioOptionsItemHtml +=
            "<input type='radio' id='option-" +
            radioId +
            "' name='radio-option-" +
            elemNumber +
            "' value='" +
            elem.value +
            "' data-elem-index='" +
            elemNumber +
            "'" +
            isChecked +
            "><label for='option-" +
            radioId +
            "' style='cursor:pointer'>" +
            elem.value +
            "</label>";
        });

        radioOptionsItemHtml += "</div></div>";
      });

      // adding the html to the $radioContainer
      $radioContainer.html(radioOptionsItemHtml).addClass("active");

      // if the first variant is 'default title', hide it and do not show it
      if ($('label[for="option-0-0"]').text() == "Default Title") {
        $('label[for="option-0-0"]').hide();
      }

      // when clicking, it will trigger a change on the hidden select tag
      $("body").on(
        "click tap touchend",
        "#radio-options-wrapper label",
        function() {
          var currentValue = $(this)
              .prev()
              .val(),
            currentIndex = $(this)
              .prev()
              .data("elem-index");

          $("#productSelect-option-" + currentIndex)
            .val(currentValue)
            .trigger("change");
        }
      );
    }
  }

/* ==============
    Removing Booking Items Left (Free ones)
  ============== */

  if (window.location.pathname.includes("cart")) {

    $(".cart__remove").on("click tap", function(e) {
      var $button = $(this);
      // check if it's a booking item
      var is_package = $button.closest(`[data-label="Description"]`).text().match(/Location|Employee|Date Time|Duration/g).length === 4;

      // check if package
      if (is_package) {
        e.preventDefault();
        //grab id and next
        var items_to_remove = {};
        var package_item_id = +$button.closest(".cart__row").attr("data-variant-id");
        items_to_remove[package_item_id] = 0;

        $.getJSON("/cart.js", function(cart) {
          var package_item_id_index;   

          cart.items.forEach((item, index) => {
            if (item.variant_id === package_item_id) package_item_id_index = index;
          });

          // the one that's next
          var package_free_item_id = cart.items[package_item_id_index+1].variant_id;
          items_to_remove[package_free_item_id] = 0;


          $.post("/cart/update.js", { updates: items_to_remove }, function() {
            location.reload()
          }, "json");

        });

      }

    });

  }
  
});
