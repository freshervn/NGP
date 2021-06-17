var video1="<iframe class='max-100' width='840' height='472' src='https://www.youtube.com/embed/VCP9SojA4Xw' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen load='lazy'></iframe>";
var video2="<iframe class='max-100' width='840' height='472' src='https://www.youtube.com/embed/GLVaW26BCGA' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen load='lazy'></iframe>";
var video3="<iframe class='max-100' width='840' height='472' src='https://www.youtube.com/embed/VY1b0QgrMjk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen load='lazy'></iframe>";
var video4="<iframe class='max-100' width='840' height='472' src='https://www.youtube.com/embed/w-CEQg-2_1A' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen load='lazy'></iframe>";
var video5="<iframe class='max-100' width='840' height='472' src='https://www.youtube.com/embed/IhSO742G6lg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen load='lazy'></iframe>";
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
        $("[click-render='video2']").click(
            function(){
                rendervideo(video2,'.render-video-2');
                video2='';
            }
        )
        $('[click-render="video3"]').click(
            function(){
                rendervideo(video3,'.render-video-3');
                video3='';
            }
        )
        $('[click-render="video4"]').click(
            function(){
                rendervideo(video4,'.render-video-4');
                video4='';
            }
        )
        $('[click-render="video5"]').click(
            function(){
                rendervideo(video5,'.render-video-5');
                video5='';
            }
        )
    }
)