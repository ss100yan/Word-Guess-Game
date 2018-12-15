
// variables 

var words = ["git","html","javascript","react","angular","css","sql","code","jquery","chrome"];
var CurrentWord = words[Math.floor(words.length * Math.random())];
var GuessRemainings = 10;
var myLength=CurrentWord.length;
var display=[myLength];
var NordArray=CurrentWord.split("");
var output=" ";

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

 
  
    for (var c = 0; c < CurrentWord.length; c++){

        if(keyPressText==NordArray[c]){

          display[c]=keyPressText;
          GuessRemainings--;
         
        }
         output= output+display[c]+ "";
    }
    console.log(display);
    console.log(keyPressText);
    console.log(NordArray[c]);
    console.log(GuessRemainings);
    document.getElementById("GsRemaining").textContent = GuessRemainings;
  }
console.log(output)