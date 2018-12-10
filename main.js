 var word = ["git","html","javascript","react","angular","css","sql","code"];
 
 var randomWord = word[Math.floor(word.length * Math.random())];

console.log(randomWord);
document.onkeyup = function (event) {
    var keyPress = document.getElementById("keypress");

    var letterPressed = event.key;
};
console.log(event);