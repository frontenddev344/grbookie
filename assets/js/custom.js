$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
    });
    $(".close").click(function(){
    $("body").removeClass("menuToggle");
    });
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});