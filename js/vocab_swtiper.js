var swiper = new Swiper('.swiper-container', {
    init: false,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.nextel',
    },
    /* effect: 'cube',
     grabCursor: true,
     cubeEffect: {
       shadow: true,
       slideShadows: true,
       shadowOffset: 20,
       shadowScale: 0.94,
     },*/
});

swiper.on('init', function () {
    /* do something */
    // init Swiper
    setTimeout(() => {
        $('header').addClass('animate__animated');
        $('header').addClass('animate__fadeInDown');
        $('.assisttext').addClass('animate__animated');
        $('.assisttext').addClass('animate__fadeInUp');
        $('.gomenu').addClass('animate__animated');
        $('.gomenu').addClass('animate__fadeIn');
    }, 5500);
});
swiper.init();

swiper.on('touchStart', function () {
    /*console.log('swipped');*/
    $('header').removeClass('animate__animated');
    $('header').removeClass('animate__fadeInDown');
    $('.assisttext').removeClass('animate__animated');
    $('.assisttext').removeClass('animate__fadeInUp');
    $('.gomenu').removeClass('animate__animated');
    $('.gomenu').removeClass('animate__fadeIn');

});

swiper.on('slideChange', function () {
    /*console.log('slide changed');*/
    $('header').addClass('animate__animated');
    $('header').addClass('animate__fadeInDown');
    $('.assisttext').addClass('animate__animated');
    $('.assisttext').addClass('animate__fadeInUp');
    $('.gomenu').addClass('animate__animated');
    $('.gomenu').addClass('animate__fadeIn');
});

