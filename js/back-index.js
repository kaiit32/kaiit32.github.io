$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#easy-top').fadeIn(100);
        } else {
            $('#easy-top').fadeOut(0);
        }
    });
    $('#easy-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, {
            duration: 2000,
            easing: "easeOutBounce"
        });
    });
});