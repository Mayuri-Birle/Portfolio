
$(window).scroll(function (e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }

});
var typed = new Typed("#typed", {
    strings: [
        "Web Developer",
        "Learner",
        "enthusiastic and little bit sassy",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});
