$(window).scroll(function(){
    $("main").css("opacity", 1-$(window).scrollTop() / 1000);
});
