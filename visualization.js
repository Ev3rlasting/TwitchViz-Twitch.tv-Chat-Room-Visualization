var margin = {top: 10, right: 10, bottom: 100, left: 40},
margin2 = {top: 430, right: 10, bottom: 20, left: 40},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom,
height2 = 500 - margin2.top - margin2.bottom;

var x = d3.scale.linear().range([0, width]).domain([0, 1876]),
x2 = d3.scale.linear().range([0, width]).domain([0, 1876]),
y = d3.scale.linear().range([height, 0]).domain([0, 2]),
y2 = d3.scale.linear().range([height2, 0]).domain([0, 2]);

var xAxis = d3.svg.axis().scale(x).ticks(20).orient("bottom"),
xAxis2 = d3.svg.axis().scale(x2).ticks(20).orient("bottom"),
yAxis = d3.svg.axis().scale(y).ticks(10).orient("left");

var svg = d3.select(".viz").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom);

var main = svg.append("g")
.attr("class", "focus")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

main.append("g")
.attr("class", "x axis")
.attr("transform", "translate(0," + height + ")")
.call(xAxis);

main.append("g")
.attr("class", "y axis")
.call(yAxis);
var data;

d3.json("./frequency.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  var base = data[0].Timestamp;
  data.forEach(function(element){
    element.Timestamp = Math.round((parseInt(element.Timestamp)-base)/1000);
  });
  x.domain([data[0].Timestamp,data[data.length-1].Timestamp]);
  drawArea(data);
});

var area = d3.svg.area()
    .interpolate("monotone")
    .x(function(d) { return x(d.Timestamp); })
    .y0(height)
    .y1(function(d) { return y(d.Frequency); });

function drawArea(data){
  main.append("path")
  .attr("class","area")
  .datum(data)
  .attr("d",area);
}
