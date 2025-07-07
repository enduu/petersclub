$(document).ready(function () {
    var click=0;
    setWidth();
    $('.optionletter').click(function (e) { 
        var answer=$('.current').children('.keysentence').html();
        $('.answer').html(answer);
        var targetsel=$('.current').children('.keysentence');
        var answerkeysel=targetsel.data('keyword');
        $('.success').children('.answer').children('.lettercont').html(answerkeysel);
        $('.firstt').removeClass('first');
        e.preventDefault();
        datacontent=$(this).attr('data-content');
        $(this).addClass(datacontent);
        if($(this).hasClass('wrong')){
            $(this).removeClass('animate__animated animate__fadeInUp');
            $(this).addClass('animate__animated animate__headShake');
            $(this).on('animationend', function () {
                $('.optionletter').removeClass(datacontent);
                $('.optionletter').removeClass('animate__animated animate__headShake');
            });
        }
        if($(this).hasClass('right') && !$(this).hasClass('clicked')){
            $(this).addClass('clicked');

            //array? letterclick[]
            var letterclick=[$(this).html()];
            //console.log(letterclick);
            var target= $('[data-keyletter='+letterclick+']');
            var getpos= target.position();
            var getleft=getpos.left;
            var gettop=getpos.top;
            //console.log(getleft+"-"+gettop);
            getthispos=$(this).position();
            getthisleft=getthispos.left;
            getthistop=getthispos.top;
            //on animation end $('.right')
            
            setTimeout(() => {
                $(this).removeClass('right');
                if(checkTargetSize()){
                    $(this).addClass('moveds');
                }else{
                    $(this).addClass('moved');
                }
                $(this).css({'position':'absolute','left': getthisleft,'top': getthistop-2 }).animate({
                    'left': getleft,
                    'top': gettop
                },1000); 
            }, 1500);
            var key= $('.key').data('keyletter');
            var wordlength=$('.current').children('.keysentence').data('wl');
            wordlength= parseInt(wordlength);
            
            var z;
            for(z=0;z<wordlength;z++){
                    //console.log("bingo!");
                    var targetacc= $('[data-keyletter='+letterclick[z]+']');
                    targetacc.first().removeAttr('data-keyletter');
                    //console.log(letterclick[z]+'!');
            }

            click++
            //console.log(click);
            //console.log(wordlength);
            if(click==wordlength){
                setTimeout(() => {
                    pageTransition() ;
                }, 2500);
                click=0;
                
            }
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

function setWidth(){
    //var letterarraywidth=$('.current').children('.keysentence').children('.lettercont').css('width').replace('px','');
    //var width=parseInt(letterarraywidth);
    /*console.log(letterarraywidth);
    if(width>280){
        console.log('bingo!!');
        $('.key').addClass('smallkey');
        return true;
    }
    if(width<=280){
        console.log('okay');
        $('.key').removeClass('smallkey');
        return false;
    }*/
    var countLetters=$('.current').children('.keysentence').data('wl');
    var letters= parseInt(countLetters);
    if(letters>5){
        $('.key').addClass('smallkey');
        return true;
    }
    if(letters<=5){
        $('.key').removeClass('smallkey');
        return false;
    }

}

function checkTargetSize(){
    var getKey=$('.current').children('.keysentence').children('.lettercont').children('.key');
    if(getKey.hasClass('smallkey')){
        return true;
    }else{
        return false;
    }
}