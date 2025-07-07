function findAudio(name, type){

var dir= '../../../audio/vocab/intermediate/';
var food=[];
var travel=[];
var hobbie=[];
var transportation=[];
var family=[];

food[0]='noodle';
food[1]='egg';
food[2]='steak';
food[3]='pork';
food[4]='rice';
food[5]='salad';
food[6]='icecream';
food[7]='watermelon';
food[8]='fish';
food[9]='pizza';

travel[0]='suitcase';
travel[1]='passport';
travel[2]='camera';
travel[3]='sunglasses';
travel[4]='hotel';
travel[5]='airplane';
travel[6]='checkin';
travel[7]='seat';
travel[8]='taxi';
travel[9]='boardingpass';

hobbie[0]='music';
hobbie[1]='paint';
hobbie[2]='cook';
hobbie[3]='soccer';
hobbie[4]='read';
hobbie[5]='dance';
hobbie[6]='computergame';
hobbie[7]='tennis';
hobbie[8]='basketball';
hobbie[9]='tabletennis';

transportation[0]='car';
transportation[1]='bus';
transportation[2]='plane';
transportation[3]='bicycle';
transportation[4]='train';
transportation[5]='motorcycle';
transportation[6]='ambulance';
transportation[7]='truck';
transportation[8]='hotairballoon';
transportation[9]='ship';

family[0]='mom';
family[1]='dad';
family[2]='brother';
family[3]='sister';
family[4]='grandma';
family[5]='grandpa';
family[6]='uncle';
family[7]='aunt';
family[8]='cousin';
family[9]='family';


        var fold= type+'/';
        var y;
            for(y=0; y<10; y++){
                if(name==food[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+food[y]+'.mp3';
                audio.play();
                }
                if(name==travel[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+travel[y]+'.mp3';
                audio.play();
                }
                if(name==hobbie[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+hobbie[y]+'.mp3';
                audio.play();
                }
                if(name==transportation[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+transportation[y]+'.mp3';
                audio.play();
                }
                if(name==family[y]){
                var audio = document.createElement('audio');
                audio.src = dir+fold+family[y]+'.mp3';
                audio.play();
                }

            }
    }