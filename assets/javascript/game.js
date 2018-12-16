
// variables 

var words = ["git","html","javascript","react","angular","css","sql","code","jquery","chrome"];
var CurrentWord = words[Math.floor(words.length * Math.random())];
var GuessRemainings = 10;
var myLength=CurrentWord.length;
var display=[myLength];
var NordArray=CurrentWord.split("");
var output=" ";
var LettersAlreadyGuessed = [];
var wins = 0;

console.log(CurrentWord);
console.log(NordArray);

//   NordArray.forEach({
    
var setup = function(){

for ( var i=0; i < CurrentWord.length; i++ ){
display[i] = "_ ";
output = output + display[i];
     }
document.getElementById("game").textContent= output;
console.log(output);
output="";

document.getElementById("score").textContent= wins;
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
    
  
  console.log(keyPressText);

     GuessRemainings--;
  
    for (var c = 0; c < CurrentWord.length; c++){

        if(key==NordArray[c]){
 
          display[c]=key;
          
          LettersAlreadyGuessed.push(NordArray[c]);
          console.log(LettersAlreadyGuessed);
          
          

        }
        output= output + display[c] + " "; 
        console.log(output);
    }
    document.getElementById("game").textContent= output;
    output="";

    console.log(LettersAlreadyGuessed);
    console.log(NordArray);
    console.log(display);
    console.log(key); 
    console.log(NordArray[c]);
    console.log(GuessRemainings);
    document.getElementById("GsRemaining").textContent = GuessRemainings;
    document.getElementById("LettersAlreadyGuessed").textContent = LettersAlreadyGuessed;
  }

console.log(output)