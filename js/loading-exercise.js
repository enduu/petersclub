$(document).ready(function(){
    $('.bckbtn').click(function(){
        setTimeout(() => {
            window.location.href = "../../main.php";
        }, 100);
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
});