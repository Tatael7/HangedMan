var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var sLet = letters [Math.floor(Math.random() * letters.length)]; //random letter to be guessed
    console.log(sLet);

var wins = 0;
var losses = 0;
var lives = 0;
var maxTries = 9;


function start() {
    lives = maxTries;
    wins = [];
    losses = [];

}

function letsPlay(){
    document.onkeyup = function(event) {    
     var guess = event.key ;             //defines the letter being guessed via a key press
        console.log(guess) ;
    }
};