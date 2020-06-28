	var i=0;
	$('.mp-namesp').each(function(){
		i++;
		var newID='emiName'+i;
		$(this).attr('id',newID);
		$(this).val(i);
		
	});	

function getHP(vit, res) {
  var base = 50;
  return base + (vit*10)+(Math.round(res/2));   // The function returns the HP of my character
}

function getMP(prana, mana) {
  var base = 40;
  return base + (prana*10)+(Math.round(mana/2));   // The function returns the MP of my character
}
var vit = document.getElementById("hp").getAttribute("vit");
var res = document.getElementById("hp").getAttribute("res");
var prana = document.getElementById("mp").getAttribute("prana");
var mana = document.getElementById("mp").getAttribute("mana");

document.getElementById("hp").innerHTML = getHP(vit,res);
document.getElementById("mp").innerHTML = getMP(prana,mana);

document.getElementById("emiName1").innerHTML = "Emiya Shirou (ARCHER)";

