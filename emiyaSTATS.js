function getHP(vit, res) {
  var base = 50;
  return base + (vit*10)+(Math.round(res/2));   // The function returns the HP of my character
}

function getMP(prana, mana) {
  var base = 40;
  return base + (prana*10)+(Math.round(mana/2));   // The function returns the MP of my character
}

//Esta madre es para que no haya problema con los ids, son unos cabrones porque se repite la firma(?)
	var i=0;
	$('.health').each(function(){
		i++;
		var newID='hp'+i;
		$(this).attr('id',newID);
		$(this).val(i);
		
	});	 

	var i=0;
	$('.mana').each(function(){
		i++;
		var newID='mp'+i;
		$(this).attr('id',newID);
		$(this).val(i);
		
	});	 









