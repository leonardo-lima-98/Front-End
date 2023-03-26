$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 100) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  //   slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // Typing animation script
  var typed = new Typed(".typing", {
    strings: [
      "Front-End Designer",
      "Back-End Developer",
      "Full-Stack Developer Jr",
    ],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true,
  });

  //   toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
