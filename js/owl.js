$(document).ready(
    function(){
        $('.owl-carousel').each(
            function(){   
                $(this).find('.item').each(
                    function(){
                        $(this).attr('nth-item',$(this).index()+1)
                    }
                )         
            }
        )
        $('.owl-carousel.item-3-2').owlCarousel({                       
            margin:15,
            nav:true,
            dots:true,
            responsive:{
                0:{
                    items:2
                },
                768:{
                    items:3
                }
            }           
        })       
        $('.owl-carousel.item-4-2').owlCarousel({                       
            margin:15,
            nav:true,
            dots:true,
            responsive:{
                0:{
                    items:2
                },
                768:{
                    items:4
                }
            }           
        })         
        $('.owl-carousel.item-4').owlCarousel({                       
            margin:15,
            nav:true,
            dots:true,
            items:4     
        })    
        $('.owl-carousel.item-10-4').owlCarousel({                       
            margin:5,
            nav:true,
            dots:true,
            responsive:{
                0:{
                    items:4
                },
                768:{
                    items:10
                }
            }           
        })                      
        $('.owl-carousel.item-1-auto').owlCarousel({
            items:1,
            loop:true,
            margin:0,
            nav:true,
            dots:true,    
            autoplay:true,
            autoplayTimeout:2500,
            autoplayHoverPause:true       
        })  
        $('.owl-carousel.item-1').owlCarousel({
            items:1,
            loop:false,
            margin:0,
            nav:true,
            dots:true,    
        })           
        $('.owl-carousel.item-auto').owlCarousel({            
            nav:true,          
            autoWidth:true,   
            URLhashListener:true,
            startPosition: 'middle',
            margin:10,
        })  
        $('.owl-carousel.item-auto .owl-stage').addClass('mx-auto');
        $('.owl-carousel.item-auto-2').owlCarousel({            
            nav:true,          
            autoWidth:true,   
            URLhashListener:true,
            startPosition: 'middle',
            margin:30,
            center: true,  
            loop:true,
            autoplay:true,
            autoplayTimeout:1500,
            autoplayHoverPause:true,
        })  
        $('.owl-carousel.item-auto-2 .owl-stage').addClass('mx-auto');        

        $('.owl-carousel').each(
            function(){   
                var total=$(this).find('.owl-item').length;                                 
                $target=$('.' + $(this).attr('number-order'));
                $target.html('1/'+ total);                             
            }
        )
        $(window).mouseup(
            function(){
                $('.owl-carousel').each(    
                    function(){            
                        var total=$(this).find('.owl-item').length;                           
                        $target=$('.' + $(this).attr('number-order'));
                        $(this).find('.owl-item').each(
                            function(){
                                if($(this).hasClass('active')){
                                    var numberOrder=$(this).find('[nth-item]').attr('nth-item');
                                    $target.html( numberOrder + '/' + total/2);    
                                }
                            }
                        )
                    }
                )
            } 
        )
    }
)