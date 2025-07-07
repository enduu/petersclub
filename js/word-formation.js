$(function() {
    'use strict';
  
    var body = $('body');
  
    function goToNextInput(e) {
      var key = e.which,
        t = $(e.target),
        sib = t.next('input');
  
      if (!(key >= 65 && key <= 93) && (key != 32 && key != 0)) {
        e.preventDefault();
        return false;
      }
  
      if (key === 9) {
        return true;
      }
  
      if (!sib || !sib.length) {
        sib = body.find('input').eq(0);
      }
      sib.select().focus();

      if(t.hasClass('inp4')){
          checkAnswer(t);
      }
    }
  
    function onKeyDown(e) {
      var key = e.which;
  
      if (key >= 65 && key <= 93) {
        return true;
      }
  
      e.preventDefault();
      return false;
    }
    
    function onFocus(e) {
      $(e.target).select();
    }
  
    function checkAnswer(t){
        var inp1= $('.inp1').val().toUpperCase();
        var inp2= $('.inp2').val().toUpperCase();
        var inp3= $('.inp3').val().toUpperCase();
        var inp4= $('.inp4').val().toUpperCase();
        var val1= $('.inp1').attr('data-omg');
        var val2= $('.inp2').attr('data-omg');
        var val3= $('.inp3').attr('data-omg');
        var val4= $('.inp4').attr('data-omg');

      var y;
      for(y=1; y <=10; y++){
        if(t.parent().hasClass('exercise'+y)){
          if(inp1 === val1 && inp2 === val2 && inp3 === val3 && inp4 === val4){
                /*alert("Well done");*/
                if(y===10){
                  $('.congrats').css('display', 'flex');
                  $('.svgc').css('display','flex');
                  $('#next').css('display','flex');
                }else{
                $('.success').css('display', 'flex');
                $('.svgs').css('display','flex');
                $('#next').css('display','flex');
                }
            }else{
                /*alert("Try again!");*/
                $('.again').css('display', 'flex');
                $('.svgo').css('display','flex');
                $('#again').css('display','flex');
            }
        }
      }

    }

    body.on('keyup', 'input', goToNextInput);
    body.on('keydown', 'input', onKeyDown);
    body.on('click', 'input', onFocus);
    
  })