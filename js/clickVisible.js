$(document).ready(
    function(){        
        $('[click-display-element]').click(
            function () {
                $block = $('.' + $(this).attr('click-display-element'));
                $block.each(
                    function(){
                        $(this).toggleClass('d-none d-block');
                    }
                )
            }
        )
        $('[click-display-element-list]').click(
            function(){
                $blocks = $('[click-display-element-list='+$(this).attr('click-display-element-list') +']');
                $index = $blocks.index($(this));

                $blocks = $('.'+$(this).attr('click-display-element-list'));
                var listblock=[];
                $blocks.each(
                    function(){
                        $(this).addClass('d-none');
                        $(this).removeClass('d-block');
                        listblock.push($(this))
                    }
                )
                
                listblock[$index].addClass('d-block');
            }
        )
    }
)