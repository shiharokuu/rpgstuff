//By Damian o sea el Shero/Toshi
//¿Qué haces leyendo el código de mi firma? (?) Holi. 
var i=0;
$('.shero').each(function(){
    i++;
    var newID='shero'+i;
    $(this).attr('id',newID);
    $(this).val(i);
});

var j;
for (j = 1; j <=i; j++) {
	var videos = ['qnlzyCCgFBM', 't3dIokufs0M','CWoynz0daB8'];    
	var ytCode = videos[Math.floor(Math.random() * videos.length)];
	var url="https://www.youtube.com/embed/" + ytCode + "?controls=0&modestbranding=1&rel=0";
	document.getElementById("shero" + j).src = url;

}
