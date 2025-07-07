$('.optionimage').click(function (e) { 
    var content = $(this).attr('data-content');

    if(content==='right'){
        $(this).addClass('correcta');
        var page=$('.current').attr('id');
        var pagenum = page.replace(/wfexercise/, '');
        //$('.correctb').css('display','block');
        //$('.skip').css('display','none');
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
    if(content==='wrong'){
        $(this).addClass('wronga');
        $(this).addClass('animate__animated animate__headShake');
    }
});