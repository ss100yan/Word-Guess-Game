 var word = ["git","html","javascript","react","angular","css","sql","code"];
 
 var randomWord = word[Math.floor(word.length * Math.random())];

console.log(randomWord);
document.onkeyup = function (event) {
   
    var key = event.key;
    
  var keyPressText = document.getElementById("keypress");
  keyPressText.textContent = key;
    
  var n = randomWord.includes(key);
  console.log(n);
};


            //    if(key==randomWord[ i
            //     //    "letter of the word"
            //      ] ){

            //     //  1) incrase Score
            //     //  2) show letter
            //    };
              