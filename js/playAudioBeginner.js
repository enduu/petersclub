function findAudio(name, type){

var dir= '../../../audio/vocab/beginner/';
var animal=[];
var color=[];
var number=[];
var shape=[];
var weather=[];

animal[0]='dog';
animal[1]='cat';
animal[2]='monkey';
animal[3]='giraffe';
animal[4]='hippopotamus';
animal[5]='mouse';
animal[6]='dolphin';
animal[7]='crab';
animal[8]='cow';
animal[9]='chicken';

color[0]='red';
color[1]='green';
color[2]='blue';
color[3]='yellow';
color[4]='pink';
color[5]='orange';
color[6]='white';
color[7]='black';
color[8]='purple';
color[9]='brown';

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

shape[0]='square';
shape[1]='triangle';
shape[2]='rectangle';
shape[3]='circle';
shape[4]='star';
shape[5]='oval';
shape[6]='cross';
shape[7]='pentagon';
shape[8]='kite';
shape[9]='heart';

weather[0]='sunny';
weather[1]='rainy';
weather[2]='snowy';
weather[3]='windy';
weather[4]='cloudy';
weather[5]='foggy';
weather[6]='stormy';
weather[7]='partly';
weather[8]='sleet';
weather[9]='hail';

// IMPORTANT NOTE: for Beginners var **type** use the plural form (animalS, colorS, etc)
        var fold= type+'/';
        var y;
            for(y=0; y<10; y++){
                if(name==animal[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+animal[y]+'.mp3';
                audio.play();
                }
                if(name==color[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+color[y]+'.mp3';
                audio.play();
                }
                if(name==number[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+number[y]+'.mp3';
                audio.play();
                }
                if(name==shape[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+shape[y]+'.mp3';
                audio.play();
                }
                if(name==weather[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+weather[y]+'.mp3';
                audio.play();
                }

            }
    }