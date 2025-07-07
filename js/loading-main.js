$(document).ready(function(){
    setTimeout(() => {
        /*$('.loading-txt').css('display','block');*/
        $('.amoment').addClass('animate__animated');
        $('.amoment').addClass('animate__fadeOut');
        $('.logo_splash').addClass('animate__animated');
        $('.logo_splash').addClass('animate__fadeOut');
        setTimeout(() => {
            $('body').css('overflow','visible');
            $('.loading-container').css('display','none');
            $('.signin').css('display','table');
            $('.white-cont').addClass('animate__animated');
            $('.white-cont').addClass('animate__fadeInUp');
        }, 500);
    }, 4000);
    /*
    $('.logo_splash').click(function(){
        $(this).addClass('animate__animated');
        $(this).addClass('animate__fadeInUp');
    });
    */
});