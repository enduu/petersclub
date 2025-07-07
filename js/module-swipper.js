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
    var dcount= $(".swiper-slide").length;
    console.log(dcount);
    var x;
    for(x=0;x<dcount;x++){
      var cc=x+1;
      $('.spag').append("<div class='spbut pag"+cc+"'>"+cc+"</div>");
      console.log(x);
      
    }
    $(".pag1").addClass("selcc");
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
    $('.selcc').removeClass("selcc");
    setTitle(active);
    var sact=active+1;
    $('.pag'+sact+'').addClass("selcc");
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

swiper.on('slideChangeTransitionEnd', function () {
      $('.wordcont').css('visibility', 'visible').addClass('animate__animated animate__zoomIn');
      $('.answerc').css('visibility', 'visible').addClass('animate__animated animate__zoomInDown');
      var current= mySwiper.activeIndex;
      console.log(current);
      if(current==3){
        $('.svgkey').css('display','none');
        $('.key1').css('display','flex');
        $('input').css('visibility', 'visible');
        $('.instrbut').css('visibility', 'visible').addClass('animate__animated animate__fadeInRight');
        $('.pausebut').css('visibility', 'visible').addClass('animate__animated animate__fadeInLeft');
        $('.iccont').css('visibility', 'visible').addClass('animate__animated animate__fadeInUp');
        $('.plays').css('pointer-events','all');
        $('.plays').addClass('animate__animated animate__heartBeat animate__repeat-2');
        $('.plays').on('animationend', function () {
          $(this).removeClass('animate__animated animate__heartBeat animate__repeat-2');
        });
      }else{
        $('.plays').css('pointer-events','none');
      }
      if(current==5||current==6){
        $('.svgkey').css('display','none');
        $('.key2').css('display','flex');
        $('.dragme').addClass('animate__animated animate__rubberBand animate__repeat-3');
        $('.floating').css('display','flex').addClass('animate__animated animate__zoomIn');
        $('.floating').on('animationend', function () {
          $(this).removeClass('animate__animated animate__zoomIn');
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
    case 1: case 2:
      $('.header-title').html('"A man, a woman"');
      //console.log('title');
      break;
    case 3:
      $('.header-title').html('<div class="exetype">Exercise 1</div>');
      //console.log('notitle');
      break;
    case 4:
      $('.header-title').html('"I can count"');
      break;
    case 5:
      $('.header-title').html('<div class="exetype">Exercise 2</div>');
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