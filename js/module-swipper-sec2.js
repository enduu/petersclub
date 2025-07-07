var swiper = new Swiper('.c0', {
  init: false,
  allowTouchMove: false,
  zoom: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  slidesPerView: 1,
  navigation: {
    nextEl: '.nextel',
    prevEl: '.prevel'
  },

});

swiper.on('init', function() { /* do something */ 
    // init Swiper
    setTimeout(() => {
      $('.wordcont').css('visibility', 'visible').addClass('animate__animated animate__zoomIn');
      removefadeIn();
    }, 6500);
    $('header').addClass('animate__animated');
    $('header').addClass('animate__fadeInDown');
    $('.assisttext').addClass('animate__animated');
    $('.assisttext').addClass('animate__fadeInUp');
});
swiper.init();

var mySwiper = document.querySelector('.c0').swiper;

swiper.on('slideChange', function () {
    //console.log('slide changed');
    $('header').addClass('animate__animated');
    $('header').addClass('animate__fadeInDown');
    $('.assisttext').addClass('animate__animated');
    $('.assisttext').addClass('animate__fadeInUp');
    var active= mySwiper.activeIndex;
    setTitle(active);
    if(active==18){
      $('header').css('display','none');
    }
});

swiper.on('slideChangeTransitionStart', function () {
  $('.wordcont').css('visibility', 'hidden');
  $('.answerc').css('visibility', 'hidden');
  $('input').css('visibility', 'hidden');
  $('.dragme').removeClass('animate__animated animate__rubberBand animate__repeat-3');
  $('.floating').css('display','none');
  $('.graybgc').css('visibility', 'hidden').removeClass('animate__animated animate__zoomIn');
});

var played=false;

swiper.on('slideChangeTransitionEnd', function () {
      $('.wordcont').css('visibility', 'visible').addClass('animate__animated animate__zoomIn');
      $('.answerc').css('visibility', 'visible').addClass('animate__animated animate__zoomInDown');
      var current= mySwiper.activeIndex;
      console.log(current);

      if(current==2){
        $('.svgani').css('display', 'flex');
            console.log(played);
            var aninum=1;
            conversation(aninum);
      }
      if(current==3){
        $('.play-pulse').css('pointer-events','all');
      }
      if(current==4){
        $('.floating').css('display','flex').addClass('animate__animated animate__zoomIn');
        $('.floating').on('animationend', function () {
          $(this).removeClass('animate__animated animate__zoomIn');
        });
      }
      if(current==5){
        $('.svgkey').css('display','none');
        $('.key1').css('display','flex');
        $('input').css('visibility', 'visible');
        $('.instrbut').css('visibility', 'visible').addClass('animate__animated animate__fadeInRight');
        $('.pausebut').css('visibility', 'visible').addClass('animate__animated animate__fadeInLeft');
        $('.pausets').css('visibility', 'visible').addClass('animate__animated animate__fadeInLeft');
        $('.iccont').css('visibility', 'visible').addClass('animate__animated animate__fadeInUp');
        $('.plays').addClass('animate__animated animate__heartBeat animate__repeat-2');
        $('.plays').on('animationend', function () {
          $(this).removeClass('animate__animated animate__heartBeat animate__repeat-2');
        });
        $('.plays').click(function (e) { 
          e.preventDefault();
          paused=false;
          playtf(1);
        });
      }
      if(current==7||current==8){
        $('.graybgc').css('visibility', 'visible').addClass('animate__animated animate__zoomIn');
      }
      if(current==9||current==10){
        $('.svgkey').css('display','none');
        $('.key3').css('display','flex');
        $('input').css('visibility', 'visible');
        $('.floating').css('display','flex').addClass('animate__animated animate__zoomIn');
        $('.floating').on('animationend', function () {
          $(this).removeClass('animate__animated animate__zoomIn');
        });
      }
      if(current==12){
        //$('.spell').css('display', 'flex');
        //console.log(played);
        $('.svgkey').css('display','none');
        $('.key4').css('display','flex');
        if(played==0){
        $('.spell').css('display','flex');
        $('.holder').css('display','none');
        $('.stext').css('display','none');
        var message='message1'
        var type='ui'
        findAudio(message, type);
        setTimeout(() => {
            $('.stext').css('display','flex');
            $('.holder').css('display','flex');
            $('.spell').not('.holder').css('display','none');
            $('.letp').addClass('animate__animated animate__rubberBand animate__repeat-3');
          }, 3000);
        }
        $('.floating').css('display','flex').addClass('animate__animated animate__zoomIn');
        $('.floating').on('animationend', function () {
          $(this).removeClass('animate__animated animate__zoomIn');
        });
      }
      if(current==14){
        $('.svgkey').css('display','none');
        $('.key5').css('display','flex');
        $('.dragme').addClass('animate__animated animate__rubberBand animate__repeat-3');
        $('.floating').css('display','flex').addClass('animate__animated animate__zoomIn');
        $('.floating').on('animationend', function () {
          $(this).removeClass('animate__animated animate__zoomIn');
        });
      }
      if(current==17){
        $('.floating').css('display','flex').addClass('animate__animated animate__zoomIn');
        $('.floating').on('animationend', function () {
          $(this).removeClass('animate__animated animate__zoomIn');
        });
      }
      if(current==18){
        $('.last').children().children('object').css('display','flex');
      }
});


function setTitle(active){
  switch (active) {
    case 0:
      $('.header-title').html('"Hello, how&#39;re you?"');
      //console.log('title');
      break;
    case 1:
      $('.header-title').html('"Countries"');
      //console.log('title');
      break;
    case 2:
      $('.header-title').html('"Hello, I&#39;m Kyle"');
      //console.log('title');
      break;
    case 3:
      $('.header-title').html('Grammar point');
      //console.log('notitle');
      break;
    case 4:
      $('.header-title').html('Complete the dialogue');
      break;
    case 5:
      $('.header-title').html('True/ False');
        //console.log('notitle');
      break;
    case 6:
      $('.header-title').html('<div class="exetype">Exercise 3</div>');
        //console.log('notitle');
      break;
    case 7:
      $('.header-title').html('"More than one"');
        //console.log('notitle');
      break;
    case 8:
      $('.header-title').html('"More than one"');
        //console.log('notitle');
      break;
    case 9: case 10:
      $('.header-title').html('<div class="exetype">Exercise 4</div>');
        //console.log('notitle');
      break;
    case 11:
      $('.header-title').html('"ABC&#39;s"');
        //console.log('notitle');
      break;
    case 12:
      $('.header-title').html('<div class="exetype">Exercise 5</div>');
        //console.log('notitle');
      break;
    case 13:
      $('.header-title').html('"My world, Your world"');
        //console.log('notitle');
      break;
    case 14:
      $('.header-title').html('<div class="exetype">Exercise 6</div>');
        //console.log('notitle');
      break;
    case 15: case 16:
      $('.header-title').html('"20 to 100"');
        //console.log('notitle');
      break;
    case 17:
      $('.header-title').html('<div class="exetype">Exercise 7</div>');
        //console.log('notitle');
      break;
    
    default:
      break;
  }
  
}

function removefadeIn() {
  $('.wordcont').on('animationend', function () {
    $('.wordcont').removeClass('animate__animated animate__zoomIn');
    $('.answerc').removeClass('animate__animated animate__zoomInDown');
  });
}

function goto(e) {
  mySwiper.slideTo(e);
}

// var swipernest = new Swiper('.c1', {
//   init: false,
//   allowTouchMove: true,
//   zoom: false,
//   speed: 1000,
//   effect: 'slide',
//   slidesPerView: 1,
//   navigation: {
//     nextEl: '.ne',
//   },

// });

// swipernest.init();

// var mySwipa = document.querySelector('.c1').swiper;


function conversation(exenum){
if(!played){
  if(exenum==1){
    setTimeout(() => {
      findAudio('conv2s1','conversation');
        $('#text1').css('opacity', '1');
        $('#text1').html("Hello, I'm Paul");
        console.log('not lost');
      }, 1300);
      setTimeout(() => {
        findAudio('conv2s2','conversation');
        $('#text2').html("Hi, Paul. I'm Dave");
        console.log('this answer');
        $('#text2').css('opacity', '1');
      }, 3300);
      setTimeout(() => {
        findAudio('conv2s3','conversation');
        $('#text1').html("Nice to meet you");
        $('#text2').html("");
      }, 5800);
      setTimeout(() => {
        findAudio('conv2s4','conversation');
        $('#text2').html("Nice to meet you too");
      }, 7500);
      setTimeout(() => {
        $('.againbtn').removeClass('animate__animated animate__zoomOut');
        $('.againbtn').css('display', 'flex').addClass('animate__animated animate__zoomIn');
        $('.againbtn').on('animationend', function () {
          $('.againbtn').removeClass('animate__animated animate__zoomIn');
        });
      }, 8500);
      played=true;
   }
}
}
var curplay;
var paused=false;
var playNumber=1;
function playtf(exenum){
    if(exenum==1){
    var t1=setTimeout(() => {
      console.log(paused);
      if(playNumber==1){
        if(!paused){
        findAudio('conv3s1','conversation');
        curplay=1;
        console.log(curplay);
        pauseMe();
        playNumber++;
        }
      }
    }, 1300);
    var t2=setTimeout(() => {
      console.log(paused);
      if(playNumber==2){
        if(!paused){
          findAudio('conv3s2','conversation');
          curplay=2;
          console.log(curplay);
          pauseMe();
          playNumber++;
        }
      }
    }, 2700);
    var t3=setTimeout(() => {
      console.log(paused);
      if(playNumber==3){
        if(!paused){
          findAudio('conv3s3','conversation');
          curplay=3;
          console.log(curplay);
          pauseMe();
          playNumber++;
        }
      }
    }, 6700);
    var t4=setTimeout(() => {
      pauseMe()
      console.log(paused);
      if(playNumber==4){
        if(!paused){
          findAudio('conv3s4','conversation');
          curplay=4;
          console.log(curplay);
          pauseMe();
          playNumber++;
        }
      }
    }, 13700);
    var t5=setTimeout(() => {
      if(playNumber==5){
        if(!paused){
          findAudio('conv3s5','conversation');
          curplay=5;
          console.log(curplay);
          pauseMe();
          playNumber++;
        }
      }
    }, 16700);
    var t6=setTimeout(() => {
      if(playNumber==6){
        if(!paused){ 
          findAudio('conv3s6','conversation');
          curplay=6;
          console.log(curplay);
          pauseMe();
          playNumber++;
        }
      }
    }, 21700);
    var t7=setTimeout(() => {
      if(playNumber==7){
        if(!paused){
        findAudio('conv3s7','conversation');
          curplay=7;
          console.log(curplay);
          pauseMe();
          playNumber++;
        }
      }
    }, 25700);
    var t8=setTimeout(() => {
      if(playNumber==8){
        if(!paused){
          findAudio('conv3s8','conversation');
          curplay=8;
          console.log(curplay);
          pauseMe();
          playNumber++;
        }
      }
    }, 28700);
    var t9=setTimeout(() => {
      if(playNumber==9){
        if(!paused){
          findAudio('conv3s9','conversation');
          curplay=9;
          console.log(curplay);
          pauseMe();
          playNumber=1;
        }
      }
    }, 31700);
        // played=true;
     }
     if(exenum==0){
       console.log('here');
      for(p=0;p<totalS+1;p++){
        clearTimeout('t'+p);
        console.log('t'+p);
      }
     }
  }

  var a;
  function pauseMe(pausedOr) {
    if(pausedOr){
      paused=true;
      playNumber=1;
      console.log(curplay);
      // audio.pause();
      // audio.currentTime = 0.0;
      audio=null;
      for(a=0;a<10;a++){
        clearTimeout('t'+a);
        //console.log('t'+a);
      }
    }
  }
  // function pauseMe(pausedOr, curplay) {
  //   if(pausedOr){
  //     console.log('paused!');
  //     var getPlaying= 't'+curplay;
  //     clearTimeout(getPlaying);
  //   }
  // }