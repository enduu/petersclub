$(document).ready(function(){
    $('.gomenu').click(function(){
        $('.gomenu').css('animation-duration', '0.6s');
        $('.swiper-container').css('animation-duration', '2s');
        $('.gomenu').addClass('animate__animated');
        $('.gomenu').addClass('animate__fadeOut');
            $('header').addClass('animate__animated');
            $('header').addClass('animate__fadeOutUp');
        $('.swiper-container').on('animationend', function(){
                $(this).addClass('animate__animated');
                $(this).addClass('animate__fadeOut');
                setTimeout(() => {    
                    window.location.href = "./home.html";
                }, 2100);
        });
    });
    setTimeout(() => {
        $('.amoment').addClass('animate__animated');
        $('.amoment').addClass('animate__fadeOut');
        $('.logo_splash').addClass('animate__animated');
        $('.logo_splash').addClass('animate__fadeOut');
        setTimeout(() => {
        /*    $('body').css('overflow','visible');*/
            $('.loading-container').css('display','none');
            /*$('.signin').css('display','table');*/
            $('#wfexercise1').addClass('animate__animated');
            $('#wfexercise1').addClass('animate__fadeInUp');
        }, 500);
    }, 5000);
});