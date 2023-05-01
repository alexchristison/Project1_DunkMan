
/*------------Constants----------*/
/*--------App's state (variables)----------*/
 // randomWord - array of letters from randomWord
 let randomWord = '';
 // guessedLetters - (sring or array)
 const guessedLetters = [];
 // numberGuesses - int (guessed lettter lenght || incremented separately)
 const numberOfGuesses = guessedLetters.length;
 // wrongLetterGuesses - array 
 const wrongGuesses = [];
 // correctLetterGuesses - array 
 const correctGuesses = []; 
 // game over - boolean
 let gameOver = false;


// random array of six letter words
const items = ["albeit", "bedpan", "chalet", "dancer", "emails", "family", "galore", "haikus", "impugn", "jacked", "kibosh", "litmus", "magpie", "nachos", "ornery", "pacify", "quiver", "remand", "sacred", "thumbs", "uncles", "vowing", "walrus", "xyloid", "yanked", "zinger"];

// const correctLetter = [];
// const wrongLetter = [];
// const underScore = [];
// we commented out this console.log which had been generating the word from array of items (new console.log below)
// console.log(dunk6LetterWords(items));

function dunk6LetterWords(items){
    randomWord = items[Math.floor(Math.random()*items.length)]; 
    // here we console.log the randomWord from the array 'items'
    console.log(randomWord)
}
// in this line we call the word from the array of 'items'
dunk6LetterWords(items)

// STEPS OF THE GAME (assuming a random SIX letter word has been generated, ie: randomWord) ✅
// 1) display dashes (or underscores) representing each letter of randomWord (in our case it will be six) ✅
// 2) user clicks on any letter // this function checks the guessed letter (checkGuess) to see if it is in randomWord ✅
// 3) check to see if that letter is in the randomWord ✅
// 4) block out that letter from being chosen again (bad user experience to skip, but is it needed for MVP?) 
// 5) if the letter is in the randomWord's display of dashes/underscores show anywhere the letter is located in the randomWord (letter can obviously appear multiple times in a word)
// 6) if the letter is not in the randomWord count -1 point agaist user AND display part of an image of the DunkMan (2 legs, body, 2 arms, head, bball) (***for mvp-MVP can be it be a "wrong" counter??)
// 7) tally the -1 points against player
// 8) check and see if all letters in randomWord have been guessed correctly
// 9) check and see if user has made 7 incorrect guesses, ie: do they have -7 points (these represent 2 legs, body, 2 arms, head, bball)
// 10) if step 8 is true = user wins (display "winner" message)
// 11) if step 9 is true = user loses (display "loser" message)
// 12) if step 8 and 9 are false user clicks on any letter that has not already been clicked
// 13) repeat steps 2-11


// this function checks the guessed letter (checkGuess) to see if it is in randomWord
const checkGuess = (letter) => {
    // this specifically logs the random word
    console.log("Random Word inside checked guess", randomWord)
    // this specifically logs the letter
    console.log("the letter to check in CG", letter)
    // this specifically checks to see if the checkedGuess letter is in the randomWord (and makes specifically the letter to lower case)
    console.log("letter included?", randomWord.includes(letter.toLowerCase()))
    // to push a true (correct) guess into correctGuesses array
    if (randomWord.includes(letter.toLowerCase())) {
        correctGuesses.push(letter) 
        console.log("a correct guess", correctGuesses)
        //create new p element
        const p = document.createElement('p');
        // // show text of the letter
        p.textContent = letter;
        // // add the paragraph to container element with id "corect guesses"
        document.getElementById('correct-guesses').appendChild(p);

    }
    else if (!randomWord.includes(letter.toLowerCase())) {
        wrongGuesses.push(letter)
        console.log("an incorrect guess", wrongGuesses)
        // create new p element
        const p = document.createElement('p');
        // show text of letter
        p.textContent = letter;
        // add the paragraph to container element with id "wrong-guesses"
        document.getElementById('wrong-guesses').appendChild(p); 
    }
    // if (wrongGuesses === 7) {
    //     console.log("game over");
    // }
    // if (correctGuesses === 6) {
    //     console.log("you won")
    // }
    checkWin()
}

function checkWin() {
    if (wrongGuesses.length === 7) {
        console.log("game over");
        document.querySelector("h2").textContent = "GAME OVER!!!!!"
    }
    if (correctGuesses.length === 6) {
        console.log("you won");
        document.querySelector("h2").textContent = "YOU WIN!!!!!"
    }
}

const restartBtn = document.querySelector('.restart');
restartBtn.addEventListener('click', () => {
  location.reload();
});


/*------------Cashed elements------------*/
const letterButtonsEl = document.querySelector('#letters');

// const docUnderScore = document.getElementsByClassName(underScore);
// const docCorrectLetter = document.getElementsByClassName(correctLetter);
// const docWrongLettter = document.getElementsByClassName(wrongLetter);
/*-------------Event Listeners------------*/

// // this works for testing button!!! 
letterButtonsEl.addEventListener('click', function(event) {
    const buttonValue = event.target.textContent;

    console.log('Button clicked:', buttonValue);
    checkGuess(buttonValue)
});
