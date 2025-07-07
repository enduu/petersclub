    //BUBBLE CLICK FUNCTION
    $('.bubble').click(function () {
        $('.bubble').removeClass('floating');
        var e = $(this).attr('id');
        var f = e.replace(/bub/, '');
        const element = document.querySelector('.bubble');
        element.style.setProperty('--animate-duration', '2s');
        //console.log(e);
        //console.log(f);
        /*animateCSS('.white-cont', 'fadeOutUp').then((message) => {
                    $('.bubbles').not('#bub'+f).hide();
        });*/
        $('.white-cont').css('top', '0').css('height', '100%').css('border-radius', '0').css('transition',
            'ease-in 2s');
        $('.white-cont.bubble-cont').css('background-color','#FDCC0D');
        $('.bubble').not('#bub' + f).addClass('animate__animated animate__fadeOutDown').hide();
        $('#bub' + f).css('--animate-duration', '2.5s');
        $('#bub' + f).addClass('animate__animated animate__slideOutUp');
        animateCSS('.bckbtn', 'fadeOut').then((message) => {
            $('.bckbtn').hide();
            console.log('faded');
        });


        if($('.bubble-cont').hasClass("intermediate")){ 
            $('.white-cont.bubble-cont').css('background-color','#FD7D0D'); 
            
            setTimeout(() => {
                window.location.href = "exe/vocab/i/vocab" + f + ".html";
            }, 3500);
        }

        if($('.bubble-cont').hasClass("beginner")){ 
            $('.white-cont.bubble-cont').css('background-color','#FDCC0D'); 
            
            setTimeout(() => {
                window.location.href = "exe/vocab/b/vocab" + f + ".html";
            }, 3500);
        }

        if($('.bubble-cont').hasClass("advanced")){ 
            $('.white-cont.bubble-cont').css('background-color','#590eb4'); 
            
            setTimeout(() => {
                window.location.href = "exe/vocab/a/vocab" + f + ".html";
            }, 3500);
        }

    });