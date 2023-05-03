$(document).ready(function () {
  if ($(window).width() >= 991) {
    sal({
      once: true,
    });
  } else {
    sal({
      disabled: true,
    });
  }
  /************************************ Menu ************************************/
  if ($(window).width() <= 991) {
    $(".menu-btn").click(function () {
      $(".overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });
    $(".menu-close,.overlay").click(function () {
      $(".overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });
  }
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    pagination: {
      el: ".main-slider .custom-pagination",
      clickable: true,
    },
  });
  /************************************ partners Slider ************************************/
  if ($(window).width() <= 991) {
    var partnersSwiper = new Swiper(".partners-cont .swiper", {
      spaceBetween: 15,
      loop: true,
      pagination: {
        el: ".partners-cont .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
  }
});
