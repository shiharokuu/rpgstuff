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
		var newID='hp'+i;
		$(this).attr('id',newID);
		$(this).val(i);
		
	});	 

		var j;	
		for (j = 1; j <=i; j++) {
        		var vit = document.getElementById("hp" + j).getAttribute("vit");
        		var res = document.getElementById("hp" + j).getAttribute("res");
        		document.getElementById("hp" + j).innerHTML = getHP(vit,res);
			}
		}
	
	var e=0;
	$('.mp').each(function(){
		i++;
		var newID='mp'+e;
		$(this).attr('id',newID);
		$(this).val(e);
		
	});	 

		var m;	
		for (m = 1; m <=i; m++) {
        		var prana = document.getElementById("mp" + m).getAttribute("prana");
        		var mana = document.getElementById("mp" + m).getAttribute("mana");
        		document.getElementById("mp" + m).innerHTML = getHP(vit,res);
			}
		}
	









