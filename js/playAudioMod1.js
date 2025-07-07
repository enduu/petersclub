function findAudio(name, type){

var dir= '../../../audio/module/mod1/';
var basic=[];
var number=[];
var letter=[];
var module1=[];
var ui=[];
var possesive=[];
var conversation=[];
var flag=[];
var from=[];

possesive[0]='My-notebook';
possesive[1]='Your-notebook';
possesive[2]='His-pen';
possesive[3]='Her-pen';
possesive[4]='Its-bananas';
possesive[5]='Our-teacher';
possesive[6]='Their-desk';

basic[0]='man';
basic[1]='boy';
basic[2]='woman';
basic[3]='girl';
basic[4]='pen';
basic[5]='notebook';
basic[6]='window';
basic[7]='door';
basic[8]='teacher';
basic[9]='student';
basic[10]='desk';
basic[11]='chair';

module1[0]='module1-exe1';

number[0]='1';
number[1]='2';
number[2]='3';
number[3]='4';
number[4]='5';
number[5]='6';
number[6]='7';
number[7]='8';
number[8]='9';
number[9]='10';
number[10]='11';
number[11]='12';
number[12]='13';
number[13]='14';
number[14]='15';
number[15]='16';
number[16]='17';
number[17]='18';
number[18]='19';
number[19]='20';
number[20]='30';
number[21]='40';
number[22]='50';
number[23]='60';
number[24]='70';
number[25]='80';
number[26]='90';
number[27]='100';
number[28]='21';
number[29]='32';
number[30]='43';
number[31]='54';
number[32]='65';
number[33]='76';
number[34]='87';
number[35]='98';
number[36]='101';

letter[0]='a';
letter[1]='b';
letter[2]='c';
letter[3]='d';
letter[4]='e';
letter[5]='f';
letter[6]='g';
letter[7]='h';
letter[8]='i';
letter[9]='j';
letter[10]='k';
letter[11]='l';
letter[12]='m';
letter[13]='n';
letter[14]='o';
letter[15]='p';
letter[16]='q';
letter[17]='r';
letter[18]='s';
letter[19]='t';
letter[20]='u';
letter[21]='v';
letter[22]='w';
letter[23]='x';
letter[24]='y';
letter[25]='z';

conversation[0]='conv1q';
conversation[1]='conv1a';
conversation[2]='conv2s1';
conversation[3]='conv2s2';
conversation[4]='conv2s3';
conversation[5]='conv2s4';
conversation[6]='conv3s1';
conversation[7]='conv3s2';
conversation[8]='conv3s3';
conversation[9]='conv3s4';
conversation[10]='conv3s5';
conversation[11]='conv3s6';
conversation[12]='conv3s7';
conversation[13]='conv3s8';
conversation[14]='conv3s9';

flag[0]='spain';
flag[1]='us';
flag[2]='uk';
flag[3]='france';
flag[4]='canada';
flag[5]='australia';
flag[6]='italy';
flag[7]='china';
flag[8]='russia';
flag[9]='argentina';

from[0]='from-question';
from[1]='from-UK';
from[2]='from-France';
from[3]='from-China';
from[4]='from-Tokyo';
from[5]='from-Beijing';
from[6]='from-London';
from[7]='he-from-London';
from[8]='is-from-London';

ui[0]='message1';

switch (type) {
    case 'basic':
        var length= basic.length;
        break;
    case 'listening':
        var length= module1.length;
        break;
    case 'number':
        var length= number.length;
        break;       
    case 'letter':
        var length= letter.length;
        break;       
    case 'ui':
        var length= ui.length;
        break;       
    case 'possesive':
        var length= possesive.length;
        break;       
    case 'conversation':
        var length= conversation.length;
        break;       
    case 'flag':
        var length= flag.length;
        break;       
    case 'grammar-from':
        var length= from.length;
        break;       
    default:
        break;
}

var y;
// IMPORTANT NOTE: for Beginners var **type** use the plural form (animalS, colorS, etc)
        var fold= type+'/';
            for(y=0; y<length; y++){
                if(name==basic[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+basic[y]+'.mp3';
                audio.play();
                }
                //added on end to prevent override
                if(name==module1[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+module1[y]+'.mp3';
                $('.plays').css('pointer-events','none');
                audio.onended = function() {
                    $('.plays').css('pointer-events','all');
                    console.log("The audio has ended");
                };
                audio.play();
                }
                if(name==number[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+number[y]+'.mp3';
                audio.play();
                }
                if(name==letter[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+letter[y]+'.mp3';
                audio.play();
                }
                if(name==ui[y]){
                    var audio = document.createElement('audio');
                    audio.src = dir+fold+ui[y]+'.mp3';
                    audio.play();
                }
                if(name==possesive[y]){
                    var audio = document.createElement('audio');
                    audio.src = dir+fold+possesive[y]+'.mp3';
                    audio.play();
                }
                if(name==conversation[y]){
                    var audio = document.createElement('audio');
                    audio.src = dir+fold+conversation[y]+'.mp3';
                    $('.plays').css('pointer-events','none');
                    audio.onended = function() {
                        $('.plays').css('pointer-events','all');
                        console.log("The audio has ended");
                    };
                    audio.play();
                }
                if(name==from[y]){
                    var audio = document.createElement('audio');
                    audio.src = dir+fold+from[y]+'.mp3';
                    $('.play-pulse').css('pointer-events','none');
                    audio.onended = function() {
                        $('.play-pulse').css('pointer-events','all');
                        console.log("The audio has ended");
                    };
                    audio.play();
                }
                if(name==flag[y]){
                    var audio = document.createElement('audio');
                    audio.src = dir+fold+flag[y]+'.mp3';
                    audio.play();
                }
            }

        $('.pausebut').click(function stopAudio(){
            audio.pause();
            audio.currentTime = 0.0;
            //$('.plays').css('pointer-events','all');
        });
        // $('.pausets').click(function stopAudio(){
        //     audio.pause();
        //     audio.currentTime = 0.0;
        //     //playtf(0);
        //     //$('.plays').css('pointer-events','all');
        // });
        $('.nextel, .prevel').click(function stopAudio(){
            audio.pause();
            audio.currentTime = 0.0;
            //$('.plays').css('pointer-events','all');
        });

    }

        //Give the Audio element a stop function