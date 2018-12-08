var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var sLett ;
var guess;
var wins = 0;
var losses = 0;
var lives = 0;
var maxTries = 9;


function reset() {
    var sLet = letters [Math.floor(Math.random() * letters.length)]; //random letter to be guessed
    console.log(sLet);
    lives = maxTries;
    sLett = sLet;
};

function letsPlay(){
    
    document.onkeyup = function(event) {    
     var guess = event.key ;             //defines the letter being guessed via a key press
        console.log(guess) ;
        document.getElementById("used").append(guess);  

        if( guess === sLett) {
            console.log("cool");
            alert("Yay its a match");
            wins++;
            console.log(wins); 
            document.getElementById("tWins").innerText = wins;
            reset();
            
         
        } else if ( guess !== sLett) {
            console.log("oh no");
            lives--;
            console.log(lives);
            document.getElementById("tLives").innerText = lives;

            if ( lives === 0 ) {
                alert("oh no you lost");
                losses++;
                console.log(losses);
                document.getElementById("tLosses").innerText = losses;
                reset();
            };

        };
    }; 
};



