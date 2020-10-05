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
	$('.hp').each(function(){
		i++;
		var newID='hp0'+i;
		$(this).attr('id',newID);
		$(this).val(i);
		
	});	 

		var j;	
		for (j = 1; j <=i; j++) {
        		var vit = document.getElementById("hp0" + j).getAttribute("vit");
        		var res = document.getElementById("hp0" + j).getAttribute("res");
        		document.getElementById("hp0" + j).innerHTML = getHP(vit,res);
			}
		}
	
	 

		var m;	
		for (m = 1; m <=i; m++) {
        		var prana = document.getElementById("mp0" + m).getAttribute("prana");
        		var mana = document.getElementById("mp0" + m).getAttribute("mana");
        		document.getElementById("mp0" + m).innerHTML = getHP(vit,res);
			}
		}
	









