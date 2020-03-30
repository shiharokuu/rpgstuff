if(trace==null){
	var trace;
}

var videos = ['qnlzyCCgFBM', 't3dIokufs0M','CWoynz0daB8'];    
var ytCode = videos[Math.floor(Math.random() * videos.length)];
var url="https://www.youtube.com/embed/" + ytCode + "?controls=0&modestbranding=1&rel=0";

if (trace==null) {
 document.getElementById('shero1').src = url;
  trace="on";
} else if (trace="on") {
  document.getElementById('shero2').src = url;
  trace="off";
} else {
  document.getElementById('shero3').src = url;
}
