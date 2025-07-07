$('.plays').click(function (e) { 
    e.preventDefault();
    var name = $(this).attr('data-name');
    var type = $(this).attr('data-type');
    findAudio(name, type);

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
