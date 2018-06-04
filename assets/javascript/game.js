// VARIABLES

// The array of movie names for the game.
var movies = ["King Kong",
    "Sunset Boulevard",
    "The Searchers",
    "Dr Strangelove",
    "The Graduate",
    "Jaws",
    "Rocky",
    "This is Spinal Tap"];

var remainingLetters = word.length;
        
//The playing loop
while (remainingLetters > 0) {
    //Show players progress
    alert("This is the number of remaining letters:\n" + answer.join(" "));

// Randomly select the word and store it in a variable
var movie = movies[Math.floor(Math.random() * movies.length)];    

// Display the length of the word to the user using underscores
var answer = [];
for (var i = 0; i < movie.length; i++) {
    answer[i] = "_";
}
           //Prompt player to guess
            var guess = prompt("Guess a letter or click 'Cancel' to stop the game.");
            if (prompt === null) {
                //Leave the game
                break;
            } else if (guess.length !== 1) {
                alert("Please enter one single letter.");
            } else {
                //Update match with guess
                for (var j = 0; j < movie.length; j++) {
                    if (movie[j] === guess) {
                        answer[j] = guess;
                        remainingLetters--;
                    }
                }
            }
            //End of playing loop
        }
        
        //Show answer and congratulate the player
        alert(answer.join(" "));
        alert("Good work! The right answer is " + movie);