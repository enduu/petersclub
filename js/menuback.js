$('.bckbtn').click(function () {
    $(this).addClass('animate__animated animate__fadeOut');
    $('.bubble').removeClass('floating');
    $('.bubble').css({
        'animation-duration': '0.5s',
        'animation-delay': '0s'
    });
    $('.bubble').addClass('animate__animated animate__zoomOutDown');
    $('.logo-center').addClass('animate__animated animate__fadeOutUp');
    $('.white-cont').on('animationend', function () {
        $(this).addClass('animate__animated animate__fadeOutDown');
    });
    setTimeout(() => {
        window.location.href = "../home.php";
    }, 1000);


});