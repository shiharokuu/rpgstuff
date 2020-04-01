 //By Damian o sea el Shero/Toshi
//¿Qué haces leyendo el código de mi firma? (?) Holi. 
 
 
 //Esta madre es para que no haya problema al hacer load el estilo del audio player
 if(typeof trace === 'undefined'){
	window.trace=0;
 }
 if((trace=trace+1) ==1){
	console.log("if inside first script: " + trace);
     audiojs.events.ready(function() {
        audiojs.createAll();
      });
}

//Esta madre es para que no haya problema con los ids, son unos cabrones porque se repite la firma(?)
var i=0;
	$('.sheroSignature').each(function(){
		i++;
		var newID='sID'+i;
		$(this).attr('id',newID);
		$(this).val(i);
	});
	
var j;	
for (j = 1; j <=i; j++) {
//Si me das número menor a 5, dame un vídeo y si es mayor dame una firmita
	if(Math.floor(Math.random() * 10)<5){
		
		var videos = ['qnlzyCCgFBM', 't3dIokufs0M','CWoynz0daB8'];    
		var quotes = [
		  ["I am the bone of my sword. Steel is my body and fire is my blood.", 
		"Withstood pain to create weapons, waiting for one's arrival.","My whole life was Unlimited Blade Works.","If doing that means no one will cry, then...","I remember that face… with tears in his eyes at finding someone alive.","I was jealous that it was he who thanked me, and not I who thanked him. That he was glad he had found someone. That by saving just one person, he had saved himself.","If parts of me are broken, then I just need to use the parts that aren't","If everything I have is broken, then use the parts I don't have","I see, it can't be helped right? Since you can't I will become one for you. Leave it to me, your dream.","I wasn't forced to become this. I made the choice on my own to folloy my old man's footsteps.","People die if they are killed..."],
		  ["Conflicts come into my view as long as I'm alive","I don't dream of a world without conflicts. I just want people in my view not to cry.","My vision expands after I save one. Ten after one, a hundred after ten","I don't do these things to be appreciated. I have no intention of being praised as a hero","I just want a result where everybody would be happy","I admire his desire to save people because it is beautiful","I have created over a thousand blades.","I will never regret my path. I won't regret it, not matter what may happen.","If you say you're my ideal, I'll destroy such an incorrect ideal with my own hands.","Even if it's impossible. I won't turn back. My dream is not wrong!","I don't want to become a hero of justice... I'm going to become one!"
		],
		  ["Unaware of loss, Nor aware of gain.", "If my body hasn't lost yet, I can just reach out to the part of me that hasn't been used yet","I don't mind losing to someone, but I won't be beaten by myself.","I will protect it even if it isn't my wish, or even if it is just sophistry to soften my guilt.","I know my dream isn't... Even if I'm a fraud, I know my dream isn't wrong!","Even if my life is full of hypocrisy, I'll keep on striving to be a hero of justice.","The thought of wanting to help others definitely isn't wrong.","Even if I could redo the past, I must not take back what has already happened, because if I do that, everything would be a lie.","If you walk down the path that you believe is right, you cannot be wrong.","Helping other people is our responsibility. And no matter what I'm gonna live by that.","When something terrible happens, it's true you can only save a handful of people, no matter how hard you try. But that doesn't make it okay!"]
		];	
		var vID = Math.floor(Math.random() * videos.length);
		var ytCode = videos[vID];
		var sheroSays = '<span style="font-style: italic;font-weight: bold;color:#FFA500;font-size: 15px;" >"' + quotes[vID][Math.floor(Math.random() *quotes[vID].length)] + '"</span><br>';
		var url="https://www.youtube.com/embed/" + ytCode + "?controls=0&modestbranding=1&rel=0";
		var sheroVideo = '<iframe src ="' + url +'" width="440" height="240"  frameborder="0" allowfullscreen></iframe>'
		document.getElementById("sID" + j).innerHTML=sheroSays+sheroVideo;
		


	}
	else{
		var mp3  = ['https://www.mboxdrive.com/EMIYA%20THEME.mp3','https://www.mboxdrive.com/09.LAST%20STARDUST.mp3','https://www.mboxdrive.com/10.Brave%20Shine%20.mp3','https://www.mboxdrive.com/01.%20THIS%20ILLUSION.mp3','https://www.mboxdrive.com/Hikari.mp3','https://www.mboxdrive.com/fatesoundtrack1.mp3','https://www.mboxdrive.com/Kishi.mp3'];
		var sheroIMG = ['https://i.imgur.com/eTh5L4z.gif','https://i.imgur.com/htb7gFL.gif','https://i.imgur.com/aEbn48m.gif','https://i.imgur.com/qUZwpFM.gif','https://i.imgur.com/EBzl95t.gif','https://i.imgur.com/OeEHBwT.gif','https://i.imgur.com/WOrpwg9.gif','https://i.imgur.com/RvlTTWT.gif','https://i.imgur.com/fChmVqA.gif'];
		var sheroQuotes = ["Just because you're correct doesn't mean you're right","I don't mind losing to someone, but I won't be beaten by myself.","I don't dream of a world without conflicts. I just want people in my view not to cry.","I don't do these things to be appreciated. I have no intention of being praised as a hero","I will never regret my path. I won't regret it, not matter what may happen.","I don't want to become a hero of justice... I'm going to become one!","Even if it's impossible. I won't turn back. My dream is not wrong!","I just want a result where everybody would be happy","I know my dream isn't... Even if I'm a fraud, I know my dream isn't wrong!","Even if my life is full of hypocrisy, I'll keep on striving to be a hero of justice.","If you walk down the path that you believe is right, you cannot be wrong.","Helping other people is our responsibility. And no matter what I'm gonna live by that.","Just because you're correct doesn't mean you're right"];
		var trace1 = Math.floor(Math.random() * mp3.length);
		var trace2 = Math.floor(Math.random() * sheroQuotes.length);
		var trace3 = Math.floor(Math.random() * sheroIMG.length);
		var sheroMusic = '<audio  src="' + mp3[trace1] + '"></audio>'
		var imgCode ='<img src="'+ sheroIMG[trace3] + '" alt="Shero" class="sheroImage">';
		var sheroSays = '<div class="sheroText">"' + sheroQuotes[trace2] +'"</div>';
		var css = '<link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/shiharokuu/rpgstuff/8f517ee99427b4030c428eed375bb50d950895fd/sheroStyle.css">'
		document.getElementById("sID" + j).innerHTML=sheroMusic+imgCode+sheroSays+css;
		
	}
}


