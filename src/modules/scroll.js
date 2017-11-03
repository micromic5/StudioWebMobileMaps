$(function() {
    //caches a jQuery object containing the header element
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1000) {
           $("#deleteall").remove();
        } 
    });
});