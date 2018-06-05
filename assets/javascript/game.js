// VARIABLES

// Loop through the selected array of movies
var words = [
    "King Kong",
    "Sunset Boulevard",
    "The Searchers",
    "Dr Strangelove",
    "The Graduate",
    "Jaws",
    "Rocky",
    "This is Spinal Tap"];

var word = words[Math.floor(Math.random() * words.length)];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
    
// This function is run whenever the user presses a key.
// function keyListen(event) {
//     var x = event.key;
//     document.getElementById("game").innerHTML = "The pressed key was: " + x;
// }
//Make array for answer
var answerArray = [];
       for (var i = 0; i < word.length; i++) {
           answerArray[i] = "_";
       }
            //Show the progress of the game
function lettersRemaining() {
    return document.getElementById("letter-guessed").innerHTML
    //  = answerArray.join(" ");
 }

 //Create function to keep track of letter that remain to be guessed.
    var remainingLetters = word.length;
       while (remainingLetters>0){
         var lr = lettersRemaining();
            //start the game, user can start guessing
            var guess = prompt("guess or cancel");
            if (guess === null)
            {
            //exit the game when cancel is clicked
            break;
            }
        else if (guess.length !== 1)
        {
            alert("please enter one character");
        }
        else{
            //updte the game state with the guess
            for (var j=0; j<word.length; j ++)
            {
                if (word[j] === guess)
                {
                    answerArray[j]=guess;
                    remainingLetters --;
                }
                }
       }
       //end of game
    
    }
   
