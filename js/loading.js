$(document).ready(function(){
    setTimeout(() => {
        /*$('.loading-txt').css('display','block');*/
        $('.amoment').addClass('animate__animated');
        $('.amoment').addClass('animate__fadeOut');
        $('.logo_splash').addClass('animate__animated');
        $('.logo_splash').addClass('animate__fadeOut');
        setTimeout(() => {
            $('.loading-container').css('display','none');
            $('.signin').css('display','flex');
            $('.full-white-cont').addClass('animate__animated');
            $('.full-white-cont').addClass('animate__fadeInUp');
        }, 500);
    }, 8000);
    /*
    $('.logo_splash').click(function(){
        $(this).addClass('animate__animated');
        $(this).addClass('animate__fadeInUp');
    });
    */
});