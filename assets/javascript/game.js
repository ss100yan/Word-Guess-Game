
// variables 

var words = ["git","html","javascript","react","angular","css","sql","code","jquery","chrome"];
var CurrentWord = words[Math.floor(words.length * Math.random())];
var GuessRemainings = 12;
var myLength=CurrentWord.length;
var display=[myLength];
var NordArray=CurrentWord.split("");
var output=" ";
var LettersAlreadyGuessed = [];
var wins = 0;
var losses= 0;
var win = myLength;

    
var setup = function(){
  CurrentWord = words[Math.floor(words.length * Math.random())];
  myLength=CurrentWord.length;
  display=[myLength];
  NordArray=CurrentWord.split("");
  output=" ";
  win = myLength;
  LettersAlreadyGuessed = [];
  GuessRemainings=12;
for ( var i=0; i < CurrentWord.length; i++ ){
display[i] = "_ ";
output = output + display[i];
     }
document.getElementById("game").textContent= output;

output="";

document.getElementById("score").textContent= wins;
document.getElementById("losses").textContent=losses;
document.getElementById("GsRemaining").textContent= GuessRemainings;
      };

window.onload = function(){
  setup();
};

//On key event function

document.onkeyup = function () {
  
    var key = event.key;
    
  var keyPressText = document.getElementById("keypress");
  keyPressText.textContent = key;
    
  
  
     GuessRemainings--;
  
    for (var c = 0; c < CurrentWord.length; c++){

        if(key==NordArray[c]){
 
          display[c]=key;
          
          LettersAlreadyGuessed.push(NordArray[c]);
          console.log(LettersAlreadyGuessed);
          
          win--;

        }
        output= output + display[c] + " "; 
        console.log(output);
    }
    document.getElementById("game").textContent= output;
    output="";

    document.getElementById("GsRemaining").textContent = GuessRemainings;
    document.getElementById("LettersAlreadyGuessed").textContent = LettersAlreadyGuessed;

             if (win < 1 ){
                 wins++;
                  document.getElementById("score").textContent= wins;
                   setup();
                    }
                    else if(GuessRemainings<1){
                      losses++;
                      document.getElementById("losses").textContent=losses;
                      setup()
                       };
   
  };
