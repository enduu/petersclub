$('.plays').click(function () {

    console.log('plays');
    var e = $(this).attr('id');
    var f = e.replace(/plays/, '');
    console.log(f);
    findAudio(f);
    $('.playing').css('display', 'block');
    $('.play___holder').css('display', 'none');
    $(this).addClass('animate__animated animate__pulse');
    $(this).on('animationend', function () {
        $(this).removeClass('animate__animated animate__pulse');
    });
    setTimeout(() => {
        $('.play___holder').css('display', 'block');
        $('.playing').css('display', 'none');
        console.log('status change');
    }, 1400);
});