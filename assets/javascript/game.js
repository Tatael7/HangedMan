
var words = ["fedddy" , "jason" , "pinhead" , "leatherface"]; //the word bank

 var sWord ;


// var remainingLetters = sWord.length ; 
// console.log(remainingLetters);

var wins = 0;
var losses = 0;
var lives = 0;
var maxTries = 9;

var tWord = [] ;  //the word we are building to try and match the random word
var used = [] ; //array that stores the already used words

function start() {
    lives = maxTries;
    console.log(lives);

    var sWord = words[Math.floor(Math.random() * words.length)]; //random word to be guessed
    console.log(sWord);

    used = [];
    tWord = [];

    for( var i = 0; i < sWord.length; i++) {
        tWord.push("_");
        console.log(tWord);
    }

    game();
};

function game(){
    document.getElementById("wins").innerText= wins;
    var tWordText= "";
    for(var j = 0; j <tWord.length; j++) {
        tWordText += tWord[j];
        console.log(tWordText);
    }
  
    document.getElementById("answer").innerText= tWordText;
    document.getElementById("lives").innerText= lives;
    document.getElementById("used").innerText= used;

};


// document.onkeyup = function(event) {    
//     var guess = event.key ;             //defines the letter being guessed via a key press
//     console.log(guess) ;
//     if ( guess === secretWord.charAt(0)) {
//     console.log("its a match");
//     document.getElementById("answer").append(guess);
//     } else {
//         document.getElementById("used").append(guess);
//     }
   

// };





