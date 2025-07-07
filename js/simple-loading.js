function fadeInContent() {
    $('.back').css('visibility', 'visible').addClass('animate__animated animate__fadeIn');
    setTimeout(() => {
        console.log('loaded');
        //$('.plays').addClass('animate__animated animate__heartBeat animate__repeat-2');

        $('.menubut:nth-child(2)').css('visibility', 'visible');
        $('.menubut:nth-child(2)').addClass('animate__animated animate__fadeInUp');
        setTimeout(() => {
            $('.menubut:nth-child(3)').css('visibility', 'visible');
            $('.menubut:nth-child(3)').addClass('animate__animated animate__fadeInUp');
        }, 500);
        setTimeout(() => {
            $('.menubut:nth-child(4)').css('visibility', 'visible');
            $('.menubut:nth-child(4)').addClass('animate__animated animate__fadeInUp');
        }, 1000);
        }, 500);
}

function fadeOutContent() {
    setTimeout(() => {
        console.log('loaded');
        //$('.plays').addClass('animate__animated animate__heartBeat animate__repeat-2');
        $('.menubut:nth-child(2)').removeClass('animate__animated animate__fadeIn')
        $('.menubut:nth-child(2)').addClass('animate__animated animate__fadeOutDown');
        setTimeout(() => {
            $('.menubut:nth-child(3)').removeClass('animate__animated animate__fadeIn');
            $('.menubut:nth-child(3)').addClass('animate__animated animate__fadeOutDown');
        }, 200);
        setTimeout(() => {
            $('.menubut:nth-child(4)').removeClass('animate__animated animate__fadeIn')
            $('.menubut:nth-child(4)').addClass('animate__animated animate__fadeOutDown');
        }, 500);
        }, 200);
}

function fadeOutBack(){
    $('.back').removeClass('animate__animated animate__fadeIn').addClass('animate__animated animate__fadeOutRight');
}

function fadeOutImage(){
    $('.svgcon').addClass('animate__animated animate__zoomOut');
}

$(document).ready(function(){
    $('.back').click(function(){
        $('.back').removeClass('animate__animated animate__fadeIn').addClass('animate__animated animate__fadeOutLeft');
        fadeOutContent();
        setTimeout(() => {
            window.location.href = "../../main.php";
        }, 1000);
    });
    setTimeout(() => {
        $('.amoment').addClass('animate__animated');
        $('.amoment').addClass('animate__fadeOut');
        $('.logo_splash').addClass('animate__animated');
        $('.logo_splash').addClass('animate__fadeOut');
        setTimeout(() => {
            $('.loading-container').css('display','none');
            fadeInContent();
        }, 500);
    }, 5000);
});