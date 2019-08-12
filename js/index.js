$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".hamburger").toggleClass("change");
        $('#menu_list').toggle();
        $('.header-center').toggle();
    });
    $('#login').click(function () {
        $('.login').fadeIn();
    })
    $('.cancle').click(function () {
        $('.login').fadeOut(1000);
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() != 0) {
            $('.back').fadeIn();
        } else {
            $('.back').fadeOut();
        }
    });
    $('.back').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    })
});