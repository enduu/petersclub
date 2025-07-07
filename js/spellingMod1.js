var played=0;
var correctLog=0;
var okval=[];
var cname=[];
    cname[0]="d";
    cname[1]="a";
    cname[2]="v";
    cname[3]="i";
    cname[4]="d";

//shows and hides the character so the audio won't play two times
//the user can click the image to play the audio again
$('.spell').click(function (e) { 
    e.preventDefault();
    $('.spell').css('display','flex');
    $('.holder').css('display','none');
    setTimeout(() => {
        $('.holder').css('display','flex');
        $('.spell').not('.holder').css('display','none');
    }, 3000);
    //message audio is fixed for this exercise message1.mp3 is the name of the audio
    var message='message1'
    var type='ui'
    findAudio(message, type);
    //console.log('clicking!');
});

//okVal array of elements that were clicked in the correct order
//cname is the array with the Name of the Character (d, a , v , i ,d) in this exercise
$('.letp').click(function (e) { 
    $('.letp').removeClass('animate__animated animate__rubberBand animate__repeat-3');
    var lettclick=$(this).html().toLowerCase();
    //console.log(lettclick);
    if(cname[0]==lettclick){
        
        okval.push(cname[0]);
        var stext=okval.toString();
        $('.stext').html(stext.replace(/,/g,'-').toUpperCase());
        $('.stext').addClass('animate__animated animate__fadeInUp');
        $('.stext').on('animationend', function () {
            $('.stext').removeClass('animate__animated animate__fadeInUp');
        });
        cname.splice(0, 1);
        $(this).addClass('animate__animated animate__tada');
        $(this).on('animationend', function () {
            $(this).css('visibility', 'hidden');
        });
        correctLog++;
        
    }else{
        $(this).addClass('animate__animated animate__shakeX');
        $(this).on('animationend', function () {
            $(this).removeClass('animate__animated animate__shakeX');
        });
    }
    //console.log(correctLog);
    // correctLog value is fixed to 5 now --- total letters in the name DAVID --- because the elements in the array cname will be removed
    if(correctLog==5){
        $('.stext').addClass('okstext');
        $('.holder').css('display','flex');
        $('.spell').not('.holder').css('display','none');
        setTimeout(() => {
        $('.success').css('display','flex');
        }, 1000);
        played=1;
    }
});