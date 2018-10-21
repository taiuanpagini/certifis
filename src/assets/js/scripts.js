$(window).load(function() {
    $(".loader").fadeOut("slow", function(){
    $(".loaders").delay(300).fadeOut("slow");
    });
})

var revapi;
$(document).ready(function() {
    revapi = $('.tp-banner').revolution(
    {
        delay:9000,
        startwidth:1170,
        startheight:720,
        hideThumbs:10,
        lazyLoad:"on"
    });
});