$(document).ready(
    function(){
        // setup
        $('[animationOnScroll]').each(    
            function(){
                var animationname = $(this).attr("animationOnScroll");        
                $(this).css({
                'animation-name':animationname,
                'animation-duration':' 1s',
                'animation-timing-function':' ease-in-out',        
                'animation-play-state': 'paused'
                })
            }
        )
        animetionOnScroll();
        if(window.innerWidth < 768){
            window.onscroll = function(){
                hidenNavbarMB();
                animetionOnScroll();  
                scrollFunction();              
            }
        }        
        else{
            window.onscroll = function(){
                hidenNavbarDT();
                animetionOnScroll(); 
                scrollFunction();
            }
        }
    }
)
var preScrollpos = window.pageYOffset;     
function hidenNavbarMB(){
    var currentScrollPos = window.pageYOffset;         
    if (preScrollpos > currentScrollPos){
    // console.log('run');
    $('nav.main').css({'top':'0','background':'white'});      
    $('nav.main').addClass('shadow');  
    }
    else{
        $('nav.main').css({'top':'-100%'});        
    }
    preScrollpos = currentScrollPos;
}
function hidenNavbarDT(){
    var currentScrollPos = window.pageYOffset;         
    if (preScrollpos > currentScrollPos){
    // console.log('run');
    $('nav.main').css('top','0');        
    }
    else{
        $('nav.main').css('top','-100%');        
    }
    preScrollpos = currentScrollPos;
}
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
    }
    var rect = el.getBoundingClientRect();    
    return (            
        rect.top < 600
        && rect.top >= 0            
    );
}
function animetionOnScroll(){       
    $('[animationOnScroll]').each(
        function(){                        
            if (isElementInViewport($(this))) {                   
            $animationname = $(this).attr("animationOnScroll");              
            $(this).css({
                'animation-play-state': 'running'
                })
            }
        }
    );            
    $('[animationOnScrollCounter="ready"]').each(
        function(){                        
            if (isElementInViewport($(this))) {                   
            animatecounter();
            $(this).attr('animationOnScrollCounter','done');
            }
        }
    );                
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       $('#btn-scroll').css('display',"block");
    } else {
       $('#btn-scroll').css('display',"none");
    }
}     