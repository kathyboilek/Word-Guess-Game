
//original code
    //The Game Loop
    while (remainingLetters>0){
        //Show the progress of the game
        function lettersRemaining() {
            return document.getElementById("game").innerHTML = answerArray.join(" ");
        }
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







function myFunction() {
    newFunction()("demo").innerHTML = "Paragraph changed.";
}

function newFunction() {
    return document.getElementById.innerHTML;
}


var remainingLetters = function() {
    while (remainingLetters>0){
        //Show the progress of the game
        function lettersRemaining() {
            return document.getElementById("game").innerHTML = answerArray.join(" ");
        }
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
}
remainingLetters();
};
  
