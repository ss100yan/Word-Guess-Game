
// Array containing game words

var word = ["git","html","javascript","react","angular","css","sql","code"];

//Function choosing the random word
 
 var randomWord = word[Math.floor(word.length * Math.random())];

console.log(randomWord);

//Array showing the guessed word

var guessedWord = ["_" , "_" , "_" , "_"];




//On key event function

document.onkeyup = function (event) {
   
    var key = event.key;
    
  var keyPressText = document.getElementById("keypress");
  keyPressText.textContent = key;
    
  var n = randomWord.includes(key);
  console.log(n);

  document.getElementById("guessWord").innerHTML = guessedWord;
  
    

};

//Wins


//Number of Guesses Remaining




//Letters Already Guessed
              