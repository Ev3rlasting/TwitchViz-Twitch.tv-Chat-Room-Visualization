var selectionNumber = 0;
displayLegend=false;
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

function timePicker(){
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1781,
    values: [0, 300],
    slide: slideTime
  });
}

function slideTime(event, ui){

  val0 = $("#slider-range").slider("values", 0)
  val1 = $("#slider-range").slider("values", 1)
  var seconds0 = val0%60,
  minutes0 = (val0-seconds0)/60,
  seconds1 = val1%60,
  minutes1 = (val1-seconds1)/60,

  startTime = getTime(minutes0, seconds0);
  endTime = getTime(minutes1, seconds1);
  $("#time").text(startTime + ' - ' + endTime);
}
function getTime(minutes, seconds) {
  return minutes+":"+seconds;
}

function submitInterval(){
  console.log("Interval Start:"+val0+" End:"+val1);
  assignColorCode(data);
}

function assignColorCode(){
  console.log("assignColorCode Called");
  area = d3.svg.area()
  .interpolate("monotone")
  .x(function(d) { return x(d.Timestamp); })
  .y0(height)
  .y1(function(d) { if(d.Timestamp>val0 && d.Timestamp<val1){
    return y(d.Frequency);
  }
  else{
    return height;
  }});
  main.append("path")
  .attr("class","area")
  .attr("id","selected-highlight")
  .datum(data)
  .attr("d",area)
  .attr("fill",'#'+$(".jscolor").val());
   $(".code-area").append("<div style='float:left;margin-left:10px;'><p><b>"+$("#code-name").val()+"</b><br/><div style='width:20px;height:20px;background-color:#"+$(".jscolor").val()+"'></div></p></div>");
   $(".time-picker").css("display","none");
}
function addCode(){
  console.log("addCode function called!");
  $(".time-picker").css("display","block");
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
    method: "post",
    url: "AddDetail.php",
    data: { 'selectionNumber':selectionNumber++, 'start':brush.extent()[0], 'end': brush.extent()[1] }
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

timePicker();
slideTime();
setInterval(updateSlider,500);
