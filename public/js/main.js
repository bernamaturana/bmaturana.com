$(function () {
    // Add background color to nav when user scrolls more than 50px down
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("#main-navbar").removeClass("blue");
            $("#main-navbar").addClass("scrolledNavbar");
        }
        if ($(this).scrollTop() < 50) {
            $("#main-navbar").removeClass("scrolledNavbar");
            $("#main-navbar").addClass("blue");
        }
    });
});