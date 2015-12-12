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
  myVideo.width = 900;
}

function makeSmall() {
  myVideo.width = 500;
}

function makeNormal() {
  myVideo.width = 700;
}
function updateSlider(){
  if(myVideo.paused==false){
  console.log(myVideo.currentTime);
  $("#main-vis-slider").attr('d',sliderGen(data));
  }
}
setInterval(updateSlider,500);
