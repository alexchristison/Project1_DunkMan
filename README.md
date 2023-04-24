# DUNK MAN (an alternative to Space Man)

## If Dunk Man dunks ... You lost!

### The game is similar to the traditional game of hangman. The player is given a blank word and must guess which letters fill the character spaces before Dunk Man is able to dunk the ball. 
#### USER STORIES:
##### As a user I want ...
- the NEW game board to render the alphabet in buttons and a pole and hoop so I know it's time to play
- the NEW game board to display the the blank (empty) characters of a randomly generated word, or phrase so that I can guess which letters are in the word/phrase (for example if the word is "orange" the blank characters should be "_ _ _ _ _ _")
- to be able to guess letters "A to Z" using the letter buttons so that I know if the generated word/phrase has that letter in it, or not
- letters I guessed correctly to show up in the blank characters so I know if I guessed correctly (if I guessed "g" on "orange" it should show up as "_ _ _ _ g _")
- letter buttons I guessed correctly to turn green, and letters I guessed incorrectly to turn red so I can keep track of my guesses
- one of the seven visual components of DUNK MAN to appear each time I guess a letter incorrecly so that I know how I am progressing in the game (seven components = 1) leg, 2) other leg, 3) torso, 4) arm, 5) other arm, 6) head, 7) basketball) 
- to see a display of "YOU DEFEATED DUNK MAN" when I guess the word/phrase before the seven visual components of Dunk Man ALL appear so that I know that I won
- to see a display of "DUNK MAN WON" when I do not guess the word/phrase before the seven visual components of Dunk Man ALL appear to that I know that I lost

#### WIRE FRAMES:
Initial state view - this could be optional for MVP and could just start with "play a game" view screen??

![IMG_9656](https://media.git.generalassemb.ly/user/48482/files/68479bdd-344b-4067-99f4-974ae485260e)

Play a game view (word/phrase is randomly selected once user has clicked "play" button on initial screen and blank characters displayed on this screen)

![IMG_9657](https://media.git.generalassemb.ly/user/48482/files/f7ff960c-6099-474e-8a11-fef7bd455830)

Mid-game view (user has made three correct guesses and three incorrect guesses)

The correct guesses are noted as green on the letter buttons 

The incorrect guesses are noted as red on the letter buttons and a component of Dunk Man has appeared for each incorrect guess

![IMG_9659](https://media.git.generalassemb.ly/user/48482/files/0425316d-9dc4-4763-a5c3-9a260eca0c14)

User wins view:

Here two examples are shown. 

In the first example it took the user six incorrect guesses (only the ball is missing from Dunk Man... close call!)

In the second example it took the user three incorrect guesses (two legs and torso of Dunk Man are displayed)

![IMG_9661](https://media.git.generalassemb.ly/user/48482/files/1bff212b-a992-4dbc-8b21-cb6e709fe39f)

Dunk Man wins (aka user loses) view: 

Here all components of dunk man are visible - the ball being the last component to display on the seventh incorrect user guess

![IMG_9663](https://media.git.generalassemb.ly/user/48482/files/76cda90e-3d85-47e7-957f-02a301df421d)

For our MVP we would likely include a "RE-SET/PLAY-AGAIN" button on all screens except initial state

#### Psuedo-Code

/*----- constants -----*/

- the game title will render 
- the buttons for the alphabet will render (a-z) 
- the image for the basketball pole and basketball hoop will render
- the button to pick a random word/phrase from an array of words will render



/*----- app's state (variables) -----*/

- when new game button is clicked a random word/phrase from an array of words will be chosen, but will not be visible to the user (only the corresponding dashes will be visible - eg: word randomly picked is "orange" then "_ _ _ _ _ _" will display) 
- when the player clicks on a button from the alphabet if the guess is in the word then that letter displays in the dashes and also the button of that letter turns to green (from white), but if the letter is not in the word the button of that letter turns red and a component of the Dunk Man appears (leg first) 
- the above proces repeats until either the user wins, or the computer wins 
- goalMet ---> stop the game if the goal number is reached  (in this case p wins if less than 7 incorrect guesses and computer wins if 7 incorrect guesses (/ ' ', 'p', 'c')
//end with word is guessed or not guessed 
let goalMet

/*----- cached element references -----*/

// this is where I'll put stuff from my HTML 
// these are direct references to our score display elements
// here are our results elements


/*----- event listeners -----*/

// we're going to have a handle click function that manages all user interaction.
// basically do all the letter choice stuff (or start/re-start new game) when a button in clicked.


/*----- functions -----*/

// initializer function is going to set up our initial state
// calls the render function
// render function will change what is displayed to the user

- user click on a letter
  - log the letter as out of play 
  - check if letter is in random word
    -if yes, the following happen:
      -no component of Dunk Man appears 
      -the letton button that was clicked turns green
    -if no, the following happens: 
      -a component of Dunk Man appears
        -first wrong guess: left leg, AND -1 points logged
        -second wrong guess: right leg AND -2 points logged
        -third wrong guess: torso AND -3 points logged
        -fourth wrong guess: left arm AND -4 points logged
        -fifth wrong guess: right arm AND -5 points logged
        -sixth wrong guess: head AND -6 points logged
        -seventh wrong guess: basketball AND -7 points logged
  - after each letter click game checks to see if score 
    -if score > -6 points keep playing
    -if score = -7 points ---> Game over, Dunk Man (computer) beat user
  - after each letter click game checks to see if all the letters in the word have been chosen
    -if not, keep playing
    -if yes, user wins, they beat Dunk Man
  - any typle of win displays who won
  - "re-set: new game button is ALWAYS available (after user wins, after computer wins, or even during a game) 
    -when clicked a new random word from the array of words is randomly chosen and game re-starts



#### CALLOUT FOR USER TESTING: An aside on user-testing *** w/ initial wireframes included 
The original intent had been for Dunk Man to do a dunk if the user won (and had included the pole and the hoop as components in addition to legs, torso, arms, head and ball) so for a total of nine guesses. However, during user testing with three different groups of 2-4 people it became clear that the user experience was faulty if adding pieces to Dunk Man meant a win. Dunk Man had originally been the user, but user testing revealed Dunk Man is the computer, and the user's opponent.  

As you can see here Dunk Man had components added if you guessed the CORRECT letters within nine guesses (and woruld "You Beat Dunk Man" if you made the entire Dunk Man image)..... so if a word has more than nine unique characters it would be impossible to win. 

Both of these images were used in actual user testing: 

![IMG_9650](https://media.git.generalassemb.ly/user/48482/files/83d5d1e8-6abb-4deb-8cb7-085291968efd)

![IMG_9651](https://media.git.generalassemb.ly/user/48482/files/47a76c3a-c202-40c2-bee6-0f3ad48f62a3)

The value of user testing was significant as it lead to the conclusion that building Dunk Man with correct guesses would require no more than seven (or nine) correctly guessed letters. Doing so would result in a poor user experience if a word to be guessed had eight/ten or more different lettters (depending if pole/hoop were hard-coded into game) # Project1_DunkMan
