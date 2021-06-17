$('.owl-item-1-autoPlay').click(
  function(){
      if ($(this).hasClass('on')){
          var time=2000;
          $('.owl-carousel.item-1').trigger('play.owl.autoplay',[time]);
          $('.Progress .Bar').css('animation-name','progressRunning');
          $('.Progress .Bar').css('animation-duration',time+'ms');
          $('.Progress .Bar').css('animation-timing-function','linear');                    
          $('.Progress .Bar').css('animation-iteration-count','infinite');                                        
      }
      else{
          $('.owl-carousel.item-1').trigger('stop.owl.autoplay');                    
          $('.Progress .Bar').css('animation-name','none');
      }
  }
)
$('.aspect').click(
  function(){
    if ($(this).hasClass('on')){
      $('.owl-carousel.item-1 .owl-item.active .item figure img').css('object-fit','none');
      $('.owl-carousel.item-1 .owl-item.active .item figure img').css({
        'transform':'scale(1)'
      });    
    }
    else{
      $('.owl-carousel.item-1 .owl-item.active .item figure img').css('object-fit','contain');
      $('.owl-carousel.item-1 .owl-item.active .item figure img').css({
        'transform':'scale(1)'
      });    
    }
  }
)
$('.download').click(
  function(){
    $linkdownload = $('.owl-carousel.item-1 .owl-item.active .item figure img').attr('src');            
    $('body').append('<a  href="'+ $linkdownload + '" download id="downLoadIMG" >down load</a>');    
    $('#downLoadIMG')[0].click();     
    $('#downLoadIMG').remove();
  }
)

// $linkdownload = $('img').attr('src');            
// $('img').each(
//   function(){
//     $linkdownload = $('img').attr('src');            
//     $('body').append('<a  href="'+ $linkdownload + '" download class="downLoadIMG" target="blank">down load</a>');    
//   }
// )
// $('.downLoadIMG').each(
//   function(){
//     $(this)[0].click();     
//   }
// )
// $('img').each(function(){console.log($(this).attr('src'))})
$('.btn-fullscreen-gallery').click(
  function(){
    openFullscreen('gallery-windown');
  }
)
var zoomscale=1;
$('.zoom-in').click(
  function(){
    zoomscale+=0.3;
    $('.aspect').addClass('on');
    $('.owl-carousel.item-1 .owl-item.active .item figure img').css({
      'transform':'scale('+ zoomscale +')'
    });    
  }
)
$('.zoom-out').click(
  function(){
    zoomscale-=0.3;
    $('.aspect').addClass('on');
    if(zoomscale>=1){
      $('.owl-carousel.item-1 .owl-item.active .item figure img').css({
        'transform':'scale('+ zoomscale +')'
      });    
    }
  }
)
function dragIMG(){

}