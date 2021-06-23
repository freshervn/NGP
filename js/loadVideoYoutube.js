var video1="<iframe class='max-100' width='840' height='472' src='https://www.youtube.com/embed/Z1dReQbSBdI' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen load='lazy'></iframe>";
function rendervideo(videoIframe,location){
    $(location).append(videoIframe);
}
$(document).ready(
    function(){
        $('[click-render="video1"]').click(
            function(){
                rendervideo(video1,'.render-video-1');
                video1='';
            }
        )
    }
)