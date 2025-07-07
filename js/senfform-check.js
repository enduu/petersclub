$(document).ready(function () {
    var answer=$('.current').children('.keysentence').html();
    $('.answer').html(answer);
    $('.optiontext').click(function (e) { 
        $('.firstt').removeClass('first');
        e.preventDefault();
        datacontent=$(this).attr('data-content');
        $(this).addClass(datacontent);
        if($(this).hasClass('wrong')){
            $(this).addClass('animate__animated animate__headShake');
            $(this).on('animationend', function () {
                $('.optiontext').removeClass(datacontent);
                $('.optiontext').removeClass('animate__animated animate__headShake');
            });
        }
        if($(this).hasClass('right')){
            pageTransition() ;
        }
    });
});


function pageTransition() {
        var page=$('.current').attr('id');
        var pagenum = page.replace(/wfexercise/, '');
        if(pagenum==='10'){
            setTimeout(() => {
            $('.congrats').css('display', 'flex');
            $('.svgc').css('display','flex');
            $('#next').css('display','flex');
            }, 1000);
        }else{
            setTimeout(() => {
                $('.success').css('display', 'flex');
                $('.svgs').css('display','flex');
                $('#next').css('display','flex');
            }, 1000);
        }
}