
var words = ["freddy" , "jason" , "pinhead" , "leatherface" , "chucky"]; //the word bank

var sWord ; //the secret word


// var remainingLetters = sWord.length ; 
// console.log(remainingLetters);

var wins = 0;   //wins
var losses = 0; //losses
var lives = 0;  //tries remaining
const maxTries = 9;   //max number of tries

var tWord = [] ;  //the word we are building to try and match the random word
var used = [] ; //array that stores the already used words

var sWord = words[Math.floor(Math.random() * words.length)]; //random word to be guessed
    console.log(sWord);

lives = maxTries;

// function game(){
//     document.getElementById("wins").innerText= wins;
//     var tWordText= "";
//     for(var j = 0; j < tWord.length; j++) {
//         tWordText += tWord[j];
//         console.log(tWordText);
//     }
  
//     document.getElementById("answer").innerText= tWordText;
//     document.getElementById("lives").innerText= lives;
//     document.getElementById("used").innerText= used;




function letsPlay(){
    document.onkeyup = function(event) {    
     var guess = event.key ;             //defines the letter being guessed via a key press
        console.log(guess) ;
        document.getElementById("used").append(guess);
        for(var k = 0; k < sWord.length; k++) {
            if (guess === sWord[k]) {
                console.log("its a match!");
                tWord.push(guess);
                console.log(tWord);
                wins++;
                console.log(wins);
    
            } else if ( guess !== sWord[k]) {
                console.log("no bueno");
                losses++;
                console.log(losses);
            };
        };
    };
    scoreKeep();
};

function scoreKeep(){
    document.getElementById("wins").innerText(wins);
}




//     if ( guess === secretWord.charAt(0)) {
//     console.log("its a match");
//     document.getElementById("answer").append(guess);
//     } else {
//         document.getElementById("used").append(guess);
//     }
   

// };





