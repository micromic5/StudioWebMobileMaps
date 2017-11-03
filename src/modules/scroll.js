$(function() {
    //caches a jQuery object containing the header element
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= 850) {
           $("#header").remove();
        } 
    });
});