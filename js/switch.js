$('.switch').click(
    function(){
        $(this).toggleClass('on off');
    }
)
$('.switch-board').click(
    function(){
        $('[board-name='+ $(this).attr('board-name') + ']').removeClass('on');
        $(this).toggleClass('on off');
    }
)
