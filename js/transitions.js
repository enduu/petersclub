$("#login").click(function(){
    setTimeout(() => {
        /*$('.loading-txt').css('display','block');*/
        $('.login').css('display','flex');
        $('.login').removeClass('animate__fadeInUp');
        $('.login').removeClass('animate__fadeOutDown');
        $('.signin').addClass('animate__animated');
        $('.signin').addClass('animate__fadeOutDown');
        $('.login').addClass('animate__animated');
        $('.login').addClass('animate__fadeInUp');
    }, 100);
});

$("#forgot").click(function(){
    setTimeout(() => {
        /*$('.loading-txt').css('display','block');*/
        $('.recover').css('display','flex');
        $('.recover').removeClass('animate__fadeInUp');
        $('.recover').removeClass('animate__fadeOutDown');
        $('.login').addClass('animate__animated');
        $('.login').addClass('animate__fadeOutDown');
        $('.recover').addClass('animate__animated');
        $('.recover').addClass('animate__fadeInUp');
    }, 100);
});

$("#signin").click(function(){
    setTimeout(() => {
        /*$('.loading-txt').css('display','block');*/
        $('.signin').css('display','flex');
        $('.signin').removeClass('animate__fadeInUp');
        $('.signin').removeClass('animate__fadeOutDown');
        $('.login').addClass('animate__animated');
        $('.login').addClass('animate__fadeOutDown');
        $('.signin').addClass('animate__animated');
        $('.signin').addClass('animate__fadeInUp');
    }, 100);
});

$("#gback").click(function(){
    setTimeout(() => {
        /*$('.loading-txt').css('display','block');*/
        $('.signin').css('display','flex');
        $('.signin').removeClass('animate__fadeInUp');
        $('.signin').removeClass('animate__fadeOutDown');
        $('.recover').addClass('animate__animated');
        $('.recover').addClass('animate__fadeOutDown');
        $('.signin').addClass('animate__animated');
        $('.signin').addClass('animate__fadeInUp');
    }, 100);
});