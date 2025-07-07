function fadeInContent() {
    // $('.screen').css('display', 'flex');
    setTimeout(() => {
        // ENABLE TIPS SCREEN
        //$('.instructme').css('display', 'flex').addClass('animate__animated animate__zoomIn animate__delay-1s');
//REMOVE LATER
        $('.firstp').css('visibility', 'visible');
    }, 1000);

    $('.prevel').css('visibility', 'visible').addClass('animate__animated animate__fadeIn');
    setTimeout(() => {
        console.log('loaded');
        //$('.plays').addClass('animate__animated animate__heartBeat animate__repeat-2');

        $('.card:nth-child(1)').css('visibility', 'visible');
        $('.card:nth-child(1)').addClass('animate__animated animate__fadeInUp');
        setTimeout(() => {
            $('.card:nth-child(2)').css('visibility', 'visible');
            $('.card:nth-child(2)').addClass('animate__animated animate__fadeInUp');
        }, 250);
        setTimeout(() => {
            $('.card:nth-child(3)').css('visibility', 'visible');
            $('.card:nth-child(3)').addClass('animate__animated animate__fadeInUp');
        }, 500);
        setTimeout(() => {
            $('.card:nth-child(4)').css('visibility', 'visible');
            $('.card:nth-child(4)').addClass('animate__animated animate__fadeInUp');
        }, 750);
        setTimeout(() => {
            $('.card:nth-child(5)').css('visibility', 'visible');
            $('.card:nth-child(5)').addClass('animate__animated animate__fadeInUp');
        }, 1000);
        }, 500);
}

function fadeOutContent() {
    setTimeout(() => {
        console.log('loaded');
        //$('.plays').addClass('animate__animated animate__heartBeat animate__repeat-2');
        $('.card:nth-child(1)').removeClass('animate__animated animate__fadeIn')
        $('.card:nth-child(1)').addClass('animate__animated animate__fadeOutDown');
        setTimeout(() => {
            $('.card:nth-child(2)').removeClass('animate__animated animate__fadeIn');
            $('.card:nth-child(2)').addClass('animate__animated animate__fadeOutDown');
        }, 200);
        setTimeout(() => {
            $('.card:nth-child(3)').removeClass('animate__animated animate__fadeIn')
            $('.card:nth-child(3)').addClass('animate__animated animate__fadeOutDown');
        }, 300);
        setTimeout(() => {
            $('.card:nth-child(4)').removeClass('animate__animated animate__fadeIn')
            $('.card:nth-child(4)').addClass('animate__animated animate__fadeOutDown');
        }, 400);
        setTimeout(() => {
            $('.card:nth-child(5)').removeClass('animate__animated animate__fadeIn')
            $('.card:nth-child(5)').addClass('animate__animated animate__fadeOutDown');
        }, 500);
        }, 200);
}

function fadeOutBack(){
    $('.prevel').removeClass('animate__animated animate__fadeIn').addClass('animate__animated animate__fadeOutRight');
}

function fadeOutImage(){
    $('.svgcon').addClass('animate__animated animate__zoomOut');
}

$(document).ready(function(){
    $('.prevel').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('animate__animated animate__fadeIn').addClass('animate__animated animate__fadeOutLeft');
        $(this).on('animationend', function () {
            $(this).removeClass('animate__animated animate__fadeOutLeft').addClass('animate__animated animate__fadeIn');
        });
    });
    $('.back').click(function(){
        $('.back').removeClass('animate__animated animate__fadeIn').addClass('animate__animated animate__fadeOutRight');
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