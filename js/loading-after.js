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
            $('.loading-container').css('display','none');
            $('#wfexercise1').addClass('animate__animated');
            $('#wfexercise1').addClass('animate__fadeInUp');
            
                function postLoading() {
                    setTimeout(() => {
                    console.log('loaded');
                    $('.plays').addClass('animate__animated animate__heartBeat animate__repeat-2');
                    $('.help, .skip').css('visibility', 'visible');
                    $('.help').addClass('animate__animated animate__fadeInLeft');
                    $('.skip').addClass('animate__animated animate__fadeInRight');
                    $('.optionimage:nth-child(1)').css('visibility', 'visible');
                    $('.optionimage:nth-child(1)').addClass('animate__animated animate__fadeInUp');
                    setTimeout(() => {
                        $('.optionimage:nth-child(2)').css('visibility', 'visible');
                        $('.optionimage:nth-child(2)').addClass('animate__animated animate__fadeInUp');
                    }, 500);
                    setTimeout(() => {
                        $('.optionimage:nth-child(3)').css('visibility', 'visible');
                        $('.optionimage:nth-child(3)').addClass('animate__animated animate__fadeInUp');
                            setTimeout(() => {
                                $('.optionimage').removeClass('animate__animated animate__fadeInUp');
                                $('.plays').removeClass('animate__animated animate__heartBeat animate__repeat-2');
                            }, 500);
                    }, 1000);
                    }, 1000);

                    /*
                    // visual aid (won't use for now)
                    setInterval(() => {
                            $('.plays').removeClass('animate__animated animate__heartBeat animate__repeat-2').addClass('animate__animated animate__headShake');
                            setTimeout(() => {
                                $('.plays').removeClass('animate__animated animate__headShake');
                            }, 2000);
                        }, 5000);
                    
                    */
                    
                }
                postLoading();
        }, 500);
    }, 5000);
    /*
    $('.logo_splash').click(function(){
        $(this).addClass('animate__animated');
        $(this).addClass('animate__fadeInUp');
    });
    */
});