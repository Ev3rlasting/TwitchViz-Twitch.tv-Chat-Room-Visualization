var myVideo = document.getElementById("lol");
function playPause() {
    if (myVideo.paused){
        myVideo.play();
        console.log("play/pause button clicked, video playing...");
      }
    else{
        myVideo.pause();
        console.log(myVideo.currentTime);
        console.log("play/pause button clicked, video paused!");
      }
}

function makeBig() {
    myVideo.width = 1200;
}

function makeSmall() {
    myVideo.width = 600;
}

function makeNormal() {
    myVideo.width = 800;
}
setInterval(showCurrentTime,500);
function showCurrentTime(){
if(myVideo.paused==false)
{
  console.log(myVideo.currentTime);

}
}
