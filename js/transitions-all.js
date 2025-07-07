//white-cont NEXT transition

function nextPage(color){
    console.log(color);
    $('.white-cont').children().addClass('animate__animated animate__fadeOutDown');
    $('.mainheader').addClass('animate__animated animate__backOutUp');
    $('.white-cont').on('animationend', function () {
    $(this).css('top', '0').css('height', '100%').css('border-radius', '0').css('transition',
    'ease-in 1s').css('overflow','hidden').css('background-color',color); ;
    });
    console.log('next');
}


//white-cont PREVIOUS transition
function prevPage(){
    $('.white-cont').on('animationend', function () {
        $(this).addClass('animate__animated animate__fadeOutDown');
    });
}

