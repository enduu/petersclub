function postLoading() {
    $('.optionimage').css('visibility', 'hidden');
    $('.help, .skip').css('visibility', 'hidden');
    $('.help').removeClass('animate__animated animate__fadeInLeft');
    $('.skip').removeClass('animate__animated animate__fadeInRight');
    setTimeout(() => {
    console.log('loaded');
    //$('.key').addClass('animate__animated animate__heartBeat animate__repeat-2');
    $('.help, .skip').css('visibility', 'visible');
    $('.help').addClass('animate__animated animate__fadeInLeft');
    $('.skip').addClass('animate__animated animate__fadeInRight');
    }, 1000);
}

$(".nextex , #next").click(function(){
    $('.current').children('.keysentence').children('.lettercont').children('.key').removeAttr('data-keyletter');
    $('.success').css('display','none');
    var getPage = $('.current').attr('id');
    /*var getPage = $(this).parent().attr('id');*/
    var id = getPage.replace(/wfexercise/, '');
    var x= parseInt(id)+1;
    var max = 11;
    if( x < max ){
        setTimeout(() => {
            $('#wfexercise'+x).css('display','table-cell');
                $('#wfexercise'+x).removeClass('animate__animated');
                $('#wfexercise'+x).removeClass('animate__fadeOutDown');
                $('#wfexercise'+x).removeClass('animate__fadeInUp');
                $('#wfexercise'+id).removeClass('animate__animated');
                $('#wfexercise'+id).removeClass('animate__fadeOutDown');
                $('#wfexercise'+id).removeClass('animate__fadeInUp');
            $('#wfexercise'+id).addClass('animate__animated');
            $('#wfexercise'+id).addClass('animate__fadeOutDown');
            $('#wfexercise'+id).removeClass('current');
            $('.exercise'+id).remove();
            $('#wfexercise'+x).addClass('current');
            $('#wfexercise'+x).addClass('animate__animated');
            $('#wfexercise'+x).addClass('animate__fadeInUp');
            $('.optionletter').css('visibility', 'hidden');
            $('.optionletter').removeClass('animate__animated animate__fadeInUp');
            postLoading();
            setWidth();
        }, 600);
    }
    if( x === max){
        
        setTimeout(() => {
            $('.congrats').css('display', 'flex');
            $('.svgc').css('display','flex');
            $('#next').css('display','flex');
        }, 1000);
        
    }
});

$('.key').one('click', function (e) { 
    e.preventDefault();
    $('.pointer').css({
        'display': 'none'        
    });
    var totalletters=$('.current').children('.opttextcont').data('letters');
    console.log(totalletters);
    var x;
    var timer=100;
    for(x=1;x<=totalletters;x++){
        timer+=180;
        letters(x, timer);
    }
    function letters(x, timer) {
        setTimeout(() => {
            $('.optionletter:nth-child('+x+')').css('visibility', 'visible');
            $('.optionletter:nth-child('+x+')').addClass('animate__animated animate__fadeInUp');
        }, timer);
    }
});


$('.helpb').click(function(){
    var words = $(".helptxt").text().split("-");
        $(".helptxt").empty();
        $.each(words, function(i, v) {
            $(".helptxt").append($("<span>").text(v));
        });
    $('.helpme').css('display','flex')
    var getPage = $('.current').attr('id');
    var id = getPage.replace(/wfexercise/, '');
    var value= $(this).attr('data-help');
    $('.helptxt').html(value);
        var words = $(".helptxt").text().split("-");
        $(".helptxt").empty();
        $.each(words, function(i, v) {
            $(".helptxt").append($("<div>").text(v));
        });
    $('.svgh').css('display','flex');
    $('#close').css('display','flex');
    /*$('.wfex1').css('display','table-cell');//delete*/
});
$('#bq').click(function(){
    $('.wfex1').css('display','none');
});    

$('#again').click(function(){
    $(this).css('display','none');
    $('.again').css('display','none');
    $('.svgo').css('display','none');
});

$('#close').click(function(){
    $(this).css('display','none');
    $('.helpme').css('display','none');
    $('.svgh').css('display','none');
});

$('#congrats').click(function (e) {
    console.log('clicked');
    $('.congrats').children('*').addClass('animate__animated animate__fadeOut');
    setTimeout(() => {
        window.location.href = "../../main.php";
        console.log('redirect');
        
    }, 500);
    
});