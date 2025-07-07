var correctans=0;
// writing exercise

$('.helpert').click(function (e) { 
        e.preventDefault();
        //find e finds the input for the help button to then check its attr name
        var finde=$(this).siblings('.negc').children(':first-child');
        var word=finde.attr('name');
        finde.val(word);
        finde.removeClass('nope').addClass('okie');
        finde.parent().parent().removeClass('wrongd');
        finde.siblings('.negative').css('visibility','hidden');
        finde.parent().siblings('.helpert').css('visibility','hidden');
});

    $('input[type="text"]').focusout(function (e) { 
        e.preventDefault();
        var text=$(this).val().toLowerCase();;
        //console.log(text);
        var word=$(this).attr('name');
        var imgdir= '../../img/mod/module-beginner/';
        //console.log(word);
            if(!text==' '&&text==word){
                //console.log('bingo!!');
                $(this).siblings('.negative').css('visibility','hidden');
                $(this).parent().siblings('.helpert').css('visibility','hidden');
                $(this).parent().parent().removeClass('wrongd');
                $(this).removeClass('nope').addClass('okie');
                $('[data-img='+word+']').css('visibility','visible').addClass('animate__animated animate__flash').attr('data', imgdir+word+'.svg');
            }else{
                $(this).addClass('nope');
                $(this).siblings('.negative').css('visibility','visible');
                $(this).parent().siblings('.helpert').css('visibility','visible');
                $(this).parent().parent().addClass('wrongd');
            }
    });

    $('input[type="text"]').focus(function (e) {
           $(this).removeClass('nope');
           $(this).siblings('.negative').css('visibility','hidden');
           $(this).parent().siblings('.helpert').css('visibility','hidden');
           $(this).parent().parent().removeClass('wrongd');
    });
//the button checkval will contain the exercise number
//the class .eX is the class assigned to the inputs --- e1(for exercise1), e2(for exercise2) and so on ...
// using the eX.length can chack how many inputs the exercise has ans check if all of them are correct or not
    $('.checkVal').click(function (e) { 
        e.preventDefault();
        var exenum=$(this).attr('data-exe');
        switch (exenum) {
            case "1":
                //console.log('val1');
                var inpcount=$('.e1').length;
                break;
            case "2":
                //console.log('val2');
                var inpcount=$('.e2').length;
                break;
            case "3":
                //console.log('val3');
                var inpcount=$('.e3').length;
                break;
        
            default:
                break;
        }
        var c;
        for(c=1;c<inpcount+1;c++){
            //console.log(c);
            checkValuesClick(c, exenum);
        }
        //console.log(correctans+'^^');
        //var okietotal=$('.okie').length;
        console.log(correctans);
        console.log(inpcount);
        if(correctans==inpcount){
            $('.success').css('display','flex');
            //console.log('u good');
        }else{
            $('.again').css('display','flex');
            //console.log('you shall not pass!');
        }
        correctans=0;
    });

    $(function(){
        $(document).on('click','input[type=text]',function(){ this.select(); });
    });

    function checkValuesClick(elemCount,exenum){
        //the id of the input have to correlate with the total number of inputs per page plus an unique identifier eg: #wordX and #wordsX
        //that way we can check how many inputs are there and how many of them are correct
        var inpname;
        switch (exenum) {
            case '1':
                inpname='#inp';
                break;
            case '2':
                inpname='#word';
                break;
            case '3':
                inpname='#words';
                break;
        
            default:
                break;
        }
        console.log(inpname);
        var text=$(inpname+elemCount).val().toLowerCase();
        //console.log(text+"@");
        var word=$(inpname+elemCount).attr('name');
        var imgdir= '../../img/mod/module-beginner/';
        //console.log(word+"@!");
            if(!text==' '&&text==word){
                //console.log('checked n okay');
                $(inpname+elemCount).siblings('.negative').css('visibility','hidden');
                $(inpname+elemCount).parent().siblings('.helpert').css('visibility','hidden');
                $(inpname+elemCount).parent().parent().removeClass('wrongd');
                $(inpname+elemCount).removeClass('nope').addClass('okie');
                $('[data-img='+word+']').css('visibility','visible').addClass('animate__animated animate__flash').attr('data', imgdir+word+'.svg');
                correctans++;
            }else{
                //console.log('checked n wrong');
                $(inpname+elemCount).addClass('nope');
                $(inpname+elemCount).siblings('.negative').css('visibility','visible');
                $(inpname+elemCount).parent().siblings('.helpert').css('visibility','visible');
                $('#inp'+elemCount).parent().parent().addClass('wrongd');
            }
    }