$('.menubut').click(function (e) { 
    $(this).removeClass('animate__animated animate__fadeInUp').addClass('animate__animated animate__rubberBand');

    if($(this).hasClass('beginner')){
        setTimeout(() => {
            fadeOutContent();
            fadeOutBack();
            fadeOutImage();
            setTimeout(() => {
                if($('body').hasClass('writing')){
                window.location.href= 'writing-beginner.html';
                }
                if($('body').hasClass('memory')){
                window.location.href= 'memoryplus-beginner.html';
                }
                if($('body').hasClass('listening')){
                window.location.href= 'listening-beginner.html';
                }
            }, 1800);
        }, 1000);
        
    }
    if($(this).hasClass('intermediate')){
        setTimeout(() => {
            fadeOutContent();
            fadeOutBack();
            fadeOutImage();
            setTimeout(() => {
                if($('body').hasClass('writing')){
                window.location.href= 'writing-intermediate.html';
                }
                if($('body').hasClass('memory')){
                window.location.href= 'memoryplus-intermediate.html';
                }
                if($('body').hasClass('listening')){
                window.location.href= 'listening-intermediate.html';
                }
            }, 1800);
        }, 1000);
    }
    if($(this).hasClass('advanced')){
        setTimeout(() => {
            fadeOutContent();
            fadeOutBack();
            fadeOutImage();
            setTimeout(() => {
                if($('body').hasClass('writing')){
                window.location.href= 'writing-advanced.html';
                }
                if($('body').hasClass('memory')){
                window.location.href= 'memoryplus-advanced.html';
                }
                if($('body').hasClass('listening')){
                window.location.href= 'listening-advanced.html';
                }
            }, 1800);
        }, 1000);
    }
});