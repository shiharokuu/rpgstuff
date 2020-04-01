//By Damian o sea el Shero/Toshi
//¿Qué haces leyendo el código de mi firma? (?) Holi. 
     audiojs.events.ready(function() {
        audiojs.createAll();
      });


var i=0;
$('.shero').each(function(){
    i++;
    var newID='shero'+i;
    $(this).attr('id',newID);
    $(this).val(i);
});

var i=0;
$('.sheroQuote').each(function(){
    i++;
    var newID='sheroQuote'+i;
    $(this).attr('id',newID);
    $(this).val(i);
});

var j;
var videos = ['qnlzyCCgFBM', 't3dIokufs0M','CWoynz0daB8'];    
var quotes = [
  ["I am the bone of my sword. Steel is my body and fire is my blood.", 
"Withstood pain to create weapons, waiting for one's arrival.","My whole life was Unlimited Blade Works.","If doing that means no one will cry, then...","I remember that face… with tears in his eyes at finding someone alive.","I was jealous that it was he who thanked me, and not I who thanked him. That he was glad he had found someone. That by saving just one person, he had saved himself.","If parts of me are broken, then I just need to use the parts that aren't","If everything I have is broken, then use the parts I don't have","I see, it can't be helped right? Since you can't I will become one for you. Leave it to me, your dream.","I wasn't forced to become this. I made the choice on my own to follow my old man's footsteps.","People die if they are killed..."],
  ["Conflicts come into my view as long as I'm alive","I don't dream of a world without conflicts. I just want people in my view not to cry.","My vision expands after I save one. Ten after one, a hundred after ten","I don't do these things to be appreciated. I have no intention of being praised as a hero","I just want a result where everybody would be happy","I admire his desire to save people because it is beautiful","I have created over a thousand blades.","I will never regret my path. I won't regret it, not matter what may happen.","If you say you're my ideal, I'll destroy such an incorrect ideal with my own hands.","Even if it's impossible. I won't turn back. My dream is not wrong!","I don't want to become a hero of justice... I'm going to become one!"
],
  ["Unaware of loss, Nor aware of gain.", "If my body hasn't lost yet, I can just reach out to the part of me that hasn't been used yet","I don't mind losing to someone, but I won't be beaten by myself.","I will protect it even if it isn't my wish, or even if it is just sophistry to soften my guilt.","I know my dream isn't... Even if I'm a fraud, I know my dream isn't wrong!","Even if my life is full of hypocrisy, I'll keep on striving to be a hero of justice.","The thought of wanting to help others definitely isn't wrong.","Even if I could redo the past, I must not take back what has already happened, because if I do that, everything would be a lie.","If you walk down the path that you believe is right, you cannot be wrong.","Helping other people is our responsibility. And no matter what I'm gonna live by that.","When something terrible happens, it's true you can only save a handful of people, no matter how hard you try. But that doesn't make it okay!"]
];

for (j = 1; j <=i; j++) {
	var vID = Math.floor(Math.random() * videos.length);
	var ytCode = videos[vID];
	var sheroSays = quotes[vID][Math.floor(Math.random() *quotes[vID].length)];
	var url="https://www.youtube.com/embed/" + ytCode + "?controls=0&modestbranding=1&rel=0";
	document.getElementById("shero" + j).src = url;
	document.getElementById("sheroQuote" + j).textContent='"'+sheroSays+'"';


}
