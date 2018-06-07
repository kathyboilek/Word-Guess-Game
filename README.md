# Word-Guess-Game
Similar to Hang Man 
Theme:  10 Must See Movies
Psuedo Code for game:

 Loop through the selected array of movies
    King Kong
    Sunset Boulevard
    laura
    The Searchers
    Dr Strangelove
    The Graduate
    Jaws
    Rocky
    ordinary people
    this is spinal tap
 Randomly select the word and store it in a variable
 Display the length of the word to the user using underscores
 User presses any key to start the game
 Loop through the string to find correct letter
    If key already has been pressed remove from guess
    else proceed with game
 If true
    Alert the user
    Increment by 1 after each iteration
    Continue running while win is still less than 11
    Check to see:
        Number of guesses remaining
        Letters already guessed
        Then replace dashes with letters
 If false 
    Alert the user
    Increment by 1 after each iteration
    Continue running while loss is still less than 11
    Check to see:
        Number of guesses remaining
        Letters already guessed
 If the win is equal to the length of the word, 
    Tell the user they won
 If the loss is greater than the number of underscores, 
    Tell the user they lost
 Loop to next randomly selected word





