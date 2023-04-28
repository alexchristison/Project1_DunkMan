# Alex's Project Overview

## Game Title is 'Dunk Man' 
- the purpose of the game is to guess the letters of a randomly generated word (think 'hangman')
- the user would have to guess the word's letters in six guesses or less (7 would equal the body of dunkman: 2 legs, body, 2 arms, head and a basketball he dunks on you)

## Images of Game: 

![Game Image #1](https://i.imgur.com/Dp5nm2m.png)
- here the red arrow placed on the image points to a randomly generated word (in this case it is "Litmus")

![Game Image #2](https://i.imgur.com/FsVqJhF.png)
- here the blue arrow and box show some functions when the player has clicked a letter (in this case "G") in then runs functions to see if it's true that the letter "g" is in the randomly generated word which is "Magpie" and then runs a function to push that letter into an array of correct letter (there is also an array for incorrectly guessed words)

![Game Image #3](https://i.imgur.com/sgiL2Qs.png)
- conversely to the the example from the previous image, this images shows what happens when incorrect letter guesses are made. In turn they are added to their own array of wrong guesses. When the number count of this array is equal to seven (as mentioned above the components of Dunk Man) the player loses. 

## Technologies used: 
- HTML, JS (CS to come)

## Getting started: 
A link to the game can be found here. 

https://alexchristison.github.io/Project1_DunkMan/

As illustrated in the images section, since the game is not fully functional on the front-end the user can view the functions of the game in the inspect feature of their Chrome browser and view the console. The user can then proceed to view the randomly generated word in the console, and click on letters that render in the webpage to confirm they are in the word. The user will be able to see that letters that are in the word will be added to an array, and that letters that are not in the word will be added to another array. Upon clicking all the letters in the word the user will see in the console that the game was won. Conversely, as they click on incorrect letters that are not in the word they can see that those letters are added to that corresponding array and once it reaches seven incorrect guesses the game is lost. 

## Next Steps: 
- to reach MVP for this game the following will be added: 
    - dashes/underscores will render on the webpage that correspond with the letters in the word
    - when letters are guessed correctly they will be shown in their correct position that corresponds to the dashes/underscore of that letter
    - for incorrect guesses strikes will appear incrementally (from 1st to 7th) denoting wrong guesses
    - ultimately the outcome of the game must render with a message ("you won", or "you lost")
    - the play again / reset button would be good, though currently refreshing achieves that goal