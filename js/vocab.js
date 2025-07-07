$(document).ready(function(){
    $('.gomenu').click(function(){
        $('.gomenu').css('animation-duration', '0.6s');
        $('.swiper-container').css('animation-duration', '2s');
        if($('.swiper-container').hasClass('beginner')){
            console.log('beginner');
            goMenuAnimation("1");
        }
        if($('.swiper-container').hasClass('intermediate')){
            console.log('intermediate');
            goMenuAnimation("2");

        }
        if($('.swiper-container').hasClass('advanced')){
            console.log('advanced');
            goMenuAnimation("3");
        }
        /*
        setTimeout(() => {
            window.location.href = "../../../menu1.html";
        }, 100);
        */
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
    /*
    $('.logo_splash').click(function(){
        $(this).addClass('animate__animated');
        $(this).addClass('animate__fadeInUp');
    });
    */

    function goMenuAnimation(type){
        console.log('Hello!!!' + type);
        $('.gomenu').addClass('animate__animated');
        $('.gomenu').addClass('animate__fadeOut');
            $('header').addClass('animate__animated');
            $('header').addClass('animate__fadeOutUp');
        $('.swiper-container').on('animationend', function(){
                $(this).addClass('animate__animated');
                $(this).addClass('animate__fadeOut');
                setTimeout(() => {    
                    window.location.href = "home.php";
                }, 2100);
        });
    }
});