function myVideo() {
var videos = ['qnlzyCCgFBM', 't3dIokufs0M','CWoynz0daB8'];    
var ytCode = videos[Math.floor(Math.random() * videos.length)];
var url="https://www.youtube.com/embed/" + ytCode + "?controls=0&modestbranding=1&rel=0";
document.getElementById('shero').src = url;
}
