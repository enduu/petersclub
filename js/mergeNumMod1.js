//Starts the merge of the two elements
$('.mergestart').click(function (e) { 
    e.preventDefault();
    $(this).css('display','none');
            var type=$(this).siblings('.result').attr('data-type');
            var name = $(this).siblings('.result').attr('data-name');
            //console.log(type+'^^'+name);
            merge(type, name);
});

//Once the merging process is completed
//the Nextw button will come up and by pressing it will move to the next elements to be merged

$('.nextw').click(function (e) { 
    $('.nextw').addClass('animate__animated animate__bounceOut').removeClass('lastb').css('display','none');
    e.preventDefault();
    var instnumber= $(this).parent().parent().attr('data-inst');
    var nextinst= parseInt(instnumber)+1;
    //console.log(instnumber+'!!'+nextinst);
    if (instnumber==8) {
        $('.nextw').addClass('lastb');
    }
    
    if(instnumber<9){
    $('#w'+nextinst).addClass('vis');
    $('#w'+instnumber).removeClass('vis');
    }else{
        $('#w1').addClass('vis');
        $('#w'+instnumber).removeClass('vis');
        $('.nextw').removeClass('lastb');
        $('.mergestart').css('display','table');
    }

    $('.wordcont:nth-child(1)').css('display','flex').removeClass('animate__animated animate__lightSpeedOutRight animate__fast');
    $('.wordcont:nth-child(2)').css('display','flex').removeClass('animate__animated animate__lightSpeedOutLeft animate__fast');
    $('.result').css('display','none').removeClass('animate__animated animate__zoomIn');
});

function merge(type,name){
            $('.wordcont:nth-child(1)').addClass('animate__animated animate__lightSpeedOutRight animate__fast');
            $('.wordcont:nth-child(2)').addClass('animate__animated animate__lightSpeedOutLeft animate__fast');
            setTimeout(() => {
                findAudio(name,type);
                $('.wordcont').not('result').css('display','none');
                $('.result').css('display','flex').addClass('animate__animated animate__zoomIn');
            }, 800);
                setTimeout(() => {
                    $('.nextw').css('display', 'flex').removeClass('animate__animated animate__bounceOut').addClass('animate__animated animate__bounceIn');
                    $('.nextw').on('animationend', function () {
                        $('.nextw').removeClass('animate__animated animate__bounceIn')
                    });
                }, 1000);
}