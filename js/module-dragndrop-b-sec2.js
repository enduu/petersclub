var correctCards=0;
var totalTarget;
$('.dragme').draggable( {
    stack: '.target',
    cursor: 'move',
    revert: true,
    drag: function( event, ui ) {
        $( ".target" ).droppable( "option", "classes.ui-droppable-active", "highlight" );
    },
} );
    
$('.target').droppable({ 
    accept: '.dragme',
    hoverClass: 'hovered',
    drop: function drop(event, ui) {
    var e= ui.draggable.attr('data-val');
    var f= $(this).attr('data-target');
    var getExNum=$(this).parent().parent().attr('data-exen');
    if(getExNum==1){
        totalTarget=4;
    }else{
        totalTarget=10;
    }
    console.log(totalTarget);
    //console.log(e);
    //console.log(f);
    // if the values are the same then do sth
    if(e==f){
    //console.log('bingo');
        //if correct disable the target
        ui.draggable.addClass( 'matched' );
        ui.draggable.draggable( 'disable' );
        $(this).droppable( 'disable' );
        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
        ui.draggable.draggable( 'option', 'revert', false );
        correctCards++;
    }
    console.log(totalTarget);
    // if all the cards are okay --- next level
    if ( correctCards == totalTarget ) {
        console.log('jackpot');
        $('.success').css('display','flex');
        totalTarget=0;
        correctCards=0;
    }
} });
