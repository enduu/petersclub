$("#wordform").click(function(){
    $('#wordform').addClass('animate__animated');
    $('#wordform').addClass('animate__backOutUp');
    setTimeout(() => {
        /*$('.loading-txt').css('display','block');*/
        /*$('.login').css('display','flex');
        $('.login').removeClass('animate__fadeInUp');
        $('.login').removeClass('animate__fadeOutDown');
        $('.signin').addClass('animate__animated');
        $('.signin').addClass('animate__fadeOutDown');
        $('.login').addClass('animate__animated');
        $('.login').addClass('animate__fadeInUp');*/
        window.location.href = "wordform.html";
    }, 1000);
    	
});