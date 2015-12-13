var selectionNumber = 0;
var displayLegend=false;
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

function drawDetail(){
  if(brush.extent()[1]==0){
    alert("Please select a time interval using the brush :) ");
    return;
  }
  $.ajax({
    method: "POST",
    url: "AddDetail.php",
    data: { "selectionNumber":selectionNumber++, "start":brush.extent()[0], "end": brush.extent()[1] }
  })
    .done(function( msg ) {
      console.log( "New line added! " + msg );
      displayLegend=true;
      document.getElementById('detail-vis-frame').contentWindow.location.reload();
    });
}

function resetDetail(){
  selectionNumber=0;
  $.ajax({
    method: "POST",
    url: "AddDetail.php",
    data: { "reset":1 }
  })
  .done(function( msg ) {
    console.log( msg );
    displayLegend=false;
    document.getElementById('detail-vis-frame').contentWindow.location.reload();
  });
}

setInterval(updateSlider,500);
