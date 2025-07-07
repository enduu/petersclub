$(".nextex , #next").click(function(){
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

$('.helpb').click(function(){
    $('.helpme').css('display','flex')
    var getPage = $('.current').attr('id');
    var id = getPage.replace(/wfexercise/, '');
    var value= $(this).attr('data-help');
    $('.helptxt').html(value);
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