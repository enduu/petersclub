function findAudio(name, type){

var dir= '../../../audio/vocab/advanced/';
var economy=[];
var technology=[];
var work=[];
var health=[];
var social=[];

economy[0]='cash';
economy[1]='creditcard';
economy[2]='bank';
economy[3]='cashmachine';
economy[4]='save';
economy[5]='ripoff';
economy[6]='pay';
economy[7]='rich';
economy[8]='poor';
economy[9]='price';

technology[0]='computer';
technology[1]='smartphone';
technology[2]='tablet';
technology[3]='keyboard';
technology[4]='monitor';
technology[5]='tower';
technology[6]='laptop';
technology[7]='speaker';
technology[8]='drone';
technology[9]='simcard';

work[0]='hire';
work[1]='quit';
work[2]='salary';
work[3]='resume';
work[4]='interview';
work[5]='boss';
work[6]='agenda';
work[7]='plan';
work[8]='brainstorm';
work[9]='meeting';

health[0]='healthy';
health[1]='sick';
health[2]='doctor';
health[3]='exercise';
health[4]='medicine';
health[5]='ointment';
health[6]='pill';
health[7]='pain';
health[8]='stomachache';
health[9]='sunburn';

social[0]='popular';
social[1]='welfare';
social[2]='celebrity';
social[3]='poverty';
social[4]='racism';
social[5]='eyecontact';
social[6]='handshake';
social[7]='chat';
social[8]='call';
social[9]='text';


        var fold= type+'/';
        var y;
            for(y=0; y<10; y++){
                if(name==economy[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+economy[y]+'.mp3';
                audio.play();
                }
                if(name==technology[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+technology[y]+'.mp3';
                audio.play();
                }
                if(name==work[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+work[y]+'.mp3';
                audio.play();
                }
                if(name==health[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+health[y]+'.mp3';
                audio.play();
                }
                if(name==social[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+social[y]+'.mp3';
                audio.play();
                }

            }
    }